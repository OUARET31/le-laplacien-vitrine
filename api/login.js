/* Connexion d'un abonné : vérifie l'identifiant et le mot de passe (variable ACCES) et pose le cookie de session. */
import { creerJeton, comptes } from "../lib/session.js";
import { lieu, noter, corps } from "./_commun.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const b = await corps(req), u = String(b.u || "").trim().toLowerCase(), p = String(b.p || "");
  const ok = comptes().some(([cu, cp]) => cu === u && cp === p);
  const t = new Date().toISOString();
  await noter(ok ? "connexions" : "refus", { t, u, page: ok ? "connexion réussie" : "mot de passe refusé", ...lieu(req) });
  if (!ok) return res.status(401).json({ ok: false });
  const jeton = await creerJeton(u), age = 30 * 86400;
  res.setHeader("Set-Cookie", [
    `ll_session=${jeton}; Path=/; Max-Age=${age}; HttpOnly; Secure; SameSite=Lax`,
    `ll_membre=1; Path=/; Max-Age=${age}; Secure; SameSite=Lax`,
    `ll_user=${encodeURIComponent(u)}; Path=/; Max-Age=${age}; Secure; SameSite=Lax`]);
  res.status(200).json({ ok: true, u });
}
