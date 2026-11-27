/* Enregistre chaque page consultée (appelé par le site à chaque changement de page). */
import { put } from "@vercel/blob";
import { utilisateur, lieu } from "./_commun.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  let body = req.body || {};
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const t = new Date().toISOString();
  const rec = { t, u: utilisateur(req), page: String(body.p || "#accueil").slice(0, 200), titre: String(body.titre || "").slice(0, 200),
                source: String(body.r || "").slice(0, 200), ecran: String(body.e || "").slice(0, 20), ...lieu(req) };
  try {
    await put(`visites/${t.replace(/[:.]/g, "-")}.json`, JSON.stringify(rec), { access: "public", addRandomSuffix: true, contentType: "application/json" });
    res.status(204).end();
  } catch (e) { res.status(500).json({ erreur: String(e.message || e) }); }
}
