import GrowNovaNavbar      from "../components/navbar/GrowNovaNavbar";
import HeroSection         from "../components/sections/HeroSection";
import StatsSection        from "../components/sections/StatsSection";
import WhoForSection       from "../components/sections/WhoForSection";
import FeaturesSection     from "../components/sections/FeaturesSection";
import WebinarSection      from "../components/sections/WebinarSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection          from "../components/sections/CtaSection";
import FooterSection       from "../components/sections/FooterSection";
import QuotesSection from "../components/sections/QuotesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}>
      <GrowNovaNavbar />
      <HeroSection />
      <StatsSection />
      <WhoForSection />
      <QuotesSection/>
      <FeaturesSection />
      <WebinarSection />
      <TestimonialsSection />
      <CtaSection />
      <FooterSection />
    </div>
  );
}