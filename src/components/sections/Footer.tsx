'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { navLinks, services, site } from '@/data';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);

  function subscribe() {
    if (!email.trim()) return;
    // TODO: POST to /api/subscribe or a Payload `subscribers` collection
    setDone(true);
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#home" className="logo">
              <span className="mark">{site.brandMark}</span>
              <span className="word">{site.brandWord}</span>
            </a>
            <p>{site.tagline}</p>
          </div>

          <div className="foot-col">
            <h4>Explore</h4>
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <div className="foot-col">
            <h4>Occasions</h4>
            {services.slice(0, 4).map((s) => (
              <a key={s.title} href="#services">
                {s.title}
              </a>
            ))}
          </div>

          <div className="foot-news">
            <h4>The Journal</h4>
            <p>Wedding wisdom and venue stories, a few times a year.</p>
            {done ? (
              <p className="news-done">You&rsquo;re on the list — thank you.</p>
            ) : (
              <div className="nf">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && subscribe()}
                />
                <button aria-label="Subscribe" onClick={subscribe}>
                  <ArrowRight size={16} strokeWidth={1.6} />
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {new Date().getFullYear()} JJ Events. All rights reserved.</p>
          <p className="made">
            Crafted by <b>Binary Boon</b>
          </p>
        </div>
      </div>
    </footer>
  );
}
