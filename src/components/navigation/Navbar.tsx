"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/constants";
import { lenisScrollTo } from "@/providers/LenisProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    lenisScrollTo(`#${id}`);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] flex items-center justify-between transition-all duration-500 ease-out-expo ${
          scrolled
            ? "py-3.5 px-10 bg-midnight/92 backdrop-blur-xl border-b border-gold/10"
            : "py-5 px-10"
        }`}
      >
        {/* Logo */}
        <div
          onClick={() => navigate("hero")}
          className="cursor-pointer font-display text-[28px] text-gold"
        >
          JJ <span className="text-ivory font-light">Events</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                onClick={() => navigate(link.id)}
                className="text-[12px] font-medium tracking-[2px] uppercase text-text-muted cursor-pointer hover:text-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={() => navigate("contact")}
          className="hidden lg:block px-6 py-2.5 text-[11px] tracking-[2px] uppercase font-semibold border border-gold-dim text-gold bg-transparent cursor-pointer hover:bg-gold hover:text-midnight transition-all duration-300"
        >
          Get a Quote
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-transparent border-none text-gold cursor-pointer"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-midnight/98 backdrop-blur-[30px] flex flex-col items-center justify-center gap-7 transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            onClick={() => navigate(link.id)}
            className="font-display text-[32px] font-light text-ivory cursor-pointer hover:text-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
        <button
          onClick={() => navigate("contact")}
          className="btn-gold mt-4"
        >
          Get a Quote
        </button>
      </div>
    </>
  );
}
