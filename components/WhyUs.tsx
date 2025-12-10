import React from 'react';
import { Users, Layers, Rocket } from 'lucide-react';
import { Reveal } from './Reveal';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-primary-900 text-white overflow-hidden relative scroll-mt-28">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-primary-800 rounded-full mix-blend-screen opacity-20 blur-3xl -z-0 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal width="100%">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Porquê Escolher a BumbaSite?</h2>
            <p className="text-slate-300 text-lg">
              Somos parceiros do seu negócio. Simplificamos a tecnologia para que você possa focar no que faz melhor: gerir a sua empresa.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Reveal delay={100}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Sem Complicações</h3>
              <p className="text-slate-300 leading-relaxed">
                Falamos a sua língua, sem termos técnicos difíceis. Explicamos tudo passo a passo para que saiba exatamente o que estamos a construir.
              </p>
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal delay={200}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white mb-6">
                <Layers size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Processo Transparente</h3>
              <p className="text-slate-300 leading-relaxed">
                Você acompanha o desenvolvimento do início ao fim. Nada é publicado sem a sua aprovação, garantindo que o resultado final é exatamente o que deseja.
              </p>
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal delay={300}>
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300">
              <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center text-white mb-6">
                <Rocket size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Estamos Sempre Aqui</h3>
              <p className="text-slate-300 leading-relaxed">
                O nosso trabalho não acaba no lançamento do site. Continuamos disponíveis para ajudar com dúvidas, alterações e melhorias no futuro.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};