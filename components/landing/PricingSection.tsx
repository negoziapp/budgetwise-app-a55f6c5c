
import React from 'react';
import PricingCard from './PricingCard';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes adaptados a tu negocio</h2>
          <p className="text-muted-foreground">Elige el plan que mejor se adapte a las necesidades de tu empresa, con precios transparentes y sin sorpresas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
    </section>
  );
};

export default PricingSection;
