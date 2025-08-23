export async function GET() {
  const res = await fetch("https://backend-nextjs-virid.vercel.app/api/users");
  const data = await res.json();
  return Response.json(data);
}