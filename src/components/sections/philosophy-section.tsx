"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function PhilosophySection() {
  useRevealOnScroll();

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto bg-[#F5FBFF] overflow-hidden">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* Left Column: Text Content */}
        <div className="space-y-6 reveal-on-scroll order-2 md:order-1">
          <span className="font-inter font-bold text-[10px] text-gray-500 uppercase tracking-[0.2em]">
            Our Formulation
          </span>
          
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-[#0B2559] leading-tight">
            Synergy of Alum & Superfood Extracts.
          </h2>
          
          <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-[90%]">
            Experience the medical-grade precision of pure Alum crystals enhanced with the antioxidant power of <b>Kiwi Fruit Extract</b>, <b>Acerola Extract</b>, and <b>Vitamin E</b>. Our formula doesn't just block odor; it nourishes the delicate underarm skin while helping to lighten dark areas naturally.
          </p>

          {/* Adapted original grid items into the checkmark list from the design */}
          <ul className="space-y-3 pt-2">
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[16px] text-gray-400">check</span>
              <span className="text-sm  text-gray-700">Visibly Lightens Dark Underarms</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="material-symbols-outlined text-[16px] text-gray-400">check</span>
              <span className="text-sm text-gray-700">100% Free From Harsh Chemicals</span>
            </li>
          </ul>

          {/* Added the button from the reference design */}
          <div className="pt-6">
            <a href="/story">
              <button className="bg-[#203856] hover:bg-[#203856]/80 text-[#F5FBFF] px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300">
                Our Story &rsaquo;
              </button>
            </a>
          </div>
        </div>

        {/* Right Column: Image & Badge */}
        <div className="relative reveal-on-scroll order-1 md:order-2">
          {/* Main Image with large rounded corners */}
          <div className="aspect-square md:aspect-4/5 rounded-[2rem] overflow-hidden shadow-xl">
          <video
            src="/video/sample_vid.mov"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />

        </div>

          {/* Circular Rotating Badge - Moved to top-left with matching colors */}
          {/* <div className="absolute -top-8 -left-8 md:-top-12 md:-left-12 w-32 h-32 md:w-40 md:h-40 bg-[#f6fbfd] rounded-full p-2 shadow-lg flex items-center justify-center z-10">
            <div className="absolute inset-0 animate-rotate-slow">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <defs>
                  <path d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" id="circlePath"></path>
                </defs>
                <text className="text-[8.5px] font-bold uppercase tracking-[0.18em] fill-gray-800">
                  <textPath href="#circlePath">• Pure Mineral • Vitamin E • Fresh Vibe </textPath>
                </text>
              </svg>
            </div>
            {/* Kept original center icon */}
            {/* <span className="material-symbols-outlined text-5xl md:text-6xl text-gray-800" style={{ fontVariationSettings: "'FILL' 1" }}>
            spa {/* or whichever icon you chose */}
             
        </div>

      </div>
    </section>
  );
}