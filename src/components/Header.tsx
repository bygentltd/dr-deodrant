"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { FlowButton } from "./ui/flow-button";
import { Menu, ShoppingBagIcon, X, User, ArrowRight } from "lucide-react";

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
    { name: "Contact", href: "/contact" },
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

  const surfaceClasses = "bg-[#F5FBFF]/12 text-[#203856] border-[#F5FBFF]/20 shadow-2xl glass-nav backdrop-blur-2xl";
  const linkClasses = "text-[#203856]/90 hover:text-[#203856]";
  const iconClasses = "text-[#203856]/80 hover:text-[#203856]";

  return (
    <header ref={headerRef} className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 flex justify-center pointer-events-none">
      {/* 👇 ADDED 'relative' TO NAV SO THE ABSOLUTE LOGO STAYS INSIDE IT */}
      <nav className={cn("relative pointer-events-auto mt-6 flex items-center justify-between w-full max-w-[1400px] h-[60px] px-6 md:px-8 rounded-full transition-all duration-300", surfaceClasses)}>

        {/* Mobile Menu Toggle (Left on mobile & tablet, hidden on desktop) */}
        <div className="flex lg:hidden items-center z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn("transition-colors cursor-pointer", iconClasses)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Left Navigation Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 font-bold z-10">
          {links.map((link) => {
            const isActive = pathname === link.href;

            if (link.href === "/story") {
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
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

        {/* 👇 CENTER LOGO - NOW ABSOLUTELY POSITIONED FOR PERFECT CENTERING */}
        <div className="absolute left-1/2 top-1/2 -translate-x-[70%] md:-translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-10">
          <Link href="/">
            {/* 👇 CHANGED h-15 to h-10 (mobile) and lg:h-12 (desktop) so Tailwind recognizes it */}
            <img src="/DeDeo-logo.svg" alt="Dr. Deodrant Logo" className="h-8 md:h-10 lg:h-12 w-auto hover:opacity-90 transition-opacity" />
          </Link>
        </div>

        {/* Right Section Actions (Desktop & Mobile) */}
        <div className="flex items-center gap-4 lg:gap-6 z-10">
          {/* Account Icon (All Devices) */}
          <a
            href="https://shopify.com/99417162092/account"
            className={cn("transition-colors hover:opacity-70 flex items-center justify-center", iconClasses)}
            aria-label="Account"
          >
            <User className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>

          {/* [#F5FBFF] Pill Action Button */}
          <FlowButton
            onClick={() => router.push("/shop/popular")}
            defaultBgColor="bg-[#203652]"
            defaultTextColor="text-[#FFFFFF]"
            circleColor="bg-[#2C476B]"
            className="!px-5 !py-2 md:!px-6 md:!py-2.5 lg:!px-8 lg:!py-3 scale-95 md:scale-100 origin-right"
            arrowClassName="hidden lg:block"
          >
            <span className="hidden lg:inline">SHOP COLLECTION</span>
            <span className="lg:hidden tracking-wider flex items-center justify-center translate-x-[9px]">
              <ShoppingBagIcon className="w-5 h-5" />
              <ArrowRight className="w-4 h-4 ml-1 opacity-80" />
            </span>
          </FlowButton>
        </div>

      </nav>

      {/* Mobile Dropdown Menu Drawer */}
      <div className={cn(
        "absolute top-24 left-4 right-4 backdrop-blur-2xl border rounded-3xl p-6 flex flex-col gap-6 lg:hidden z-50 glass-nav transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] origin-top",
        "bg-[#F5FBFF]/12 border-[#F5FBFF]/15",
        isOpen ? "opacity-100 translate-y-0 pointer-events-auto shadow-2xl scale-100" : "opacity-0 -translate-y-4 pointer-events-none shadow-none scale-95"
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
                    if (typeof window !== "undefined") window.location.href = link.href;
                  }}
                  className={cn(
                    "text-base font-bold py-1.5 nav-underline w-fit",
                    "text-[#003286]/80 hover:text-[#003286]",
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
                  "text-base font-bold py-1.5 nav-underline w-fit",
                  "text-[#003286]/80 hover:text-[#003286]",
                  isActive && "active"
                )}
                href={link.href}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className={cn("hidden md:flex flex-col gap-4 pt-4 border-t border-[#F5FBFF]/10")}>
          <a href="tel:+917900160311" className={cn("flex items-center gap-2 text-sm font-medium text-[#003286]/70 hover:text-[#003286]")}>
            <span className="material-symbols-outlined text-base">phone_iphone</span>
            <span>+91 79001 60311</span>
          </a>
        </div>
      </div>
    </header>
  );
}