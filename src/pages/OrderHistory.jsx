import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Datos simulados (reemplazar con backend)
const mockOrders = [
  {
    id: 'ORD001',
    date: '2025-05-01',
    items: [
      { id: 1, name: 'Top Corto de Algodón', price: 250, quantity: 2, color: 'Blanco' },
      { id: 2, name: 'Falda Vaquera', price: 450, quantity: 1, color: 'Azul' },
    ],
    status: 'Entregado',
  },
  {
    id: 'ORD002',
    date: '2025-05-10',
    items: [
      { id: 3, name: 'Vestido Floral', price: 600, quantity: 1, color: 'Multicolor' },
    ],
    status: 'En proceso',
  },
];

export default function OrderHistory() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Cargar historial de compras
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('http://localhost:5050/orders', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al cargar pedidos');
        }
        const data = await response.json();
        setOrders(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('No se pudo cargar el historial de compras. Usando datos de prueba.');
        setOrders(mockOrders); // Fallback a datos simulados
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  // Calcular subtotal por pedido
  const calculateSubtotal = (items) => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  };

  // Volver a la cuenta
  const handleBack = () => {
    navigate('/account');
  };

  return (
    <div className="min-h-screen bg-neutral-light p-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-neutral-dark mb-6 text-center">
          Historial de Compras
        </h2>

        {loading && (
          <p className="text-center text-neutral-dark">Cargando pedidos...</p>
        )}
        {error && (
          <p className="text-center text-error bg-error/20 p-2 rounded">{error}</p>
        )}

        {!loading && !error && orders.length === 0 && (
          <p className="text-center text-neutral-dark">
            No tienes pedidos registrados.
          </p>
        )}

        {!loading && orders.length > 0 && (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-lg shadow-md p-4 md:p-6"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-neutral-dark">
                      Pedido #{order.id}
                    </h3>
                    <p className="text-sm text-neutral-dark">
                      Fecha: {order.date}
                    </p>
                    <p className="text-sm text-neutral-dark">
                      Estado:{' '}
                      <span
                        className={
                          order.status === 'Entregado'
                            ? 'text-success font-medium'
                            : 'text-secondary font-medium'
                        }
                      >
                        {order.status}
                      </span>
                    </p>
                  </div>
                  <p className="text-lg font-bold text-primary mt-2 md:mt-0">
                    ${calculateSubtotal(order.items)}
                  </p>
                </div>
                <div className="border-t border-neutral-light pt-4">
                  <h4 className="text-sm font-medium text-neutral-dark mb-2">
                    Productos:
                  </h4>
                  <ul className="space-y-2">
                    {order.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between text-sm text-neutral-dark"
                      >
                        <span>
                          {item.name} ({item.color}) x{item.quantity}
                        </span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={handleBack}
            className="inline-flex items-center px-6 py-3 text-sm font-medium text ipsa-white bg-primary rounded-md hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Volver a Mi Cuenta
          </button>
        </div>
      </div>
    </div>
  );
}
