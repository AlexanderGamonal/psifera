import React from "react";

const Story: React.FC = () => {
  return (
    <section id="story" className="py-12 md:py-12 px-5 md:px-20 bg-brand-beige">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 place-items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/images/empaque3.png"
              alt="Ingredientes naturales como harina y avena para las galletas Psifera"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark mb-4">
              El significado detrás de cada bocado
            </h2>
            <div className="w-24 h-1 bg-brand-accent mb-6 rounded"></div>
            <p className="text-lg text-brand-text mb-6 leading-relaxed">
              Nuestro nombre, <strong>Psifera</strong>, encapsula nuestra
              esencia y propósito. Nace de la fusión de tres conceptos poderosos
              que guían nuestra misión de bienestar:
            </p>
            <ul className="space-y-4 text-brand-text">
              <li className="flex items-start">
                <span className="font-serif text-2xl text-brand-brown mr-4">
                  1.
                </span>
                <span>
                  <strong>Psique:</strong> Representa la mente y la fortaleza
                  interior, el poder de superar obstáculos como la anemia a
                  través de la conciencia y la nutrición.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-serif text-2xl text-brand-brown mr-4">
                  2.
                </span>
                <span>
                  <strong>Fe:</strong> Es el símbolo químico del hierro (Fe), el
                  mineral esencial para combatir la anemia. Simboliza nuestra fe
                  en la nutrición como pilar de la salud.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-serif text-2xl text-brand-brown mr-4">
                  3.
                </span>
                <span>
                  <strong>Era:</strong> Marca el inicio de un nuevo tiempo, una
                  era de bienestar y salud accesible para todos, donde cuidarse
                  es un placer.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
