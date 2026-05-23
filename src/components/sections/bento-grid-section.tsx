"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function BentoGridSection() {
  useRevealOnScroll();

  return (
    <section className="px-6 md:px-12 lg:px-16 max-w-350 mx-auto">
      {/* 3-Column Grid matching the reference image layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[320px]">
        
        {/* Card 1: Tall (Left) */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2rem] reveal-on-scroll">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="hf_20260520_220203_3e37c1fa-fe7d-449a-9a03-e8c0fc80834d.webp" 
            alt="Long-lasting Value" 
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
          
          {/* Centered Text Container */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-[#EAF5FF] mb-3 tracking-wide">Everyday With You</h3>
            <p className="text-sm md:text-base text-[#EAF5FF]/80 leading-relaxed max-w-[90%]">
              Built for daily life—workouts, commutes, and everything in between.
            </p>
          </div>
        </div>

        {/* Card 2: Tall (Middle) */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2rem] reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="ChatGPT Image Jan 30, 2026, 08_08_08 PM.png" 
            alt="Active Ingredients" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-medium text-[#EAF5FF] mb-3 tracking-wide">Active Ingredients</h3>
            <p className="text-sm md:text-base text-[#EAF5FF]/80 leading-relaxed max-w-[90%]">
              Potent Vitamin E & Acerola for ultimate cellular health and skin nourishment.
            </p>
          </div>
        </div>

        {/* Card 3: Square (Top Right) */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2rem] reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="ChatGPT Image May 21, 2026, 03_25_10 AM.webp" 
            alt="Skin Protection" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-medium text-[#EAF5FF] mb-2 tracking-wide">Daily Defense</h3>
            <p className="text-sm text-[#EAF5FF]/80 max-w-[95%]">
              Providing consistent protection without harsh chemicals.
            </p>
          </div>
        </div>

        {/* Card 4: Square (Bottom Right) */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2rem] reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl39wosQluUgrJbRmGcWApiqE1HF7iBhfHdG55FCacoM5RiQtbvJC2X9s7NI2Q3KfNUtz8s3UCZol4IYs1g1nux0TDFxMehHeEmTL55RHsOiuz_pXRjj6mG_VmmnJu0WSxfvp-PFRNDa_fdGwqQv-mQbM8jaPkT56XxzBUh2QBrbPUYXWLyh_434ve8oG38-IjUYrmkUgM0BqrwLOBQf2t-JjG7jfojNoLy2ZBtOKX_sVoUbMJApLyrKZ7Quvc4qh_i16PvbaG-Etx" 
            alt="Discover More" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-center text-center">
            <h3 className="text-xl md:text-2xl font-medium text-[#EAF5FF] mb-2 tracking-wide">Discover More</h3>
            <p className="text-sm text-[#EAF5FF]/80 max-w-[95%]">
              Explore our synergistic natural formulations.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}