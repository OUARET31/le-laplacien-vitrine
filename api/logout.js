export default function handler(req, res) {
  res.setHeader("Set-Cookie", ["ll_session=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax", "ll_membre=; Path=/; Max-Age=0", "ll_user=; Path=/; Max-Age=0"]);
  res.status(200).json({ ok: true });
}
