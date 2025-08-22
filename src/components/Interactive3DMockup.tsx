import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";

export const Interactive3DMockup = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className="relative w-full h-full flex justify-center items-center"
      style={{ perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {/* Glow effect que reage ao hover */}
      <motion.div
        animate={{
          opacity: isHovered ? 0.6 : 0.3,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-r from-kick-green/20 to-primary/10 rounded-2xl blur-2xl"
      />
      
      <motion.div
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        className="relative z-10 w-full"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border-2 border-green-500/30 shadow-2xl shadow-green-500/20 backdrop-blur-sm"
        >
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-green-500/20">
            <div className="h-full flex flex-col bg-gradient-to-br from-green-500/10 to-gray-900/50 p-6">
              {/* Header animado */}
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-kick-green rounded-full flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="w-4 h-4 text-background"
                    >
                      ⚡
                    </motion.div>
                  </div>
                  <span className="text-kick-green font-bold text-sm">KICK TV</span>
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center space-x-1 bg-red-600 rounded-full px-2 py-1"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white text-xs font-bold">AO VIVO</span>
                </motion.div>
              </motion.div>

              {/* Grid de canais animado */}
              <div className="flex-1 grid grid-cols-3 gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: [0.8, 1, 0.8],
                      scale: [0.95, 1, 0.95],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="bg-gradient-to-br from-muted/80 to-muted/40 rounded-lg flex items-center justify-center relative overflow-hidden"
                  >
                    {/* Efeito de loading/streaming */}
                    <motion.div
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-kick-green/30 to-transparent"
                    />
                    
                    <motion.div
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.1,
                      }}
                      className="w-6 h-6 bg-kick-green/60 rounded-full flex items-center justify-center relative z-10"
                    >
                      <div className="w-3 h-3 text-background text-xs">▶</div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* Barra de progresso animada */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-4 space-y-2"
              >
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Futebol Brasileiro</span>
                  <span>21:30 - 23:00</span>
                </div>
                <div className="w-full bg-muted/50 rounded-full h-1">
                  <motion.div
                    animate={{
                      width: ["30%", "35%", "30%"]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                    className="bg-kick-green h-1 rounded-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
