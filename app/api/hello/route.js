export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "world";
  return Response.json({ message: `hello, ${name}` });
}
