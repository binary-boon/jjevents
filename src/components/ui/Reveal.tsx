'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  /** stagger delay in seconds */
  delay?: number;
  /** use the clip-path "curtain" reveal instead of fade-up */
  arch?: boolean;
  className?: string;
};

/**
 * Adds the `in` class once the element scrolls into view, driving the
 * `.reveal` / `.reveal-arch` transitions defined in globals.css.
 * Reduced motion is handled in CSS.
 */
export default function Reveal({ children, delay = 0, arch = false, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(arch ? 'reveal-arch' : 'reveal', shown && 'in', className)}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
