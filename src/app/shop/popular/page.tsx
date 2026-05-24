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
            handle="dr-deodrantnatural-crystal-deodorant"
            wait-for-update="false"
          >
            <template
              dangerouslySetInnerHTML={{
                __html: `
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32">
                  
                  <div class="flex flex-col gap-10">

                    <div class="product-gallery">

                      <div class="main-product-image aspect-[4/5] bg-[#F8F6F4] rounded-2xl overflow-hidden flex items-center justify-center mb-4 relative">

                        <shopify-media
                          query="product.selectedOrFirstAvailableVariant.image"
                          class="w-full h-full object-cover mix-blend-multiply transition-all duration-300"
                        ></shopify-media>

                      </div>

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
                          This pure mineral crystal deodorant offers a clean, toxin-free alternative to conventional antiperspirants. It forms an invisible protective layer on your skin that completely neutralizes odor-causing bacteria without clogging your pores. Unlike chemical deodorants, it lets your body breathe naturally while keeping you fresh, dry, and odor-free all day long. It leaves zero sticky residue, zero white marks on your clothes, and zero irritation.
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
                          Alum, Water, Acerola Extract, Kiwi Fruit Extract, Vitamin C, and Vitamin E
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
                          Apply after showering to slightly damp underarms. Wet the crystal if needed and glide gently 4-5 times over the underarm area. 
                        </div>
                      </details>
                      <details class="group border-b border-gray-200 py-5">
                        <summary class="flex justify-between items-center font-medium text-lg text-gray-900 cursor-pointer list-none outline-none">
                          Benefits

                          <span class="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </span>
                        </summary>

                        <div class="mt-4 pb-2">
                          <ul class="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed list-disc pl-5">
                            <li>
                              <span class="font-medium text-gray-900">24-Hour Odor Protection:</span>
                              Eliminates the bacteria that cause body odor, keeping you fresh from morning to night.
                            </li>

                            <li>
                              <span class="font-medium text-gray-900">Zero Clothing Stains:</span>
                              Completely transparent formula leaves no white chalky residue on dark clothes or yellow stains on white shirts.
                            </li>

                            <li>
                              <span class="font-medium text-gray-900">Hypoallergenic & Gentle:</span>
                              Soothes the skin and prevents underarm darkening; perfectly safe for sensitive skin and post-shaving use.
                            </li>

                            <li>
                              <span class="font-medium text-gray-900">Incredibly Long-Lasting:</span>
                              A single pure crystal stick is highly concentrated and can easily last for up to 6–8 months of daily use.
                            </li>
                          </ul>
                        </div>
                      </details>
                      <details class="group border-b border-gray-200 py-5">
                        <summary class="flex justify-between items-center font-medium text-lg text-gray-900 cursor-pointer list-none outline-none">
                          Sustainability & Ethics

                          <span class="transition-transform duration-300 group-open:rotate-180 text-gray-400 group-hover:text-gray-900">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="m6 9 6 6 6-6"/>
                            </svg>
                          </span>
                        </summary>

                        <div class="text-gray-600 text-sm md:text-base leading-relaxed mt-4 pb-2">
                          We believe in clean beauty that cares for both your body and the planet. Our crystal deodorants are 100% vegan, cruelty-free, and sustainably sourced. Because a single stick lasts many times longer than a standard aerosol or plastic roll-on gel, switching to Dr. Deodorant drastically reduces your personal packaging waste and environmental footprint. Safe for your skin, kind to the earth.
                        </div>
                      </details>

                    </div>

                  </div>

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

                    <div class="mb-8 space-y-6">
                      
                      <div>
                        <h3 class="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Flavour</h3>
                        <div class="flex flex-wrap gap-3">
                          <label class="cursor-pointer relative">
                            <input type="radio" name="flavour" value="original" class="peer sr-only" checked>
                            <span class="block px-5 py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 peer-checked:border-[#203956] peer-checked:bg-[#203956] peer-checked:text-white hover:bg-gray-50 peer-checked:hover:bg-[#203956] transition-all duration-200">
                              Original
                            </span>
                          </label>

                        </div>
                      </div>

                      <div>
                        <h3 class="text-xs font-bold text-gray-900 uppercase tracking-widest mb-3">Size</h3>
                        <div class="flex flex-wrap gap-3">
                          <label class="cursor-pointer relative">
                            <input type="radio" name="size" value="70g" class="peer sr-only" checked>
                            <span class="block px-5 py-2.5 border border-gray-300 rounded-full text-sm font-medium text-gray-700 peer-checked:border-[#203956] peer-checked:bg-[#203956] peer-checked:text-white hover:bg-gray-50 peer-checked:hover:bg-[#203956] transition-all duration-200">
                              70g
                            </span>
                          </label>

                        </div>
                      </div>

                    </div>

                    <div class="flex items-center gap-4">

                      <button
                        class="flex-1 bg-[#203956] hover:bg-[#203956]/80 text-white py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest transition-colors cursor-pointer"
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
                        class="flex-1 bg-[#203956]/60 hover:bg-[#203956]/40 text-white py-4 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest transition-colors cursor-pointer"
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
                  
                  {/* Mock Loading for Variants */}
                  <div className="h-12 bg-gray-100 w-full mb-4 rounded-full"></div>
                  <div className="h-12 bg-gray-100 w-full mb-8 rounded-full"></div>

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