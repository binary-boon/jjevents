"use client";

import { Star, Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/constants";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full py-24 md:py-28 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-label">Love Letters</div>
            <h2 className="section-title">What Our Clients Say</h2>
            <div className="gold-line" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal delay={i * 0.15} key={i}>
              <div
                className="p-10 transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  background: "var(--charcoal)",
                  borderColor: "rgba(201,168,76,0.08)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)")}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={16} fill="var(--gold)" color="var(--gold)" />
                  ))}
                </div>

                <Quote size={24} className="text-gold-dim mb-3" />

                <p className="font-display text-lg font-light text-text-light leading-relaxed italic mb-7">
                  {t.text}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-ivory">{t.name}</h4>
                  <p className="text-[12px] text-gold-dim tracking-wider">{t.event}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
