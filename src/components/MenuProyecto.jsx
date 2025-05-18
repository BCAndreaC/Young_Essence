import { useState, useEffect } from "react";
import "../styles/MenuProyecto.css"; // Importa tu archivo CSS aquí

export default function MenuProyecto() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  const handleClickOutside = (event) => {
    if (!event.target.closest(".menu-container")) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={toggleMenu}>
        Menú del Proyecto
      </button>
      {open && (
        <div className="menu-dropdown">
          <a href="/actividades">Actividades realizadas</a>
          <a href="/sistema">Sistema implementado</a>
          <a href="/codigo">Código fuente (.zip)</a>
          <a href="/reporte">Reporte de modificaciones</a>
        </div>
      )}
    </div>
  );
}
