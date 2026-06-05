"use client";

import Image from "next/image";
import Link from "next/link";

interface IngredientCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  footerTitle: string;
  footerSubtitle: string;
}

function IngredientCard({
  image,
  title,
  subtitle,
  description,
  icon,
  footerTitle,
  footerSubtitle,
}: IngredientCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white flex flex-col items-center text-center transition-all duration-300 hover:shadow-[0_10px_40px_rgb(0,0,0,0.08)]">
      <div className="flex justify-center mb-6 h-32 items-center w-full">
        <Image
          src={image}
          alt={title}
          width={128}
          height={150}
          className="object-contain drop-shadow-sm"
        />
      </div>

      <h3 className="text-xl font-bold text-[#1e3a5f] mb-1">{title}</h3>
      <p className="text-[#0052cc] font-bold text-xs uppercase tracking-wider mb-3">
        {subtitle}
      </p>
      <p className="text-[#64748b] text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="border-t border-gray-100 pt-4 w-full">
        <div className="flex gap-3 items-center text-left px-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-slate-50 border border-slate-100">
            {icon}
          </div>
          <div>
            <p className="text-xs font-semibold text-[#1e3a5f]">
              {footerTitle}
            </p>
            <p className="text-xs text-[#64748b]">{footerSubtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const ingredients = [
  {
    image: "/Ingredient_4.webp",
    title: "Vitamin C",
    subtitle: "Brightens & Protects Skin",
    description: "Helps even out skin tone, fights dullness and protects against free radicals.",
    icon: <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>,
    footerTitle: "Brightens",
    footerSubtitle: "Underarms",
  },
  {
    image: "/Ingredient_3.webp",
    title: "Kiwi Extract",
    subtitle: "Rich in Antioxidants",
    description: "Packed with vitamins and antioxidants that help soothe, refresh and support healthy skin.",
    icon: <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 19s1-7 8-7 8 7 8 7m-8-7v7m0-14c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"></path></svg>,
    footerTitle: "Antioxidant",
    footerSubtitle: "Rich",
  },
  {
    image: "/Ingredient_1.webp",
    title: "Mineral Salts",
    subtitle: "Natural Odour Protection",
    description: "Naturally derived minerals help neutralize odour-causing bacteria for long-lasting freshness.",
    icon: <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
    footerTitle: "Odour",
    footerSubtitle: "Protection",
  },
  {
    image: "/Ingredient_2.webp",
    title: "Acerola Extract",
    subtitle: "Supports Smoother Skin",
    description: "A natural source of vitamin C that supports smoother, healthier-looking skin.",
    icon: <svg className="w-4 h-4 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>,
    footerTitle: "Smoother",
    footerSubtitle: "Skin",
  },
];

export default function IngredientsSection() {
  return (
    <section className="bg-gradient-to-b from-[#eaf4ff] via-[#f4f9ff] to-white py-16 lg:py-24 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* MAIN LAYOUT: Product Left, Cards Right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8 relative z-10">
          
          {/* PRODUCT IMAGE (Left) */}
          <div className="w-full lg:w-2/5 flex justify-center relative items-center">
            <div className="relative w-[340px] h-[480px] md:w-[450px] md:h-[600px] lg:w-[500px] lg:h-[650px]">
              <Image
                src="/Home_New.webp"
                alt="Dr. Deodorant Original + C&E"
                fill
                className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10"
                priority
              />
            </div>
          </div>

          {/* RIGHT CONTENT (Cards) */}
          <div className="w-full lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6">
             {ingredients.map((ingredient) => (
                <IngredientCard key={ingredient.title} {...ingredient} />
             ))}
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-16 flex justify-center relative z-10">
          <Link 
            href="/story"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-300 bg-[#00399A] rounded-full hover:bg-[#002a75] hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00399A]"
          >
            Know More
            <svg className="w-5 h-5 ml-2 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </Link>
        </div>

      </div>
    </section>
  );
}