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
    a: "Private, relationship-based birth preparation and consulting. This work is educational and supportive in nature and focuses on clarity, steadiness, and thoughtful preparation.",
  },
  {
    q: "Who do you work with?",
    a: "Families planning hospital or birth-center care who value calm, experienced guidance.",
  },
  {
    q: "How do we begin?",
    a: "Most families begin with a private Birth Clarity Session to determine fit.",
  },
  {
    q: "Do you list prices publicly?",
    a: "Only the Birth Clarity Session fee is listed publicly. Ongoing work is discussed privately once scope and alignment are clear.",
  },
  {
    q: "Do you offer childbirth education classes?",
    a: "Yes, these can be scheduled and are taught privately upon request.",
  },
  {
    q: "Do you take insurance?",
    a: "At this time, I do not accept insurance. However, many clients are able to get partial reimbursement from their insurance or HSA/FSA by submitting a letter or invoice from me. I'm happy to provide that upon request.",
  },
  {
    q: "Is this a doula service?",
    a: "No. This is education and preparation only. I dont attend births, but I offer thoughtful guidance to help parents feel ready and informed beforehand.",
  },
  {
    q: "What happens during a Birth Clarity Session?",
    a: "We focus on your questions, concerns, and preferences. You'll receive tailored clear information, practical guidance, and help sorting through your options so you can feel more confident moving forward.",
  },
  {
    q: "What if I'm scared - or not sure what I want yet?",
    a: "That's completely normal! Many parents feel uncertain or anxious. My role is to help you navigate those feelings with clear information and steady support so you can make the best decisions for you and your family. Preparation doesn't require certainty - it helps create clarity over time",
  },
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