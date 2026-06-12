"use client";

import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PACKAGES } from "@/data/constants";
import { lenisScrollTo } from "@/providers/LenisProvider";

export default function Packages() {
  return (
    <section id="packages" className="max-w-[1280px] mx-auto px-6 py-24 md:py-28">
      <Reveal>
        <div className="text-center mb-14">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Our Packages</h2>
          <div className="gold-line mb-4" />
          <p className="section-subtitle mx-auto">
            Every package is fully customizable to match your vision. These are
            starting points — your event is anything but standard.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start max-w-[480px] lg:max-w-none mx-auto">
        {PACKAGES.map((pkg, i) => (
          <Reveal delay={i * 0.15} key={i}>
            <div
              className={`relative p-10 transition-all duration-400 border ${
                pkg.popular
                  ? "border-gold scale-[1.03] hover:scale-[1.03] hover:-translate-y-1"
                  : "hover:-translate-y-1"
              }`}
              style={{
                background: "var(--charcoal)",
                borderColor: pkg.popular ? "var(--gold)" : "rgba(201,168,76,0.08)",
              }}
            >
              {pkg.popular && (
                <div className="absolute -top-px right-6 bg-gold text-midnight text-[10px] font-bold tracking-[2px] uppercase px-4 py-1.5">
                  Most Popular
                </div>
              )}

              <div className="font-display text-[28px] font-normal text-ivory mb-1">
                {pkg.name}
              </div>
              <div className="text-[12px] text-text-muted tracking-[2px] uppercase mb-6">
                {pkg.tagline}
              </div>
              <div className="font-display text-4xl font-light text-gold mb-2">
                {pkg.price}
              </div>
              <div className="text-[12px] text-text-muted mb-8">
                Starting price • Customizable
              </div>

              <div className="h-px bg-gold/10 mb-6" />

              <ul className="list-none mb-8 space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-text-light font-light py-1">
                    <Check size={16} className={pkg.popular ? "text-gold" : "text-gold-dim"} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full justify-center ${pkg.popular ? "btn-gold" : "btn-outline"}`}
                onClick={() => lenisScrollTo("#contact")}
              >
                Choose {pkg.name} <ArrowRight size={14} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
