
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem 
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import MobileNav from './MobileNav';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-vuexy-primary">PYME</span>
          <span className="text-2xl font-light">Simplifica</span>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition px-4 py-2"
              >
                Características
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition px-4 py-2"
              >
                Precios
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => scrollToSection('testimonials')} 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition px-4 py-2"
              >
                Testimonios
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition px-4 py-2"
              >
                Contacto
              </button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm">Iniciar Sesión</Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="sm">Registrarse</Button>
            </Link>
          </div>
          <MobileNav scrollToSection={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;
