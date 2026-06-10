import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

import Header from "@/components/Header";
import LenisProvider from "@/components/LenisProvider";
import { cn } from "@/lib/utils";
import { cabinet, inter } from "./fonts";
import { Footer } from "@/components/sections/footer";

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
    <html lang="en" className={cn("light", cabinet.variable, inter.variable)}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@300;400;500;600;700&family=Geist:wght@400;600&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <Script type="module" src="https://cdn.shopify.com/storefront/web-components.js" strategy="beforeInteractive" />
      </head>
      <body className="bg-surface text-on-background selection:bg-clinical-blue selection:text-[#F5FBFF]">
        <LenisProvider>
          <shopify-store store-domain="drdeodrant.myshopify.com" public-access-token="a626fe9cce73c1f299dabe537ec4fb43" country="IN" language="en">

            <Header />

            <main>{children}</main>

            <Footer />

            <shopify-cart id="main-cart"></shopify-cart>
          </shopify-store>
        </LenisProvider>
      </body>
    </html>
  );
}
