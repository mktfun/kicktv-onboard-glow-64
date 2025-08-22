import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, Shield, Clock, CheckCircle, Sparkles } from 'lucide-react';

interface FreeTrialSummaryProps {
  packageName: string;
  duration: string;
  additionalScreens: number;
  hasAdultContent: boolean;
  durationMonths: number;
}

export const FreeTrialSummary = ({
  packageName,
  duration,
  additionalScreens,
  hasAdultContent,
  durationMonths
}: FreeTrialSummaryProps) => {
  const getTrialDuration = () => {
    switch (packageName) {
      case 'IPTV':
        return '4 horas';
      case 'Krator+':
        return '1 hora';
      case 'Nexus':
        return '24 horas';
      default:
        return '1 hora';
    }
  };

  const generateWhatsAppMessage = () => {
    let message = `*KICK TV - Solicitação de Teste Gratuito*

*Plano:* ${packageName}
*Duração do Teste:* ${getTrialDuration()}
*Duração do Plano:* ${duration}`;

    if (additionalScreens > 0) {
      message += `
*Telas Adicionais:* ${additionalScreens}`;
    }

    if (hasAdultContent) {
      message += `
*Conteudo Adulto:* Incluido`;
    }

    message += `

Gostaria de solicitar meu teste gratuito!`;

    return message;
  };

  const whatsappLink = `https://wa.me/5511956076123?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center space-y-6 relative"
      >
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
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-kick-green via-green-400 to-kick-green-light bg-clip-text text-transparent leading-tight">
            Teste Gratuito
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
            quase pronto!
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Solicite seu teste através do WhatsApp e comece a experimentar 
          <span className="text-kick-green font-semibold"> agora mesmo</span>
        </motion.p>
      </motion.div>

      {/* Summary Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-kick-green/20 via-kick-green-light/20 to-kick-green/20 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-black/40 backdrop-blur-xl border border-kick-green/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-kick-green/10">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-kick-green" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-kick-green to-kick-green-light bg-clip-text text-transparent">
                Resumo do Teste
              </h3>
            </div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-4 py-2 bg-gradient-to-r from-kick-green to-kick-green-light rounded-full"
            >
              <span className="text-xs font-bold text-background">GRATUITO</span>
            </motion.div>
          </div>

          {/* Summary Items */}
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-kick-green/10"
            >
              <span className="text-foreground font-medium">🎯 Plano</span>
              <span className="text-kick-green font-bold text-lg">{packageName}</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-kick-green/10"
            >
              <span className="text-foreground font-medium">⏱️ Duração do Teste</span>
              <span className="text-kick-green font-bold text-lg">{getTrialDuration()}</span>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 }}
              className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-kick-green/10"
            >
              <span className="text-foreground font-medium">📅 Plano Pretendido</span>
              <span className="text-kick-green font-bold text-lg">{duration}</span>
            </motion.div>
            
            {additionalScreens > 0 && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
                className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-kick-green/10"
              >
                <span className="text-foreground font-medium">📺 Telas Extras</span>
                <span className="text-kick-green font-bold text-lg">{additionalScreens}</span>
              </motion.div>
            )}
            
            {hasAdultContent && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
                className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-kick-green/10"
              >
                <span className="text-foreground font-medium">🔞 Conteúdo Adulto</span>
                <span className="text-kick-green font-bold text-lg">Incluso</span>
              </motion.div>
            )}

            {/* Highlight */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-kick-green/20 to-kick-green-light/20 rounded-2xl blur-lg"></div>
              <div className="relative bg-gradient-to-r from-kick-green/10 to-kick-green-light/10 border-2 border-kick-green/30 rounded-2xl p-6">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-white">🎁 Valor</span>
                  <span className="text-3xl font-black bg-gradient-to-r from-kick-green to-kick-green-light bg-clip-text text-transparent">
                    GRÁTIS
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* CTA Button */}
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
                <span className="text-white font-black drop-shadow-lg">SOLICITAR TESTE GRATUITO</span>
                <Sparkles className="w-6 h-6 text-kick-green drop-shadow-lg" />
              </motion.div>
            </Button>
          </motion.div>
        </a>
      </motion.div>

      {/* Security Info */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-12 text-muted-foreground"
      >
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 p-4 bg-black/30 rounded-xl border border-kick-green/20 backdrop-blur-sm"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-kick-green/20 to-kick-green-light/20 rounded-full flex items-center justify-center">
            <Shield className="w-5 h-5 text-kick-green" />
          </div>
          <div>
            <div className="font-semibold text-foreground">100% Gratuito</div>
            <div className="text-xs text-muted-foreground">Sem cartão de crédito</div>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 p-4 bg-black/30 rounded-xl border border-kick-green/20 backdrop-blur-sm"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-kick-green/20 to-kick-green-light/20 rounded-full flex items-center justify-center">
            <Clock className="w-5 h-5 text-kick-green" />
          </div>
          <div>
            <div className="font-semibold text-foreground">Ativação Rápida</div>
            <div className="text-xs text-muted-foreground">Em minutos</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
