//Codigo del proyecto

function Codigo() {
    return (
        <div className="container mx-auto mt-10 h-70">
            <h1 className="text-2xl font-bold mb-4">Código del proyecto</h1>
            <p className="mb-4">
                El código fuente completo del proyecto se encuentra disponible en GitHub y puede ser descargado desde el siguiente enlace:
            </p>
            <a
                href="https://github.com/BCAndreaC/Young_Essence"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
            >
                Descargar código en GitHub
            </a>
        </div>
    );
}

export default Codigo;