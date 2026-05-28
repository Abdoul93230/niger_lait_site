"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, ChevronDown } from "lucide-react";

function NigerLaitLogo({ scrolled, isHome }: { scrolled: boolean; isHome: boolean }) {
  const dark = !isHome || scrolled;
  return (
    <div className="flex items-center gap-2.5">
      {/* Vrai logo rond Niger-Lait S.A. */}
      <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden"
        style={{ boxShadow: dark ? "0 0 0 2px #C89328" : "0 0 0 2px rgba(255,255,255,0.5)" }}>
        <Image
          src="/images/logo.jpg"
          alt="Niger-Lait S.A."
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </div>
      <div className="leading-tight">
        <div className={`text-base font-bold tracking-wide ${dark ? "text-[#5C2010]" : "text-white"}`} style={{ fontFamily: "Playfair Display, serif" }}>
          NIGER-LAIT S.A
        </div>
        <div className={`text-[9px] font-medium tracking-widest uppercase ${dark ? "text-[#C89328]" : "text-amber-200"}`} style={{ fontFamily: "Inter, sans-serif" }}>
          Fabrique de produits laitiers
        </div>
      </div>
    </div>
  );
}

const navLinks = [
  { href: "/produits", label: "Nos Produits", hasDropdown: true },
  { href: "/notre-histoire", label: "Notre Histoire" },
  { href: "/nutrition", label: "Recettes" },
  { href: "/actualites", label: "Actualités" },
];

const productCategories = [
  {
    href: "/produits?cat=yaourts",
    label: "Yaourts",
    sub: [
      { label: "KOSSAM — Yaourt Liquide", href: "/produits/kossam" },
      { label: "Yaourt Nature", href: "/produits/yaourt-nature" },
      { label: "Yaourt Fraise", href: "/produits/yaourt-fraise" },
      { label: "Yaourt Noix de Coco", href: "/produits/yaourt-coco" },
      { label: "Yaourt Ananas", href: "/produits/yaourt-ananas" },
      { label: "Yaourt Fruits Exotiques", href: "/produits/yaourt-fruits-exotiques" },
    ],
  },
  {
    href: "/produits?cat=laits",
    label: "Laits",
    sub: [
      { label: "DJALA — Lait Fermenté", href: "/produits/djala" },
      { label: "LEBEN FRAIS", href: "/produits/leben-frais" },
      { label: "Lait Entier Pasteurisé", href: "/produits/lait-frais-pasteurise" },
    ],
  },
  {
    href: "/produits?cat=eau",
    label: "Eau Zam-Zam",
    sub: [
      { label: "Pôt 250ml", href: "/produits/eau-zamzam-25cl" },
      { label: "Sachet 500ml", href: "/produits/eau-zamzam-50cl" },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = isHome && !isScrolled ? "bg-transparent" : "bg-white shadow-md";
  const textColor = isHome && !isScrolled ? "text-white" : "text-[#1A1A1A]";
  const logoColor = isHome && !isScrolled ? "text-white" : "text-[#5C2010]";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`} style={{ height: 72 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className={`font-display text-xl font-bold ${logoColor} flex items-center gap-2 no-underline`}>
            <NigerLaitLogo scrolled={isScrolled} isHome={isHome} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}>
                  <button className={`nav-link flex items-center gap-1 ${isHome && !isScrolled ? "text-white" : ""}`}
                    style={{ color: isHome && !isScrolled ? "white" : undefined }}>
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-100 p-5 grid grid-cols-3 gap-4 animate-fadeIn">
                      {productCategories.map((cat) => (
                        <div key={cat.href}>
                          <Link href={cat.href} onClick={() => setDropdownOpen(false)} className="font-semibold text-[#5C2010] text-sm mb-2 block no-underline hover:underline">
                            {cat.label}
                          </Link>
                          <ul className="space-y-1">
                            {cat.sub.map((s) => (
                              <li key={s.href}>
                                <Link
                                  href={s.href}
                                  onClick={() => setDropdownOpen(false)}
                                  className="text-gray-500 text-xs hover:text-[#5C2010] no-underline transition-colors flex items-center gap-1.5">
                                  <span className="text-[#C89328]">›</span> {s.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div className="col-span-3 pt-3 border-t border-gray-100">
                        <Link href="/produits" className="text-[#5C2010] font-medium text-sm hover:underline no-underline">
                          Voir tous les produits →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} href={link.href}
                  className={`nav-link ${pathname === link.href ? "active" : ""}`}
                  style={{ color: isHome && !isScrolled ? "white" : undefined }}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact" className={`flex items-center gap-1.5 text-sm font-medium ${textColor} hover:opacity-80 transition-opacity no-underline`}>
              <MapPin size={16} />
              <span>Contact</span>
            </Link>
<Link href="/produits" className="btn-primary text-sm py-2.5 px-5">
              Nos produits
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className={`lg:hidden p-2 rounded-lg ${textColor}`} onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl p-6 overflow-y-auto animate-slideInRight">
            <div className="flex justify-between items-center mb-8">
              <span className="font-display text-base font-bold text-[#5C2010]">NIGER-LAIT S.A</span>
              <button onClick={() => setMobileOpen(false)} className="p-1"><X size={20} /></button>
            </div>
            <nav className="space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 px-4 rounded-lg text-sm font-medium no-underline transition-colors ${pathname === link.href ? "bg-[#5C2010] text-white" : "text-gray-700 hover:bg-gray-50"}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 text-sm text-gray-600 no-underline hover:text-[#5C2010]">
                <MapPin size={16} /> Trouver un distributeur
              </Link>
              <a href="https://wa.me/22700000000?text=Bonjour%20Niger-Lait,%20je%20souhaite..."
                className="flex items-center gap-2 text-sm font-medium text-[#25D366] no-underline">
                💬 WhatsApp Business
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
