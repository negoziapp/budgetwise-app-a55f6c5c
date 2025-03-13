
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface MobileNavProps {
  scrollToSection: (sectionId: string) => void;
}

const MobileNav = ({ scrollToSection }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-vuexy-primary">PYME</span>
              <span className="text-2xl font-light">Simplifica</span>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <X size={24} />
            </Button>
          </div>
          
          <nav className="flex flex-col p-4 gap-4">
            <button 
              onClick={() => handleNavClick('features')} 
              className="text-lg py-3 border-b border-border/20 text-left"
            >
              Características
            </button>
            <button 
              onClick={() => handleNavClick('pricing')} 
              className="text-lg py-3 border-b border-border/20 text-left"
            >
              Precios
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')} 
              className="text-lg py-3 border-b border-border/20 text-left"
            >
              Testimonios
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-lg py-3 border-b border-border/20 text-left"
            >
              Contacto
            </button>
          </nav>
          
          <div className="mt-auto p-4 flex flex-col gap-3">
            <Link to="/login">
              <Button variant="outline" className="w-full">Iniciar Sesión</Button>
            </Link>
            <Link to="/register">
              <Button variant="default" className="w-full">Registrarse</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
