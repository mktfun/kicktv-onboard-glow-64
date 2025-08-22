import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { MessageCircle, CheckCircle, Sparkles, Clock } from 'lucide-react';

interface FreeTrialFinalScreenProps {
  packageName: string;
}

export const FreeTrialFinalScreen = ({
  packageName
}: FreeTrialFinalScreenProps) => {
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
    let message = `*KICK TV - Solicitação de Teste por R$ 5,00*

*Plano:* ${packageName}
*Duração do Teste:* ${getTrialDuration()}
*Valor:* R$ 5,00

Gostaria de solicitar meu teste por R$ 5,00!`;

    return message;
  };

  const whatsappLink = `https://wa.me/5511956076123?text=${encodeURIComponent(generateWhatsAppMessage())}`;

  return (
    <div className="space-y-12 max-w-3xl mx-auto text-center">
      {/* Header with celebration animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-8"
      >
        {/* Success Icon */}
        <motion.div 
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1, 
            delay: 0.2, 
            type: "spring",
            bounce: 0.6
          }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-kick-green to-kick-green-light rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="relative w-24 h-24 bg-gradient-to-br from-kick-green to-kick-green-dark rounded-full flex items-center justify-center shadow-2xl shadow-kick-green/50">
              <CheckCircle className="w-14 h-14 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            <span className="bg-gradient-to-r from-kick-green via-green-400 to-kick-green-light bg-clip-text text-transparent">
              Seu teste
            </span>
            <br />
            <span className="text-white">por R$ 5,00!</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mx-auto leading-relaxed">
            Experimente o melhor da <span className="text-kick-green font-semibold">Kick TV</span> por apenas R$ 5,00
          </p>
        </motion.div>
      </motion.div>

      {/* Trial Details Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-kick-green/20 via-kick-green-light/20 to-kick-green/20 rounded-3xl blur-xl"></div>
        
        <div className="relative bg-black/40 backdrop-blur-xl border border-kick-green/30 rounded-3xl p-8 md:p-12">
          <div className="space-y-6">
            {/* Package Info */}
            <div className="flex items-center justify-center space-x-4">
              <Sparkles className="w-8 h-8 text-kick-green" />
              <h2 className="text-3xl font-bold text-white">
                {packageName}
              </h2>
              <Sparkles className="w-8 h-8 text-kick-green" />
            </div>

            {/* Duration Badge */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-kick-green to-kick-green-light px-6 py-3 rounded-full mx-auto"
            >
              <Clock className="w-5 h-5 text-black" />
              <span className="text-lg font-bold text-black">
                {getTrialDuration()} por R$ 5,00
              </span>
            </motion.div>

            {/* Benefits */}
            <div className="grid gap-4 text-center max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <span className="w-2 h-2 bg-kick-green rounded-full"></span>
                <span>Acesso completo durante o teste</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <span className="w-2 h-2 bg-kick-green rounded-full"></span>
                <span>Apenas R$ 5,00 via PIX ou cartão</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <span className="w-2 h-2 bg-kick-green rounded-full"></span>
                <span>Ativação em minutos</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* WhatsApp CTA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
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
            <div className="absolute inset-0 bg-gradient-to-r from-kick-green/40 via-kick-green-light/40 to-kick-green/40 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
            
            <Button
              variant="kick"
              className="relative w-full max-w-md py-8 text-xl rounded-2xl font-black bg-black/30 backdrop-blur-sm border-2 border-kick-green/50 hover:bg-black/40 hover:border-kick-green/70 shadow-2xl shadow-kick-green/50 transform transition-all duration-300"
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
                <MessageCircle className="w-8 h-8 text-kick-green drop-shadow-lg" />
              <span className="text-white font-black drop-shadow-lg">SOLICITAR TESTE POR R$ 5</span>
                <Sparkles className="w-7 h-7 text-kick-green drop-shadow-lg" />
              </motion.div>
            </Button>
          </motion.div>
        </a>
      </motion.div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="text-center"
      >
        <p className="text-sm text-gray-400">
          💰 Por apenas R$ 5,00 você testa a melhor experiência de TV do Brasil
        </p>
      </motion.div>
    </div>
  );
};
