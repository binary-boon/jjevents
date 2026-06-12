"use client";

import { Sparkles, ArrowRight, Play, ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { lenisScrollTo } from "@/providers/LenisProvider";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
      style={{ background: "var(--midnight)" }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(201,168,76,0.08) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(142,35,68,0.06) 0%, transparent 50%),
            linear-gradient(180deg, var(--midnight) 0%, var(--charcoal) 100%)
          `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] px-6">
        <Reveal delay={0.1}>
          <div className="inline-flex items-center gap-2 px-5 py-2 border border-gold/30 text-[11px] tracking-[3px] uppercase text-gold mb-8">
            <Sparkles size={14} /> Premier Event Designers
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <h1
            className="font-display font-light leading-[1.1] text-ivory mb-2"
            style={{ fontSize: "clamp(3rem, 8vw, 6.5rem)" }}
          >
            Crafting <em className="italic text-gold font-normal">Timeless</em>
            <br />
            Celebrations
          </h1>
        </Reveal>

        <Reveal delay={0.4}>
          <p
            className="font-light text-warm-gray max-w-[560px] mx-auto mt-6 mb-10 leading-relaxed"
            style={{ fontSize: "clamp(14px, 2vw, 18px)" }}
          >
            Luxury wedding planning and bespoke event management, bringing your
            grandest visions to life with artistry, precision, and soul.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              className="btn-gold"
              onClick={() => lenisScrollTo("#contact")}
            >
              Plan Your Event <ArrowRight size={16} />
            </button>
            <button
              className="btn-outline"
              onClick={() => lenisScrollTo("#portfolio")}
            >
              View Our Work <Play size={14} />
            </button>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div
        onClick={() => lenisScrollTo("#about")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gold-dim text-[10px] tracking-[3px] uppercase cursor-pointer animate-float"
      >
        Scroll <ChevronDown size={18} />
      </div>
    </section>
  );
}
