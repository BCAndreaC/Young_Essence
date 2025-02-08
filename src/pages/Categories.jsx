import React from "react";

const categorias = [
  {
      id: 1,
      name: "Ropa",
      imageSrc: "/src/assets/ropa.jpg",
      imageAlt: "Model wearing light green crewneck t-shirt and light wash denim shorts standing on front porch of house.",
      href: "/categories/ropa"
  },
  {
      id: 2,
      name: "Calzado",
      imageSrc: "/src/assets/calzado.jpg",
      imageAlt: "Model wearing black melange crewneck t-shirt, black melange joggers, and white sneakers.",
      href: "/categories/ropa"
  },
  {
      id: 3,
      name: "Accesorios",
      imageSrc: "/src/assets/accesorios.jpg",
      imageAlt: "Model wearing black baseball cap, black long-sleeve crewneck t-shirt, black canvas messenger bag, and black denim pants.",
      href: "/categories/ropa"
  },
  {
      id: 4,
      name: "Belleza y Cuidado Personal",
      imageSrc: "/src/assets/belleza.jpg",
      imageAlt: "Model wearing white crewneck t-shirt, black running shorts, and white sneakers.",
      href: "/categories/ropa"
  },
  {
    id: 5,
    name: "Decoración",
    imageSrc: "/src/assets/decoracion.jpg",
    imageAlt: "Model wearing black baseball cap, black long-sleeve crewneck t-shirt, black canvas messenger bag, and black denim pants.",
    href: "/categories/ropa"
},
{
  id: 6,
  name: "Peluches",
  imageSrc: "/src/assets/peluches.jpg",
  imageAlt: "Model wearing black baseball cap, black long-sleeve crewneck t-shirt, black canvas messenger bag, and black denim pants.",
  href: "/categories/ropa"
},
{
  id: 7,
  name: "Tendencias",
  imageSrc: "/src/assets/tendencia.jpg",
  imageAlt: "Model wearing black baseball cap, black long-sleeve crewneck t-shirt, black canvas messenger bag, and black denim pants.",
  href: "/categories/ropa"
},
{
  id: 8,
  name: "Todo",
  imageSrc: "/src/assets/todo.jpg",
  imageAlt: "Model wearing black baseball cap, black long-sleeve crewneck t-shirt, black canvas messenger bag, and black denim pants.",
  href: "/categories/ropa"
},
];

export default function Categories() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
      <h1 className="text-black py-8">Categorias</h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {categorias.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              <h3 className="mt-4 text-lg text-gray-800">{product.name}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
