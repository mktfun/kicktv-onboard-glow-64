import { motion } from "framer-motion";
import { Rocket, Monitor, Shield, Star, Zap, Crown } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Rocket,
    title: "Estabilidade Monstra",
    description: "Nossos servidores usam tecnologia Anti-Freeze para garantir que você assista seus jogos e filmes sem travamentos.",
    gradient: "from-purple-500 via-violet-500 to-purple-600",
    glowColor: "purple"
  },
  {
    icon: Monitor,
    title: "Assista Onde Quiser", 
    description: "Use no celular, na TV, no computador... Onde você estiver, a Kick TV está com você.",
    gradient: "from-blue-500 via-cyan-500 to-blue-600",
    glowColor: "blue"
  },
  {
    icon: Shield,
    title: "Suporte que Resolve",
    description: "Nosso time está pronto pra te ajudar 24h por dia. Sem robôs, sem desculpas.",
    gradient: "from-kick-green via-green-400 to-kick-green-light",
    glowColor: "green"
  }
];

export const BenefitsSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-24 lg:py-32 px-4 relative z-10 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          animate={{ 
            rotateY: [0, 360],
            rotateX: [0, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-kick-green/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            rotateY: [360, 0],
            rotateZ: [0, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-kick-green/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotateX: [0, 360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        {/* Enhanced Header with 3D Effects */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 45 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20 relative"
          style={{ perspective: '1000px' }}
        >
          {/* 3D Title with Multiple Layers */}
          <div className="relative">
            <motion.div
              animate={{ 
                rotateY: [0, 5, 0, -5, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 px-2 relative">
                <span className="relative inline-block">
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-kick-green bg-clip-text text-transparent blur-sm opacity-80"
                    style={{ transform: 'translateZ(-10px)' }}
                  >
                    Por que escolher a
                  </span>
                  <span className="relative bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                    Por que escolher a
                  </span>
                </span>
                <br />
                <span className="relative inline-block">
                  <span 
                    className="absolute inset-0 bg-gradient-to-r from-kick-green via-green-400 to-kick-green-light bg-clip-text text-transparent blur-lg opacity-60"
                    style={{ transform: 'translateZ(-20px) translateY(4px)' }}
                  >
                    Kick TV
                  </span>
                  <span className="relative bg-gradient-to-r from-kick-green via-green-400 to-kick-green-light bg-clip-text text-transparent drop-shadow-2xl">
                    Kick TV
                  </span>
                  <Crown className="inline-block ml-4 w-8 h-8 sm:w-10 sm:h-10 text-kick-green animate-pulse" />
                </span>
                <span className="text-white">?</span>
              </h2>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 180, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 left-1/4 text-kick-green/40"
            >
              <Star className="w-6 h-6" />
            </motion.div>
            <motion.div
              animate={{ 
                y: [0, -25, 0],
                rotateY: [0, 360],
                scale: [1, 0.8, 1]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute -top-4 right-1/4 text-purple-400/40"
            >
              <Zap className="w-5 h-5" />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2 leading-relaxed"
          >
            Tecnologia de ponta, suporte humanizado e a melhor experiência de streaming do 
            <span className="text-kick-green font-semibold"> Brasil</span>.
          </motion.p>
        </motion.div>
        
        {/* 3D Cards Grid */}
        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 relative">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 100, rotateX: 45, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              whileHover={{
                y: -20,
                rotateX: 10,
                rotateY: hoveredCard === index ? 15 : 0,
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              style={{ 
                perspective: '1000px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Card Container with Advanced 3D Effects */}
              <div className="relative h-full">
                {/* Multi-layer Glow Effect */}
                <motion.div
                  animate={hoveredCard === index ? {
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.8, 0.4]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                />
                
                {/* Secondary Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />

                {/* Main Card */}
                <motion.div
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-10 h-full 
                           shadow-2xl group-hover:shadow-4xl transition-all duration-500
                           group-hover:border-white/20 group-hover:bg-black/30"
                >
                  {/* Card Inner Shadow for Depth */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-black/20" />
                  
                  {/* 3D Icon Container */}
                  <motion.div
                    whileHover={{
                      rotateY: 360,
                      scale: 1.1,
                      transition: { duration: 0.6 }
                    }}
                    className="relative mb-8 group/icon"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <div className="relative">
                      {/* Icon Background Glow */}
                      <motion.div
                        animate={hoveredCard === index ? {
                          scale: [1, 1.3, 1],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity }}
                        className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-xl opacity-60`}
                      />
                      
                      {/* Icon Container */}
                      <div className={`relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl 
                                     shadow-2xl group-hover/icon:shadow-4xl transition-all duration-300`}
                           style={{ 
                             transform: 'translateZ(20px)',
                             boxShadow: `0 20px 40px -12px rgba(52, 211, 153, 0.4), 0 0 0 1px rgba(255,255,255,0.1)`
                           }}>
                        <benefit.icon className="w-10 h-10 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10" style={{ transform: 'translateZ(10px)' }}>
                    <motion.h3 
                      className="text-2xl sm:text-3xl font-black mb-6 text-white group-hover:text-transparent 
                               group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 
                               group-hover:bg-clip-text transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {benefit.title}
                    </motion.h3>

                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-3xl">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -100, 0],
                          x: [0, Math.random() * 50 - 25, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 3 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                        className={`absolute w-1 h-1 bg-gradient-to-r ${benefit.gradient} rounded-full blur-sm`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          bottom: '10%'
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-kick-green via-green-400 to-kick-green-light rounded-full shadow-2xl"
          >
            <Crown className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
