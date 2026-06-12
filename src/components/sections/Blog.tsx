"use client";

import { Camera, Clock, ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { BLOG_POSTS } from "@/data/constants";

export default function Blog() {
  return (
    <section
      id="blog"
      className="w-full py-24 md:py-28 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="section-label">Inspiration</div>
            <h2 className="section-title">From Our Blog</h2>
            <div className="gold-line" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <Reveal delay={i * 0.15} key={i}>
              <div
                className="overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 border"
                style={{
                  background: "var(--charcoal)",
                  borderColor: "rgba(201,168,76,0.08)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.08)")}
              >
                <div
                  className="h-[200px] flex items-center justify-center"
                  style={{ background: post.gradient }}
                >
                  <Camera size={40} className="text-gold/15" />
                </div>

                <div className="p-7">
                  <div className="text-[10px] tracking-[3px] uppercase text-gold mb-3">
                    {post.category}
                  </div>
                  <h3 className="font-display text-[22px] font-normal text-ivory leading-snug mb-4">
                    {post.title}
                  </h3>
                  <div className="flex justify-between text-[12px] text-text-muted">
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.readTime} read
                    </span>
                    <span className="text-gold cursor-pointer flex items-center gap-1 hover:gap-2 transition-all">
                      Read More <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
