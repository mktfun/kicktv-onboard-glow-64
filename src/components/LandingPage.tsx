import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { CompatibilitySection } from "./CompatibilitySection";
import { KickTVOnboarding } from "./KickTVOnboarding";
import { Button } from "./ui/button";

export const LandingPage = () => {
  const [showFunnel, setShowFunnel] = useState(false);

  // Fix 2: Controlar scroll do body quando modal aberto
  useEffect(() => {
    if (showFunnel) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Limpa a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showFunnel]);

  const handleStartFunnel = () => {
    setShowFunnel(true);
  };

  const handleBackToLanding = () => {
    setShowFunnel(false);
  };

  return (
    <div className="min-h-screen">
      {/* Landing Page Content with fade-out effect when funnel is open */}
      <motion.div
        animate={{
          opacity: showFunnel ? 0 : 1,
          scale: showFunnel ? 0.95 : 1
        }}
        transition={{ duration: 0.3 }}
        className={showFunnel ? "pointer-events-none" : ""}
      >
        <HeroSection onStartFunnel={handleStartFunnel} />
        <BenefitsSection />
        <CompatibilitySection />
      </motion.div>

      {/* Modal Tela-Cheia para o Funil */}
      <AnimatePresence>
        {showFunnel && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-black/90"
          >
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute inset-0 bg-black/80"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 h-full flex flex-col"
            >
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <Button
                  onClick={handleBackToLanding}
                  variant="ghost"
                  size="icon"
                  className="h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Funnel Content Container */}
              <div className="flex-1 overflow-y-auto">
                <div className="container mx-auto max-w-6xl px-4 py-16 pb-24">
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                      Chega de papo. <span className="text-kick-green">Monte seu plano</span> em 2 minutos.
                    </h2>
                    <p className="text-lg text-gray-300">
                      Personalize sua experiência e comece a assistir agora mesmo.
                    </p>
                  </div>

                  <KickTVOnboarding onBackToLanding={handleBackToLanding} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
