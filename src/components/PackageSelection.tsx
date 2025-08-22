import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Check, HelpCircle, Flame } from 'lucide-react';
import type { Package } from './KickTVOnboarding';

interface PackageSelectionProps {
  packages: Package[];
  selectedPackage: string;
  onSelectPackage: (packageId: string) => void;
}

export const PackageSelection = ({
  packages,
  selectedPackage,
  onSelectPackage
}: PackageSelectionProps) => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const getCardStyles = (packageId: string, isSelected: boolean) => {
    const baseClasses = "relative border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 cursor-pointer transition-all duration-300 ";

    switch (packageId) {
      case 'essencial':
        return baseClasses + (isSelected
          ? "bg-card border-kick-green shadow-lg shadow-kick-green/30 scale-105"
          : "bg-card border-border hover:border-kick-green/50 hover:shadow-lg hover:scale-[1.02]");

      case 'premium':
        return baseClasses + (isSelected
          ? "bg-gradient-to-br from-card to-kick-green/5 border-gradient-animated shadow-xl shadow-kick-green/40 scale-105"
          : "bg-card border-border hover:border-kick-green/50 hover:shadow-xl hover:scale-[1.02] relative");

      case 'ultra':
        return baseClasses + (isSelected
          ? "bg-gradient-to-br from-card to-kick-dark/50 border-kick-green shadow-2xl shadow-kick-green/50 scale-105 glow-green-intense"
          : "bg-gradient-to-br from-card to-kick-dark/20 border-border hover:border-kick-green/60 hover:shadow-2xl hover:scale-[1.02] hover:shadow-kick-green/30");

      default:
        return baseClasses + "bg-card border-border";
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="text-center space-y-3 sm:space-y-4 px-4">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kick-green">Qual a sua vibe?</h2>
        <p className="text-kick-gray text-base sm:text-lg">
          Escolha o plano ideal para você
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
        {packages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={getCardStyles(pkg.id, selectedPackage === pkg.id)}
            onClick={() => onSelectPackage(pkg.id)}
          >
            {selectedPackage === pkg.id && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.2, type: "spring" }}
                className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-kick-green rounded-full p-1.5 sm:p-2"
              >
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-background" />
              </motion.div>
            )}

            {/* Badge MAIS POPULAR para Essencial */}
            {pkg.id === 'essencial' && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 sm:px-3 rounded-full shadow-lg"
              >
                MAIS POPULAR
              </motion.div>
            )}

            {/* Tooltip */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
              <div
                className="relative"
                onMouseEnter={() => setShowTooltip(pkg.id)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-kick-green cursor-help" />
                {showTooltip === pkg.id && (
                  <div className="absolute top-6 right-0 w-56 sm:w-64 bg-popover border border-border rounded-lg p-3 text-xs text-popover-foreground shadow-lg z-10">
                    {pkg.tooltip}
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-kick-green">{pkg.name}</h3>
                <div className="text-xl sm:text-2xl font-bold text-foreground mt-1 sm:mt-2">
                  {pkg.id === 'premium' || pkg.id === 'essencial' ? 'A partir de ' : ''}
                  R$ {pkg.basePrice}<span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </div>

              <div className="space-y-2">
                {pkg.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2 text-xs sm:text-sm">
                    {index === 0 && pkg.id === 'premium' ? (
                      <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-kick-green flex-shrink-0 mt-0.5" />
                    ) : benefit.includes('🔞') ? (
                      <span className="text-kick-green flex-shrink-0">🔞</span>
                    ) : benefit.includes('🚀') ? (
                      <span className="text-kick-green flex-shrink-0">🚀</span>
                    ) : benefit.includes('⭐') ? (
                      <span className="text-kick-green flex-shrink-0">⭐</span>
                    ) : (
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-kick-green flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-foreground leading-tight">{benefit.replace(/🔞|🚀|⭐/g, '').trim()}</span>
                  </div>
                ))}
              </div>

              {/* Indicador visual de seleção */}
              <div className={`text-center py-2 sm:py-3 rounded-lg font-bold transition-all duration-200 text-sm ${
                selectedPackage === pkg.id
                  ? 'bg-kick-green/20 text-kick-green border border-kick-green/30'
                  : 'bg-muted/50 text-muted-foreground'
              }`}>
                {selectedPackage === pkg.id ? '✓ Selecionado' : 'Clique para selecionar'}
              </div>

              {/* Aviso sobre limitação do iPhone para Premium e Ultra */}
              {selectedPackage === pkg.id && (pkg.id === 'premium' || pkg.id === 'ultra') && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg"
                >
                  <div className="flex items-start space-x-2">
                    <span className="text-orange-500 text-sm">📱</span>
                    <div className="text-xs text-orange-300">
                      <div className="font-semibold mb-1">Limitação temporária:</div>
                      <div>Ainda não temos app para iPhone.</div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  );
};
