import React from "react";

const AboutCard: React.FC<{
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}> = ({ title, children, icon }) => (
  <div className="bg-white/50 rounded-lg p-6 shadow-sm text-center transform hover:-translate-y-1 transition-transform duration-300">
    <div className="inline-block p-4 bg-brand-brown-light rounded-full mb-4 text-white">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-brand-brown-dark mb-3">{title}</h3>
    <p className="text-brand-text leading-relaxed">{children}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-10 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark">
            Más que galletas, un compromiso con tu salud
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mt-4 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <AboutCard
            title="Nuestra Misión"
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          >
            Ofrecer variedad de postres funcionales y deliciosos que ayuden a la
            prevención y el combate hacía la anemia, brindando una alternativa
            que sea accesible, placentera, y sobre todo, nutritiva.
          </AboutCard>
          <AboutCard
            title="Nuestra Visión"
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            }
          >
            Convertirnos en una marca reconocida a un nivel internacional por
            lograr transformar el modo en que la gente cuida su salud, logrando
            que la nutrición preventiva sea parte del día a día a través de
            productos innovadores y sabrosos
          </AboutCard>
        </div>
      </div>
    </section>
  );
};

export default About;
