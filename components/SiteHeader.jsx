import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/inquiry", label: "Inquiry" },
  { href: "/working-with-me", label: "Working With Me" },
  { href: "/faq", label: "FAQ" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur border-b border-black/5">
      <div className="container-page py-4 flex items-center justify-between gap-6">
        <Link href="/" className="no-underline">
          <div className="leading-tight">
            <div className="font-serif text-lg">The Prepared Birth.</div>
            <div className="text-xs opacity-70">Education • Planning • Postpartum</div>
          </div>
        </Link>

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
        </nav>

        <div className="md:hidden text-sm opacity-80">Menu</div>
      </div>
    </header>
  );
}
