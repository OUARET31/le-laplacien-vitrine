/* Liste d'attente : un visiteur laisse son e-mail pour être prévenu de l'ouverture des abonnements. */
import { lieu, noter, corps } from "./_commun.js";
export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const b = await corps(req), email = String(b.email || "").trim().slice(0, 120);
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return res.status(400).json({ ok: false });
  await noter("abonnements", { t: new Date().toISOString(), u: email, page: "liste d'attente · " + String(b.formule || "").slice(0, 40), ...lieu(req) });
  res.status(200).json({ ok: true });
}
