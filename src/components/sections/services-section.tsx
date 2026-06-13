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
      baseColor: "#C8B79C", // Mineral Blue
      iconColor: "#9E8C6E", // Darker Mineral Blue for visibility
    },
    {
      title: "Alum Powered Protection",
      description: "Alum targets odor-causing bacteria at the root, where it starts",
      icon: Gem,
      baseColor: "#8FAF9B", // Sage Green
      iconColor: "#5A826B", // Darker Sage Green for visibility
    },
    {
      title: "Gentle & Skin-Friendly",
      description: "Safe for all skin types, even sensitive skin",
      icon: Droplet,
      baseColor: "#7EA9CB", // Mineral Blue
      iconColor: "#4A7C9F", // Darker Mineral Blue for visibility
    },
  ];

  const rightServices = [
    {
      title: "No White Marks or Stains",
      description: "Dries clear and keeps you confident all day",
      icon: Shirt,
      baseColor: "#C8B79C", // Sand Beige
      iconColor: "#9E8C6E", // Darker Sand Beige for visibility
    },
    {
      title: "Natural & Cruelty Free",
      description: "Made with natural ingredients, kind to you and the planet",
      icon: Leaf,
      baseColor: "#8FAF9B", // Sage Green
      iconColor: "#5A826B", // Darker Sage Green for visibility
    },
    {
      title: "Clean. Confident. Everyday.",
      description: "Pure care that keeps you feeling your best",
      icon: ShieldCheck,
      baseColor: "#7EA9CB", // Mineral Blue
      iconColor: "#4A7C9F", // Darker Mineral Blue for visibility
    },
  ];

  return (
    <section className="py-8 md:py-20 overflow-hidden bg-[#f5fbff]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="text-center mb-12 sm:mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-[#003286] leading-tight px-4">
            Made for  <br className="hidden sm:block" />
            Everyday Confidence
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 sm:gap-16 lg:gap-8 xl:gap-16 items-center">

          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 order-2 lg:order-1 z-10 max-w-lg mx-auto lg:max-w-none w-full">
            {leftServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center justify-start lg:justify-end gap-5 sm:gap-6 text-center sm:text-left lg:text-right reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative shrink-0 order-1 lg:order-2">
                    {/* Background uses baseColor + 40 (25% opacity) */}
                    <div
                      className="flex items-center justify-center w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[88px] lg:h-[88px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-10 relative"
                      style={{ backgroundColor: `${service.baseColor}40` }}
                    >
                      {idx === 0 ? (
                        <div className="relative flex items-center justify-center">
                          {/* Icon uses darker iconColor */}
                          <Icon strokeWidth={1.5} className="w-8 h-8 sm:w-9 sm:h-9" style={{ color: service.iconColor }} />
                          <span className="absolute text-[9px] sm:text-[10px] font-bold mt-0.5" style={{ color: service.iconColor }}>24</span>
                        </div>
                      ) : (
                        <Icon strokeWidth={1.5} className="w-8 h-8 sm:w-9 sm:h-9" style={{ color: service.iconColor }} />
                      )}
                    </div>
                    <div className="hidden lg:block absolute top-1/2 -right-8 xl:-right-16 w-8 xl:w-16 h-px bg-gray-200 z-[-1]">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    </div>
                  </div>

                  <div className="flex-1 order-2 lg:order-1 flex flex-col items-center sm:items-start lg:items-end w-full">
                    <h3 className="text-[#003286] font-inter font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-[280px] sm:max-w-md lg:max-w-[260px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column */}
          <div className="flex justify-center order-1 lg:order-2 reveal-on-scroll z-20">
            <div className="relative w-[280px] h-[400px] sm:w-[320px] sm:h-[460px] md:w-[360px] md:h-[580px] rounded-[200px] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.05)] border-[6px] md:border-[8px] border-white group cursor-pointer">
              <div className="absolute top-8 left-8 text-white w-4 h-4 z-10 opacity-80">✨</div>
              <div className="absolute bottom-12 right-10 text-white w-4 h-4 z-10 opacity-80">✨</div>

              <img
                src="/Central_image.webp"
                alt="24 Hour Odor Protection"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 md:gap-12 lg:gap-16 order-3 lg:order-3 z-10 max-w-lg mx-auto lg:max-w-none w-full">
            {rightServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-center justify-start gap-5 sm:gap-6 text-center sm:text-left reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="relative shrink-0">
                    {/* Background uses baseColor + 40 (25% opacity) */}
                    <div
                      className="flex items-center justify-center w-[72px] h-[72px] sm:w-[80px] sm:h-[80px] lg:w-[88px] lg:h-[88px] rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] z-10 relative"
                      style={{ backgroundColor: `${service.baseColor}40` }}
                    >
                      {/* Icon uses darker iconColor */}
                      <Icon strokeWidth={1.5} className="w-8 h-8 sm:w-9 sm:h-9" style={{ color: service.iconColor }} />
                    </div>
                    <div className="hidden lg:block absolute top-1/2 -left-8 xl:-left-16 w-8 xl:w-16 h-px bg-gray-200 z-[-1]">
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col items-center sm:items-start w-full">
                    <h3 className="text-[#003286] font-inter font-bold text-lg sm:text-xl lg:text-2xl mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 font-inter text-sm sm:text-base leading-relaxed max-w-[280px] sm:max-w-md lg:max-w-[260px]">
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