# 📌 Young Essence - Documentación para Desarrolladores

Bienvenido al repositorio de **Young Essence**. Este documento te guiará en la configuración del entorno de desarrollo y las mejores prácticas para colaborar en el proyecto. 🚀

## 📋 Requisitos Previos
Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu equipo:

- [Node.js](https://nodejs.org/) (Versión 20.17.0 o superior)
- [npm](https://www.npmjs.com/) (Se instala junto con Node.js)
- [Git](https://git-scm.com/)
- Un editor de código (Recomendado: [VS Code](https://code.visualstudio.com/))

## 🚀 Instalación del Proyecto

Sigue estos pasos para configurar el entorno de desarrollo:

1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/tu-usuario/young_essence.git
   cd young_essence
   ```

2. **Instalar dependencias:**
   ```sh
   npm install
   ```

3. **Ejecutar el entorno de desarrollo:**
   ```sh
   npm run dev
   ```
   Luego, abre en tu navegador `http://localhost:5173` para ver la aplicación en ejecución.

## 📂 Estructura del Proyecto

```
/young-essence
├── public/            # Archivos estáticos (imágenes, íconos, etc.)
├── src/               # Código fuente principal
│   ├── assets/        # Imagenes
│   ├── components/    # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── styles/        # Archivos de estilos (TailwindCSS)
│   ├── utils/         # Utilidades y funciones auxiliares
├── .gitignore         # Archivos ignorados por Git
├── package.json       # Dependencias y scripts del proyecto
├── vite.config.js     # Configuración de Vite
├── README.md          # Documentación del proyecto
```

## 🔧 Comandos útiles

| Comando          | Descripción |
|-----------------|-------------|
| `npm run dev`   | Inicia el entorno de desarrollo en `localhost:5173`. |
| `npm run build` | Genera una versión optimizada para producción. |
| `npm run preview` | Previsualiza la versión de producción localmente. |
| `npm run lint`  | Ejecuta el linter para verificar errores de código. |

## ✨ Convenciones de Código
Para mantener el código limpio y organizado:
- Usamos **TailwindCSS** para estilos.
- Seguimos la estructura de archivos de **React con Vite**.
- Aplicamos el formato de código con [ESLint](https://eslint.org/) y [Prettier](https://prettier.io/).
- Nombramos componentes y archivos en **PascalCase** (`EjemploComponente.jsx`).
- Usamos `git pull` antes de comenzar a trabajar y `git push` cuando terminamos.

## 🔗 Contribuir al Proyecto
1. Crea una nueva rama antes de hacer cambios:
   ```sh
   git checkout -b feature/nueva-funcionalidad
   ```
2. Realiza tus cambios y haz commits siguiendo buenas prácticas:
   ```sh
   git commit -m "✨ Agregada nueva funcionalidad X"
   ```
3. Sube tu rama y abre un **Pull Request**:
   ```sh
   git push origin feature/nueva-funcionalidad
   ```

## 📌 Contacto
Si tienes alguna duda, puedes abrir un Issue en GitHub. 😊

---
¡Gracias por colaborar en **Young Essence**! 💙🚀

