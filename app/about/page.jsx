import Link from "next/link";

export const metadata = {
  title: "About",
};

function Card({ title, children }) {
  return (
    <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
      <h2 className="font-serif text-2xl">{title}</h2>
      <div className="mt-4 opacity-90">{children}</div>
    </div>
  );
}

function PackageCard({ title, subtitle, bullets }) {
  return (
    <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-serif text-2xl">{title}</h3>
          <p className="mt-1 text-sm opacity-75">{subtitle}</p>
        </div>
      </div>
      <ul className="mt-5 grid gap-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sage-700" />
            <span className="opacity-90">{b}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm opacity-70">
        Pricing for ongoing work is shared privately after the Clarity Session once scope and fit are clear.
      </p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <section className="container-page py-14 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif">About</h1>
        <p className="mt-4 text-lg opacity-90 max-w-3xl">
          Quiet, experienced birth preparation and consultation for families planning hospital or birth-center care in the Puget Sound region.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <Card title="About The Prepared Birth">
              <p>
                The Prepared Birth offers <strong>childbirth education and decison support</strong> for families who want to understand their options amd feel prepared before birth.
              </p>
              <p className="mt-4">
                This work is <strong>non-medical and does not incloude birth attendance.</strong> Instead, support happens beofre birth - helping you make sense of recommendations, prepare for prenatal visits, and think clearly when decisions matter. Preparation for postpartum is a key part of birth planning. 
              </p>

              <p>
                Families choose The Prepared Birth when information feels overwhelming when a recommendation is needed or when they want education tailored to their hospital or birth center care. <strong>The Goal is Simple</strong>: clear understanding, confident decisions, and steady guidance when decision feel heavy. 
              </p>

              <div className="mt-7 rounded-xl2 bg-paper border border-black/10 p-5">
                <div className="font-semibold">Experience</div>
                <ul className="mt-3 grid gap-2 text-sm md:text-base">
                  <li>Supported over 400 births across roles in birth and early postpartum care</li>
                  <li>Twelve years working within a birth-center setting alongside midwives and care teams</li>
                  <li>Certified childbirth educator</li>
                  <li>Background as a midwife assistant, birth doula, and postpartum doula</li>
                </ul>
              </div>
            </Card>
          </div>

          <aside className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
            <div className="font-semibold">Start here</div>
            <p className="mt-2 text-sm opacity-80">
              Most families begin with a brief inquiry to confirm fit before scheduling.
            </p>
            <Link
              href="/inquiry"
              className="mt-5 inline-flex items-center justify-center w-full no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Begin with a Clarity Session
            </Link>
          </aside>
        </div>

        <h2 className="mt-16 text-3xl md:text-4xl font-serif">Offerings</h2>
        <p className="mt-4 opacity-85 max-w-3xl">
          All families begin with a Birth Clarity Session. Ongoing support is discussed privately once fit and scope are clear.
        </p>

        <div id="clarity" className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <Card title="Birth Clarity Session">
              <p>
                The Birth Clarity Session is a 90-minute, private birth preparation consultation. You will be able to tell me your story, express your hopes, and thoughts about your personal birth journey. Together we will discuss any fears, or concerns of the unknown surrounding birth. Offering real life guidance and perspective based upon your birth preferences and my experience.
                <br></br>
                <br></br>
                
                We look at your full picture - your values , your care setting, and what's coming next - and sort through decisions without pressure or overwhelm. The purpose isn't to direct your choices, but to help you understand your options and make informed, confident decisions within your hospital or birth center care. 

                We also clarify medical recommendations - wahts being suggested, why, and what alternatives exist we will work teogether to prepare you to engage confidently and thoughtfully with your care team. For many families this session brings focus, confidents, and clear next steps.
                
              </p>
              <p className="mt-4">
                This session is educational and consultative. It is not medical care and does not replace care from your providers.
              </p>

              <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm md:text-base">
                <div>
                  <div className="font-semibold">Format</div>
                  <p className="mt-2 opacity-85">
                    Consultations are offered virtually, or held in person on Tuesdays at The Birthing Inn Birth Center in Tacoma.
                  </p>
                </div>
                <div>
                  <div className="font-semibold">Availability</div>
                  <p className="mt-2 opacity-85">
                    Clarity Sessions are offered on Tuesdays to accommodate your needs. 
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl2 bg-paper border border-black/10 p-5">
                <div className="font-semibold">Investment</div>
                <div className="mt-1 text-2xl font-serif">$350</div>
                <p className="mt-2 text-sm opacity-80">Paid in full at booking.</p>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/inquiry"
                  className="no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
                >
                  Begin with a Clarity Session
                </Link>
              </div>

              <div className="mt-8 text-sm opacity-85">
                <h3 className="font-semibold">Clarity Session Fee &amp; Payment</h3>
                <p className="mt-2">Clarity Sessions are $350 and are 90 minutes in length.</p>
                <p className="mt-2">Payment is required at the time of booking to reserve your session.</p>
                <p className="mt-2">
                  Because sessions are limited and held within a single day each week, requests to reschedule must be made at least 48 hours in advance.
                </p>
                <p className="mt-2">
                  Sessions canceled or rescheduled with less than 48 hours’ notice are non-refundable and may not be accommodated.
                </p>
                <p className="mt-2">
                  When all Tuesday sessions are filled, clients may request placement on a waitlist and will be contacted if an opening becomes available.
                </p>
              </div>
            </Card>
          </div>

          <aside className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
            <div className="font-semibold">Note</div>
            <p className="mt-2 text-sm opacity-80">
              Ongoing work is shared privately after the Clarity Session once scope and alignment are clear.
            </p>
          </aside>
        </div>

        <div id="packages" className="mt-16 grid lg:grid-cols-3 gap-6 items-stretch">
          <PackageCard
            title="Prepared Birth Education"
            subtitle="Focused prenatal preparation"
            bullets={[
              "Private sessions paced for clarity, not overwhelm",
              "Decision-making support and birth planning",
              "Orientation to common hospital and birth-center pathways",
              "Defined consulting access between sessions",
            ]}
          />

          <PackageCard
            title="Birth & Early Postpartum Guidance"
            subtitle="Prenatal preparation + early postpartum support"
            bullets={[
              "Prenatal preparation across pregnancy",
              "Postpartum integration, recovery, and settling in",
              "Feeding support (breast, bottle, or combination)",
              "Early newborn rhythm and emotional integration",
              "Expanded but defined consulting access",
            ]}
          />

        </div>

        <div className="mt-16 rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
          <h2 className="font-serif text-2xl">Practical notes</h2>
          <ul className="mt-4 grid gap-2 opacity-90">
            <li>Services are education-based and non-medical</li>
            <li>No labor or birth attendance</li>
            <li>No insurance accepted</li>
            <li>In-person sessions prioritized when possible</li>
            <li>Availability is limited each month</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
