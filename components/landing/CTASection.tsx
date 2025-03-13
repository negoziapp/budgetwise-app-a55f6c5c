
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Shield, Users } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-vuexy-primary text-white rounded-2xl p-8 md:p-12 shadow-vuexy-lg max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Empieza a simplificar tu negocio hoy mismo</h2>
              <p className="mb-6 text-white/90">
                Únete a miles de empresas que ya gestionan su negocio de manera más eficiente con PYME Simplifica.
              </p>
              <Link to="/register">
                <Button variant="default" size="lg" className="bg-white text-vuexy-primary hover:bg-white/90">
                  Prueba gratis 14 días
                </Button>
              </Link>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Shield size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Sin compromiso</h3>
                  <p className="text-white/80 text-sm">Cancela en cualquier momento sin penalizaciones</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <Users size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Soporte personalizado</h3>
                  <p className="text-white/80 text-sm">Te ayudamos en cada paso de la implementación</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Migración de datos</h3>
                  <p className="text-white/80 text-sm">Importamos tus datos existentes sin coste adicional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
