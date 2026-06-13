export default function TheBeginning() {
  return (
    <section className="bg-[#F5FBFF] px-4 sm:px-6 py-32 sm:py-20 md:py-40 md:px-32 lg:px-32 font-sans w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] font-medium text-[#003286] mb-10 md:mb-16 tracking-tight w-[85%] sm:w-[80%] md:w-full mx-auto md:mx-0">
          The Beginning
        </h1>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 w-[85%] sm:w-[80%] md:w-full mx-auto md:mx-0">

          {/* Left Column: Badge */}
          <div className="md:col-span-4 lg:col-span-4 flex items-start">
            <span className="inline-flex items-center rounded-full bg-[#003286] px-4 py-1.5 text-[13px] sm:text-sm font-medium text-[#ffffff] tracking-wide">
              Our Approach
            </span>
          </div>

          {/* Right Column: Text Content */}
          <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6 md:gap-10">
            {/* Primary Paragraph */}
            <p className="font-inter text-[15px] sm:text-base leading-relaxed md:leading-normal text-justify text-[#4a4a4a] max-w-3xl">
              Walk down any pharmacy aisle and you're confronted with dozens of deodorants making the same promises. Bold-labelled claims. Chemical lists no one can pronounce. And shelves full of products that leave your skin darker, drier, and more irritated than before you started. <b>We believed there had to be a better way — one rooted in nature, not a laboratory.</b>
            </p>
            <p className="font-inter text-[15px] sm:text-base text-justify leading-relaxed md:leading-normal text-[#4a4a4a] max-w-3xl">
              Dr. Deodrant was born from that frustration. We went back to the mineral that's protected skin for generations — alum crystal — and paired it with the best of what nature offers: real Vitamin C from acerola and kiwi fruit, and nourishing Vitamin E. Clean ingredients. Honest results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}