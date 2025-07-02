
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Truck, Star, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-orange-500 text-white py-32 px-4 overflow-hidden mt-16">
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-orange-400/20 rounded-full blur-2xl"></div>
      
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            La plataforma de
            <span className="block bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
              e-commerce más segura
            </span>
            del Perú
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
            Conectamos compradores y vendedores con garantías reales, verificación completa y seguimiento total. 
            Tu seguridad es nuestra prioridad.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
            <Shield className="w-6 h-6" />
            <span className="font-medium">100% Verificado</span>
          </div>
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
            <Truck className="w-6 h-6" />
            <span className="font-medium">Envío Rápido</span>
          </div>
          <div className="flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-full px-6 py-4 border border-white/20">
            <Star className="w-6 h-6" />
            <span className="font-medium">Garantía Total</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-white text-red-600 hover:bg-gray-100 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            onClick={() => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Comenzar Ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white text-white hover:bg-white hover:text-red-600 text-lg px-10 py-4 rounded-full font-semibold transition-all duration-300 bg-transparent"
            onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conocer Más
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
