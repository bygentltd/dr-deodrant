"use client";

import Link from "next/link";

// 👇 MODIFIED: Trimmed down the descriptions for a cleaner, less congested look
const ingredients = [
  {
    id: "01",
    title: "Alum",
    image: "/Ingredient_1.webp",
    alt: "Close up of glowing skin",
    description: "A natural mineral crystal that creates an invisible layer to stop odor-causing bacteria without blocking your pores.",
  },
  {
    id: "02",
    title: "Acerola Extract",
    image: "/Ingredient_2.webp",
    alt: "Natural ingredient composition",
    description: "Rich in Vitamin C, it helps brighten delicate underarm skin and provides powerful antioxidant protection against dullness.",
  },
  {
    id: "03",
    title: "Kiwi Extract",
    image: "/Ingredient_3.webp",
    alt: "Kiwi fruit extract concept",
    description: "Packed with antioxidants that work to soothe, refresh, and deeply nourish the underarm area with every use.",
  },
  {
    id: "04", // Fixed numbering sequence
    title: "Vitamin E",
    image: "/Ingredient_5.webp",
    alt: "Vitamin E skin care visual",
    description: "Deeply moisturizing and protective, acting as a gentle barrier to keep underarm skin soft, supple, and healthy-looking.",
  },
];

export default function IngredientsSection() {
  return (
    <section className="bg-gradient-to-b from-[#eaf4ff] via-[#f4f9ff] to-white py-16 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP HEADER - Centered */}
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-[#00399A] mb-2">
            Pure Ingredients
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-[#00399A] mb-6">
            Real Results
          </h2>
          <p className="text-[#4a5568] text-base max-w-md mx-auto leading-relaxed">
            A thoughtful blend of natural extracts and mineral actives that work with your skin, not against it.
          </p>
        </div>

        {/* MAIN LAYOUT: Product Left, 2x2 Grid Right */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12 relative z-10">
          
          {/* PRODUCT IMAGE (Left) */}
          {/* 👇 MODIFIED: Added `group` and `cursor-pointer` to trigger hover state */}
          <div className="w-full lg:w-1/2 flex justify-center lg:sticky lg:top-24 relative items-center group cursor-pointer">
            <div className="relative w-[340px] h-[480px] md:w-[450px] md:h-[600px] translate-y-12">
              <img
                src="/Home_New.webp"
                alt="Dr. Deodorant Original + C&E"
                // 👇 MODIFIED: Added rounded corners and hover zoom transition
                className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10 rounded-3xl transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* RIGHT CONTENT (Smaller 2x2 Grid) */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {ingredients.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-[1.5rem] bg-white/80 backdrop-blur-sm border border-white/60 p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] group transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
              >
                {/* Card Image Wrapper */}
                <div className="w-full aspect-video overflow-hidden rounded-xl mb-4 bg-[#e4e7dd] isolate transform-gpu">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Card Title & Number */}
                <div className="flex justify-between items-end pb-2 mb-3 border-b border-slate-100">
                  <h3 className="text-base md:text-lg font-bold text-[#1e3a5f]">{item.title}</h3>
                  <span className="text-sm md:text-base font-semibold text-[#0052cc]">{item.id}</span>
                </div>

                {/* Card Description */}
                <p className="text-xs md:text-sm font-inter leading-relaxed text-[#64748b]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 flex justify-center relative z-10">
          <Link 
            href="/story"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-[#00399A] rounded-full hover:bg-[#002a75] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00399A]"
          >
            Know More
            <svg className="w-4 h-4 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}