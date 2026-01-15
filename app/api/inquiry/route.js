export async function POST(request) {
  const formData = await request.formData();

  // Build an object that preserves multi-select values (e.g., checkboxes).
  const data = {};
  for (const [key, value] of formData.entries()) {
    if (data[key] === undefined) data[key] = value;
    else if (Array.isArray(data[key])) data[key].push(value);
    else data[key] = [data[key], value];
  }

  // TODO: Wire this to your real email service / CRM.
  // For now, we simply log and return a friendly JSON response.
  console.log("[Inquiry]", data);

  return Response.json({ ok: true });
}
