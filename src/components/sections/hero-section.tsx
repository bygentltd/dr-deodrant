"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FlowButton } from "../ui/flow-button";

export function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroContentOffset = "md:pl-[5vw] lg:pl-[8vw]";

  // Desktop Slides
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
          Thailand's Trusted <br /> Mineral Deodorant
        </>
      ),
    },
    {
      src: "/4th_hero_image.webp",
      title: (
        <>
          Sweat is Natural, <br /> Smell is Optional
        </>
      ),
    },
  ];

  // Mobile & iPad Portrait Slides
  const heroSlidesVertical = [
    {
      src: "/Hero1_crop.webp", // Replace with actual mobile portrait image
      title: (
        <>
          Skincare For <br />
          Your Underarms
        </>
      ),
    },
    {
      src: "/3rd_hero_Image.webp", // Replace with actual mobile portrait image
      title: (
        <>
          Thailand's Trusted <br /> Mineral Deodorant
        </>
      ),
    },
    {
      src: "/4th_hero_image.webp", // Replace with actual mobile portrait image
      title: (
        <>
          Sweat is Natural, <br /> Smell is Optional
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
            className={`carousel-slide absolute inset-0 ${idx === currentHeroSlide ? "active" : "opacity-0"
              } transition-opacity duration-1000`}
          >
            {/* Desktop Image */}
            <img
              alt={`Hero slide ${idx + 1}`}
              className="hidden lg:block w-full h-full object-cover ken-burns"
              src={slide.src}
            />
            {/* Mobile & iPad Portrait Image */}
            <img
              alt={`Hero slide ${idx + 1} portrait`}
              className="block lg:hidden w-full h-full object-cover ken-burns"
              src={heroSlidesVertical[idx].src}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 via-[#000000]/10 to-[#000000]/10 z-10" />
          </div>
        ))}
      </div>

      <div
        className={`relative z-10 h-full flex flex-col items-start justify-center text-left px-6 sm:px-10 ${heroContentOffset}`}
      >
        <div className="mb-4 w-full text-left">
          <span className="block font-inter text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] text-[#003286] drop-shadow-md">
            CERTIFIED • TESTED • SKIN-FRIENDLY
          </span>
        </div>

        <div className="mb-6 md:mb-8 h-[120px] md:h-[140px] lg:h-[160px] flex items-center w-full text-left">
          {/* Render the title based on the active slide */}
          <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-inter font-bold leading-[1.1] text-[#003286] drop-shadow-xl">
            {heroSlides[currentHeroSlide].title}
          </h1>
        </div>

        <div
          className="w-full flex flex-col items-center lg:items-start lg:flex-row gap-4 transition-opacity duration-1000 mt-4"
          id="hero-btns"
        >
          {/* Primary Button */}
          <FlowButton
            text="SHOP NOW"
            className="w-44 lg:w-48"
            defaultBgColor="bg-[#203652]"
            defaultTextColor="text-[#FFFFFF]"
            circleColor="bg-[#2C476B]"
          />

          {/* Secondary Button */}
          <Button
            variant="outline"
            className="w-44 lg:w-48 h-10 lg:h-11 border-2 border-[#003286] text-[#003286] bg-transparent px-3 py-2 rounded-full font-bold text-xs lg:text-sm uppercase tracking-wide hover:bg-[#203652]/95 hover:text-[#F5FBFF] transition-all shadow-lg"
            onClick={() => window.location.href = "/story"}
          >
            Learn The Science
          </Button>
        </div>

        {/* Indicators */}
        <div className="mt-10 flex items-center gap-3 hero-indicators justify-center lg:justify-start w-full lg:w-auto">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHeroSlide(i)}
              className={`w-3 h-3 rounded-full cursor-pointer ${i === currentHeroSlide ? "bg-[#F5FBFF]" : "bg-[#F5FBFF]/40"
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