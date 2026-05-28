import MeetTheFounders from "@/components/sections/meet-the-founders";
import OurCommitments from "@/components/sections/our-commitments";
import OurPhilosophy from "@/components/sections/our-philosophy";
import OurProcess from "@/components/sections/our-process";
import OurStoryFixed from "@/components/sections/our-story-fixed";
import TheBeginning from "@/components/sections/the-beginning";

export default function StoryPage() {
  return (
    <div className="w-full">
      <TheBeginning />
      <OurStoryFixed/>
      <OurPhilosophy/>
      {/* <MeetTheFounders/> */}
      <OurProcess/>
      <OurCommitments/>
    </div>
  );
}