interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-kick-gray">Passo {currentStep} de {totalSteps}</span>
        <span className="text-sm text-kick-gray">{Math.round(progress)}% completo</span>
      </div>
      <div className="w-full bg-kick-dark rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-kick-green to-kick-green-light transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};