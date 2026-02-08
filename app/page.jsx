import Link from "next/link";

export const metadata = {
  title: "The Prepared Birth - Private Birth Preparation in Tacoma, WA",
  description: "Private birth preparation for people who want clarity — without adding another person to the birth room. Tacoma and virtual nationwide.",
  keywords: "birth education, childbirth classes, Tacoma birth support, hospital birth preparation, birth-center care, prenatal education, birth clarity",
  openGraph: {
    title: "The Prepared Birth - Private Birth Preparation in Tacoma",
    description: "Private birth preparation for people who want clarity — without adding another person to the birth room.",
    url: "https://thepreparedbirth.com",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  }
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Private birth preparation for people who want clarity — without adding another person to the birth room.
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-90">
            If you're pregnant and overwhelmed by advice, opinions, and options, I help you decide what actually matters — and let go of the rest.
          </p>

          <div className="mt-8">
            <Link
              href="/inquiry"
              className="inline-block no-underline px-6 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Book a Clarity Session
            </Link>
            <p className="mt-3 text-sm opacity-70">
              90-minute private session • Tacoma (select Tuesdays) + virtual nationwide<br/>
              Not a doula • No labor attendance • Non-medical
            </p>
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

      {/* Who This Is For / Not For Section */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">This work is for you if:</h2>
              <ul className="space-y-3 text-base opacity-85">
                <li>• You want calm, experienced guidance — not more opinions</li>
                <li>• You don't want another person in the birth room</li>
                <li>• You're birthing in a hospital or birth center and want help navigating options</li>
                <li>• You value preparation, perspective, and clarity</li>
              </ul>
            </div>
            
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-4">This is not for you if:</h2>
              <ul className="space-y-3 text-base opacity-85">
                <li>• You're looking for labor or postpartum attendance</li>
                <li>• You want a group class or one-size-fits-all education</li>
                <li>• You're seeking medical advice or clinical decision-making</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="container-page mt-12 md:mt-16">
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

      {/* Clarity Session Section */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-sage-50 border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-3xl md:text-4xl">Start with a Clarity Session</h2>
          <p className="mt-2 text-lg opacity-80">Most families begin here.</p>
          
          <p className="mt-6 text-base md:text-lg opacity-90 max-w-3xl">
            This is a private, 90-minute conversation where we:
          </p>

          <ul className="mt-4 space-y-2 text-base md:text-lg opacity-85 max-w-3xl">
            <li>• Sort through your biggest questions and decisions</li>
            <li>• Reduce overwhelm and decision fatigue</li>
            <li>• Clarify what kind of preparation will actually help you</li>
            <li>• Identify next steps — without pressure to book anything else</li>
          </ul>

          <p className="mt-6 text-base md:text-lg opacity-90 max-w-3xl italic">
            Many people tell me they feel calmer after this one session than they have their entire pregnancy.
          </p>

          <div className="mt-8 pt-6 border-t border-black/10">
            <p className="text-base font-medium">
              Investment: $350 • In-person in Tacoma (select Tuesdays) or virtual nationwide
            </p>
            <div className="mt-4">
              <Link
                href="/inquiry"
                className="inline-block no-underline px-6 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
              >
                Book a Clarity Session
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Is Different From a Doula */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Why This Is Different From a Doula</h2>
          
          <p className="text-base md:text-lg opacity-90 max-w-3xl">
            Many people I work with respect doulas — and still don't want another person in the birth room.
          </p>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl">
            My work focuses on preparation, not attendance.
          </p>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl">
            I help you think through decisions before labor begins so you can enter birth feeling steady, informed, and confident — without adding another relationship or dynamic to the room.
          </p>
        </div>
      </section>

      {/* Authority Framing */}
      <section className="container-page mt-12 md:mt-16 mb-16">
        <div className="rounded-xl2 bg-sage-50 border border-black/10 p-8 md:p-10 text-center">
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            I've spent over a decade inside birth spaces across hospitals and birth centers watching what actually helps — and what creates confusion.
          </p>
          
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium">
            The Prepared Birth exists because preparation matters most before labor begins.
          </p>

          <div className="mt-8">
            <Link
              href="/inquiry"
              className="inline-block no-underline px-6 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Book a Clarity Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}