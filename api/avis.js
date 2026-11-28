/* Avis des abonnés : GET = liste publique ; POST = publier (abonné connecté) ; DELETE = supprimer (administrateur). */
import { list, get, put, del } from "@vercel/blob";
import { utilisateur, corps } from "./_commun.js";
import { admins } from "../lib/session.js";

async function lire() {
  const { blobs } = await list({ prefix: "avis/", limit: 1000 });
  const recs = await Promise.all(blobs.map(async b => { try { const r = await get(b.pathname, { access: "private" }); return { ...(await new Response(r.stream).json()), id: b.pathname }; } catch { return null; } }));
  return recs.filter(Boolean).sort((a, b) => new Date(b.t) - new Date(a.t));
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  const u = await utilisateur(req);
  try {
    if (req.method === "GET") {
      const avis = await lire();
      return res.status(200).json({ avis: avis.map(a => ({ id: a.id, t: a.t, nom: a.nom, note: a.note, texte: a.texte, niveau: a.niveau })), admin: admins().includes(u) });
    }
    if (req.method === "POST") {
      if (!u) return res.status(401).json({ erreur: "Connecte-toi pour laisser un avis." });
      const b = await corps(req), note = Math.max(1, Math.min(5, parseInt(b.note) || 0)), texte = String(b.texte || "").trim().slice(0, 600);
      if (texte.length < 10) return res.status(400).json({ erreur: "Écris au moins quelques mots." });
      const t = new Date().toISOString();
      await put(`avis/${t.replace(/[:.]/g, "-")}.json`, JSON.stringify({ t, nom: u.charAt(0).toUpperCase() + u.slice(1), note, texte, niveau: String(b.niveau || "").slice(0, 40) }),
                { access: "private", addRandomSuffix: true, contentType: "application/json" });
      return res.status(201).json({ ok: true });
    }
    if (req.method === "DELETE") {
      if (!admins().includes(u)) return res.status(403).end();
      const id = String((req.query || {}).id || "");
      if (!id.startsWith("avis/")) return res.status(400).end();
      await del(id); return res.status(200).json({ ok: true });
    }
    res.status(405).end();
  } catch (e) { res.status(500).json({ erreur: String(e.message || e) }); }
}
