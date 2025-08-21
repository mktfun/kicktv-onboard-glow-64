import { useState } from 'react';
import { Button } from './ui/button';
import { Check, HelpCircle, Flame } from 'lucide-react';
import type { Package } from './KickTVOnboarding';

interface PackageSelectionProps {
  packages: Package[];
  selectedPackage: string;
  onSelectPackage: (packageId: string) => void;
  hasAdultContent: boolean;
  onToggleAdultContent: (enabled: boolean) => void;
}

export const PackageSelection = ({
  packages,
  selectedPackage,
  onSelectPackage,
  hasAdultContent,
  onToggleAdultContent
}: PackageSelectionProps) => {
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-kick-green">Qual a sua vibe?</h2>
        <p className="text-kick-gray text-lg">
          Escolha o plano ideal para você
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`relative bg-card border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedPackage === pkg.id
                ? 'border-kick-green shadow-lg shadow-kick-green/20'
                : 'border-border hover:border-kick-green/50'
            }`}
            onClick={() => onSelectPackage(pkg.id)}
          >
            {selectedPackage === pkg.id && (
              <div className="absolute -top-3 -right-3 bg-kick-green rounded-full p-2">
                <Check className="w-4 h-4 text-background" />
              </div>
            )}
            
            {/* Tooltip */}
            <div className="absolute top-4 right-4">
              <div 
                className="relative"
                onMouseEnter={() => setShowTooltip(pkg.id)}
                onMouseLeave={() => setShowTooltip(null)}
              >
                <HelpCircle className="w-4 h-4 text-muted-foreground hover:text-kick-green cursor-help" />
                {showTooltip === pkg.id && (
                  <div className="absolute top-6 right-0 w-64 bg-popover border border-border rounded-lg p-3 text-xs text-popover-foreground shadow-lg z-10">
                    {pkg.tooltip}
                  </div>
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-kick-green">{pkg.name}</h3>
                <div className="text-2xl font-bold text-foreground mt-2">
                  {pkg.id === 'premium' || pkg.id === 'essencial' ? 'A partir de ' : ''}
                  R$ {pkg.basePrice}<span className="text-sm text-muted-foreground">/mês</span>
                </div>
              </div>
              
              <div className="space-y-2">
                {pkg.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2 text-sm">
                    {index === 0 && pkg.id === 'premium' ? (
                      <Flame className="w-4 h-4 text-kick-green flex-shrink-0 mt-0.5" />
                    ) : benefit.includes('🔞') ? (
                      <span className="text-kick-green flex-shrink-0">🔞</span>
                    ) : benefit.includes('🚀') ? (
                      <span className="text-kick-green flex-shrink-0">🚀</span>
                    ) : benefit.includes('⭐') ? (
                      <span className="text-kick-green flex-shrink-0">⭐</span>
                    ) : (
                      <Check className="w-4 h-4 text-kick-green flex-shrink-0 mt-0.5" />
                    )}
                    <span className="text-foreground leading-tight">{benefit.replace(/🔞|🚀|⭐/g, '').trim()}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={selectedPackage === pkg.id ? "kick" : "kick-outline"}
                className="w-full"
              >
                {selectedPackage === pkg.id ? "Selecionado" : "Selecionar"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};