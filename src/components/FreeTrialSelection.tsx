import { motion } from "framer-motion";
import { Clock, Crown, Zap } from "lucide-react";

interface FreeTrialSelectionProps {
  selectedPackage: string;
  onSelectPackage: (packageName: string) => void;
}

const trialPackages = [
  {
    name: "Krator+",
    duration: "1 hora",
    icon: Zap,
    description: "Canais, filmes e séries com app próprio (não funciona no iPhone)",
    gradient: "from-purple-600 to-purple-700",
    border: "border-purple-500/30",
    glow: "shadow-purple-500/20"
  },
  {
    name: "IPTV",
    duration: "4 horas",
    icon: Clock,
    description: "Canais, filmes e séries ao vivo",
    gradient: "from-blue-600 to-blue-700",
    border: "border-blue-500/30",
    glow: "shadow-blue-500/20",
    popular: true
  },
  {
    name: "Nexus",
    duration: "24 horas",
    icon: Crown,
    description: "Experiência completa com app próprio (não funciona no iPhone)",
    gradient: "from-kick-green to-kick-green-dark",
    border: "border-kick-green/30",
    glow: "shadow-kick-green/20"
  }
];

export const FreeTrialSelection = ({ selectedPackage, onSelectPackage }: FreeTrialSelectionProps) => {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
          Escolha seu <span className="text-kick-green">Teste por R$ 5</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Experimente nossa plataforma por apenas R$ 5,00. Selecione o plano que deseja testar.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {trialPackages.map((pkg, index) => (
          <motion.div
            key={pkg.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              y: -5,
              transition: { duration: 0.2 }
            }}
            onClick={() => onSelectPackage(pkg.name)}
            className={`relative cursor-pointer group ${
              selectedPackage === pkg.name 
                ? `bg-gradient-to-br ${pkg.gradient} border-2 ${pkg.border}` 
                : 'bg-card/80 backdrop-blur-sm border border-border hover:border-white/20'
            } rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            {/* Popular Badge */}
            {pkg.popular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-kick-green to-kick-green-light px-4 py-1 rounded-full text-xs font-bold text-black"
              >
                MAIS POPULAR
              </motion.div>
            )}

            {/* Icon */}
            <motion.div
              whileHover={{ rotateY: 180, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 ${
                selectedPackage === pkg.name 
                  ? 'bg-white/20' 
                  : `bg-gradient-to-br ${pkg.gradient}`
              }`}
            >
              <pkg.icon className={`w-8 h-8 ${
                selectedPackage === pkg.name ? 'text-white' : 'text-white'
              }`} />
            </motion.div>

            {/* Content */}
            <div className="space-y-3">
              <h3 className={`text-2xl font-bold ${
                selectedPackage === pkg.name ? 'text-white' : 'text-white'
              }`}>
                {pkg.name}
              </h3>
              
              <div className={`text-3xl font-black ${
                selectedPackage === pkg.name ? 'text-white' : 'text-kick-green'
              }`}>
                {pkg.duration}
              </div>
              
              <p className={`text-sm ${
                selectedPackage === pkg.name ? 'text-white/80' : 'text-gray-400'
              }`}>
                {pkg.description}
              </p>
            </div>

            {/* Selection Indicator */}
            {selectedPackage === pkg.name && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"
              />
            )}

            {/* Glow Effect */}
            <motion.div
              className={`absolute inset-0 rounded-2xl ${pkg.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center"
      >
        <p className="text-sm text-gray-400">
          ⭐ Teste por R$ 5,00 • PIX ou cartão • Ativação imediata
        </p>
      </motion.div>
    </div>
  );
};
