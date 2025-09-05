export default async function handler(req, res) {
  try {
    // Extract query params from URL
    const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
    const query = searchParams.get("q") || "All";
    const language = searchParams.get("language") || "en";
    const page = searchParams.get("page") || 1;

    // Use environment variable
    const apiKey = process.env.VITE_NEWS_API_KEY;

    if (!apiKey) {
      throw new Error("API key is missing! Did you set VITE_NEWS_API_KEY in Vercel?");
    }

    // Call NewsAPI
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&language=${language}&page=${page}&sortBy=publishedAt&apiKey=${apiKey}`
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
