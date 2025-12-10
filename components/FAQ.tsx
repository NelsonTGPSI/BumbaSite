import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from './Reveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Quanto custa criar um site profissional?",
    answer: "O custo varia conforme a complexidade do projeto. Sites institucionais começam a partir de €500, enquanto lojas online têm valores diferentes. Entre em contacto para um orçamento personalizado gratuito."
  },
  {
    question: "Quanto tempo demora a criar um site?",
    answer: "Um site institucional simples fica pronto em 7-10 dias úteis. Projetos mais complexos como lojas online podem levar 15-30 dias. Trabalhamos com prazos claros e cumprimos os acordados."
  },
  {
    question: "O site vai aparecer no Google?",
    answer: "Sim! Todos os nossos sites são otimizados para SEO desde o início. Incluímos configuração básica de SEO, sitemap, meta tags e estrutura otimizada para ajudar o seu site a ser encontrado nas pesquisas."
  },
  {
    question: "Posso atualizar o site sozinho depois?",
    answer: "Absolutamente! Criamos sites fáceis de gerir. Se optar por WordPress ou outra plataforma CMS, poderá fazer atualizações simples (textos, imagens) sem conhecimentos técnicos. Também oferecemos formação básica."
  },
  {
    question: "Incluem alojamento e domínio?",
    answer: "Podemos incluir alojamento e domínio no pacote ou trabalhar com o seu fornecedor preferido. Recomendamos soluções confiáveis e com bom custo-benefício em Portugal."
  },
  {
    question: "Oferecem manutenção e suporte após a entrega?",
    answer: "Sim! Oferecemos planos de manutenção mensal que incluem atualizações de segurança, backups, suporte técnico e pequenas alterações. O suporte inicial está incluído em todos os projetos."
  },
  {
    question: "Trabalham com clientes fora de Coimbra?",
    answer: "Sim! Embora a nossa base seja em Coimbra, trabalhamos com clientes em todo Portugal e países lusófonos. Toda a comunicação pode ser feita online (email, WhatsApp, videochamada)."
  },
  {
    question: "Que tipo de sites criam?",
    answer: "Criamos sites institucionais, lojas online (e-commerce), portfólios, landing pages, blogs, sites para profissionais liberais (advogados, médicos, arquitetos) e qualquer tipo de presença digital que o seu negócio precise."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  // Schema.org FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 scroll-mt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                Perguntas Frequentes
              </h2>
              <div className="h-1.5 w-20 bg-gold-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-slate-600">
                Respostas às dúvidas mais comuns sobre criação de sites
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 50}>
                <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors"
                  >
                    <span className="font-semibold text-primary-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-gold-500 shrink-0 transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">
                Não encontrou a resposta que procurava?
              </p>
              <a
                href="https://wa.me/351926389247"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-600 font-semibold transition-colors"
              >
                Entre em contacto connosco →
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
