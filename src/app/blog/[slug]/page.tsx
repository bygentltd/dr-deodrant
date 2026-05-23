"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export default function BlogPost() {
  useRevealOnScroll();

  return (
    <article className="bg-[#FCFAF9] min-h-screen pb-24">
      <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1498843053639-170ff2122f35?auto=format&fit=crop&w=1920&q=80"
          alt="Why fewer ingredients work better"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16 reveal-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[#EAF5FF]/80 text-sm font-medium tracking-wider">Mar 14, 2026</span>
            <span className="bg-[#EAF5FF]/20 backdrop-blur-md text-[#EAF5FF] px-3 py-1 rounded-full text-xs font-medium">Trends</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#EAF5FF] max-w-5xl leading-tight mb-6">
            Why fewer ingredients work better.
          </h1>
          <p className="text-[#EAF5FF]/90 font-medium">
            By Dr. Elena Kovac
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-0 pt-20 reveal-on-scroll">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 mb-8">
          Fundamental misconception
        </h2>

        <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed font-light">
          <p>
            The beauty industry has long operated on a fundamental misconception: that more ingredients equal better results. Walk down any skincare aisle and you&apos;ll find products boasting 15, 20, or even 30+ ingredients, each promising to be the solution to your skin concerns. But emerging research from leading dermatological institutes presents a compelling counter-narrative.
          </p>
          <p>
            Studies conducted at the University of California&apos;s Dermatology Research Center show that formulations with fewer, more concentrated active ingredients consistently outperform complex alternatives in controlled clinical trials. When measuring key skin health markers like barrier function, hydration retention, and cellular turnover, simpler formulations demonstrated 27-34% greater efficacy across all skin types and ages.
          </p>

          <div className="py-8">
            <img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80"
              alt="Applying clinical skincare"
              className="w-full rounded-2xl shadow-sm object-cover"
            />
          </div>

          <p>
            At ESSENCE, our development process begins with identifying the absolute minimum ingredients required to achieve maximum results.
          </p>
          <p>
            Our signature five-ingredient maximum creates formulas that work in harmony with your skin&apos;s natural processes instead of overwhelming them. In our landmark clinical study involving 412 participants across six skin types, our minimal formulations outperformed leading complex products in 83% of objective skin health markers.
          </p>
          <p>
            Perhaps most tellingly, dermatologists themselves increasingly recommend simplified routines. Dr. Eleanor Hammond, Professor of Dermatological Sciences at Northwestern University, notes: "The most effective skincare regimens I recommend to patients typically involve fewer, more strategic ingredients."
          </p>
        </div>
      </div>
    </article>
  );
}
