
import React from 'react';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-vuexy-primary">PYME</span>
              <span className="text-xl font-light">Simplifica</span>
            </div>
            <p className="text-sm text-muted-foreground">
              La solución completa para la gestión eficiente de pequeñas y medianas empresas.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2">
              <li><button onClick={() => scrollToSection('features')} className="text-sm text-muted-foreground hover:text-foreground">Características</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-sm text-muted-foreground hover:text-foreground">Precios</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Integraciones</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Novedades</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Sobre nosotros</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Blog</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Empleo</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-sm text-muted-foreground hover:text-foreground">Contacto</button></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Privacidad</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Términos</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Cookies</button></li>
              <li><button className="text-sm text-muted-foreground hover:text-foreground">Licencias</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 PYME Simplifica. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </button>
            <button className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
