import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const teamMembers = [
    "André Coronado",
    "Fátima Navarro",
    "Valeria Gamonal",
    "Johnny Gallegos",
    "María Angulo",
    "Thiago Salinas",
  ];

  const quickLinks = [
    { title: "Inicio", id: "hero" },
    { title: "Nosotros", id: "story" },
    { title: "Productos", id: "products" },
    { title: "Testimonios", id: "testimonials" },
    { title: "Contacto", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-brown-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          <div className="lg:col-span-1">
            <div className="flex justify-center md:justify-start mb-4">
              <Logo className="h-12 text-white" />
            </div>
            <p className="text-brand-beige/70">
              Deliciosas galletas nutritivas para una vida más fuerte y sabrosa.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-brand-beige">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-brand-beige/90 hover:text-white transition-colors"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-4 text-brand-beige">
              Síguenos
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/psi.fera/"
                target="_blank"
                aria-label="Instagram"
                className="text-brand-beige hover:text-white transition-colors"
              >
                <svg
                  fill="#ffffffff"
                  width="45px"
                  height="45px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@user1030307732447"
                target="_blank"
                aria-label="TikTok"
                className="text-brand-beige hover:text-white transition-colors"
              >
                <svg
                  fill="#ffffffff"
                  width="45px"
                  height="45px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:col-span-1">
            <h3 className="font-serif text-xl font-semibold mb-4 text-brand-beige">
              Creadores
            </h3>
            <ul className="space-y-1 text-sm text-brand-beige/80">
              {teamMembers.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-brand-beige/20 mt-12 pt-6 text-center text-brand-beige/60">
          <p className="mb-2 text-sm">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Aviso Legal
            </a>
            <span className="mx-2">|</span>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Política de Privacidad
            </a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} Psifera. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
