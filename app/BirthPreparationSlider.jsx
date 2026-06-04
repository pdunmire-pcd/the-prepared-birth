"use client";

import { useState } from "react";

export default function BirthPreparationSlider() {
  const slides = [
    {
      eyebrow: "Clear Preparation",
      title: "You don't need more information. You need a clear plan for your birth.",
      layout: "two-column",
      leftTitle: "Most Tacoma families",
      leftItems: [
        "Feel unsure what applies to their hospital or birth center",
        "Get conflicting advice",
        "Don’t feel fully prepared for real decisions",
      ],
      rightTitle: "That’s where I come in",
      rightIntro: "I guide you through:",
      rightItems: [
        "Exactly how birth works at St. Joseph Medical Center, Tacoma General, and The Birthing Inn",
        "What decisions actually matter",
        "How to prepare for your specific birth",
        "Private preparation and doula support — available virtually or in-home by appointment."
      ],
    },
    {
      eyebrow: "Who This Is For",
      title: "This is for you if...",
      layout: "list",
      items: [
        "You're pregnant and planning birth in Tacoma or Pierce County",
        "You want to understand what labor actually looks like",
        "You want to feel calm walking into the hospital or birth center",
        "You want to know what questions to ask during prenatal appointments",
        "You want your partner to feel prepared too",
        "You want preparation that goes deeper than a typical class",
        "You want to understand real birth scenarios before labor begins",
      ],
    },
    {
      eyebrow: "Why It Matters",
      title: "Why Preparation Matters",
      layout: "text",
      paragraphs: [
        "Most families receive excellent medical care during pregnancy, but many still feel unsure about what labor actually looks like or how to navigate decisions that arise along the way.",
        "Understanding how labor typically unfolds, how hospitals and birth centers operate, and how to ask thoughtful questions can make a significant difference in how calm and confident families feel.",
      ],
      emphasis:
        "The goal of The Prepared Birth is simple: to help you walk into labor informed, prepared, and ready for whatever unfolds.",
    },
    {
      eyebrow: "Why It Matters",
      title: "Experience you can feel",
      layout: "text",
      paragraphs: [
        "As a former midwife assistant, certified birth and postpartum doula, childbirth educator, and Birth Consultant at the Birthing Inn. Trusted by hundreds of Tacoma families over the past 15+ years. I've worked inside hospital and birth center settings and collaborate with providers and local doulas throughout Tacoma. I understand how birth actually unfolds here. I'm known for working calmly and collaboratively within the care team - while helping families feel informed, supported, and not alone. Families I've supported often say they felt more prepared, more confident, and more at ease - even in uncertain moments.",
        "This is personal, too",
        "I had both of my babies by C-section at Tacoma General. I know what it feels like to walk into birth without fully knowing what to expect. And I know how different it feels when you do."
      ]
    },
    {
      eyebrow: "Real Scenarios",
      title: "Common Birth Situations We Prepare For",
      layout: "list-with-note",
      items: [
        "Arriving at the hospital in early labor",
        "When induction is recommended",
        "When labor slows down or stalls",
        "Understanding epidural timing",
        "Navigating common hospital procedures and routines",
        "How to ask thoughtful questions when decisions arise",
        "Navigating unexpected changes to the birth plan",
        "Understanding transfers from birth center to hospital if needed",
      ],
      note:
        "The goal is not to predict birth, but to help families understand how these moments sometimes unfold.\n\nThere isn't one right way to give birth. I support hospital births, birth center births, VBAC, C-section, medicated and unmedicated. I also support families navigating fertility journeys or pregnancy later in life.",
    },
    {
      eyebrow: "Why Families Choose This",
      title: "Why Families Choose This Instead of a Childbirth Class",
      layout: "mixed",
      paragraphs: [
        "Hospital childbirth classes are helpful, but they are typically large group classes covering general information.",
        "The Prepared Birth is different.",
        "Here we prepare specifically for your pregnancy, your hospital or birth center care, and the real decisions that may arise during labor.",
      ],
      items: [
        "Deep understanding of labor and hospital routines",
        "Preparation for VBAC, cesarean, or unexpected changes",
        "Guidance on questions to ask providers during prenatal visits",
        "A partner who feels confident supporting them",
        "Someone to help them think through real birth scenarios ahead of time",
      ],
    },
    {
      eyebrow: "How This Differs",
      title: "Why This Is Different From a Doula",
      layout: "text",
      paragraphs: [
        "Many people I work with respect doulas — and still don’t want another person in the birth room.",
        "My work focuses on preparation, not attendance.",
        "I help you think through decisions before labor begins so you can enter birth feeling steady, informed, and confident — without adding another relationship or dynamic to the room.",
      ],
      emphasis:
        "Some families may want a more hands-on birth support person in addition to preparation, and that’s wonderful.",
      note:
        "If that’s you, I take a very small number of doula clients each year. For some, preparation naturally turns into deeper support during labor and postpartum. This includes labor support, postpartum recovery, and feeding support. Availability is limited and offered by application.",
    },
    {
      eyebrow: "Start Here",
      title: "Start where you are",
      layout: "start-options",
      introTitle: "Not sure where to start?",
      introText:
        "Most families begin with a consultation - and we figure it out together.",
      options: [
        {
          title: "Workshop",
          description: "3-week workshop at The Birthing Inn",
          buttonLabel: "Reserve Spot",
          buttonHref: "/contact",
        },
        {
          title: "Private Preparation",
          description: "Virtual or in-home, by appointment",
          buttonLabel: "Schedule Consultation",
          buttonHref: "https://calendly.com/thepreparedbirth25?lid=ygjvde2x51fh&utm_medium=email&utm_source=braze&utm_campaign=2024Q4-NUR-TRIAL-ONB-ALL_ROLES-EN-Pers_Core_Onboarding&utm_content=user_url_text",
        },
        {
          title: "Full Support (Application Only)",
          description: "Pregnancy + Birth + Postpartum",
          buttonLabel: "Apply / Schedule",
          buttonHref: "https://calendly.com/thepreparedbirth25?lid=ygjvde2x51fh&utm_medium=email&utm_source=braze&utm_campaign=2024Q4-NUR-TRIAL-ONB-ALL_ROLES-EN-Pers_Core_Onboarding&utm_content=user_url_text",
        },
      ],
      resourcesTitle: "Tacoma Birth Guide + Resources",
      resourcesIntro:
        "I connect families with trusted Tacoma and Puget Sound resources:",
      resources: [
        "Lactation support",
        "Pelvic floor physical therapy",
        "Prenatal chiropractic care",
        "Perinatal mental health",
        "Postpartum support",
        "Pediatric providers",
      ],
      closing: [
        "You don't need to have everything figured out right now.",
        "You just need a place to start.",
      ],
      ctaLabel: "Schedule a Consultation",
      ctaHref: "https://calendly.com/thepreparedbirth25?lid=ygjvde2x51fh&utm_medium=email&utm_source=braze&utm_campaign=2024Q4-NUR-TRIAL-ONB-ALL_ROLES-EN-Pers_Core_Onboarding&utm_content=user_url_text",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="container-page mt-16 md:mt-20">
      <div className="overflow-hidden rounded-xl2 border border-black/8 bg-[#fdfcf9] shadow-soft">
        <div className="px-6 pb-5 pt-8 md:px-10 md:pb-6 md:pt-10">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/50">
                {slide.eyebrow}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-[1.15] text-[var(--foreground)] md:text-4xl">
                {slide.title}
              </h2>
            </div>

            <div className="hidden shrink-0 md:flex items-center gap-2">
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Previous slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-base text-[var(--foreground)] transition hover:bg-black/5"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                type="button"
                aria-label="Next slide"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-base text-[var(--foreground)] transition hover:bg-black/5"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-black/8 px-6 py-7 md:px-10 md:py-8">
          {slide.layout === "two-column" && (
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
                  {slide.leftTitle}
                </h3>
                <ul className="mt-5 space-y-4">
                  {slide.leftItems.map((item, index) => (
                    <li key={index} className="flex gap-3 text-[15px] leading-7 text-black/75 md:text-base">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-0 md:border-l md:border-black/8 md:pl-8">
                <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
                  {slide.rightTitle}
                </h3>
                <p className="mt-4 text-[15px] leading-7 text-black/70 md:text-base">
                  {slide.rightIntro}
                </p>
                <ul className="mt-4 space-y-4">
                  {slide.rightItems.map((item, index) => (
                    <li key={index} className="flex gap-3 text-[15px] leading-7 text-black/75 md:text-base">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {slide.layout === "list" && (
            <div className="max-w-4xl">
              <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                {slide.items.map((item, index) => (
                  <li key={index} className="flex gap-3 text-[15px] leading-7 text-black/75 md:text-base">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {slide.layout === "list-with-note" && (
            <div className="max-w-5xl">
              <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                {slide.items.map((item, index) => (
                  <li key={index} className="flex gap-3 text-[15px] leading-7 text-black/75 md:text-base">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/60" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 max-w-3xl border-t border-black/8 pt-5 whitespace-pre-line text-[15px] leading-7 text-black/65 md:text-base">
                {slide.note}
              </p>
            </div>
          )}

          {slide.layout === "text" && (
            <div className="max-w-3xl space-y-5">
              {slide.paragraphs?.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-[15px] leading-8 md:text-lg ${
                    index === 1 ? "text-black/70 italic" : "text-black/78"
                  }`}
                >
                  {paragraph}
                </p>
              ))}

              {slide.emphasis && (
                <p className="border-l-2 border-black/12 pl-5 text-[15px] leading-8 text-[var(--foreground)] md:text-lg">
                  {slide.emphasis}
                </p>
              )}

              {slide.note && (
                <p className="text-[15px] leading-8 text-black/68 md:text-base">
                  {slide.note}
                </p>
              )}
            </div>
          )}

          {slide.layout === "mixed" && (
            <div className="max-w-5xl">
              <div className="max-w-3xl space-y-5">
                {slide.paragraphs?.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-[15px] leading-8 md:text-lg ${
                      index === 1
                        ? "italic text-[var(--foreground)]"
                        : "text-black/78"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 border-t border-black/8 pt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">
                  Families often choose this preparation when they want:
                </p>

                <ul className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {slide.items.map((item, index) => (
                    <li key={index} className="flex gap-3 text-[15px] leading-7 text-black/75 md:text-base">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {slide.layout === "start-options" && (
            <div className="max-w-5xl space-y-10">
              <div className="max-w-3xl">
                <p className="text-[15px] leading-8 text-black/78 md:text-lg">
                  <span className="font-medium text-[var(--foreground)]">
                    {slide.introTitle}
                  </span>
                  <br />
                  {slide.introText}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {slide.options.map((option, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-black/8 bg-white/70 p-5 shadow-sm"
                  >
                    <h3 className="font-serif text-xl text-[var(--foreground)]">
                      {option.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-black/70">
                      {option.description}
                    </p>
                    <a
                      href={option.buttonHref}
                      className="mt-5 inline-flex items-center justify-center rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[var(--foreground)] transition hover:bg-black/5"
                    >
                      {option.buttonLabel}
                    </a>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-black/8 bg-[#f8f5ef] p-6">
                <h3 className="font-serif text-2xl text-[var(--foreground)]">
                  {slide.resourcesTitle}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-black/72 md:text-base">
                  {slide.resourcesIntro}
                </p>

                <ul className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
                  {slide.resources.map((item, index) => (
                    <li
                      key={index}
                      className="flex gap-3 text-[15px] leading-7 text-black/75 md:text-base"
                    >
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--foreground)]/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="max-w-3xl border-t border-black/8 pt-6">
                {slide.closing.map((line, index) => (
                  <p
                    key={index}
                    className={`text-[15px] leading-8 md:text-lg ${
                      index === 1 ? "text-[var(--foreground)]" : "text-black/72"
                    }`}
                  >
                    {line}
                  </p>
                ))}

                <a
                  href={slide.ctaHref}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
                >
                  {slide.ctaLabel}
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="border-t border-black/8 px-6 py-4 md:px-10">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm text-black/45">
              {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={`rounded-full transition-all ${
                    currentSlide === index
                      ? "h-2 w-8 bg-[var(--foreground)]/70"
                      : "h-2 w-2 bg-black/12 hover:bg-black/22"
                  }`}
                />
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2 md:hidden">
              <button
                onClick={prevSlide}
                type="button"
                aria-label="Previous slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm text-[var(--foreground)] transition hover:bg-black/5"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                type="button"
                aria-label="Next slide"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-sm text-[var(--foreground)] transition hover:bg-black/5"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}