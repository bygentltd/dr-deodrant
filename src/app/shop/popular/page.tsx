"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export default function Page() {
  useRevealOnScroll();

  return (
    <section className="py-40 bg-[#EAF5FF]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="reveal-on-scroll">
          <shopify-context
            type="product"
            handle="dr-deodorant-natural-mineral-deodorant-stick-vitamin-c-e-enriched"
            wait-for-update="false"
          >
            <template
              dangerouslySetInnerHTML={{
                __html: `
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
                  
                  <!-- LEFT -->
                  <div class="flex flex-col gap-10">

                    <!-- PRODUCT GALLERY -->
                    <div class="product-gallery">

                      <!-- MAIN IMAGE -->
                      <div class="main-product-image aspect-[4/5] bg-[#F8F6F4] rounded-2xl overflow-hidden flex items-center justify-center mb-4 relative">

                        <shopify-media
                          query="product.selectedOrFirstAvailableVariant.image"
                          class="w-full h-full object-cover mix-blend-multiply transition-all duration-300"
                        ></shopify-media>

                      </div>

                      <!-- THUMBNAILS -->
                      <div class="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">

                        <shopify-repeater query="product.images" class="contents">

                          <template>

                            <button
                              class="gallery-thumb w-20 h-20 bg-[#F8F6F4] rounded-xl shrink-0 cursor-pointer border border-gray-200 hover:border-gray-900 overflow-hidden transition-all duration-300 hover:scale-[1.02]"
                              onclick="
                                const allThumbs = document.querySelectorAll('.gallery-thumb');

                                allThumbs.forEach((el) => {
                                  el.classList.remove('border-gray-900');
                                  el.classList.add('border-gray-200');
                                });

                                this.classList.remove('border-gray-200');
                                this.classList.add('border-gray-900');

                                const img = this.querySelector('img');

                                const mainImageContainer =
                                  document.querySelector('.main-product-image');

                                if(img && mainImageContainer){
                                  mainImageContainer.innerHTML = '';
                                  mainImageContainer.appendChild(
                                    img.cloneNode(true)
                                  );

                                  const cloned =
                                    mainImageContainer.querySelector('img');

                                  if(cloned){
                                    cloned.className =
                                      'w-full h-full object-cover mix-blend-multiply transition-all duration-300';
                                  }
                                }
                              "
                            >

                              <shopify-media
                                query="image"
                                class="w-full h-full object-cover"
                              ></shopify-media>

                            </button>

                          </template>

                        </shopify-repeater>

                      </div>

                    </div>

                    <!-- ACCORDIONS -->
                    <div class="border-t border-gray-200 mt-4">

                      <details class="group border-b border-gray-200 py-5" open>
                        <summary class="flex justify-between items-center font-medium text-lg text-gray-900 cursor-pointer list-none outline-none">
                          Description

                          <span class="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </span>
                        </summary>

                        <div class="text-gray-600 text-sm md:text-base leading-relaxed mt-4 pb-2">
                          This advanced serum, formulated with 10% Argireline,
                          provides a powerful yet non-invasive solution for
                          reducing the appearance of dynamic wrinkles.
                        </div>
                      </details>

                      <details class="group border-b border-gray-200 py-5">
                        <summary class="flex justify-between items-center font-medium text-lg text-gray-900 cursor-pointer list-none outline-none">
                          Ingredients

                          <span class="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </span>
                        </summary>

                        <div class="text-gray-600 text-sm md:text-base leading-relaxed mt-4 pb-2">
                          Crafted with high-quality, skin-loving ingredients,
                          free from harsh chemicals and toxins.
                        </div>
                      </details>

                      <details class="group border-b border-gray-200 py-5">
                        <summary class="flex justify-between items-center font-medium text-lg text-gray-900 cursor-pointer list-none outline-none">
                          How to Use

                          <span class="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </span>
                        </summary>

                        <div class="text-gray-600 text-sm md:text-base leading-relaxed mt-4 pb-2">
                          Apply a small amount to clean skin and gently massage
                          until fully absorbed.
                        </div>
                      </details>

                    </div>

                  </div>

                  <!-- RIGHT -->
                  <div class="lg:sticky lg:top-32 h-fit flex flex-col">

                    <nav class="text-sm text-gray-400 mb-6 font-medium">
                      Home / Shop /
                      <span class="text-gray-800">
                        <shopify-data query="product.title"></shopify-data>
                      </span>
                    </nav>

                    <h1 class="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
                      <shopify-data query="product.title"></shopify-data>
                    </h1>

                    <p class="text-gray-500 text-sm mb-4">
                      Mineral Skincare
                    </p>

                    <div class="flex items-center gap-2 mb-6">
                      <span class="text-yellow-500 text-base">★</span>

                      <span class="font-medium text-gray-900">
                        4.9
                      </span>

                      <span class="text-gray-400 text-sm ml-1">
                        (127 Reviews)
                      </span>
                    </div>

                    <p class="text-2xl font-bold text-gray-900 mb-6">
                      <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </p>

                    <ul class="space-y-3 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">

                      <li class="flex items-center gap-2">
                        ✓ Lightweight & Non-Greasy
                      </li>

                      <li class="flex items-center gap-2">
                        ✓ Deep Hydration & Nourishment
                      </li>

                      <li class="flex items-center gap-2">
                        ✓ Fast-Absorbing Formula
                      </li>

                      <li class="flex items-center gap-2">
                        ✓ Suitable for All Skin Types
                      </li>

                    </ul>

                    <div class="mb-8">
                      <shopify-variant-selector></shopify-variant-selector>
                    </div>

                    <div class="flex items-center gap-4">

                      <button
                        class="flex-1 bg-[#b0b1b6] hover:bg-[#d7d7d7] text-white py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest transition-colors cursor-pointer"
                        onclick="
                          const cart = document.getElementById('main-cart');

                          if (cart && cart.addLine) {
                            cart.addLine(event);
                            cart.showModal();
                          }
                        "
                      >
                        Buy Now
                      </button>

                      <button
                        class="flex-1 bg-[#849bb5] hover:bg-[#8aa3e5] text-white py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest transition-colors cursor-pointer"
                        onclick="
                          const cart = document.getElementById('main-cart');

                          if (cart && cart.addLine) {
                            cart.addLine(event);
                            cart.showModal();
                          }
                        "
                      >
                        Add to Basket
                      </button>

                    </div>

                  </div>

                </div>
              `,
              }}
            />

            {/* LOADING */}
            <div
              shopify-loading-placeholder="true"
              className="animate-pulse"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4"></div>

                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-gray-100 rounded-xl"></div>
                    <div className="w-20 h-20 bg-gray-100 rounded-xl"></div>
                    <div className="w-20 h-20 bg-gray-100 rounded-xl"></div>
                  </div>
                </div>

                <div>
                  <div className="h-4 bg-gray-100 w-1/4 mb-6 rounded"></div>
                  <div className="h-10 bg-gray-100 w-3/4 mb-4 rounded"></div>
                  <div className="h-6 bg-gray-100 w-1/4 mb-8 rounded"></div>

                  <div className="h-12 bg-gray-100 w-full rounded-full"></div>
                </div>
              </div>
            </div>

          </shopify-context>
        </div>
      </div>
    </section>
  );
}