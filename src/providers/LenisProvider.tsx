'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, type ReactNode } from 'react';

/**
 * Wraps the app in a single Lenis instance (root = window scroll).
 * Any descendant can subscribe with `useLenis(cb)` or grab the instance
 * with `const lenis = useLenis()`.
 *
 * This REPLACES the previous LenisProvider. layout.tsx already imports
 * `@/providers/LenisProvider`, so no change is needed there.
 */
export default function LenisProvider({ children }: { children: ReactNode }) {
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <ReactLenis
      root
      options={{
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: !prefersReduced,
      }}
    >
      <SmoothAnchors />
      {children}
    </ReactLenis>
  );
}

/**
 * Delegated click handler: any <a href="#section"> scrolls smoothly via Lenis,
 * accounting for the fixed navbar. Lives inside ReactLenis so useLenis() works.
 */
function SmoothAnchors() {
  const lenis = useLenis();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute('href');
      if (!id || id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -70, duration: 1.3 });
      else el.scrollIntoView({ behavior: 'smooth' });
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [lenis]);

  return null;
}
