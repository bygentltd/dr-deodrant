"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function FixedHeroSection() {
  useRevealOnScroll();

  return (
    <section 
      className="relative flex items-center justify-center w-full min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat bg-fixed"
      // Replace this URL with your actual image path
      style={{ backgroundImage: "url('/fixed_bg.webp')" }} 
    >
      {/* Dark Overlay to make text pop */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto reveal-on-scroll">
        
        {/* Top Eyebrow Text */}
        <span className="text-[10px] md:text-xs font-bold text-[#EAF5FF] uppercase tracking-[0.2em] mb-4">
          PURE & NATURAL PROTECTION
        </span>
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-6xl font-serif text-[#EAF5FF] mb-6 leading-tight">
          Stay Odor-Free. <br/> Stay Unstoppable. 
        </h2>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg text-[#EAF5FF]/90 mb-10 max-w-2xl">
          A dermatologist-tested, hypoallergenic formula that lets your skin breathe while completely neutralizing odor-causing bacteria.
        </p>
        
        {/* Call to Action Button */}
        <button className="group flex items-center gap-2 bg-[#113D86] text-[#EAF5FF] px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:bg-gray-100 hover:scale-105 active:scale-95 shadow-lg cursor-pointer">
          <span>Switch to Natural</span>
          <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
            arrow_forward_ios
          </span>
        </button>

      </div>
    </section>
  );
}