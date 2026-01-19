"use client";

import { useMemo, useState } from "react";
import Link from "next/link";


export default function InquiryPage() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch("/api/inquiry", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
      // Scroll to top so the confirmation is visible on mobile.
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-serif mb-4">Inquiry</h1>

        {status === "success" && (
          <div className="mb-6 rounded-2xl border border-black/10 bg-sage-50 p-5">
            <div className="font-medium">Thanks — I’ll be in touch soon.</div>
            <p className="mt-1 text-sm opacity-80">
              I’ll review your message and follow up within 1–2 business days. If we’re a good fit,
              you’ll receive a private scheduling link.
            </p>
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 rounded-2xl border border-black/10 bg-rose-50 p-5">
            <div className="font-medium">Something went wrong.</div>
            <p className="mt-1 text-sm opacity-80">
              Please try again in a moment. If the issue continues, you can reach out using the contact
              information on this page.
            </p>
          </div>
        )}

        <p className="text-lg opacity-80">
          I work with a limited number of families each month so I can provide thoughtful, responsive support.
          This form helps me understand your needs and determine whether we’re a good fit.
        </p>
      </header>

      <div className="mt-16 grid gap-12 md:grid-cols-[2fr_1fr]">
        {/* FORM */}
        <form onSubmit={onSubmit} className="grid gap-8">
          <Field label="Name(s)" name="names" required />
          <Field label="Email address" name="email" type="email" required />
          <Field label="Estimated due date" name="dueDate" type="date" />

          <Fieldset label="Where are you currently planning to give birth?">
            <Radio name="birthSetting" value="Hospital" />
            <Radio name="birthSetting" value="Birth center" />
            <Radio name="birthSetting" value="Home" />
            <Radio name="birthSetting" value="Still deciding" />
          </Fieldset>

          <Fieldset label="What kind of support are you most interested in?">
            <Checkbox name="support" value="Birth education" />
            <Checkbox name="support" value="Birth planning & decision support" />
            <Checkbox name="support" value="Partner preparation" />
            <Checkbox name="support" value="Postpartum integration" />
            <Checkbox name="support" value="Not sure yet" />
          </Fieldset>

          <Fieldset label="Have you already chosen a clinical provider?">
            <Radio name="providerChosen" value="Yes" />
            <Radio name="providerChosen" value="No" />
            <Radio name="providerChosen" value="In the process" />
          </Fieldset>

          <Textarea label="What prompted you to reach out right now?" name="prompt" />
          <Textarea label="What matters most to you as you prepare for birth?" name="values" />

          <button
            type="submit"
            disabled={isSending}
            className="mt-4 w-fit rounded-xl bg-sage-700 px-6 py-3 text-white hover:opacity-90 disabled:opacity-60"
          >
            {isSending ? "Sending…" : "Submit inquiry"}
          </button>

          <p className="text-sm opacity-70">
            Already a client? Visit{" "}
            <Link className="underline hover:opacity-80" href="/working-with-me">
              Working With Me
            </Link>
            .
          </p>
        </form>

        {/* SIDEBAR */}
        <aside className="rounded-2xl bg-sage-50 p-6 h-fit">
          <h2 className="font-serif text-xl mb-3">How scheduling works</h2>
          <p className="text-sm opacity-80">
            After you submit your inquiry, I’ll review your needs to be sure we’re a good fit. If so,
            you’ll receive a private scheduling link to book your session.
          </p>

          <ul className="mt-4 text-sm opacity-80 space-y-1">
            <li>In-person sessions: select Tuesdays at The Birthing Inn</li>
            <li>Virtual sessions: outside clinic hours</li>
            <li>24-hour notice required</li>
          </ul>

          <div className="mt-6">
            <h3 className="font-medium mb-2">Local resources</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="https://thebirthinginn.com" target="_blank" className="underline">
                  The Birthing Inn
                </Link>
                <br></br>
                <p> I often recommend the Birthing Inn to families who are appropriate candidates for low-risk birth center care in Tacoma. It's a well established, community-rooted birth center known for thoughful midwifery care and a calm respectful approach to birth.</p>
                <br></br>
              </li>
              <li>
                <Link href="https://susanlawlermidwife.com" target="_blank" className="underline">
                  All About Birth Midwifery - Susan Lawler
                </Link>
                <p>
                  For families seeking concierge-style midwifery care, I often point people toward this highly experienced midwife known for her steady, long-standing presence in the Tacoma birth community. Her practice reflects many years of experience and a relationship-centered approach balancing holistic support with medical care
                </p>
              </li>
              <br />
              <li>
                <Link href="https://www.multicare.org/provider/lacey-ballard/" target="_blank" className="underline">
                Lacey Ballard, Hospital Based Midwifery
                </Link>
                <p>
                  For hospitals based midwifery care I align with: Lacey Ballard DNP, CNM is a board - certified nurse midwife and doctor of nursing practice providing comprehensive care across pregnancy, birth, and postpartum. Her work centers physiological birth, informed decision-making, and individualized care within the hospital setting.
                </p>
              </li>
              <li>
                <br></br>
                <p>
                  Resources for local trusted midwives, care providers, and doulas upon request.
                </p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-sage-600/30"
      />
    </label>
  );
}

function Textarea({ label, name }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium">{label}</span>
      <textarea
        name={name}
        rows={4}
        className="rounded-xl border border-black/15 px-4 py-3 outline-none focus:ring-2 focus:ring-sage-600/30"
      />
    </label>
  );
}

function Fieldset({ label, children }) {
  return (
    <fieldset className="grid gap-2">
      <legend className="text-sm font-medium mb-1">{label}</legend>
      {children}
    </fieldset>
  );
}

function Radio({ name, value }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="radio" name={name} value={value} />
      {value}
    </label>
  );
}

function Checkbox({ name, value }) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" name={name} value={value} />
      {value}
    </label>
  );
}
