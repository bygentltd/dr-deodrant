"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FlowButton } from "../ui/flow-button";

export function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroContentOffset = "md:pl-[5vw] lg:pl-[8vw]";

  // Combine images and titles into a single array of objects
  const heroSlides = [
        {
      src: "/Hero1_crop.webp",
      title: (
        <>
          Skincare For <br />
          Your Underarms
        </>
      ),
    },
    {
      src: "/3rd_hero_Image.webp",
      title: (
        <>
          Thailand's Trusted <br/> Mineral Deodorant 
        </>
      ),
    },
        {
      src: "/4th_hero_Image.webp",
      title: (
        <>
          Sweat is Natural, <br/> Smell is Optional
        </>
      ),
    },

  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section
      className="relative min-h-screen h-[calc(100svh+4rem)] md:h-[calc(100svh+7rem)] w-full overflow-hidden"
      id="hero-section"
    >
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`carousel-slide absolute inset-0 ${
              idx === currentHeroSlide ? "active" : "opacity-0"
            } transition-opacity duration-1000`}
          >
            <img
              alt={`Hero slide ${idx + 1}`}
              className="w-full h-full object-cover ken-burns"
              src={slide.src}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 via-[#000000]/10 to-[#000000]/10 z-10" />
          </div>
        ))}
      </div>
      
      <div
        className={`relative z-10 h-full flex flex-col items-start justify-center text-left px-6 ${heroContentOffset}`}
      >
        <div className="mb-4">
          <span className="block font-inter text-sm uppercase tracking-[0.2em] text-[#003286] drop-shadow-md">
            MADE IN THAILAND • TESTED • SKIN-FRIENDLY
          </span>
        </div>
        
        <div className="mb-8 h-[140px] md:h-[160px] flex items-center">
          {/* Render the title based on the active slide */}
          <h1 className="max-w-4xl text-3xl font-inter font-bold leading-[1.1] text-[#003286] drop-shadow-xl md:text-6xl">
            {heroSlides[currentHeroSlide].title}
          </h1>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 transition-opacity duration-1000 justify-start items-center sm:items-start"
          id="hero-btns"
        >
          {/* Increased width to w-48 (192px) */}
          <FlowButton
            text="SHOP NOW"
            className="w-48"
            defaultBgColor="bg-[#203652]"
            defaultTextColor="text-[#FFFFFF]"
            circleColor="bg-[#2C476B]"
          />
          
          {/* Decreased padding (px-8) and set a more compact width */}
          <Button
            variant="outline"
            // Changed w-72 to w-48 and py-8 to py-6
            className="w-56 h-11 border-2 border-[#003286] text-[#003286] bg-transparent px-3 py-2 rounded-full font-bold text-sm uppercase tracking-wide hover:bg-[#203652]/95 hover:text-[#F5FBFF] transition-all shadow-lg"
            onClick={() => window.location.href = "/story"}
          >
            Learn The Science
          </Button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex items-center gap-3 hero-indicators justify-start">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroSlide(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                i === currentHeroSlide ? "bg-[#F5FBFF]" : "bg-[#F5FBFF]/40"
              } transition-all`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrows */}
        {/* <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
          <button className="hero-arrow cursor-pointer" onClick={() => setCurrentHeroSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)} aria-label="Previous slide">&#10094;</button>
        </div>
        <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
          <button className="hero-arrow cursor-pointer" onClick={() => setCurrentHeroSlide((s) => (s + 1) % heroSlides.length)} aria-label="Next slide">&#10095;</button>
        </div> */}
      </div>
    </section>
  );
}