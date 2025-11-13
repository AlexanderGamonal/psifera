import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-12 md:py-12 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark">
            Contacta con Nosotros
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-brand-text">
            ¿Tienes preguntas o quieres hacer un pedido? ¡Estamos aquí para
            ayudarte!
          </p>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-white/50 p-8 rounded-lg shadow-md">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-brand-text font-semibold mb-2"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-brand-accent/30 rounded-lg focus:ring-brand-brown focus:border-brand-brown transition"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-brand-text font-semibold mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-brand-accent/30 rounded-lg focus:ring-brand-brown focus:border-brand-brown transition"
                  placeholder="tu@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-brand-text font-semibold mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-brand-accent/30 rounded-lg focus:ring-brand-brown focus:border-brand-brown transition"
                  placeholder="Escribe tu consulta aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-brown text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-brand-brown-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl text-brand-brown-dark mb-4">
                Información de Contacto
              </h3>
              <ul className="space-y-4 text-brand-text text-lg">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-4 text-brand-brown-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>+51 999-888-777</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-4 text-brand-brown-light"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>psifera@contact.com</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-2xl text-brand-brown-dark mb-4">
                Redes Sociales
              </h3>
              <div className="flex flex-col items-start space-y-3">
                <a
                  href="https://www.instagram.com/psi.fera?utm_source=qr&igsh=MWE1YzJ4dHVpYXNibg%3D%3D"
                  target="_blank"
                  aria-label="Instagram"
                  className="flex items-center gap-3 text-brand-text text-lg hover:text-brand-brown-dark transition-colors"
                >
                  <svg
                    className="text-brand-brown-light"
                    fill="currentColor"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-name="Layer 1"
                  >
                    <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
                  </svg>
                  <span>@Psifera</span>
                </a>
                <a
                  href="https://www.tiktok.com/@psi.fera?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  aria-label="TikTok"
                  className="flex items-center gap-3 text-brand-text text-lg hover:text-brand-brown-dark transition-colors"
                >
                  <svg
                    className="text-brand-brown-light"
                    fill="currentColor"
                    width="35px"
                    height="35px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.708 0.027c1.745-0.027 3.48-0.011 5.213-0.027 0.105 2.041 0.839 4.12 2.333 5.563 1.491 1.479 3.6 2.156 5.652 2.385v5.369c-1.923-0.063-3.855-0.463-5.6-1.291-0.76-0.344-1.468-0.787-2.161-1.24-0.009 3.896 0.016 7.787-0.025 11.667-0.104 1.864-0.719 3.719-1.803 5.255-1.744 2.557-4.771 4.224-7.88 4.276-1.907 0.109-3.812-0.411-5.437-1.369-2.693-1.588-4.588-4.495-4.864-7.615-0.032-0.667-0.043-1.333-0.016-1.984 0.24-2.537 1.495-4.964 3.443-6.615 2.208-1.923 5.301-2.839 8.197-2.297 0.027 1.975-0.052 3.948-0.052 5.923-1.323-0.428-2.869-0.308-4.025 0.495-0.844 0.547-1.485 1.385-1.819 2.333-0.276 0.676-0.197 1.427-0.181 2.145 0.317 2.188 2.421 4.027 4.667 3.828 1.489-0.016 2.916-0.88 3.692-2.145 0.251-0.443 0.532-0.896 0.547-1.417 0.131-2.385 0.079-4.76 0.095-7.145 0.011-5.375-0.016-10.735 0.025-16.093z" />
                  </svg>
                  <span>@Psifera_</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
