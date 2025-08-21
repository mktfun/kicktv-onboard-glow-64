import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, Shield, Clock, CheckCircle } from 'lucide-react';

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
    const telasText = additionalScreens > 0 ? `, ${additionalScreens} tela(s) adicional(is)` : '';
    const adultoText = hasAdultContent ? ', Conteúdo Adulto incluído' : '';
    return `🎬 *KICK TV - Novo Pedido*
    
📦 *Plano:* ${packageName}
⏱️ *Duração:* ${duration}${telasText}${adultoText}
💰 *Total:* R$ ${total},00

Gostaria de finalizar minha compra! 🚀`;
  };

  const whatsappLink = `https://wa.me/5511956076123?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-8 max-w-2xl mx-auto"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center space-y-4"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          className="flex justify-center mb-4"
        >
          <CheckCircle className="w-16 h-16 text-kick-green" />
        </motion.div>
        <h2 className="text-4xl font-bold text-kick-green">Seu Plano Ideal está pronto!</h2>
        <p className="text-kick-gray text-lg">
          Finalize sua compra no WhatsApp de forma rápida e segura
        </p>
      </motion.div>

      {/* Payment Summary */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="bg-card border border-border rounded-xl p-8 shadow-2xl shadow-kick-green/10 glow-green"
      >
        <h3 className="text-xl font-semibold text-kick-green mb-6">Resumo do Pedido</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-foreground">Plano:</span>
            <span className="text-kick-green font-semibold">{packageName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-foreground">Duração:</span>
            <span className="text-kick-green font-semibold">{duration}</span>
          </div>
          {additionalScreens > 0 && (
            <div className="flex justify-between items-center">
              <span className="text-foreground">Telas Adicionais:</span>
              <span className="text-kick-green font-semibold">{additionalScreens}</span>
            </div>
          )}
          {hasAdultContent && (
            <div className="flex justify-between items-center">
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
      </motion.div>

      {/* Payment Methods */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
        className="space-y-4"
      >
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            variant="kick"
            className="w-full py-6 text-lg rounded-xl font-bold hover:scale-105 transition-transform duration-200 glow-green-intense"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            FINALIZAR NO WHATSAPP
          </Button>
        </a>
      </motion.div>

      {/* Security badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        className="flex justify-center items-center space-x-8 text-muted-foreground text-sm"
      >
        <div className="flex items-center space-x-2">
          <Shield className="w-4 h-4 text-kick-green" />
          <span>Atendimento Seguro</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-kick-green" />
          <span>Ativação Imediata</span>
        </div>
      </motion.div>
    </motion.div>
  );
};
