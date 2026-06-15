export default function OurPhilosophy() {
  const principles = [
    {
      number: "01",
      title: "Mineral Integrity",
      description:
        "We trust what nature perfected. Alum crystal has been used across cultures for centuries precisely because it works. We haven't reinvented it - we've respected it, and added the best clean botanicals to make it even better for modern skin.",
    },
    {
      number: "02",
      title: "Radical Transparency",
      description:
        "Our formula has exactly 5 ingredients. Every single one is listed, named, and explained — no trade names, no hidden chemicals, no fine print. If it's on your skin, you'll know what it is and why it's there.",
    },
    {
      number: "03",
      title: "Inclusive Care ",
      description:
        "Made for all. Loved by all. Dr. Deodrant was designed without gender, age, or skin-type limitations. If you have underarms, this product was made for you.",
    },
  ];

  const images = [
    "/St1.webp",
    "/St2.webp",
    "/St3.webp",
  ];

  return (
    <section className="bg-[#F5FBFF] px-6 py-16 md:py-32 md:px-12 font-sans w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] font-medium text-[#003286] mb-10 md:mb-24 tracking-tight w-full">
          Our Philosophy
        </h1>

        {/* Top Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 mb-16 md:mb-32 w-full">
          {/* Left Column: Badge */}
          <div className="md:col-span-4 lg:col-span-4 flex items-start">
            <span className="inline-flex items-center rounded-full bg-[#003286] px-4 py-1.5 text-[13px] sm:text-sm font-medium text-[#ffffff] tracking-wide">
              Our Core Principles
            </span>
          </div>

          {/* Right Column: Intro Text */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6 md:gap-8">
            <p className="text-[15px] sm:text-base font-inter md:text-xl leading-relaxed text-left sm:text-justify text-[#4a4a4a] max-w-2xl">
              Dr. Deodrant is built on the belief that skincare, even for your underarms should be pure, effective, and kind. We reject the industry's habit of loading products with chemicals designed to mask problems rather than address them. Everything we do follows three principles:
            </p>
          </div>
        </div>

        {/* Bottom Grid: Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16 philosophy-grid">
          {principles.map((principle, idx) => (
            <div key={principle.number} className="flex flex-col philosophy-card">
              <div className="mb-5 md:mb-6">
                <img
                  src={images[idx]}
                  alt={principle.title}
                  className="w-full aspect-square rounded-xl object-cover philosophy-image"
                />
              </div>
              <div className="w-full">
                {/* Header Row with Title and Number */}
                <div className="flex justify-between items-end pb-3 mb-3 md:mb-4 border-b border-[#313131]/20">
                  <h3 className="text-[17px] sm:text-lg md:text-2xl font-bold text-[#313131]">
                    {principle.title}
                  </h3>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-[#313131]">
                    {principle.number}
                  </span>
                </div>
                {/* Description */}
                <p className="text-[14px] sm:text-[15px] md:text-base font-inter text-justify leading-relaxed text-[#4a4a4a]">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .philosophy-grid .philosophy-card {
          position: relative;
          animation: philosophyCardIn 900ms ease both, philosophyFloat 7.5s ease-in-out infinite;
        }

        .philosophy-grid .philosophy-card:nth-child(1) {
          animation-delay: 220ms, 0ms;
        }

        .philosophy-grid .philosophy-card:nth-child(2) {
          animation-delay: 420ms, 900ms;
        }

        .philosophy-grid .philosophy-card:nth-child(3) {
          animation-delay: 620ms, 1800ms;
        }

        .philosophy-image {
          transform: translateY(0);
          transition: transform 500ms ease, box-shadow 500ms ease, filter 500ms ease;
          box-shadow: 0 18px 40px rgba(32, 57, 86, 0.12);
        }

        .philosophy-card:hover .philosophy-image {
          transform: translateY(-6px) scale(1.01);
          filter: saturate(1.04) contrast(1.03);
          box-shadow: 0 22px 52px rgba(32, 57, 86, 0.18);
        }

        @keyframes philosophyCardIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes philosophyFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}