import { Play, Heart, Share, Volume2 } from "lucide-react";

export const KickTVInterface = () => {
  return (
    <div className="w-full h-full bg-black rounded-xl overflow-hidden relative">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-black/80 to-transparent absolute top-0 left-0 right-0 z-10">
        <div className="flex items-center space-x-4">
          <div className="text-kick-green text-xl font-bold">KICK TV</div>
          <div className="flex space-x-2 text-sm text-gray-300">
            <span className="bg-red-600 px-2 py-1 rounded text-white text-xs font-bold">AO VIVO</span>
            <span>HD</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <Volume2 className="w-5 h-5" />
          <div className="text-sm">20:30</div>
        </div>
      </div>

      {/* Main Video Content */}
      <div className="relative w-full h-3/5 bg-gradient-to-br from-kick-green/20 to-blue-600/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 rounded-full p-6">
            <Play className="w-12 h-12 text-kick-green" />
          </div>
        </div>
        
        {/* Video Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-black/70 rounded-lg p-3">
            <h3 className="text-white font-bold text-lg">Brasileirão 2024</h3>
            <p className="text-gray-300 text-sm">Flamengo vs Palmeiras - Ao Vivo</p>
          </div>
        </div>
      </div>

      {/* Channel Grid / Menu */}
      <div className="p-4 h-2/5 bg-gradient-to-b from-gray-900 to-black">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-white font-semibold">Canais Populares</h4>
          <div className="text-kick-green text-sm">Ver todos</div>
        </div>
        
        <div className="grid grid-cols-4 gap-2">
          {[
            { name: "SporTV", live: true },
            { name: "Globo", live: true },
            { name: "Netflix", live: false },
            { name: "Prime", live: false },
            { name: "ESPN", live: true },
            { name: "TNT", live: true },
            { name: "HBO Max", live: false },
            { name: "Disney+", live: false }
          ].map((channel, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-2 hover:bg-gray-700 transition-colors">
              <div className="aspect-video bg-gradient-to-br from-kick-green/10 to-blue-500/10 rounded flex items-center justify-center mb-1">
                <Play className="w-4 h-4 text-kick-green" />
              </div>
              <div className="text-white text-xs font-medium text-center">{channel.name}</div>
              {channel.live && (
                <div className="text-red-500 text-xs text-center">• AO VIVO</div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="bg-kick-green text-black px-4 py-2 rounded-lg font-bold hover:bg-kick-green/90 transition-colors">
              Assistir
            </button>
            <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
            <Share className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
          <div className="text-gray-400 text-sm">
            12.5K assistindo
          </div>
        </div>
      </div>
    </div>
  );
};
