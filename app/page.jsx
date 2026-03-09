import Link from "next/link";

export const metadata = {
  title: "The Prepared Birth - Private Birth Preparation in Tacoma, WA",
  description: "Private birth preparation for people who want clarity — without adding another person to the birth room. Tacoma and virtual nationwide.",
  keywords: "birth education, childbirth classes, Tacoma birth support, hospital birth preparation, birth-center care, prenatal education, birth clarity",
  openGraph: {
    title: "The Prepared Birth - Private Birth Preparation in Tacoma",
    description: "Private birth preparation for people who want clarity — without adding another person to the birth room.",
    url: "https://thepreparedbirth.com",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  }
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container-page py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
            Calm, practical birth preparation for Tacoma moms.
          </h1>
          <p className="mt-5 text-lg md:text-xl opacity-90">
            Prepare for real labor situations so you can walk into birth feeling informed, confident, and ready for whatever unfolds.
          </p>
          <p className="mt-5 text-lg md:text-xl opacity-90">
            This is personalized birth preparation - not birth attendance - so you walk into labor already informed, calm, and ready. I regularly help families preparing for birth at Tacoma General, St. Joseph Medical Center, Good Samaritan Hospital, and local birth centers like The Birthing Inn, and I'm familiar with how these environments typically operate.
          </p>
        </div>
        <div className="relative">
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/hero.jpg"
              alt="The Prepared Birth"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* This is for you section */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl">This is for you if...</h2>
          
          <ul className="mt-4 space-y-2 text-base md:text-lg opacity-85 max-w-3xl">
            <li>• Your pregnant and planning birth in Tacoma or Pierce County</li>
            <li>• You want to understand what labor actually looks like</li>
            <li>• You want to feel calm walking into the hospital or birth center</li>
            <li>• You want to know what questions to ask during prenatal appointments</li>
            <li>• You want your partner to feel prepared too</li>
            <li>• You want preparation that goes deeper than a typical class</li>
            <li>• You want to understand real birth scenarios before labor begins</li>
          </ul>

        </div>
      </section>

      {/* Clarity Strategy Session Section */}
      <section className="container-page mt-8 md:mt-12">
        <div className="rounded-xl2 bg-sage-50 border border-black/10 p-5 md:p-6">
          <h2 className="font-serif text-2xl md:text-3xl">Why Preparation Matters</h2>

          <p className="mt-3 text-sm md:text-base opacity-90 max-w-3xl">
            Most families receive excellent medical care during pregnancy, but many still feel unsure about what labor actually looks like or how to navigate decisions that arise along the way.
          </p>

          <p className="mt-3 text-sm md:text-base opacity-90 max-w-3xl italic">
            Understanding how labor typically unfolds, how hospitals and birth centers operate, and how to ask thoughtful questions can make a significant difference in how calm and confident families feel.
          </p>

          <div className="mt-4 pt-4 border-t border-black/10">
            <p className="text-sm font-medium">
              The goal of The Prepared Birth is simple: to help you walk into labor informed, prepared, and ready for whatever unfolds.
            </p>
          </div>
        </div>
      </section>

            {/* This is for you section */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl">Common Birth Situations we prepare for :</h2>
          
          <ul className="mt-4 space-y-2 text-base md:text-lg opacity-85 max-w-3xl">
            <li>• Arrive at the hospital in early labo</li>
            <li>• When induction is recommended</li>
            <li>• When labor slows down or stalls</li>
            <li>• Understanding epidural timing</li>
            <li>• Navigating common hospital procedures and routines</li>
            <li>• How to ask thoughtful questions when decisions arise</li>
            <li>• Navigating unexpected changes to the birth plan</li>
            <li>• Understanding transfers from birth center to hospital if needed</li>
          </ul>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl"> The goal is not to predict birth, but to help families understand how these moments sometimes unfold.</p>

        </div>
      </section>

      {/* Why Families Choose this instead of a childbirth class */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl">Why Families Choose this instead of a childbirth class...</h2>

          <p className="mt-3 text-sm md:text-base opacity-90 max-w-3xl">Hospital chidlbirth classes are helpful, but they are typically large group classes covering general information.
          </p>
          
          <p className="mt-3 text-sm md:text-base opacity-90 max-w-3xl italic">The Prepared Birth is different</p>

          <p className="mt-3 text-sm md:text-base opacity-90 max-w-3xl">Here we prepare specifically for your pregnancy, your hospital or birth center care, and the real decisions that may arise during labor.</p>

          <p>Families often choose this preparation when they want:</p>
          
          <ul className="mt-4 space-y-2 text-base md:text-lg opacity-85 max-w-3xl">
            <li>• Deep understanding of labor and hospital routines</li>
            <li>• Preparation for VBAC, cesarean, or unexpected changes</li>
            <li>• Guidance on questions to ask providers during prenatal visits</li>
            <li>• A partner who feels confident supporting them</li>
            <li>• Someone to help them think through real birth scenarios ahead of time</li>
          </ul>

        </div>
      </section>

      {/* Why This Is Different From a Doula */}
      <section className="container-page mt-12 md:mt-16">
        <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8 md:p-10">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">Why This Is Different From a Doula</h2>
          
          <p className="text-base md:text-lg opacity-90 max-w-3xl">
            Many people I work with respect doulas — and still don't want another person in the birth room.
          </p>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl">
            My work focuses on preparation, not attendance.
          </p>

          <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl">
            I help you think through decisions before labor begins so you can enter birth feeling steady, informed, and confident — without adding another relationship or dynamic to the room.
          </p>

          <p className="mt-4 text-base font-medium">
              Some families may want a more hands-on birth support person in addition to preparation, and that's wonderful :
            </p>
            <p className="text-base mt-2">
            If thats you, I take a very small number of doula clients each year. For some, preparation naturally turns into deeper support during labor and postpartum.
          </p>

        </div>
      </section>
    </div>
  );
}