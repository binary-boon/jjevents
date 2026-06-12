"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { FAQS } from "@/data/constants";

export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-[1280px] mx-auto px-6 py-24 md:py-28">
      <Reveal>
        <div className="text-center mb-12">
          <div className="section-label">Questions</div>
          <h2 className="section-title">Frequently Asked</h2>
          <div className="gold-line" />
        </div>
      </Reveal>

      <div className="max-w-[800px] mx-auto">
        {FAQS.map((faq, i) => (
          <Reveal delay={i * 0.08} key={i}>
            <div className="border-b border-gold/10">
              <button
                onClick={() => setActive(active === i ? null : i)}
                className="w-full flex items-center justify-between py-6 font-display text-xl font-normal text-ivory text-left bg-transparent border-none cursor-pointer hover:text-gold transition-colors"
              >
                {faq.question}
                <ChevronDown
                  size={20}
                  className="text-gold min-w-[20px] transition-transform duration-300"
                  style={{ transform: active === i ? "rotate(180deg)" : "none" }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-500 ease-out-expo"
                style={{
                  maxHeight: active === i ? "200px" : "0px",
                  paddingBottom: active === i ? "24px" : "0px",
                }}
              >
                <p className="text-[15px] text-warm-gray font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
