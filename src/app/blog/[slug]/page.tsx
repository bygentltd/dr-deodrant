import Link from "next/link";

export default function BlogArticle({ params }: { params: { slug: string } }) {
  return (
    <>
      {/* 2. Article Hero */}
      <section className="pt-24 md:pt-32 pb-16 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto text-center reveal-on-scroll">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Link className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-clinical-blue transition-colors" href="/blog">Research</Link>
          <span className="text-outline-variant">•</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">Oct 12, 2024</span>
          <span className="text-outline-variant">•</span>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline">8 Min Read</span>
        </div>
        <h1 className="font-display-lg text-display-lg text-deep-navy mb-8 max-w-4xl mx-auto leading-tight">The Molecular Architecture of Mineral Protection</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">An in-depth look at how potassium alum interacts with the skin’s microbiome to provide 24-hour odor protection without blocking pores.</p>
        
        {/* Author Badge */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="w-12 h-12 rounded-full bg-deep-navy flex items-center justify-center text-white font-label-sm">DR</div>
          <div className="text-left">
            <p className="font-label-sm text-label-sm text-deep-navy">Dr. Julian Vane</p>
            <p className="text-[11px] text-on-surface-variant uppercase tracking-wider">Chief of Research, Dr. Deodrant</p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <div className="w-full h-[50vh] md:h-[70vh] px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 reveal-on-scroll">
        <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-container shadow-2xl">
          <img alt="Microscopic view of alum crystal" className="w-full h-full object-cover grayscale-[0.2]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmU073OriK1U2udy3GahJrnVk5rv_DSuH5FAl5pRM_ex4Erg6mCbhDeqSl_Wyy9EyP2eErJYNtyCMPwmVkX5ph-GV5HYVoC3rx0kMWMjkhqjNMiPO1uVU13Nrqaik7DFmHAG0YFkTZauj8OujRT-ca3UUUinbRrMIgTgSkXON06gZjkUUykL_rzugAZpewKiKigc7Hnl3qOSpUATBZUOZBPZey4gjghZ0mO5epJpZ36R3UW0GguiW_vN7FPgO6YCOdDQhiZyuQspjR" />
        </div>
        <p className="text-center font-label-sm text-label-sm text-outline mt-4 italic">Fig 1. Potassium alum crystalline structure at 400x magnification.</p>
      </div>

      {/* 3. Article Content */}
      <article className="w-full max-w-[800px] mx-auto px-margin-mobile pb-32">
        <div className="space-y-8 font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          
          <p className="first-letter:text-7xl first-letter:font-display-lg first-letter:text-deep-navy first-letter:mr-3 first-letter:float-left">
            For decades, the personal care industry has relied on synthetic chlorohydrates to combat body odor. These compounds function by aggressively blocking sweat ducts, a process that inherently disrupts the body's natural cooling and detoxification systems. The paradigm shift towards clinical mineral protection, specifically utilizing pure potassium alum, represents not just a natural alternative, but a fundamentally different approach to hygiene chemistry.
          </p>

          <h2 className="font-headline-md text-headline-md text-deep-navy pt-8 pb-4">The Fallacy of Antiperspirants</h2>
          <p>
            To understand the efficacy of Dr. Deodrant's core ingredient, we must first understand the mechanism we are replacing. Traditional antiperspirants utilize aluminum salts (like aluminum zirconium) that dissolve into the skin's moisture, forming a gel plug that physically blocks the eccrine glands.
          </p>
          <p>
            While effective at stopping moisture, this creates an anaerobic environment. When the plug eventually breaks down, it can cause severe irritation, clothing stains (from the reaction of synthetic aluminum with sweat), and disruption of the epidermal barrier.
          </p>

          {/* Inline Quote Block */}
          <blockquote className="my-12 py-8 border-y border-clinical-blue/20 text-center reveal-on-scroll">
            <p className="font-headline-md text-2xl md:text-3xl text-clinical-blue italic font-light mb-4">"We are not trying to stop the body from functioning. We are trying to harmonize with its processes to prevent the bacterial breakdown that causes odor."</p>
            <cite className="font-label-sm text-label-sm text-deep-navy uppercase tracking-widest not-italic">— Dr. Julian Vane</cite>
          </blockquote>

          <h2 className="font-headline-md text-headline-md text-deep-navy pt-8 pb-4">How Potassium Alum Works</h2>
          <p>
            Potassium alum, the active mineral in our crystal, is a naturally occurring double sulfate salt. Its molecular structure is significantly larger than synthetic aluminum chlorohydrate. This size is the key to its safety and efficacy: <strong>it is too large to be absorbed through the skin or block pores.</strong>
          </p>
          
          <div className="my-12 p-8 bg-ice-glimmer border-l-4 border-clinical-blue rounded-r-lg">
            <h4 className="font-label-sm text-label-sm uppercase tracking-widest text-deep-navy mb-4">The Tri-Phase Action</h4>
            <ul className="space-y-4 font-body-md text-body-md text-on-surface-variant list-disc pl-4">
              <li><strong>Deposition:</strong> When applied to damp skin, a microscopic, invisible layer of mineral salt is deposited on the surface.</li>
              <li><strong>Alteration:</strong> This layer slightly lowers the pH of the skin's surface, creating an inhospitable environment for odor-causing bacteria (Corynebacteria).</li>
              <li><strong>Prevention:</strong> Sweating still occurs normally, but without the specific bacteria present to break down the sweat lipids, odor cannot form.</li>
            </ul>
          </div>

          <h2 className="font-headline-md text-headline-md text-deep-navy pt-8 pb-4">Synergy with Superfoods</h2>
          <p>
            While alum provides the protective barrier, Dr. Deodrant’s formula integrates Acerola Extract and Vitamin E to treat the skin beneath. Acerola is rich in ascorbic acid (Vitamin C), which acts as a powerful antioxidant to repair skin damage from previously used harsh chemicals.
          </p>

          <img alt="Acerola extract demonstration" className="w-full rounded-xl my-8 shadow-md" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8_92XK_LfwPPlNcyS3SuFPIGatO6PttSOxwC6cUBmGPzUonImAvDHKI1o1r4YbgiX123nRnbvDIF2ZI_Zyb99n-zKJqtozqz_g_2K6JwpU0-KU7zPAn9TCH14ec_TzaUYkC43tjWYS02VjNrfTV_gGqgP1Cfqksp8qfp5Zed7dVnWm54WWMy4CPwIyqyrwZo5Wg8ROaBDlttcZQR51mYPhFVNZ8hik6854TJK0Mr4rKKay6Qdk1lrzgOJZuuxzQ7eIO7ioyQOm5Tb" />

          <p>
            Vitamin E stabilizes this process, hydrating the underarm tissue and helping to naturally brighten areas that have darkened due to friction or chemical burns from synthetic deodorants.
          </p>
        </div>
        
        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-clinical-blue/10 flex items-center justify-between">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-deep-navy">Share Report</span>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full border border-clinical-blue/20 flex items-center justify-center hover:bg-clinical-blue hover:text-white hover:border-clinical-blue transition-all material-symbols-outlined text-[18px]">link</button>
            <button className="w-10 h-10 rounded-full border border-clinical-blue/20 flex items-center justify-center hover:bg-clinical-blue hover:text-white hover:border-clinical-blue transition-all material-symbols-outlined text-[18px]">mail</button>
          </div>
        </div>
      </article>

      {/* 4. Related Content */}
      <section className="py-24 bg-surface-container-low border-t border-clinical-blue/5">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h3 className="font-headline-lg text-headline-lg text-deep-navy mb-12 text-center">Further Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            
            <Link href="/blog/synthetic-vs-natural" className="bento-hover bg-white rounded-lg overflow-hidden border border-clinical-blue/5 block">
              <div className="h-48 overflow-hidden">
                <img alt="Lab research" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxCQYNqBO81YifWaGqWz8dC8LEOKd4AwskGgA3ATdPywiBAX5UUZOFX0GHP4eKS72x2iWrGsGidFkGBZyfKoawDknWBgAR6cy9z1EdcncuOrKlv0_V40AkQ3dQVcn9L5H9svI9U-qOSu-C8XonkW__XkqfLww5ruW57uYSaNtKEebjkEZZEn1Gbyp0szpuXfx_Ev9R3uS7tGUAh83KySy7lBHscMuSqLHo8tFpQy7zsHoy3Dd78-_LuWMqcPen-im8L7A7vJlZsT5i" />
              </div>
              <div className="p-8">
                <span className="font-label-sm text-label-sm text-tertiary mb-2 block">Research</span>
                <h4 className="font-headline-md text-xl text-deep-navy mb-3">Synthetic vs. Natural</h4>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Deconstructing the chemistry between complex chlorohydrates and simple salts.</p>
              </div>
            </Link>

            <Link href="/blog/60-second-application" className="bento-hover bg-white rounded-lg overflow-hidden border border-clinical-blue/5 block">
              <div className="h-48 overflow-hidden">
                <img alt="Water texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAirCfWPmoAaU3Kwx0np7Rxk7fvuvVGabnZ24Mtf3sPw2AbIWKqvBna3tG5s5AzTe2d_Ss13KyKkSdHf7bf82V6I9MU8jvSzi65e0ZFL0kfUruzbp61xWVGab6OfkjWG26MrY4k-4_Cbm416Vbw_hMJ8UB_G7DQEFyg6PkuhKZ4MvuF4ANa47a8ejcid_GaVMtrOkWa3kJdHGFw9tO-perNuJMDkEnNjwebeyQSikSA6rOnMJsU8t597DWKN_yDdscghckWDS1aR23_" />
              </div>
              <div className="p-8">
                <span className="font-label-sm text-label-sm text-tertiary mb-2 block">Ritual</span>
                <h4 className="font-headline-md text-xl text-deep-navy mb-3">The 60-Second Application</h4>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">Maximize the crystal’s barrier through proper hydration and surface prep.</p>
              </div>
            </Link>

            <Link href="/blog/microbiome-balance" className="bento-hover bg-white rounded-lg overflow-hidden border border-clinical-blue/5 block">
              <div className="h-48 overflow-hidden">
                <img alt="Microscopic texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4GFZKIM8q3mL_5OHNNgAdZiZ0vW-1pE0VJXv8ytPqDZrfCs1nBjJsORXz3oqTdHmOHsBNz_XZ4R7E5EW-cQIZsht-7A70hadMX4QUyfOQANqG4GERgyig3SftT_UmAHwBFFIt8ct4rpOr-zqtyIHlqlw8VcCwhz_M9opOTUHRCj5VTLubQobgX99e5YCdXHUugFwvnEViolwprCGUoK3W6mle9Lu4CzbY0p-3A9ulU2rYpV4s_jeuSffTwEjIgF6gIh8gqOedfgY" />
              </div>
              <div className="p-8">
                <span className="font-label-sm text-label-sm text-tertiary mb-2 block">Science</span>
                <h4 className="font-headline-md text-xl text-deep-navy mb-3">The Microbiome Balance</h4>
                <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">How Dr. Deodrant preserves beneficial skin bacteria while eliminating odor.</p>
              </div>
            </Link>
            
          </div>
        </div>
      </section>
    </>
  );
}
