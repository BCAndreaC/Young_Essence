const products = [
    {
      id: 1,
      name: 'Top Corto de Algodón',
      href: '#',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1664475951647-bfa3ab77d131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9wJTIwY29ydG98ZW58MHx8MHx8fDA%3D',
      imageAlt: "Top corto de algodón en color blanco.",
      price: '$250',
      color: 'Blanco',
    },
    {
      id: 2,
      name: 'Falda Vaquera',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1600738562574-860da204fa58?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFsZGElMjB2YXF1ZXJhfGVufDB8fDB8fHww',
      imageAlt: "Falda vaquera de mezclilla azul.",
      price: '$450',
      color: 'Azul',
    },
    {
      id: 3,
      name: 'Vestido Floral',
      href: '#',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1723535671118-ae4028123e40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmVzdGlkbyUyMGZsb3JhbHxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: "Vestido floral con estampado en colores vivos.",
      price: '$600',
      color: 'Multicolor',
    },
    {
      id: 4,
      name: 'Jeans Pitillo',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amVhbnN8ZW58MHx8MHx8fDA%3D',
      imageAlt: "Jeans pitillo de color azul oscuro.",
      price: '$500',
      color: 'Azul Oscuro',
    },
    {
      id: 5,
      name: 'Blusa de Encaje',
      href: '#',
      imageSrc: 'https://plus.unsplash.com/premium_photo-1661609526719-7fc1899736ed?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ymx1c2ElMjBkZSUyMGVuY2FqZXxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: "Blusa de encaje en color blanco.",
      price: '$350',
      color: 'Negro',
    },
    {
      id: 6,
      name: 'Chaqueta de Cuero',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcXVldGElMjBkZSUyMGN1ZXJvfGVufDB8fDB8fHww',
      imageAlt: "Chaqueta de cuero en color marrón.",
      price: '$1200',
      color: 'Marrón',
    },
    {
      id: 7,
      name: 'Short de Mezclilla',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1585145197082-dba095ba01ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnQlMjBkZSUyMG1lemNsaWxsYXxlbnwwfHwwfHx8MA%3D%3D',
      imageAlt: "Short de mezclilla en color azul claro.",
      price: '$400',
      color: 'Azul Claro',
    },
    {
      id: 8,
      name: 'Top Deportivo',
      href: '#',
      imageSrc: 'https://images.unsplash.com/photo-1518617840859-acd542e13a99?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dG9wJTIwZGVwb3J0aXZvfGVufDB8fDB8fHww',
      imageAlt: "Top deportivo en color gris.",
      price: '$300',
      color: 'Gris',
    },
];
  
  export default function Ropa() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h1 className="text-black py-8">Ropa</h1>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  