"use client"
import MeetTheFounders from "@/components/sections/meet-the-founders";
import OurCommitments from "@/components/sections/our-commitments";
import OurPhilosophy from "@/components/sections/our-philosophy";
import OurProcess from "@/components/sections/our-process";
import OurStoryFixed from "@/components/sections/our-story-fixed";
import TheBeginning from "@/components/sections/the-beginning";
import { useEffect } from "react";

export default function StoryPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  return (
    <div className="w-full">
      <TheBeginning />
      <OurStoryFixed/>
      <OurPhilosophy/>
      <MeetTheFounders/>
      <OurProcess/>
      <OurCommitments/>
    </div>
  );
}