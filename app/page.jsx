import Link from "next/link";
import BirthPreparationSlider from "./BirthPreparationSlider";

export const metadata = {
  title: "The Prepared Birth - Private Birth Preparation in Tacoma, WA",
  description:
    "Private birth preparation for people who want clarity — without adding another person to the birth room. Tacoma and virtual nationwide.",
  keywords:
    "childbirth education, childbirth classes, tacoma birth, puyallup birth, the birthing inn, Tacoma doula, pierce county birth, tacoma birth guide, birth help tacoma, pacific northwest moms, tacoma general, st. josephs, hospital birth preparation, birth-center care, prenatal education, birth clarity, JBLM",
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
            Walk into labor calm, informed, and ready
          </h1>

          <p className="mt-5 text-lg opacity-90 md:text-xl">
            Prepare for real labor situations so you can walk into birth feeling
            informed, confident, and ready for whatever unfolds.
          </p>

          <p className="mt-5 text-lg opacity-90 md:text-xl">
            This is personalized birth preparation - not birth attendance - so
            you walk into labor already informed, calm, and ready. I regularly
            help families preparing for birth at Tacoma General, St. Joseph
            Medical Center, Good Samaritan Hospital, and local birth centers
            like The Birthing Inn - I&apos;ll help you prepare for that exact
            experience.

            No pressure - just a conversation to see if this is the right fit. for both of you- just one of you. Partners are part of this too. 
          </p>

          <div className="mt-6">
            <Link
              href="/inquiry"
              className="inline-flex w-full items-center justify-center rounded-xl bg-sage-700 px-5 py-3 text-white no-underline shadow-soft transition hover:bg-sage-800"
            >
              Schedule a consultation
            </Link>
          </div>
          <div className="mt-6">
            <Link
              href="https://thebirthinginn.com/birth-classes/"
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

      <BirthPreparationSlider />
    </div>
  );
}