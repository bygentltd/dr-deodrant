import React from "react";
import {
  ShieldCheck,
  HeartHandshake,
  Ban,
  SunMedium,
  Leaf,
  Shirt,
  Factory,
} from "lucide-react";

export default function InfiniteCarousel() {
  // The original list of features from your design
  const features = [
    { text: "24-Hour Odor Elimination", icon: ShieldCheck },
    { text: "Gentle on Skin", icon: HeartHandshake },
    { text: "No Parabens & Alcohol", icon: Ban },
    { text: "Helps Lighten Dark Underarms", icon: SunMedium },
    { text: "Vegan & Cruelty-Free", icon: Leaf },
    { text: "No White Marks or Stains", icon: Shirt },
    { text: "Made in Thailand", icon: Factory },
  ];

  // We duplicate the list 3 times to ensure a perfectly seamless infinite scroll loop
  const duplicatedFeatures = [...features, ...features, ...features];

  return (
    <div className="relative w-full overflow-hidden bg-[#F5FBFF] py-8">
      {/* Left Fade Overlay */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-[#F5FBFF] to-transparent" />

      {/* Marquee Track */}
      <div
        className="flex w-max items-center"
        style={{
          animation: "infinite-scroll 32s linear infinite",
        }}
      >
        {duplicatedFeatures.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center gap-3 md:gap-4 px-6 md:px-10">
              <div className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full bg-[#aec6df]">
                <Icon className="h-5 w-5 md:h-6 md:w-6 text-[#003286]" strokeWidth={1.5} />
              </div>
              <span className="whitespace-nowrap font-inter font-bold text-base md:text-xl text-[#003286] tracking-wide">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>

      {/* Right Fade Overlay */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-[#F5FBFF] to-transparent" />

      {/* Injecting pure CSS keyframes so it works anywhere without touching tailwind.config.js */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            /* Moving exactly 33.33% because we duplicated the array 3 times */
            100% { transform: translateX(-33.333333%); } 
          }
        `
      }} />
    </div>
  );
}