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
            <PriceBlock title="Birth Clarity Session" price="$350" />
            <p className="text-sm opacity-80 mt-3">
              A focused conversation to help you feel oriented and clear · Everyone starts here
            </p>
            
            <Divider />

            <h3 className="font-medium mb-2">In this session, we will discuss:</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Your care setting and what to realistically expect</li>
              <li>Questions coming up in prenatal visits</li>
              <li>Options you're weighing (and how to think them through)</li>
              <li>Birth preferences and flexibility</li>
              <li>Early postpartum and feeding considerations</li>
            </ul>

            <Divider />

            <p className="text-sm opacity-80">
              The session is tailored to you - there's no set agenda. The Birth Clarity Session is a 90-minute, one-on-one conversation designed to help you feel oriented, grounded, and clear about what matters most as you prepare for birth. This is not a checklist or a class. It's a focused, thoughtful space to talk through your questions, concerns, and decisions with someone who understands birth deeply and can help you make sense of the information you're already carrying.
            </p>

            <p className="text-sm opacity-80 mt-4">
              Many families describe leaving this session feeling calmer, more oriented, and better able to move forward with confidence.
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              If you enroll in a preparation package, $150 of this fee will be applied toward the package total.
            </p>

            <div className="mt-5 rounded-lg bg-paper border border-black/10 p-4">
              <h4 className="font-semibold text-sm mb-2">Listen to The Prepared Birth</h4>
              <p className="text-sm opacity-80 mb-4">
                Short, thoughtful conversations about birth preparation, decision-making, and what clarity actually means when you're planning for birth. Listen first and see if a Clarity Session is for you.
              </p>
              <a 
                href="https://open.spotify.com/show/5XI2jRfhvve3eGbRhN9KZB?si=zm6VaP2aQRqVd6HlvHvcnQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition no-underline"
              >
                Listen on Spotify
              </a>
            </div>
          </Card>

          <Card title="Prepared Birth Education">
            <PriceBlock price="$1,250" />
            <p className="text-sm opacity-80 mt-3">
              Focused prenatal preparation · Ideal for families seeking steady guidance tailored based on their new circumstances. Typically not newcomers
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              Individualized prenatal preparation and private childbirth education for families who want steady, thoughtful guidance as pregnancy unfolds. This work is especially supportive for those navigating changing circumstances and seeking clarity - without information overload.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">What this includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Two one-on-one prenatal education sessions, paced for understanding</li>
              <li>Private childbirth education (4 hours total), divided across the two sessions and tailored to the planned birth setting</li>
              <li>Support with decision-making and collaborative birth planning</li>
              <li>Clear orientation to common hospital and birth-center care pathways</li>
              <li>Defined consulting access between sessions, with clear boundaries</li>
              <li>Guidance on what questions are most helpful at different stages of prenatal care</li>
              <li>Support in understanding provider recommendations and common clinical thresholds</li>
              <li>Tools for asking questions and discussing options without creating tension</li>
              <li>Clarifying timelines, alternatives, and when decisions are time-sensitive</li>
              <li>Practical frameworks for shared decision-making during prenatal visits and labor</li>
            </ul>
          </Card>

          <Card title="Birth & Early Postpartum Guidance">
            <PriceBlock price="$1,850" />
            <p className="text-sm opacity-80 mt-3">
              Prenatal preparation + early postpartum support · Most popular for first-time families
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              Continuous guidance across pregnancy and into early postpartum. This is not event-based care - it is steady, relationship-based support that begins in pregnancy and continues as you settle into life with your newborn.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">What this includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Ongoing prenatal preparation across the full nine months</li>
              <li>Private childbirth education (4 hours total), divided across sessions and tailored to your planned birth setting</li>
              <li>Decision-making support and collaborative birth planning</li>
              <li>Orientation to early postpartum guidance focused on recovery and settling in</li>
              <li>Feeding support (breast, bottle, or combination)</li>
              <li>Support around early newborn rhythm and emotional adjustment</li>
              <li>Defined consulting access throughout pregnancy and early postpartum</li>
            </ul>

            <Divider />

            <p className="text-sm opacity-80">
              <span className="font-medium">Important:</span> Postpartum support is virtual only and time-limited. This package does not include birth attendance or on-call support.
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
            <a 
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white hover:opacity-90 no-underline" 
              href="/docs/The_Prepared_Birth_Service_Agreement.pdf" 
              download
            >
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