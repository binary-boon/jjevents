'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { testimonials as defaultTestimonials, type Testimonial } from '@/data';

export default function Testimonials({ items = defaultTestimonials }: { items?: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => {
      setFading(true);
      setTimeout(() => {
        setIndex((next + items.length) % items.length);
        setFading(false);
      }, 380);
    },
    [items.length]
  );

  const startTimer = useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    timer.current = setInterval(() => go(index + 1), 6500);
  }, [go, index]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [startTimer]);

  const t = items[index];

  return (
    <section className="section testi">
      <div className="container">
        <Reveal>
          <span className="eyebrow center">Kind Words</span>
        </Reveal>
        <div className="testi-wrap">
          <p className={`testi-q${fading ? ' fade' : ''}`}>{t.quote}</p>
          <div className={`testi-meta${fading ? ' fade' : ''}`}>
            <div className="testi-stars">★★★★★</div>
            <div className="testi-name">{t.name}</div>
            <div className="testi-role">{t.role}</div>
          </div>
          <div className="testi-dots">
            {items.map((_, i) => (
              <button
                key={i}
                className={i === index ? 'active' : ''}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => {
                  go(i);
                  startTimer();
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
