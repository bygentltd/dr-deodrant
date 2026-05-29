export default function OurProcess() {
  return (
    <section className="bg-[#eaf5ff] w-full py-16 md:py-24 lg:py-32">
      <div className="flex flex-col md:flex-row items-center w-full max-w-[1600px] mx-auto">
        
        {/* Left Column: Static Media Block */}
        {/* Removed sticky positioning and screen-height tracking */}
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-16">
          <div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] relative overflow-hidden rounded-2xl md:rounded-[2rem]">
            <img
              src="/OUR_PROCESS.webp"
              alt="Skincare formulation process"
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
          </div>
        </div>

        {/* Right Column: Static Text */}
        {/* Removed the excessive vertical padding (md:py-[35vh]) used for the scroll effect */}
        <div className="w-full md:w-1/2 flex items-center justify-start px-8 md:px-12 lg:pr-32 py-12 md:py-0">
          <div className="max-w-xl w-full flex flex-col font-sans">
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#313131] mb-8 md:mb-10 tracking-tight">
              Our Process
            </h2>

            <div className="flex flex-col font-inter gap-8 text-base md:text-lg leading-relaxed text-[#4a4a4a]">
              <p>
                Every Dr. Deodrant crystal begins with pharmaceutical-grade alum sourced from trusted mineral suppliers. This is combined with water, real acerola and kiwi fruit extracts, and Vitamins C and E through a careful cold-process formulation that preserves the integrity of every active ingredient.
              </p>
              <p>
                Each batch is quality-tested before being poured into its smooth-finish casing. The process takes longer than conventional deodorant manufacturing, but that's the point. We're not cutting corners on something you apply to your skin every single day.
              </p>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}