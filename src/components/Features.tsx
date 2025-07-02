
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, User, Truck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <User className="w-12 h-12 text-red-600" />,
      title: "Verificación de Vendedores",
      description: "Verificación facial única y validación de productos con fotos detalladas. Cada producto tiene un código único para garantizar autenticidad."
    },
    {
      icon: <Shield className="w-12 h-12 text-red-500" />,
      title: "Garantías para Compradores",
      description: "Seguimiento completo de pedidos con fotos del envío y entrega. Tu tranquilidad es nuestra prioridad."
    },
    {
      icon: <Truck className="w-12 h-12 text-orange-500" />,
      title: "Envíos y Devoluciones",
      description: "Entregas rápidas en Lima (24-36h) y provincias (36-48h). Devoluciones fáciles en un solo clic."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ¿Por qué elegir Pitaya?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos la experiencia de e-commerce más segura y confiable, 
            con garantías reales tanto para compradores como vendedores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-gray-100 rounded-full w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
