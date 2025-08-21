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
      <div className="space-y-4">
        <div className="flex justify-center mb-6">
          <Monitor className="w-16 h-16 text-kick-green" />
        </div>
        <h2 className="text-4xl font-bold text-kick-green">Telas Adicionais</h2>
        <p className="text-kick-gray text-lg">
          Para quantas telas extras você precisa de acesso?
        </p>
        <p className="text-sm text-muted-foreground">
          Cada tela adicional custa R$ 15,00 por mês
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 space-y-6">
          {/* Stepper */}
          <div className="flex items-center justify-center space-x-8">
            <Button
              onClick={handleDecrease}
              disabled={additionalScreens === 0}
              variant="kick-outline"
              size="icon"
              className="w-12 h-12 rounded-full"
            >
              <Minus className="w-5 h-5" />
            </Button>

            <div className="text-center">
              <div className="text-5xl font-bold text-kick-green">
                {additionalScreens}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {additionalScreens === 0 ? 'Nenhuma tela adicional' : 
                 additionalScreens === 1 ? '1 tela adicional' : 
                 `${additionalScreens} telas adicionais`}
              </div>
            </div>

            <Button
              onClick={handleIncrease}
              disabled={additionalScreens === 2}
              variant="kick"
              size="icon"
              className="w-12 h-12 rounded-full"
            >
              <Plus className="w-5 h-5" />
            </Button>
          </div>

          {/* Cost Display */}
          {additionalScreens > 0 && (
            <div className="border-t border-border pt-4">
              <div className="text-2xl font-bold text-kick-green">
                + R$ {monthlyScreenCost},00 / mês
              </div>
              <div className="text-sm text-muted-foreground">
                Custo das telas adicionais
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};