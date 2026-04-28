'use client';

import { useEffect } from 'react';

export default function CalendlyEmbed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="book-workshop" className="container-page py-16 md:py-24">
      <h2 className="font-serif text-3xl md:text-4xl mb-4 text-center">
        Book a Birth Preparation Session
      </h2>
      <p className="text-center text-lg opacity-90 mb-8">
        Choose a time that works for you — spots fill up fast.
      </p>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/thepreparedbirth25"
        style={{ minWidth: '320px', height: '700px' }}
      />
    </section>
  );
}