import HeroSection from "../components/landing/HeroSection";
import HighlightBand from "../components/landing/HighlightBand";
import CtaSection from "../components/landing/CtaSection";
import VenueGuide from "../components/landing/VenueGuide";

function LandingPage() {
  return (
    <main className="landing-page">
      <HeroSection />
      <VenueGuide />
      <HighlightBand />
      <CtaSection />
    </main>
  );
}

export default LandingPage;