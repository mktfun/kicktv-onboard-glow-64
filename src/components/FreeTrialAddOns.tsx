import { motion } from 'framer-motion';
import { Crown, Shield } from 'lucide-react';

interface FreeTrialAddOnsProps {
  hasAdultContent: boolean;
  onAdultContentChange: (value: boolean) => void;
}

export const FreeTrialAddOns = ({
  hasAdultContent,
  onAdultContentChange
}: FreeTrialAddOnsProps) => {
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
        <h2 className="text-4xl font-bold text-kick-green">Quer incluir conteúdo adulto?</h2>
        <p className="text-kick-gray text-lg">
          Adicione conteúdo adulto ao seu teste gratuito
        </p>
      </div>

      {/* Card de Conteúdo Adulto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className={`bg-card border rounded-2xl p-8 transition-all duration-300 ${
          hasAdultContent 
            ? 'border-kick-green bg-gradient-to-br from-kick-green/10 to-transparent' 
            : 'border-border hover:border-kick-green/50'
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-2xl">🔞</span>
              <h3 className="text-xl font-bold text-foreground">Conteúdo Adulto</h3>
            </div>
            
            <div className="space-y-2 mb-4">
              <p className="text-sm text-muted-foreground">
                Acesso a conteúdo adulto exclusivo durante o teste
              </p>
              <p className="text-xs text-orange-400 font-medium">
                ⚠️ Disponível apenas no navegador
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-kick-green" />
              <span className="text-kick-green font-bold">Incluso no teste</span>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="ml-6">
            <button
              onClick={() => onAdultContentChange(!hasAdultContent)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                hasAdultContent ? 'bg-kick-green' : 'bg-muted'
              } cursor-pointer`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-background transition-transform ${
                  hasAdultContent ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>

        {hasAdultContent && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="mt-4 p-3 bg-kick-green/10 border border-kick-green/20 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-kick-green" />
              <span className="text-sm text-kick-green font-medium">
                Ótimo! Conteúdo adulto será incluído no seu teste gratuito.
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Info adicional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center"
      >
        <p className="text-sm text-gray-400">
          💡 Você pode mudar essa configuração a qualquer momento
        </p>
      </motion.div>
    </motion.div>
  );
};
