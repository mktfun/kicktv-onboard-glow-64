import { motion } from 'framer-motion';

interface SummaryStepProps {
  packageName: string;
  additionalScreens: number;
  hasAdultContent: boolean;
  duration: string;
  durationMonths: number;
  calculateTotal: () => number;
}

export const SummaryStep = ({
  packageName,
  additionalScreens,
  hasAdultContent,
  duration,
  durationMonths,
  calculateTotal
}: SummaryStepProps) => {
  const getDiscount = () => {
    if (duration.includes('3 meses')) return 5;
    if (duration.includes('6 meses')) return 20;
    if (duration.includes('12 meses')) return 70;
    return 0;
  };

  const calculateSubtotal = () => {
    const total = calculateTotal();
    const discount = getDiscount();
    return total + discount;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold text-center text-kick-green">Seu Plano Ideal está pronto!</h2>
      <div className="bg-card border border-border rounded-xl p-8 space-y-4 shadow-2xl shadow-kick-green/10 glow-green">
        <div className="flex justify-between items-center">
          <span className="text-foreground">Plano:</span>
          <span className="text-kick-green font-semibold">{packageName} (1 Tela)</span>
        </div>
        {additionalScreens > 0 && (
          <div className="flex justify-between items-center">
            <span className="text-foreground">Telas Adicionais:</span>
            <span className="text-kick-green font-semibold">{additionalScreens} (R$ {additionalScreens * 15},00 / mês)</span>
          </div>
        )}
        <div className="flex justify-between items-center">
          <span className="text-foreground">Duração:</span>
          <span className="text-kick-green font-semibold">{duration}</span>
        </div>
        {hasAdultContent && (
          <div className="flex justify-between items-center">
            <span className="text-foreground">Conteúdo Adulto:</span>
            <span className="text-kick-green font-semibold">R$ {20 * durationMonths},00</span>
          </div>
        )}
        <hr className="border-border" />
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-foreground">Subtotal:</span>
            <span className="text-foreground">R$ {calculateSubtotal()},00</span>
          </div>
          {getDiscount() > 0 && (
            <div className="flex justify-between items-center text-kick-green">
              <span>Desconto:</span>
              <span>- R$ {getDiscount()},00</span>
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
};
