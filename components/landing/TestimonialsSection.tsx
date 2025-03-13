
import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground">Historias reales de empresas que han transformado su gestión con PYME Simplifica.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="PYME Simplifica ha transformado por completo la gestión financiera de mi negocio. Ahora facturo en minutos lo que antes me llevaba horas."
            author="María García"
            company="Boutique Elegance"
          />
          <TestimonialCard 
            quote="Lo mejor de todo es la integración con WhatsApp. Podemos comunicarnos con nuestros clientes de forma instantánea y profesional."
            author="Carlos Rodríguez"
            company="Taller Mecánico CR"
          />
          <TestimonialCard 
            quote="Los informes y gráficos nos han ayudado a identificar áreas de mejora y aumentar nuestra rentabilidad en un 30% este año."
            author="Laura Martínez"
            company="Consultoría Estratégica"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
