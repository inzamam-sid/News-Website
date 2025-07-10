export default async function handler(req, res) {
  const { query } = req.query;

  const apiKey = process.env.NEWS_API_KEY; // You will add this in Vercel settings

  const url = `https://newsapi.org/v2/everything?q=${query}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching news:", error);
    res.status(500).json({ error: "Failed to fetch news" });
  }
}
