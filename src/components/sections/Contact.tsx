'use client';

import { useState } from 'react';
import { Send, Check, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { site, eventTypes, guestRanges } from '@/data';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const socialIcon: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  pinterest: Instagram, // lucide has no Pinterest; reuse or swap for a brand-icon set
  whatsapp: Phone,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: eventTypes[0],
    guests: guestRanges[0],
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorField, setErrorField] = useState<'name' | 'email' | null>(null);

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  async function submit() {
    if (!form.name.trim()) return setErrorField('name');
    if (!form.email.trim()) return setErrorField('email');
    setErrorField(null);
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-info">
          <Reveal>
            <span className="eyebrow">Begin the Conversation</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-title">
              Let&rsquo;s craft something <em>worth remembering</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead">
              Tell us a little about your celebration. We&rsquo;ll come back within a day with
              thoughts, availability and a way forward — no obligation, just a conversation.
            </p>
          </Reveal>

          <div className="contact-rows">
            <Reveal delay={0.2}>
              <div className="c-row">
                <div className="ci"><MapPin size={18} /></div>
                <div>
                  <div className="ck">Studio</div>
                  <div className="cv">{site.address}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="c-row">
                <div className="ci"><Phone size={18} /></div>
                <div>
                  <div className="ck">Speak With Us</div>
                  <div className="cv">{site.phone}</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="c-row">
                <div className="ci"><Mail size={18} /></div>
                <div>
                  <div className="ck">Write To Us</div>
                  <div className="cv">{site.email}</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="c-socials">
              {site.socials.map((s) => {
                const Icon = socialIcon[s.icon] ?? Instagram;
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}>
                    <Icon size={17} />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="form">
          {status === 'sent' ? (
            <div className="form-success show">
              <div className="tick"><Check size={26} strokeWidth={1.6} /></div>
              <h4>Thank you — it&rsquo;s on its way</h4>
              <p>
                We&rsquo;ve received your enquiry and will be in touch shortly. We can&rsquo;t wait to
                hear about your celebration.
              </p>
            </div>
          ) : (
            <div>
              <h3>Enquire about your date</h3>
              <p className="fsub">A few details to get us started.</p>
              <div className="form-row">
                <div className="field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={set('name')}
                    placeholder="Jaya Singh"
                    style={errorField === 'name' ? { borderColor: 'var(--rose)' } : undefined}
                  />
                </div>
                <div className="field">
                  <label>Phone</label>
                  <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+91 ..." />
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={set('email')}
                  placeholder="you@example.com"
                  style={errorField === 'email' ? { borderColor: 'var(--rose)' } : undefined}
                />
              </div>
              <div className="form-row">
                <div className="field">
                  <label>Type of Event</label>
                  <select value={form.eventType} onChange={set('eventType')}>
                    {eventTypes.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div className="field">
                  <label>Approx. Guests</label>
                  <select value={form.guests} onChange={set('guests')}>
                    {guestRanges.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="field">
                <label>Tell us about your vision</label>
                <textarea
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Dates you're considering, venue ideas, anything on your mind..."
                />
              </div>
              <button className="btn btn-gold btn-full" onClick={submit} disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                <Send size={16} strokeWidth={1.5} />
              </button>
              {status === 'error' && (
                <p className="form-note" style={{ color: 'var(--rose)' }}>
                  Something went wrong sending that. Please try again, or email us directly.
                </p>
              )}
              {status !== 'error' && (
                <p className="form-note">We reply personally, usually within one working day.</p>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
