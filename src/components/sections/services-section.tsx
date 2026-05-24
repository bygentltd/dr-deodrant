"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";
import { 
  Shield, 
  Gem, 
  Droplet, 
  Shirt, 
  Leaf, 
  ShieldCheck 
} from "lucide-react";

export function ServicesSection() {
  useRevealOnScroll();

  const leftServices = [
    {
      title: "24-Hour Odor Protection",
      description: "Long-lasting freshness you can trust",
      icon: Shield,
    },
    {
      title: "Alum Powered Protection",
      description: "Alum targets odor-causing bacteria at the root, where it starts",
      icon: Gem,
    },
    {
      title: "Gentle & Skin-Friendly",
      description: "Safe for all skin types, even sensitive skin",
      icon: Droplet,
    },
  ];

  const rightServices = [
    {
      title: "No White Marks or Stains",
      description: "Dries clear and keeps you confident all day",
      icon: Shirt,
    },
    {
      title: "Natural & Cruelty Free",
      description: "Made with natural ingredients, kind to you and the planet",
      icon: Leaf,
    },
    {
      title: "Clean. Confident. Everyday.",
      description: "Pure care that keeps you feeling your best",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#F0F7FF] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transform with <br className="hidden md:block" />
            Our Glowing Services
          </h2>
        </div>
        
        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 xl:gap-16 items-center">
          
          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-16 order-2 lg:order-1 z-10">
            {leftServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row items-center sm:justify-end gap-6 text-center sm:text-right reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Text Container: Flex column aligning items to the right on tablet/desktop */}
                  <div className="flex-1 order-2 sm:order-1 flex flex-col items-center sm:items-end">
                    <h3 className="text-[#0B2559] font-bold text-lg md:text-xl mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Icon */}
                  <div className="relative shrink-0 order-1 sm:order-2">
                    <div className="flex items-center justify-center w-[88px] h-[88px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-[#1E40AF] z-10 relative">
                      {idx === 0 ? (
                        <div className="relative flex items-center justify-center">
                          <Icon strokeWidth={1.5} className="w-9 h-9" />
                          <span className="absolute text-[10px] font-bold mt-0.5">24</span>
                        </div>
                      ) : (
                        <Icon strokeWidth={1.5} className="w-9 h-9" />
                      )}
                    </div>
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-16 w-8 xl:w-16 h-px bg-[#8BA6D3] z-[-1]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#8BA6D3]"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column (Pill Image) */}
          <div className="flex justify-center order-1 lg:order-2 reveal-on-scroll z-20">
            <div className="relative w-[300px] h-[480px] md:w-[360px] md:h-[580px] rounded-[200px] overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.8)] border-[8px] border-white/60">
              <div className="absolute top-8 left-8 text-white w-4 h-4 z-10 opacity-80">✨</div>
              <div className="absolute bottom-12 right-10 text-white w-4 h-4 z-10 opacity-80">✨</div>
              
              <img 
                src="/Central_image.webp" 
                alt="24 Hour Odor Protection" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 md:gap-16 order-3 lg:order-3 z-10">
            {rightServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col sm:flex-row items-center sm:justify-start gap-6 text-center sm:text-left reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative shrink-0">
                    <div className="flex items-center justify-center w-[88px] h-[88px] bg-white rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] text-[#1E40AF] z-10 relative">
                      <Icon strokeWidth={1.5} className="w-9 h-9" />
                    </div>
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 -left-8 xl:-left-16 w-8 xl:w-16 h-px bg-[#8BA6D3] z-[-1]">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#8BA6D3]"></div>
                    </div>
                  </div>
                  
                  {/* Text Container: Flex column aligning items to the left on tablet/desktop */}
                  <div className="flex-1 flex flex-col items-center sm:items-start">
                    <h3 className="text-[#0B2559] font-bold text-lg md:text-xl mb-1.5">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}