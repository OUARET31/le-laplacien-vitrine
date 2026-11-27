/* Sessions des abonnés : cookie signé ll_session = base64url(identifiant).expiration.signature */
const enc = new TextEncoder();
const cle = () => process.env.SESSION_SECRET || process.env.ACCES || "";
const b64u = s => btoa(unescape(encodeURIComponent(s))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const deb64u = s => decodeURIComponent(escape(atob(s.replace(/-/g, "+").replace(/_/g, "/"))));
async function signer(txt) {
  const k = await crypto.subtle.importKey("raw", enc.encode(cle()), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", k, enc.encode(txt));
  return [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
}
export async function creerJeton(user, jours = 30) {
  const exp = Math.floor(Date.now() / 1000) + jours * 86400, base = `${b64u(user)}.${exp}`;
  return `${base}.${await signer(base)}`;
}
export async function lireJeton(jeton) {
  if (!jeton || !cle()) return null;
  const [u, exp, sig] = jeton.split(".");
  if (!u || !exp || !sig || +exp < Date.now() / 1000) return null;
  if ((await signer(`${u}.${exp}`)) !== sig) return null;
  try { return deb64u(u); } catch { return null; }
}
export function cookie(cookies, nom) {
  const m = String(cookies || "").match(new RegExp("(?:^|;\\s*)" + nom + "=([^;]+)"));
  return m ? decodeURIComponent(m[1]) : "";
}
export function comptes() {
  return (process.env.ACCES || "").split(",").map(s => s.trim()).filter(s => s.includes(":"))
    .map(s => { const i = s.indexOf(":"); return [s.slice(0, i).trim().toLowerCase(), s.slice(i + 1)]; });
}
export function admins() {
  return (process.env.ADMIN || (comptes()[0] || [""])[0]).split(",").map(s => s.trim().toLowerCase()).filter(Boolean);
}
