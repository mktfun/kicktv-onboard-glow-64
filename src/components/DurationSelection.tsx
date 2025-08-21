import { motion } from 'framer-motion';
import { Duration } from './KickTVOnboarding';
import { Check } from 'lucide-react';

interface DurationSelectionProps {
  durations: Duration[];
  selectedDuration: string;
  onSelectDuration: (durationId: string) => void;
}

export const DurationSelection = ({
  durations,
  selectedDuration,
  onSelectDuration
}: DurationSelectionProps) => {
  
  const renderProgressDots = (months: number) => {
    const totalDots = 12;
    const filledDots = Math.min(months, totalDots);
    
    return (
      <div className="flex space-x-1 mb-4">
        {Array.from({ length: totalDots }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            className={`
              w-2 h-2 rounded-full transition-colors duration-300
              ${index < filledDots ? 'bg-kick-green' : 'bg-kick-dark'}
            `}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center space-y-2"
      >
        <h2 className="text-4xl font-bold text-kick-green">Período</h2>
        <p className="text-kick-gray">Escolha a duração do seu plano</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {durations.map((duration, index) => (
          <motion.div
            key={duration.id}
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`
              relative bg-card border-2 rounded-xl p-8 cursor-pointer transition-all duration-200
              ${selectedDuration === duration.id 
                ? 'card-selected glow-green-intense' 
                : 'border-border card-hover'
              }
            `}
            onClick={() => onSelectDuration(duration.id)}
          >
            {selectedDuration === duration.id && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.2, type: "spring" }}
                className="absolute -top-3 -right-3 bg-kick-green rounded-full p-2 glow-green"
              >
                <Check className="w-4 h-4 text-black" />
              </motion.div>
            )}
            
            <div className="space-y-4">
              {renderProgressDots(duration.months)}
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{duration.label}</h3>
                {duration.discount && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-kick-green text-sm font-medium"
                  >
                    {duration.discount}
                  </motion.p>
                )}
              </div>
              
              <motion.div 
                className="text-3xl font-bold text-kick-green"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                R$ {duration.price},00
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Enhanced Special Offers for Longer Plans */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="grid md:grid-cols-2 gap-4 mt-8"
      >
        <div className="bg-gradient-to-r from-kick-green/10 to-kick-green/5 border border-kick-green/20 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-kick-green/10 transition-shadow duration-300">
          <h4 className="text-kick-green font-bold text-lg">6 meses</h4>
          <p className="text-sm text-muted-foreground">Pague apenas 150 dias</p>
        </div>
        <div className="bg-gradient-to-r from-kick-green/10 to-kick-green/5 border border-kick-green/20 rounded-xl p-6 text-center hover:shadow-lg hover:shadow-kick-green/10 transition-shadow duration-300">
          <h4 className="text-kick-green font-bold text-lg">12 meses</h4>
          <p className="text-sm text-muted-foreground">Pague apenas 300 dias</p>
        </div>
      </motion.div>
    </div>
  );
};
