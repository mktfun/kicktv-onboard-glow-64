import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "./AnimatedBackground";
import { Interactive3DMockup } from "./Interactive3DMockup";

interface HeroSectionProps {
  onStartFunnel: () => void;
}

export const HeroSection = ({ onStartFunnel }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-background via-background to-background/95 relative overflow-hidden">
      {/* Fundo abstrato animado */}
      <AnimatedBackground />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Sua TV,{" "}
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Reinventada
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Toda a sua TV em um só lugar. <span className="text-primary font-semibold">Sem exceção.</span>
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl">
              Canais, filmes, séries e esportes ao vivo. Compatível com todos os seus aparelhos. 
              Experimente a liberdade da Kick TV.
            </p>
            
            <Button
              onClick={onStartFunnel}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              MONTE SEU PLANO IDEAL
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center h-96"
          >
            <Interactive3DMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
