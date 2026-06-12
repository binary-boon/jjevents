'use client';

import { useState } from 'react';
import { useLenis } from 'lenis/react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  const lenis = useLenis(({ scroll }: { scroll: number }) => setShow(scroll > 600));

  return (
    <button
      className={`totop${show ? ' show' : ''}`}
      aria-label="Back to top"
      onClick={() =>
        lenis ? lenis.scrollTo(0, { duration: 1.3 }) : window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    >
      <ArrowUp size={18} strokeWidth={1.6} />
    </button>
  );
}
