export async function DELETE(request, { params }) {
  const { id } = params;
  const res = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`, {
    method: "DELETE",
    headers: { Accept: "application/json" },
  });
  const data = await res.json();
  return Response.json(data);
}
