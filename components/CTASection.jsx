import Link from "next/link";

export default function CTASection({
  title = "Want calm, customized support?",
  body = "Start with a free 15-minute call. We'll figure out what you need, what you don't, and the best next step.",
}) {
  return (
    <section className="mt-16">
      <div className="container-page">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl">{title}</h2>
            <p className="mt-2 text-sm md:text-base opacity-80 max-w-2xl">{body}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="no-underline inline-flex items-center justify-center px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Inquiry Form
            </Link>
            <Link
              href="/about"
              className="no-underline inline-flex items-center justify-center px-5 py-3 rounded-xl border border-sage-700 text-sage-900 hover:bg-sage-50 transition"
            >
              View Offerings
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
