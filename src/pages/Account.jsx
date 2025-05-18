import { useNavigate } from 'react-router-dom';

export default function Cuenta() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 min-h-screen">
      {/* User Info */}
      <section className="bg-white shadow-lg p-6 rounded-2xl mb-8 flex items-center gap-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww"
          alt="Avatar"
          className="rounded-full w-20 h-20 ml-6"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Maria Perez</h2>
          <p className="text-gray-500 ml-8">maria_perez@example.com</p>
        </div>
      </section>
<a
  onClick={() => navigate("/orders")}
  className="mb-8 bg-white shadow-md p-4 rounded-2xl text-center hover:shadow-lg transition text-sm text-primary hover:text-secondary cursor-pointer"
>
  Historial de Compras
</a>
<br />
<br />
      {/* Favorites */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Favoritos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md p-4 rounded-2xl text-center hover:shadow-lg transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1723535671118-ae4028123e40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVzdGlkbyUyMGZsb3JhbHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Favorito 1"
              className="mx-auto mb-4 rounded-lg h-48 w-full object-contain"
            />
            <h4 className="font-semibold text-gray-800">Vestido Floral</h4>
            <p className="text-gray-600">$650 MXN</p>
          </div>
          <div className="bg-white shadow-md p-4 rounded-2xl text-center hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcXVldGElMjBkZSUyMGN1ZXJvfGVufDB8fDB8fHww"
              alt="Favorito 2"
              className="mx-auto mb-4 rounded-lg h-48 w-full object-contain"
            />
            <h4 className="font-semibold text-gray-800">Chaqueta de Cuero</h4>
            <p className="text-gray-600">$1200 MXN</p>
          </div>
        </div>
      </section>

      {/* Orders */}
      <section>
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Pedidos Realizados
        </h3>
        <div className="mb-4">
          <button
            onClick={() => navigate("/orders")}
            className="w-full md:w-auto px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
          >
            Ver Historial de Compras
          </button>
        </div>
        <div className="space-y-4">
          <div className="bg-white shadow-md p-6 rounded-2xl flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Pedido #1023</p>
              <p className="text-gray-600">Fecha: 02/02/2025</p>
              <p className="text-gray-600">Total: $1800 MXN</p>
            </div>
            <span className="text-green-600 font-semibold">Entregado</span>
          </div>
          <div className="bg-white shadow-md p-6 rounded-2xl flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">Pedido #1017</p>
              <p className="text-gray-600">Fecha: 25/01/2025</p>
              <p className="text-gray-600">Total: $950 MXN</p>
            </div>
            <span className="text-green-600 font-semibold">Entregado</span>
          </div>
        </div>
      </section>

      {/* Order in Progress */}
      <section className="bg-yellow-50 shadow-lg p-6 rounded-2xl mt-8 border-l-4 border-yellow-500">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Pedido en Camino
        </h3>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold text-gray-800">Pedido #1030</p>
            <p className="text-gray-600">Fecha: 05/02/2025</p>
            <p className="text-gray-600">Total: $2200 MXN</p>
          </div>
          <span className="text-yellow-600 font-semibold">En tránsito</span>
        </div>
      </section>
    </div>
  );
}
