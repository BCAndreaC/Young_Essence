import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const products = [
  {
    id: 1,
    name: "Top Corto de Algodón",
    href: "/cart",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1664475951647-bfa3ab77d131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9wJTIwY29ydG98ZW58MHx8MHx8fDA%3D",
    imageAlt: "Top corto de algodón en color blanco.",
    price: "$250",
    color: "Blanco",
  },
  {
    id: 2,
    name: "Falda Vaquera",
    href: "/cart",
    imageSrc:
      "https://images.unsplash.com/photo-1600738562574-860da204fa58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFsZGElMjB2YXF1ZXJhfGVufDB8fDB8fHww",
    imageAlt: "Falda vaquera de mezclilla azul.",
    price: "$450",
    color: "Azul",
  },
  {
    id: 3,
    name: "Vestido Floral",
    href: "/cart",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1723535671118-ae4028123e40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVzdGlkbyUyMGZsb3JhbHxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Vestido floral con estampado en colores vivos.",
    price: "$600",
    color: "Multicolor",
  },
  {
    id: 4,
    name: "Jeans Pitillo",
    href: "/cart",
    imageSrc:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D",
    imageAlt: "Jeans pitillo de color azul oscuro.",
    price: "$500",
    color: "Azul Oscuro",
  },
  {
    id: 5,
    name: "Blusa de Encaje",
    href: "/cart",
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1661609526719-7fc1899736ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1c2ElMjBkZSUyMGVuY2FqZXxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Blusa de encaje en color blanco.",
    price: "$350",
    color: "Negro",
  },
  {
    id: 6,
    name: "Chaqueta de Cuero",
    href: "/cart",
    imageSrc:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcXVldGElMjBkZSUyMGN1ZXJvfGVufDB8fDB8fHww",
    imageAlt: "Chaqueta de cuero en color marrón.",
    price: "$1200",
    color: "Marrón",
  },
  {
    id: 7,
    name: "Short de Mezclilla",
    href: "/cart",
    imageSrc:
      "https://images.unsplash.com/photo-1585145197082-dba095ba01ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnQlMjBkZSUyMG1lemNsaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
    imageAlt: "Short de mezclilla en color azul claro.",
    price: "$400",
    color: "Azul Claro",
  },
  {
    id: 8,
    name: "Top Deportivo",
    href: "/cart",
    imageSrc:
      "https://images.unsplash.com/photo-1518617840859-acd542e13a99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9wJTIwZGVwb3J0aXZvfGVufDB8fDB8fHww",
    imageAlt: "Top deportivo en color gris.",
    price: "$300",
    color: "Gris",
  },
];

export default function HomePage() {
  // Filtrar productos para el carrusel (id 1 al 4)
  const carouselProducts = products.filter(
    (product) => product.id >= 1 && product.id <= 4
  );

  // Filtrar productos destacados (id 5 al 8)
  const featuredProducts = products.filter(
    (product) => product.id >= 5 && product.id <= 7
  );

  return (
    <div className="w-full">
      {/* Hero Section with Carousel */}
      <section className="text-center py-8 px-6 bg-pink-50">
        <h2 className="text-4xl font-bold text-gray-800">Define tu estilo</h2>
        <p className="mt-2 text-gray-600">Ropa juvenil para cada ocasión.</p>
        <Carousel showThumbs={false} autoPlay infiniteLoop className="mt-6">
          {carouselProducts.map((product) => (
            <div key={product.id}>
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="mx-auto h-100 object-contain"
              />
              <p className="legend">{product.name} - {product.price}</p>
            </div>
          ))}
        </Carousel>
        <button className="mt-6 bg-pink-400 text-white p-2 rounded hover:bg-purple-700 cursor-pointer">
          Comprar ahora
        </button>
      </section>
      {/* Featured Products */}
      <section id="shop" className="py-12 px-6">
        <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Productos destacados
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md p-4 rounded-lg text-center"
            >
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="mx-auto mb-4 h-48 object"
              />
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 bg-pink-400 text-white p-2 rounded hover:bg-purple-700 cursor-pointer">
                Comprar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
