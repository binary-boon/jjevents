import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import { posts as defaultPosts, type Post } from '@/data';

export default function Blog({ items = defaultPosts }: { items?: Post[] }) {
  return (
    <section className="section" id="journal">
      <div className="container">
        <div className="svc-head">
          <div>
            <Reveal>
              <span className="eyebrow">The Journal</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="h-title">
                Notes from the <em>field</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#" className="btn btn-ghost">
              All Stories <ArrowRight size={15} strokeWidth={1.6} />
            </a>
          </Reveal>
        </div>

        <div className="blog-grid">
          {items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.1}>
              <article className="post">
                <div className="ph">
                  <span className="cat">{p.category}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} loading="lazy" />
                </div>
                <div className="p-date">{p.date}</div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="more">
                  Read <ArrowRight size={14} strokeWidth={1.6} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
