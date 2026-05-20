import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Dr. Deodrant | Pure & Natural Mineral Skincare",
  description: "Mineral skincare for your underarms. Clinically formulated with pure Alum and superfood extracts for 24-hour protection.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&family=Inter:wght@400;500&family=Geist:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <Script type="module" src="https://cdn.shopify.com/storefront/web-components.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-surface text-on-background font-body-md selection:bg-clinical-blue selection:text-white">
        <shopify-store store-domain="dr-deodrant.myshopify.com" public-access-token="c17cf5d66e6a70d03807572afe40ee3a" country="US" language="en">
          
          <Header />

          <main>{children}</main>

          <footer className="bg-deep-navy dark:bg-on-background w-full mt-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop py-20 w-full max-w-container-max mx-auto">
              <div className="md:col-span-1">
                <div className="font-headline-lg text-headline-lg text-ice-glimmer tracking-widest uppercase mb-8">DR. DEODRANT</div>
                <p className="text-secondary-fixed-dim font-body-md mb-8">Clinical Purity in Every Crystal. Elevating the standard of personal hygiene through mineral science.</p>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-ice-glimmer font-bold uppercase tracking-widest text-sm mb-4">Shop</h5>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Shop All</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Best Sellers</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Ingredients</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Subscriptions</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-ice-glimmer font-bold uppercase tracking-widest text-sm mb-4">About</h5>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Sustainability</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Our Story</Link>
                <Link className="text-ice-glimmer font-bold transition-transform duration-300 hover:-translate-y-1" href="/blog">Journal</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Contact</Link>
              </div>
              <div className="flex flex-col gap-4">
                <h5 className="text-ice-glimmer font-bold uppercase tracking-widest text-sm mb-4">Support</h5>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Shipping</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Returns</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Privacy</Link>
                <Link className="text-secondary-fixed-dim hover:text-tertiary-fixed transition-colors transition-transform duration-300 hover:-translate-y-1" href="/">Terms</Link>
              </div>
            </div>
            <div className="px-margin-desktop py-8 border-t border-white/10 w-full max-w-container-max mx-auto flex justify-between items-center">
              <span className="text-ice-glimmer/50 font-label-sm text-label-sm">© 2024 Dr. Deodrant. Clinical Purity in Every Crystal.</span>
              <div className="flex gap-6">
                <a className="text-ice-glimmer/50 hover:text-white transition-colors material-symbols-outlined" href="/">public</a>
                <a className="text-ice-glimmer/50 hover:text-white transition-colors material-symbols-outlined" href="/">share</a>
              </div>
            </div>
          </footer>

          <shopify-cart id="main-cart"></shopify-cart>
        </shopify-store>
      </body>
    </html>
  );
}
