import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { BenefitsSection } from "./BenefitsSection";
import { CompatibilitySection } from "./CompatibilitySection";
import { KickTVOnboarding } from "./KickTVOnboarding";
import { FreeTrialOnboarding } from "./FreeTrialOnboarding";
import { AnimatedBackground } from "./AnimatedBackground";
import { Button } from "./ui/button";

export const LandingPage = () => {
  const [showFunnel, setShowFunnel] = useState(false);
  const [showFreeTrial, setShowFreeTrial] = useState(false);
  const lastInteractionRef = useRef<number>(0);

  // Fix 2: Controlar scroll do body quando modal aberto
  useEffect(() => {
    if (showFunnel || showFreeTrial) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    // Limpa a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [showFunnel, showFreeTrial]);

  const handleStartFunnel = (event?: React.MouseEvent | React.KeyboardEvent) => {
    const now = Date.now();

    // Proteção contra eventos não confiáveis ou automáticos
    if (event && !event.isTrusted) {
      console.warn('Tentativa de abertura do funnel por evento não confiável bloqueada');
      return;
    }

    // Proteção contra interações muito rápidas (possíveis toques acidentais)
    if (now - lastInteractionRef.current < 500) {
      console.warn('Interação muito rápida detectada, possível toque acidental');
      return;
    }

    // Verificar se já está aberto para evitar múltiplas aberturas
    if (showFunnel) {
      console.warn('Funnel já está aberto');
      return;
    }

    lastInteractionRef.current = now;

    // Log para debug - remover ap��s identificar o problema
    console.log('Funnel aberto por interação do usuário', {
      eventType: event?.type,
      timestamp: new Date().toISOString(),
      isTrusted: event?.isTrusted
    });

    setShowFunnel(true);
  };

  const handleStartFreeTrial = (event?: React.MouseEvent | React.KeyboardEvent) => {
    const now = Date.now();

    // Proteção contra eventos não confiáveis ou automáticos
    if (event && !event.isTrusted) {
      console.warn('Tentativa de abertura do teste por R$ 5 por evento não confiável bloqueada');
      return;
    }

    // Proteção contra interações muito rápidas (possíveis toques acidentais)
    if (now - lastInteractionRef.current < 500) {
      console.warn('Interação muito rápida detectada, possível toque acidental');
      return;
    }

    // Verificar se já está aberto para evitar múltiplas aberturas
    if (showFreeTrial) {
      console.warn('Teste por R$ 5 já está aberto');
      return;
    }

    lastInteractionRef.current = now;

    console.log('Teste por R$ 5 aberto por interação do usuário', {
      eventType: event?.type,
      timestamp: new Date().toISOString(),
      isTrusted: event?.isTrusted
    });

    setShowFreeTrial(true);
  };

  const handleBackToLanding = () => {
    setShowFunnel(false);
    setShowFreeTrial(false);
  };

  return (
    <main className="relative min-h-screen">
      {/* Fundo animado fixo que fica atrás de todo o conteúdo */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <AnimatedBackground />
      </div>

      {/* Container do conteúdo principal que fica na frente do fundo */}
      <div className="relative z-10">
        {/* Indicador de debug temporário */}
        {process.env.NODE_ENV === 'development' && (
          <div className="fixed bottom-4 right-4 z-[60] bg-black/80 text-white px-3 py-1 rounded text-xs sm:top-4 sm:bottom-auto">
            Funnel: {showFunnel ? 'ABERTO' : 'fechado'} | Trial: {showFreeTrial ? 'ABERTO' : 'fechado'}
          </div>
        )}

        {/* Landing Page Content with fade-out effect when funnel is open */}
        <motion.div
          animate={{
            opacity: (showFunnel || showFreeTrial) ? 0 : 1,
            scale: (showFunnel || showFreeTrial) ? 0.95 : 1
          }}
          transition={{ duration: 0.3 }}
          className={(showFunnel || showFreeTrial) ? "pointer-events-none" : ""}
        >
          <HeroSection
            onStartFunnel={handleStartFunnel}
            onStartFreeTrial={handleStartFreeTrial}
          />
          <BenefitsSection />
          <CompatibilitySection />
        </motion.div>
      </div>

      {/* Modal Tela-Cheia para o Funil */}
      <AnimatePresence>
        {showFunnel && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(48px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-black/80"
          >

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 h-full flex flex-col"
            >
              {/* Close Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10"
              >
                <Button
                  onClick={handleBackToLanding}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 text-white transition-all duration-200"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </motion.div>

              {/* Funnel Content Container */}
              <div className="flex-1 overflow-y-auto">
                <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24">
                  <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white px-2">
                      Chega de papo. <span className="text-kick-green">Monte seu plano</span> em 2 minutos.
                    </h2>
                    <p className="text-base sm:text-lg text-gray-300 px-4">
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

      {/* Modal Tela-Cheia para o Teste Gratuito */}
      <AnimatePresence>
        {showFreeTrial && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(48px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-black/80"
          >

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 h-full flex flex-col"
            >
              {/* Close Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2, delay: 0.4 }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10"
              >
                <Button
                  onClick={handleBackToLanding}
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/10 hover:bg-white/20 hover:scale-110 text-white transition-all duration-200"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </motion.div>

              {/* Free Trial Content Container */}
              <div className="flex-1 overflow-y-auto">
                <div className="container mx-auto max-w-6xl px-4 py-8 sm:py-12 lg:py-16 pb-16 sm:pb-24">
                  <FreeTrialOnboarding onBackToLanding={handleBackToLanding} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};
