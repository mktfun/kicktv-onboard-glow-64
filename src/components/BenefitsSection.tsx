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
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-card/50">
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
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 10,
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="text-center group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full mb-4 sm:mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
