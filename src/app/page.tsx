"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const heroImages = [
    "/HERO_image.webp",
    "/2nd_hero_image.webp",
    "/HERO_image.webp"
  ]

  const heroTitles = [
    'The Right Hands Make All the Difference.',
    'Pure Mineral Protection — No Compromise.',
    'Clinical-Grade Care, Naturally.',
  ];

  const testimonials = [
    {
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl39wosQluUgrJbRmGcWApiqE1HF7iBhfHdG55FCacoM5RiQtbvJC2X9s7NI2Q3KfNUtz8s3UCZol4IYs1g1nux0TDFxMehHeEmTL55RHsOiuz_pXRjj6mG_VmmnJu0WSxfvp-PFRNDa_fdGwqQv-mQbM8jaPkT56XxzBUh2QBrbPUYXWLyh_434ve8oG38-IjUYrmkUgM0BqrwLOBQf2t-JjG7jfojNoLy2ZBtOKX_sVoUbMJApLyrKZ7Quvc4qh_i16PvbaG-Etx",
      quote: `"The Pure Alum Crystal left my skin feeling fresh for days. What I loved most was how the mineral protection felt genuinely personalized, not like a harsh chemical product."`,
      author: "Sophia M, New York"
    },
    {
      image: "/img3.png",
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

  // Reveal hero text on mount and when slide changes
  useEffect(() => {
    const elems = Array.from(document.querySelectorAll('.reveal-text')) as HTMLElement[];
    elems.forEach(el => el.classList.remove('active'));
    const timers: number[] = [];
    elems.forEach((el, i) => {
      const t = window.setTimeout(() => el.classList.add('active'), 200 + i * 120);
      timers.push(t);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, [currentHeroSlide]);

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

  // Animated counters for Stats section
  const [hasCounted, setHasCounted] = useState(false);
  useEffect(() => {
    const nums = Array.from(document.querySelectorAll('.stat-number')) as HTMLElement[];
    if (!nums.length) return;

    const animateCount = (el: HTMLElement) => {
      const target = Number(el.getAttribute('data-target')) || 0;
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1500;
      const start = performance.now();
      const startVal = 0;
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const value = Math.floor(progress * (target - startVal) + startVal);
        el.innerText = (target >= 1000 ? value.toLocaleString() : value) + suffix;
        if (progress < 1) requestAnimationFrame(step);
        else el.innerText = (target >= 1000 ? target.toLocaleString() : target) + suffix;
      };
      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasCounted) {
          nums.forEach(el => animateCount(el));
          setHasCounted(true);
        }
      });
    }, { threshold: 0.4 });

    const statsSection = document.getElementById('stats-section') || nums[0].closest('section');
    if (statsSection) observer.observe(statsSection);

    return () => observer.disconnect();
  }, [hasCounted]);

  return (
    <>
      {/* 2. Hero Carousel */}
      <section className="relative h-screen w-full overflow-hidden" id="hero-section">
        {/* Slides */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, idx) => (
            <div key={idx} className={`carousel-slide absolute inset-0 ${idx === currentHeroSlide ? 'active' : ''}`}>
              <img alt={`Hero slide ${idx + 1}`} className="w-full h-full object-cover ken-burns" src={src} />
            </div>
          ))}
          {/* Overlay for legibility */}
          <div className="absolute inset-0 hero-gradient"></div>
          {/* Decorative subtle pattern */}

        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <div className="overflow-hidden mb-4">
            <span className="font-bold text-xs uppercase tracking-[0.3em] text-[#0a2544] drop-shadow-md reveal-text block">CERTIFIED · EXPERIENCED · DEVOTED</span>
          </div>
          <div className="overflow-hidden mb-8">
            <h1 className="font-bold text-5xl md:text-7xl text-[#0a2544] max-w-4xl reveal-text leading-[1.1] drop-shadow-xl">{heroTitles[currentHeroSlide]}</h1>
          </div>
          <div className="flex gap-4 transition-opacity duration-1000" id="hero-btns">
            <button className="bg-white text-[#0a2544] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg">Shop The Collection</button>
            <button className="border-2 border-[#0a2544] text-[#0a2544] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#0a2544] transition-all shadow-lg">Learn The Science</button>
          </div>

          {/* Indicators */}
          <div className="mt-10 flex items-center gap-3 hero-indicators">
            {heroImages.map((_, i) => (
              <button key={i} onClick={() => setCurrentHeroSlide(i)} className={`w-3 h-3 rounded-full ${i === currentHeroSlide ? 'bg-white' : 'bg-white/40'} transition-all`} aria-label={`Go to slide ${i + 1}`} />
            ))}
          </div>

          {/* Arrows */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
            <button className="hero-arrow" onClick={() => setCurrentHeroSlide((s) => (s - 1 + heroImages.length) % heroImages.length)} aria-label="Previous slide">&#10094;</button>
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
            <button className="hero-arrow" onClick={() => setCurrentHeroSlide((s) => (s + 1) % heroImages.length)} aria-label="Next slide">&#10095;</button>
          </div>
        </div>
      </section>

      {/* 3. Philosophy Section */}
      <section className="py-24 px-8 md:px-16 max-w-container-max mx-auto bg-white overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative reveal-on-scroll">
            <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img className="w-full h-full object-cover" src="/DRDEO.webp" />
            </div>
            {/* Circular Rotating Badge */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-white rounded-full p-2 shadow-xl flex items-center justify-center">
              <div className="absolute inset-0 animate-rotate-slow">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs><path d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" id="circlePath"></path></defs>
                  <text className="text-[9px] font-bold uppercase tracking-[0.2em] fill-[#0a2544]">
                    <textPath href="#circlePath">Pure Natural Mineral • Clinical Skincare • Alum & Vitamin E •</textPath>
                  </text>
                </svg>
              </div>
              <span className="material-symbols-outlined text-4xl text-[#0a2544]" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
            </div>
          </div>
          <div className="space-y-8 reveal-on-scroll">
            <span className="font-bold text-xs text-[#0a2544] uppercase tracking-widest">Our Formulation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2544] leading-tight">Synergy of Alum & Superfood Extracts.</h2>
            <p className="text-lg text-[#0a2544] leading-relaxed">
              Experience the medical-grade precision of pure Alum crystals enhanced with the antioxidant power of <b>Kiwi Fruit Extract</b>, <b>Acerola Extract</b>, and <b>Vitamin E</b>. Our formula doesn't just block odor; it nourishes the delicate underarm skin while helping to lighten dark areas naturally.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-[#0a2544]">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>flare</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-[#0a2544]">Brightening Power</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-[#0a2544]">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                </div>
                <span className="text-xs font-bold uppercase tracking-wide text-[#0a2544]">Plant-Derived</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-20 bg-brand-bg/50 border-y border-outline-variant/10">
        <div className="max-w-container-max mx-auto px-8 md:px-16 grid grid-cols-2 md:grid-cols-3 gap-8 text-center lg:grid-cols-4">
          <div className="space-y-2 reveal-on-scroll">
            <h4 className="text-4xl md:text-5xl font-bold text-[#0a2544]"><span className="stat-number" data-target="10000" data-suffix="+">0</span></h4>
            <p className="text-xs font-bold text-[#0a2544] uppercase tracking-widest">Happy Customers</p>
          </div>
          <div className="space-y-2 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
            <h4 className="text-4xl md:text-5xl font-bold text-[#0a2544]"><span className="stat-number" data-target="14">0</span></h4>
            <p className="text-xs font-bold text-[#0a2544] uppercase tracking-widest">Clinical Experience</p>
          </div>
          <div className="space-y-2 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <h4 className="text-4xl md:text-5xl font-bold text-[#0a2544]"><span className="stat-number" data-target="24" data-suffix="h">0</span></h4>
            <p className="text-xs font-bold text-[#0a2544] uppercase tracking-widest">Odor Protection</p>
          </div>
          <div className="space-y-2 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
            <h4 className="text-4xl md:text-5xl font-bold text-[#0a2544]"><span className="stat-number" data-target="0" data-suffix="%">0</span></h4>
            <p className="text-xs font-bold text-[#0a2544] uppercase tracking-widest">Synthetic Chemicals</p>
          </div>
        </div>
      </section>

      {/* 5. Image Bento Grid */}
      <section className="py-24 px-8 md:px-16 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-xl shadow-lg reveal-on-scroll">
            <img className="w-full h-full object-full transition-transform duration-1000 group-hover:scale-105" src="hf_20260520_220203_3e37c1fa-fe7d-449a-9a03-e8c0fc80834d.webp" />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
          </div>
          <div className="md:col-span-4 md:row-span-1 bg-brand-bg p-10 flex flex-col justify-center rounded-xl border border-[#0a2544]/10 reveal-on-scroll">
            <h3 className="text-2xl font-bold text-[#0a2544] mb-4">Long-lasting Value.</h3>
            <p className="text-[#0a2544]">Designed with clinical efficiency. One product lasts 6-8 months with daily use, providing consistent protection and skin nourishment.</p>
          </div>
          <div className="md:col-span-4 md:row-span-1 relative overflow-hidden group rounded-xl shadow-lg reveal-on-scroll">
            <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="ChatGPT Image Jan 30, 2026, 08_08_08 PM.png" />
          </div>
          <div className="md:col-span-12 md:row-span-1 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative overflow-hidden group rounded-xl shadow-lg reveal-on-scroll">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="ChatGPT Image May 21, 2026, 03_25_10 AM.webp" />
            </div>
            <div className="bg-primary text-[#0a2544] p-10 flex flex-col justify-between rounded-xl reveal-on-scroll shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0a2544]">Active Ingredients</span>
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
                <template dangerouslySetInnerHTML={{
                  __html: `
                  <div class="aspect-square relative mb-8 overflow-hidden bg-surface rounded-xl flex items-center justify-center">
                    <shopify-media query="product.selectedOrFirstAvailableVariant.image" width="400" height="400"></shopify-media>
                    <span class="absolute top-4 right-4 bg-primary text-[#0a2544] px-5 py-1.5 rounded-full font-bold text-[10px] uppercase tracking-widest z-10">Premium Care</span>
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
                      class="w-full bg-primary text-[#0a2544] py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
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

      {/* 7. Testimonial Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-container-max mx-auto px-8 md:px-16 text-center mb-16 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a2544] leading-tight italic font-light">Real Results, Clinically Proven.</h2>
          <p className="text-lg text-[#0a2544] mt-4">Join thousands of users who have transitioned to the future of mineral skincare.</p>
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
                  <span className="material-symbols-outlined text-7xl text-[#0a2544]/10 absolute top-10 left-10" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                  <p className="text-2xl md:text-3xl text-[#0a2544] mb-8 leading-relaxed italic relative z-10 font-medium">
                    {t.quote}
                  </p>
                  <div className="flex gap-1 text-[#0a2544] mb-4">
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0a2544] uppercase tracking-[0.2em]">— {t.author}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-12 justify-center">
          <button className="w-14 h-14 rounded-full border-2 border-outline-variant flex items-center justify-center hover:bg-primary hover:text-[#0a2544] hover:border-[#0a2544] transition-all" onClick={() => setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}>
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <button className="w-14 h-14 rounded-full border-2 border-outline-variant flex items-center justify-center hover:bg-primary hover:text-[#0a2544] hover:border-[#0a2544] transition-all" onClick={() => setCurrentTestimonial(prev => (prev + 1) % testimonials.length)}>
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-24 px-8 md:px-16 max-w-container-max mx-auto bg-white">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div className="reveal-on-scroll">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a2544] leading-tight">Expert Guidance.</h2>
              <p className="text-lg text-[#0a2544] mt-4">Professional answers for your mineral skincare journey.</p>
            </div>
            <div className="space-y-2 reveal-on-scroll">
              {[
                { q: "What is Dr. Deodorant made of?", a: "Dr. Deodorant is formulated with potassium aluminum sulfate (alum), water, and natural fruit extracts including acerola and kiwi, enriched with vitamins C and E. It is completely unscented and contains no artificial fragrances, masking agents, parabens, or harsh additives, offering gentle, effective odour protection with skin-loving benefits." },
                { q: "How is it different from regular deodorants?", a: "Unlike conventional deodorants that mask odor with fragrances or block sweat glands with chemicals, Dr. Deodorant creates an invisible mineral barrier that prevents odor-causing bacteria from forming. It's completely natural and leaves no residue or stains." },
                { q: "How do I use Dr. Deodorant?", a: "Simply wet the crystal with water and glide it over clean underarms. Allow to dry naturally. For best results, apply immediately after showering when pores are open." },
                { q: "Is Dr. Deodorant safe for sensitive skin?", a: "Absolutely! Our crystal formula is hypoallergenic and dermatologist-tested. It contains no irritants, making it perfect for even the most sensitive skin types." },
                { q: "How long does the deodorant last after application?", a: "A single application provides 24-hour odor protection. The mineral barrier remains effective throughout the day, even during intense physical activity." },
                { q: "What flavors are available?", a: "Currently, Dr. Deodorant is available in its Original (Unscented) variant. We're excited to share that new naturally inspired variants are coming soon, including Aloe Vera, Turmeric, Mango, Coconut, and Mangosteen." },
                { q: "What is the shelf life of Dr. Deodorant?", a: "Dr. Deodorant has a shelf life of 3 years from the date of manufacturing when stored properly. With daily use, a single crystal typically lasts 3 to 6+ months, depending on usage conditions—making it 3–6× longer lasting than natural deodorants." },
                { q: "Is it cruelty-free?", a: "Yes! Dr. Deodorant is 100% cruelty-free and vegan. We never test on animals and our products contain no animal-derived ingredients." },
                { q: "Can I use it after shaving?", a: "We recommend waiting 15-30 minutes after shaving before application, as freshly shaved skin may be more sensitive. The natural formula is gentle, but allowing skin to calm ensures maximum comfort." },
                { q: "Where can I buy Dr. Deodorant?", a: "You can purchase directly from our official website or from our selected online and offline partners. We recommend buying from authorized sources to ensure authenticity." }
              ].map((faq, idx) => (
                <div key={idx} className={`accordion-item border-b border-outline-variant/30 py-6 cursor-pointer group ${activeAccordion === idx ? 'active' : ''}`} onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}>
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-[#0a2544] group-hover:text-[#0a2544] transition-colors">{faq.q}</h3>
                    <span className="material-symbols-outlined accordion-icon transition-transform text-[#0a2544]">add</span>
                  </div>
                  <div className="accordion-content">
                    <p className="pt-4 text-[#0a2544]">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group h-full reveal-on-scroll">
            <div className="sticky top-32 bg-primary rounded-[2rem] overflow-hidden shadow-2xl p-12 flex flex-col items-center text-center justify-center min-h-[500px]">
              <div className="absolute inset-0 opacity-20">
                <img className="w-full h-full object-cover grayscale" src="/img3.png" />
              </div>
              <div className="relative z-10 space-y-8">
                <p className="text-xs font-bold text-[#0a2544] uppercase tracking-[0.2em]">Scientific Consultation • Mon—Sat, 9am—6pm</p>
                <h3 className="text-4xl font-bold text-[#0a2544] leading-tight">Speak with a Specialist</h3>
                <p className="text-[#0a2544]/80 max-w-sm mx-auto">Get personalized advice on transitioning to mineral-based hygiene based on your skin type.</p>
                <button className="bg-white text-[#0a2544] px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-brand-bg transition-colors flex items-center gap-2 mx-auto">
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
