import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function Actividades() {
  // Estado para manejar expansión/colapso de actividades
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (unidadIdx, actividadIdx) => {
    setExpanded((prev) => ({
      ...prev,
      [`${unidadIdx}-${actividadIdx}`]: !prev[`${unidadIdx}-${actividadIdx}`],
    }));
  };

  const unidades = [
    {
      nombre: "Unidad 1: Fundamentos del Proyecto",
      actividades: [
        {
          titulo: "Actividad 2: El Product Backlog",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">El documento describe la creación del Product Backlog para el proyecto "Young Essence", una plataforma de comercio electrónico.
                <br />
                <br />
                <a
                  href="https://drive.google.com/file/d/10SfYY5ATOX9n6Rf5gCfjoc7vWJeHgCiP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad Integradora: Sprint, el Corazón de SCRUM",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark"> Texto sobre sprint planning, roles, entregables, duración, resultados esperados, y una tabla de sprint backlog.
                <br />
                <br />
                <a
                  href="https://drive.google.com/file/d/1MUDfyrnbKaRnZ6EASdpt4GO1mWK_HlmP/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
      ],
    },
    {
      nombre: "Unidad 2: Diseño y Prototipado",
      actividades: [
        {
          titulo: "Actividad 1: Selección de Herramientas",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark"> Lista de herramientas (React, Vite, Tailwind CSS, Node.js, GitHub) y pasos de configuración
                <br />
                <br />
                <a
                  href="https://drive.google.com/file/d/1daUMUhCtq6TPvge55HKiFBpeH0yIiTLe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad 2: Wireframes y Prototipos",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Detalles de wireframes y prototipos (página de inicio, carrito, cuenta), usando listas.
                <br />
                <br />
                <a
                  href="https://drive.google.com/file/d/1JmjmXzlCWdK_LNh0HxqZ4SUQ7xzkJvFa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                 Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad Integradora: Backlog y Cronograma",
          contenido: (
            <div>
              <p className="mb-4 text-neutral-dark">Refinamiento del backlog, entregables, y una tabla de cronograma de sprints (Sprint, Duración, Tareas).
                <br />
                <br />
                <a
                  href="https://drive.google.com/file/d/1A0zPHsJnZ6_ArMcbtLjVBefe9xHaazzX/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
      ],
    },
    {
      nombre: "Unidad 3: Desarrollo",
      actividades: [
        {
          titulo: "Actividad preliminar. Retomando mi primer sprint",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Reflexiona sobre el primer sprint, destacando éxitos (product backlog completo, entorno configurado) y áreas de mejora (comunicación en reuniones, estimación de tiempos). Propone acciones como estructurar reuniones y mejorar estimaciones con técnicas como Planning Poker.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1HWRL0XRId1GXXKJh3ihRw0O92KXGf2qvMn-Z9Hk-5fM/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
         {
          titulo: "Actividad Preliminar: Retomando el Primer Sprint",
          contenido: (
            <div> 
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Describe el desarrollo inicial de la página de inicio (banner, navegación, footer) y el carrito de compras (lista de productos, subtotal). Ajusta el backlog dividiendo la historia PB-04 (carrito) y añadiendo validaciones para la cuenta. Incluye retroalimentación del product owner, que aprueba la página pero sugiere mejorar la paleta de colores.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1dRpWG9p0dsa6ccXSWF1O7r2DRBJfZ_FLmUOcpN0n3ho/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad 1: Primera Fase de Desarrollo",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Describe el desarrollo inicial de la página de inicio (banner, navegación, footer) y el carrito de compras (lista de productos, subtotal). Ajusta el backlog dividiendo la historia PB-04 (carrito) y añadiendo validaciones para la cuenta. Incluye retroalimentación del product owner, que aprueba la página pero sugiere mejorar la paleta de colores.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1dRpWG9p0dsa6ccXSWF1O7r2DRBJfZ_FLmUOcpN0n3ho/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                 Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad 2: Segunda Fase de Desarrollo",
          contenido: (
            <div>
              <p className="mb-4 text-neutral-dark">Continúa el desarrollo con el formulario de cuenta (datos personales, validaciones) y pruebas funcionales del carrito y página de inicio en múltiples dispositivos. Ajusta el backlog priorizando rutas en React Router y añadiendo autenticación básica. La retroalimentación indica que el carrito es funcional pero necesita persistencia con localStorage.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1ZinII-UmKjLKm9Uc40Km39tQUvO5ZrFrLev6VZmqRgY/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad 3: Tercera Fase de Desarrollo",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Finaliza el carrito (persistencia con localStorage) y el formulario de cuenta (validaciones robustas). Prepara pruebas de usuario con casos de prueba. Ajusta el backlog eliminando tareas redundantes y añadiendo documentación del código. El resultado es un producto funcional listo para pruebas.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1TS9y_0MjMD56_TJUn23PCiEmbsTnTp4BiTqsdHtkH6Q/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad Integradora: Producto Final U3",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Entrega un producto funcional con página de inicio (banner, navegación), carrito (gestión de ítems, localStorage), y cuenta (formulario validado). Incluye documentación (código en GitHub, manual con capturas) y pruebas funcionales en múltiples dispositivos. El product owner aprueba con sugerencias de mejora en la UI.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1ffbtpIemr-f8LBqFD1Bk-rBy4DXu9-U6/edit?usp=sharing&ouid=106151114640301496481&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
      ],
    },
    {
      nombre: "Unidad 4: Optimización y Entrega",
      actividades: [
        {
          titulo: "Actividad 1: Revisión Inicial",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Realiza una revisión del producto con retroalimentación externa, destacando puntos positivos (funcionalidad de carrito y cuenta, diseño responsive) y áreas de mejora (paleta de colores inconsistente, falta historial de compras, manual incompleto). Propone acciones como definir paleta, crear página de historial, y actualizar el manual.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1-45vlK1m3aks33gtv_aU1KYSiEJ9TvfX9PnD2HxwtY0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
          ),
        },
        {
          titulo: "Actividad 2: Revisión de Modificaciones",
          contenido: (
            <div>
                <br />
                <br />
              <p className="mb-4 text-neutral-dark">Implementa mejoras: paleta de colores consistente (morado #6B46C1, rosa #F687B3), página de historial de compras, y manual final con capturas. Realiza pruebas finales y obtiene aprobación del product owner. Entrega código en GitHub, manual en PDF, y producto listo.
                <br />
                <br />
                <a
                  href="https://docs.google.com/document/d/1bGjMMH0wW5i5S4kNzq0PUy2jSQplvDYfVSNhrAfKkAU/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary text-style=style=color: #008080 px-4 py-2 rounded-md hover:bg-secondary transition"
                >
                  Da clic aquí para ver la actividad
                </a>
              </p>
            </div>
             ),
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 min-h-screen bg-neutral-light">
      <h1 className="text-3xl font-bold text-neutral-dark mb-8 text-center">
        Actividades Realizadas en el Curso
      </h1>

      {unidades.map((unidad, unidadIdx) => (
        <section key={unidadIdx} className="mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            {unidad.nombre}
          </h2>
          <div className="space-y-6">
            {unidad.actividades.map((actividad, actividadIdx) => (
              <div
                key={actividadIdx}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleExpand(unidadIdx, actividadIdx)}
                >
                  <h3 className="text-xl font-medium text-neutral-dark">
                    {actividad.titulo}
                  </h3>
                  {expanded[`${unidadIdx}-${actividadIdx}`] ? (
                    <ChevronUpIcon className="w-6 h-6 text-primary" />
                  ) : (
                    <ChevronDownIcon className="w-6 h-6 text-primary" />
                  )}
                </div>
                {expanded[`${unidadIdx}-${actividadIdx}`] && (
                  <div className="mt-4">
                    <p className="text-neutral-dark text-sm whitespace-pre-wrap">
                      {actividad.contenido}
                    </p>
                    {actividad.imagen && (
                      <img
                        src={actividad.imagen}
                        alt={actividad.titulo}
                        className="w-full h-48 object-cover rounded-md mt-4"
                      />
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
