import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressBar } from './ProgressBar';
import { PackageSelection } from './PackageSelection';
import { AdditionalScreensStep } from './AdditionalScreensStep';
import { DurationSelection } from './DurationSelection';
import { PaymentStep } from './PaymentStep';
import { Button } from './ui/button';

export interface Package {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  allowsAdditionalScreens: boolean;
  benefits: string[];
  tooltip: string;
}

export interface Duration {
  id: string;
  months: number;
  label: string;
  price: number;
  discount?: string;
}

const packages: Package[] = [
  {
    id: 'essencial',
    name: 'Essencial',
    description: 'Acesso completo a canais, filmes e séries',
    basePrice: 35,
    allowsAdditionalScreens: true,
    benefits: [
      'Acesso completo a canais, filmes e séries',
      '1 Tela inclusa',
      'Tecnologia híbrida (IPTV + P2P)',
      '+ R$15 por tela adicional'
    ],
    tooltip: 'Nosso plano Essencial combina IPTV, a transmissão direta do servidor para sua TV, com a tecnologia P2P, que distribui o sinal entre os usuários para garantir mais estabilidade em grandes eventos, como jogos de futebol.'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Tudo do Essencial, e mais...',
    basePrice: 45,
    allowsAdditionalScreens: true,
    benefits: [
      'Tudo do Essencial, e mais...',
      'Catálogo Nexus com milhares de títulos On-Demand',
      'Estabilidade superior com Anti-Freeze Tech',
      '1 Tela inclusa',
      '+ R$15 por tela adicional'
    ],
    tooltip: 'O plano Premium libera o Nexus, nosso acervo de conteúdo On-Demand com mais de 90.000 filmes e séries atualizados diariamente, além de tecnologia que evita travamentos.'
  },
  {
    id: 'ultra',
    name: 'Ultra Krator+',
    description: 'A experiência definitiva',
    basePrice: 40,
    allowsAdditionalScreens: false,
    benefits: [
      'Acesso via app exclusivo Krator+',
      'Interface premium e organizada',
      'Conteúdo Adulto (Whot) incluso',
      '1 Tela (preço fixo, sem extras)'
    ],
    tooltip: 'A experiência definitiva. O plano Ultra te dá acesso através do aplicativo Krator+, conhecido pela sua interface moderna e facilidade de uso em qualquer Smart TV, além de todo o conteúdo adulto já incluso.'
  }
];

const durations: Duration[] = [
  { id: '1m', months: 1, label: '1 mês', price: 35 },
  { id: '3m', months: 3, label: '3 meses', price: 100, discount: 'Economize R$ 5' },
  { id: '6m', months: 6, label: '6 meses', price: 190, discount: 'Economize R$ 20' },
  { id: '12m', months: 12, label: '12 meses', price: 350, discount: 'Economize R$ 70' }
];

interface KickTVOnboardingProps {
  onBackToLanding?: () => void;
}

export const KickTVOnboarding = ({ onBackToLanding }: KickTVOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<string>('');
  const [hasAdultContent, setHasAdultContent] = useState(false);
  const [additionalScreens, setAdditionalScreens] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState<string>('');

  const totalSteps = 6;

  // Auto-navigation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentStep === 1 && selectedPackage) {
      const pkg = getSelectedPackage();
      if (pkg?.allowsAdditionalScreens) {
        timer = setTimeout(() => setCurrentStep(2), 250);
      } else {
        // For Ultra plans, skip additional screens and go to duration
        timer = setTimeout(() => setCurrentStep(3), 250);
      }
    } else if (currentStep === 2) {
      // After setting additional screens, go to duration
      timer = setTimeout(() => setCurrentStep(3), 250);
    } else if (currentStep === 3 && selectedDuration) {
      // After duration selection, go to summary
      timer = setTimeout(() => setCurrentStep(4), 250);
    }

    return () => clearTimeout(timer);
  }, [currentStep, selectedPackage, selectedDuration, additionalScreens]);

  const getSelectedPackage = () => packages.find(p => p.id === selectedPackage);
  const getSelectedDuration = () => durations.find(d => d.id === selectedDuration);

  const calculateTotal = () => {
    const duration = getSelectedDuration();
    const pkg = getSelectedPackage();
    if (!duration || !pkg) return 0;

    // Nova lógica de preços conforme especificação
    let monthlyPrice = pkg.basePrice;

    // Adicionar custo de telas extras (apenas para Essencial e Premium)
    if (pkg.allowsAdditionalScreens) {
      monthlyPrice += (additionalScreens * 15);
    }

    // Adicionar conteúdo adulto (apenas para Essencial e Premium, Ultra já inclui)
    if (hasAdultContent && (pkg.id === 'essencial' || pkg.id === 'premium')) {
      monthlyPrice += 20;
    }

    // Calcular total baseado na duração (duration.price é o preço total para aquela duração)
    // Para manter compatibilidade, vamos usar a estrutura atual mas aplicar a nova lógica
    const totalForDuration = monthlyPrice * duration.months;

    // Aplicar desconto baseado na duração
    let discount = 0;
    if (duration.id === '3m') discount = 5;
    else if (duration.id === '6m') discount = 20;
    else if (duration.id === '12m') discount = 70;

    return totalForDuration - discount;
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep === 2 && onBackToLanding) {
      // If we're on the first step of the funnel and have a callback, go back to landing
      onBackToLanding();
      return;
    }
    
    if (currentStep > 2) {
      // Reset auto-navigation selections when going back
      if (currentStep === 3) {
        setSelectedPackage('');
      } else if (currentStep === 5) {
        setSelectedDuration('');
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 2: return !!selectedPackage;
      case 3: return !!selectedDuration;
      case 4: return !!selectedDuration;
      default: return true;
    }
  };

  const renderStep = () => {
    const stepVariants = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -20 }
    };

    const transition = { duration: 0.25, ease: "easeOut" };

    switch (currentStep) {
      case 2:
        return (
          <motion.div
            key="package-selection"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <PackageSelection
              packages={packages}
              selectedPackage={selectedPackage}
              onSelectPackage={setSelectedPackage}
              hasAdultContent={hasAdultContent}
              onToggleAdultContent={setHasAdultContent}
            />
          </motion.div>
        );
      case 3:
        const pkg = getSelectedPackage();
        if (pkg?.allowsAdditionalScreens) {
          return (
            <motion.div
              key="additional-screens"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <AdditionalScreensStep
                additionalScreens={additionalScreens}
                onUpdateScreens={setAdditionalScreens}
              />
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key="duration-selection-3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <DurationSelection
                durations={durations}
                selectedDuration={selectedDuration}
                onSelectDuration={setSelectedDuration}
              />
            </motion.div>
          );
        }
      case 4:
        const selectedPkg = getSelectedPackage();
        if (selectedPkg?.allowsAdditionalScreens) {
          return (
            <motion.div
              key="duration-selection-4"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
            >
              <DurationSelection
                durations={durations}
                selectedDuration={selectedDuration}
                onSelectDuration={setSelectedDuration}
              />
            </motion.div>
          );
        } else {
          return (
            <motion.div
              key="summary-4"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transition}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-center text-kick-green">Seu Plano Ideal está pronto!</h2>
              <div className="bg-card border border-border rounded-xl p-8 space-y-4 shadow-2xl shadow-kick-green/10 glow-green">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Plano:</span>
                  <span className="text-kick-green font-semibold">{getSelectedPackage()?.name} (1 Tela)</span>
                </div>
                {additionalScreens > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Telas Adicionais:</span>
                    <span className="text-kick-green font-semibold">{additionalScreens} (R$ {additionalScreens * 15},00 / mês)</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Duração:</span>
                  <span className="text-kick-green font-semibold">{getSelectedDuration()?.label}</span>
                </div>
                {hasAdultContent && (
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Conteúdo Adulto:</span>
                    <span className="text-kick-green font-semibold">R$ {20 * (getSelectedDuration()?.months || 1)},00</span>
                  </div>
                )}
                <hr className="border-border" />
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground">Subtotal:</span>
                    <span className="text-foreground">R$ {
                      (() => {
                        const duration = getSelectedDuration();
                        if (!duration) return 0;
                        return duration.price + (additionalScreens * 15 * duration.months);
                      })()
                    },00</span>
                  </div>
                  {getSelectedDuration()?.discount && (
                    <div className="flex justify-between items-center text-kick-green">
                      <span>Desconto:</span>
                      <span>- R$ {
                        (() => {
                          const duration = getSelectedDuration();
                          if (duration?.id === '3m') return '5';
                          if (duration?.id === '6m') return '20';
                          if (duration?.id === '12m') return '70';
                          return '0';
                        })()
                      },00</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span className="text-foreground">Total:</span>
                    <span className="text-kick-green">R$ {calculateTotal()},00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        }
      case 5:
        return (
          <motion.div
            key="summary-5"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-center text-kick-green">Seu Plano Ideal está pronto!</h2>
            <div className="bg-card border border-border rounded-xl p-8 space-y-4 shadow-2xl shadow-kick-green/10 glow-green">
              <div className="flex justify-between items-center">
                <span className="text-foreground">Plano:</span>
                <span className="text-kick-green font-semibold">{getSelectedPackage()?.name} (1 Tela)</span>
              </div>
              {additionalScreens > 0 && (
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Telas Adicionais:</span>
                  <span className="text-kick-green font-semibold">{additionalScreens} (R$ {additionalScreens * 15},00 / mês)</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-foreground">Duração:</span>
                <span className="text-kick-green font-semibold">{getSelectedDuration()?.label}</span>
              </div>
              {hasAdultContent && (
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Conteúdo Adulto:</span>
                  <span className="text-kick-green font-semibold">R$ {20 * (getSelectedDuration()?.months || 1)},00</span>
                </div>
              )}
              <hr className="border-border" />
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Subtotal:</span>
                  <span className="text-foreground">R$ {
                    (() => {
                      const duration = getSelectedDuration();
                      if (!duration) return 0;
                      return duration.price + (additionalScreens * 15 * duration.months);
                    })()
                  },00</span>
                </div>
                {getSelectedDuration()?.discount && (
                  <div className="flex justify-between items-center text-kick-green">
                    <span>Desconto:</span>
                    <span>- R$ {
                      (() => {
                        const duration = getSelectedDuration();
                        if (duration?.id === '3m') return '5';
                        if (duration?.id === '6m') return '20';
                        if (duration?.id === '12m') return '70';
                        return '0';
                      })()
                    },00</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xl font-bold">
                  <span className="text-foreground">Total:</span>
                  <span className="text-kick-green">R$ {calculateTotal()},00</span>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 6:
        return (
          <motion.div
            key="payment"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <PaymentStep
              packageName={getSelectedPackage()?.name || ''}
              duration={getSelectedDuration()?.label || ''}
              total={calculateTotal()}
              hasAdultContent={hasAdultContent}
              additionalScreens={additionalScreens}
            />
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-background text-foreground">
      <div className="mb-8">
        <ProgressBar currentStep={currentStep - 1} totalSteps={totalSteps} />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {currentStep >= 2 && currentStep < 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="flex justify-between items-center mt-12"
          >
            <Button
              onClick={prevStep}
              variant="outline"
              className="px-6 py-3 hover:scale-105 transition-transform duration-200"
            >
              {currentStep === 2 && onBackToLanding ? "← Voltar ao Início" : "Voltar"}
            </Button>

            {(currentStep === 3 || currentStep === 4) && (
              <Button
                onClick={nextStep}
                className="px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-200"
              >
                Continuar
              </Button>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
};
