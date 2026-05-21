"use client";

import { useEffect } from "react";

export function useRevealOnScroll() {
  useEffect(() => {
    const revealOnScroll = document.querySelectorAll('.reveal-on-scroll');
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    revealOnScroll.forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      scrollObserver.observe(el);
    });

    return () => scrollObserver.disconnect();
  }, []);
}
