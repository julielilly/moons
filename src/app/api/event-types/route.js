const USER_URL =
  "https://api.calendly.com/users/48aafee6-9816-457a-b3fe-cbc1dbabce2f"; // the URL for the user

// fetches event types from the Calendly API
export async function GET() {
  const res = await fetch(
    `https://api.calendly.com/event_types?user=${USER_URL}`, // the API endpoint to fetch event types
    {
      headers: {
        // authorization header with the API key
        Authorization: `Bearer ${process.env.CALENDLY_API_KEY}`,
      },
    },
  );

  const data = await res.json(); //  parse the JSON response into a JavaScript object

  return Response.json(data.collection); // return only the collection array of event types
}
