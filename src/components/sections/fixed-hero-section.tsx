"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function FixedHeroSection() {
  useRevealOnScroll();

  return (
    <section
      className="relative flex items-center justify-center w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] bg-cover bg-center bg-no-repeat bg-scroll lg:bg-fixed"
      // Replace this URL with your actual image path
      style={{ backgroundImage: "url('/fixed_bg.webp')" }}
    >
      {/* Dark Overlay to make text pop */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 max-w-4xl mx-auto reveal-on-scroll">

        {/* Top Eyebrow Text */}
        <span className="text-xs sm:text-sm font-bold text-[#F5FBFF] uppercase tracking-[0.2em] mb-3 sm:mb-4">
          PURE & NATURAL PROTECTION
        </span>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-[#F5FBFF] mb-4 sm:mb-6 leading-tight">
          Stay Odor-Free. <br /> Stay Unstoppable.
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base md:text-lg font-light font-inter text-[#F5FBFF]/90 mb-8 sm:mb-10 max-w-[280px] sm:max-w-xl md:max-w-2xl leading-relaxed">
          A dermatologist-tested, hypoallergenic formula that lets your skin breathe while completely neutralizing odor-causing bacteria.
        </p>

        {/* Call to Action Button */}
        <a
          href="/shop/popular"
          className="group inline-flex items-center justify-center gap-2 bg-[#113D86] text-[#F5FBFF] px-6 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-medium transition-all hover:bg-[#113D86]/95 hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
        >
          <span>Switch To Natural</span>
          <span className="material-symbols-outlined text-[14px] sm:text-base transition-transform group-hover:translate-x-1">
            arrow_forward_ios
          </span>
        </a>

      </div>
    </section>
  );
}