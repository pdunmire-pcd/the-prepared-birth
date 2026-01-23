import Link from "next/link";

export const metadata = { title: "Working With Me" };

export default function WorkingWithMePage() {
  return (
    <div>
      <section className="container-page py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif">Working With Me</h1>
          <p className="mt-5 text-lg opacity-90">
            I maintain an independent, small-volume consultation practice. I work with families preparing for birth in
            hospital and birth-center settings throughout the Puget Sound region. Many families I work with don’t want a doula at their birth — they want to feel calm, informed, and steady going in. The Prepared Birth offers thoughtful birth education and consultation for people who want clarity during pregnancy without adding another person present during labor.
          </p>

          <div className="mt-8 grid gap-6">
            <div>
              <h2 className="font-semibold text-lg">My approach</h2>
              <p className="mt-2 opacity-85">
                My approach comes from years spent close to birth — including time at The Birthing Inn and alongside
                families birthing in local hospitals.
              </p>
              <p className="mt-3 opacity-85">
                That experience taught me how birth actually unfolds: slowly, intensely, sometimes quietly, sometimes
                asking more than expected. Preparation, to me, is about helping families feel oriented rather than
                overwhelmed — so decisions feel familiar rather than frightening.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Consultation format</h2>
              <p className="mt-2 opacity-85">
                Consultations are offered virtually, or in person by appointment at The Birthing Inn in Tacoma.
              </p>
              <p className="mt-3 text-sm opacity-80">
                This work is education-based and non-medical. I do not attend births in this role.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">Experience & qualifications</h2>
              <ul className="mt-2 grid gap-2 opacity-85 list-disc pl-5">
                <li>Supported over 400 births across roles in birth and early postpartum care</li>
                <li>Twelve years working within a birth center setting, alongside midwives and care teams</li>
                <li>Experience collaborating within hospital-based maternity care environments</li>
                <li>Certified childbirth educator, with background experience as a midwife assistant and postpartum doula</li>
              </ul>
            </div>

            <div>
              <p className="text-sm opacity-80">
                Most families begin with a <Link className="no-underline underline" href="/inquiry">Birth Clarity Session</Link> to determine fit.
              </p>
            </div>
          </div>
        </div>

        <aside className="grid gap-6">
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/sarah-photo.jpg"
              alt="Sarah, childbirth educator and birth consultant"
              className="w-full h-[520px] object-cover object-top"
            />
          </div>
          <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-7">
            <h2 className="font-serif text-2xl">What this Support Looks Like</h2>
            <p className="mt-3 opacity-85">
              I help families: 
              <ul>
                <li>- Understand their options</li>
                <li>- Prepare for decisions before labor begins</li>
                <li>- Feel oriented rather than overwhelmed</li>
                <li>- Gain confidence through clarity</li>
              </ul>            
            </p>
            <p className="mt-4 opacity-85">
              Our work happens through focused, private conversations during pregnancy and often into postpartum. Some families opt for extended personalized guidance through pregnancy and early postpartum. This is a concierge-style option.
            </p>
            <ul className="mt-4 grid gap-2 text-sm opacity-90">
              <p> This work is a good fit if you:</p>
              <li>• Want fewer voices during labor, not more</li>
              <li>• Value preparation and perspective</li>
              <li>• Prefer calm, experience-based guidance</li>
            </ul>
            <p className="mt-4 text-sm opacity-80">
              Most families begin with a private Birth Clarity Session to orient themselves and ask questions before deciding what kind of preparation they want. Appointments are limited. Postpartum support focuses on integration, recovery, and settling into early family life with steadiness and perspective.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}