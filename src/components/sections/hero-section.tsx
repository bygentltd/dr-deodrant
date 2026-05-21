"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroContentOffset = "md:pl-[5vw] lg:pl-[8vw]";

  const heroImages = [
    "/HERO_image.webp",
    "/2nd_hero_image.webp",
    "/HERO_image.webp"
  ];

  const heroTitles = [
    'Confidence Starts With What You Wear Closest.',
    'Science-Backed Protection. Naturally Gentle.',
    'Stay Fresh Longer — Without Harsh Chemicals.'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // Reveal hero text on mount and when slide changes
  useEffect(() => {
    const elems = Array.from(document.querySelectorAll('.reveal-text')) as HTMLElement[];
    elems.forEach(el => el.classList.remove('active'));
    const timers: number[] = [];
    elems.forEach((el, i) => {
      const t = window.setTimeout(() => el.classList.add('active'), 200 + i * 120);
      timers.push(t);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, [currentHeroSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden" id="hero-section">
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((src, idx) => (
          <div key={idx} className={`carousel-slide absolute inset-0 ${idx === currentHeroSlide ? 'active' : ''}`}>
            <img alt={`Hero slide ${idx + 1}`} className="w-full h-full object-cover ken-burns" src={src} />
          </div>
        ))}
      </div>
      <div className={`relative z-10 h-full flex flex-col items-start justify-center text-left px-6 ${heroContentOffset}`}>
        <div className="overflow-hidden mb-4">
          <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#0a2544] drop-shadow-md reveal-text block">CERTIFIED · EXPERIENCED · DEVOTED</span>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="font-bold font-serif text-5xl md:text-6xl text-[#0a2544] max-w-4xl reveal-text leading-[1.1] drop-shadow-xl">{heroTitles[currentHeroSlide]}</h1>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 justify-start" id="hero-btns">
          <Button variant="default" className="bg-white text-[#0a2544] px-10 py-6 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 hover:bg-white/90 transition-transform shadow-lg">Shop The Collection</Button>
          <Button variant="outline" className="border-2 border-[#0a2544] text-[#0a2544] bg-transparent px-10 py-6 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0a2544] transition-all shadow-lg">Learn The Science</Button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex items-center gap-3 hero-indicators justify-start">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrentHeroSlide(i)} className={`w-3 h-3 rounded-full cursor-pointer ${i === currentHeroSlide ? 'bg-white' : 'bg-white/40'} transition-all`} aria-label={`Go to slide ${i + 1}`} />
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
