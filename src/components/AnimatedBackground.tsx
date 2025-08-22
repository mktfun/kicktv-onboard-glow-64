import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Glow 1 - Verde primário */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-kick-green/20 to-transparent rounded-full blur-[100px]"
      />

      {/* Glow 2 - Verde mais escuro */}
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-kick-green-dark/15 to-transparent rounded-full blur-[120px]"
      />

      {/* Glow 3 - Verde claro */}
      <motion.div
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute bottom-1/3 left-1/2 w-72 h-72 bg-gradient-radial from-kick-green-light/10 to-transparent rounded-full blur-[80px]"
      />

      {/* Glow 4 - Acento */}
      <motion.div
        animate={{
          x: [0, -50, 40, 0],
          y: [0, 60, -30, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 15,
        }}
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-primary/8 to-transparent rounded-full blur-[90px]"
      />
    </div>
  );
};
