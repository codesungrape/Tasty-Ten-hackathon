// Need to rethink how we're making this request, as we need to recieve stuff fron the frontend
const apiRequest = "https://api.api-ninjas.com/v1/recipe?query=beef";

// Not good to do it like this, needs to be in .env file
const key = "ggk2eJlpw80bGUMPF16PBg==pVDmA2VuvXcXXLdC";

export default async function handler(req, res) {
  try {
    const response = await fetch(apiRequest, {
      headers: {
        "x-api-key": key,
      },
    });
    const data = await response.json();

    // return the response
    /* return new Response(JSON.stringify(data), { status: 200 }); */

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
