"use client";

import PageShell from "@/components/layout/PageShell";
import PrecisionHero from "@/components/sections/Services/PrecisionHero";
import ServicesPremiumGrid from "@/components/sections/Services/ServicesPremiumGrid";
import MetricsGrid from "@/components/sections/Services/MetricsGrid";
import ProcessRail from "@/components/sections/Services/ProcessRail";
import ServicesCTA from "@/components/sections/Services/ServicesCTA";

export default function ServicesPage() {
  return (
    <PageShell>
      {/* Hero - Powerful opening statement */}
      <PrecisionHero />

      {/* Services Grid - What we do */}
      <ServicesPremiumGrid />

      {/* Metrics - Proof of impact */}
      <MetricsGrid />

      {/* Process - How we work */}
      <ProcessRail />

      {/* CTA - Drive action */}
      <ServicesCTA />
    </PageShell>
  );
}
