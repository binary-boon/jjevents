"use client";

import { Heart, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { NAV_LINKS, SERVICES } from "@/data/constants";
import { lenisScrollTo } from "@/providers/LenisProvider";

const SOCIAL_ICONS = [Instagram, Facebook, Youtube, Twitter];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10" style={{ background: "var(--charcoal)" }}>
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-[28px] text-gold mb-4">
            JJ <span className="text-ivory font-light">Events</span>
          </h3>
          <p className="text-sm text-warm-gray font-light leading-relaxed mb-6">
            Crafting timeless celebrations across India. From intimate ceremonies
            to grand galas, we turn your dreams into unforgettable experiences.
          </p>
          <div className="flex gap-3">
            {SOCIAL_ICONS.map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold hover:bg-gold/5 transition-all duration-300"
                style={{ border: "1px solid rgba(201,168,76,0.15)" }}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-5">
            Quick Links
          </h4>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              onClick={() => lenisScrollTo(`#${link.id}`)}
              className="block text-sm text-warm-gray font-light py-1.5 cursor-pointer hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-5">
            Services
          </h4>
          {SERVICES.map((s, i) => (
            <a
              key={i}
              href="#"
              className="block text-sm text-warm-gray font-light py-1.5 hover:text-gold transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[11px] font-semibold tracking-[3px] uppercase text-gold mb-5">
            Contact
          </h4>
          <a href="#" className="block text-sm text-warm-gray font-light py-1.5 hover:text-gold transition-colors">
            Jodhpur, Rajasthan
          </a>
          <a href="tel:+919800000000" className="block text-sm text-warm-gray font-light py-1.5 hover:text-gold transition-colors">
            +91 98XXX XXXXX
          </a>
          <a href="mailto:hello@jjevents.in" className="block text-sm text-warm-gray font-light py-1.5 hover:text-gold transition-colors">
            hello@jjevents.in
          </a>
          <a href="#" className="block text-sm text-warm-gray font-light py-1.5 hover:text-gold transition-colors">
            Mon – Sat, 10 AM – 7 PM
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 py-6 border-t border-gold/[0.06] flex justify-between items-center flex-wrap gap-3 text-[12px] text-text-muted font-light">
        <span>© 2026 JJ Events. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Designed with{" "}
          <Heart size={12} fill="var(--gold)" color="var(--gold)" className="mx-1" />{" "}
          in Jodhpur
        </span>
      </div>
    </footer>
  );
}
