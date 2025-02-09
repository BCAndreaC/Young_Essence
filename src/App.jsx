import { useState } from "react";
import Footer from "./components/Footer";
import Chamarra from "./img/chamarra.jpg";
import Perfume from "./img/perfume.jpg";
import Logo from './img/logo.png';
import Catalogo from './img/catalogo.jpg';
import Contacto from './img/contacto.jpg';
import Oferta from './img/oferta.jpg';

const Carousel = () => {
  const offers = [
    { text: "50% de descuento en tu primera compra!", image: Chamarra },
    { text: "Envío gratis en pedidos superiores a $500!", image: Perfume },
    { text: "Descuentos exclusivos para miembros!", image: Oferta },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + offers.length) % offers.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-purple-300 text-white p-2 rounded-lg shadow-lg flex items-center overflow-hidden">
      {/* Botón Izquierdo */}
      <button
        onClick={prevSlide}
        className="absolute left-2 bg-gray-600 text-white p-1 rounded-full hover:bg-gray-700 opacity-60 hover:opacity-80 transition"
      >
        ⬅
      </button>

      {/* Contenedor Principal */}
      <div className="flex w-full h-36">

        <div className="w-3/4 flex items-center justify-center">
          <img
            src={offers[currentIndex].image}
            alt={`Oferta: ${offers[currentIndex].text}`}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>


        <div className="w-1/4 flex flex-col justify-center items-center px-2 bg-purple-400 text-center rounded-lg">
          <p className="text-xs font-semibold">{offers[currentIndex].text}</p>
        </div>
      </div>

      {/* Botón Derecho */}
      <button
        onClick={nextSlide}
        className="absolute right-2 bg-gray-600 text-white p-1 rounded-full hover:bg-gray-700 opacity-60 hover:opacity-80 transition"
      >
        ➡
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="h-screen flex flex-col bg-pink-100">
      {/* Barra de Navegación */}
      <nav className="bg-purple-300 p-3 text-white flex justify-between items-center shadow-md relative">
        <div className="flex items-center">
          <a href="/">
            <img src={Logo} alt="Logo de la empresa" className="h-24 mr-4 border-4 border-purple-700 rounded-full shadow-lg p-2 bg-white" />
          </a>
        </div>


        <span className="absolute left-1/2 transform -translate-x-[430%] translate-y-[100%] text-3xl font-semibold italic text-purple-700">
          Young Essence
        </span>

        <ul className="flex space-x-3 transform -translate-x-1/4">
          <li className="bg-yellow-200 px-3 py-2 rounded-md shadow-md hover:bg-yellow-300 hover:text-purple-700 transition">
            <a href="#inicio" className="text-purple-900 font-semibold">Inicio</a>
          </li>
          <li className="bg-yellow-200 px-3 py-2 rounded-md shadow-md hover:bg-yellow-300 hover:text-purple-700 transition">
            <a href="#servicios" className="text-purple-900 font-semibold">Categorias</a>
          </li>
          <li className="bg-yellow-200 px-3 py-2 rounded-md shadow-md hover:bg-yellow-300 hover:text-purple-700 transition">
            <a href="#contacto" className="text-purple-900 font-semibold">Contacto</a>
          </li>
          <li className="bg-yellow-200 px-3 py-2 rounded-md shadow-md hover:bg-yellow-300 hover:text-purple-700 transition">
            <a href="#login" className="text-purple-900 font-semibold">Iniciar Sesión</a>
          </li>
        </ul>
      </nav>

      {/* Contenido */}
      <div className="flex flex-1 p-4">
        {/* Sección de Inicio de Sesión/Registro */}
        <div className="w-1/5 ml-0 p-4 bg-purple-100 rounded-lg shadow-md flex flex-col justify-center items-center">
          <h3 className="text-lg font-semibold text-purple-700 mb-4">Iniciar Sesión</h3>

          {/* Formulario de Login */}
          <form className="w-full space-y-3">
            <div>
              <label htmlFor="email" className="text-sm font-semibold text-purple-600">Correo Electrónico</label>
              <input type="email" id="email" name="email" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="tu@correo.com" required />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-semibold text-purple-600">Contraseña</label>
              <input type="password" id="password" name="password" className="w-full p-2 mt-2 border border-gray-300 rounded-md" placeholder="••••••••" required />
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded-md mt-3 hover:bg-purple-700 transition">
              Iniciar Sesión
            </button>
          </form>

          {/* Opción para registrarse */}
          <p className="mt-3 text-sm text-center">
            ¿No tienes cuenta?{" "}
            <a href="#registro" className="text-purple-700 font-semibold">Regístrate aquí</a>
          </p>
        </div>

        {/* Contenido Principal*/}
        <div className="w-3/4 ml-9 flex flex-col space-y-4">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl">
              <Carousel />
            </div>
          </div>

          {/* Secciones con contenido */}
          <div className="w-full grid grid-cols-3 gap-3">
            <section id="inicio" className="bg-pink-200 text-purple-900 p-4 text-center rounded-lg shadow-md">
              <h2 className="text-xl font-bold">Bienvenido a Young</h2>
              <p className="mt-2 max-w-lg mx-auto text-sm">Creatividad, individualidad y modernidad en un solo lugar.</p>
              <img src={Logo} alt="Imagen del logo Young Essence" className="w-full h-80 object-contain mx-auto" />
            </section>

            <section id="servicios" className="bg-purple-100 text-purple-900 p-4 text-center rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-600">Categorias</h2>
              <p className="mt-2 max-w-lg mx-auto text-sm">Explora nuestro catalogo de productos diseñados para chicas como tú.</p>
              <img src={Catalogo} alt="Imagen catalogo de productos" className="w-full h-80 object-contain mx-auto" />
            </section>

            <section id="contacto" className="bg-pink-300 text-purple-900 p-4 text-center rounded-lg shadow-md">
              <h2 className="text-xl font-bold text-purple-600">Contacto</h2>
              <p className="mt-2 max-w-lg mx-auto text-sm">Escríbenos para más información.</p>
              <img src={Contacto} alt="Imagen contacto" className="w-full h-80 object-contain mx-auto" />
            </section>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
