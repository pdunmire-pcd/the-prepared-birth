export async function POST(request) {
  const formData = await request.formData();

  // Build an object that preserves multi-select values (e.g., checkboxes).
  const data = {};
  for (const [key, value] of formData.entries()) {
    if (data[key] === undefined) data[key] = value;
    else if (Array.isArray(data[key])) data[key].push(value);
    else data[key] = [data[key], value];
  }

  console.log("[Inquiry] Data received:", data);

  try {
    console.log("[Inquiry] Sending to Formspree...");
    
    const response = await fetch('https://formspree.io/f/mlggwyqy', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    console.log("[Inquiry] Formspree response status:", response.status);
    const responseData = await response.json();
    console.log("[Inquiry] Formspree response data:", responseData);

    if (!response.ok) {
      throw new Error('Formspree submission failed');
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error('[Inquiry] Form submission error:', error);
    return Response.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}