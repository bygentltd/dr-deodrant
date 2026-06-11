"use client";

import { useState } from "react";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export function TestimonialSection() {
  useRevealOnScroll();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      image:
        "/reviews/Rev-Img1.jpg",
      quote:
        "Finally, a deodorant that eliminates odour instead of just masking it with perfume! Dr. Deodrant removed my underarm smell completely. I feel so much more confident knowing I actually smell fresh, not just covered up. A total game-changer.",
      author: "Isheeta, Mumbai ",
    },
    {
      image:
        "/reviews/Rev-Img2.webp",
      quote:
        "I love that this is enriched with Vitamin C and E. It didn't just stop the smell; it actually smoothened my underarms and cleared up my pigmentation. It feels like high-end skincare for your armpits. I’m finally wearing sleeveless tops again!",
      author: "Ekta, Mumbai",
    },
    {
      image:
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop",
      quote:
        "The best part? No white cast! It goes on clear and stays that way, so my black clothes are safe. It’s incredibly effective at neutralizing odour while keeping my skin soft and bright. Everything I’ve been looking for in one bottle.",
      author: "Priya K, Mumbai",
    },
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      quote:
        "I’ve struggled with rough skin and dark patches for years. Since switching to Dr. Deodrant, my underarms are noticeably smoother. The alum works wonders on odour, and the vitamins have totally transformed the texture of my skin.",
      author: "Daniel R, Chicago",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
      quote:
        "This is hands down the most effective odour eliminator I’ve tried. It removes the smell entirely without any messy residue or white marks. My underarms look brighter and feel healthier than ever. I'll never go back to regular sprays!",
      author: "Ayesha L, Dubai",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F5FBFF] overflow-hidden">

      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center mb-10 sm:mb-16 reveal-on-scroll">
        <h2 className="text-3xl sm:text-4xl font-inter font-bold md:text-5xl text-[#003286] leading-tight mb-4 px-2">
          What Our Customers Are Saying.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 px-4">
          Join thousands of users who have transitioned from synthetic chemicals to natural protection.
        </p>
      </div>

      {/* Slider Carousel - CONTAINER INCREASED to max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative overflow-hidden ">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              // `items-stretch` forces the columns to match heights!
              className={`min-w-full grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 items-stretch transition-opacity duration-700 ${idx === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}
            >

              {/* Left Side: Image */}
              <div className="mx-auto w-[85%] sm:w-[80%] md:w-full md:mx-0 md:col-span-5 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-lg h-[380px] sm:h-[480px] md:h-full md:min-h-[320px] lg:min-h-[360px]">
                <img
                  alt="Client testimonial"
                  className="w-full h-full object-cover"
                  src={t.image}
                />
              </div>

              {/* Right Side: Content Box */}
              <div className="md:col-span-7 bg-[#eaf5ff] p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-[2rem] flex flex-col justify-between h-full">

                <div className="space-y-4 sm:space-y-6">
                  {/* Custom Quote Icon */}
                  <span className="font-inter text-5xl sm:text-6xl text-[#113D86]/30 leading-none block h-8 sm:h-10">
                    “
                  </span>

                  {/* Quote Text */}
                  <p className="text-[15px] sm:text-lg md:text-xl lg:text-[1.45rem] font-medium text-[#113D86] leading-relaxed">
                    {t.quote}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 text-[#003286] pt-1 sm:pt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="material-symbols-outlined text-[16px] sm:text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    ))}
                  </div>

                  {/* Author */}
                  <p className="text-xs sm:text-sm text-[#113D86]/80 font-medium">
                    — {t.author}
                  </p>
                </div>

                {/* Bottom Navigation Row */}
                <div className="flex justify-between items-center mt-6 sm:mt-8 md:mt-12 pt-4 sm:pt-6 border-t border-[#003286]/10">
                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#003286] rounded-full flex items-center justify-center hover:bg-[#003286]/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer group"
                    onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                  >
                    <span className="material-symbols-outlined text-white transition-transform duration-300 group-hover:-translate-x-1 text-sm sm:text-base">
                      arrow_back
                    </span>
                  </button>

                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#003286] rounded-full flex items-center justify-center hover:bg-[#003286]/80 hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm cursor-pointer group"
                    onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}
                  >
                    <span className="material-symbols-outlined text-white transition-transform duration-300 group-hover:translate-x-1 text-sm sm:text-base">
                      arrow_forward
                    </span>
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