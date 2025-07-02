
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              PITAYA
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">
              La plataforma de e-commerce más segura y confiable del Perú. 
              Conectamos compradores y vendedores con garantías reales.
            </p>
            <div className="flex space-x-4">
              <div className="bg-red-600 p-2 rounded-full">
                <span className="text-white font-bold">P</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Características</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Verificación de vendedores</li>
              <li>Seguimiento completo</li>
              <li>Garantías totales</li>
              <li>Envíos rápidos</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Soporte</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Centro de ayuda</li>
              <li>Política de devoluciones</li>
              <li>Términos y condiciones</li>
              <li>Contacto</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pitaya. Todos los derechos reservados. 
            <span className="text-red-400"> Hecho con ❤️ en Perú</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
