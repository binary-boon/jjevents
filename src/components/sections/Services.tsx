"use client";

import { useState } from "react";
import { Check, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SERVICES } from "@/data/constants";
import { lenisScrollTo } from "@/providers/LenisProvider";

export default function Services() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];
  const Icon = current.icon;

  return (
    <section
      id="services"
      className="w-full py-24 md:py-28 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our Services</h2>
            <div className="gold-line mb-4" />
            <p className="section-subtitle mx-auto">
              Comprehensive event solutions tailored to your vision, budget, and style.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.15}>
          <div className="flex flex-wrap gap-2 mb-12">
            {SERVICES.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-3 text-[13px] font-medium cursor-pointer transition-all duration-300 border ${
                  active === i
                    ? "bg-gold text-midnight border-gold"
                    : "bg-transparent text-text-muted border-gold/15 hover:bg-gold hover:text-midnight hover:border-gold"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Detail */}
        <Reveal delay={0.2} key={active}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
            <div>
              <h3 className="font-display text-ivory font-light mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)" }}>
                {current.title}
              </h3>
              <div className="gold-line-left mb-6" />
              <p className="text-[15px] text-warm-gray font-light leading-relaxed mb-8">
                {current.desc}
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {current.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-text-light">
                    <Check size={16} className="text-gold" />
                    {f}
                  </div>
                ))}
              </div>
              <button className="btn-gold" onClick={() => lenisScrollTo("#contact")}>
                Inquire Now <ArrowRight size={16} />
              </button>
            </div>

            {/* Visual placeholder */}
            <div
              className="aspect-[4/3] flex items-center justify-center relative overflow-hidden border"
              style={{ background: "var(--dark-surface)", borderColor: "rgba(201,168,76,0.1)" }}
            >
              <Icon size={120} className="text-gold/[0.12]" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
