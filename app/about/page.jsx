import Link from "next/link";
import { Card, PackageCard } from "../../components/AboutCards";

export const metadata = {
  title: "About - The Prepared Birth",
  description:
    "Learn about The Prepared Birth - thoughtful birth education and consultation for families in the Puget Sound region. Over 15 years of experience supporting hospital and birth-center births with calm, experienced guidance.",
  keywords:
    "about birth educator Tacoma, childbirth education experience, Puget Sound birth support, hospital birth preparation, birth-center education",
  openGraph: {
    title: "About - The Prepared Birth",
    description:
      "Thoughtful birth education and consultation for people who want to feel clear, grounded, and prepared as they move through pregnancy and birth planning.",
    url: "https://thepreparedbirth.com/about",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="container-page py-16 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif">About</h1>
        <p className="mt-4 text-lg opacity-90 max-w-3xl">
          The Prepared Birth offers thoughtful birth education and consultation
          for people who want to feel clear, grounded, and prepared as they move
          through pregnancy, birth planning, and early postpartum.
          <br />
          <br />
          I work with families who value steady guidance and honest conversation
          - especially those preparing for hospital or birth-center care and
          looking for support that complements, rather than replaces, their
          medical team.
        </p>
      </section>

      {/* Main Content */}
      <section className="container-page pb-16 md:pb-20">
        <Card title="About The Prepared Birth">
          <p>
            The Prepared Birth offers{" "}
            <strong>childbirth education and decision support</strong> for
            families who want to understand their options and feel prepared
            before birth. If you're feeling overwhelmed by information, unsure
            how to interpret recommendations, or simply want experienced
            guidance without adding another person to your birth room, this kind
            of support can be deeply grounding.
          </p>

          <p className="mt-4">
            I don't offer a philosophy to follow or a "right way" to give
            birth. I offer perspective shaped by years of experience, practical
            preparation, and space to think things through - so you can make
            decisions that fit your values, your care setting, and your real
            life. This work is{" "}
            <strong>non-medical and does not include birth attendance.</strong>{" "}
            Instead, support happens before birth - helping you make sense of
            recommendations, prepare for prenatal visits, and think clearly when
            decisions matter. Preparation for postpartum is a key part of birth
            planning.
          </p>

          <p className="mt-4">
            Families choose The Prepared Birth when information feels
            overwhelming, when recommendations feel heavy, or when they want
            education tailored to their hospital or birth center care.{" "}
            <strong>The goal is simple</strong>: clear understanding, confident
            decisions, and steady guidance.
          </p>

          <div className="mt-6 rounded-xl2 bg-paper border border-black/10 p-5">
            <div className="font-semibold">Experience</div>
            <p className="mt-2">
              I've spent more than 15 years working in birth - supporting
              hundreds of families in hospital and birth-center settings. My
              background includes work as a certified childbirth educator, birth
              and postpartum doula, and midwife assistant, alongside midwives
              and maternity care teams.
              <br />
              <br />
              Over time, I chose to focus primarily on education and
              consultation. I offer thoughtful preparation, clear explanations,
              and steady guidance so families feel informed, grounded, and
              confident as they move through pregnancy, birth planning, and
              early postpartum.
            </p>
          </div>

          <p className="mt-6">
            You don't need to have everything figured out right now. Most people
            don't. What helps is having a place to talk things through - with
            someone steady, experienced, and outside the swirl of opinions.
            <br />
            <br />
            If that sounds supportive, the best place to begin is with a
            Preparation Session.
          </p>

          <div className="mt-6">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center w-full no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
            >
              Book a Preparation Session Now
            </Link>
          </div>
        </Card>

        {/* Image + supporting text */}
        <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/birth-tub.jpg"
              alt="Quiet support and connection after birth"
              className="w-full h-[380px] object-cover"
            />
          </div>

          <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 flex flex-col justify-center">
            <h3 className="font-serif text-2xl">A calm, supportive environment</h3>
            <p className="mt-4 opacity-85 text-base">
              Birth preparation is about creating clarity and confidence for the
              journey ahead. Whether you're planning hospital or birth-center
              care, experienced guidance helps families feel oriented rather
              than overwhelmed.
            </p>
            <p className="mt-4 opacity-85 text-base">
              The work focuses on understanding your options, preparing for
              decisions, and feeling steady as you navigate pregnancy, birth,
              and early postpartum life.
            </p>
          </div>
        </div>

        {/* Spotify */}
        <div className="mt-10 pt-6 border-t border-black/10">
          <h3 className="font-semibold text-base mb-2">Listen to The Prepared Birth</h3>
          <p className="text-sm opacity-85 mb-4 max-w-3xl">
            Short, focused conversations about birth preparation,
            decision-making, and what clarity actually means when you're
            planning for birth.
          </p>
          <a
            href="https://open.spotify.com/show/5XI2jRfhvve3eGbRhN9KZB?si=zm6VaP2aQRqVd6HlvHvcnQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition"
          >
            Listen on Spotify
          </a>
        </div>

        {/* Education + timeline */}
        <div className="mt-10 grid xl:grid-cols-[1.5fr_0.9fr] gap-6 items-start">
          <div>
            <PackageCard
              title="The Prepared Birth Education"
              subtitle="Personal birth preparation during pregnancy for Tacoma families"
              description="Focused prenatal and postpartum preparation tailored to your circumstances"
              bullets={[
                "How labor typically unfolds",
                "Understanding hospital routines and procedures",
                "Preparing for birth in hospital or birth center settings",
                "Understanding induction, epidural timing, and labor progression",
                "Preparing for vaginal birth, VBAC, or cesarean scenarios",
                "Staying calm when plans change",
                "Questions to ask during prenatal appointments",
                "Guidance choosing where to give birth",
                "Provider and birth resource recommendations in Tacoma",
                "Debriefing after prenatal appointments if questions arise",
                "Practical childbirth education included",
                "Understanding stages of labor",
                "Common birth terminology and procedures",
                "Preparation that goes beyond standard hospital classes",
                "How your partner can support you during labor",
                "What partners can expect in the hospital or birth center",
                "Practical ways partners can stay calm and helpful",
                "What the first days after birth actually look like",
                "Basic newborn care",
                "Early feeding guidance and what to expect",
              ]}
            />
          </div>

          <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8">
            <h3 className="font-serif text-2xl">Timeline of preparation</h3>
            <p className="mt-4 text-sm md:text-base opacity-90">
              Preparation can begin as early as 12 weeks of pregnancy.
            </p>
            <p className="mt-4 text-sm md:text-base opacity-90">
              Most families begin between 20 and 32 weeks, while there is still
              time to thoughtfully prepare before labor approaches.
            </p>
            <p className="mt-4 text-sm md:text-base opacity-90">
              Support can continue through the early postpartum period if
              questions arise.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-10 rounded-xl2 bg-white shadow-soft border border-black/10 p-8">
          <h3 className="font-serif text-2xl">How The Prepared Birth Works</h3>

          <p className="mt-4 opacity-85 text-base">
            <strong>1. Book a preparation call:</strong> We start with a short
            call to talk about your pregnancy, where you're planning to give
            birth, and what preparation would be most helpful for you. If it
            feels like a good fit, we schedule your preparation sessions.
          </p>

          <p className="mt-4 opacity-85 text-base">
            <strong>2. Personalized preparation during pregnancy:</strong>{" "}
            Together we prepare for the real scenarios that can arise during
            labor, including hospital routines, birth center environments, and
            the decisions families sometimes face. This includes practical
            childbirth education and preparing your partner to support you
            during labor.
          </p>

          <p className="mt-4 opacity-85 text-base">
            <strong>3. Ongoing guidance as questions arise:</strong> During
            pregnancy, new questions often come up after prenatal appointments
            or as families think through birth plans. You can reach out with
            questions so we can talk through them together.
          </p>

          <p className="mt-4 opacity-85 text-base">
            <strong>4. Walk into birth prepared:</strong> By the time labor
            begins, you and your partner understand what labor typically looks
            like, how hospital or birth center environments operate, and how to
            navigate decisions calmly. The goal is simple: you walk into birth
            prepared instead of uncertain.
          </p>
        </div>
      </section>
    </div>
  );
}