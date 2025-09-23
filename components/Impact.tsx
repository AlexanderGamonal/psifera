import React from 'react';

const Impact: React.FC = () => {
    return (
        <section id="impact" className="py-12 md:py-12 px-5 md:px-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 place-items-center">
                    <div className="order-2 lg:order-1">
                        <img 
                            src="./images/ninos.png" 
                            alt="Niños de la comunidad comiendo saludablemente"
                            className="rounded-lg shadow-xl w-full h-full object-cover"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark mb-4">
                            Pensadas para quienes más lo necesitan
                        </h2>
                        <div className="w-24 h-1 bg-brand-accent mb-6 rounded"></div>
                        <p className="text-lg text-brand-text mb-6 leading-relaxed">
                            La anemia es un problema de salud pública en Perú que afecta el futuro de miles de personas. En Psifera, estamos comprometidos a ser parte de la solución.
                        </p>
                        <ul className="space-y-4 text-brand-text">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-brand-brown mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span><strong>Público Objetivo:</strong> Nos enfocamos en niños menores de 5 años, adolescentes y mujeres, los grupos más vulnerables a la anemia.</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-brand-brown mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span><strong>Alcance Comunitario:</strong> Nuestras galletas son ideales para comedores escolares, campañas médicas y programas sociales, llegando a quienes más lo necesitan.</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-brand-brown mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                <span><strong>Alianzas Estratégicas:</strong> Buscamos colaborar con ONGs, gobierno y pequeñas emprendedoras para maximizar nuestro impacto positivo.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Impact;