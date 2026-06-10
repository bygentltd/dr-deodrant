"use client";

import { useEffect } from "react";
import Head from "next/head";

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <shopify-context
                    type="product"
                    handle="dr-deodrantnatural-crystal-deodorant"
                >
                    <template
                        dangerouslySetInnerHTML={{
                            __html: `
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  <!-- Left Column: Media Gallery -->
                  <div class="flex flex-col gap-6">
                    <div class="aspect-[4/5] w-full rounded-3xl overflow-hidden bg-[#F8F9FA] relative group shadow-sm border border-gray-100">
                      <shopify-media 
                        query="product.selectedOrFirstAvailableVariant.image" 
                        class="absolute inset-0 w-full h-full object-cover mix-blend-multiply z-0 transition-transform duration-700 group-hover:scale-105"
                      ></shopify-media>
                    </div>
                    
                    <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                      <shopify-list-context type="image" query="product.selectedOrFirstAvailableVariant.product.images" first="5" class="flex gap-4">
                        <template>
                          <button
                            class="gallery-thumb w-24 h-24 bg-[#F8F9FA] rounded-2xl shrink-0 cursor-pointer border-2 border-transparent hover:border-[#003286] overflow-hidden transition-all duration-300 focus:outline-none"
                            onmouseenter="this.click()"
                            onclick="
                              const root = this.closest('.grid');
                              root.querySelectorAll('.gallery-thumb').forEach(t => {
                                t.classList.remove('border-[#003286]');
                                t.classList.add('border-transparent');
                              });
                              this.classList.remove('border-transparent');
                              this.classList.add('border-[#003286]');
                              
                              const media = this.querySelector('shopify-media');
                              if (media) {
                                const img = media.querySelector('img') || (media.shadowRoot && media.shadowRoot.querySelector('img'));
                                if (img && img.src) {
                                  const container = root.querySelector('.aspect-\\\\[4\\\\/5\\\\]');
                                  const mainMedia = container.querySelector('shopify-media');
                                  if (mainMedia) {
                                    const mainImg = mainMedia.querySelector('img') || (mainMedia.shadowRoot && mainMedia.shadowRoot.querySelector('img'));
                                    if(mainImg) mainImg.src = img.src;
                                  }
                                }
                              }
                            "
                          >
                            <shopify-media query="image" class="w-full h-full object-cover pointer-events-none mix-blend-multiply"></shopify-media>
                          </button>
                        </template>
                      </shopify-list-context>
                    </div>
                  </div>

                  <!-- Right Column: Product Details -->
                  <div class="flex flex-col h-full lg:py-6">
                    <nav class="text-sm font-medium text-gray-500 mb-6 flex items-center gap-2">
                      <a href="/" class="hover:text-[#003286] transition-colors">Home</a>
                      <span>/</span>
                      <a href="/product" class="hover:text-[#003286] transition-colors">Product</a>
                      <span>/</span>
                      <span class="text-gray-900"><shopify-data query="product.title"></shopify-data></span>
                    </nav>

                    <h1 class="text-4xl md:text-5xl font-bold text-[#0A2544] mb-4 tracking-tight">
                      <shopify-data query="product.title"></shopify-data>
                    </h1>
                    
                    <div class="flex items-center gap-4 mb-6">
                      <div class="flex items-center gap-1 text-yellow-400">
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                        <svg class="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                      </div>
                      <span class="text-sm font-medium text-gray-600">4.9 (128 reviews)</span>
                    </div>

                    <div class="text-3xl font-bold text-[#003286] mb-8">
                      <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                    </div>

                    <div class="prose prose-sm text-gray-600 mb-8 max-w-none line-clamp-3">
                      <shopify-data query="product.descriptionHtml"></shopify-data>
                    </div>
                    
                    <div class="mb-8 flex items-start gap-10">
                      <div class="flex flex-col">
                        <h3 class="text-xs font-bold text-[#003286] uppercase tracking-widest mb-3 flex justify-center items-center">
                          Scent
                        </h3>
                        <div class="flex gap-3">
                          <label class="cursor-pointer relative">
                            <input type="radio" name="dummy-Scent" value="original" class="peer sr-only" checked>
                            <span class="block px-5 py-2.5 border border-gray-300 rounded-full bg-[#F5FBFF] text-sm font-medium text-[#003286] transition-all duration-200 hover:border-[#003286] peer-checked:border-[#003286] peer-checked:text-[#003286]">
                              Original
                            </span>
                          </label>
                        </div>
                      </div>
                      <div class="flex flex-col">
                        <h3 class="text-xs font-bold text-[#003286] uppercase tracking-widest mb-3 flex justify-center items-center">
                          Size
                        </h3>
                        <div class="flex gap-3">
                          <label class="cursor-pointer relative">
                            <input type="radio" name="dummy-size" value="70g" class="peer sr-only" checked>
                            <span class="block px-5 py-2.5 border border-gray-300 rounded-full bg-[#F5FBFF] text-sm font-medium text-[#003286] transition-all duration-200 hover:border-[#003286] peer-checked:border-[#003286] peer-checked:text-[#003286]">
                              70g
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-4 mb-10">
                      <button
                        class="flex-1 bg-[#0A2544] hover:bg-[#003286] text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-[0_8px_20px_-8px_rgba(0,50,134,0.5)] hover:shadow-[0_12px_24px_-8px_rgba(0,50,134,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        onclick="
                          const cart = document.getElementById('main-cart');
                          if (cart && cart.addLine) {
                            cart.addLine(event);
                            cart.showModal();
                          }
                        "
                      >
                        <span class="material-symbols-outlined transition-transform group-hover:scale-110">shopping_bag</span>
                        Add to Cart
                      </button>
                      <button
                        class="flex-1 bg-white hover:bg-gray-50 text-[#0A2544] px-8 py-4 rounded-xl font-bold text-lg border-2 border-[#0A2544] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        onclick="document.querySelector('shopify-store').buyNow(event)"
                      >
                        <span class="material-symbols-outlined transition-transform group-hover:scale-110">payments</span>
                        Buy it Now
                      </button>
                    </div>

                    <!-- Trust Badges -->
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-t border-gray-100">
                      <div class="flex flex-col items-center text-center gap-2">
                        <div class="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                          <span class="material-symbols-outlined">eco</span>
                        </div>
                        <span class="text-xs font-medium text-gray-600">100% Natural</span>
                      </div>
                      <div class="flex flex-col items-center text-center gap-2">
                        <div class="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                          <span class="material-symbols-outlined">schedule</span>
                        </div>
                        <span class="text-xs font-medium text-gray-600">24h Protection</span>
                      </div>
                      <div class="flex flex-col items-center text-center gap-2">
                        <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center">
                          <span class="material-symbols-outlined">cruelty_free</span>
                        </div>
                        <span class="text-xs font-medium text-gray-600">Cruelty Free</span>
                      </div>
                      <div class="flex flex-col items-center text-center gap-2">
                        <div class="w-12 h-12 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center">
                          <span class="material-symbols-outlined">local_shipping</span>
                        </div>
                        <span class="text-xs font-medium text-gray-600">Free Shipping</span>
                      </div>
                    </div>
                  </div>
                </div>
              `
                        }}
                    />

                    {/* Loading State */}
                    <div shopify-loading-placeholder="true" className="animate-pulse">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                            <div className="flex flex-col gap-6">
                                <div className="aspect-[4/5] w-full rounded-3xl bg-gray-100"></div>
                                <div className="flex gap-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <div key={i} className="w-24 h-24 rounded-2xl bg-gray-100 shrink-0"></div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 pt-6">
                                <div className="w-32 h-4 bg-gray-100 rounded"></div>
                                <div className="w-3/4 h-12 bg-gray-100 rounded-lg"></div>
                                <div className="w-48 h-6 bg-gray-100 rounded"></div>
                                <div className="w-32 h-10 bg-gray-100 rounded-lg mt-4"></div>
                                <div className="w-full h-24 bg-gray-100 rounded-xl mt-4"></div>
                                <div className="w-full h-32 bg-gray-50 rounded-2xl mt-4"></div>
                                <div className="flex gap-4 mt-6">
                                    <div className="flex-1 h-16 bg-gray-100 rounded-xl"></div>
                                    <div className="flex-1 h-16 bg-gray-100 rounded-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </shopify-context>
            </div>

            <style jsx global>{`
      `}</style>
        </div>
    );
}
