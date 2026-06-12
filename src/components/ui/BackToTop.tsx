"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { lenisScrollTo } from "@/providers/LenisProvider";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => lenisScrollTo("#hero")}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 flex items-center justify-center cursor-pointer border-none transition-all duration-400 ${
        visible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "var(--gold)", color: "var(--midnight)" }}
      aria-label="Back to top"
    >
      <ChevronUp size={22} />
    </button>
  );
}
