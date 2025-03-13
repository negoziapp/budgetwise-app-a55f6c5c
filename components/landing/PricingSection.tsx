
import React, { useRef } from 'react';
import PricingCard from './PricingCard';
import { useInView } from 'framer-motion';

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes adaptados a tu negocio</h2>
          <p className="text-muted-foreground">Elige el plan que mejor se adapte a las necesidades de tu empresa, con precios transparentes y sin sorpresas.</p>
        </div>

        <div 
          ref={ref}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div 
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <PricingCard
              title="Básico"
              price="19€"
              description="Para autónomos y negocios pequeños"
              features={[
                "Facturación ilimitada",
                "Gestión de clientes",
                "Reportes básicos",
                "Soporte por email"
              ]}
              buttonVariant="outline"
            />
          </div>
          <div 
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <PricingCard
              title="Pro"
              price="49€"
              description="Para negocios en crecimiento"
              features={[
                "Todo lo del plan Básico",
                "Múltiples usuarios",
                "Integración con WhatsApp",
                "Reportes avanzados",
                "Soporte prioritario"
              ]}
              buttonVariant="default"
              highlighted={true}
            />
          </div>
          <div 
            className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <PricingCard
              title="Empresa"
              price="99€"
              description="Para empresas establecidas"
              features={[
                "Todo lo del plan Pro",
                "Usuarios ilimitados",
                "Integraciones personalizadas",
                "API completa",
                "Soporte telefónico 24/7"
              ]}
              buttonVariant="outline"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
