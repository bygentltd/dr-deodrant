"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MeetTheFounders() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across the entire section to drive the parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to a vertical translation (y-axis).
  // Images start slightly higher (-10%) and move lower (10%) as you scroll down.
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="bg-[#eaf5ff] px-4 py-12 md:px-8 lg:px-16 w-full font-sans">
      <div 
        ref={sectionRef}
        className="bg-[#C6D9F1] rounded-[2rem] md:rounded-[3rem] p-6 pt-16 md:p-16 lg:p-24 w-full max-w-[1400px] mx-auto"
      >
        {/* Top Header */}
        <div className="mb-12 md:mb-16">
          <p className="text-sm font-medium text-[#4a4a4a] mb-4 tracking-wide">
            Essentia&trade;
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#313131] max-w-2xl">
            Meet the founders<br />behind the product.
          </h2>
        </div>

        {/* Parallax Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-32">
          {/* Founder 1 */}
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl group">
            <motion.div 
              style={{ y: yParallax, scale: 1.15 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1200&auto=format&fit=crop" 
                alt="Dr. Monica Lewis"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white/95">
              <p className="text-[10px] md:text-xs font-medium tracking-wider mb-1 uppercase opacity-90">
                Founder
              </p>
              <p className="text-2xl md:text-3xl font-medium tracking-tight">
                Dr. Monica Lewis
              </p>
            </div>
          </div>

          {/* Founder 2 */}
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-2xl group">
            <motion.div 
              style={{ y: yParallax, scale: 1.15 }}
              className="absolute inset-0 w-full h-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop" 
                alt="Dr. Elena Kovač"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white/95">
              <p className="text-[10px] md:text-xs font-medium tracking-wider mb-1 uppercase opacity-90">
                Founder
              </p>
              <p className="text-2xl md:text-3xl font-medium tracking-tight">
                Dr. Elena Kova&#269;
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left: Section Label */}
          <div className="lg:col-span-3 flex items-start">
            <span className="text-sm font-medium text-[#4a4a4a] tracking-wide">
              Our Experience
            </span>
          </div>

          {/* Right: Main Content */}
          <div className="lg:col-span-9 flex flex-col gap-12">
            <h3 className="text-3xl md:text-4xl lg:text-[42px] leading-[1.15] font-medium text-[#313131]">
              Dermatologists with a combined 40 years of clinical practice and
              research at Stanford Medical Center.
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-base md:text-lg text-[#4a4a4a] leading-relaxed">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                <p>
                  Elena grew frustrated watching patients arrive with shopping bags
                  full of products that were working against each other. She brings
                  scientific rigor to every aspect of our formulation.
                </p>
                <p>
                  Monica spent years researching skin barrier function, discovering
                  that most skincare products were overcomplicating what should be
                  simple. Her expertise in dermatological biochemistry guides our
                  minimalist approach.
                </p>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                <p>
                  Together, they set out to create what they couldn't find in the
                  market: a single product with only essential ingredients that
                  would strengthen the skin's natural functions rather than
                  override them. Three years of research and development led to
                  Essence.
                </p>
                <p>
                  Their philosophy is straightforward: trust your skin's
                  intelligence and give it only what it needs to thrive. Nothing
                  more, nothing less.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}