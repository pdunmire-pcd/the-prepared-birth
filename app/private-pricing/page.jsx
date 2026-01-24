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
          This page is shared privately with clients. Pricing and recommendations are typically reviewed after your Birth Clarity Session.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2 grid gap-8">
          <Card title="Public entry point">
            <PriceBlock title="Birth Clarity Session" price="$300" />
            <p className="text-sm opacity-80 mt-3">
              90-minute one-on-one consultation. This is the starting point for all clients. <br />
              <br />
              In this session, we will discuss:
              <ul>
                <li>~Your care setting and what to realistically expect</li>
                <li>~Questions coming up in prenatal visits</li>
                <li>~Options you're weighing(and how to think them through)</li>
                <li>~Birth preferences and flexibiltiy</li>
                <li>~Early postpartum and feeding considerations</li>
              </ul>
              <br />
              If you enroll in a preparation package, $150 of this fee will be applied toward the package total. The session is tailored to you - there's no set agenda. The Birth Clarity Session is a 90-minute, one-on-one conversation designed to help you feel oriented, grounded, and clear about what matters most as you prepare for birth. This is not a checklist or a class. It's a focused, thoughtful space to talk through your questions, concerns, and decisions with someone who understands birth deeply and can help you make sense of the information you're already carrying.
            </p>
          </Card>

          <Card title="Guided Birth Preparation">
            <PriceBlock price="$1,250" />
            <p className="text-sm opacity-80 mt-3">
              Includes one Birth Clarity Session (90 minutes), three extended prenatal preparation sessions totaling three (3) hours, and structured communication between sessions. This package is prenatal only and does not include birth attendance, on-call labor support, or postpartum or feeding support.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">What this includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Birth Clarity Session to understand your preferences, concerns, and decision points</li>
              <li>Three extended prenatal preparation sessions (3 hours total)</li>
              <li>Structured communication between sessions for questions and support</li>
              <li>Personalized education tailored to your goals and learning style</li>
              <li>Partner preparation so you both feel confident and coordinated</li>
            </ul>
          </Card>

          <Card title="Comprehensive Birth Preparation & Postpartum Readiness">
            <PriceBlock price="$1,850" />
            <p className="text-sm opacity-80 mt-3">
              For families who want continued guidance beyond education, with calm, experienced support throughout pregnancy and into early postpartum transition.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">Includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>One Birth Clarity Session (90 minutes)</li>
              <li>Four extended prenatal preparation sessions (75 minutes each or 5 hours total)</li>
              <li>Ongoing guidance through pregnancy as questions and decisions arise</li>
              <li>Questions and guidance supported through scheduled check-ins and email between sessions</li>
              <li>Two virtual postpartum visits (30 minutes each) during the first three weeks after birth</li>
            </ul>

            <Divider />

            <p className="text-sm opacity-80">
              <span className="font-medium">Important:</span> Postpartum support is virtual only and time-limited. This package does not include birth attendance or on-call support.
            </p>
          </Card>

          <Card>
            <h3 className="font-medium mb-2">Private Childbirth Education</h3>
            <PriceBlock price="$350" />
            <p className="text-sm opacity-80">
              Two private sessions (2-2.5 hours each)
              Available in person locally or virtually nationwide.
              Hospital- and epidural-friendly
              Partner welcome
            </p>
            <h3 className="font-medium mb-2 mt-4">Private Childbirth Education + Follow-Up</h3>
            <PriceBlock price="$495" />
            <p className="text-sm opacity-80 mt-3">
              Includes two private childbirth education sessions plus one scheduled follow-up conversation (30-45 minutes)
            </p>
          </Card>

          <Card>
            <h3 className="font-medium mb-2">About this work</h3>
            <p className="text-sm opacity-80">
              The Prepared Birth provides education and consultative birth preparation services only. Services are non-medical and do not include diagnosis, treatment, or clinical care. These services do not replace care from a licensed medical provider or midwife. The Provider does not attend births and does not provide in-home postpartum care.
            </p>
          </Card>
        </div>

        <aside className="rounded-2xl bg-sage-50 p-6 h-fit">
          <h2 className="font-serif text-xl mb-3">Next steps</h2>
          <ol className="text-sm opacity-80 list-decimal pl-5 space-y-1">
            <li>Review the options above</li>
            <li>Download and read the service agreement</li>
            <li>Reply with any questions before confirming</li>
          </ol>

          <div className="mt-6">
            <a className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white hover:opacity-90" href="/docs/The_Prepared_Birth_Service_Agreement,pdf.pdf" download>
              Download service agreement (PDF)
            </a>
          </div>

          <div className="mt-6 text-sm opacity-80 space-y-2">
            <p>
              <span className="font-medium">Scheduling:</span> Sessions are scheduled by mutual agreement. After we confirm we are a good fit, you will receive a private scheduling link.
            </p>
            <p>
              <span className="font-medium">In-person:</span> Select Tuesdays at <Link className="underline" href="https://thebirthinginn.com" target="_blank">The Birthing Inn</Link> in Tacoma.
            </p>
            <p>
              <span className="font-medium">Virtual:</span> Available by appointment outside clinic hours.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-black/10">
            <h3 className="font-medium text-sm mb-3">Available Hours</h3>
            <div className="text-sm opacity-80 space-y-2">
              <div>
                <span className="font-medium">Tuesdays:</span>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>1st Tuesday: 9am–4pm</li>
                  <li>2nd Tuesday: 9am–5pm</li>
                  <li>3rd Tuesday: 9am–5pm</li>
                  <li>4th Tuesday: 9am–7pm</li>
                </ul>
              </div>
              <div>
                <span className="font-medium">Thursdays:</span>
                <ul className="ml-4 mt-1 space-y-1">
                  <li>2nd Thursday: 9am–1pm</li>
                  <li>3rd Thursday: 9am–1pm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm opacity-80 space-y-2">
            <p>
              <span className="font-medium">Cancellation policy:</span> Sessions may be cancelled or rescheduled with at least 48 hours notice.
            </p>
          </div>

          <div className="mt-6 text-xs opacity-70">
            Education-based, non-medical support. The Prepared Birth does not provide diagnosis, clinical care, emergency services, on-call support, or birth attendance.
          </div>
        </aside>
      </div>
    </section>
  );
}

function Card({ title, children }) {
  return (
    <section className="rounded-2xl border border-black/10 bg-white p-6 shadow-soft">
      {title && <h2 className="font-serif text-2xl mb-4">{title}</h2>}
      {children}
    </section>
  );
}

function PriceBlock({ title, price }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-4">
      {title && <div className="font-medium">{title}</div>}
      <div className="font-serif text-2xl">{price}</div>
    </div>
  );
}

function Divider() {
  return <hr className="my-5 border-black/10" />;
}