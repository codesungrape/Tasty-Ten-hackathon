const apiRequest = "https://api.api-ninjas.com/v1/recipe";
const key = process.env.NEXT_PUBLIC_API_KEY;

export default async function handler(req, res) {
  const { query } = req.query;
  try {
    const response = await fetch(`${apiRequest}?query=${query}`, {
      headers: {
        "x-api-key": key,
      },
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
