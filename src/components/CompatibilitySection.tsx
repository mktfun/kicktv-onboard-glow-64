import { motion } from "framer-motion";
import { Tv, Laptop, Smartphone } from "lucide-react";

const devices = [
  {
    name: "Smart TV",
    icon: Tv,
    description: "Assista na sua Smart TV",
    mockup: "TV com interface do app e jogo de futebol passando"
  },
  {
    name: "Computador", 
    icon: Laptop,
    description: "No seu laptop ou desktop",
    mockup: "MacBook com grade de canais sendo rolada"
  },
  {
    name: "iPhone",
    icon: Smartphone,
    description: "No seu iPhone",
    mockup: "iPhone com stories vertical de filmes"
  },
  {
    name: "Android",
    icon: Smartphone, 
    description: "No seu Android",
    mockup: "Samsung com interface kids e desenhos"
  }
];

export const CompatibilitySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funciona em <span className="text-primary">tudo</span> que você já tem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Não importa o dispositivo. A Kick TV se adapta perfeitamente à sua rotina.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/20 text-center h-full">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted/30 rounded-xl mb-6 overflow-hidden border border-border relative group-hover:border-primary/20 transition-colors duration-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
                        <device.icon className="w-6 h-6 text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">
                        {device.mockup}
                      </p>
                    </div>
                  </div>
                  
                  {/* Simulated video overlay */}
                  <div className="absolute top-2 right-2 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {device.name}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  {device.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground">
            E mais: Chromecast, Apple TV, Fire Stick, e qualquer dispositivo com navegador web.
          </p>
        </motion.div>
      </div>
    </section>
  );
};