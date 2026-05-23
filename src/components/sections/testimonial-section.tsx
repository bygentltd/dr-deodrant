"use client";

import { useState } from "react";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export function TestimonialSection() {
  useRevealOnScroll();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl39wosQluUgrJbRmGcWApiqE1HF7iBhfHdG55FCacoM5RiQtbvJC2X9s7NI2Q3KfNUtz8s3UCZol4IYs1g1nux0TDFxMehHeEmTL55RHsOiuz_pXRjj6mG_VmmnJu0WSxfvp-PFRNDa_fdGwqQv-mQbM8jaPkT56XxzBUh2QBrbPUYXWLyh_434ve8oG38-IjUYrmkUgM0BqrwLOBQf2t-JjG7jfojNoLy2ZBtOKX_sVoUbMJApLyrKZ7Quvc4qh_i16PvbaG-Etx",
      quote: "The Pure Alum Crystal left my skin feeling fresh for days. What I loved most was how the mineral protection felt genuinely personalized, not like a harsh chemical product.",
      author: "Sophia M, New York"
    },
    {
      image: "/Img3.png",
      quote: "I've struggled with dark underarms for years. After switching to Dr. Deodrant, the Acerola and Vitamin E extracts have visibly brightened the skin. Plus, 24-hour protection is real.",
      author: "Marcus T, Seattle"
    }
  ];

  return (
    <section className="py-24 bg-[#EAF5FF] overflow-hidden">
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 reveal-on-scroll">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight mb-4">
          Real Results, Clinically Proven.
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Join thousands of users who have transitioned to the future of mineral skincare.
        </p>
      </div>

      {/* Slider Carousel - CONTAINER INCREASED to max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative overflow-hidden">
        <div 
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]" 
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              // `items-stretch` forces the columns to match heights!
              className={`min-w-full grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch transition-opacity duration-700 ${idx === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
            >
              
              {/* Left Side: Image (Now 4 columns instead of 5) */}
              {/* Removed fixed height. Added h-full and min-h-[400px] */}
              <div className="md:col-span-4 rounded-[2rem] overflow-hidden shadow-lg h-full min-h-[400px]">
                <img 
                  alt="Client testimonial" 
                  className="w-full h-full object-cover" 
                  src={t.image} 
                />
              </div>

              {/* Right Side: Content Box (Now 8 columns instead of 7) */}
              <div className="md:col-span-8 bg-[#F8F6F4] p-10 md:p-14 lg:p-16 rounded-[2rem] flex flex-col justify-between h-full">
                
                <div className="space-y-6">
                  {/* Custom Quote Icon */}
                  <span className="font-serif text-6xl text-gray-800 leading-none block h-10">
                    “
                  </span>
                  
                  {/* Quote Text */}
                  <p className="text-xl md:text-[1.65rem] font-serif text-gray-800 leading-relaxed">
                    {t.quote}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#1c2e4a] pt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>

                  {/* Author */}
                  <p className="text-sm text-gray-600">
                    — {t.author}
                  </p>
                </div>

                {/* Bottom Navigation Row */}
                <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
                  <button 
                    className="w-12 h-12 bg-[#EAF5FF] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm cursor-pointer" 
                    onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                  >
                    <span className="material-symbols-outlined text-gray-600">arrow_back</span>
                  </button>
                  <button 
                    className="w-12 h-12 bg-[#EAF5FF] rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-sm cursor-pointer" 
                    onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                  >
                    <span className="material-symbols-outlined text-gray-600">arrow_forward</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}