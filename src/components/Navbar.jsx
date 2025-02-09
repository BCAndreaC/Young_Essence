import React, { useState } from 'react';

const Navbar = ({ logo, menuItems, buttons }) => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="bg-pink-300 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo.src} alt={logo.alt} className="h-12 w-12 rounded-full" />
        <span className="text-xl font-bold">{logo.text}</span>
      </div>

      {/* Menú de navegación */}
      <nav className={`md:flex md:items-center md:space-x-4 ${menuActive ? 'block' : 'hidden'} absolute md:static top-16 left-0 w-full md:w-auto bg-pink-500 md:bg-transparent`}>
        <ul className="flex flex-col md:flex-row md:space-x-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} className="block p-2 hover:bg-pink-400 rounded-md">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Botones */}
      <div className="flex space-x-2">
        {buttons.map((button, index) => (
          <a
            key={index}
            href={button.link}
            className="text-white px-4 py-2 hover:bg-pink-400 rounded-md bg-pink-600"
          >
            {button.label}
          </a>
        ))}
      </div>

      {/* Ícono del menú (solo en móviles) */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {menuActive ? '✕' : '☰'}
      </div>
    </header>
  );
};

export default Navbar;