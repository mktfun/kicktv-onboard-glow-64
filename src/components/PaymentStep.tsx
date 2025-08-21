import { Button } from './ui/button';
import { MessageCircle, Shield, Clock } from 'lucide-react';

interface PaymentStepProps {
  packageName: string;
  duration: string;
  total: number;
  hasAdultContent: boolean;
  additionalScreens: number;
}

export const PaymentStep = ({
  packageName,
  duration,
  total,
  hasAdultContent,
  additionalScreens
}: PaymentStepProps) => {
  const generateWhatsAppMessage = () => {
    const telasText = additionalScreens > 0 ? `, Telas Adicionais - ${additionalScreens}` : '';
    return `Olá! Montei meu plano ideal no site da Kick TV e quero finalizar a compra. Detalhes: Plano - ${packageName}${telasText}, Total - R$ ${total}`;
  };

  const whatsappLink = `https://wa.me/5511956076123?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold text-kick-green">Seu Plano Ideal está pronto!</h2>
        <p className="text-kick-gray text-lg">
          Finalize sua compra no WhatsApp de forma rápida e segura
        </p>
      </div>

      {/* Payment Summary */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h3 className="text-xl font-semibold text-kick-green mb-4">Resumo do Pedido</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-foreground">Plano:</span>
            <span className="text-kick-green font-semibold">{packageName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-foreground">Duração:</span>
            <span className="text-kick-green font-semibold">{duration}</span>
          </div>
          {additionalScreens > 0 && (
            <div className="flex justify-between">
              <span className="text-foreground">Telas Adicionais:</span>
              <span className="text-kick-green font-semibold">{additionalScreens}</span>
            </div>
          )}
          {hasAdultContent && (
            <div className="flex justify-between">
              <span className="text-foreground">Conteúdo Adulto:</span>
              <span className="text-kick-green font-semibold">Incluso</span>
            </div>
          )}
          <hr className="border-border" />
          <div className="flex justify-between items-center text-xl">
            <span className="font-bold text-foreground">Total:</span>
            <span className="font-bold text-kick-green">R$ {total},00</span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-4">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            variant="kick"
            className="w-full py-4 text-lg rounded-xl"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            FINALIZAR NO WHATSAPP
          </Button>
        </a>
      </div>

      {/* Security badges */}
      <div className="flex justify-center items-center space-x-6 text-muted-foreground text-sm">
        <div className="flex items-center space-x-1">
          <Shield className="w-4 h-4" />
          <span>Atendimento Seguro</span>
        </div>
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>Ativação Imediata</span>
        </div>
      </div>
    </div>
  );
};