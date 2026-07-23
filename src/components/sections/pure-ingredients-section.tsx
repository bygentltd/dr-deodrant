"use client";

import React from "react";
import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
import { Sun, Leaf, ShieldCheck, Sparkles } from "lucide-react";

interface IngredientCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
  iconBgColor: string;
}

const ingredientsData: IngredientCardProps[] = [
  {
    image: "/ingredients-section/vit-e.webp",
    title: "Vitamin E",
    subtitle: "Brightens & Protects Skin",
    description:
      "Helps even out skin tone, fights dullness and protects against free radicals.",
    badgeIcon: <Sun className="w-4 h-4 text-amber-500" />,
    badgeText: "Brightens Underarms",
    iconBgColor: "bg-amber-50 border-amber-200/60",
  },
  {
    image: "/ingredients-section/kiwi.webp",
    title: "Kiwi Extract",
    subtitle: "Rich in Antioxidants",
    description:
      "Packed with vitamins that help soothe, refresh and support healthy skin.",
    badgeIcon: <Leaf className="w-4 h-4 text-emerald-500" />,
    badgeText: "Antioxidant Rich",
    iconBgColor: "bg-emerald-50 border-emerald-200/60",
  },
  {
    image: "/ingredients-section/mineral.webp",
    title: "Mineral Salts",
    subtitle: "Natural Odor Protection",
    description:
      "Mineral help neutralize odor-causing bacteria for long-lasting freshness.",
    badgeIcon: <ShieldCheck className="w-4 h-4 text-sky-500" />,
    badgeText: "Odour Protection",
    iconBgColor: "bg-sky-50 border-sky-200/60",
  },
  {
    image: "/ingredients-section/acerola.webp",
    title: "Acerola Extract",
    subtitle: "Supports Smoother Skin",
    description:
      "Natural source of vitamin C that supports smoother, healthier-looking skin.",
    badgeIcon: <Sparkles className="w-4 h-4 text-rose-500" />,
    badgeText: "Smoother skin",
    iconBgColor: "bg-rose-50 border-rose-200/60",
  },
];

export function PureIngredientsSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#eaf5ff] via-[#f2f8ff] to-[#e8f4ff] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden font-sans">
      {/* Background Soft Leaves (Left edge) */}

      {/* Soft Ambient Radial Blur Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-[1550px] mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 xl:gap-12">

          {/* Left Column: Product Stick & Buy Now Button */}
          <div className="w-full lg:w-[28%] xl:w-[26%] flex flex-col items-center justify-between shrink-0 relative group">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-none aspect-[3/5] flex items-center justify-center">
              <img
                src="/ingredients-section/product-stick.webp"
                alt="Dr.Deodrant Original +C&E"
                className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(20,50,90,0.12)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>

            {/* Buy Now Button */}
            <div className="hidden md:flex mt-4 lg:mt-6 justify-center items-center w-full z-20">
              <Link href="/shop/original">
                <FlowButton
                  text="Buy Now"
                  className="scale-105 sm:scale-110 md:scale-125 xl:scale-135 shadow-xl shadow-[#203652]/20"
                  defaultBgColor="bg-[#203652]"
                  defaultTextColor="text-white"
                  circleColor="bg-[#2C476B]"
                  hoverTextColor="group-hover:text-white"
                />
              </Link>
            </div>
          </div>

          {/* Right Column: Title, Subtitle, Orb Graphic & 4 Cards */}
          <div className="w-full lg:w-[72%] xl:w-[74%] flex flex-col">

            {/* Header Row */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 relative">
              <div className="text-center md:text-left flex-1 max-w-xl">
                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#1b365d] tracking-tight leading-[1.1]">
                  Pure Ingredients
                </h2>
                <span className="block text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#38bdf8] tracking-tight leading-[1.1] mt-1 sm:mt-2">
                  Real Results
                </span>
                <p className="text-slate-600 text-sm sm:text-base md:text-lg font-medium leading-relaxed mt-3 sm:mt-4">
                  A thoughtful blend of natural extracts and mineral actives that work with your skin, not against it.
                </p>
              </div>

              {/* Right Floating Glass Orb Artwork */}
              <div className="w-56 sm:w-72 md:w-80 lg:w-96 shrink-0 pointer-events-none relative -mt-4 md:-mt-8 lg:-mt-12">
                <img
                  src="/ingredients-section/ingredients-orb.webp"
                  alt="Natural Ingredients Orb"
                  className="w-full h-auto object-contain filter drop-shadow-[0_10px_25px_rgba(50,120,200,0.12)]"
                />
              </div>
            </div>

            {/* Custom Crystal Divider Line */}
            <div className="relative flex items-center justify-center my-6 md:my-8">
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#93c5fd]/50 to-transparent" />
              <div className="absolute px-3 bg-[#f2f8ff] text-[#60a5fa]">
              </div>
            </div>

            {/* 4 Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {ingredientsData.map((item, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col justify-between bg-white/90 backdrop-blur-md rounded-3xl p-5 sm:p-6 border border-sky-100/80 shadow-[0_10px_30px_rgba(30,80,140,0.05)] hover:shadow-[0_20px_45px_rgba(30,80,140,0.12)] hover:-translate-y-1.5 transition-all duration-300 ease-out"
                >
                  <div>
                    {/* Top Image Graphic */}
                    <div className="w-full aspect-[4/3] flex items-center justify-center p-2 mb-3 rounded-2xl bg-gradient-to-b from-sky-50/40 to-transparent">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 filter drop-shadow-sm"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-[#1b365d] tracking-snug">
                      {item.title}
                    </h3>

                    {/* Highlight Subtitle */}
                    <p className="text-xs sm:text-sm font-semibold text-[#38bdf8] mt-1">
                      {item.subtitle}
                    </p>

                    {/* Description Paragraph */}
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Tag Badge */}
                  <div className="mt-5 pt-4 border-t border-sky-100/60 flex items-center gap-2.5">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center border shrink-0 ${item.iconBgColor}`}
                    >
                      {item.badgeIcon}
                    </div>
                    <span className="text-xs font-semibold text-slate-700">
                      {item.badgeText}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PureIngredientsSection;
