"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function FeaturedProductSection() {
  useRevealOnScroll();

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-container-max mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          <div className="flex-1 w-full bg-white p-10 rounded-2xl shadow-xl border border-outline-variant/10 group reveal-on-scroll">
            <shopify-context type="product" handle="dr-deodorant-natural-mineral-deodorant-stick-vitamin-c-e-enriched" wait-for-update="false">
              <template dangerouslySetInnerHTML={{
                __html: `
                <div class="aspect-square relative mb-8 overflow-hidden bg-surface rounded-xl flex items-center justify-center">
                  <shopify-media query="product.selectedOrFirstAvailableVariant.image" width="400" height="400"></shopify-media>
                  <span class="absolute top-4 right-4 bg-[#f6fbfd] text-[#0a2544] px-5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest z-10">Premium Care</span>
                </div>
                
                <div class="space-y-6">
                  <div class="flex justify-between items-end">
                    <div>
                      <h3 class="text-2xl font-bold text-[#0a2544]">
                        <shopify-data query="product.title"></shopify-data>
                      </h3>
                      <p class="text-xs font-bold text-[#0a2544] uppercase tracking-widest mt-1">120g • Clinical Grade</p>
                    </div>
                    <p class="text-2xl font-bold text-[#0a2544]">
                      <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </p>
                  </div>
                  
                  <shopify-variant-selector></shopify-variant-selector>
                  
                  <button 
                    class="w-full bg-[#f6fbfd] text-[#0a2544] py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                    onclick="const cart = document.getElementById('main-cart'); if (cart && cart.addLine) { cart.addLine(event); cart.showModal(); }"
                  >
                    Add to Cart
                  </button>
                </div>
              ` }} />
              <div shopify-loading-placeholder="true" className="animate-pulse">
                <div className="aspect-square bg-gray-200 rounded-xl mb-8"></div>
                <div className="h-8 bg-gray-200 w-3/4 mb-2 rounded"></div>
                <div className="h-4 bg-gray-200 w-1/2 mb-6 rounded"></div>
                <div className="h-12 bg-gray-200 w-full rounded-full"></div>
              </div>
            </shopify-context>
          </div>

          <div className="flex-1 space-y-8 reveal-on-scroll">
            <span className="font-bold text-xs text-[#0a2544] uppercase tracking-widest">Application Guide</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2544]">How to Use for Optimal Results.</h2>
            <p className="text-lg text-[#0a2544]">Apply after showering on slightly damp underarms. Wet the crystal if needed and glide gently 4-5 times over the underarm area. Product lasts 6-8 months with daily use.</p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 border-2 border-[#0a2544]/5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#0a2544] text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0a2544]">Damp Application</p>
              </div>
              <div className="p-6 border-2 border-[#0a2544]/5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="material-symbols-outlined text-[#0a2544] text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0a2544]">8 Month Lifecycle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
