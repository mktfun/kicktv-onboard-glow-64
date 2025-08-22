import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Componente do Mockup da Smart TV
const TVMockup = () => (
  <div className="relative w-full h-full flex justify-center">
    {/* TV Frame */}
    <div className="bg-gray-900 rounded-lg p-1 sm:p-1.5 shadow-2xl aspect-video h-full max-w-full">
      {/* TV Screen */}
      <div className="bg-black rounded aspect-video relative overflow-hidden h-full">
        {/* Simulated TV Content */}
        <div className="absolute inset-0 bg-gradient-to-br from-kick-green/20 to-kick-green/5">
          <div className="p-3">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-2">
              <div className="text-white text-xs sm:text-xs font-bold">KICK TV</div>
              <div className="text-white text-xs sm:text-xs">20:30</div>
            </div>

            {/* Channel Grid */}
            <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
              {Array.from({length: 6}).map((_, i) => (
                <div key={i} className="bg-gray-800/60 rounded aspect-video relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-2 h-2 sm:w-3 sm:h-3 text-kick-green" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Live indicator */}
        <div className="absolute top-2 right-2">
          <div className="flex items-center space-x-1 bg-red-600 rounded-full px-2 py-1">
            <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
            <span className="text-white text-xs sm:text-xs font-bold">AO VIVO</span>
          </div>
        </div>
      </div>
    </div>

    {/* TV Stand */}
    <div className="flex justify-center mt-1">
      <div className="w-8 h-2 bg-gray-700 rounded-full"></div>
    </div>
  </div>
);

// Componente do Mockup do MacBook
const LaptopMockup = () => (
  <div className="relative w-full h-full flex justify-center">
    {/* MacBook Body */}
    <div className="bg-gray-300 rounded-t-xl p-1 sm:p-1.5 shadow-2xl aspect-video h-full max-w-full">
      {/* Screen */}
      <div className="bg-black rounded-t-lg relative overflow-hidden h-full">
        {/* Browser Chrome */}
        <div className="bg-gray-700 px-2 py-1 flex items-center space-x-1">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 bg-gray-600 rounded text-xs text-gray-300 px-2 py-1 ml-2">
            kick.tv
          </div>
        </div>

        {/* App Content */}
        <div className="bg-gradient-to-br from-kick-green/10 to-black p-2 h-full">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <div className="text-kick-green text-xs font-bold">KICK TV</div>
            <div className="text-gray-400 text-xs">Canais • Filmes • Séries</div>
          </div>

          {/* Channel List */}
          <div className="space-y-1">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className="flex items-center space-x-2 bg-gray-800/40 rounded p-1">
                <div className="w-6 sm:w-8 h-4 sm:h-5 bg-kick-green/30 rounded flex items-center justify-center">
                  <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-kick-green" />
                </div>
                <div className="flex-1">
                  <div className="w-12 h-1 bg-gray-600 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* MacBook Base */}
    <div className="bg-gray-300 h-0.5 rounded-b-xl"></div>
  </div>
);

// Componente do Mockup do iPhone
const iPhoneMockup = () => (
  <div className="relative w-full h-full flex justify-center">
    {/* iPhone Body */}
    <div className="bg-gray-900 rounded-[1.5rem] p-1 shadow-2xl w-8 sm:w-10 lg:w-12 h-full">
      {/* Screen */}
      <div className="bg-black rounded-[1.25rem] relative overflow-hidden h-full">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-900 rounded-b-lg z-10"></div>

        {/* App Content */}
        <div className="bg-gradient-to-b from-kick-green/10 to-black p-2 h-full pt-4">
          {/* Status Bar */}
          <div className="flex justify-between items-center mb-2 text-white text-xs">
            <div>9:41</div>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
              <div className="w-1 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          {/* App Interface */}
          <div className="text-center mb-2">
            <div className="text-kick-green text-xs font-bold">KICK</div>
          </div>

          {/* Vertical Content (Stories style) */}
          <div className="space-y-2">
            {Array.from({length: 3}).map((_, i) => (
              <div key={i} className="bg-gray-800/60 rounded aspect-video relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-3 h-3 text-kick-green" />
                </div>
                <div className="absolute bottom-1 left-1 right-1">
                  <div className="w-full h-0.5 bg-gray-600 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Componente do Mockup do Android
const AndroidMockup = () => (
  <div className="relative w-full h-full flex justify-center">
    {/* Android Body */}
    <div className="bg-gray-800 rounded-2xl p-1 shadow-2xl w-8 sm:w-10 lg:w-12 h-full">
      {/* Screen */}
      <div className="bg-black rounded-xl relative overflow-hidden h-full">
        {/* App Content */}
        <div className="bg-gradient-to-b from-kick-green/10 to-black p-2 h-full">
          {/* Status Bar */}
          <div className="flex justify-between items-center mb-2 text-white text-xs">
            <div>21:30</div>
            <div>100%</div>
          </div>

          {/* Kids Interface */}
          <div className="text-center mb-2">
            <div className="text-kick-green text-xs font-bold">KICK KIDS</div>
          </div>

          {/* Kids Content Grid */}
          <div className="grid grid-cols-2 gap-1">
            {Array.from({length: 4}).map((_, i) => (
              <div key={i} className="bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded aspect-square relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 sm:w-4 h-3 sm:h-4 bg-kick-green/30 rounded-full flex items-center justify-center">
                    <Play className="w-1.5 h-1.5 sm:w-2 sm:h-2 text-kick-green" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const devices = [
  {
    name: "Smart TV",
    description: "Assista na sua Smart TV",
    component: TVMockup
  },
  {
    name: "Computador",
    description: "No seu laptop ou desktop",
    component: LaptopMockup
  },
  {
    name: "iPhone",
    description: "No seu iPhone",
    component: iPhoneMockup
  },
  {
    name: "Android",
    description: "No seu Android",
    component: AndroidMockup
  }
];

export const CompatibilitySection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 px-2">
            Funciona em <span className="text-kick-green">tudo</span> que você já tem
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Não importa o dispositivo. A Kick TV se adapta perfeitamente à sua rotina.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {devices.map((device, index) => (
            <motion.div
              key={device.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: 10,
                y: -15,
                transition: { duration: 0.3, type: "spring" }
              }}
              className="group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg hover:shadow-2xl hover:shadow-kick-green/10 transition-all duration-300 hover:border-kick-green/20 text-center h-full flex flex-col">
                {/* Device Mockup Container */}
                <div className="h-16 sm:h-20 lg:h-24 mb-3 sm:mb-4 relative group-hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                  <device.component />
                </div>

                {/* Texto fixo no final */}
                <div className="mt-auto">
                  <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 group-hover:text-kick-green transition-colors duration-300">
                    {device.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                    {device.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6 sm:mt-8 lg:mt-10"
        >
          <p className="text-xs sm:text-sm text-muted-foreground px-4">
            E mais: Chromecast, Apple TV, Fire Stick, e qualquer dispositivo com navegador web.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
