"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";

export function FeaturedProductSection() {
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
                      <div class="main-product-image aspect-4/5 bg-[#F8F6F4] rounded-2xl overflow-hidden flex items-center justify-center mb-4 relative">
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
                                const mainImageContainer = document.querySelector('.main-product-image');

                                if(img && mainImageContainer){
                                  mainImageContainer.innerHTML = '';
                                  mainImageContainer.appendChild(img.cloneNode(true));

                                  const cloned = mainImageContainer.querySelector('img');
                                  if(cloned){
                                    cloned.className = 'w-full h-full object-cover mix-blend-multiply transition-all duration-300';
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
                  </div>

                  <div class="lg:sticky lg:top-32 h-fit flex flex-col">
                    <nav class="text-sm text-gray-400 mb-6 font-medium">
                      Home / Shop /
                      <span class="text-gray-800 font-cabinet">
                        <shopify-data query="product.title"></shopify-data>
                      </span>
                    </nav>

                    <h1 class="text-3xl md:text-4xl font-cabinet font-bold text-gray-900 mb-2">
                      <shopify-data query="product.title"></shopify-data>
                    </h1>

                    <p class="text-gray-500 text-sm mb-4">
                      Mineral Skincare
                    </p>

                    <div class="flex items-center gap-2 mb-6">
                      <span class="text-yellow-500 text-base">★</span>
                      <span class="font-medium text-gray-900">4.9</span>
                      <span class="text-gray-400 text-sm ml-1">(127 Reviews)</span>
                    </div>

                    <p class="text-2xl font-bold text-gray-900 mb-6">
                      <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </p>

                    <ul class="space-y-3 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-200">
                      <li class="flex items-center gap-2">✓ Lightweight & Non-Greasy</li>
                      <li class="flex items-center gap-2">✓ Deep Hydration & Nourishment</li>
                      <li class="flex items-center gap-2">✓ Fast-Absorbing Formula</li>
                      <li class="flex items-center gap-2">✓ Suitable for All Skin Types</li>
                    </ul>

                    <div class="mb-8 flex flex-wrap flex-row gap-8">
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
                        class="group relative inline-flex h-10 w-32 items-center justify-center overflow-hidden rounded-md border-2 border-[#394481] dark:border-[#656fe2] font-medium cursor-pointer"
                        onclick="
                          const cart = document.getElementById('main-cart');

                          if (cart && cart.addLine) {
                            cart.addLine(event);
                            cart.showModal();
                          }
                        "
                      >
                        <div class="inline-flex h-10 w-full translate-y-0 items-center justify-center bg-linear-to-r from-[#070e41] to-[#263381] px-4 text-white transition duration-500 group-hover:translate-y-[-150%] dark:from-[#070e41] dark:to-[#263381] dark:text-white">
                          Buy Now
                        </div>
                        <div class="absolute inline-flex h-10 w-full translate-y-full items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                          <span class="absolute h-full w-[200%] -left-[50%] translate-y-full skew-y-12 scale-y-0 bg-[#394481] rounded-md transition duration-500 origin-center group-hover:translate-y-0 group-hover:scale-150 dark:bg-[#656fe2]"></span>
                          <span class="z-10">Buy Now</span>
                        </div>
                      </button>

                      <button
                        class="group relative inline-flex h-10 w-32 items-center justify-center overflow-hidden rounded-md border-2 border-[#394481] dark:border-[#656fe2] font-medium cursor-pointer"
                        onclick="
                          const cart = document.getElementById('main-cart');

                          if (cart && cart.addLine) {
                            cart.addLine(event);
                            cart.showModal();
                          }
                        "
                      >
                        <div class="inline-flex h-10 w-full translate-y-0 items-center justify-center bg-linear-to-r from-[#070e41] to-[#263381] px-4 text-white transition duration-500 group-hover:translate-y-[-150%] dark:from-[#070e41] dark:to-[#263381] dark:text-white">
                          Add to Cart
                        </div>
                        <div class="absolute inline-flex h-10 w-full translate-y-full items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
                          <span class="absolute h-full w-[200%] -left-[50%] translate-y-full skew-y-12 scale-y-0 bg-[#394481] rounded-md transition duration-500 origin-center group-hover:translate-y-0 group-hover:scale-150 dark:bg-[#656fe2]"></span>
                          <span class="z-10">Add to Cart</span>
                        </div>
                      </button>

                    </div>
                  </div>
                </div>
              `,
              }}
            />

            {/* LOADING STATE */}
            <div
              shopify-loading-placeholder="true"
              className="animate-pulse"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                <div>
                  <div className="aspect-4/5 bg-gray-100 rounded-2xl mb-4"></div>
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