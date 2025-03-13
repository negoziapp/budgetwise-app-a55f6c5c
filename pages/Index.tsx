
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, BarChart2, CreditCard, MessageCircle, Users, Shield } from 'lucide-react';
import { useInView } from 'framer-motion';

const Index = () => {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const testimonialsRef = useRef(null);
  
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.2 });
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-vuexy-primary">PYME</span>
            <span className="text-2xl font-light">Simplifica</span>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('caracteristicas')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition">Características</button>
            <button onClick={() => scrollToSection('precios')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition">Precios</button>
            <button onClick={() => scrollToSection('testimonios')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition">Testimonios</button>
            <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium text-foreground/80 hover:text-foreground transition">Contacto</button>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link to="/login">
              <Button variant="outline" size="sm">Iniciar Sesión</Button>
            </Link>
            <Link to="/register">
              <Button variant="default" size="sm">Registrarse</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Gestiona tu negocio de manera <span className="text-vuexy-primary">simple</span> y <span className="text-vuexy-primary">eficiente</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              PYME Simplifica es la solución todo en uno para la gestión de facturas, presupuestos, gastos y más para pequeñas y medianas empresas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/register">
                <Button className="gap-2">Comenzar ahora</Button>
              </Link>
              <a href="#demo">
                <Button variant="outline">Ver demostración</Button>
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-vuexy-primary/10 text-vuexy-primary flex items-center justify-center font-semibold shadow-sm">A</div>
                <div className="w-8 h-8 rounded-full bg-vuexy-success/10 text-vuexy-success flex items-center justify-center font-semibold shadow-sm">B</div>
                <div className="w-8 h-8 rounded-full bg-vuexy-info/10 text-vuexy-info flex items-center justify-center font-semibold shadow-sm">C</div>
                <div className="w-8 h-8 rounded-full bg-vuexy-warning/10 text-vuexy-warning flex items-center justify-center font-semibold shadow-sm">D</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Más de <span className="font-medium text-foreground">1,000 empresas</span> confían en nosotros
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-vuexy-primary/20 blur-3xl animate-pulse"></div>
            <img 
              src="/lovable-uploads/8b3c3755-bfd2-4e95-be01-b79f9eb841d5.png" 
              alt="Dashboard Preview" 
              className="w-full h-auto rounded-xl shadow-vuexy-lg"
              id="demo"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="caracteristicas" ref={featuresRef} className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitas para tu negocio</h2>
            <p className="text-muted-foreground">PYME Simplifica integra todas las herramientas necesarias para gestionar eficientemente tu negocio en una sola plataforma.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((feature, index) => (
              <div 
                key={index}
                className={`bg-card rounded-lg p-6 shadow-vuexy-sm transition-all duration-700 ${
                  featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-vuexy-primary/10 text-vuexy-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precios" ref={pricingRef} className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Planes adaptados a tu negocio</h2>
            <p className="text-muted-foreground">Elige el plan que mejor se adapte a las necesidades de tu empresa, con precios transparentes y sin sorpresas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Básico",
                price: "19€",
                description: "Para autónomos y negocios pequeños",
                features: [
                  "Facturación ilimitada",
                  "Gestión de clientes",
                  "Reportes básicos",
                  "Soporte por email"
                ],
                variant: "outline",
                highlighted: false
              },
              {
                title: "Pro",
                price: "49€",
                description: "Para negocios en crecimiento",
                features: [
                  "Todo lo del plan Básico",
                  "Múltiples usuarios",
                  "Integración con WhatsApp",
                  "Reportes avanzados",
                  "Soporte prioritario"
                ],
                variant: "default",
                highlighted: true
              },
              {
                title: "Empresa",
                price: "99€",
                description: "Para empresas establecidas",
                features: [
                  "Todo lo del plan Pro",
                  "Usuarios ilimitados",
                  "Integraciones personalizadas",
                  "API completa",
                  "Soporte telefónico 24/7"
                ],
                variant: "outline",
                highlighted: false
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  pricingInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`bg-card border-0 ${
                  plan.highlighted ? 'shadow-vuexy ring-2 ring-vuexy-primary/20 relative' : 'shadow-vuexy-sm'
                } rounded-lg overflow-hidden`}>
                  {plan.highlighted && <div className="absolute top-0 inset-x-0 h-1 bg-vuexy-primary"></div>}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    <Link to="/register">
                      <Button variant={plan.variant} className="w-full mb-6">Comenzar</Button>
                    </Link>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="text-vuexy-primary shrink-0 mt-1">✓</div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" ref={testimonialsRef} className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
            <p className="text-muted-foreground">Historias reales de empresas que han transformado su gestión con PYME Simplifica.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  testimonialsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-card border-0 shadow-vuexy-sm rounded-lg p-6">
                  <div className="mb-4 text-vuexy-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.6 4C11.6 4 10.8 6 8.8 8C6.8 10 4 10.8 4 10.8L4.4 14.4C4.4 14.4 7.2 14 10 16.8C12.8 19.6 12.4 22.4 12.4 22.4L16 22.8C16 22.8 16.8 20 18.8 18C20.8 16 23.6 15.2 23.6 15.2L23.2 11.6C23.2 11.6 20.4 12 17.6 9.2C14.8 6.4 15.2 3.6 15.2 3.6L11.6 4Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="italic mb-6">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-16">
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

      {/* Footer */}
      <footer className="bg-secondary/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold text-vuexy-primary">PYME</span>
                <span className="text-2xl font-light">Simplifica</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                La solución integral para la gestión de pequeñas y medianas empresas.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Producto</h3>
              <ul className="space-y-2">
                <li><a href="#caracteristicas" className="text-sm text-muted-foreground hover:text-foreground">Características</a></li>
                <li><a href="#precios" className="text-sm text-muted-foreground hover:text-foreground">Precios</a></li>
                <li><a href="#testimonios" className="text-sm text-muted-foreground hover:text-foreground">Testimonios</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Guías</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Sobre nosotros</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Trabajos</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Prensa</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Términos</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacidad</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</a></li>
                <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground">Contacto</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">© 2023 PYME Simplifica. Todos los derechos reservados.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Términos</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacidad</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
