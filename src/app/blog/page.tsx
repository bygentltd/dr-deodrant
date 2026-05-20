import Link from "next/link";

export default function BlogGrid() {
  return (
    <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
      {/* Hero Title Section */}
      <section className="py-20 md:py-32 text-center">
        <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-clinical-blue mb-4 block">Journal & Insights</span>
        <h1 className="font-display-lg text-display-lg text-deep-navy mb-6">The Science of Clean</h1>
        <p className="max-w-2xl mx-auto font-body-lg text-body-lg text-on-surface-variant">Exploring the intersection of mineral science, personal care, and the art of modern hygiene.</p>
      </section>
      
      {/* Featured Article */}
      <section className="mb-32">
        <Link href="/blog/the-science-of-clean" className="relative group cursor-pointer overflow-hidden rounded-xl bg-white border border-clinical-blue/10 flex flex-col md:flex-row h-auto md:h-[600px] block">
          <div className="w-full md:w-7/12 h-[300px] md:h-full overflow-hidden">
            <img alt="Microscopic view of alum crystal" className="w-full h-full object-cover grayscale-[0.3] group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmU073OriK1U2udy3GahJrnVk5rv_DSuH5FAl5pRM_ex4Erg6mCbhDeqSl_Wyy9EyP2eErJYNtyCMPwmVkX5ph-GV5HYVoC3rx0kMWMjkhqjNMiPO1uVU13Nrqaik7DFmHAG0YFkTZauj8OujRT-ca3UUUinbRrMIgTgSkXON06gZjkUUykL_rzugAZpewKiKigc7Hnl3qOSpUATBZUOZBPZey4gjghZ0mO5epJpZ36R3UW0GguiW_vN7FPgO6YCOdDQhiZyuQspjR" />
          </div>
          <div className="w-full md:w-5/12 p-8 md:p-16 flex flex-col justify-center bg-ice-glimmer">
            <span className="font-label-sm text-label-sm text-clinical-blue mb-4">Featured Article · Research</span>
            <h2 className="font-headline-lg text-headline-lg text-deep-navy mb-6 leading-tight">The Molecular Architecture of Mineral Protection</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">An in-depth look at how potassium alum interacts with the skin’s microbiome to provide 24-hour odor protection without blocking pores.</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-deep-navy flex items-center justify-center text-white font-label-sm">DR</div>
              <div>
                <p className="font-label-sm text-label-sm text-deep-navy">Dr. Julian Vane</p>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Chief of Research</p>
              </div>
            </div>
          </div>
        </Link>
      </section>
      
      {/* Blog Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-32">
        {/* Research Post */}
        <article className="md:col-span-4 bento-hover bg-white border border-clinical-blue/5 rounded-lg overflow-hidden flex flex-col h-full reveal-on-scroll">
          <div className="h-64 overflow-hidden">
            <img alt="Laboratory research" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxCQYNqBO81YifWaGqWz8dC8LEOKd4AwskGgA3ATdPywiBAX5UUZOFX0GHP4eKS72x2iWrGsGidFkGBZyfKoawDknWBgAR6cy9z1EdcncuOrKlv0_V40AkQ3dQVcn9L5H9svI9U-qOSu-C8XonkW__XkqfLww5ruW57uYSaNtKEebjkEZZEn1Gbyp0szpuXfx_Ev9R3uS7tGUAh83KySy7lBHscMuSqLHo8tFpQy7zsHoy3Dd78-_LuWMqcPen-im8L7A7vJlZsT5i" />
          </div>
          <div className="p-8 flex flex-col flex-grow">
            <span className="font-label-sm text-label-sm text-tertiary mb-3">Research</span>
            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">Synthetic vs. Natural: The Aluminum Myth</h3>
            <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Deconstructing the chemistry between complex chlorohydrates and simple mineral salts.</p>
            <Link className="mt-6 font-label-sm text-label-sm text-clinical-blue flex items-center gap-2 group" href="/blog/synthetic-vs-natural">
              Read Investigation
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </article>
        
        {/* Ritual Post */}
        <article className="md:col-span-8 bento-hover bg-tertiary-container/30 border border-clinical-blue/5 rounded-lg overflow-hidden flex flex-col md:flex-row reveal-on-scroll">
          <div className="md:w-1/2 p-12 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-tertiary mb-3">Ritual</span>
            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">The 60-Second Application: A Guide to Mineral Efficacy</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">Maximize the crystal’s barrier through proper hydration and surface preparation techniques.</p>
            <Link className="mt-8 font-label-sm text-label-sm text-clinical-blue flex items-center gap-2 group" href="/blog/60-second-application">
              Discover the Ritual
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="md:w-1/2 h-80 md:h-full">
            <img alt="Water ripples on glass" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAirCfWPmoAaU3Kwx0np7Rxk7fvuvVGabnZ24Mtf3sPw2AbIWKqvBna3tG5s5AzTe2d_Ss13KyKkSdHf7bf82V6I9MU8jvSzi65e0ZFL0kfUruzbp61xWVGab6OfkjWG26MrY4k-4_Cbm416Vbw_hMJ8UB_G7DQEFyg6PkuhKZ4MvuF4ANa47a8ejcid_GaVMtrOkWa3kJdHGFw9tO-perNuJMDkEnNjwebeyQSikSA6rOnMJsU8t597DWKN_yDdscghckWDS1aR23_" />
          </div>
        </article>
        
        {/* Science Post */}
        <article className="md:col-span-7 bento-hover bg-white border border-clinical-blue/5 rounded-lg overflow-hidden flex flex-col md:flex-row reveal-on-scroll">
          <div className="md:w-2/5 h-64 md:h-auto">
            <img alt="Microscopic texture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAd4GFZKIM8q3mL_5OHNNgAdZiZ0vW-1pE0VJXv8ytPqDZrfCs1nBjJsORXz3oqTdHmOHsBNz_XZ4R7E5EW-cQIZsht-7A70hadMX4QUyfOQANqG4GERgyig3SftT_UmAHwBFFIt8ct4rpOr-zqtyIHlqlw8VcCwhz_M9opOTUHRCj5VTLubQobgX99e5YCdXHUugFwvnEViolwprCGUoK3W6mle9Lu4CzbY0p-3A9ulU2rYpV4s_jeuSffTwEjIgF6gIh8gqOedfgY" />
          </div>
          <div className="md:w-3/5 p-12 flex flex-col justify-center">
            <span className="font-label-sm text-label-sm text-tertiary mb-3">Science</span>
            <h3 className="font-headline-md text-headline-md text-deep-navy mb-4">The Microbiome Balance</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">How Dr. Deodrant preserves beneficial skin bacteria while eliminating odor-causing strains.</p>
            <Link className="mt-6 font-label-sm text-label-sm text-clinical-blue flex items-center gap-2 group" href="/blog/microbiome-balance">
              View Study
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        </article>
        
        {/* Small Post */}
        <article className="md:col-span-5 bento-hover bg-deep-navy p-12 rounded-lg flex flex-col justify-center reveal-on-scroll">
          <span className="font-label-sm text-label-sm text-ice-glimmer/60 mb-3 uppercase tracking-widest">Sustainability</span>
          <h3 className="font-headline-md text-headline-md text-ice-glimmer mb-6">Zero-Waste Mineral Mining</h3>
          <p className="font-body-md text-body-md text-ice-glimmer/80 mb-8">Our commitment to 100% plastic-free sourcing and the ethics of alum extraction.</p>
          <Link href="/blog/sustainability" className="w-fit px-8 py-3 bg-ice-glimmer text-deep-navy font-label-sm text-label-sm rounded-full transition-transform active:scale-95 text-center">Read Report</Link>
        </article>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-24 border-y border-clinical-blue/10 flex flex-col md:flex-row items-center justify-between gap-12 mb-32 reveal-on-scroll">
        <div className="max-w-md">
          <h2 className="font-headline-md text-headline-md text-deep-navy mb-4">Stay Clean, Stay Informed</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">Join our curated list for monthly research papers and early product access.</p>
        </div>
        <form className="flex w-full md:w-auto gap-4">
          <input className="flex-grow md:w-80 bg-white border-b border-clinical-blue/30 focus:border-clinical-blue focus:ring-0 px-4 py-3 outline-none font-body-md text-body-md" placeholder="Your Email Address" type="email" />
          <button className="bg-deep-navy text-white px-10 py-3 font-label-sm text-label-sm uppercase tracking-widest hover:opacity-90 transition-opacity">Subscribe</button>
        </form>
      </section>
    </div>
  );
}
