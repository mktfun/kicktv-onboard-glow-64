import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { FreeTrialSelection } from "./FreeTrialSelection";
import { FreeTrialFinalScreen } from "./FreeTrialFinalScreen";


interface FreeTrialOnboardingProps {
  onBackToLanding: () => void;
}

export const FreeTrialOnboarding = ({ onBackToLanding }: FreeTrialOnboardingProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("");

  const steps = [
    "Plano",
    "Finalizar"
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return selectedPackage !== "";
      default:
        return true;
    }
  };


  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <FreeTrialSelection
            selectedPackage={selectedPackage}
            onSelectPackage={setSelectedPackage}
          />
        );
      case 1:
        return (
          <FreeTrialFinalScreen
            packageName={selectedPackage}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="flex justify-center">
        <div className="flex items-center space-x-4 bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center">
              <motion.div
                animate={{
                  backgroundColor: index <= currentStep ? "#34D399" : "rgba(255,255,255,0.2)",
                  scale: index === currentStep ? 1.2 : 1
                }}
                transition={{ duration: 0.3 }}
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              >
                {index + 1}
              </motion.div>
              <span className={`ml-2 text-sm font-medium ${
                index <= currentStep ? 'text-kick-green' : 'text-gray-400'
              }`}>
                {step}
              </span>
              {index < steps.length - 1 && (
                <ArrowRight className="w-4 h-4 text-gray-600 mx-2" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStepContent()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      {currentStep < steps.length - 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-center pt-8"
        >
          <Button
            onClick={currentStep === 0 ? onBackToLanding : prevStep}
            variant="ghost"
            className="text-white hover:text-kick-green hover:bg-white/10 px-6 py-3"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {currentStep === 0 ? 'Voltar' : 'Anterior'}
          </Button>

          <Button
            onClick={nextStep}
            disabled={!canProceed()}
            variant="kick"
            className="px-8 py-3 font-bold text-lg hover:scale-105 transition-transform duration-200"
          >
            Continuar
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};
