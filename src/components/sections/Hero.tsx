'use client';

import { useRef } from 'react';
import { useLenis } from 'lenis/react';
import { ArrowRight } from 'lucide-react';
import { hero } from '@/data';

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useLenis(({ scroll }: { scroll: number }) => {
    const el = bgRef.current;
    if (!el) return;
    if (scroll < window.innerHeight) {
      el.style.transform = `translateY(${scroll * 0.32}px)`;
    }
  });

  return (
    <header className="hero" id="home">
      <div
        ref={bgRef}
        className="hero-bg"
        style={{ backgroundImage: `var(--hero-overlay), url("${hero.image}")` }}
      />
      <div className="hero-vignette" />

      <div className="hero-inner">
        <div className="crest reveal in">
          <span className="ln" /> {hero.eyebrow} <span className="ln" />
        </div>
        <h1 className="reveal in" style={{ transitionDelay: '0.1s' }}>
          {hero.titleLead}
          <br />
          <em>{hero.titleEmphasis}</em> {hero.titleTail}
        </h1>
        <p className="sub reveal in" style={{ transitionDelay: '0.2s' }}>
          {hero.subtitle}
        </p>
        <div className="hero-actions reveal in" style={{ transitionDelay: '0.3s' }}>
          <a href="#contact" className="btn btn-gold">
            Begin Your Story <ArrowRight size={15} strokeWidth={1.6} />
          </a>
          <a href="#portfolio" className="btn btn-outline">
            View Celebrations
          </a>
        </div>
      </div>

      <div className="scroll-cue">
        <span>Scroll</span>
        <span className="bar" />
      </div>
    </header>
  );
}
