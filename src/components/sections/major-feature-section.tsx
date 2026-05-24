"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function MajorFeaturesSection() {
  useRevealOnScroll();

  return (
    // Minimal bottom padding (pb-6) so it connects nicely with the Bento Grid below it
    <section className="pt-24 pb-6 px-6 md:px-12 lg:px-16 max-w-350 mx-auto">
      
      {/* 2-Column Grid for the major cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Major Card 1 */}
        <div className="relative group overflow-hidden rounded-[2rem] h-112.5 md:h-150 reveal-on-scroll">
          {/* Replace src with your actual image */}
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="/hf_20260520_220203_3e37c1fa-fe7d-449a-9a03-e8c0fc80834d.webp" 
            alt="Everyday With You" 
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
          
          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-medium text-[#EAF5FF] mb-3 tracking-wide">
              Everyday With You
            </h3>
            <p className="text-sm md:text-base text-[#EAF5FF]/80 leading-relaxed max-w-[85%] md:max-w-[70%]">
              Built for daily life—workouts, commutes, and everything in between.
            </p>
          </div>
        </div>

        {/* Major Card 2 */}
        <div className="relative group overflow-hidden rounded-[2rem] h-112.5 md:h-150 reveal-on-scroll" style={{ transitionDelay: '150ms' }}>
          {/* Replace src with your actual image */}
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="/Image_2.webp" 
            alt="Instant Pairing" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-medium text-[#EAF5FF] mb-3 tracking-wide">
                Premium Protection
            </h3>
            <p className="text-sm md:text-base text-[#EAF5FF]/80 leading-relaxed max-w-[85%] md:max-w-[70%]">
                Clinical-grade ingredients for all-day confidence and care.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}