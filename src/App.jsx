import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'





const Carousel = () => {
  const offers = [
    {
      text: "50% de descuento en tu primera compra!",
      image: "/path-to-image/offer1.jpg", // URL imagen
    },
    {
      text: "Envío gratis en pedidos superiores a $500!",
      image: "/path-to-image/offer2.jpg", // URL imagen
    },
    {
      text: "Descuentos exclusivos para miembros!",
      image: "/path-to-image/offer3.jpg", // URL imagen
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  return (
    <div className="relative w-full bg-purple-500 text-white p-5 text-center overflow-hidden flex items-center">
      <button
        onClick={prevSlide}
        className="absolute left-5 bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 opacity-40 hover:opacity-100"
      >
        ⬅
      </button>
      <div className="flex flex-col items-center">
        <p className="text-lg font-semibold mx-auto">{offers[currentIndex].text}</p>
        <img
          src={offers[currentIndex].image}
          alt={`Imagen de la oferta: ${offers[currentIndex].text}`}
          className="w-full h-auto mt-4 rounded-lg"
        />
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-5 bg-gray-400 text-white px-3 py-1 rounded-full hover:bg-gray-500 opacity-40 hover:opacity-100"
      >
        ➡
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pink-100">
      <div className="flex flex-col min-h-screen">
        <nav className="bg-purple-300 p-4 text-white flex justify-between items-center">
          <div className="flex items-center">
            <img src={reactLogo} alt="Logo de la empresa" className="h-8 mr-4" />
            {/* Aquí irá una imagen del logotipo */}
          </div>
          <ul className="flex space-x-4">
            <li className="bg-yellow-200 px-3 py-2 rounded-md"><a href="#inicio" className="hover:text-pink-500">Inicio</a></li>
            <li className="bg-yellow-200 px-3 py-2 rounded-md"><a href="#servicios" className="hover:text-pink-500">Servicios</a></li>
            <li className="bg-yellow-200 px-3 py-2 rounded-md"><a href="#contacto" className="hover:text-pink-500">Contacto</a></li>
            <li className="bg-yellow-200 px-3 py-2 rounded-md"><a href="#login" className="hover:text-pink-500">Iniciar Sesión</a></li>

          </ul>
        </nav>

        <Carousel />

        <div className="flex flex-col flex-1">
          <div className="col-12">
            <section id="inicio" className="bg-pink-200 text-purple-900 p-10 text-center flex flex-col justify-center items-center flex-1">
              <h2 className="text-3xl font-bold">Bienvenido a Young</h2>
              <p className="mt-4 max-w-2xl">Creatividad, individualidad y modernidad en un solo lugar.</p>
            </section>
          </div>

          <div className="col-12">
            <section id="servicios" className="bg-purple-100 text-purple-900 p-10 text-center flex flex-col justify-center items-center flex-1">
              <h2 className="text-3xl font-bold text-purple-600">Nuestros Servicios</h2>
              <p className="mt-4 max-w-2xl">Ofrecemos soluciones innovadoras para ti.</p>
            </section>
          </div>

          <div className="col-12">
            <section id="contacto" className="bg-pink-300 text-purple-900 p-10 text-center flex flex-col justify-center items-center flex-1">
              <h2 className="text-3xl font-bold text-purple-600">Contacto</h2>
              <p className="mt-4 max-w-2xl">Escríbenos para más información.</p>
            </section>
          </div>
        </div>
      </div>


      <Footer />
    </div>

  );
};

export default App;


