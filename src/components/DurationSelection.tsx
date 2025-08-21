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
          <div
            key={index}
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
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold text-kick-green">Período</h2>
        <p className="text-kick-gray">Escolha a duração do seu plano</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {durations.map((duration) => (
          <div
            key={duration.id}
            className={`
              relative bg-card border-2 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:scale-105
              ${selectedDuration === duration.id 
                ? 'border-kick-green shadow-[var(--shadow-glow)]' 
                : 'border-border hover:border-kick-green/50'
              }
            `}
            onClick={() => onSelectDuration(duration.id)}
          >
            {selectedDuration === duration.id && (
              <div className="absolute -top-3 -right-3 bg-kick-green rounded-full p-2">
                <Check className="w-4 h-4 text-black" />
              </div>
            )}
            
            <div className="space-y-4">
              {renderProgressDots(duration.months)}
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{duration.label}</h3>
                {duration.discount && (
                  <p className="text-kick-green text-sm font-medium">{duration.discount}</p>
                )}
              </div>
              
              <div className="text-3xl font-bold text-kick-green">
                R$ {duration.price},00
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Special Offers for Longer Plans */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <div className="bg-gradient-to-r from-kick-green/10 to-kick-green/5 border border-kick-green/20 rounded-xl p-4 text-center">
          <h4 className="text-kick-green font-bold text-lg">6 meses</h4>
          <p className="text-sm text-muted-foreground">Pague apenas 150 dias</p>
        </div>
        <div className="bg-gradient-to-r from-kick-green/10 to-kick-green/5 border border-kick-green/20 rounded-xl p-4 text-center">
          <h4 className="text-kick-green font-bold text-lg">12 meses</h4>
          <p className="text-sm text-muted-foreground">Pague apenas 300 dias</p>
        </div>
      </div>
    </div>
  );
};