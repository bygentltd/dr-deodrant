"use client";

import React from 'react';

export default function HowToUse() {
  const steps = [
    {
      step: 1,
      title: "Shower and prepare your underarms",
      description: "Apply after showering on slightly damp underarms for best results.",
      imageUrl: "/Step_1.webp",
      imageAlt: "A woman with her eyes closed relaxing under a rain shower head"
    },
    {
      step: 2,
      title: "Glide gently for all-day freshness",
      description: "Wet the crystal if needed and glide gently 4-5 times over the underarm.",
      imageUrl: "/Step_2.webp",
      imageAlt: "A smiling woman wrapped in a towel holding and applying a roll-on deodorant"
    }
  ];

  return (
    <section className="bg-[#c6d9f1] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-cabinet font-bold text-[#0B2559] leading-tight">
            How to Use?
          </h2>
        </div>
        
        {/* Horizontal Flex Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-20">
          
          {/* STEP 1 */}
          <div 
            className="flex flex-col items-center w-full max-w-[320px] group cursor-pointer reveal-on-scroll"
            style={{ transitionDelay: '100ms' }}
          >
            {/* Step Badge */}
            <div className="bg-[#3b5982] text-white rounded-full px-6 py-1.5 font-bold uppercase tracking-widest text-sm mb-6 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-1">
              Step {steps[0].step}
            </div>
            
            {/* Arched Image Container */}
            <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden border-8 border-white shadow-xl shadow-gray-200/50 bg-white">
              <img 
                src={steps[0].imageUrl} 
                alt={steps[0].imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />
              {/* Optional overlay for a slight color dodge/burn on hover */}
              <div className="absolute inset-0 bg-[#3b5982]/0 transition-colors duration-500 group-hover:bg-[#3b5982]/10 mix-blend-overlay"></div>
            </div>

            {/* Text Content */}
            <div className="mt-8 text-center px-2">
              <h3 className="text-[#3b5982] text-lg md:text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-900">
                {steps[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base font-medium">
                {steps[0].description}
              </p>
            </div>
          </div>

          {/* ARROW */}
          <div 
            className="text-[#3b5982] flex-shrink-0 mt-8 md:-mt-32 reveal-on-scroll"
            style={{ transitionDelay: '300ms' }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={3} 
              stroke="currentColor" 
              className="w-10 h-10 md:w-12 md:h-12 transform rotate-90 md:rotate-0 transition-transform hover:scale-110 hover:translate-x-2 duration-300 cursor-pointer"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>

          {/* STEP 2 */}
          <div 
            className="flex flex-col items-center w-full max-w-[320px] group cursor-pointer reveal-on-scroll"
            style={{ transitionDelay: '500ms' }}
          >
            {/* Step Badge */}
            <div className="bg-[#3b5982] text-white rounded-full px-6 py-1.5 font-bold uppercase tracking-widest text-sm mb-6 shadow-sm transform transition-transform duration-300 group-hover:-translate-y-1">
              Step {steps[1].step}
            </div>
            
            {/* Arched Image Container */}
            <div className="relative w-full aspect-[3/4] rounded-t-full rounded-b-[2rem] overflow-hidden border-8 border-white shadow-xl shadow-gray-200/50 bg-white">
              <img 
                src={steps[1].imageUrl} 
                alt={steps[1].imageAlt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
              />
               {/* Optional overlay for a slight color dodge/burn on hover */}
               <div className="absolute inset-0 bg-[#3b5982]/0 transition-colors duration-500 group-hover:bg-[#3b5982]/10 mix-blend-overlay"></div>
            </div>

            {/* Text Content */}
            <div className="mt-8 text-center px-2">
              <h3 className="text-[#3b5982] text-lg md:text-xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-900">
                {steps[1].title}
              </h3>
              <p className="text-gray-600 font-inter leading-relaxed text-sm md:text-base font-medium">
                {steps[1].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}