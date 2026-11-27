export function utilisateur(req) {
  const h = req.headers.authorization || "";
  if (!h.startsWith("Basic ")) return "";
  const txt = Buffer.from(h.slice(6), "base64").toString("utf8");
  return txt.slice(0, txt.indexOf(":")).trim().toLowerCase();
}
export function lieu(req) {
  const h = req.headers, d = v => { try { return decodeURIComponent(v || ""); } catch { return v || ""; } };
  return { ville: d(h["x-vercel-ip-city"]), region: d(h["x-vercel-ip-country-region"]), pays: h["x-vercel-ip-country"] || "",
           ip: String(h["x-forwarded-for"] || "").split(",")[0].trim(), ua: h["user-agent"] || "" };
}
