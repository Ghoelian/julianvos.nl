export const runtime = "edge";

export async function GET(request: Request) {
  const response = await fetch(
    "https://matrix.julianvos.nl/.well-known/matrix/client"
  );

  if (!response.ok) {
    return new Response(JSON.stringify(null), {
      headers: { "Content-Type": "application/json" },
    });
  }

  const body = await response.json();

  return new Response(JSON.stringify(body), {
    headers: { "Content-Type": "application/json" },
  });
}
