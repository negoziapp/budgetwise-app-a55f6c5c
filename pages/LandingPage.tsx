
import React, { useEffect } from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import PricingSection from '@/components/landing/PricingSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const LandingPage = () => {
  // Función para desplazarse suavemente a secciones
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Resetear el scroll al cargar la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default LandingPage;
