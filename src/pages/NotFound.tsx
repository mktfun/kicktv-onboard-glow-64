import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-kick-green">404</h1>
        <div className="space-y-2">
          <p className="text-xl text-foreground">Oops! Página não encontrada</p>
          <p className="text-muted-foreground">A página que você está procurando não existe.</p>
        </div>
        <a 
          href="/" 
          className="inline-flex items-center bg-kick-green hover:bg-kick-green-dark text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-[var(--shadow-kick)]"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  );
};

export default NotFound;
