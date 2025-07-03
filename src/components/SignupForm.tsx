
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    tipoPersona: ''
  });
  const { toast } = useToast();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nombre || !formData.correo || !formData.tipoPersona) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive"
      });
      return;
    }

    await fetch( "https://hook.us2.make.com/uvrzugslisiwn32hw6m1balx15rcu5hj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
    // Simulamos el envío del formulario
    toast({
      title: "¡Registro exitoso!",
      description: `Gracias ${formData.nombre}, por estar en la lista de espera, cualquier novedad te informaremos.`,
    });

    // Reset form
    setFormData({ nombre: '', correo: '', tipoPersona: '' });
  };

  return (
    <section id="signup" className="py-20 px-4 bg-gradient-to-br from-red-900 via-red-800 to-orange-800">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            LAPITAYA, ¡UNETE!
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Forma parte del cambio, con la nueva marketplace más segura, más rápida y más avanzada del Perú.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Regístrate Gratis
              </CardTitle>
              <p className="text-gray-600">
                Completa el formulario y comienza tu experiencia
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre" className="text-gray-700 font-medium">
                    Nombre Completo
                  </Label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Ingresa tu nombre completo"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="correo" className="text-gray-700 font-medium">
                    Correo Electrónico
                  </Label>
                  <Input
                    id="correo"
                    type="email"
                    placeholder="tu@correo.com"
                    value={formData.correo}
                    onChange={(e) => setFormData({...formData, correo: e.target.value})}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tipoPersona" className="text-gray-700 font-medium">
                    Tipo de Persona
                  </Label>
                  <Select 
                    value={formData.tipoPersona} 
                    onValueChange={(value) => setFormData({...formData, tipoPersona: value})}
                  >
                    <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                      <SelectValue placeholder="Selecciona una opción" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="comprador">🛒 Comprador</SelectItem>
                      <SelectItem value="vendedor">🏪 Vendedor</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Registrarse Ahora
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Al registrarte aceptas nuestros términos y condiciones
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
