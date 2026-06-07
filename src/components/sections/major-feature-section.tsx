"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function MajorFeaturesSection() {
  useRevealOnScroll();

  return (
    // Minimal bottom padding (pb-6) so it connects nicely with the Bento Grid below it
    <section className="pt-24 pb-6 px-6 md:px-12 lg:px-16 max-w-350 mx-auto">
      <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-[#003286] leading-tight">
            Why Choose Dr. Deodrant?
          </h2>
        </div>
      
      {/* 2-Column Grid for the major cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        
        {/* Major Card 1 */}
        <div className="relative group overflow-hidden rounded-[2rem] h-112.5 md:h-150 reveal-on-scroll">
          {/* Replace src with your actual image */}
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="/Image_1.webp" 
            alt="Everyday With You" 
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          {/* Text Content */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-center text-center">
            <h3 className="text-2xl font-inter font-bold md:text-3xl text-[#F5FBFF] mb-3 tracking-wide">
              21 Days. Real Results
            </h3>
            <p className="text-sm md:text-base font-inter text-[#F5FBFF]/80 leading-relaxed max-w-[85%] md:max-w-[70%]">
              Switch to pure crystal alum and watch your skin thank you.
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
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-[#F5FBFF] mb-3 tracking-wide">
                Pure Ingredients. Real Effect
            </h3>
            <p className="text-sm md:text-base font-inter text-[#F5FBFF]/80 leading-relaxed max-w-[85%] md:max-w-[70%]">
                Infused with Kiwi, Acerola, and Vitamins C & E to brighten, protect, and nourish skin.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}