
import React from 'react';
import FeatureCard from './FeatureCard';
import { BarChart2, CreditCard, FileText, MessageCircle, Shield, Users } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para tu negocio</h2>
          <p className="text-muted-foreground">PYME Simplifica integra todas las herramientas necesarias para gestionar eficientemente tu negocio en una sola plataforma.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<FileText />}
            title="Facturación fácil"
            description="Crea y envía facturas profesionales en segundos. Recibe pagos online y haz seguimiento de los pendientes."
          />
          <FeatureCard 
            icon={<BarChart2 />}
            title="Reportes detallados"
            description="Visualiza el rendimiento de tu negocio con gráficos y reportes personalizables en tiempo real."
          />
          <FeatureCard 
            icon={<CreditCard />}
            title="Control de gastos"
            description="Registra y categoriza todos tus gastos. Obtén informes de flujo de caja y gestiona mejor tu capital."
          />
          <FeatureCard 
            icon={<Users />}
            title="Gestión de clientes"
            description="Mantén organizada toda la información de tus clientes y su historial de interacciones con tu negocio."
          />
          <FeatureCard 
            icon={<MessageCircle />}
            title="Integración con WhatsApp"
            description="Comunícate directamente con tus clientes a través de WhatsApp sin salir de la plataforma."
          />
          <FeatureCard 
            icon={<Shield />}
            title="Seguridad garantizada"
            description="Tus datos siempre protegidos con los más altos estándares de seguridad y respaldos automáticos."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
