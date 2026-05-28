"use client";

import { useEffect, useState } from "react";
import { useRevealOnScroll } from "@/hooks/use-reveal";

// Increased size to w-8/h-8 (mobile) and w-10/h-10 (desktop)
const UpArrow = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 ml-2 md:ml-3 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19V5M5 12l7-7 7 7"/>
  </svg>
);

const DownArrow = () => (
  <svg className="w-8 h-8 md:w-10 md:h-10 ml-2 md:ml-3 opacity-40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M19 12l-7 7-7-7"/>
  </svg>
);

// Invisible spacer updated to match the exact width and margin of the larger arrows
const ArrowBalancer = () => <div className="w-8 md:w-10 mr-2 md:mr-3 opacity-0" aria-hidden="true" />;

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
      const duration = 2000;
      const start = performance.now();

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
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
    <section className="py-24 bg-[#eaf5ff] w-full flex items-center justify-center" id="stats-section">
      <div className="max-w-7xl w-full mx-auto px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        <div className="flex flex-col items-center justify-center space-y-4 reveal-on-scroll">
          <h4 className="text-5xl md:text-6xl text-[#0a2544] flex justify-center items-center">
            <ArrowBalancer />
            <span className="stat-number" data-start="0" data-target="10000" data-suffix="+">0</span>
            <UpArrow />
          </h4>
          <p className="text-base font-medium text-[#0a2544]/70 text-center">Happy Customers</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          <h4 className="text-5xl md:text-6xl text-[#0a2544] flex justify-center items-center">
            <ArrowBalancer />
            <span className="stat-number" data-start="0" data-target="14" data-suffix="+">0</span>
            <UpArrow />
          </h4>
          <p className="text-base font-medium text-[#0a2544]/70 text-center">Years of Clinical Experience</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <h4 className="text-5xl md:text-6xl text-[#0a2544] flex justify-center items-center">
            <ArrowBalancer />
            <span className="stat-number" data-start="0" data-target="24" data-suffix="h">0</span>
            <UpArrow />
          </h4>
          <p className="text-base font-medium text-[#0a2544]/70 text-center">Odor Protection</p>
        </div>

        <div className="flex flex-col items-center justify-center space-y-4 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          <h4 className="text-5xl md:text-6xl text-[#0a2544] flex justify-center items-center">
            <ArrowBalancer />
            <span className="stat-number" data-start="10" data-target="0" data-suffix="%">10%</span>
            <DownArrow />
          </h4>
          <p className="text-base font-medium text-[#0a2544]/70 text-center">Synthetic Chemicals</p>
        </div>

      </div>
    </section>
  );
}