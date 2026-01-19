"use client";

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
        <div className="container-page py-8 text-xs opacity-70 flex flex-wrap gap-4 justify-between items-center">
          <div>
            <div>© {new Date().getFullYear()} The Prepared Birth</div>
            <div className="mt-1">Birth Consultant • Childbirth Educator • Seattle–Tacoma</div>
          </div>
          <a 
            href="https://www.linkedin.com/in/paris-allkurti-591550252/" 
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 text-sm font-medium tracking-wide no-underline transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #f4e4c1 0%, #e8d5b7 100%)',
              color: '#3d2f1f',
              border: '2px solid #a0826d',
              letterSpacing: '0.5px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #e8d5b7 0%, #a0826d 100%)';
              e.currentTarget.style.color = '#f4e4c1';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 115, 85, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #f4e4c1 0%, #e8d5b7 100%)';
              e.currentTarget.style.color = '#3d2f1f';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <span className="absolute top-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-b-8" style={{ borderBottomColor: '#a0826d' }}></span>
            <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8" style={{ borderTopColor: '#a0826d' }}></span>
            Site by Paris Allkurti
          </a>
        </div>
      </div>
    </footer>
  );
}