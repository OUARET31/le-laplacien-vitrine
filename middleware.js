/* =====================================================================
   ACCÈS RÉSERVÉ : tout le site demande un identifiant et un mot de passe.
   Les comptes sont définis dans Vercel → Settings → Environment Variables,
   variable ACCES, au format :  prenom:motdepasse,prenom2:motdepasse2
   ===================================================================== */
import { put } from "@vercel/blob";

export const config = { matcher: "/:path*" };

function comptes() {
  return (process.env.ACCES || "").split(",").map(s => s.trim()).filter(s => s.includes(":"))
    .map(s => { const i = s.indexOf(":"); return [s.slice(0, i).trim().toLowerCase(), s.slice(i + 1)]; });
}

function lire(header) {
  if (!header || !header.startsWith("Basic ")) return null;
  try {
    const txt = new TextDecoder().decode(Uint8Array.from(atob(header.slice(6)), c => c.charCodeAt(0)));
    const i = txt.indexOf(":");
    return { u: txt.slice(0, i).trim().toLowerCase(), p: txt.slice(i + 1) };
  } catch { return null; }
}

const PAGE = `<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>LE LAPLACIEN</title>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#121a33;color:#fff;font-family:system-ui,sans-serif;text-align:center">
<div><div style="width:72px;height:72px;margin:0 auto 18px;border-radius:20px;background:linear-gradient(145deg,#ffd98a,#f2b134);color:#121a33;display:grid;place-items:center;font:700 36px Georgia,serif">∇²</div>
<h1 style="margin:0 0 8px;letter-spacing:.08em">LE LAPLACIEN</h1><p style="opacity:.75">Site en préparation — accès réservé.</p></div></body></html>`;

export default async function middleware(request) {
  const id = lire(request.headers.get("authorization"));
  if (id && comptes().some(([u, p]) => u === id.u && p === id.p)) return; // accès autorisé : on continue
  if (id && process.env.BLOB_READ_WRITE_TOKEN) {
    // tentative avec un mauvais mot de passe : on la note (sans enregistrer le mot de passe)
    const h = request.headers, t = new Date().toISOString();
    const rec = { t, u: id.u, chemin: new URL(request.url).pathname, ville: decodeURIComponent(h.get("x-vercel-ip-city") || ""),
      pays: h.get("x-vercel-ip-country") || "", ip: (h.get("x-forwarded-for") || "").split(",")[0].trim(), ua: h.get("user-agent") || "" };
    try { await put(`refus/${t.replace(/[:.]/g, "-")}.json`, JSON.stringify(rec), { access: "public", addRandomSuffix: true, contentType: "application/json" }); } catch {}
  }
  return new Response(PAGE, { status: 401, headers: {
    "WWW-Authenticate": 'Basic realm="LE LAPLACIEN - acces reserve", charset="UTF-8"',
    "Content-Type": "text/html; charset=utf-8", "X-Robots-Tag": "noindex, nofollow", "Cache-Control": "no-store" } });
}
