import Link from "next/link";

export const metadata = {
  title: "Private Pricing | The Prepared Birth",
  robots: { index: false, follow: false },
};

export default function PrivatePricingPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Private Pricing</h1>
        <p className="text-lg opacity-80">
          This page is shared privately with clients. Pricing and recommendations are typically reviewed
          after your Birth Clarity Session.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-3 items-start">
        {/* MAIN */}
        <div className="lg:col-span-2 grid gap-8">
          <Card title="Public entry point">
            <PriceBlock title="Birth Clarity Session" price="$350" />
            <p className="text-sm opacity-80 mt-3">
              90-minute one-on-one session. This is the starting point for all clients.
            </p>
          </Card>

          <Card title="Prepared Birth">
            <PriceBlock price="$1,250" />
            <p className="text-sm opacity-80 mt-3">
              Includes the Birth Clarity Session, a 5-hour private childbirth education class
              (two 2.5-hour sessions), ongoing email or message support until labor, and optional
              brief phone check-ins (15 minutes, max once per week).
            </p>

            <Divider />

            <h3 className="font-medium mb-2">What this usually looks like</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Clarity session to understand your preferences, concerns, and decision points</li>
              <li>Two education sessions (2.5 hours each) tailored to your goals and learning style</li>
              <li>Partner preparation and practice so you both feel confident and coordinated</li>
              <li>Ongoing messaging or email support up to labor for quick questions and perspective</li>
              <li>Optional brief weekly check-in call (up to 15 minutes) when helpful</li>
            </ul>
          </Card>

          <Card title="Birth + Early Postpartum ">
            <PriceBlock
              
              price="$1,650"
            />
            <p className="text-sm opacity-80 mt-3">
              For families who want continued guidance beyond education, with calm, experienced support throughout pregnancy and into early postpartum transition.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">Includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Everything in Preparede Birth Education</li>
              <li>Two prenatal support calls (30 minutes each)</li>
              <li>Brief check-ins as needed in late pregnancy</li>
              <li>Two virtual postpartum check-ins during the first two weeks(feeding guidance, adjustment support, and referrals)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="font-medium mb-2">Doula comparison</h3>
            <p className="text-sm opacity-80">
              “Some families absolutely should hire a doula. This work is for families who don’t want labor
              attendance but do want experienced guidance before birth and during the early weeks after.”
            </p>
          </Card>
        </div>

        {/* SIDEBAR */}
        <aside className="rounded-2xl bg-sage-50 p-6 h-fit">
          <h2 className="font-serif text-xl mb-3">Next steps</h2>
          <ol className="text-sm opacity-80 list-decimal pl-5 space-y-1">
            <li>Review the options above</li>
            <li>Download and read the agreement</li>
            <li>Reply with any questions before confirming</li>
          </ol>

          <div className="mt-6">
            <a
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white hover:opacity-90"
              href="/docs/The_Prepared_Birth_TBI_Contract_.pdf"
              download
            >
              Download contract (PDF)
            </a>
          </div>

          <div className="mt-6 text-sm opacity-80 space-y-2">
            <p>
              <span className="font-medium">Scheduling:</span> After we confirm we’re a good fit, you’ll receive a private scheduling link.
            </p>
            <p>
              <span className="font-medium">In-person:</span> Select Tuesdays at{" "}
              <Link className="underline" href="https://thebirthinginn.com" target="_blank">
                The Birthing Inn
              </Link>.
            </p>
            <p>
              <span className="font-medium">Virtual:</span> Outside clinic hours.
            </p>
            <p>
              <span className="font-medium">Notice:</span> Minimum 24 hours required.
            </p>
          </div>

          <div className="mt-6 text-xs opacity-70">
            Education-based, non-medical support. The Prepared Birth does not provide diagnosis, clinical care,
            emergency services, or labor support.
          </div>
        </aside>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
      <h2 className="font-serif text-2xl mb-4">{title}</h2>
      {children}
    </section>
  );
}

function PriceBlock({ title, price }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      <div className="font-medium">{title}</div>
      <div className="font-serif text-2xl">{price}</div>
    </div>
  );
}

function Divider() {
  return <hr className="my-5 border-black/10" />;
}
