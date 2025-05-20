//Sistema implementado en el proyecto

import { useState } from "react";

function Sistema() {
    const [abierto, setAbierto] = useState({
        react: false,
        vite: false,
        tailwind: false,
        ui: false,
        router: false,
        carousel: false,
        eslint: false,
        github: false,
        types: false,
    });

    const toggle = (clave) => {
        setAbierto((prev) => ({
            ...prev,
            [clave]: !prev[clave],
        }));
    };

    const elementos = [
        {
            clave: "react",
            titulo: "React.js",
            descripcion: "Framework principal para crear interfaces dinámicas con componentes reutilizables y estado local.",
        },
        {
            clave: "vite",
            titulo: "Vite",
            descripcion: "Herramienta moderna de desarrollo frontend para servir y construir el proyecto de manera eficiente.",
        },
        {
            clave: "tailwind",
            titulo: "Tailwind CSS",
            descripcion: "Framework de utilidades CSS para construir interfaces personalizadas y responsivas.",
        },
        {
            clave: "ui",
            titulo: "Headless UI y Heroicons",
            descripcion: "Componentes accesibles sin estilo prediseñado (Headless UI) y una librería de iconos SVG (Heroicons).",
        },
        {
            clave: "router",
            titulo: "React Router DOM",
            descripcion: "Manejo de navegación entre páginas o rutas dentro de una SPA (Single Page Application).",
        },
        {
            clave: "carousel",
            titulo: "React Responsive Carousel",
            descripcion: "Componente de carrusel responsivo para mostrar imágenes o contenido destacado.",
        },
        {
            clave: "eslint",
            titulo: "ESLint",
            descripcion: "Herramienta para analizar el código y aplicar buenas prácticas, incluyendo plugins para React y hooks.",
        },
        {
            clave: "github",
            titulo: "GitHub",
            descripcion: "Control de versiones y despliegue del proyecto mediante GitHub Pages.",
        },
        {
            clave: "types",
            titulo: "Type Definitions",
            descripcion: "Paquetes de tipos para usar con TypeScript aunque el proyecto esté escrito en JavaScript.",
        },
    ];

    return (
        <div className="container mx-auto mt-10 p-4">
            <h1 className="text-2xl font-bold mb-6">Sistema implementado en el proyecto</h1>

            {/* Descripción general del reporte */}
            <p className="mb-6 text-gray-800">
                En el desarrollo del proyecto se integraron diversas tecnologías modernas que permitieron construir
                una interfaz dinámica, estilizada, optimizada y fácilmente mantenible. A continuación se detallan los
                sistemas y herramientas más relevantes utilizados en el desarrollo.
            </p>

            {/* Grid de 3 columnas con fondo suave */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {elementos.map(({ clave, titulo, descripcion }) => (
                    <div
                        key={clave}
                        className="bg-pink-100 border border-pink-300 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-300"
                    >
                        <button
                            onClick={() => toggle(clave)}
                            className="w-full text-left text-lg font-semibold text-pink-700 hover:underline"
                        >
                            {titulo}
                        </button>
                        {abierto[clave] && (
                            <p className="mt-2 text-gray-700 text-sm">{descripcion}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sistema;
