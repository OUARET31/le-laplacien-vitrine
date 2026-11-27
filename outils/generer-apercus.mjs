/* =====================================================================
   Génère, à partir des fichiers de contenu :
   - contenu/apercu.js  : objectifs + début du cours de chaque leçon (visible par tous)
   - contenu/gratuit.js : leçons gratuites complètes (visibles par tous)
   - lib/publics.js     : liste des fichiers accessibles sans abonnement
   À relancer après chaque modification de contenu : node outils/generer-apercus.mjs
   ===================================================================== */
import fs from "fs"; import vm from "vm";
const GRATUITES = [
  ["6e", "mathematiques", "Les fractions"], ["6e", "physique-chimie", "Les états de l'eau"], ["6e", "svt", "Les besoins des plantes"],
  ["ing1", "python", "Installer Python et écrire son premier programme"], ["ing1", "langage-c", "Compiler son premier programme"]];
const html = fs.readFileSync("index.html", "utf8");
const fichiers = JSON.parse(html.match(/window\.FICHIERS_CONTENU = (\[[^\]]*\])/)[1]);
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
for (const f of fichiers) vm.runInContext(fs.readFileSync(f, "utf8"), ctx, { filename: f });
const C = ctx.CONTENU, ap = {}, gr = {}, slug = t => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const publics = ["/contenu/_outils.js", "/contenu/apercu.js", "/contenu/gratuit.js"];
for (const a in C) for (const m in C[a]) for (const t in C[a][m]) {
  const c = C[a][m][t]; if (!c.cours) continue;
  const parts = String(c.cours).trim().split(/\n(?=### )/); let intro = parts[0];
  if (intro.length > 700) intro = intro.slice(0, intro.lastIndexOf("\n", 700) > 200 ? intro.lastIndexOf("\n", 700) : 700);
  const nEx = (c.exercices || []).length + Object.values(c.niveaux || {}).reduce((s, x) => s + x.length, 0);
  ((ap[a] ??= {})[m] ??= {})[t] = { objectifs: c.objectifs || [], intro, sections: parts.map(p => (p.match(/^### (.+)/) || [])[1]).filter(Boolean),
    nQuiz: (c.quiz || []).length, nExos: nEx, nHP: (c.poudlard || []).length, video: !!(c.videos && c.videos.length) };
}
for (const [a, m, t] of GRATUITES) {
  const c = C[a]?.[m]?.[t]; if (!c) { console.log("introuvable :", a, m, t); continue; }
  ((gr[a] ??= {})[m] ??= {})[t] = c;
  (c.videos || []).forEach(v => v.src && publics.push("/" + v.src.replace(/^\//, "")));
}
const entete = "/* FICHIER GÉNÉRÉ AUTOMATIQUEMENT par outils/generer-apercus.mjs — ne pas modifier à la main. */\n";
fs.writeFileSync("contenu/apercu.js", entete + "window.APERCU = " + JSON.stringify(ap) + ";\n");
fs.writeFileSync("contenu/gratuit.js", entete + "window.CONTENU = window.CONTENU || {};\n" +
  Object.entries(gr).flatMap(([a, ms]) => Object.entries(ms).map(([m, ls]) => `AJOUTE(${JSON.stringify(a)}, ${JSON.stringify(m)}, ${JSON.stringify(ls)});`)).join("\n") +
  "\nwindow.GRATUIT = " + JSON.stringify(GRATUITES.map(x => x.join("|"))) + ";\n");
fs.writeFileSync("lib/publics.js", entete + "export const PUBLICS = " + JSON.stringify(publics, null, 1) + ";\n");
console.log("aperçus :", Object.values(ap).flatMap(Object.values).flatMap(Object.keys).length, "· gratuites :", GRATUITES.length, "· fichiers publics :", publics.length);
