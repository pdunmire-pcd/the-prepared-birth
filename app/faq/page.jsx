export const metadata = {
  title: "FAQ - The Prepared Birth",
  description: "Frequently asked questions about birth education and consultation services. Learn about the Birth Clarity Session, pricing, insurance, and how we work with families in the Puget Sound region.",
  keywords: "birth education FAQ, childbirth class questions, Tacoma birth support, doula vs educator, birth preparation questions",
  openGraph: {
    title: "FAQ - The Prepared Birth",
    description: "Quick clarity on what this service is, how it works, and whether it's a fit for your family.",
    url: "https://thepreparedbirth.com/faq",
    siteName: "The Prepared Birth",
    locale: "en_US",
    type: "website",
  }
};

const faqs = [
  {
    q: "What do you offer?",
    a: "I offer small-group workshops and private birth preparation for Tacoma and Pierce County families. You'll gain practical tools, a personalized plan, and the confidence to make informed decisions—even if birth unfolds differently than expected.",
  },
  {
    q: "Who do you work with?",
    a: "I support first-time and experienced parents preparing for hospital, birth-center, or home birth. My preparation is especially valuable for families who want to understand their options, involve their support person, and feel confident advocating for themselves and their baby.",
  },
  {
    q: "Do you offer childbirth education classes?",
    a: "Yes. Choose a small-group birth workshop or private preparation tailored to your birthplace, concerns, and goals. Every option includes practical childbirth education, partner preparation, informed consent and advocacy, comfort techniques, birth preferences, and preparation for the early postpartum transition.",
  },
  {
    q: "Do you take insurance?",
    a: "At this time, I do not accept insurance. However, many clients are able to get partial reimbursement from their insurance or HSA/FSA by submitting a letter or invoice from me. I'm happy to provide that upon request.",
  },
  {
    q: "Is this a doula service?",
    a: "This is preparation - not birth attendance. My work centers on private, in-depth birth preparation, so you feel steady and informed going into labor. I do not routinely attend births. A very limited number of birth attendance spots are offered each year, by request and availability. Please inquire if you do need doula support. I do have trusted resources.",
  }
];

function AccordionItem({ q, a }) {
  return (
    <details className="rounded-xl2 bg-white shadow-soft border border-black/10 p-6">
      <summary className="cursor-pointer font-semibold">
        {q}
      </summary>
      <p className="mt-3 opacity-85">{a}</p>
    </details>
  );
}

export default function FAQPage() {
  return (
    <div>
      <section className="container-page py-14 md:py-20">
        <h1 className="text-4xl md:text-5xl font-serif">Frequently Asked Questions</h1>
        <p className="mt-4 text-lg opacity-90 max-w-3xl">
          Quick clarity on what this service is, how it works, and whether it's a fit.
        </p>

        {/* Not a full-bleed hero; image is supportive, not dominant */}
        <div className="mt-10 grid lg:grid-cols-3 gap-6 items-start">
          <div className="lg:col-span-2 grid gap-4">
            {faqs.map((item) => (
              <AccordionItem key={item.q} {...item} />
            ))}
          </div>
          <div className="rounded-xl2 overflow-hidden shadow-soft border border-black/10">
            <img
              src="/images/faq-moment.png"
              alt="Support during labor"
              className="w-full h-[360px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}