"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroContentOffset = "md:pl-[5vw] lg:pl-[8vw]";
  const heroTitle = "Skincare For Your Underarms";

  const heroImages = [
    "/HERO_image.webp",
    "/2nd_hero_image.webp",
    "/HERO_image.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen h-[calc(100svh+4rem)] md:h-[calc(100svh+7rem)] w-full overflow-hidden" id="hero-section">
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, idx) => (
          <div key={idx} className={`carousel-slide absolute inset-0 ${idx === currentHeroSlide ? 'active' : ''}`}>
            <img alt={`Hero slide ${idx + 1}`} className="w-full h-full object-cover ken-burns" src={src} />
          </div>
        ))}
      </div>
      <div className={`relative z-10 h-full flex flex-col items-start justify-center text-left px-6 ${heroContentOffset}`}>
        <div className="mb-4">
          <span className="block font-bold text-sm uppercase tracking-[0.3em] text-[#0a2544] drop-shadow-md">CERTIFIED · TESTED · SKIN-FRIENDLY</span>
        </div>
        <div className="mb-8">
          <h1 className="max-w-4xl text-6xl font-bold leading-[1.1] text-[#0a2544] drop-shadow-xl md:text-7xl">Skincare For <br/>Your Underarms</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 justify-start" id="hero-btns">
          <Button variant="default" className="bg-[#113d86] text-white px-10 py-6 rounded-full font-bold text-md uppercase tracking-widest hover:scale-105 hover:bg-[#113d86]/90 transition-transform shadow-lg">Shop Now</Button>
          <Button variant="outline" className="border-2 border-[#0a2544] text-[#0a2544] bg-transparent px-10 py-6 rounded-full font-bold text-md uppercase tracking-widest hover:bg-[#EAF5FF]/95 hover:text-[#0a2544] transition-all shadow-lg">Learn The Science</Button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex items-center gap-3 hero-indicators justify-start">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrentHeroSlide(i)} className={`w-3 h-3 rounded-full cursor-pointer ${i === currentHeroSlide ? 'bg-[#EAF5FF]' : 'bg-[#EAF5FF]/40'} transition-all`} aria-label={`Go to slide ${i + 1}`} />
          ))}
        </div>

        {/* Arrows */}
        {/* <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <button className="hero-arrow cursor-pointer" onClick={() => setCurrentHeroSlide((s) => (s - 1 + heroImages.length) % heroImages.length)} aria-label="Previous slide">&#10094;</button>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <button className="hero-arrow cursor-pointer" onClick={() => setCurrentHeroSlide((s) => (s + 1) % heroImages.length)} aria-label="Next slide">&#10095;</button>
        </div> */}
      </div>
    </section>
  );
}
