export const AnimatedBackground = () => {
  return (
    <div className="background-nebula-container">
      {/* Bolha 1: Verde primário, grande, superior esquerda */}
      <div className="blob blob-1"></div>

      {/* Bolha 2: Branca, média, inferior direita */}
      <div className="blob blob-2"></div>

      {/* Bolha 3: Verde claro, pequena, centro */}
      <div className="blob blob-3"></div>

      {/* Bolha 4: Verde escuro, adicional para profundidade */}
      <div className="blob blob-4"></div>
    </div>
  );
};
