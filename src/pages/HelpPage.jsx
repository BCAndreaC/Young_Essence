import { useState } from 'react';

function HelpPage() {
  const [chatInput, setChatInput] = useState('');
  const [chatResponse, setChatResponse] = useState('Hola, ¿en qué puedo ayudarte hoy?');

  const predefinedResponses = {
    '¿cómo hago un pedido?': 'Para hacer un pedido, ve a la página de productos, selecciona lo que quieres y haz clic en "Añadir al carrito". Luego, sigue las instrucciones en el carrito.',
    '¿cuáles son los métodos de pago?': 'Aceptamos tarjeta de crédito, débito, PayPal y transferencias bancarias.',
    '¿cuánto tarda el envío?': 'El envío tarda entre 3 y 7 días hábiles, dependiendo de tu ubicación.',
    '¿cómo contacto soporte?': 'Puedes escribirnos a soporte@youngessence.com o usar este chat.',
    'default': 'Lo siento, no entendí tu pregunta. Prueba con algo como "¿Cómo hago un pedido?" o "¿Cuánto tarda el envío?".'
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    const inputLower = chatInput.toLowerCase().trim();
    const response = predefinedResponses[inputLower] || predefinedResponses['default'];
    setChatResponse(response);
    setChatInput('');
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-ye-secondary mb-6">
        Página de Ayuda
      </h1>
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold text-ye-secondary mb-4">
          Preguntas Frecuentes (FAQ)
        </h2>
        <div className="space-y-4">
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium text-ye-secondary cursor-pointer">
              ¿Cómo hago un pedido?
            </summary>
            <p className="mt-2 text-gray-700">
              Ve a la página de productos, selecciona lo que quieres, haz clic en "Añadir al carrito" y sigue las instrucciones.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium text-ye-secondary cursor-pointer">
              ¿Cuáles son los métodos de pago?
            </summary>
            <p className="mt-2 text-gray-700">
              Aceptamos tarjeta de crédito, débito, PayPal y transferencias bancarias.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium text-ye-secondary cursor-pointer">
              ¿Cuánto tarda el envío?
            </summary>
            <p className="mt-2 text-gray-700">
              El envío tarda entre 3 y 7 días hábiles, dependiendo de tu ubicación.
            </p>
          </details>
          <details className="bg-white p-4 rounded-lg shadow">
            <summary className="font-medium text-ye-secondary cursor-pointer">
              ¿Cómo contacto soporte?
            </summary>
            <p className="mt-2 text-gray-700">
              Escríbenos a soporte@youngessence.com o usa el chat de esta página.
            </p>
          </details>
        </div>
      </section>
      <section className="w-full max-w-md fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold text-ye-secondary mb-2">Soporte Rápido</h2>
        <div className="bg-gray-50 p-3 rounded-lg mb-3 h-32 overflow-y-auto">
          <p className="text-gray-700">{chatResponse}</p>
        </div>
        <form onSubmit={handleChatSubmit} className="flex gap-2">
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Escribe tu pregunta..."
            className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-ye-primary"
          />
          <button
            type="submit"
            className="bg-ye-primary text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default HelpPage;
