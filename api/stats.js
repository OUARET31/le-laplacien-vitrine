/* Page des statistiques : www.lelaplacien.fr/stats (réservée à l'administrateur). */
import { list, get } from "@vercel/blob";
import { utilisateur } from "./_commun.js";
import { admins } from "../lib/session.js";

const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const appareil = ua => {
  const os = /iPhone|iPad/.test(ua) ? "iPhone/iPad" : /Android/.test(ua) ? "Android" : /Windows/.test(ua) ? "Windows" : /Mac OS/.test(ua) ? "Mac" : /Linux/.test(ua) ? "Linux" : "?";
  const nav = /Edg\//.test(ua) ? "Edge" : /OPR\//.test(ua) ? "Opera" : /Firefox\//.test(ua) ? "Firefox" : /Chrome\//.test(ua) ? "Chrome" : /Safari\//.test(ua) ? "Safari" : "?";
  return `${nav} · ${os}`;
};
const quand = t => new Date(t).toLocaleString("fr-FR", { timeZone: "Europe/Paris", dateStyle: "short", timeStyle: "medium" });
const pageLisible = p => { const h = String(p).replace(/^#/, ""); if (!h || h === "accueil") return "Accueil";
  const [r, s] = h.split("--"); return s ? `${r} › ${s.replace(/^m-/, "").replace(/-/g, " ")}` : r; };

async function tout(prefix, max) {
  let blobs = [], cursor;
  do { const r = await list({ prefix, cursor, limit: 1000 }); blobs = blobs.concat(r.blobs); cursor = r.hasMore ? r.cursor : null; } while (cursor && blobs.length < 5000);
  blobs.sort((a, b) => new Date(b.uploadedAt) - new Date(a.uploadedAt));
  const sel = blobs.slice(0, max);
  const recs = await Promise.all(sel.map(async b => { try { const r = await get(b.pathname, { access: "private" }); return await new Response(r.stream).json(); } catch { return null; } }));
  return { total: blobs.length, recs: recs.filter(Boolean) };
}

export default async function handler(req, res) {
  const u = await utilisateur(req);
  if (!u || !admins().includes(u)) return res.status(403).setHeader("Content-Type","text/html; charset=utf-8").send('<p style="font-family:sans-serif">Page réservée à l\'administrateur. <a href="/#connexion">Se connecter</a></p>');
  let v, f, c, ab;
  try { [v, f, c, ab] = await Promise.all([tout("visites/", 400), tout("refus/", 100), tout("connexions/", 100), tout("abonnements/", 200)]); } catch (e) { return res.status(500).send("Stockage des statistiques indisponible : " + esc(e.message || e)); }
  const now = Date.now(), j1 = v.recs.filter(r => now - new Date(r.t) < 864e5);
  const compte = (arr, k) => Object.entries(arr.reduce((m, r) => (m[k(r)] = (m[k(r)] || 0) + 1, m), {})).sort((a, b) => b[1] - a[1]);
  const top = (arr, k, n = 8) => compte(arr, k).slice(0, n).map(([a, b]) => `<li><span>${esc(a || "—")}</span><b>${b}</b></li>`).join("");
  const carte = (t, n) => `<div class="c"><b>${n}</b><span>${t}</span></div>`;
  const ligne = r => `<tr><td>${esc(quand(r.t))}</td><td><b>${esc(r.u || "—")}</b></td><td>${esc(pageLisible(r.page || r.chemin))}</td>
    <td>${esc([r.ville, r.region, r.pays].filter(Boolean).join(", ") || "—")}</td><td>${esc(appareil(r.ua || ""))}${r.ecran ? " · " + esc(r.ecran) : ""}</td><td class="ip">${esc(r.ip)}</td></tr>`;
  res.setHeader("Content-Type", "text/html; charset=utf-8"); res.setHeader("Cache-Control", "no-store"); res.setHeader("X-Robots-Tag", "noindex");
  res.send(`<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Statistiques — LE LAPLACIEN</title>
<style>body{margin:0;font-family:system-ui,sans-serif;background:#f4f5fa;color:#121a33}header{background:#121a33;color:#fff;padding:22px 5vw;display:flex;align-items:center;gap:14px}
.mk{width:44px;height:44px;border-radius:12px;background:linear-gradient(145deg,#ffd98a,#f2b134);color:#121a33;display:grid;place-items:center;font:700 22px Georgia,serif}
main{padding:24px 5vw}.cs{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:14px;margin-bottom:22px}.c{background:#fff;border-radius:16px;padding:16px 18px;box-shadow:0 6px 18px -12px #121a33}
.c b{display:block;font-size:30px}.c span{color:#5b6275;font-size:14px}.g{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:14px;margin-bottom:22px}
.box{background:#fff;border-radius:16px;padding:14px 18px;box-shadow:0 6px 18px -12px #121a33}.box h3{margin:4px 0 10px;font-size:15px}.box ul{list-style:none;margin:0;padding:0}
.box li{display:flex;justify-content:space-between;padding:5px 0;border-bottom:1px solid #eef0f6;font-size:14px}table{width:100%;border-collapse:collapse;background:#fff;border-radius:16px;overflow:hidden;font-size:14px}
th{background:#121a33;color:#fff;text-align:left;padding:10px}td{padding:9px 10px;border-bottom:1px solid #eef0f6;vertical-align:top}tr:hover td{background:#f8f9fd}.ip{color:#8a90a2;font-family:monospace}
h2{margin:28px 0 12px}.wrap{overflow:auto}</style>
<header><span class="mk">∇²</span><div><b style="letter-spacing:.08em">LE LAPLACIEN</b><br><small style="opacity:.7">Statistiques de consultation — heure de Paris</small></div></header>
<main><div class="cs">${carte("pages vues au total", v.total)}${carte("pages vues (24 h)", j1.length)}${carte("personnes différentes", new Set(v.recs.map(r => r.u)).size)}${carte("pays", new Set(v.recs.map(r => r.pays).filter(Boolean)).size)}${carte("visiteurs non abonnés (pages)", v.recs.filter(r => r.u === "visiteur").length)}${carte("connexions d'abonnés", c.total)}${carte("inscrits liste d'attente", ab.total)}${carte("connexions refusées", f.total)}</div>
<div class="g"><div class="box"><h3>Qui consulte</h3><ul>${top(v.recs, r => r.u)}</ul></div><div class="box"><h3>D'où</h3><ul>${top(v.recs, r => [r.ville, r.pays].filter(Boolean).join(", "))}</ul></div>
<div class="box"><h3>Pages les plus vues</h3><ul>${top(v.recs, r => pageLisible(r.page))}</ul></div><div class="box"><h3>Appareils</h3><ul>${top(v.recs, r => appareil(r.ua || ""))}</ul></div></div>
<h2>Dernières consultations</h2><div class="wrap"><table><tr><th>Date et heure</th><th>Qui</th><th>Page</th><th>Lieu</th><th>Appareil</th><th>Adresse IP</th></tr>${v.recs.map(ligne).join("") || '<tr><td colspan="6">Aucune visite pour l\'instant.</td></tr>'}</table></div>
<h2>Liste d'attente des abonnements (e-mails)</h2><div class="wrap"><table><tr><th>Date et heure</th><th>E-mail</th><th>Formule</th><th>Lieu</th><th>Appareil</th><th>Adresse IP</th></tr>${ab.recs.map(ligne).join("") || '<tr><td colspan="6">Aucune inscription.</td></tr>'}</table></div>
<h2>Connexions des abonnés</h2><div class="wrap"><table><tr><th>Date et heure</th><th>Qui</th><th>Résultat</th><th>Lieu</th><th>Appareil</th><th>Adresse IP</th></tr>${c.recs.map(ligne).join("") || '<tr><td colspan="6">Aucune.</td></tr>'}</table></div>
<h2>Connexions refusées (mauvais mot de passe)</h2><div class="wrap"><table><tr><th>Date et heure</th><th>Identifiant tapé</th><th>Page</th><th>Lieu</th><th>Appareil</th><th>Adresse IP</th></tr>${f.recs.map(ligne).join("") || '<tr><td colspan="6">Aucune.</td></tr>'}</table></div>
<p style="color:#8a90a2;font-size:13px;margin-top:20px">Le lieu est estimé à partir de l'adresse IP (précision : ville ou région). Les 400 dernières pages vues sont détaillées.</p></main></html>`);
}
