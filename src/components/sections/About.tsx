import Reveal from '@/components/ui/Reveal';
import { about } from '@/data';

/** Render **bold** segments without a markdown dependency. */
function withBold(text: string) {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <Reveal className="about-media">
          <div className="frame" />
          <Reveal arch className="arch">
            {/* Swap to next/image + Payload media once images are uploaded */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={about.image} alt="Bride and groom at a Rajasthani palace wedding" loading="lazy" />
          </Reveal>
          <div className="badge">
            <div className="b-num">{about.badgeNum}</div>
            <div className="b-lbl">
              {about.badgeLabel.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <span className="eyebrow">{about.eyebrow}</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="h-title">
              A house built on <em>devotion</em> to the detail
            </h2>
            <div className="divider-gold" style={{ margin: '24px 0 8px' }} />
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <p className="about-para">{withBold(p)}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="sign">
              <span className="scrawl">{about.signature}</span>
              <div className="who">
                <b>{about.signatureRole}</b>
                {about.signaturePlace}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
