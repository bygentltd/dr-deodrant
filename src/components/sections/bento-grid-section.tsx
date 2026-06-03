"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function BentoGridSection() {
  useRevealOnScroll();

  return (
    <section className="bg-[#F5FBFF] px-6 py-12 md:px-12 lg:px-16 max-w-350 mx-auto">
      {/* 3-Column Grid matching the reference image layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[320px]">
        
        {/* Card 1: Tall (Left) */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2rem] reveal-on-scroll">
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="/image_3.webp" 
            alt="Long-lasting Value" 
          />
          {/* Bottom Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          {/* Centered Text Container */}
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-[#F5FBFF] mb-3 tracking-wide">Long-Lasting</h3>
            <p className="text-sm md:text-base font-inter text-[#F5FBFF]/80 leading-relaxed max-w-[90%]">
              Six to eight months of pure, uninterrupted protection.
            </p>
          </div>
        </div>

        

        {/* Card 2: Tall (Middle) */}
        <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-[2rem] reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="/image_4.webp" 
            alt="Active Ingredients" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-center text-center">
            <h3 className="text-2xl md:text-3xl font-inter font-bold text-[#F5FBFF] mb-3 tracking-wide">Active Ingredients</h3>
            <p className="text-sm md:text-base font-inter text-[#F5FBFF]/80 leading-relaxed max-w-[90%]">
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
            <h3 className="text-xl md:text-2xl font-inter font-bold text-[#F5FBFF] mb-2 tracking-wide">Daily Defense</h3>
            <p className="text-sm font-inter text-[#F5FBFF]/80 max-w-[95%]">
              Providing consistent protection without harsh chemicals.
            </p>
          </div>
        </div>

        {/* Card 4: Square (Bottom Right) */}
        <div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-[2rem] reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
          <img 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            src="/Image_6.webp" 
            alt="Discover More" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
          
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-center text-center">
            

          </div>
        </div>

      </div>
    </section>
  );
}