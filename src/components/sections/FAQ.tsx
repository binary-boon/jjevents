'use client';

import { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { faqs as defaultFaqs, type Faq } from '@/data';

export default function FAQ({ items = defaultFaqs }: { items?: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section section-charcoal" id="faq">
      <div className="container faq-grid">
        <div>
          <Reveal>
            <span className="eyebrow">Good to Know</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-title">
              Questions families <em>often</em> ask
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead" style={{ marginTop: 22 }}>
              Can&rsquo;t find what you&rsquo;re looking for? Write to us — we reply to every enquiry
              personally, usually within a day.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div style={{ marginTop: 28 }}>
              <Button href="#contact" variant="gold" arrow>
                Ask Us Directly
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="faq-list">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq-item${isOpen ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen}>
                  {f.q}
                  <span className="pm" />
                </button>
                <div className="faq-a">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
