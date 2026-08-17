"use client";

const GOOGLE_URL = "https://maps.app.goo.gl/vsH5nMCKoSgPVsqJA";

function GoogleG() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28" height="28">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function Stars() {
  return (
    <span className="text-[#F9AB00] text-sm leading-none">★★★★★</span>
  );
}

export function GoogleReviewsFloatingBadge() {
  return (
    <a
      href={GOOGLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.12)] border border-black/8 no-underline transition hover:shadow-[0_6px_28px_rgba(0,0,0,0.18)] hover:-translate-y-0.5"
      aria-label="Read our 29 Google Reviews"
    >
      <GoogleG />
      <div className="leading-tight">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-800">5.0</span>
          <Stars />
        </div>
        <div className="text-xs text-gray-500 mt-0.5">29 Google Reviews</div>
      </div>
    </a>
  );
}

export function GoogleReviewsFooterBadge() {
  return (
    <a
      href={GOOGLE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 rounded-xl border border-black/10 bg-white px-3.5 py-2.5 no-underline shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
      aria-label="Read our Google Reviews"
    >
      <GoogleG />
      <div className="leading-tight">
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-gray-800">5.0</span>
          <Stars />
        </div>
        <div className="text-xs text-gray-500 mt-0.5">29 Google Reviews</div>
      </div>
    </a>
  );
}

export function GoogleReviewsStrip() {
  return (
    <section className="border-y border-black/8 bg-white py-6">
      <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <GoogleG />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl leading-none">5.0</span>
              <Stars />
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Rated 5 stars across 29 Google Reviews
            </p>
          </div>
        </div>

        <a
          href={GOOGLE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-xl border border-black/10 bg-white px-5 py-2.5 text-sm font-medium no-underline shadow-sm transition hover:bg-black/5"
        >
          Read our reviews
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}
