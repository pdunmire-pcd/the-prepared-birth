export async function POST(request) {
  const formData = await request.formData();

  try {
    const response = await fetch('https://formspree.io/f/mlggwyqy', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

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