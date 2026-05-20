"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const heroImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmSwSq4WjFZyqS6QFP82FwR0c3B4E9ORtbSNfMIrkmAM8t2Pb6HF6fUNV1YInMcO3a-lulNzX8oNEwxn0rJNAH9SGGxNPTq_sDVhEN1loafvlzwI8RlNqOnjzKBzFRoiSXHP9nFHqJ89KZ49LoDP7G8jR_13TQPS0Woj4w7a2KrJEYZP0JvH-juarIwgXP-OYCIjTFiURLFfxl8oMYyCWPW4Avs5nKUtSt0RYGsgT_aMm81k6SjOuq6cYJyefXcvwKHK2cFrucDDUr",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAuNWhFNbDYvJBYMS-ucm8l9srV6I-H9zHy5ud3RNlZdoAVAQaJXoQRoceQTR4hBoVAj1w5hmrkiBzauI3cREzyE1VyykKZ1SKF8KbQEFAKNvMou208EZ4LJYZ2-9SaduYMs7k7VTCCbxIxSFhhzvPXwXE1KKuYInx8ldRK4mIpAqXqPc6a1tF3MmT_7qcuWOTFhK9GKJTQx5o_PV3KbU44yejEtq6ux5iJyhVbVC2aTBj4zILPJ5F42X9U9HQe3uhwInwx2c7LwhLy",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDFJVUYbs34N1O37AFYtd2ewJmTH7BLZMeOl_j8d89LekkkVd2D566iWlH2nQn4t-__lby4l7ceZzHNKr-QjxSKsU8DZHjDpM7mmFdcLjGFbTS4GhvQanOAArDZRufP8odGrPg2fBeM5HihW1PSgh78XpfZ9HkwipZIswxgK95XuxGZv77j1Uuwlk3rKTAL0oZH4dS1kALfGJdqc0NFSUAom85e6xYLDlic_WfjviN-YDaQdcWCRqwjWwozt9Z5Fdm9lHjr1IiClU88"
  ];

  const testimonials = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl39wosQluUgrJbRmGcWApiqE1HF7iBhfHdG55FCacoM5RiQtbvJC2X9s7NI2Q3KfNUtz8s3UCZol4IYs1g1nux0TDFxMehHeEmTL55RHsOiuz_pXRjj6mG_VmmnJu0WSxfvp-PFRNDa_fdGwqQv-mQbM8jaPkT56XxzBUh2QBrbPUYXWLyh_434ve8oG38-IjUYrmkUgM0BqrwLOBQf2t-JjG7jfojNoLy2ZBtOKX_sVoUbMJApLyrKZ7Quvc4qh_i16PvbaG-Etx",
      quote: `"The Pure Alum Crystal left my skin feeling fresh for days. What I loved most was how the mineral protection felt genuinely personalized, not like a harsh chemical product."`,
      author: "Sophia M, New York"
    },
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFQkoZy39FVEvGz6e63ZziBH7PEQBzJzq6PdLdoWpaqoxn137hzM8au6Bae7K1Or-ljLg_gN51mSqt_DsyJdh-JhVjBhKZ07u9UzZN0yNSdw5uvG59re2vLC_IUmpOYX8DDiDvWwVV3pGz6WAJqLGy6lw1b7_kqepNllmplAQiRbb1mKqjK3uXBtQYpjyK3CrnnLrN6qrG86Sm3ku51aZYmVHRsVz-spncDCGIjL4dWZGh3_3tJGUi2T5skHAkBYO6EwNpgPN5cnva",
      quote: `"I've struggled with dark underarms for years. After switching to Dr. Deodrant, the Acerola and Vitamin E extracts have visibly brightened the skin. Plus, 24-hour protection is real."`,
      author: "Marcus T, Seattle"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Scroll Reveals
    const revealOnScroll = document.querySelectorAll('.reveal-on-scroll');
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });

    revealOnScroll.forEach(el => {
      el.classList.add('transition-all', 'duration-1000', 'ease-out', 'opacity-0', 'translate-y-10');
      scrollObserver.observe(el);
    });
  }, []);

  return (
    <>
      {/* 2. Hero Carousel */}
      <section className="relative h-[90vh] overflow-hidden" id="hero-section">
        {/* Slides */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, idx) => (
            <div key={idx} className={`carousel-slide absolute inset-0 ${idx === currentHeroSlide ? 'active' : ''}`}>
              <img alt={`Hero slide ${idx + 1}`} className="w-full h-full object-cover ken-burns" src={src} />
            </div>
          ))}
          {/* Overlay for legibility */}
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="overflow-hidden mb-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-accent-highlight drop-shadow-md reveal-text block active">Pure & Natural Protection</span>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="font-bold text-5xl md:text-7xl text-white max-w-4xl reveal-text leading-[1.1] active drop-shadow-xl">Mineral Skincare for Your Underarms.</h1>
          </div>
          <div className="flex gap-4 transition-opacity duration-1000" id="hero-btns">
            <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">Shop The Collection</button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-lg">Learn The Science</button>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="py-24 px-8 md:px-16 max-w-container-max mx-auto bg-white overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-on-scroll">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA6gzOrd0LMOqk5th0YDaWgWoNFpF1V-pxt-0L5VegPy6cmQLe_Z9QMECuRabOjPVPlLuiQ5xQl-B2OtxG1JyBz81pAJSxSuweDd3H4FMtxv7LMS2zV_8FjGbF_jHljjj6VjYSM83voa3mGd8-wE5d6UXLD2wUJEIqImVS8zA2Xjp90MwoheHNbzB3EAEvqoV06oM8XihpXxfY_oGf4HqkKfqlxHASp8SKMR0e0LVdvsxviEkPAsfjVbNOUe3umxB7p-ZTKo987Ine" />
            </div>
            {/* Circular Rotating Badge */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white rounded-full p-2 shadow-xl flex items-center justify-center">
              <div className="absolute inset-0 animate-rotate-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs><path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circlePath"></path></defs>
                  <text className="text-[9px] font-bold uppercase tracking-[0.2em] fill-primary">
                    <textPath href="#circlePath">Pure Natural Mineral • Clinical Skincare • Alum & Vitamin E •</textPath>
                  </text>
                </svg>
              </div>
              <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
            </div>
          </div>
          <div className="space-y-8 reveal-on-scroll">
            <span className="font-bold text-xs text-secondary uppercase tracking-widest">Our Formulation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Synergy of Alum & Superfood Extracts.</h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              Experience the medical-grade precision of pure Alum crystals enhanced with the antioxidant power of <b>Kiwi Fruit Extract</b>, <b>Acerola Extract</b>, and <b>Vitamin E</b>. Our formula doesn't just block odor; it nourishes the delicate underarm skin while helping to lighten dark areas naturally.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>flare</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-primary">Brightening Power</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-primary">Plant-Derived</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 bg-brand-bg/50 border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center lg:grid-cols-4">
          <div className="space-y-2 reveal-on-scroll">
            <h4 className="text-4xl md:text-5xl font-bold text-primary">10,000+</h4>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">Happy Customers</p>
          </div>
          <div className="space-y-2 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <h4 className="text-4xl md:text-5xl font-bold text-primary">14 Years</h4>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">Clinical Experience</p>
          </div>
          <div className="space-y-2 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-4xl md:text-5xl font-bold text-primary">24h</h4>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">Odor Protection</p>
          </div>
          <div className="space-y-2 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <h4 className="text-4xl md:text-5xl font-bold text-primary">0%</h4>
            <p className="text-xs font-bold text-secondary uppercase tracking-widest">Synthetic Chemicals</p>
          </div>
        </div>
      </section>

      {/* 5. Image Bento Grid */}
      <section className="py-24 px-8 md:px-16 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg reveal-on-scroll">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFQkoZy39FVEvGz6e63ZziBH7PEQBzJzq6PdLdoWpaqoxn137hzM8au6Bae7K1Or-ljLg_gN51mSqt_DsyJdh-JhVjBhKZ07u9UzZN0yNSdw5uvG59re2vLC_IUmpOYX8DDiDvWwVV3pGz6WAJqLGy6lw1b7_kqepNllmplAQiRbb1mKqjK3uXBtQYpjyK3CrnnLrN6qrG86Sm3ku51aZYmVHRsVz-spncDCGIjL4dWZGh3_3tJGUi2T5skHAkBYO6EwNpgPN5cnva" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
          </div>
          <div className="md:col-span-4 md:row-span-1 bg-brand-bg p-10 flex flex-col justify-center rounded-xl border border-secondary/10 reveal-on-scroll">
            <h3 className="text-2xl font-bold text-primary mb-4">Long-lasting Value.</h3>
            <p className="text-on-surface-variant">Designed with clinical efficiency. One product lasts 6-8 months with daily use, providing consistent protection and skin nourishment.</p>
          </div>
          <div className="md:col-span-4 md:row-span-1 relative overflow-hidden group rounded-xl shadow-lg reveal-on-scroll">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-tcoGNlUP2QnpD5ZwFpKv_uYIiBV80x_jXq965gaf7HXn9ZpKnj_tNUJTaJH69koqKTAaH0HwkQsyXlBOs771224iDIzqo08QaPu2QyZdWLb5eWA4TTlhIfMiwSVDj--2wLXfOB0J1KrKewNSyjDaPkgqifU8-tkXQnJYwi1hwKUwRya54dgaR67HpNhdxgXwRn6ljX6rP-4J1tnOARH_rySXaP_x3_oh5isK8qGqdeZNbwf_FHh0uURU8rb-Vw5hAnK2Lf5zP7Js" />
          </div>
          <div className="md:col-span-12 md:row-span-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden group rounded-xl shadow-lg reveal-on-scroll">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_92XK_LfwPPlNcyS3SuFPIGatO6PttSOxwC6cUBmGPzUonImAvDHKI1o1r4YbgiX123nRnbvDIF2ZI_Zyb99n-zKJqtozqz_g_2K6JwpU0-KU7zPAn9TCH14ec_TzaUYkC43tjWYS02VjNrfTV_gGqgP1Cfqksp8qfp5Zed7dVnWm54WWMy4CPwIyqyrwZo5Wg8ROaBDlttcZQR51mYPhFVNZ8hik6854TJK0Mr4rKKay6Qdk1lrzgOJZuuxzQ7eIO7ioyQOm5Tb" />
            </div>
            <div className="bg-primary text-white p-10 flex flex-col justify-between rounded-xl reveal-on-scroll shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-accent-highlight">Active Ingredients</span>
              <p className="text-2xl font-bold leading-tight">Potent Vitamin E & Acerola for cellular health.</p>
              <Link className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all group" href="/">
                Discover More <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            <div className="relative overflow-hidden group rounded-xl shadow-lg reveal-on-scroll">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl39wosQluUgrJbRmGcWApiqE1HF7iBhfHdG55FCacoM5RiQtbvJC2X9s7NI2Q3KfNUtz8s3UCZol4IYs1g1nux0TDFxMehHeEmTL55RHsOiuz_pXRjj6mG_VmmnJu0WSxfvp-PFRNDa_fdGwqQv-mQbM8jaPkT56XxzBUh2QBrbPUYXWLyh_434ve8oG38-IjUYrmkUgM0BqrwLOBQf2t-JjG7jfojNoLy2ZBtOKX_sVoUbMJApLyrKZ7Quvc4qh_i16PvbaG-Etx" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Product (Shopify Integration) */}
      <section className="py-24 bg-brand-bg">
        <div className="max-w-container-max mx-auto px-8 md:px-16">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            
            <div className="flex-1 w-full bg-white p-10 rounded-2xl shadow-xl border border-outline-variant/10 group reveal-on-scroll">
              <shopify-context type="product" handle="dr-deodorant-natural-mineral-deodorant-stick-vitamin-c-e-enriched" wait-for-update="false">
                <template dangerouslySetInnerHTML={{ __html: `
                  <div class="aspect-square relative mb-8 overflow-hidden bg-surface rounded-xl flex items-center justify-center">
                    <shopify-media query="product.selectedOrFirstAvailableVariant.image" width="400" height="400"></shopify-media>
                    <span class="absolute top-4 right-4 bg-primary text-white px-5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest z-10">Premium Care</span>
                  </div>
                  
                  <div class="space-y-6">
                    <div class="flex justify-between items-end">
                      <div>
                        <h3 class="text-2xl font-bold text-primary">
                          <shopify-data query="product.title"></shopify-data>
                        </h3>
                        <p class="text-xs font-bold text-secondary uppercase tracking-widest mt-1">120g • Clinical Grade</p>
                      </div>
                      <p class="text-2xl font-bold text-primary">
                        <shopify-money query="product.selectedOrFirstAvailableVariant.price"></shopify-money>
                      </p>
                    </div>
                    
                    <shopify-variant-selector></shopify-variant-selector>
                    
                    <button 
                      class="w-full bg-primary text-white py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
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
              <span className="font-bold text-xs text-secondary uppercase tracking-widest">Application Guide</span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">How to Use for Optimal Results.</h2>
              <p className="text-lg text-on-surface-variant">Apply after showering on slightly damp underarms. Wet the crystal if needed and glide gently 4-5 times over the underarm area. Product lasts 6-8 months with daily use.</p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-6 border-2 border-primary/5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>water_drop</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">Damp Application</p>
                </div>
                <div className="p-6 border-2 border-primary/5 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">8 Month Lifecycle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonial Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-8 md:px-16 text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight italic font-light">Real Results, Clinically Proven.</h2>
          <p className="text-lg text-on-surface-variant mt-4">Join thousands of users who have transitioned to the future of mineral skincare.</p>
        </div>
        <div className="max-w-container-max mx-auto px-8 md:px-16 relative">
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((t, idx) => (
              <div key={idx} className={`min-w-full flex flex-col md:flex-row gap-8 items-stretch testimonial-slide ${idx === currentTestimonial ? 'opacity-100' : 'opacity-0'}`}>
                <div className="md:w-5/12">
                  <div className="h-full rounded-2xl overflow-hidden shadow-xl">
                    <img alt="Client testimonial" className="w-full h-full object-cover" src={t.image} />
                  </div>
                </div>
                <div className="md:w-7/12 bg-brand-bg p-12 md:p-20 rounded-2xl flex flex-col justify-center relative">
                  <span className="material-symbols-outlined text-7xl text-primary/10 absolute top-10 left-10" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="text-2xl md:text-3xl text-primary mb-8 leading-relaxed italic relative z-10 font-medium">
                    {t.quote}
                  </p>
                  <div className="flex gap-1 text-secondary mb-4">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">— {t.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-12 justify-center">
          <button className="w-14 h-14 rounded-full border-2 border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-14 h-14 rounded-full border-2 border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 px-8 md:px-16 max-w-container-max mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="reveal-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Expert Guidance.</h2>
              <p className="text-lg text-on-surface-variant mt-4">Professional answers for your mineral skincare journey.</p>
            </div>
            <div className="space-y-2 reveal-on-scroll">
              {[
                { q: "How long does the stick last?", a: "Due to the high-density clinical crystal structure, a single 120g stick lasts approximately 6-8 months with daily use, making it an exceptionally sustainable choice." },
                { q: "Does it help with dark spots?", a: "Yes. Our formulation includes Acerola Extract and Vitamin E, which are known for their brightening properties and ability to help lighten dark underarms over time." }
              ].map((faq, idx) => (
                <div key={idx} className={`accordion-item border-b border-outline-variant/30 py-6 cursor-pointer group ${activeAccordion === idx ? 'active' : ''}`} onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">{faq.q}</h3>
                    <span className="material-symbols-outlined accordion-icon transition-transform text-outline">add</span>
                  </div>
                  <div className="accordion-content">
                    <p className="pt-4 text-on-surface-variant">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group h-full reveal-on-scroll">
            <div className="sticky top-32 bg-primary rounded-[2rem] overflow-hidden shadow-2xl p-12 flex flex-col items-center text-center justify-center min-h-[500px]">
              <div className="absolute inset-0 opacity-20">
                <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPb7WgIZ8QjCqKNhSelrDDjgdPV1H9mj5LMA5tSswp_giBmVK-9YDGxgljdVif66LvG-QnOKt7O1OtxcVnJcVYIChnNDipLxQm-01_ZT1vBwhpH8dFvVRfxMceybzFnucP-cIXaV3KfweXYpf54ikTK8LtGqVIhzeTT6-ax4NsbydTfQN151uRLeqsw-sjBnFhqYs_qDdMyMpsq4UlGOFTy7F-an_xdSZV8MT5gO0HaUEy17ibDKHGWZIaZndrRk8A1UVF7B1IjrDJ" />
              </div>
              <div className="relative z-10 space-y-8">
                <p className="text-xs font-bold text-accent-highlight uppercase tracking-[0.2em]">Scientific Consultation • Mon—Sat, 9am—6pm</p>
                <h3 className="text-4xl font-bold text-white leading-tight">Speak with a Specialist</h3>
                <p className="text-white/80 max-w-sm mx-auto">Get personalized advice on transitioning to mineral-based hygiene based on your skin type.</p>
                <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-bg transition-colors flex items-center gap-2 mx-auto">
                  Connect with Our Team <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
