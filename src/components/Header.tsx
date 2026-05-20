"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-surface-bright/80 dark:bg-deep-navy/80 backdrop-blur-2xl border-b border-clinical-blue/10 dark:border-clinical-blue/20 docked full-width top-0 sticky z-50">
      <nav className="flex justify-between items-center px-margin-desktop py-unit*3 w-full max-w-container-max mx-auto h-20">
        <div className="flex items-center gap-12">
          <Link className="font-headline-md text-headline-md font-medium tracking-tighter text-deep-navy dark:text-ice-glimmer" href="/">Dr. Deodrant</Link>
          <div className="hidden md:flex items-center gap-8">
            <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-deep-navy dark:hover:text-ice-glimmer transition-all duration-300 ease-in-out" href="/">Shop</Link>
            <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-deep-navy dark:hover:text-ice-glimmer transition-all duration-300 ease-in-out" href="/">Our Story</Link>
            <Link className="text-deep-navy dark:text-ice-glimmer border-b-2 border-deep-navy dark:border-ice-glimmer pb-1 transition-all duration-300 ease-in-out" href="/blog">Blog</Link>
            <Link className="text-on-surface-variant dark:text-secondary-fixed-dim hover:text-deep-navy dark:hover:text-ice-glimmer transition-all duration-300 ease-in-out" href="/">Contact</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-deep-navy hover:opacity-70 transition-opacity">search</button>
          <button className="material-symbols-outlined text-deep-navy hover:opacity-70 transition-opacity">person</button>
          <button 
            className="material-symbols-outlined text-deep-navy hover:opacity-70 transition-opacity" 
            onClick={() => {
              const cart = document.getElementById('main-cart') as any;
              if (cart && cart.showModal) cart.showModal();
            }}
          >
            shopping_bag
          </button>
        </div>
      </nav>
    </header>
  );
}
