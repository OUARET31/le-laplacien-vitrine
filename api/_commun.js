import { lireJeton, cookie } from "../lib/session.js";
export async function utilisateur(req) {
  return (await lireJeton(cookie(req.headers.cookie, "ll_session"))) || "";
}
export function lieu(req) {
  const h = req.headers, d = v => { try { return decodeURIComponent(v || ""); } catch { return v || ""; } };
  return { ville: d(h["x-vercel-ip-city"]), region: d(h["x-vercel-ip-country-region"]), pays: h["x-vercel-ip-country"] || "",
           ip: String(h["x-forwarded-for"] || "").split(",")[0].trim(), ua: h["user-agent"] || "" };
}
export async function noter(prefixe, rec) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return;
  const { put } = await import("@vercel/blob");
  try { await put(`${prefixe}/${rec.t.replace(/[:.]/g, "-")}.json`, JSON.stringify(rec), { access: "public", addRandomSuffix: true, contentType: "application/json" }); } catch {}
}
export async function corps(req) {
  let b = req.body || {};
  if (typeof b === "string") { try { b = JSON.parse(b); } catch { b = {}; } }
  return b;
}
