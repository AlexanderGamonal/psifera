import React from "react";

const BenefitItem: React.FC<{ icon: React.ReactNode; text: string }> = ({
  icon,
  text,
}) => (
  <div className="flex items-center bg-white px-5 md:px-20 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="bg-brand-beige p-3 rounded-full mr-4">{icon}</div>
    <span className="font-semibold text-brand-text">{text}</span>
  </div>
);

const Products: React.FC = () => {
  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="products" className="py-12 md:py-12 px-5 md:px-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="./public/images/hierro5.png"
              alt="Galletas Psifera apiladas sobre una tabla de madera"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark mb-4">
              Nuestras Galletas Psifera: Deliciosas y llenas de poder
            </h2>
            <div className="w-24 h-1 bg-brand-accent mb-6 rounded"></div>
            <p className="text-lg text-brand-text mb-8 leading-relaxed">
              En Psifera, creamos galletas únicas pensadas para aportar los
              nutrientes que necesitas en tu día a día, sin sacrificar el sabor
              que tanto te gusta. Un bocado hacia una vida más fuerte.
            </p>
            <h3 className="font-serif text-2xl text-brand-brown-dark mb-6">
              Beneficios Clave
            </h3>
            <div className="space-y-4 mb-10">
              <BenefitItem icon={<LeafIcon />} text="Combate la Anemia" />
              <BenefitItem
                icon={<DropletIcon />}
                text="Fuente Natural de Hierro"
              />
              <BenefitItem
                icon={<StarIcon />}
                text="Deliciosas para Grandes y Pequeños"
              />
              <BenefitItem
                icon={<BoltIcon />}
                text="Energía y Bienestar para tu Día a Día"
              />
            </div>
            <button
              onClick={scrollToGallery}
              className="bg-brand-brown text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-brand-brown-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icon components for benefits
const LeafIcon = () => (
  <svg
    className="w-6 h-6 text-green-600"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.121 15.879l-1.414 1.414a2 2 0 01-2.828 0l-5.657-5.657a2 2 0 010-2.828l1.414-1.414a2 2 0 012.828 0l5.657 5.657a2 2 0 010 2.828z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12h.01"
    />
  </svg>
);
const DropletIcon = () => (
  <svg
    className="w-6 h-6 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22a8 8 0 008-8c0-4.418-3.582-12-8-12S4 9.582 4 14a8 8 0 008 8z"
    />
  </svg>
);
const StarIcon = () => (
  <svg
    className="w-6 h-6 text-yellow-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);
const BoltIcon = () => (
  <svg
    className="w-6 h-6 text-orange-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

export default Products;
