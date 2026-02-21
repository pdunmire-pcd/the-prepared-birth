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
            Understand birth before decisions start happening fast.
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-90">
            Private Birth Strategy & Childbirth Education in Tacoma, WA. Tacoma's Private Birth Strategist. Trusted, provider-connected preparation for families in Pierce County planning hospital or birth center birth. If you're pregnant and overwhelmed by advice, opinions, and options, I help you decide what actually matters — and let go of the rest. Skilled care doesn't always mean explained care.
          </p>
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
              <h2 className="font-serif text-2xl md:text-3xl mb-4">Experience. Connected. Trusted. I help families:</h2>
              <ul className="space-y-3 text-base opacity-85">
                <li>• Choose the right hospital or birth center</li>
                <li>• Understand provider styles and care differences</li>
                <li>• Prepare for labor with strategy, not guesswork</li>
                <li>• Navigate Pierce County's birth systems confidently</li>
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
            Many families come to this work feeling generally informed - but not fully settled. They've read, taken a class, or talked with their provider, yet still have questions they don't know where to place. This is private, strategic preparation rooted in real experience inside Tacoma's birth community. As a former midwife assistant, certified birth & postpartum doula, certified childbirth educator, and experience at the Birthing Inn. With me you are not learning from theory alone. You are preparing with someone who understands how birth works here. 
          </p>

          <div className="mt-8 grid md:grid-cols-3 gap-8 text-sm md:text-base">
            
            <div>
              <div className="text-xl font-semibold mb-3"> Continue, if it supports you</div>
              <p className="opacity-80">
                Additional education and guidance are available for families who want steady support through pregnancy and early postpartum.
              </p>
            </div>
            
            <div>
              <div className="text-xl font-semibold mb-3"> For families Who Want to Feel Ready</div>
              <p className="opacity-80">
                If you're 20-35+ weeks and realizing birth is getting close, this is your moment to prepare intentionally. You deserve to walk into labor steady and informed - not overwhelmed.
              </p>
            </div>
            <div>
              <div className="text-xl font-semibold mb-3"> Limited Private Clients Each Month</div>
              <p className="opacity-80">
                To ensure focused attention and meaningful preparation, I accept a limited number of private clients each month. Early booking is recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clarity Strategy Session Section */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-sage-50 border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-3xl md:text-4xl">Start with a Birth Strategy Session</h2>
          <p className="mt-2 text-lg opacity-80">Most families begin here.</p>
          
          <p className="mt-6 text-base md:text-lg opacity-90 max-w-3xl">
            This is a private, 75-minute conversation where we:
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
              Investment: $295 • In-person in Tacoma (select Tuesdays) or virtual nationwide
            </p>
            <div className="mt-4">
              <Link
                href="/inquiry"
                className="inline-block no-underline px-6 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
              >
                Book a Birth Strategy Session
              </Link>
            </div>
            <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            I've spent over a decade inside birth spaces across hospitals and birth centers watching what actually helps — and what creates confusion.
          </p>
          
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto font-medium">
            The Prepared Birth exists because preparation matters most before labor begins.
          </p>
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
    </div>
  );
}