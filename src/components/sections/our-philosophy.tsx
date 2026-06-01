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
    <section className="bg-[#EAF5FF] px-6 py-24 md:py-32 md:px-16 lg:px-32 font-sans w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-[3rem] lg:text-[4rem] font-medium text-[#203956] mb-16 md:mb-24 tracking-tight">
          Our Philosophy
        </h1>

        {/* Top Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          {/* Left Column: Badge */}
          <div className="md:col-span-4 lg:col-span-4 flex items-start">
            <span className="inline-flex items-center rounded-full bg-[#203956] px-4 py-1.5 text-sm font-medium text-[#ffffff] tracking-wide">
              Our Core Principles
            </span>
          </div>

          {/* Right Column: Intro Text */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-8">

            <p className="text-lg font-inter md:text-xl leading-relaxed text-justify  text-[#4a4a4a] max-w-2xl">
              Dr. Deodrant is built on the belief that skincare, even for your underarms should be pure, effective, and kind. We reject the industry's habit of loading products with chemicals designed to mask problems rather than address them. Everything we do follows three principles:
            </p>
            
          </div>
        </div>

        {/* Bottom Grid: Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {principles.map((principle, idx) => (
            <div key={principle.number} className="flex flex-col">
              <div className="mb-6">
                <img
                  src={images[idx]}
                  alt={principle.title}
                  className="w-full aspect-square rounded-xl object-cover"
                />
              </div>
              {/* Header Row with Title and Number */}
              <div className="flex justify-between items-end pb-3 mb-4 border-b border-[#313131]/20">
                <h3 className="text-lg md:text-2xl font-bold text-[#313131]">
                  {principle.title}
                </h3>
                <span className="text-lg md:text-xl font-medium text-[#313131]">
                  {principle.number}
                </span>
              </div>
              {/* Description */}
              <p className="text-sm md:text-base font-inter text-justify leading-relaxed text-[#4a4a4a]">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}