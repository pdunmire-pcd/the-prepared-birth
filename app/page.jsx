import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-wide uppercase opacity-70">Education • Planning • Postpartum</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-serif leading-tight">The Prepared Birth</h1>
          <p className="mt-5 text-lg md:text-xl opacity-90 max-w-xl">
            Quiet, experienced birth guidance for families preparing for hospital or birth-center care in the Puget Sound region. Thoughtful birth education and consultation - for clarity during pregnancy. Support without adding another person at your birth.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inquiry"
              className="no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Begin with a Clarity Session
            </Link>
          </div>

          {/* <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
            <div className="rounded-xl2 bg-white border border-black/10 p-4 shadow-soft">
              <div className="font-semibold">Decision Clarity</div>
              <div className="mt-1 opacity-80">Clear Guidance without overwhelm.</div>
            </div>
            <div className="rounded-xl2 bg-white border border-black/10 p-4 shadow-soft">
              <div className="font-semibold">Non-medical</div>
              <div className="mt-1 opacity-80">Education-based support.</div>
            </div>
            <div className="rounded-xl2 bg-white border border-black/10 p-4 shadow-soft">
              <div className="font-semibold">Tailored Advice</div>
              <div className="mt-1 opacity-80">Centered on your Individual Priorities and Choices.</div>
            </div>
          </div> */}
        </div>

        <div className="relative">
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/hero.jpg"
              alt="The Prepared Birth"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-paper rounded-xl2 border border-black/10 shadow-soft p-5 max-w-sm">
            <p className="text-sm opacity-80">
              <span className="font-semibold">Make Birth Decisions before you're in Labor</span> Feel oriented and confident going in.... not overwhelmed or confused.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page mt-8 md:mt-12">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm md:text-base">
            <div>
              <p>Many families come to this work feeling generally informed - but not fully settled. They've read, taken a class, or talked with their provider, yet still have questions they don't know where to place. This work is about slowing things down and helping you think clearly, calmly, and in context.</p>
              <div className="font-semibold">1) Begin with a Clarity Session</div>
              <p className="mt-2 opacity-80">
                A focused conversation to sort through your questions, priorities, and options - and clarify what preparation will be most useful for your birth
              </p>
            </div>
            <div>
              <div className="font-semibold">2) Continue, if it supports you</div>
              <p className="mt-2 opacity-80">
                Additional education and guidance are available for families who want steady support through pregancy and early postpartum.
              </p>
            </div>
            <div>
              <div className="font-semibold">3) Keep it calm and practical</div>
              <p className="mt-2 opacity-80">
                This work is education-based and non-medical — designed to complement your care team and support informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
