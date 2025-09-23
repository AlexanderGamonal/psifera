import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard: React.FC<{ imgSrc: string; name: string; role: string; quote: string; }> = ({ imgSrc, name, role, quote }) => (
    <div className="bg-brand-beige backdrop-blur-sm p-8 rounded-2xl shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300">
        <img src={imgSrc} alt={`Foto de ${name}`} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md" />
        <h4 className="font-serif text-xl text-brand-brown-dark font-semibold">{name}</h4>
        <p className="text-brand-accent text-sm mb-4">{role}</p>
        <p className="text-brand-text leading-relaxed mb-5">"{quote}"</p>
        <div className="flex justify-center text-yellow-500">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            imgSrc: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
            name: "Sofía R.",
            role: "Mamá",
            quote: "Mis hijos ahora comen sus galletas sin problema y los veo con más energía. ¡Gracias, Psifera!"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200&auto=format&fit=crop",
            name: "Carlos M.",
            role: "Estudiante",
            quote: "Estaba buscando algo natural para mi anemia y encontré estas galletas. ¡No solo son ricas, sino que me siento mucho mejor!"
        },
        {
            imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
            name: "Andrea L.",
            role: "Profesional",
            quote: "Las galletas de Psifera son la solución perfecta para mis desayunos. ¡Saludables y deliciosas!"
        }
    ];

    return (
        <section id="testimonials" className="py-12 md:py-12 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-brown-dark">
                        Historias de bienestar: La experiencia Psifera
                    </h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto text-brand-text">
                        Galletas Para Combatir la anemia
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;