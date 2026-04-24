import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { CtaSection } from "@/components/sections/cta-section";
import { AppManagementMock, DashboardMock, GlobalDeployMock } from "@/components/sections/generic-sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AppManagementMock />
      <DashboardMock />
      <GlobalDeployMock />
      <CtaSection />
    </>
  );
}
