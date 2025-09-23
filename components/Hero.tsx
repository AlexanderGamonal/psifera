import React from "react";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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

  const navLinks = [
    { id: "hero", title: "Inicio" },
    { id: "story", title: "Nosotros" },
    { id: "products", title: "Productos" },
    { id: "testimonials", title: "Testimonios" },
  ];

  return (
    <section
      id="hero"
      className="relative py-16 md:py-24 flex flex-col items-center justify-center max-h-[90vh] bg-[url('/images/galletas10.png')] w-full bg-cover no-repeat h-screen"
    >
      <div className="container mx-auto px-6 z-20">
        {/* Pill Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-full shadow-md p-2 flex items-center space-x-2">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  index === 0
                    ? "bg-white text-brand-brown-dark shadow"
                    : "text-brand-text hover:bg-white/50"
                }`}
              >
                {link.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-8 justify-end">
          {/* Text Card */}
          <div className="w-full lg:w-1/2 bg-white/40 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-lg order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-brand-brown-dark leading-tight">
              Psifera: Galletas deliciosas y nutritivas para combatir la anemia
            </h1>
            <p className="text-lg md:text-xl text-brand-text mb-8">
              ¡Cada bocado, un paso hacia una vida más fuerte y sabrosa!
            </p>
            <button
              onClick={() => scrollToSection("products")}
              className="bg-brand-brown text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-brand-brown-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explora nuestras galletas
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
