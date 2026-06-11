"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MeetTheFounder() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the entire section to drive the parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to a vertical translation (y-axis).
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section className="bg-[#F5FBFF] px-4 py-10 md:px-8 w-full font-sans">
      <div
        ref={sectionRef}
        // Scaled down padding, max-width, and border-radius
        className="bg-[#EAF5FF] rounded-3xl md:rounded-[2.5rem] p-6 pt-12 md:p-10 lg:p-16 w-full max-w-[1100px] mx-auto"
      >
        {/* Top Header */}
        <div className="mb-8 md:mb-12 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl font-medium tracking-tight text-[#313131] max-w-2xl lg:max-w-none mx-auto lg:mx-0">
            Meet the Founder
          </h2>
        </div>

        {/* Two-Column Grid: Image Left, Text Right */}
        {/* Tighter gaps between columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* Left: Founder Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] overflow-hidden rounded-xl group mx-auto max-w-md lg:max-w-none">
            <motion.div
              style={{ y: yParallax, scale: 1.15 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src="/Founder.jpg"
                alt="Remee Doowa"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white/95">
              <p className="text-[10px] md:text-[11px] font-medium tracking-wider mb-1 uppercase opacity-90">
                Founder & Formulator
              </p>
              <p className="text-xl md:text-2xl font-medium tracking-tight">
                Remee Doowa
              </p>
            </div>
          </div>

          {/* Right: Founder Details */}
          <div className="flex flex-col gap-6 lg:gap-10 text-center lg:text-left">
            <div>
              <span className="text-xs md:text-sm font-medium text-[#4a4a4a] tracking-wide mb-2 md:mb-3 block">
                Singer. Songwriter. Visionary.
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl leading-[1.2] font-medium text-[#313131]">
                Born Between Two Worlds. Built for a Third.
              </h3>
            </div>

            {/* Scaled down text from lg to base, tighter paragraph gaps */}
            <div className="flex flex-col gap-4 md:gap-5 text-[15px] sm:text-base md:text-base text-[#4a4a4a] leading-relaxed text-left sm:text-justify lg:text-left">
              <p>
                Remee is a Thai-Indian international artist — a singer, songwriter, and performer who has shared stages from Times Square New York to the Ambani family's private events. But behind the spotlight is a woman deeply rooted in the rhythms of nature, wellness, and intention.
              </p>
              <p>
                Dr. Deodrant was born from that same philosophy — the belief that what you put on your body should be as pure as what moves your soul. Crystal minerals sourced from Thailand. No aluminium chloride. No compromise.
              </p>
              <p className="italic font-medium text-[#313131]/90">
                "I wanted something as natural as the places that shaped me."
              </p>
              <p className="font-bold text-[#313131]">- Remee, Founder</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}