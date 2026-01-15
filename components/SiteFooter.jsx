import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 mt-16">
      <div className="container-page py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl">The Prepared Birth.</div>
          <p className="mt-2 text-sm opacity-80 max-w-sm">
            Birth preparation consultations and childbirth education — calm, experienced guidance for thoughtful families.
            Serving the Puget Sound region, with virtual sessions available when appropriate.
          </p>
        </div>

        <div className="text-sm">
          <div className="font-semibold mb-2">Quick links</div>
          <div className="grid gap-1 opacity-85">
            <Link href="/about" className="no-underline hover:underline">About</Link>
            <Link href="/working-with-me" className="no-underline hover:underline">Working With Me</Link>
            <Link href="/faq" className="no-underline hover:underline">FAQ</Link>
            <Link href="/inquiry" className="no-underline hover:underline">Inquiry</Link>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold mb-2">Service area</div>
          <div className="opacity-80">
            Seattle–Tacoma • Puget Sound • Virtual when appropriate
          </div>

<div className="mt-4">
  <div className="font-semibold mb-2">Local resources</div>
  <div className="grid gap-1 opacity-85">
    <Link href="https://thebirthinginn.com" target="_blank" className="no-underline hover:underline">
      The Birthing Inn
    </Link>
    <Link href="https://allaboutbirthmidwifery.com" target="_blank" className="no-underline hover:underline">
      All About Birth Midwifery
    </Link>
  </div>
</div>

          <div className="mt-4 opacity-70 text-xs">
            Education-based, non-medical support. No labor or birth attendance.
          </div>
        </div>
      </div>
      <div className="border-t border-black/5">
        <div className="container-page py-5 text-xs opacity-70 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} The Prepared Birth</span>
          <span>Birth Consultant • Childbirth Educator • Seattle–Tacoma</span>
        </div>
      </div>
    </footer>
  );
}
