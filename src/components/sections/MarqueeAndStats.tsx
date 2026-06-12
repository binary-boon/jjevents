"use client";

import Reveal from "@/components/ui/Reveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { MARQUEE_ITEMS, STATS } from "@/data/constants";

export function Marquee() {
  return (
    <div
      className="overflow-hidden py-5 border-y"
      style={{
        background: "var(--charcoal)",
        borderColor: "rgba(201,168,76,0.1)",
      }}
    >
      <div className="flex gap-12 animate-marquee w-max">
        {[...Array(2)].flatMap((_, i) =>
          MARQUEE_ITEMS.map((item, j) => (
            <div
              key={`${i}-${j}`}
              className="font-display text-lg font-light text-text-muted whitespace-nowrap flex items-center gap-3"
            >
              <div className="w-1 h-1 rounded-full bg-gold-dim" />
              {item}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 py-20">
      <Reveal>
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px border"
          style={{
            background: "rgba(201,168,76,0.1)",
            borderColor: "rgba(201,168,76,0.1)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="py-12 px-6 text-center transition-colors duration-400 hover:bg-dark-surface"
              style={{ background: "var(--charcoal)" }}
            >
              <div
                className="font-display font-light text-gold"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
              >
                <AnimatedCounter end={stat.num} suffix={stat.suffix} />
              </div>
              <div className="text-[12px] tracking-[3px] uppercase text-warm-gray mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
