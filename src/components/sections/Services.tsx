import { Heart, Landmark, Music4, Sparkles, Presentation, Home, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { services as defaultServices, type Service } from '@/data';

const icons: Record<Service['icon'], LucideIcon> = {
  heart: Heart,
  landmark: Landmark,
  music: Music4,
  sparkles: Sparkles,
  presentation: Presentation,
  home: Home,
};

export default function Services({ items = defaultServices }: { items?: Service[] }) {
  return (
    <section className="section section-dark" id="services">
      <div className="container">
        <div className="svc-head">
          <div>
            <Reveal>
              <span className="eyebrow">What We Craft</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-title">
                Every occasion,
                <br />
                held with <em>intent</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="lead">
              One team across the full arc of your celebration — design, logistics, hospitality and
              the thousand small graces guests never see but always feel.
            </p>
          </Reveal>
        </div>

        <div className="svc-grid">
          {items.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.1} className="svc">
                <div className="ico">
                  <Icon strokeWidth={1} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <div className="tag">{s.tag}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
