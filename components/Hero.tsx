import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Reveal } from './Reveal';

export const Hero: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/351926389247', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden scroll-mt-28">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-slate-100 to-transparent opacity-60" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gold-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <div className="inline-block px-4 py-2 mb-6 bg-slate-100 rounded-full border border-slate-200">
              <span className="text-sm font-semibold text-primary-900 tracking-wide uppercase">
                Agência de Desenvolvimento Web
              </span>
            </div>
          </Reveal>
          
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary-900 leading-tight mb-6">
              O Seu Negócio Precisa de um <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-900 to-gold-500">Site Profissional.</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              Ajudamos a sua empresa a crescer na internet. Criamos sites modernos, lojas online e soluções simples para que os seus clientes o encontrem facilmente e comprem os seus serviços.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => document.getElementById('services')?.scrollIntoView()}>
                Ver Nossos Serviços
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                onClick={openWhatsApp}
              >
                Pedir Orçamento Grátis
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};