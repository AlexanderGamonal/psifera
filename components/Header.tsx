import React, { useState } from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: "hero", title: "Inicio" },
    { id: "story", title: "Nosotros" },
    { id: "about", title: "Misión & Visión" },
    { id: "products", title: "Productos" },
    { id: "testimonials", title: "Testimonios" },
    { id: "contact", title: "Contacto" },
  ];

  return (
    <header
      id="header"
      className="bg-brand-beige backdrop-blur-sm sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div onClick={() => scrollToSection("hero")} className="cursor-pointer">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-brand-brown-dark hover:text-brand-brown-light transition-colors duration-300 font-medium"
            >
              {link.title}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 bg-brand-brown text-white px-5 py-2 rounded-full hover:bg-brand-brown-dark transition-shadow duration-300 shadow-sm hover:shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 3.15.93 5.39 2.6 7.4L3.06 22l2.64-1.54c1.87.97 3.84 1.5 6.3 1.5h.01c5.5 0 9.99-4.52 9.99-10.02S17.5 2.04 12 2.04zm4.83 11.5c-.28.42-1.12.78-1.57.88-.45.1-1.03.15-1.57-.08-.54-.23-1.46-.68-2.78-1.7-1.32-1.02-2.22-2.28-2.5-2.67s-.28-.62-.02-.88c.26-.26.57-.33.78-.33s.42 0 .6-.02c.18-.02.42-.13.65.33.23.45.78 1.9.85 2.04.07.14.02.33-.08.45-.1.12-.23.18-.42.28-.18.1-.33.15-.45.23-.12.08-.28.18-.13.42.15.24.68.9 1.45 1.68.77.78 1.73 1.28 1.98 1.4s.42.03.57-.08c.15-.12.65-.75.83-1s.18-.23.33-.13c.15.1.95.45 1.12.53s.28.12.33.18c.05.06.02.42-.26.84z" />
            </svg>
            ¡Pide Ahora!
          </button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-brown-dark focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-beige pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-brand-brown-dark hover:text-brand-brown-light transition-colors duration-300 font-medium py-2"
              >
                {link.title}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center gap-2 bg-brand-brown text-white px-6 py-2 rounded-full hover:bg-brand-brown-dark transition-shadow duration-300 shadow-sm hover:shadow-md"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 3.15.93 5.39 2.6 7.4L3.06 22l2.64-1.54c1.87.97 3.84 1.5 6.3 1.5h.01c5.5 0 9.99-4.52 9.99-10.02S17.5 2.04 12 2.04zm4.83 11.5c-.28.42-1.12.78-1.57.88-.45.1-1.03.15-1.57-.08-.54-.23-1.46-.68-2.78-1.7-1.32-1.02-2.22-2.28-2.5-2.67s-.28-.62-.02-.88c.26-.26.57-.33.78-.33s.42 0 .6-.02c.18-.02.42-.13.65.33.23.45.78 1.9.85 2.04.07.14.02.33-.08.45-.1.12-.23.18-.42.28-.18.1-.33.15-.45.23-.12.08-.28.18-.13.42.15.24.68.9 1.45 1.68.77.78 1.73 1.28 1.98 1.4s.42.03.57-.08c.15-.12.65-.75.83-1s.18-.23.33-.13c.15.1.95.45 1.12.53s.28.12.33.18c.05.06.02.42-.26.84z" />
              </svg>
              ¡Pide Ahora!
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
