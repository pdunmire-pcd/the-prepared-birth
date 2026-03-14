import Link from "next/link";

export const metadata = {
  title: "Working With Me - The Prepared Birth",
  description: "Independent birth education and consultation practice serving families in the Puget Sound region. Calm, experienced guidance for hospital and birth-center births without adding another person at your birth.",
  keywords: "birth consultant Tacoma, childbirth educator Puget Sound, hospital birth preparation, birth-center support, prenatal consultation",
  openGraph: {
    title: "Working With Me - The Prepared Birth",
    description: "Thoughtful birth education and consultation for families who want clarity during pregnancy without adding another person present during labor.",
    url: "https://thepreparedbirth.com/working-with-me",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  }
};

export default function WorkingWithMePage() {
  return (
    <div>
      <section className="container-page py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif">Working With Me</h1>
          <p className="mt-5 text-lg opacity-90">
            I maintain an independent, small-volume consultation practice. I work with families preparing for birth in
            hospital and birth-center settings throughout the Puget Sound region. Many families I work with don't want a doula at their birth — they want to feel calm, informed, and steady going in. The Prepared Birth offers thoughtful birth education and consultation for people who want clarity during pregnancy without adding another person present during labor.
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
          
          <div className="rounded-xl2 bg-paper border border-black/10 p-7">
            <h2 className="font-serif text-2xl mb-3">Listen to The Prepared Birth</h2>
            <p className="text-sm opacity-85 mb-4">
              Short, focused conversations about birth preparation, decision-making, and what clarity actually means when you're planning for birth.
            </p>
            <a href="https://open.spotify.com/show/5XI2jRfhvve3eGbRhN9KZB?si=zm6VaP2aQRqVd6HlvHvcnQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition">
              Listen on Spotify
            </a>
          </div>

          <div className="rounded-xl2 bg-white shadow-soft border border-black/10 p-8">
              <h2 className="font-serif text-2xl">Find the Right Support for Your Birth</h2>

              <p className="mt-4 text-base opacity-85">
                Pregnancy and birth come with important decisions — where to give birth, what to expect during labor, and how to prepare in a way that fits your care setting and your values.
              </p>

              <p className="mt-4 text-base opacity-85">
                My role is to help you understand your options, think through recommendations, and feel more confident going into birth.
              </p>

              <p className="mt-4 text-base opacity-85">
                Through personalized preparation and steady guidance, I support families during pregnancy and into the early postpartum weeks.
              </p>

              <p className="mt-4 text-base opacity-85">
                Preparation includes the core elements of childbirth education, along with support tailored to your pregnancy, your questions, and the kind of birth experience you’re preparing for.
              </p>

              <p className="mt-4 text-base opacity-85">
                My approach is shaped by experience supporting hundreds of families in Tacoma hospitals and birth centers, with a focus on helping you feel informed, grounded, and prepared.
              </p>
            </div>
        </aside>
      </section>

      {/* Testimonial Section */}
      <section className="bg-paper border-t border-black/10">
        <div className="container-page py-14 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">What Families Say</h2>
          <blockquote className="max-w-2xl">
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              "I felt so much calmer going into birth. Sarah explained what actually happens during labor and helped us think through questions for our provider. It made a huge difference in how prepared we felt."
            </p>
            <footer className="mt-5 text-sm opacity-60 font-medium tracking-wide uppercase">— A Prepared Birth Family</footer>
          </blockquote>
        </div>
      </section>

      {/* Investment Section */}
      <section className="border-t border-black/10">
        <div className="container-page py-14 md:py-20">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">Investment</h2>
          <p className="opacity-85 max-w-xl mb-8">
            Extended personalized guidance through pregnancy and early postpartum is a concierge-style offering for families who want consistent, unhurried support from early pregnancy through the newborn weeks.
          </p>
          <div className="rounded-xl2 bg-paper border border-black/10 p-8 max-w-sm shadow-soft">
            <p className="text-sm font-medium uppercase tracking-wide opacity-60 mb-1">Extended Guidance Package</p>
            <p className="font-serif text-5xl mt-2">$1,200</p>
            <p className="mt-4 text-sm opacity-75 leading-relaxed">
              Reach out to learn more about what's included and whether this is the right fit for your family.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center w-full no-underline px-5 py-3 rounded-xl bg-sage-700 text-white shadow-soft hover:bg-sage-800 transition">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}