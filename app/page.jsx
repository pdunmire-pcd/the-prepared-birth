import Link from "next/link";
import BirthPreparationSlider from "./BirthPreparationSlider";
import CalendlyEmbed from "/components/CalendlyEmbed.jsx";
import { GoogleReviewsStrip } from "/components/GoogleReviewsBadge.jsx";

export const metadata = {
  title: "The Prepared Birth - Private Birth Preparation in Tacoma, WA",
  description:
    "Real-world birth preparation for Tacoma hospitals, birth centers, and home birth. Walk in feeling ready. Come home prepared.",
  keywords:
    "childbirth education, childbirth classes, tacoma birth, puyallup birth, the birthing inn, Tacoma doula, pierce county birth, tacoma birth guide, birth help tacoma, pacific northwest moms, tacoma general, st. josephs, hospital birth preparation, birth-center care, prenatal education, birth clarity, JBLM, birth support, postpartum preparation, newborn care, birth planning, personalized birth prep, virtual birth classes, birth workshops, birth coaching, birth guidance, birth education, birth resources, birth support tacoma, birth preparation tacoma, birth classes tacoma, birth education tacoma, birth classes tacoma wa, birth preparation tacoma wa, birth support tacoma wa, birth education tacoma wa, birth coaching tacoma wa, birth workshops tacoma wa",
  openGraph: {
    title: "The Prepared Birth - Private Birth Preparation in Tacoma",
    description:
      "Real-world birth preparation for Tacoma hospitals, birth centers, and home birth.",
    url: "https://thepreparedbirth.com",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="text-sm font-medium uppercase tracking-widest opacity-60 mb-3">
            Real-world birth preparation for Tacoma hospitals, birth centers, and home birth.
          </p>

          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Walk Into Birth Feeling Ready. Come Home Prepared.
          </h1>

          <p className="mt-5 text-lg opacity-90 md:text-xl">
            You deserve more than a class filled with information. You deserve to feel calm, capable, and connected—ready to make decisions together and prepared for the realities of birth and bringing your baby home.
          </p>

          <p className="mt-4 text-lg opacity-90 md:text-xl">
            Learn how to recognize labor, when to leave for your birthplace, what to expect when you arrive, and how your partner can genuinely help. Practice useful comfort techniques, understand your options, and learn how to make informed decisions without feeling rushed or powerless.
          </p>

          <div className="mt-5">
            <p className="font-medium mb-3">You&apos;ll leave with:</p>
            <ul className="space-y-2 text-base opacity-90">
              <li>• Your personalized birth plan and preferences</li>
              <li>• Practical comfort measures and labor tools</li>
              <li>• Clear guidance for navigating interventions and unexpected changes</li>
              <li>• A partner who knows what to do and how to advocate alongside you</li>
              <li>• Greater confidence in yourself, your choices, and your ability to adapt</li>
            </ul>
          </div>

          <div className="mt-8">
            <Link
              href="/working-with-me"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white no-underline shadow-soft transition hover:bg-sage-800"
            >
              Explore Classes &amp; Private Preparation
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl2 border border-black/10 shadow-soft">
            <img
              src="/images/Sarah-homepage-photo.jpeg"
              alt="The Prepared Birth"
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <GoogleReviewsStrip />

      {/* Fourth Trimester + credentials */}
      <section className="border-t border-black/10 py-12 md:py-16">
        <div className="container-page max-w-3xl">
          <p className="text-lg opacity-90">
            For families who want to feel prepared beyond delivery,{" "}
            <strong>The Prepared Fourth Trimester</strong> continues that preparation into newborn behavior, feeding, sleep, soothing, postpartum recovery, and the realities of your first weeks together.
          </p>
          <p className="mt-4 text-sm opacity-60">
            Created from 14+ years of experience supporting Tacoma families through hundreds of births—with firsthand knowledge of our local hospitals, The Birthing Inn, and the greater Tacoma birth community.
          </p>
        </div>
      </section>

      {/* Choose your preparation */}
      <section className="py-14 md:py-20 border-t border-black/10">
        <div className="container-page max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl">
            Choose the Preparation That Fits Your Family
          </h2>

          <ul className="mt-6 space-y-3 text-base opacity-90">
            <li>• Small-group hospital birth workshops at Madrona Physical Therapy in Tacoma</li>
            <li>• Out-of-hospital birth preparation at The Birthing Inn</li>
            <li>• The Prepared Fourth Trimester: Newborn, Feeding &amp; Postpartum Preparation</li>
            <li>• Private birth preparation personalized to your birthplace, concerns, and goals</li>
          </ul>

          <p className="mt-6 text-sm opacity-70">
            Every class and workshop includes a private 20-minute follow-up call with Sarah—giving you dedicated time to ask personal questions, clarify your plan, and feel confident about what comes next.
          </p>

          <div className="mt-6">
            <Link
              href="/working-with-me"
              className="inline-flex items-center justify-center rounded-xl bg-sage-700 px-6 py-3 text-white no-underline shadow-soft transition hover:bg-sage-800"
            >
              Explore Classes &amp; Private Preparation
            </Link>
          </div>

          <p className="mt-5 text-sm opacity-60">Small groups. Practical preparation. Personalized support.</p>
          <p className="mt-1 text-sm opacity-60">
            Serving families planning hospital, birth-center, and home births throughout Tacoma and Pierce County.
          </p>
        </div>
      </section>

      <CalendlyEmbed />

      <p className="text-center text-sm text-gray-500 px-6 max-w-2xl mx-auto -mt-4">
        While my primary focus is private childbirth education and birth preparation, limited doula support may be available for select families based on availability and fit.
      </p>

      <BirthPreparationSlider />
    </div>
  );
}
