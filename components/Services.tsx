import React from 'react';
import { Monitor, ShoppingBag, BarChart3, ShieldCheck } from 'lucide-react';
import { Service } from '../types';
import { Reveal } from './Reveal';

const services: Service[] = [
  {
    id: '1',
    title: 'Sites para Empresas',
    description: 'O seu cartão de visita digital. Criamos sites que apresentam os seus serviços, inspiram confiança e facilitam o contacto de novos clientes.',
    icon: Monitor,
  },
  {
    id: '2',
    title: 'Lojas Online',
    description: 'Comece a vender na internet 24 horas por dia. Criamos a sua loja virtual segura, onde é fácil gerir produtos, encomendas e pagamentos.',
    icon: ShoppingBag,
  },
  {
    id: '3',
    title: 'Aparecer no Google',
    description: 'Não basta ter um site, é preciso ser visto. Ajudamos a sua empresa a aparecer nas pesquisas quando alguém procura pelo que você vende.',
    icon: BarChart3,
  },
  {
    id: '4',
    title: 'Suporte Técnico',
    description: 'Não se preocupe com a tecnologia. Nós tratamos da segurança, das atualizações e garantimos que o seu site está sempre a funcionar corretamente.',
    icon: ShieldCheck,
  },
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white scroll-mt-28">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">Como Podemos Ajudar?</h2>
            <div className="h-1.5 w-20 bg-gold-500 rounded-full mb-6"></div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-slate-600">
              Oferecemos soluções completas para colocar o seu negócio online, sem termos complicados e com foco no crescimento da sua empresa.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 100}>
              <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-gold-200 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300 h-full">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary-900 mb-6 group-hover:bg-primary-900 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};