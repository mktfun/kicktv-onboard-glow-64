import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgressBar } from './ProgressBar';
import { PackageSelection } from './PackageSelection';
import { AddOnsStep } from './AddOnsStep';
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
    tooltip: 'Nosso plano Essencial combina IPTV, a transmissão direta do servidor para sua TV, com a tecnologia P2P, que distribui o sinal entre os usuários para garantir mais estabilidade em grandes eventos, como jogos de futebol. Whot (+18) disponível como add-on.'
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
    tooltip: 'O plano Premium libera o Nexus, nosso acervo de conteúdo On-Demand com mais de 90.000 filmes e séries atualizados diariamente, além de tecnologia que evita travamentos. Whot (+18) disponível como add-on.'
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
      'Whot (+18) incluso',
      '1 Tela (preço fixo, sem extras)'
    ],
    tooltip: 'A experiência definitiva. O plano Ultra te dá acesso através do aplicativo Krator+, conhecido pela sua interface moderna e facilidade de uso em qualquer Smart TV, além de acesso ao Whot (+18) já incluso no preço.'
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
  const [hasWhot, setHasWhot] = useState(false);
  const [additionalScreens, setAdditionalScreens] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState<string>('');

  const totalSteps = 5;

  // Auto-navigation apenas para duração -> pagamento
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (currentStep === 4 && selectedDuration) {
      // After duration selection, go directly to payment
      timer = setTimeout(() => setCurrentStep(5), 250);
    }

    return () => clearTimeout(timer);
  }, [currentStep, selectedDuration]);

  // Handle Whot state based on selected package
  useEffect(() => {
    if (selectedPackage === 'ultra') {
      setHasWhot(true); // Ultra includes Whot by default
    } else {
      setHasWhot(false); // Reset to false for other packages
    }
  }, [selectedPackage]);

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

    // Adicionar Whot (+18) - R$30 para Essencial e Premium
    if (hasWhot && (pkg.id === 'essencial' || pkg.id === 'premium')) {
      monthlyPrice += 30;
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
      // Skip AddOns and Additional Screens steps for Ultra plan since Whot is included and no additional screens allowed
      if (currentStep === 1 && selectedPackage === 'ultra') {
        setCurrentStep(4); // Skip to duration selection
      } else {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep === 1 && onBackToLanding) {
      // If we're on the first step of the funnel and have a callback, go back to landing
      onBackToLanding();
      return;
    }

    if (currentStep > 1) {
      // Reset auto-navigation selections when going back
      if (currentStep === 2) {
        setSelectedPackage('');
      } else if (currentStep === 4) {
        setSelectedDuration('');
        // If Ultra plan, go back to step 1 (package selection) since we skip steps 2 and 3
        if (selectedPackage === 'ultra') {
          setCurrentStep(1);
          return;
        }
      }
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceedFromStep = (step: number) => {
    switch (step) {
      case 1: return !!selectedPackage;
      case 2: return true; // AddOns step can proceed
      case 3: return true; // Additional screens can be 0
      case 4: return !!selectedDuration;
      default: return true;
    }
  };

  const handleAddOnsComplete = () => {
    const pkg = getSelectedPackage();

    if (pkg?.allowsAdditionalScreens) {
      setCurrentStep(3); // Go to additional screens
    } else {
      setCurrentStep(4); // Skip to duration for Ultra
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
      case 1:
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
            />
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            key="add-ons"
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <AddOnsStep
              selectedPackage={selectedPackage}
              hasWhot={hasWhot}
              onToggleWhot={setHasWhot}
              onContinue={handleAddOnsComplete}
            />
          </motion.div>
        );
      case 3:
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
      case 4:
        return (
          <motion.div
            key="duration-selection"
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
      case 5:
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
              hasWhot={hasWhot}
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
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      </div>
      
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>

        {currentStep >= 1 && currentStep < 5 && (
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
              {currentStep === 1 && onBackToLanding ? "← Voltar ao Início" : "Voltar"}
            </Button>

            {(currentStep === 1 || currentStep === 3) && (
              <Button
                onClick={nextStep}
                disabled={!canProceedFromStep(currentStep)}
                className="px-8 py-3 rounded-xl hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
