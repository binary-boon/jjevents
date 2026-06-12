"use client";

import { Award, Heart, Globe } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const features = [
  { icon: Award, title: "Award-Winning Team", desc: "Recognized by India's leading event industry platforms" },
  { icon: Heart, title: "Personal Touch", desc: "Every event is treated as our own celebration" },
  { icon: Globe, title: "Pan-India Network", desc: "Trusted vendor partners in 25+ cities" },
];

export default function About() {
  return (
    <section id="about" className="max-w-[1280px] mx-auto px-6 py-24 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Image placeholder */}
        <Reveal direction="left">
          <div
            className="relative aspect-[3/4] overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(142,35,68,0.1))" }}
          >
            <div
              className="absolute inset-3 border pointer-events-none z-10"
              style={{ borderColor: "rgba(201,168,76,0.2)" }}
            />
            <div className="absolute inset-0 flex items-center justify-center font-display text-[120px] text-gold/[0.08] font-light">
              JJ
            </div>
          </div>
        </Reveal>

        {/* Text content */}
        <div>
          <Reveal delay={0.1}>
            <div className="section-label">Our Story</div>
            <h2 className="section-title">
              Where Dreams Meet{" "}
              <span className="text-gold">Design</span>
            </h2>
            <div className="gold-line-left mb-7" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-base text-warm-gray font-light leading-relaxed mb-6">
              Founded with a passion for creating extraordinary moments, JJ Events
              has grown into one of Rajasthan&apos;s most trusted names in luxury event
              management. Every celebration we design is a masterwork of creativity,
              meticulous planning, and heartfelt dedication.
            </p>
            <p className="text-base text-warm-gray font-light leading-relaxed mb-6">
              From royal palace weddings in Udaipur to intimate garden celebrations
              in Jodhpur, we bring together the finest vendors, most stunning venues,
              and innovative ideas to create events that live forever in memory.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="space-y-5">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-10 h-10 min-w-[40px] flex items-center justify-center text-gold"
                    style={{ border: "1px solid var(--gold-dim)" }}
                  >
                    <f.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg text-ivory font-medium mb-0.5">
                      {f.title}
                    </h4>
                    <p className="text-[13px] text-text-muted leading-snug">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
