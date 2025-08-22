import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Crown, Zap } from 'lucide-react';

interface AddOnsStepProps {
  selectedPackage: string;
  hasWhot: boolean;
  onToggleWhot: (enabled: boolean) => void;
  onContinue: () => void;
}

export const AddOnsStep = ({
  selectedPackage,
  hasWhot,
  onToggleWhot,
  onContinue
}: AddOnsStepProps) => {
  const isUltra = selectedPackage === 'ultra';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 max-w-2xl mx-auto"
    >
      <div className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-kick-green to-kick-green-dark rounded-full flex items-center justify-center">
            <Crown className="w-8 h-8 text-background" />
          </div>
        </motion.div>
        <h2 className="text-4xl font-bold text-kick-green">Quer turbinar seu plano?</h2>
        <p className="text-kick-gray text-lg">
          Adicione recursos premium para uma experiência completa
        </p>
      </div>

      {/* Card do Whot */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={`bg-card border rounded-2xl p-8 transition-all duration-300 ${
          isUltra 
            ? 'border-kick-green bg-gradient-to-br from-kick-green/10 to-transparent' 
            : 'border-border hover:border-kick-green/50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">🔞</span>
              <h3 className="text-xl font-bold text-foreground">Whot (+18)</h3>
              {isUltra && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="bg-gradient-to-r from-kick-green to-kick-green-light text-background px-3 py-1 rounded-full text-xs font-bold"
                >
                  JÁ INCLUSO!
                </motion.div>
              )}
            </div>
            
            <div className="space-y-2 mb-4">
              {selectedPackage === 'essencial' && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Acesso a conteúdo adulto exclusivo
                  </p>
                  <p className="text-xs text-orange-400 font-medium">
                    ⚠️ Disponível apenas no navegador
                  </p>
                </div>
              )}
              {selectedPackage === 'premium' && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Acesso a conteúdo adulto exclusivo
                  </p>
                  <p className="text-xs text-orange-400 font-medium">
                    ⚠️ Disponível apenas no navegador
                  </p>
                </div>
              )}
              {selectedPackage === 'ultra' && (
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    Conteúdo adulto premium já incluído no seu plano Ultra
                  </p>
                  <p className="text-xs text-orange-400 font-medium">
                    ⚠️ Disponível apenas no navegador
                  </p>
                </div>
              )}
            </div>

            {!isUltra && (
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-kick-green" />
                <span className="text-kick-green font-bold">+R$ 30/mês</span>
              </div>
            )}
            
            {isUltra && (
              <div className="flex items-center space-x-2">
                <Crown className="w-4 h-4 text-kick-green" />
                <span className="text-kick-green font-bold">Valor já incluso no plano</span>
              </div>
            )}
          </div>

          {/* Toggle Switch */}
          <div className="ml-6">
            <button
              onClick={() => !isUltra && onToggleWhot(!hasWhot)}
              disabled={isUltra}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                (hasWhot || isUltra) ? 'bg-kick-green' : 'bg-muted'
              } ${!isUltra ? 'cursor-pointer' : 'cursor-not-allowed opacity-75'}`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-background transition-transform ${
                  (hasWhot || isUltra) ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {isUltra && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mt-4 p-3 bg-kick-green/10 border border-kick-green/20 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <Crown className="w-4 h-4 text-kick-green" />
              <span className="text-sm text-kick-green font-medium">
                Parabéns! Este recurso premium já está incluído no seu plano Ultra.
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Botão Continuar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center pt-4"
      >
        <Button
          onClick={onContinue}
          className="w-full max-w-md py-6 text-lg rounded-xl font-bold hover:scale-105 transition-transform duration-200"
          variant="kick"
        >
          CONTINUAR
        </Button>
      </motion.div>
    </motion.div>
  );
};
