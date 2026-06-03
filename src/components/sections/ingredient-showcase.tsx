"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function IngredientShowcase() {
  useRevealOnScroll();

  // ---------------------------------------------------------
  // PASTE YOUR 5 IMAGE LINKS HERE IN ORDER
  // ---------------------------------------------------------
  const customImages = [
    "/Ingredient_1.webp", // Top Center
    "/Ingredient_2.webp", // Middle Right
    "/Ingredient_5.webp", // Bottom Right
    "/Ingredient_4.webp", // Bottom Left
    "/Ingredient_3.webp", // Middle Left
  ];

  const ingredients = [
    {
      image: customImages[0],
      positionClasses: "lg:top-[-5%] lg:left-1/2 lg:-translate-x-1/2 z-30",
      cardClasses: "bg-[#FDF7EC] border-[#F2D8A7]",
      glowColor: "rgba(225, 167, 73, 0.45)",
    },
    {
      image: customImages[1],
      positionClasses: "lg:top-[32%] lg:right-0 z-20",
      cardClasses: "bg-[#F8EFFD] border-[#D7B6EE]",
      glowColor: "rgba(177, 117, 224, 0.4)",
    },
    {
      image: customImages[2],
      positionClasses: "lg:bottom-0 lg:right-[12%] z-20",
      cardClasses: "bg-[#ECFAF1] border-[#A9E0BF]",
      glowColor: "rgba(82, 188, 120, 0.38)",
    },
    {
      image: customImages[3],
      positionClasses: "lg:bottom-0 lg:left-[12%] z-20",
      cardClasses: "bg-[#FFF4EA] border-[#F6C99A]",
      glowColor: "rgba(240, 153, 79, 0.42)",
    },
    {
      image: customImages[4],
      positionClasses: "lg:top-[32%] lg:left-0 z-20",
      cardClasses: "bg-[#EDF6FF] border-[#AFCFF0]",
      glowColor: "rgba(104, 161, 219, 0.4)",
    },
  ];

  return (
    <section className="py-32 bg-[#EAF5FF] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 reveal-on-scroll">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 lg:mb-28">
          <h2 className="text-3xl md:text-5xl font-inter font-bold text-[#0F172A] mb-4">
            Powered by Nature
          </h2>
          <p className="text-[#64748B] text-base md:text-lg">
            Discover the clinically proven elements that make up our pure, non-toxic formula.
          </p>
        </div>

        {/* DESKTOP LAYOUT (Pentagon/Circle) */}
        {/* Used explicit bracket values to prevent layout collapse if custom tailwind config is missing */}
        <div className="hidden lg:block relative w-full max-w-[1200px] h-[1000px] mx-auto">
          {/* Concentric guide rings behind cards */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
            <div className="absolute w-[520px] h-[520px] rounded-full border border-white/70 shadow-[0_0_35px_rgba(255,255,255,0.25)] concentric-ring"></div>
            <div className="absolute w-[700px] h-[700px] rounded-full border border-white/55 concentric-ring concentric-ring-mid"></div>
            <div className="absolute w-[900px] h-[900px] rounded-full border border-white/35 concentric-ring concentric-ring-outer"></div>
          </div>
          
          {/* Central Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-[360px] h-[360px] rounded-full overflow-hidden border-[12px] border-white shadow-[0_0_40px_rgba(0,0,0,0.05)] relative">
              <img 
                src="/DRDEO11.webp" 
                alt="Natural Crystal Core" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Pure Image Cards */}
          {ingredients.map((ingredient, index) => (
            <div 
              key={index} 
              className={`ingredient-card absolute w-[320px] h-[320px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border ${ingredient.cardClasses} ${ingredient.positionClasses} group`}
              style={{
                animationDelay: `${index * 0.45}s`,
                ["--glow-color" as string]: ingredient.glowColor,
              }}
            >
              <img
                src={ingredient.image}
                alt={`Ingredient ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* MOBILE/TABLET LAYOUT (Stacked gracefully) */}
        <div className="block lg:hidden">
          <div className="flex flex-col items-center mb-16">
            <div className="w-64 h-64 rounded-full overflow-hidden border-[10px] border-white shadow-xl relative">
              <img 
                src="/DRDEO11.webp" 
                alt="Natural Crystal Core" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ingredients.map((ingredient, index) => (
              <div 
                key={index} 
                className={`ingredient-card w-full aspect-square rounded-2xl overflow-hidden shadow-md border ${ingredient.cardClasses}`}
                style={{
                  animationDelay: `${index * 0.25}s`,
                  ["--glow-color" as string]: ingredient.glowColor,
                }}
              >
                <img
                  src={ingredient.image}
                  alt={`Ingredient ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .ingredient-card {
          animation: ingredientFloat 6.5s ease-in-out infinite;
          transition: box-shadow 280ms ease, border-color 280ms ease, transform 280ms ease;
        }

        .ingredient-card:hover {
          border-color: color-mix(in srgb, var(--glow-color) 75%, white 25%);
          box-shadow:
            0 14px 34px rgba(15, 23, 42, 0.1),
            0 0 0 1px color-mix(in srgb, var(--glow-color) 45%, white 55%),
            0 0 22px 2px var(--glow-color);
        }

        .concentric-ring {
          position: absolute;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.55);
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.12);
          animation: ringBreathe 8s ease-in-out infinite;
        }

        .concentric-ring-mid {
          border-style: dashed;
          border-color: rgba(255, 255, 255, 0.45);
          animation-delay: 1.2s;
        }

        .concentric-ring-outer {
          border-color: rgba(255, 255, 255, 0.35);
          animation-delay: 2.1s;
        }

        @keyframes ingredientFloat {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes ringBreathe {
          0% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.82;
            transform: scale(1.02);
          }
          100% {
            opacity: 0.55;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}