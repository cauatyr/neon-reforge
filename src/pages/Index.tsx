import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import BeginnerFriendly from "@/components/BeginnerFriendly";
import GallerySection from "@/components/GallerySection";
import WhatYouLearn from "@/components/WhatYouLearn";
import WhyDifferent from "@/components/WhyDifferent";
import WhoIsFor from "@/components/WhoIsFor";
import VSLSection from "@/components/VSLSection";
import PPFExplanation from "@/components/PPFExplanation";
import Pricing from "@/components/Pricing";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="relative page-wrapper">
      <Hero />
      <BeginnerFriendly />
      <ProblemSection />
      <GallerySection />
      <WhatYouLearn />
      <BeginnerFriendly />
      <WhyDifferent />
      <WhoIsFor />
      <VSLSection />
      <WhatYouLearn />
      <PPFExplanation />
      <Pricing />
      <Guarantee />
      <FAQ />
      <FloatingCTA />
    </main>
  );
};

export default Index;
