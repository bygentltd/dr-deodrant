export default function OurProcess() {
  const principles = [
    {
      number: "01",
      title: "Carefully Sourced",
      description:
        "Pharmaceutical-grade alum crystal, real acerola, kiwi extract, and skin-nourishing vitamins. Every ingredient earns its place.",
    },
    {
      number: "02",
      title: "Thoughtfully Formulated",
      description:
        "Cold-process blending preserves the potency of every active ingredient, no shortcuts, no fillers, no compromise.",
    },
    {
      number: "03",
      title: "Quality Assured",
      description:
        "Each batch is tested before it leaves the facility. What reaches your skin has already passed our standards, not just the industry's.",
    },
  ];

  const images = [
    "Process_Step1.webp",
    "Process_Step2.webp",
    "Process_Step3.webp",
  ];

  return (
    <section className="bg-[#EAF5FF] px-6 py-16 md:py-32 md:px-12 font-sans w-full">
      <div className="max-w-7xl mx-auto w-full">
        {/* Main Heading */}
        <div className="max-w-3xl mb-8 md:mb-14 process-reveal w-full">
          <div className="inline-flex items-center rounded-full bg-[#003286] px-4 py-1.5 text-[13px] sm:text-sm font-medium text-[#ffffff] tracking-wide mb-4 md:mb-5">
            Our Process
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[3rem] lg:text-[4rem] font-medium text-[#003286] tracking-tight">
            Our Process
          </h1>
        </div>

        {/* Top Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-16 mb-16 md:mb-32 process-reveal process-reveal-delay-1 w-full">
          <div className="md:col-span-8 lg:col-span-8 flex flex-col gap-6 md:gap-8">
            <p className="text-[15px] sm:text-base font-inter md:text-xl leading-relaxed text-justify text-[#4a4a4a] max-w-2xl">
              Every Dr. Deodrant crystal begins with pharmaceutical-grade alum sourced from trusted mineral suppliers. This is combined with water, real acerola, kiwi fruit extracts, Vitamins C and E through a careful cold-process formulation that preserves the integrity of every active ingredient.
            </p>
            <p className="text-[15px] sm:text-base font-inter md:text-xl leading-relaxed text-justify text-[#4a4a4a] max-w-2xl">
              Each batch is quality-tested before being poured into its smooth-finish casing. The process takes longer than conventional deodorant manufacturing, but that's the point. We're not cutting corners on something you apply to your skin every single day.
            </p>
          </div>


        </div>

        {/* Bottom Grid: Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-16 process-grid">
          {principles.map((principle, idx) => (
            <div key={principle.number} className="process-card flex flex-col">
              <div className="mb-5 md:mb-6 relative">
                <div className="process-number-badge absolute -top-3 -left-2 md:-top-4 md:left-4 z-10 inline-flex items-center justify-center rounded-full bg-[#003286] px-3 py-1 md:px-4 md:py-1.5 text-[12px] md:text-sm font-medium text-white shadow-lg">
                  Step {principle.number}
                </div>
                <img
                  src={images[idx]}
                  alt={principle.title}
                  className="w-full aspect-square rounded-[1.4rem] object-cover process-image"
                />
              </div>
              <div className="w-full">
                {/* Header Row with Title and Number */}
                <div className="flex justify-between items-end pb-3 mb-2 md:mb-4 border-b border-[#313131]/20 process-title-row">
                  <h3 className="text-[17px] sm:text-lg md:text-2xl font-bold text-[#313131]">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-[14px] sm:text-[15px] text-[#4a4a4a] leading-relaxed text-justify">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .process-reveal {
          animation: processFadeUp 900ms ease both;
        }

        .process-reveal-delay-1 {
          animation-delay: 160ms;
        }

        .process-grid .process-card {
          position: relative;
          animation: processCardIn 900ms ease both, processFloat 7.5s ease-in-out infinite;
        }

        .process-grid .process-card:nth-child(1) {
          animation-delay: 220ms, 0ms;
        }

        .process-grid .process-card:nth-child(2) {
          animation-delay: 420ms, 900ms;
        }

        .process-grid .process-card:nth-child(3) {
          animation-delay: 620ms, 1800ms;
        }

        .process-image {
          transform: translateY(0);
          transition: transform 500ms ease, box-shadow 500ms ease, filter 500ms ease;
          box-shadow: 0 18px 40px rgba(32, 57, 86, 0.12);
        }

        .process-card:hover .process-image {
          transform: translateY(-6px) scale(1.01);
          filter: saturate(1.04) contrast(1.03);
          box-shadow: 0 22px 52px rgba(32, 57, 86, 0.18);
        }

        .process-card::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: 1px;
          height: 22px;
          transform: translate(-50%, -100%);
          background: linear-gradient(to bottom, rgba(32, 57, 86, 0), rgba(32, 57, 86, 0.25));
          opacity: 0.85;
        }

        .process-card:nth-child(1)::after {
          display: none;
        }

        .process-number-badge {
          animation: badgePulse 3.8s ease-in-out infinite;
        }

        .process-orbit {
          animation: orbitFloat 7s ease-in-out infinite;
        }

        .process-orbit-ring {
          background:
            radial-gradient(circle at center, rgba(32, 57, 86, 0.06) 0 1px, transparent 1px 100%),
            radial-gradient(circle at center, rgba(32, 57, 86, 0.08) 0 2px, transparent 2px 100%);
          mask-image: radial-gradient(circle, black 44%, transparent 72%);
          animation: orbitRotate 14s linear infinite;
        }

        @keyframes processFadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes processCardIn {
          from {
            opacity: 0;
            transform: translateY(22px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes processFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes badgePulse {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0 10px 24px rgba(32, 57, 86, 0.18);
          }
          50% {
            transform: translateY(-1px) scale(1.03);
            box-shadow: 0 14px 28px rgba(32, 57, 86, 0.24);
          }
        }

        @keyframes orbitFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes orbitRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}