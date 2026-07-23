"use client"
import Link from "next/link";
import { FlowButton } from "@/components/ui/flow-button";
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
import ImageSectionComp from "@/components/sections/image-section-comp";
import ImageCarousel from "@/components/sections/image-carousel";
import MeetTheFounder from "@/components/sections/meet-the-founders";
import { CertificateSection } from "@/components/sections/certificate-section";
import PureIngredientsSection from "@/components/sections/pure-ingredients-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative z-10 -mt-16 md:-mt-28 bg-[#F5FBFF] rounded-t-[3rem] md:rounded-t-[7rem] overflow-hidden">
        <InfiniteCarousel />
        <PhilosophySection />
        <StatsSection />
        <FeaturedProductSection />
        {/* Desktop View */}
        <div className="hidden md:block">
          <ImageSectionComp src="/HOME_21.webp" />
        </div>

        {/* Dynamic Mobile Responsive Ingredients Section */}
        <PureIngredientsSection />

        <div className="hidden md:block">
          <ImageSectionComp src="/HOME_HOW.webp" />
        </div>

        {/* Mobile View */}
        <div className="block md:hidden">
          <ImageCarousel
            images={["/Result_1.webp", "/Result_2.webp", "/Result_3.webp"]}
            title="Visible Results, Real Confidence"
            subtitle="Brighter, smoother underarms in just 21 days"
            bgColor="#eaf5ff"
          />
          <ImageCarousel
            images={["/HTU_1.webp", "/HTU_2.webp", "/HTU_3.webp"]}
            title="How To Use?"
          />
        </div>
        {/* <MajorFeaturesSection/>
        <BentoGridSection /> */}
        <ServicesSection />
      </div>
      <CertificateSection />
      <MeetTheFounder />
      <FixedHeroSection />
      <TestimonialSection />
      <FaqSection />
    </>
  );
}
