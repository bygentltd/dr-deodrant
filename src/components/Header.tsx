"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Shop", href: "/" },
    { name: "Our Story", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/" }
  ];

  const openCart = () => {
    const cart = document.getElementById('main-cart') as any;
    if (cart && cart.showModal) cart.showModal();
  };

  return (
    <header className="absolute top-6 left-0 right-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-[1240px] h-18 px-6 md:px-8 bg-white border border-[#0a2544]/10 rounded-full shadow-lg transition-all duration-300">

        {/* Mobile Menu Toggle (Left on mobile, hidden on desktop) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="material-symbols-outlined text-[#0a2544]/90 hover:text-[#0a2544] transition-colors text-2xl cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? "close" : "menu"}
          </button>
        </div>

        {/* Left Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-all duration-300 hover:text-[#0a2544] text-[#0a2544] border-b border-[#0a2544] pb-0.5"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Center Brand Name & SVG Logo */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <img src="/drdeologo.png" alt="Dr. Deodrant Logo" className="h-13 w-auto hover:opacity-90 transition-opacity" />
          </Link>
        </div>

        {/* Right Section Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search & Profile Icons (Desktop only) */}
          <div className="hidden md:flex items-center gap-4 text-[#0a2544]/70">
            <button className="material-symbols-outlined text-xl hover:text-[#0a2544] transition-colors cursor-pointer">search</button>
            <button className="material-symbols-outlined text-xl hover:text-[#0a2544] transition-colors cursor-pointer">person</button>
          </div>

          {/* Support Phone Info (Desktop only) */}

          {/* White Pill Action Button */}
          <button
            onClick={openCart}
            className="bg-[#0a2544] hover:bg-[#0a2544]/90 active:scale-95 text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer shadow-md flex items-center gap-1.5"
          >
            <span>Shop Collection</span>
            <span className="material-symbols-outlined text-xs font-bold">arrow_forward</span>
          </button>
        </div>

      </nav>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 bg-deep-navy/90 dark:bg-deep-navy/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 shadow-2xl flex flex-col gap-6 md:hidden animate-fade-in z-50 pointer-events-auto">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white text-lg font-medium py-2 border-b border-white/5"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 pt-4 border-t border-white/10">
            <a href="tel:+3910352568" className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium">
              <span className="material-symbols-outlined text-base">phone_iphone</span>
              <span>+391 (0)35 2568</span>
            </a>
            <div className="flex gap-6 text-white/70 pt-2">
              <button className="material-symbols-outlined text-xl hover:text-white transition-colors cursor-pointer">search</button>
              <button className="material-symbols-outlined text-xl hover:text-white transition-colors cursor-pointer">person</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
