"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FlowButton } from "../ui/flow-button";
import { motion } from "framer-motion";

export function HeroSection() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const heroContentOffset = "md:pl-[5vw] lg:pl-[8vw]";

  // Desktop Slides
  const heroSlides = [
    {
      src: "/Hero1.webp",
      titleLine1: "Skincare For",
      titleLine2: "Your Underarms",
    },
    {
      src: "/3rd_hero_Image.webp",
      titleLine1: "Thailand's Trusted",
      titleLine2: "Mineral Deodorant",
    },
    {
      src: "/4th_hero_image.webp",
      titleLine1: "Sweat is Natural,",
      titleLine2: "Smell is Optional",
    },
  ];

  // Mobile & iPad Portrait Slides
  const heroSlidesVertical = [
    {
      src: "/HeroV1.webp",
      titleLine1: "Skincare For",
      titleLine2: "Your Underarms",
    },
    {
      src: "/HeroV2.webp",
      titleLine1: "Thailand's Trusted",
      titleLine2: "Mineral Deodorant",
    },
    {
      src: "/HeroV3.webp",
      titleLine1: "Sweat is Natural,",
      titleLine2: "Smell is Optional",
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
              className="hidden xl:block w-full h-full object-cover ken-burns"
              src={slide.src}
            />
            {/* Mobile & iPad Portrait Image */}
            <img
              alt={`Hero slide ${idx + 1} portrait`}
              className="block xl:hidden w-full h-full object-cover ken-burns"
              src={heroSlidesVertical[idx].src}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/10 via-[#000000]/10 to-[#000000]/10 z-10" />
          </div>
        ))}
      </div>

      <div
        className={`relative z-10 h-full flex flex-col items-start justify-center text-left px-6 sm:px-10 ${heroContentOffset}`}
      >
        {/* Content Wrapper */}
        <div className="w-full flex flex-col">

          {/* Subtitle - Animates only on initial load */}
          <div
            className="mb-4 w-full text-left translate-y-20 lg:translate-y-0 animate-fade-in-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="block font-inter text-[10px] md:text-xs lg:text-sm uppercase tracking-[0.2em] text-[#003286] drop-shadow-md">
              CERTIFIED • TESTED • SKIN-FRIENDLY
            </span>
          </div>

          {/* Title - Animates on every slide change */}
          <div
            className="mb-6 md:mb-8 h-[120px] md:h-[140px] lg:h-[160px] flex items-center w-full text-left translate-y-[60px] lg:translate-y-0"
          >
            <motion.h1
              key={currentHeroSlide}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.2,
                  },
                },
              }}
              className="max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-inter font-bold leading-[1.1] text-[#003286] drop-shadow-xl"
            >
              <span className="block">
                {heroSlides[currentHeroSlide].titleLine1.split("").map((char, index) => (
                  <motion.span
                    key={`l1-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              <span className="block mt-1 sm:mt-2">
                {heroSlides[currentHeroSlide].titleLine2.split("").map((char, index) => (
                  <motion.span
                    key={`l2-${index}`}
                    className="inline-block"
                    variants={{
                      hidden: { opacity: 0, filter: "blur(8px)", y: 10 },
                      visible: { opacity: 1, filter: "blur(0px)", y: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
            </motion.h1>
          </div>

          {/* Buttons - Animates third (staggered delay) */}
          <div
            className="w-full flex flex-row justify-center lg:justify-start items-center lg:items-start lg:flex-row gap-3 sm:gap-4 mt-[35vh] md:mt-[40vh] lg:mt-4 animate-fade-in-up"
            id="hero-btns"
            style={{ animationDelay: '400ms' }}
          >
            <FlowButton
              text="SHOP NOW"
              className="!w-36 sm:!w-40 lg:!w-48 !h-10 lg:!h-11 !px-0 text-[10px] sm:text-xs lg:text-sm"
              defaultBgColor="bg-[#203652]"
              defaultTextColor="text-[#FFFFFF]"
              circleColor="bg-[#2C476B]"
              onClick={() => (window.location.href = "/shop/original")}
            />

            <Button
              variant="outline"
              className="w-36 sm:w-40 lg:w-48 h-10 lg:h-11 border-2 border-[#003286] text-[#003286] bg-white/40 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none px-0 sm:px-3 py-2 rounded-full font-bold text-[10px] sm:text-xs lg:text-sm uppercase tracking-wide hover:bg-[#203652]/95 hover:text-[#F5FBFF] transition-all shadow-lg"
              onClick={() => (window.location.href = "/story")}
            >
              Learn The Science
            </Button>
          </div>

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
      </div>
    </section>
  );
}