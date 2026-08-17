"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  { href: "/", label: "Home" },
  { href: "/working-with-me", label: "Birth Preparation" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-black/5">
      <div className="container-page py-4 flex items-center justify-between gap-6">
        <Link href="/" className="no-underline">
          <div className="leading-tight">
            <div className="font-serif text-lg">The Prepared Birth.</div>
            <div className="text-xs opacity-70">Birth Preparation • Advocacy • Partner Support • Postpartum</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="no-underline hover:underline opacity-90 hover:opacity-100"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/inquiry"
            className="no-underline rounded-full bg-sage-700 px-4 py-1.5 text-white transition hover:bg-sage-800"
          >
            Inquire
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-sm opacity-80 hover:opacity-100 flex items-center gap-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          Menu
          <svg
            className={`w-4 h-4 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-black/5 bg-paper">
          <nav className="container-page py-4 flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="no-underline hover:underline opacity-90 hover:opacity-100 py-2 text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/inquiry"
              className="no-underline inline-flex items-center justify-center rounded-full bg-sage-700 px-4 py-2 text-sm text-white transition hover:bg-sage-800 mt-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inquire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}