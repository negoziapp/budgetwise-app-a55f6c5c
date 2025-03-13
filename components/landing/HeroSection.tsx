
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Gestiona tu negocio de manera <span className="text-vuexy-primary">simple</span> y <span className="text-vuexy-primary">eficiente</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            PYME Simplifica es la solución todo en uno para la gestión de facturas, presupuestos, gastos y más para pequeñas y medianas empresas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register">
              <Button className="gap-2 relative overflow-hidden group">
                <span className="relative z-10">Comenzar ahora</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-vuexy-primary/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Button>
            </Link>
            <button 
              onClick={() => scrollToSection('demo')}
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              Ver demostración
            </button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-vuexy-primary/10 text-vuexy-primary flex items-center justify-center font-semibold shadow-sm">A</div>
              <div className="w-8 h-8 rounded-full bg-vuexy-success/10 text-vuexy-success flex items-center justify-center font-semibold shadow-sm">B</div>
              <div className="w-8 h-8 rounded-full bg-vuexy-info/10 text-vuexy-info flex items-center justify-center font-semibold shadow-sm">C</div>
              <div className="w-8 h-8 rounded-full bg-vuexy-warning/10 text-vuexy-warning flex items-center justify-center font-semibold shadow-sm">D</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Más de <span className="font-medium text-foreground">1,000 empresas</span> confían en nosotros
            </p>
          </div>
        </div>
        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-vuexy-primary/20 blur-3xl animate-pulse"></div>
          <img 
            src="/lovable-uploads/bf2f9a96-01a4-4df7-b83c-d3d00311a35d.png" 
            alt="Dashboard Preview" 
            className="w-full h-auto rounded-xl shadow-vuexy-lg transition-all hover:shadow-vuexy hover:-translate-y-1 duration-300"
            id="demo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
