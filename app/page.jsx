import Link from "next/link";

export const metadata = {
  title: "The Prepared Birth - Thoughtful Birth Education in Tacoma, WA",
  description: "Individualized birth guidance for families preparing for hospital or birth-center care in the Puget Sound region. Education and consultation without adding another person at your birth.",
  keywords: "birth education, childbirth classes, Tacoma birth support, Puget Sound doula, hospital birth preparation, birth-center care, prenatal education",
  openGraph: {
    title: "The Prepared Birth - Thoughtful Birth Education in Tacoma",
    description: "Individualized birth guidance for families in the Puget Sound region. Feel settled, informed, and confident.",
    url: "https://thepreparedbirth.com",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  }
};

export default function HomePage() {
  return (
    <div>
      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-sm tracking-wide uppercase opacity-70">Education • Planning • Postpartum</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-serif leading-tight">The Prepared Birth</h1>
          <p className="mt-5 text-lg md:text-xl opacity-90 max-w-xl">
            You may have read the books and listened to the podcasts - and still feel unsure which choices actually matter.
            I offer individualized birth education for Puget Sound families who want expert guidance during pregnancy, but privacy during labor. Feel settled, informed, and confident with 1:1 consultation that prepares you for hospital or birth-center care - professional support without adding another person to your birth place.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/inquiry"
              className="no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Begin with a Clarity Session
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/hero.jpg"
              alt="The Prepared Birth"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-page mt-8 md:mt-12">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl">How it works</h2>
          
          <p className="mt-4 text-base md:text-lg opacity-85 max-w-3xl">
            Many families come to this work feeling generally informed - but not fully settled. They've read, taken a class, or talked with their provider, yet still have questions they don't know where to place.
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-8 text-sm md:text-base">
            <div>
              <div className="text-xl font-semibold mb-3">1) Begin with a Clarity Session</div>
              <p className="opacity-80">
                A focused conversation to sort through your questions, priorities, and options - and clarify what preparation will be most useful for your birth.
              </p>
            </div>
            
            <div>
              <div className="text-xl font-semibold mb-3">2) Continue, if it supports you</div>
              <p className="opacity-80">
                Additional education and guidance are available for families who want steady support through pregnancy and early postpartum.
              </p>
            </div>
            
            <div>
              <div className="text-xl font-semibold mb-3">3) Keep it calm and practical</div>
              <p className="opacity-80">
                This work is education-based and non-medical — designed to complement your care team and support informed decision-making.
              </p>
            </div>
          </div>

          <p className="mt-6 opacity-70 text-sm md:text-base max-w-2xl">
            Most families don't need more information - they need help thinking clearly before decisions start coming fast.
          </p>
        </div>
      </section>
    </div>
  );
}