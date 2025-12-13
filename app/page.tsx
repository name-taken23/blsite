import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import FeatureGrid from "@/components/sections/FeatureGrid";
import HomeServices from "@/components/sections/HomeServices";
import SplitSection from "@/components/sections/SplitSection";
import HomeWhyBlackLake from "@/components/sections/HomeWhyBlackLake";
import HomeCTA from "@/components/sections/HomeCTA";

export default function Home() {
  return (
    <PageShell>
      <div className="w-full -mt-20">
        <Hero />
        <FeatureGrid />
        <HomeServices />
        <SplitSection />
        <HomeWhyBlackLake />
        <HomeCTA />
      </div>
    </PageShell>
  );
}