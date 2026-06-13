"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function OurStoryFixed() {
  const containerRef = useRef<HTMLDivElement>(null);

  // CHANGED: Track ONLY the entry phase of the component.
  // "start end" = top of component hits bottom of viewport (starts entering)
  // "start start" = top of component hits top of viewport (fully covers screen)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"], 
  });

  // CHANGED: Map progress from 0 to 1 perfectly over the entry phase.
  // By the time the section is fully in view, scale locks at 1.
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[100svh] overflow-hidden"
    >
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0 w-full h-full bg-[url('/Story_page.webp')] md:bg-[url('/OurStory_image.webp')] bg-fixed bg-cover bg-center bg-no-repeat origin-center"
      />

      <div className="absolute inset-0 z-10 bg-black/15" />

      <div className="relative z-20 w-full h-full flex flex-col justify-between px-6 py-12 md:px-16 md:py-16 font-sans">
        
        <div />

        {/* <div className="flex justify-center items-center">
          <h1 className="text-6xl md:text-8xl lg:text-[100px] text-white/95 font-medium tracking-tight drop-shadow-md">
            Dr.Deodrant
          </h1>
        </div> */}

        <div className="flex justify-between items-end w-full">
          <div className="text-white/95 drop-shadow-sm">
            <p className="text-[10px] md:text-xs font-medium tracking-wider mb-0.5">
              Est
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              2022
            </p>
          </div>

          <div className="text-white/95 text-right drop-shadow-sm">
            <p className="text-[10px] md:text-xs font-medium tracking-wider mb-0.5">
              Made in
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight">
              Thailand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}