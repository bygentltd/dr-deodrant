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
  ];

  return (
    <section className="w-full bg-[#EAF5FF]">
      <div className="py-24 px-8 md:px-16 max-w-container-max mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-start">
        <div className="space-y-12">
          <div className="reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a2544] leading-tight">All Your Queries Answered.</h2>
            <p className="text-lg text-[#0a2544] mt-4">Professional answers for your mineral skincare journey.</p>
          </div>
          <div className="reveal-on-scroll">
            <Accordion multiple={false} className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-outline-variant/30 py-2">
                  <AccordionTrigger className="text-xl font-bold text-[#0a2544] hover:no-underline hover:text-[#0a2544]/80 transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#0a2544] font-bold leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        <div className="relative group h-full reveal-on-scroll">
          <div className="sticky top-32 rounded-[2rem] overflow-hidden shadow-2xl p-12 flex flex-col items-center text-center justify-center min-h-125">
            <div className="absolute inset-0 opacity-90">
              <img className="w-full h-full object-cover" src="/DRDEO11.webp" alt="Contact" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
