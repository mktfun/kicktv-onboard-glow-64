import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, Shield, Clock, CheckCircle, Sparkles, Crown, Star } from 'lucide-react';

interface PaymentStepProps {
  packageName: string;
  duration: string;
  total: number;
  hasAdultContent: boolean;
  hasWhot: boolean;
  additionalScreens: number;
}

export const PaymentStep = ({
  packageName,
  duration,
  total,
  hasAdultContent,
  hasWhot,
  additionalScreens
}: PaymentStepProps) => {
  const generateWhatsAppMessage = () => {
    let message = `*KICK TV - Novo Pedido*

*Plano:* ${packageName}
*Duracao:* ${duration}`;

    if (additionalScreens > 0) {
      message += `
*Telas Adicionais:* ${additionalScreens}`;
    }

    if (hasAdultContent) {
      message += `
*Conteudo Adulto:* Incluido`;
    }

    if (hasWhot) {
      message += `
*Whot (+18):* Incluido`;
    }

    message += `

*Total:* R$ ${total},00

Gostaria de finalizar minha compra!`;

    return message;
  };

  const whatsappLink = `https://wa.me/5511956076123?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-kick-green/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-kick-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-kick-green/5 rounded-full blur-3xl animate-pulse"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 space-y-12 max-w-4xl mx-auto px-4 py-8"
      >
        {/* Premium Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center space-y-6 relative"
        >
          {/* Floating Elements */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-8 left-1/4 text-kick-green/30"
          >
            <Sparkles className="w-6 h-6" />
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute -top-4 right-1/4 text-kick-green/30"
          >
            <Star className="w-5 h-5" />
          </motion.div>

          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.4, 
              type: "spring",
              bounce: 0.4
            }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-kick-green to-kick-green-light rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-kick-green to-kick-green-dark rounded-full flex items-center justify-center shadow-2xl shadow-kick-green/50">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-kick-green via-kick-green-light to-kick-green bg-clip-text text-transparent leading-tight">
              Plano Ideal
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              está pronto!
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Finalize sua compra no WhatsApp de forma <span className="text-kick-green font-semibold">rápida e segura</span>
          </motion.p>
        </motion.div>

        {/* Premium Summary Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-kick-green/20 via-kick-green-light/20 to-kick-green/20 rounded-3xl blur-xl"></div>
          
          <div className="relative bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-xl border border-kick-green/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-kick-green/10">
            {/* Premium Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-3">
                <Crown className="w-8 h-8 text-kick-green" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-kick-green to-kick-green-light bg-clip-text text-transparent">
                  Resumo Premium
                </h3>
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="px-4 py-2 bg-gradient-to-r from-kick-green to-kick-green-light rounded-full"
              >
                <span className="text-xs font-bold text-background">EXCLUSIVO</span>
              </motion.div>
            </div>

            {/* Summary Items */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="flex justify-between items-center p-4 bg-gradient-to-r from-kick-green/5 to-transparent rounded-xl border border-kick-green/10"
              >
                <span className="text-foreground font-medium">📦 Plano</span>
                <span className="text-kick-green font-bold text-lg">{packageName}</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 }}
                className="flex justify-between items-center p-4 bg-gradient-to-r from-kick-green/5 to-transparent rounded-xl border border-kick-green/10"
              >
                <span className="text-foreground font-medium">⏱️ Duração</span>
                <span className="text-kick-green font-bold text-lg">{duration}</span>
              </motion.div>
              
              {additionalScreens > 0 && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4 }}
                  className="flex justify-between items-center p-4 bg-gradient-to-r from-kick-green/5 to-transparent rounded-xl border border-kick-green/10"
                >
                  <span className="text-foreground font-medium">📺 Telas Extras</span>
                  <span className="text-kick-green font-bold text-lg">{additionalScreens}</span>
                </motion.div>
              )}
              
              {hasAdultContent && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  className="flex justify-between items-center p-4 bg-gradient-to-r from-kick-green/5 to-transparent rounded-xl border border-kick-green/10"
                >
                  <span className="text-foreground font-medium">🔞 Conteúdo Adulto</span>
                  <span className="text-kick-green font-bold text-lg">Incluso</span>
                </motion.div>
              )}
              
              {hasWhot && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.6 }}
                  className="flex justify-between items-center p-4 bg-gradient-to-r from-kick-green/5 to-transparent rounded-xl border border-kick-green/10"
                >
                  <span className="text-foreground font-medium">🔞 Whot (+18)</span>
                  <span className="text-kick-green font-bold text-lg">Incluso</span>
                </motion.div>
              )}

              {/* Total Section - Transparente para mostrar o fundo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.7 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-kick-green/10 to-kick-green-light/10 rounded-2xl blur-lg"></div>
                <div className="relative bg-black/20 backdrop-blur-sm border-2 border-kick-green/30 rounded-2xl p-6">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-white drop-shadow-lg">💰 Total</span>
                    <span className="text-3xl font-black bg-gradient-to-r from-kick-green to-kick-green-light bg-clip-text text-transparent drop-shadow-lg">
                      R$ {total},00
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Premium CTA Button - Transparente para mostrar o fundo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="space-y-6"
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-kick-green/30 via-kick-green-light/30 to-kick-green/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>

              <Button
                variant="kick"
                className="relative w-full py-8 text-xl rounded-2xl font-black bg-black/30 backdrop-blur-sm border-2 border-kick-green/50 hover:bg-black/40 hover:border-kick-green/70 shadow-2xl shadow-kick-green/50 transform transition-all duration-300"
              >
                <motion.div
                  className="flex items-center justify-center space-x-3"
                  animate={{
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <MessageCircle className="w-7 h-7 text-kick-green drop-shadow-lg" />
                  <span className="text-white font-black drop-shadow-lg">FINALIZAR NO WHATSAPP</span>
                  <Sparkles className="w-6 h-6 text-kick-green drop-shadow-lg" />
                </motion.div>
              </Button>
            </motion.div>
          </a>
        </motion.div>

        {/* Premium Security Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-muted-foreground"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-kick-green/20 backdrop-blur-sm"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-kick-green/20 to-kick-green-light/20 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-kick-green" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Atendimento Seguro</div>
              <div className="text-xs text-muted-foreground">100% Protegido</div>
            </div>
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 p-4 bg-card/50 rounded-xl border border-kick-green/20 backdrop-blur-sm"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-kick-green/20 to-kick-green-light/20 rounded-full flex items-center justify-center">
              <Clock className="w-5 h-5 text-kick-green" />
            </div>
            <div>
              <div className="font-semibold text-foreground">Ativação Imediata</div>
              <div className="text-xs text-muted-foreground">Em minutos</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
