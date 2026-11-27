/* =====================================================================
   Le site est visible par tous. Seul le CONTENU des leçons (dossier contenu/)
   et les vidéos (media/videos/) sont réservés aux abonnés connectés,
   sauf les leçons gratuites (voir outils/generer-apercus.mjs).
   ===================================================================== */
import { lireJeton, cookie } from "./lib/session.js";
import { PUBLICS } from "./lib/publics.js";

export const config = { matcher: ["/contenu/:path*", "/media/videos/:path*"] };

export default async function middleware(request) {
  const chemin = new URL(request.url).pathname;
  if (PUBLICS.includes(chemin)) return;                       // aperçus et leçons gratuites
  const user = await lireJeton(cookie(request.headers.get("cookie"), "ll_session"));
  if (user) return;                                            // abonné connecté
  return new Response("Contenu réservé aux abonnés LE LAPLACIEN.", { status: 401,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });
}
