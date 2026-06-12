"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { CONTACT_INFO } from "@/data/constants";

const CONTACT_ICONS = [MapPin, Phone, Mail, Clock];
const SOCIAL_ICONS = [Instagram, Facebook, Youtube, Twitter];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // TODO: POST to /api/inquiries (Payload REST API)
    // await fetch('/api/inquiries', { method: 'POST', body: JSON.stringify(formData) })
    setTimeout(() => {
      alert("Thank you! We'll get back to you within 48 hours.");
      setFormData({ name: "", email: "", phone: "", eventType: "", date: "", guests: "", message: "" });
      setSubmitting(false);
    }, 1000);
  };

  const inputClass =
    "w-full px-4 py-3.5 text-[15px] font-light text-ivory outline-none transition-colors duration-300 focus:border-gold bg-dark-surface border border-gold/[0.12]";

  return (
    <section
      id="contact"
      className="w-full py-24 md:py-28 px-6"
      style={{ background: "var(--charcoal)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        <Reveal>
          <div className="text-center mb-14">
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Let&apos;s Plan Your Event</h2>
            <div className="gold-line" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16">
          {/* Info */}
          <Reveal direction="left">
            <div>
              <p className="text-base text-warm-gray font-light leading-relaxed mb-10">
                Ready to create something extraordinary? Share your vision and
                we&apos;ll craft a personalized proposal within 48 hours. Every great
                celebration starts with a conversation.
              </p>

              {CONTACT_INFO.map((info, i) => {
                const Icon = CONTACT_ICONS[i];
                return (
                  <div key={i} className="flex gap-4 mb-8">
                    <div
                      className="w-12 h-12 min-w-[48px] flex items-center justify-center text-gold"
                      style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-ivory mb-1">{info.title}</h4>
                      <p className="text-sm text-warm-gray font-light">{info.text}</p>
                    </div>
                  </div>
                );
              })}

              <div className="flex gap-3 mt-4">
                {SOCIAL_ICONS.map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 flex items-center justify-center text-text-muted hover:text-gold hover:border-gold transition-all duration-300"
                    style={{ border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right">
            <div className="p-8 lg:p-10 bg-dark-surface border border-gold/[0.08]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Full Name
                  </label>
                  <input name="name" value={formData.name} onChange={handleChange}
                    placeholder="Your name" className={inputClass} style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }} />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Email
                  </label>
                  <input name="email" type="email" value={formData.email} onChange={handleChange}
                    placeholder="your@email.com" className={inputClass} style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }} />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Phone
                  </label>
                  <input name="phone" type="tel" value={formData.phone} onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX" className={inputClass} style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }} />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Event Type
                  </label>
                  <select name="eventType" value={formData.eventType} onChange={handleChange}
                    className={inputClass} style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }}>
                    <option value="">Select event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="destination-wedding">Destination Wedding</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="celebration">Birthday / Anniversary</option>
                    <option value="pre-wedding">Engagement / Pre-Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Tentative Date
                  </label>
                  <input name="date" type="date" value={formData.date} onChange={handleChange}
                    className={inputClass} style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }} />
                </div>
                <div>
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Expected Guests
                  </label>
                  <select name="guests" value={formData.guests} onChange={handleChange}
                    className={inputClass} style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }}>
                    <option value="">Select range</option>
                    <option value="under-100">Under 100</option>
                    <option value="100-300">100 – 300</option>
                    <option value="300-500">300 – 500</option>
                    <option value="500-1000">500 – 1000</option>
                    <option value="1000+">1000+</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[11px] tracking-[2px] uppercase text-text-muted font-medium mb-1.5">
                    Tell Us About Your Vision
                  </label>
                  <textarea name="message" value={formData.message} onChange={handleChange}
                    placeholder="Describe your dream event..." rows={5}
                    className={`${inputClass} resize-y min-h-[120px]`}
                    style={{ fontFamily: "var(--font-body, 'Outfit', sans-serif)", background: "var(--dark-surface)" }} />
                </div>
                <div className="sm:col-span-2">
                  <button
                    className="btn-gold w-full justify-center"
                    onClick={handleSubmit}
                    disabled={submitting}
                  >
                    <Send size={16} /> {submitting ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
