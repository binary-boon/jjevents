import AnimatedCounter from '@/components/ui/AnimatedCounter';
import Reveal from '@/components/ui/Reveal';
import { marqueeItems, stats } from '@/data';

export function Marquee() {
  // duplicated track for a seamless loop
  const track = (
    <span className="marquee-item">
      {marqueeItems.map((item, i) => (
        <span key={i}>
          {item}
          <span className="dot" />
        </span>
      ))}
    </span>
  );

  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {track}
        {track}
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="stat">
              <div className="num">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="lbl">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
