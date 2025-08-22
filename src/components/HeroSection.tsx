import { motion } from "framer-motion";
import { ContainerScroll } from "./ContainerScroll";
import { KickTVInterface } from "./KickTVInterface";

interface HeroSectionProps {
  onStartFunnel: (event?: React.MouseEvent | React.KeyboardEvent) => void;
}

export const HeroSection = ({ onStartFunnel }: HeroSectionProps) => {
  return (
    <section className="min-h-[80vh] sm:min-h-[85vh] lg:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden py-8 sm:py-12 lg:py-0">{/* Fundo agora é global - AnimatedBackground foi movido para LandingPage */}

      {/* Container Principal - Mobile-first otimizado */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 relative z-20">
        
        {/* Coluna da Esquerda - O Texto Persuasivo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left px-2 sm:px-0"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight">
            Sua TV,{" "}
            <span className="text-green-400">
              Reinventada.
            </span>
          </h1>

          <p className="mt-3 sm:mt-4 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-400 leading-relaxed px-2 sm:px-0">
            Toda a sua TV em um só lugar. <span className="text-green-400 font-semibold">Sem exceção.</span>
            Canais, filmes, séries e esportes ao vivo. Compatível com todos os seus aparelhos.
          </p>

          <motion.button
            onClick={(e) => {
              // Prevenir ativação durante animações ou movimentos acidentais
              e.preventDefault();
              e.stopPropagation();
              onStartFunnel(e);
            }}
            onMouseDown={(e) => {
              // Garantir que é um clique intencional
              if (e.button !== 0) return; // Apenas botão esquerdo do mouse
            }}
            onTouchStart={(e) => {
              // Prevenir toques acidentais muito rápidos
              e.currentTarget.style.touchAction = 'manipulation';
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 sm:mt-8 w-full sm:w-auto inline-block bg-green-500 text-black font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-base sm:text-lg transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-green-500/25 touch-manipulation select-none"
            style={{ touchAction: 'manipulation' }}
          >
            MONTE SEU PLANO IDEAL
          </motion.button>
        </motion.div>
        
        {/* Coluna da Direita - O Mockup que Vende */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:w-1/2 flex items-center justify-center p-2 sm:p-4 lg:p-8 w-full"
        >
          <div className="w-full max-w-sm sm:max-w-lg lg:max-w-2xl">
            {/* Mockup 3D Interativo - Responsivo */}
            <div className="aspect-[4/3] w-full">
              <Interactive3DMockup />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
