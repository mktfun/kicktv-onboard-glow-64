import { useState } from "react";
import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { CompatibilitySection } from "./CompatibilitySection";
import { KickTVOnboarding } from "./KickTVOnboarding";

export const LandingPage = () => {
  const [showFunnel, setShowFunnel] = useState(false);

  const handleStartFunnel = () => {
    setShowFunnel(true);
    // Smooth scroll to funnel section
    setTimeout(() => {
      const funnelSection = document.getElementById("funnel-section");
      funnelSection?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleBackToLanding = () => {
    setShowFunnel(false);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <HeroSection onStartFunnel={handleStartFunnel} />
      <BenefitsSection />
      <CompatibilitySection />
      
      {/* Funnel Section */}
      <div id="funnel-section" className="bg-background">
        {showFunnel && (
          <div className="container mx-auto max-w-6xl px-4 py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Chega de papo. <span className="text-primary">Monte seu plano</span> em 2 minutos.
              </h2>
              <p className="text-lg text-muted-foreground">
                Personalize sua experiência e comece a assistir agora mesmo.
              </p>
            </div>
            
            <KickTVOnboarding onBackToLanding={handleBackToLanding} />
          </div>
        )}
      </div>
    </div>
  );
};