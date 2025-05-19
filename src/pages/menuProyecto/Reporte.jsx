//Reportes realizadas en el proyecto:

function Reporte() {

   return (
        <div className="container mx-auto mt-10 h-full">
            <h1 className="text-2xl font-bold mb-6">Reportes implementados en el proyecto</h1>

            {/* Bitácora de modificaciones */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold mb-4">1. Bitácora de modificaciones</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-2 px-4 border">Fecha</th>
                                <th className="py-2 px-4 border">Modificación realizada</th>
                                <th className="py-2 px-4 border">Responsable</th>
                                <th className="py-2 px-4 border">Comentarios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="py-2 px-4 border">07/05/2025</td>
                                <td className="py-2 px-4 border">Se aplicó una paleta de colores consistente en todos los módulos del sitio para mejorar la UI</td>
                                <td className="py-2 px-4 border">Andrea Bonilla</td>
                                <td className="py-2 px-4 border">Basado en sugerencia propia y validado por el equipo</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-2 px-4 border">08/05/2025</td>
                                <td className="py-2 px-4 border">Se diseñó e implementó una nueva página de historial de compras accesible desde la cuenta de usuario</td>
                                <td className="py-2 px-4 border">Jaretzy Rodríguez</td>
                                <td className="py-2 px-4 border">Fue añadida una sección que almacena compras anteriores y permite filtrarlas</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-2 px-4 border">09/05/2025</td>
                                <td className="py-2 px-4 border">Se actualizaron estilos globales en Tailwind para armonizar componentes y se refactorizó el archivo tailwind.config.js</td>
                                <td className="py-2 px-4 border">Abraham Hernández</td>
                                <td className="py-2 px-4 border">Esto mejora la consistencia visual del sitio</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Cambios reflejados en el backlog */}
            <section>
                <h2 className="text-xl font-semibold mb-4">2. Cambios reflejados en el backlog</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                <th className="py-2 px-4 border">ID</th>
                                <th className="py-2 px-4 border">Historia de Usuario</th>
                                <th className="py-2 px-4 border">Alias</th>
                                <th className="py-2 px-4 border">Estado</th>
                                <th className="py-2 px-4 border">Dimensión / Esfuerzo</th>
                                <th className="py-2 px-4 border">Sprint</th>
                                <th className="py-2 px-4 border">Prioridad</th>
                                <th className="py-2 px-4 border">Comentarios</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-50">
                                <td className="py-2 px-4 border">PB-15</td>
                                <td className="py-2 px-4 border">Como usuario registrado, quiero acceder a un historial de compras para revisar mis pedidos anteriores</td>
                                <td className="py-2 px-4 border">Historial de compras</td>
                                <td className="py-2 px-4 border">En desarrollo</td>
                                <td className="py-2 px-4 border">Media</td>
                                <td className="py-2 px-4 border">Sprint 5</td>
                                <td className="py-2 px-4 border">Alta</td>
                                <td className="py-2 px-4 border">Página funcional con acceso desde el dashboard</td>
                            </tr>
                            <tr className="hover:bg-gray-50">
                                <td className="py-2 px-4 border">PB-16</td>
                                <td className="py-2 px-4 border">Como desarrollador de UI, quiero una paleta de colores unificada para todo el sitio</td>
                                <td className="py-2 px-4 border">Consistencia visual</td>
                                <td className="py-2 px-4 border">Completado</td>
                                <td className="py-2 px-4 border">Media</td>
                                <td className="py-2 px-4 border">Sprint 5</td>
                                <td className="py-2 px-4 border">Alta</td>
                                <td className="py-2 px-4 border">Implementado en Tailwind y revisado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <section>
                <div className="overflow-x-auto">
                    <h1 className="text-2xl font-bold mb-6">Primeros formatos</h1>
                    <a href="https://docs.google.com/document/d/1VpP4Hb1E9CeUY4l9d05eUNjyXS53uan6XlgC2mLOg34/edit?usp=sharing"
                    className="inline-block bg-primary text-style=style=color:rgb(226, 16, 138) px-4 py-2 rounded-md hover:bg-secondary transition"></a>
                </div>
            </section>
            <br />
            <br />
            <br />
            <section>
                <div className="overflow-x-auto">
                    <h1 className="text-2xl font-bold mb-6">Primeros formatos</h1>
                    <a href="https://docs.google.com/document/d/1NpyR2qeha8JwdpVLERsSW36YSsB-XdLGcuq41hy_7HQ/edit?usp=sharing"
                    className="inline-block bg-primary text-style=style=color:rgb(226, 16, 138) px-4 py-2 rounded-md hover:bg-secondary transition"></a>
                </div>
            </section>
            <br />
            <br />
        </div>
    );




    // 

    return (
        <div className="container mx-auto mt-10 h-full">
            <h1 className="text-2xl font-bold mb-4">Reportes implementado en el proyecto</h1>
<br />
<br />
        </div>
        
    );
}

export default Reporte;
