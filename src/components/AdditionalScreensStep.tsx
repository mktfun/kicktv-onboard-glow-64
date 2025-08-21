import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus, Monitor } from 'lucide-react';
import { Button } from './ui/button';

interface AdditionalScreensStepProps {
  additionalScreens: number;
  onUpdateScreens: (screens: number) => void;
}

export const AdditionalScreensStep = ({
  additionalScreens,
  onUpdateScreens
}: AdditionalScreensStepProps) => {
  const handleDecrease = () => {
    if (additionalScreens > 0) {
      onUpdateScreens(additionalScreens - 1);
    }
  };

  const handleIncrease = () => {
    if (additionalScreens < 2) {
      onUpdateScreens(additionalScreens + 1);
    }
  };

  const monthlyScreenCost = additionalScreens * 15;

  return (
    <div className="space-y-8 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
          className="flex justify-center mb-6"
        >
          <Monitor className="w-16 h-16 text-kick-green" />
        </motion.div>
        <h2 className="text-4xl font-bold text-kick-green">Telas Adicionais</h2>
        <p className="text-kick-gray text-lg">
          Para quantas telas extras você precisa de acesso?
        </p>
        <p className="text-sm text-muted-foreground">
          Cada tela adicional custa R$ 15,00 por mês
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="max-w-md mx-auto"
      >
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6 shadow-lg hover:shadow-xl hover:shadow-kick-green/10 transition-shadow duration-300">
          {/* Stepper */}
          <div className="flex items-center justify-center space-x-8">
            <Button
              onClick={handleDecrease}
              disabled={additionalScreens === 0}
              variant="kick-outline"
              size="icon"
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <Minus className="w-5 h-5" />
            </Button>

            <motion.div 
              key={additionalScreens}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-kick-green">
                {additionalScreens}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {additionalScreens === 0 ? 'Nenhuma tela adicional' : 
                 additionalScreens === 1 ? '1 tela adicional' : 
                 `${additionalScreens} telas adicionais`}
              </div>
            </motion.div>

            <Button
              onClick={handleIncrease}
              disabled={additionalScreens === 2}
              variant="kick"
              size="icon"
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          {/* Cost Display */}
          <AnimatePresence>
            {additionalScreens > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-border pt-4"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="text-2xl font-bold text-kick-green"
                >
                  + R$ {monthlyScreenCost},00 / mês
                </motion.div>
                <div className="text-sm text-muted-foreground">
                  Custo das telas adicionais
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
