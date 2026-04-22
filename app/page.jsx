import Link from "next/link";
import BirthPreparationSlider from "./BirthPreparationSlider";
import CalendlyEmbed from "/components/CalendlyEmbed.jsx";

export const metadata = {
  title: "The Prepared Birth - Private Birth Preparation in Tacoma, WA",
  description:
    "Private birth preparation for people who want clarity — without adding another person to the birth room. Tacoma and virtual nationwide.",
  keywords:
    "childbirth education, childbirth classes, tacoma birth, puyallup birth, the birthing inn, Tacoma doula, pierce county birth, tacoma birth guide, birth help tacoma, pacific northwest moms, tacoma general, st. josephs, hospital birth preparation, birth-center care, prenatal education, birth clarity, JBLM, birth support, postpartum preparation, newborn care, birth planning, personalized birth prep, virtual birth classes, birth workshops, birth coaching, birth guidance, birth education, birth resources, birth support tacoma, birth preparation tacoma, birth classes tacoma, birth education tacoma, birth classes",
  openGraph: {
    title: "The Prepared Birth - Private Birth Preparation in Tacoma",
    description:
      "Private birth preparation for people who want clarity — without adding another person to the birth room.",
    url: "https://thepreparedbirth.com",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div>
      <section className="container-page grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
            Tacoma's Birth Guide
          </h1>

          <p className="mt-5 text-lg opacity-90 md:text-xl">
            You don't need multiple classes - you need one clear path through your birth, postpartum, and newborn care here in Tacoma.
          </p>

          <p className="mt-5 text-lg opacity-90 md:text-xl">
            When things change. When decisions matter. When you want to feel steady - not overwhelmed - you have a guide. Guidance you can actually use - step by step.
            This is personalized birth preparation from pregnancy into postpartum - so you're never left figuring it out on your own. I regularly
            help families preparing for birth at Tacoma General, St. Joseph
            Medical Center, Good Samaritan Hospital, and local birth centers
            like The Birthing Inn - I&apos;ll help you prepare for that exact
            experience.
          </p>

          <div className="mt-6">
            <Link
              href="/inquiry"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white no-underline shadow-soft transition hover:bg-sage-800"
            >
              Schedule a consultation
            </Link>
            <p className="mt-3 text-center text-sm opacity-90">
              Free 20-minute birth planning call
            </p>
          </div>
          <div className="mt-6">
            <Link
              href="#book-workshop"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white no-underline shadow-soft transition hover:bg-sage-800"
            >
              Join a Workshop
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

      <CalendlyEmbed />

      <BirthPreparationSlider />
    </div>
  );
}