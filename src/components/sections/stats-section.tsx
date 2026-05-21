"use client";

import { useEffect, useState } from "react";
import { useRevealOnScroll } from "@/hooks/use-reveal";

// Elegant thin arrows matching the image design
const UpArrow = () => (
  <svg className="w-5 h-5 ml-2 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

const DownArrow = () => (
  <svg className="w-5 h-5 ml-2 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
);

export function StatsSection() {
  useRevealOnScroll();
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const nums = Array.from(document.querySelectorAll('.stat-number')) as HTMLElement[];
    if (!nums.length) return;

    const animateCount = (el: HTMLElement) => {
      const target = Number(el.getAttribute('data-target')) || 0;
      const startVal = Number(el.getAttribute('data-start')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 2000; // Increased duration for a more elegant feel
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        
        // Easing function (easeOutExpo) makes the counter slow down smoothly at the end
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const value = Math.floor(easeProgress * (target - startVal) + startVal);
        
        const isLargeNumber = Math.max(target, startVal) >= 1000;
        el.innerText = (isLargeNumber ? value.toLocaleString() : value) + suffix;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.innerText = (isLargeNumber ? target.toLocaleString() : target) + suffix;
        }
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          nums.forEach(el => animateCount(el));
          setHasCounted(true);
        }
      });
    }, { threshold: 0.4 });

    const statsSection = document.getElementById('stats-section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <section className="py-24 bg-[#ffffff]" id="stats-section">
      <div className="max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        
        <div className="space-y-4 reveal-on-scroll">
          <h4 className="text-5xl md:text-6xl font-serif text-[#0a2544] flex justify-center items-center">
            <span className="stat-number" data-start="0" data-target="10000" data-suffix="+">0</span>
            <UpArrow />
          </h4>
          <p className="text-sm font-medium text-[#0a2544]/70">Happy Customers</p>
        </div>

        <div className="space-y-4 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          <h4 className="text-5xl md:text-6xl font-serif text-[#0a2544] flex justify-center items-center">
            <span className="stat-number" data-start="0" data-target="14" data-suffix="+">0</span>
            <UpArrow />
          </h4>
          <p className="text-sm font-medium text-[#0a2544]/70">Clinical Experience</p>
        </div>

        <div className="space-y-4 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h4 className="text-5xl md:text-6xl font-serif text-[#0a2544] flex justify-center items-center">
            <span className="stat-number" data-start="0" data-target="24" data-suffix="h">0</span>
            <UpArrow />
          </h4>
          <p className="text-sm font-medium text-[#0a2544]/70">Odor Protection</p>
        </div>

        <div className="space-y-4 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          <h4 className="text-5xl md:text-6xl font-serif text-[#0a2544] flex justify-center items-center">
            {/* Added data-start="10" to create the countdown effect */}
            <span className="stat-number" data-start="10" data-target="0" data-suffix="%">10%</span>
            <DownArrow />
          </h4>
          <p className="text-sm font-medium text-[#0a2544]/70">Synthetic Chemicals</p>
        </div>

      </div>
    </section>
  );
}