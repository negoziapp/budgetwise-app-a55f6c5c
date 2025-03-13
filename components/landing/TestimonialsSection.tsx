
import React, { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { useInView } from 'framer-motion';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const testimonials = [
    {
      quote: "PYME Simplifica ha transformado por completo la gestión financiera de mi negocio. Ahora facturo en minutos lo que antes me llevaba horas.",
      author: "María García",
      company: "Boutique Elegance"
    },
    {
      quote: "Lo mejor de todo es la integración con WhatsApp. Podemos comunicarnos con nuestros clientes de forma instantánea y profesional.",
      author: "Carlos Rodríguez",
      company: "Taller Mecánico CR"
    },
    {
      quote: "Los informes y gráficos nos han ayudado a identificar áreas de mejora y aumentar nuestra rentabilidad en un 30% este año.",
      author: "Laura Martínez",
      company: "Consultoría Estratégica"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          <p className="text-muted-foreground">Historias reales de empresas que han transformado su gestión con PYME Simplifica.</p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TestimonialCard 
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
