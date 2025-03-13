
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Gestiona tu negocio de manera <span className="text-vuexy-primary">simple</span> y <span className="text-vuexy-primary">eficiente</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            PYME Simplifica es la solución todo en uno para la gestión de facturas, presupuestos, gastos y más para pequeñas y medianas empresas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register">
              <Button className="gap-2">
                Comenzar ahora
                <ArrowRight size={16} />
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
              <div className="w-8 h-8 rounded-full bg-vuexy-primary/10 text-vuexy-primary flex items-center justify-center font-semibold">A</div>
              <div className="w-8 h-8 rounded-full bg-vuexy-success/10 text-vuexy-success flex items-center justify-center font-semibold">B</div>
              <div className="w-8 h-8 rounded-full bg-vuexy-info/10 text-vuexy-info flex items-center justify-center font-semibold">C</div>
              <div className="w-8 h-8 rounded-full bg-vuexy-warning/10 text-vuexy-warning flex items-center justify-center font-semibold">D</div>
            </div>
            <p className="text-sm text-muted-foreground">
              Más de <span className="font-medium text-foreground">1,000 empresas</span> confían en nosotros
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-vuexy-primary/20 blur-3xl"></div>
          <img 
            src="/lovable-uploads/bf2f9a96-01a4-4df7-b83c-d3d00311a35d.png" 
            alt="Dashboard Preview" 
            className="w-full h-auto rounded-xl shadow-vuexy-lg"
            id="demo"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
