import React from 'react';
import { Project } from '../types';
import { Reveal } from './Reveal';

const projects: Project[] = [
  {
    id: '1',
    title: "Moamba d'Angola",
    category: 'Restauração / Website',
    imageUrl: '/moambadeangola.png',
  },
  {
    id: '2',
    title: 'Moda Elegante',
    category: 'E-commerce / Moda',
    imageUrl: '/flexstore.png',
  },
  {
    id: '3',
    title: 'Moon PC',
    category: 'Loja Online / Tecnologia',
    imageUrl: '/moonpc.png',
  },
  {
    id: '4',
    title: 'Clínica Saúde & Bem-estar',
    category: 'Saúde / Institucional',
    imageUrl: '/coimbra.png',
  },
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Projetos em Destaque</h2>
              <div className="h-1.5 w-20 bg-gold-500 rounded-full mb-6"></div>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg text-slate-600">
                Explore alguns dos nossos trabalhos recentes. Cada projeto é uma combinação única de estética, funcionalidade e objetivos de negócio.
              </p>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <a href="https://wa.me/351926389247" target="_blank" rel="noopener noreferrer" className="text-primary-900 font-semibold hover:text-gold-500 transition-colors inline-flex items-center gap-2">
              Ver todos os projetos <span>&rarr;</span>
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 150}>
              <div className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                {/* Image Container */}
                <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-gold-400 font-medium text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-serif">
                    {project.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};