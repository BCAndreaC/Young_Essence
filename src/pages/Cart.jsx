import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const initialProducts = [
  {
    id: 1,
    name: 'Top Corto de Algodón',
    href: '#',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1664475951647-bfa3ab77d131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9wJTIwY29ydG98ZW58MHx8MHx8fDA%3D',
    imageAlt: 'Top corto de algodón en color blanco.',
    price: 250, // Cambié a número para cálculos
    color: 'Blanco',
    quantity: 1, // Añadí cantidad inicial
  },
  {
    id: 2,
    name: 'Falda Vaquera',
    href: '#',
    imageSrc: 'https://images.unsplash.com/photo-1600738562574-860da204fa58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFsZGElMjB2YXF1ZXJhfGVufDB8fDB8fHww',
    imageAlt: 'Falda vaquera de mezclilla azul.',
    price: 450,
    color: 'Azul',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Vestido Floral',
    href: '#',
    imageSrc: 'https://plus.unsplash.com/premium_photo-1723535671118-ae4028123e40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVzdGlkbyUyMGZsb3JhbHxlbnwwfHwwfHx8MA%3D%3D',
    imageAlt: 'Vestido floral con estampado en colores vivos.',
    price: 600,
    color: 'Multicolor',
    quantity: 1,
  },
];

export default function Cart() {
  const [open, setOpen] = useState(true);
  const [cartItems, setCartItems] = useState(initialProducts); // Estado para el carrito
  const navigate = useNavigate();

  // Cerrar el carrito y redirigir
  const handleButtonClick = () => {
    setOpen(false);
    navigate('/pagos');
  };

  // Eliminar un producto del carrito
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Cambiar la cantidad de un producto
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return; // Evitar cantidades negativas
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calcular el subtotal dinámicamente
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Carrito de compras
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Cerrar panel</span>
                        <XMarkIcon aria-hidden="true" className="size-6" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItems.map((product) => (
                          <li key={product.id} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="size-full object-cover"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href={product.href}>{product.name}</a>
                                  </h3>
                                  <p className="ml-4">${product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <div className="flex items-center">
                                  <button
                                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                                    className="px-2 text-gray-500"
                                  >
                                    -
                                  </button>
                                  <p className="mx-2 text-gray-500">Cantidad: {product.quantity}</p>
                                  <button
                                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                                    className="px-2 text-gray-500"
                                  >
                                    +
                                  </button>
                                </div>
                                <button
                                  type="button"
                                  onClick={() => removeItem(product.id)}
                                  className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Eliminar
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>${subtotal.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    El envío y los impuestos se calculan al finalizar la compra.
                  </p>
                  <div className="mt-6">
                    <button
                      onClick={handleButtonClick}
                      className="flex items-center text-white justify-center rounded-md border border-transparent bg-purple-900 px-6 py-3 text-base font-medium shadow-xs"
                    >
                      Finalizar compra
                    </button>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Continuar comprando
                      <span aria-hidden="true"> →</span>
                    </button>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
