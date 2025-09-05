export default async function handler(req, res) {
  const query = req.query.q || "All";
  const language = req.query.language || "en";
  const page = req.query.page || 1;

  try {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=${language}&page=${page}&sortBy=publishedAt&apiKey=${process.env.NEWS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
