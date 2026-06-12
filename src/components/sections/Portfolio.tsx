import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { projects as defaultProjects, type Project } from '@/data';

export default function Portfolio({ items = defaultProjects }: { items?: Project[] }) {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="center-head">
          <Reveal>
            <span className="eyebrow">Selected Celebrations</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-title">
              Stories we&rsquo;ve had the <em>honour</em> to tell
            </h2>
            <div className="divider-gold" style={{ margin: '24px auto 0' }} />
          </Reveal>
        </div>

        <div className="pf-grid">
          {items.map((p, i) => (
            <Reveal key={p.name} arch delay={(i % 2) * 0.1} className={`pf ${p.size}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={`${p.name} — ${p.category}`} loading="lazy" />
              <div className="meta">
                <div className="pf-cat">{p.category}</div>
                <div className="pf-name">{p.name}</div>
                <div className="pf-loc">{p.location}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Reveal>
            <Button href="#contact" variant="outline" arrow>
              Request the Full Portfolio
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
