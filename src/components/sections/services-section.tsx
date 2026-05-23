"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";
import { 
  Sparkles, 
  Brush, 
  Droplets, 
  Bath, 
  Flower2, 
  GripHorizontal 
} from "lucide-react";

export function ServicesSection() {
  useRevealOnScroll();

  const leftServices = [
    {
      title: "Nail Elegance",
      description: "Indulge in premium luxurious nail care and treatments.",
      icon: Sparkles,
    },
    {
      title: "Beauty Parlor",
      description: "Unwind and fully indulge in pure luxurious beauty",
      icon: Brush,
    },
    {
      title: "Glowing Face",
      description: "Face transformation with expert cosmetics care",
      icon: Droplets,
    },
  ];

  const rightServices = [
    {
      title: "Thermal Bath",
      description: "Relaxation and Renewal in Thermal Baths: An Escape",
      icon: Bath,
    },
    {
      title: "Essential Makeup",
      description: "Relaxation and Renewal in Thermal Baths: An Escape",
      icon: Flower2,
    },
    {
      title: "Stone Massage",
      description: "Experience deep relaxation with stone massages",
      icon: GripHorizontal,
    },
  ];

  return (
    <section className="py-24 bg-[#EAF5FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Transform with <br className="hidden md:block" />
            Our Glowing Services
          </h2>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (Text Right, Icon Left -> visually placed near center) */}
          <div className="flex flex-col gap-10 md:gap-16 order-2 lg:order-1">
            {leftServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-row lg:flex-row items-start lg:justify-end gap-6 text-left lg:text-right reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px] lg:ml-auto">
                      {service.description}
                    </p>
                  </div>
                  <div className="shrink-0 text-gray-700 mt-1 order-first lg:order-last">
                    <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column (Pill Image) */}
          <div className="flex justify-center order-1 lg:order-2 reveal-on-scroll">
            <div className="relative w-[280px] h-[450px] md:w-[320px] md:h-[520px] rounded-full overflow-hidden shadow-2xl">
              {/* Replace src with your actual image path */}
              <img 
                src="/ChatGPT Image Jan 30, 2026, 08_08_12 PM.webp" 
                alt="Glowing Spa Services" 
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Right Column (Icon Left, Text Right) */}
          <div className="flex flex-col gap-10 md:gap-16 order-3 lg:order-3">
            {rightServices.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div 
                  key={idx} 
                  className="flex items-start justify-start gap-6 text-left reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div className="shrink-0 text-gray-700 mt-1">
                    <Icon strokeWidth={1.5} className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-[280px]">
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