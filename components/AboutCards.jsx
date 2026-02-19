import Link from "next/link";

export function Card({ title, children }) {
  return (
    <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="mt-4 opacity-90">{children}</div>
    </div>
  );
}

export function PackageCard({ title, subtitle, bullets, description, footer, noteSection }) {
  return (
    <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl">{title}</h3>
          <p className="mt-1 text-sm opacity-75">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-5 grid gap-3">
        {bullets.map((b, index) => (
          <li key={index} className="flex gap-3">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sage-700 flex-shrink-0" />
            <span className="opacity-90">{b}</span>
          </li>
        ))}
      </ul>
      {description ? (
  <div className="mt-6 text-sm opacity-70">{description}</div>
      ) : (
        <p className="mt-6 text-sm opacity-70">
          Pricing for ongoing work is shared privately after the Clarity Session once scope and fit are clear.
        </p>
      )}
      {footer && (
        <p className="mt-4 text-sm opacity-70">{footer}</p>
      )}
      {noteSection && (
        <div className="mt-4 rounded-lg bg-paper border border-black/10 p-4 text-sm opacity-75">
          {noteSection}
        </div>
      )}
    </div>
  );
}