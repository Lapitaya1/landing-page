
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Guarantees = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nuestras Garantías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Protegemos tanto a compradores como vendedores con políticas claras y justas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-l-4 border-l-[#ff0808] shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#ff0808] flex items-center gap-2">
                <Badge variant="secondary" className="bg-red-100 text-[#ff0808]">Para Compradores</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#ff0808] mb-2">📦 Seguimiento Completo</h4>
                <p className="text-red-700">Pitaya rastrea todos tus pedidos desde el envío hasta la entrega</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#ff0808] mb-2">📸 Fotos del Envío</h4>
                <p className="text-red-700">Los vendedores suben fotos del producto antes del envío</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-[#ff0808] mb-2">✅ Verificación en Entrega</h4>
                <p className="text-red-700">El repartidor toma fotos para confirmar el estado del producto</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-500 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-orange-700 flex items-center gap-2">
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">Para Vendedores</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">💰 Pagos Cada 15 Días</h4>
                <p className="text-orange-700">Pagos puntuales cada 15 días calendario (primer día hábil si cae en feriado)</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">⭐ Planes Premium</h4>
                <p className="text-orange-700">Mejores vendedores acceden a comisiones bajas y destacados especiales</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">🛡️ Protección Total</h4>
                <p className="text-orange-700">Te protegemos contra fraudes y devoluciones injustificadas</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#ff0808] text-center">
              Política de Devoluciones y Garantías
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-[#ff0808] text-lg">🔄 Devoluciones Fáciles</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Devolución en 1 clic desde web o app
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Código automático para recojo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    15 días laborables para devolver
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Producto en las mismas condiciones
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-[#ff0808] text-lg">🛠️ Garantías de Fabricante</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Pitaya gestiona todas las garantías
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Recojo y envío sin costo
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Respuesta en 5-10 días laborables
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ff0808] font-bold">•</span>
                    Proceso completamente digital
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-yellow-50 to-red-50 border-2 border-yellow-400">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-[#ff0808] text-center">
              🚨 Devoluciones por Producto Defectuoso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-yellow-100 border-l-4 border-l-yellow-500 p-6 rounded-lg">
              <div className="space-y-4">
                <h4 className="font-semibold text-yellow-800 text-lg mb-3">
                  ⚠️ Productos Defectuosos, Erróneos o Incompletos
                </h4>
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <p className="text-gray-800 font-medium mb-3">
                    En caso de devolución por producto defectuoso, erróneo o incompleto:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff0808] font-bold">•</span>
                      <strong>El proveedor se hará cargo del servicio logístico</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff0808] font-bold">•</span>
                      Opción de usar nuestros servicios de <strong>Fulfillment Pitaya</strong>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff0808] font-bold">•</span>
                      Incremento del <strong>2% en el pedido</strong> por servicio Fulfillment
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#ff0808] font-bold">•</span>
                      Gestión completa desde recojo hasta nueva entrega
                    </li>
                  </ul>
                </div>
                <div className="bg-red-100 p-3 rounded-lg border border-red-300">
                  <p className="text-red-800 text-sm font-medium">
                    💡 <strong>Fulfillment Pitaya:</strong> Servicio integral que incluye almacenamiento, 
                    empaquetado y envío con seguimiento completo para garantizar la mejor experiencia.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Guarantees;
