import { Check, X } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import Button from '@/components/ui/Button';
import { packages as defaultPackages, type Package } from '@/data';

export default function Packages({ items = defaultPackages }: { items?: Package[] }) {
  return (
    <section className="section section-dark" id="packages">
      <div className="container">
        <div className="center-head">
          <Reveal>
            <span className="eyebrow center">Ways to Begin</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-title">
              Collections to suit <em>every</em> vision
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="lead lead-center">
              Indicative starting points — every celebration is finally quoted to your guest count,
              venue and dreams. Speak with us for a tailored proposal.
            </p>
          </Reveal>
        </div>

        <div className="pkg-grid">
          {items.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1} className={`pkg${pkg.featured ? ' featured' : ''}`}>
              {pkg.ribbon && <div className="ribbon">{pkg.ribbon}</div>}
              <div className="p-name">{pkg.name}</div>
              <div className="p-for">{pkg.audience}</div>
              <div className={`p-price${pkg.price === 'On Request' ? ' p-price-sm' : ''}`}>{pkg.price}</div>
              <div className="p-note">{pkg.priceNote}</div>
              <ul>
                {pkg.features.map((f) => (
                  <li key={f.label} className={f.included ? '' : 'off'}>
                    {f.included ? <Check size={17} strokeWidth={1.8} /> : <X size={17} strokeWidth={1.8} />}
                    {f.label}
                  </li>
                ))}
              </ul>
              <Button href="#contact" variant={pkg.featured ? 'gold' : 'outline'} fullWidth>
                Enquire
              </Button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
