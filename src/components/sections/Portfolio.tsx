"use client";

import { useState } from "react";
import { MapPin, Users, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { PORTFOLIO, PORTFOLIO_FILTERS } from "@/data/constants";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? PORTFOLIO : PORTFOLIO.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="max-w-[1280px] mx-auto px-6 py-24 md:py-28">
      <Reveal>
        <div className="text-center mb-12">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Featured Events</h2>
          <div className="gold-line" />
        </div>
      </Reveal>

      {/* Filters */}
      <Reveal delay={0.1}>
        <div className="flex flex-wrap gap-2 mb-10">
          {PORTFOLIO_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-3 text-[13px] font-medium cursor-pointer transition-all duration-300 border ${
                filter === f
                  ? "bg-gold text-midnight border-gold"
                  : "bg-transparent text-text-muted border-gold/15 hover:bg-gold hover:text-midnight hover:border-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((item, i) => (
          <Reveal delay={i * 0.1} key={item.title}>
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer border border-gold/[0.08]">
              <div
                className="absolute inset-0 transition-transform duration-600 ease-out-expo group-hover:scale-105"
                style={{ background: item.gradient }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight/90 group-hover:from-gold/5 group-hover:to-midnight/95 transition-all duration-400 p-6 flex flex-col justify-end">
                <div className="text-[10px] tracking-[3px] uppercase text-gold mb-2">
                  {item.category}
                </div>
                <h3 className="font-display text-[22px] font-normal text-ivory mb-2">
                  {item.title}
                </h3>
                <div className="flex gap-4 text-[12px] text-text-muted">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {item.guests}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3}>
        <div className="text-center mt-12">
          <button className="btn-outline">
            View All Projects <ArrowRight size={14} />
          </button>
        </div>
      </Reveal>
    </section>
  );
}
