export default function Pagos() {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Pasarela de Pagos
        </h1>
        <form className="bg-white shadow-lg p-6 rounded-2xl">
          {/* Información del titular */}
          <div className="mb-6">
            <label
              htmlFor="cardholder"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nombre del Titular
            </label>
            <input
              type="text"
              id="cardholder"
              placeholder="Nombre completo"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
  
          {/* Número de tarjeta */}
          <div className="mb-6">
            <label
              htmlFor="cardnumber"
              className="block text-gray-700 font-semibold mb-2"
            >
              Número de Tarjeta
            </label>
            <input
              type="text"
              id="cardnumber"
              placeholder="1234 5678 9012 3456"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
  
          {/* Fecha de expiración y CVV */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="expiry"
                className="block text-gray-700 font-semibold mb-2"
              >
                Fecha de Expiración
              </label>
              <input
                type="text"
                id="expiry"
                placeholder="MM/AA"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
            <div>
              <label
                htmlFor="cvv"
                className="block text-gray-700 font-semibold mb-2"
              >
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                placeholder="123"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
            </div>
          </div>
  
          {/* Botón de pago */}
          <button
            type="submit"
            className="w-full bg-pink-400 text-white p-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Pagar Ahora
          </button>
        </form>
      </div>
    );
  }