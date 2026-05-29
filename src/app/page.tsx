import { HeroSection } from "@/components/sections/hero-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { StatsSection } from "@/components/sections/stats-section";
import { BentoGridSection } from "@/components/sections/bento-grid-section";
import { FeaturedProductSection } from "@/components/sections/featured-product-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { FaqSection } from "@/components/sections/faq-section";
import InfiniteCarousel from "@/components/sections/infinite-carousel";
import { MajorFeaturesSection } from "@/components/sections/major-feature-section";
import { FixedHeroSection } from "@/components/sections/fixed-hero-section";
import { ServicesSection } from "@/components/sections/services-section";
import HowToUse from "@/components/sections/how-to-use";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 -mt-16 md:-mt-28 bg-[#EAF5FF] rounded-t-[3rem] md:rounded-t-[7rem] overflow-hidden">
        <InfiniteCarousel />
        <PhilosophySection />
        <StatsSection />
        <FeaturedProductSection />
        <HowToUse/>
        <MajorFeaturesSection/>
        <BentoGridSection />
        <ServicesSection/>
      </div>
      <FixedHeroSection/>
      <TestimonialSection />
      <FaqSection />
    </>
  );
}
