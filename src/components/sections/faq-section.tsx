"use client";

import { useRevealOnScroll } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  useRevealOnScroll();

  const faqs = [
    { q: "What is Dr. Deodrant made of?", a: "Dr. Deodrant is formulated with potassium aluminum sulfate (alum), water, and natural fruit extracts including acerola and kiwi, enriched with vitamins C and E. It is completely unscented and contains no artificial fragrances, masking agents, parabens, or harsh additives, offering gentle, effective odour protection with skin-loving benefits." },
    { q: "How is it different from regular deodorants?", a: "Unlike conventional deodorants that mask odor with fragrances or block sweat glands with chemicals, Dr. Deodrant creates an invisible mineral barrier that prevents odor-causing bacteria from forming. It's completely natural and leaves no residue or stains." },
    { q: "How do I use Dr. Deodrant?", a: "Simply wet the crystal with water and glide it over clean underarms. Allow to dry naturally. For best results, apply immediately after showering when pores are open." },
    { q: "Is Dr. Deodrant safe for sensitive skin?", a: "Absolutely! Our crystal formula is hypoallergenic and dermatologist-tested. It contains no irritants, making it perfect for even the most sensitive skin types." },
    { q: "How long does Dr. Deodrant last with daily use? ", a: "With daily use, a single crystal typically lasts 3 to 6+ months, depending on usage conditions — making it 3-6x longer lasting than natural deodorants." },
    { q: "What flavors are available?", a: "Currently, Dr. Deodrant is available in its Original (Unscented) variant. We're excited to share that new naturally inspired variants are coming soon, including Aloe Vera, Turmeric, Mango, Coconut, and Mangosteen." },
    { q: "What is the shelf life of Dr. Deodrant?", a: "Dr. Deodrant has a shelf life of 3 years from the date of manufacturing when stored properly. With daily use, a single crystal typically lasts 3 to 6+ months, depending on usage conditions—making it 3–6× longer lasting than natural deodorants." },
    { q: "Is it cruelty-free?", a: "Yes! Dr. Deodrant is 100% cruelty-free and vegan. We never test on animals and our products contain no animal-derived ingredients." },
    { q: "Can I use it after shaving?", a: "Absolutely! Dr. Deodrant is safe to use after shaving. The natural formula is gentle on freshly shaved skin, ensuring maximum comfort." },
    { q: "Where can I buy Dr. Deodrant?", a: "You can purchase directly from our official website or from our selected online and offline partners. We recommend buying from authorized sources to ensure authenticity." }
  ];

  return (
    <section id="faqs" className="w-full bg-[#F5FBFF]">
      <div className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
        <div className="space-y-8 sm:space-y-12">
          <div className="reveal-on-scroll text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-[#003286] leading-tight">All Your Queries Answered.</h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-3 sm:mt-4">Professional answers for your mineral skincare journey.</p>
          </div>
          <div className="reveal-on-scroll">
            <Accordion className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-[#003286]/10 py-2">
                  <AccordionTrigger className="text-[15px] sm:text-lg lg:text-xl font-bold text-gray-600 hover:no-underline hover:text-[#003286] transition-colors text-left pr-2">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14px] sm:text-base text-[#0f1216]/80 leading-relaxed pt-1 pb-4">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="relative group h-full reveal-on-scroll cursor-pointer w-full max-w-md mx-auto md:max-w-none">
          <div className="sticky top-24 sm:top-32 rounded-2xl sm:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col items-center text-center justify-center h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
            <div className="absolute inset-0 opacity-90">
              <img 
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                src="/DRDEO11.webp" 
                alt="Contact" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
