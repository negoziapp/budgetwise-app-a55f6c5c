
import React, { useRef } from 'react';
import FeatureCard from './FeatureCard';
import { BarChart2, CreditCard, FileText, MessageCircle, Shield, Users } from 'lucide-react';
import { useInView } from 'framer-motion';

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <FileText />,
      title: "Facturación fácil",
      description: "Crea y envía facturas profesionales en segundos. Recibe pagos online y haz seguimiento de los pendientes."
    },
    {
      icon: <BarChart2 />,
      title: "Reportes detallados",
      description: "Visualiza el rendimiento de tu negocio con gráficos y reportes personalizables en tiempo real."
    },
    {
      icon: <CreditCard />,
      title: "Control de gastos",
      description: "Registra y categoriza todos tus gastos. Obtén informes de flujo de caja y gestiona mejor tu capital."
    },
    {
      icon: <Users />,
      title: "Gestión de clientes",
      description: "Mantén organizada toda la información de tus clientes y su historial de interacciones con tu negocio."
    },
    {
      icon: <MessageCircle />,
      title: "Integración con WhatsApp",
      description: "Comunícate directamente con tus clientes a través de WhatsApp sin salir de la plataforma."
    },
    {
      icon: <Shield />,
      title: "Seguridad garantizada",
      description: "Tus datos siempre protegidos con los más altos estándares de seguridad y respaldos automáticos."
    }
  ];

  return (
    <section id="features" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para tu negocio</h2>
          <p className="text-muted-foreground">PYME Simplifica integra todas las herramientas necesarias para gestionar eficientemente tu negocio en una sola plataforma.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard 
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
