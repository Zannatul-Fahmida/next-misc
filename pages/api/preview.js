export default function handler(req, res) {
  res.setPreviewData({
    user: "Priya",
  });
  res.redirect(req.query.redirect);
}
