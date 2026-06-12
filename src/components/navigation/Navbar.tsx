'use client';

import { useState } from 'react';
import { useLenis } from 'lenis/react';
import { Menu, X } from 'lucide-react';
import { navLinks, site } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const lenis = useLenis(({ scroll }: { scroll: number }) => setScrolled(scroll > 40));

  const close = () => {
    setOpen(false);
    lenis?.start();
    document.body.style.overflow = '';
  };
  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      next ? lenis?.stop() : lenis?.start();
      return next;
    });
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="logo">
            <span className="mark">{site.brandMark}</span>
            <span className="word">{site.brandWord}</span>
          </a>

          <div className="nav-links">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="nav-cta">
              <span className="btn btn-outline btn-compact">Enquire</span>
            </a>
          </div>

          <button
            className={`burger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={toggle}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-gold" onClick={close}>
          Enquire Now
        </a>
      </div>
    </>
  );
}
