// app/api/handleData/route.js
const apiRequest = "https://api.api-ninjas.com/v1/recipe";
const key = process.env.API_KEY;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url); // create a URL object from the JS URL class
    const query = searchParams.get("query");

    if (!query) {
      return Response.json(
        { error: "Query parameter is required" },
        { status: 400 }
      );
    }

    if (!key) {
      console.error("API key is missing");
      return Response.json(
        { error: "API configuration error" },
        { status: 500 }
      );
    }

    const apiUrl = `${apiRequest}?query=${encodeURIComponent(query)}`; // converts special characters (like spaces, &, ?, %, etc.) into URL-safe formats
    console.log("Fetching from:", apiUrl);

    const response = await fetch(apiUrl, {
      headers: {
        "x-api-key": key,
      },
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      return Response.json({ message: "No results found" }, { status: 404 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      { error: error.message || "Failed to fetch data" },
      { status: 500 }
    );
  }
}
