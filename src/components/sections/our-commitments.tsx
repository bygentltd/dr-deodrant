export default function OurCommitments() {
  const commitments = [
    {
      id: "01",
      title: "Your Skin",
      description:
        "We never test on animals, and every ingredient was chosen with your long-term skin health in mind. Dr. Deodrant doesn't create dependency, doesn't strip your skin's natural balance, and doesn't leave behind residue your body has to deal with. Just clean, daily care you can feel good about.",
      image:
        "St4.webp",
      alt: "Close up of glowing skin",
    },
    {
      id: "02",
      title: "Our Planet",
      description:
        "Our packaging is recyclable and we're continuously working to reduce our environmental footprint. A crystal that lasts 6–8 months already means dramatically less packaging waste compared to disposable spray or roll-on alternatives, and we're committed to doing even more.",
      image:
        "St5.webp",
      alt: "Glass orb reflecting a natural landscape",
    },
    {
      id: "03",
      title: "Transparency",
      description:
        "We'll never add an ingredient for marketing appeal or hide something behind a trade name. What you see on the label is everything that's in the product. Because you deserve to know exactly what you're putting on your skin.",
      image:
        "St6.webp",
      alt: "Lab glassware from above",
    },
  ];

  return (
    <section className="bg-[#F5FBFF] px-4 sm:px-6 py-16 md:py-32 md:px-16 lg:px-24 font-sans w-full">
      <div className="max-w-[1400px] mx-auto w-full">
        {/* Main Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] font-medium text-[#313131] mb-10 md:mb-16 tracking-tight w-[85%] sm:w-[80%] md:w-full mx-auto md:mx-0">
          Our Commitments
        </h2>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {commitments.map((item) => (
            <div key={item.id} className="flex flex-col group cursor-pointer">
              
              {/* Image Container with Hover Zoom Effect */}
              <div className="w-[85%] sm:w-[80%] md:w-full mx-auto aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl md:rounded-[2rem] mb-5 md:mb-8 bg-[#e4e7dd]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="w-[85%] sm:w-[80%] md:w-full mx-auto">
                {/* Title and Number Row */}
                <div className="flex justify-between items-end pb-3 mb-3 md:mb-4 border-b border-[#313131]/20">
                  <h3 className="text-[17px] sm:text-lg md:text-2xl font-medium text-[#313131]">
                    {item.title}
                  </h3>
                  <span className="text-base sm:text-lg md:text-xl font-medium text-[#313131]">
                    {item.id}
                  </span>
                </div>

                {/* Description Text */}
                <p className="text-[14px] sm:text-[15px] md:text-base font-inter text-justify leading-relaxed text-[#4a4a4a]">
                  {item.description}
                </p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}