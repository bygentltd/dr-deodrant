"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FlowButton } from "./ui/flow-button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHeroSurface, setIsHeroSurface] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const headerRef = useRef<HTMLElement | null>(null);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop/popular" },
    { name: "Our Story", href: "/story" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  const openCart = () => {
    const cart = document.getElementById('main-cart') as any;
    if (cart && cart.showModal) cart.showModal();
  };

  useEffect(() => {
    const heroSection = document.getElementById("hero-section");

    if (!heroSection || pathname !== "/") {
      setIsHeroSurface(false);
      return;
    }

    let frameId = 0;

    const updateSurfaceState = () => {
      const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0;
      const heroBottom = heroSection.getBoundingClientRect().bottom;

      setIsHeroSurface(heroBottom > headerBottom + 8);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateSurfaceState);
    };

    updateSurfaceState();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [pathname]);

  // Keep a single glass style everywhere (same blur & opacity)
  const surfaceClasses = "bg-[#F5FBFF]/12 text-[#203856] border-[#F5FBFF]/20 shadow-2xl glass-nav backdrop-blur-2xl";

  const linkClasses = "text-[#203856]/90 hover:text-[#203856]";

  // underline handled by .nav-underline pseudo-element animation

  const iconClasses = "text-[#203856]/80 hover:text-[#203856]";

  return (
    <header ref={headerRef} className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      <nav className={cn("pointer-events-auto mt-6 flex items-center justify-between w-full max-w-310 h-15 px-6 md:px-8 rounded-full transition-all duration-300", surfaceClasses)}>

        {/* Mobile Menu Toggle (Left on mobile, hidden on desktop) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("material-symbols-outlined transition-colors text-2xl cursor-pointer", iconClasses)}
            aria-label="Toggle Menu"
          >
            {isOpen ? "close" : "menu"}
          </button>
        </div>

        {/* Left Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 font-bold">
          {links.map((link) => {
            const isActive = pathname === link.href;

            if (link.href === "/story") {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    // force full reload so browser lands at top
                    if (typeof window !== "undefined") window.location.href = link.href;
                  }}
                  className={cn(
                    "text-md font-inter tracking-wide transition-all duration-300 pb-0.5 nav-underline",
                    linkClasses,
                    isActive && "active"
                  )}
                >
                  {link.name}
                </a>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-md font-inter tracking-wide transition-all duration-300 pb-0.5 nav-underline",
                  linkClasses,
                  isActive && "active"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Center Brand Name & SVG Logo */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <img src="/drdeologo.png" alt="Dr. Deodrant Logo" className="h-15 w-auto hover:opacity-90 transition-opacity" />
          </Link>
        </div>

        {/* Right Section Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Search & Profile Icons (Desktop only) */}
          <div className={cn("hidden md:flex items-center gap-4", "text-[#203856]/70") }>
            <button className={cn("material-symbols-outlined text-xl transition-colors cursor-pointer", iconClasses)}>person</button>
          </div>

          {/* Support Phone Info (Desktop only) */}

          {/* [#F5FBFF] Pill Action Button */}
          <FlowButton
  text="SHOP COLLECTION"
  onClick={openCart}
  defaultBgColor="bg-[#203652]"
  defaultTextColor="text-[#FFFFFF]"
  circleColor="bg-[#2C476B]" // <-- The slightly brighter hover color
/>
        </div>

      </nav>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className={cn(
          "absolute top-20 left-4 right-4 backdrop-blur-2xl border rounded-3xl p-6 shadow-2xl flex flex-col gap-6 md:hidden animate-fade-in z-50 pointer-events-auto glass-nav",
          "bg-[#F5FBFF]/12 border-[#F5FBFF]/15"
        )}>
          <div className="flex flex-col gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;

              if (link.href === "/story") {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      // force full reload so browser lands at top
                      if (typeof window !== "undefined") window.location.href = link.href;
                    }}
                    className={cn(
                      "text-lg font-medium py-2 nav-underline",
                      "text-[#203856]/80 hover:text-[#203856]",
                      isActive && "active"
                    )}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-lg font-medium py-2 nav-underline",
                    "text-[#203856]/80 hover:text-[#203856]",
                    isActive && "active"
                  )}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className={cn("flex flex-col gap-4 pt-4 border-t border-[#F5FBFF]/10")}>
            <a href="tel:+3910352568" className={cn("flex items-center gap-2 text-sm font-medium text-[#203856]/70 hover:text-[#203856]") }>
              <span className="material-symbols-outlined text-base">phone_iphone</span>
              <span>+391 (0)35 2568</span>
            </a>
            <div className={cn("flex gap-6 pt-2 text-[#203856]/70")}>
              <button className={cn("material-symbols-outlined text-xl transition-colors cursor-pointer hover:text-[#203856]")}>person</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
