import Link from "next/link";

export const metadata = {
  title: "Private Pricing | The Prepared Birth",
  robots: { index: false, follow: false },
};

export default function PrivatePricingPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.18em] opacity-55 mb-3">
          Private Pricing
        </p>
        <h1 className="text-4xl md:text-5xl font-serif mb-4">
          Private Birth Preparation & Doula Support
        </h1>
        <p className="text-lg opacity-80">
          Support from pregnancy through postpartum.
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-3 items-start">
        <div className="lg:col-span-2 grid gap-8">
          <Card title="Consultation">
            <PriceBlock price="Free 20-Minute Call" />
            <p className="text-sm opacity-80 mt-3">
              Tuesdays at the Birthing Inn or by phone
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              This is the best place to begin if you're not quite sure which level
              of support is the right fit. We can talk briefly about your
              pregnancy, what kind of support you're looking for, and whether one
              of the private preparation or doula options feels like the best next
              step.
            </p>

            <div className="mt-6">
              <a
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white shadow-soft hover:bg-sage-800 transition no-underline"
              >
                Book your Consultation
              </a>
            </div>
          </Card>

          <Card title="Essential">
            <PriceBlock price="$500" />
            <p className="text-sm opacity-80 mt-3">
              One-time private preparation session
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              A focused one-on-one session for families who want thoughtful,
              personalized guidance without ongoing support. This is a strong fit
              if you want space to talk through decisions, prepare for your birth
              setting, and leave feeling clearer and more grounded.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">Includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Private session</li>
              <li>Personalized birth preparation</li>
              <li>Time to talk through your questions and circumstances</li>
              <li>Guidance tailored to your hospital or birth center setting</li>
            </ul>
          </Card>

          <Card title="Guided">
            <div className="flex items-center gap-3 mb-3">
              <PriceBlock price="$1,250" />
              <span className="rounded-full bg-sage-700 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-white">
                Most Popular
              </span>
            </div>

            <p className="text-sm opacity-80 mt-3">
              Ongoing support throughout pregnancy
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              For families who want steady, relationship-based support throughout
              pregnancy. This includes preparation that unfolds over time, help
              processing questions as they come up, and support that helps you
              feel less alone in the swirl of information and decision-making.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">Includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Private session</li>
              <li>Ongoing support throughout pregnancy</li>
              <li>Text support</li>
              <li>Space to talk through appointments, decisions, and next steps</li>
              <li>Preparation tailored to your values and care setting</li>
            </ul>
          </Card>

          <Card title="Full Support">
            <PriceBlock price="$2,800" />
            <p className="text-sm opacity-80 mt-3">
              Application only · Pregnancy · Birth · Postpartum · Feeding
            </p>

            <Divider />

            <p className="text-sm opacity-80">
              This is for families who want someone they trust already in the room
              when it matters most. Full Support includes relationship-based care
              from pregnancy through postpartum, including birth support and
              feeding support as you transition into early life with your baby.
            </p>

            <Divider />

            <h3 className="font-medium mb-2">Includes</h3>
            <ul className="text-sm opacity-80 list-disc pl-5 space-y-1">
              <li>Private session</li>
              <li>Ongoing support</li>
              <li>Text support</li>
              <li>Birth support</li>
              <li>Postpartum visits</li>
              <li>Feeding support</li>
            </ul>

            <Divider />

            <p className="text-sm opacity-80">
              Because this is a high-touch offering, availability is limited and
              offered by application.
            </p>
          </Card>

          <Card title="Booking Links">
            <p className="text-sm opacity-80">
              Use the private booking links below to reserve your consultation,
              class, or session. These can be updated with your final booking page
              links when ready.
            </p>

            <Divider />

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-soft hover:bg-black/5 transition no-underline"
              >
                Book Consultation
              </a>

              <a
                href="https://thebirthinginn.com/birth-classes/"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-soft hover:bg-black/5 transition no-underline"
              >
                Book Class
              </a>

              <a
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-soft hover:bg-black/5 transition no-underline"
              >
                Book Essential Session
              </a>

              <a
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium shadow-soft hover:bg-black/5 transition no-underline"
              >
                Apply / Inquire for Full Support
              </a>
            </div>
          </Card>

          <Card>
            <h3 className="font-medium mb-2">About this work</h3>
            <p className="text-sm opacity-80">
              The Prepared Birth provides education and consultative birth
              preparation services only. Services are non-medical and do not
              include diagnosis, treatment, or clinical care. These services do
              not replace care from a licensed medical provider or midwife.
            </p>
          </Card>
        </div>

        <aside className="rounded-2xl bg-sage-50 p-6 h-fit">
          <h2 className="font-serif text-xl mb-3">Next steps</h2>
          <ol className="text-sm opacity-80 list-decimal pl-5 space-y-1">
            <li>Start with a free consultation</li>
            <li>Review the support options above</li>
            <li>Choose the level of support that feels like the best fit</li>
            <li>Use the private booking links when you're ready</li>
          </ol>

          <div className="mt-6">
            <a
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white hover:opacity-90 no-underline"
              href="/inquiry"
            >
              Schedule a Consultation
            </a>
          </div>

          <div className="mt-6 text-sm opacity-80 space-y-2">
            <p>
              <span className="font-medium">Consultations:</span> Free 20-minute
              calls available Tuesdays at The Birthing Inn or by phone.
            </p>
            <p>
              <span className="font-medium">In-person:</span> Select Tuesdays at{" "}
              <Link
                className="underline"
                href="https://thebirthinginn.com"
                target="_blank"
              >
                The Birthing Inn
              </Link>{" "}
              in Tacoma.
            </p>
            <p>
              <span className="font-medium">Phone / virtual:</span> Available by
              arrangement depending on the offering.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-black/10">
            <h3 className="font-medium text-sm mb-3">Private booking notes</h3>
            <div className="text-sm opacity-80 space-y-2">
              <p>
                Add your consultation booking link where marked above.
              </p>
              <p>
                Add your class booking page or workshop registration link in the
                booking section.
              </p>
              <p>
                Full Support is offered by application only.
              </p>
            </div>
          </div>

          <div className="mt-6 text-sm opacity-80 space-y-2">
            <p>
              <span className="font-medium">Cancellation policy:</span> Sessions
              may be cancelled or rescheduled with at least 48 hours notice.
            </p>
          </div>

          <div className="mt-6 text-xs opacity-70">
            Education-based, non-medical support. The Prepared Birth does not
            provide diagnosis, clinical care, emergency services, or medical care.
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