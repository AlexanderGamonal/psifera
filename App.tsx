import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Gallery from './components/Gallery';
import Impact from './components/Impact';
import Story from './components/Story';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div 
            className="bg-brand-beige font-sans text-brand-text bg-repeat"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23a1887f\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}
        >
            <div className="relative overflow-hidden">
                 {/* Decorative Swirls */}
                <img src="https://storage.googleapis.com/aai-web-template-files/psifera/swirl-top-right.svg" alt="" className="absolute top-0 right-0 w-48 md:w-64 -mt-4 -mr-8 select-none z-10" />
                <img src="https://storage.googleapis.com/aai-web-template-files/psifera/swirl-bottom-left.svg" alt="" className="absolute bottom-0 left-0 w-48 md:w-64 -mb-12 -ml-12 select-none z-10" />

                <Header />
                <main>
                    <Hero />
                    <About />
                    <Products />
                    <Gallery />
                    <Impact />
                    <Story />
                    <Testimonials />
                    <Contact />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default App;