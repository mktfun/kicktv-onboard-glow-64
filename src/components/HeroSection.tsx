import { motion } from "framer-motion";
import { AnimatedBackground } from "./AnimatedBackground";
import { Interactive3DMockup } from "./Interactive3DMockup";

interface HeroSectionProps {
  onStartFunnel: () => void;
}

export const HeroSection = ({ onStartFunnel }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fundo abstrato animado */}
      <AnimatedBackground />
      
      {/* Container Principal - Blueprint exato */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Coluna da Esquerda - O Texto Persuasivo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight">
            Sua TV,{" "}
            <span className="text-green-400">
              Reinventada.
            </span>
          </h1>
          
          <p className="mt-4 max-w-xl mx-auto lg:mx-0 text-lg text-gray-400 leading-relaxed">
            Toda a sua TV em um só lugar. <span className="text-green-400 font-semibold">Sem exceção.</span> 
            Canais, filmes, séries e esportes ao vivo. Compatível com todos os seus aparelhos.
          </p>
          
          <motion.button
            onClick={onStartFunnel}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-green-500 text-black font-bold py-3 px-8 rounded-lg text-lg transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-green-500/25"
          >
            MONTE SEU PLANO IDEAL
          </motion.button>
        </motion.div>
        
        {/* Coluna da Direita - O Mockup que Vende */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:w-1/2 flex items-center justify-center p-8"
        >
          <div className="w-full max-w-2xl">
            {/* Mockup 3D Interativo - SIGNIFICATIVAMENTE MAIOR */}
            <div className="aspect-[4/3] w-full">
              <Interactive3DMockup />
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
