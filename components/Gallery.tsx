import React from "react";

// Product data
const products = [
  {
    name: "Galleta de Avena y Sangrecita",
    description:
      "Nuestra receta original, rica en hierro y fibra. Perfecta para empezar el día con energía y combatir la anemia.",
    imageSrc: "./public/images/galleta-sangrecita.png",
  },
  {
    name: "Clásica de Chocolate y Hierro",
    description:
      "El delicioso sabor del chocolate combinado con un extra de hierro. ¡El snack saludable favorito de los niños!",
    imageSrc: "./public/images/galleta-chocolate.png",
  },
  {
    name: "Quinua Power con Pasas",
    description:
      "Una poderosa mezcla de quinua, pasas y nutrientes esenciales. Ideal para deportistas y mentes activas.",
    imageSrc: "./public/images/galleta-quinua.png",
  },
  {
    name: "Galleta de Kiwicha y Naranja",
    description:
      "La kiwicha, un superalimento andino, con un toque cítrico de naranja. Llena de sabor y vitaminas.",
    imageSrc: "./public/images/galleta-kiwicha.png",
  },
];

const ProductCard: React.FC<{ product: (typeof products)[0] }> = ({
  product,
}) => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset =
        document.getElementById("header")?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <img
        src={product.imageSrc}
        alt={`Galleta de ${product.name}`}
        className="w-full h-50 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl text-brand-brown-dark mb-2">
          {product.name}
        </h3>
        <p className="text-brand-text leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>
        <button
          onClick={scrollToContact}
          className="mt-auto bg-brand-brown text-white font-bold py-2 px-4 rounded-full hover:bg-brand-brown-dark transition-colors duration-300 self-start"
        >
          ¡La quiero!
        </button>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-12 md:py-12 bg-brand-beige/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark">
            Nuestra Variedad de Sabores
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-brand-text">
            Cada galleta está hecha con amor e ingredientes de la más alta
            calidad para nutrirte en cada bocado.
          </p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 rounded"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
