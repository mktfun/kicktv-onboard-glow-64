import { motion } from "framer-motion";
import { Rocket, Monitor, Shield } from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Estabilidade Monstra",
    description: "Nossos servidores usam tecnologia Anti-Freeze para garantir que você assista seus jogos e filmes sem travamentos."
  },
  {
    icon: Monitor,
    title: "Assista Onde Quiser",
    description: "Use no celular, na TV, no computador... Onde você estiver, a Kick TV está com você."
  },
  {
    icon: Shield,
    title: "Suporte que Resolve",
    description: "Nosso time está pronto pra te ajudar 24h por dia. Sem robôs, sem desculpas."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
            Por que escolher a <span className="text-primary">Kick TV</span>?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Tecnologia de ponta, suporte humanizado e a melhor experiência de streaming do Brasil.
          </p>
        </motion.div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: 5,
                y: -10,
                transition: { duration: 0.3, type: "spring" }
              }}
              className="group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:shadow-kick-green/10 transition-all duration-300 hover:border-kick-green/30 h-full text-center">
                
                {/* Icon with subtle 3D effect */}
                <motion.div
                  whileHover={{
                    rotateY: 360,
                    scale: 1.1,
                    transition: { duration: 0.8 }
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-kick-green/20 to-kick-green/10 rounded-2xl mb-6 group-hover:from-kick-green/30 group-hover:to-kick-green/20 transition-all duration-300 shadow-lg"
                >
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-kick-green" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-kick-green transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
