/* Enregistre chaque page consultée (appelé par le site à chaque changement de page). */
import { utilisateur, lieu, noter, corps } from "./_commun.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const body = await corps(req), t = new Date().toISOString();
  await noter("visites", { t, u: (await utilisateur(req)) || "visiteur", page: String(body.p || "#accueil").slice(0, 200), titre: String(body.titre || "").slice(0, 200),
                source: String(body.r || "").slice(0, 200), ecran: String(body.e || "").slice(0, 20), ...lieu(req) });
  res.status(204).end();
}
