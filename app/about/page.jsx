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

function PackageCard({ title, subtitle, bullets, description }) {
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
      {description ? (
        <p className="mt-6 text-sm opacity-70">{description}</p>
      ) : (
      <p className="mt-6 text-sm opacity-70">
        Pricing for ongoing work is shared privately after the Clarity Session once scope and fit are clear.
      </p>
    )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      <section className="container-page py-14 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif">About</h1>
        <p className="mt-4 text-lg opacity-90 max-w-3xl">
          The Prepared Birth offers thoughtful birth education and consultation for people who want to feel clear, grounded, and prepared as they move through pregnancy, birth planning, and early postpartum. <br />
          <br />
          I work with families who value steady guidance and honest conversation - especially those preparing for hospital or birth-center care and looking for support that complements, rather than replaces, their medical team.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2">
            <Card title="About The Prepared Birth">
              <p>
                The Prepared Birth offers <strong>childbirth education and decision support</strong> for families who want to understand their options and feel prepared before birth, clarity without noise. if you're feeling overwhelmed by information, unsure how to interpret recommendations, or simply want experienced guidance without adding another person to your birth room, this kind of support can be deeply grounding.
              </p>
              <p className="mt-4">
                I don't offer a philosophy to follow or a "right way" to give birth. I offer perspective shaped by years of experience, practical preparation, and space to think things through - so you can make decisions that fit your values, your care setting, and your real life.
                This work is <strong>non-medical and does not include birth attendance.</strong> Instead, support happens before birth - helping you make sense of recommendations, prepare for prenatal visits, and think clearly when decisions matter. Preparation for postpartum is a key part of birth planning.
              </p>

              <p className="mt-4">
                Families choose The Prepared Birth when information feels overwhelming, when a recommendation is needed, or when they want education tailored to their hospital or birth center care. <strong>The goal is simple</strong>: clear understanding, confident decisions, and steady guidance when decisions feel heavy.
              </p>

              <div className="mt-7 rounded-xl2 bg-paper border border-black/10 p-5">
                <div className="font-semibold">Experience</div>
                <p>I've spent more than 15 years working in birth - supporting over 400 families in hospital and birth-center settings. My background includes work as a certified childbirth educator, birth and postpartum doula, and midwife assistant, alongside midwives and maternity care teams.<br />
                <br /> 
                Over time, I chose to focus exclusively on education and consultation. I don't attend births. Instead, I offer thoughtful preparation, clear explanations, and steady guidance - so families feel informed, grounded, and confident as they move through pregnancy, birth planning, and early postpartum</p>
              </div>
              <p>
                  <br />You don't need to have everything figured out right now. Most people don't. What helps is having a place to talk things through - with someone steady, experienced, and outside the swirl of opinions. <br />
                  <br />
                  If that sounds supportive, the best place to begin is with a Birth Clarity Session.
              </p>
            </Card>
          </div>
          <Link
              href="/inquiry"
              className="mt-5 inline-flex items-center justify-center w-full no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Begin with a Clarity Session
          </Link>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6 items-center">
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/birth-tub.jpg"
              alt="Quiet support and connection after birth"
              className="w-full h-[380px] object-cover"
            />
          </div>
          <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8">
            <h3 className="font-serif text-2xl">A calm, supportive environment</h3>
            <p className="mt-4 opacity-85 text-base">
              Birth preparation is about creating clarity and confidence for the journey ahead. Whether you're planning hospital or birth-center care, having experienced guidance helps families feel oriented rather than overwhelmed.
            </p>
            <p className="mt-4 opacity-85 text-base">
              The work focuses on understanding your options, preparing for decisions, and feeling steady as you navigate pregnancy, birth, and early postpartum life.
            </p>
          </div>
        </div>

        <h2 className="mt-16 text-3xl md:text-4xl font-serif">Preparation Pathways</h2>
        <p className="mt-4 opacity-85 max-w-3xl">
          For families who want more than a single conversation, I offer Preparation Pathways - a guided way to prepare for birth with clarity, intentions, and steadiness.<br />
          <br />
          Preparation Pathways combine:
          <ul className="mt-2 list-disc list-inside">
            <li>Individualized childbirth education private sessions and small classes designed around your values, your questions, and your birth setting</li>
            <li>Birth planning & decision support - Time and space to think through options before labor - so decisions don't happen under pressure.</li>
            <li>Postpartum preparation - Feeding, recovery, and early weeks support grounded in realism, not overwhelm.</li>
          </ul>
          <br />
          Each pathway is tailored to your needs and paced to avoid overwhelm. The goal is steady, thoughtful preparation - not information overload. Specific pathway options are shared after a Clarity Session, once we've had time to understand what kind of preparation would be most helpful.
        </p>

        <div id="packages" className="mt-10 grid lg:grid-cols-3 gap-6 items-stretch">
          <PackageCard
            title="Birth Clarity Session"
            subtitle="90-minute consultation"
            bullets={[
              "your care setting and what to realistically expect",
              "Questions coming up in prenatal visits",
              "Options you're weighing(and how to think them through)",
              "Birth preferences and flexibility",
              "Early pospartum and feeding condsiderations",
            ]}
            description="The session is tailored to you - there's no set agenda. The Birth Clarity Session is a 90-minute, one-on-one conversation designed to help you feel oriented, grounded, and clear about what matters most as you prepare for birth. This is not a checklist or a class. It's a focused, thoughtful space to talk through your questions, concerns, and decisions with someone who understands birth deeply and can help you make sense of the information you're already carrying."
          />
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
            ]}
          />
          <PackageCard>
            <h3 className="font-medium mb-2">Private Childbirth Education</h3>
            <p className="text-sm opacity-80">
              Two private sessions (2-2.5 hours each)
              Available in person locally or virtually nationwide.
              Hospital- and epidural-friendly
              Partner welcome
            </p>
            <h3 className="font-medium mb-2 mt-4">Private Childbirth Education + Follow-Up</h3>
            <p className="text-sm opacity-80 mt-3">
              Includes two private childbirth education sessions plus one scheduled follow-up conversation (30-45 minutes)
            </p>
          </PackageCard>
        </div>
      </section>
    </div>
  );
}