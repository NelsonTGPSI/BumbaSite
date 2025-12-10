import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export const Privacy: React.FC = () => {
  return (
    <div className="antialiased text-slate-900 bg-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8">
            Política de Privacidade
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 mb-6">
              Esta Política de Privacidade explica como a BumbaSite recolhe, utiliza e protege os seus dados pessoais, 
              em conformidade com o Regulamento Geral de Proteção de Dados (RGPD) da União Europeia.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">1. Dados que Recolhemos</h2>
            <ul className="list-disc pl-6 mb-6 text-slate-600">
              <li>Nome</li>
              <li>Email</li>
              <li>Telefone (se fornecido)</li>
              <li>Mensagem submetida através do formulário de contacto</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">2. Finalidade da Recolha</h2>
            <p className="text-slate-600 mb-6">
              Utilizamos os dados exclusivamente para responder ao seu contacto e prestar informações sobre os nossos serviços.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">3. Partilha de Dados</h2>
            <p className="text-slate-600 mb-6">
              Os dados fornecidos não são partilhados com terceiros, exceto quando exigido por lei ou necessário para 
              funcionamento técnico do site.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">4. Armazenamento e Segurança</h2>
            <p className="text-slate-600 mb-6">
              Os seus dados são armazenados de forma segura e apenas pelo tempo necessário para os fins indicados.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">5. Direitos do Titular dos Dados</h2>
            <p className="text-slate-600 mb-4">De acordo com o RGPD, tem o direito de:</p>
            <ul className="list-disc pl-6 mb-6 text-slate-600">
              <li>Aceder aos seus dados pessoais</li>
              <li>Solicitar a retificação ou eliminação dos seus dados</li>
              <li>Retirar o seu consentimento</li>
              <li>Apresentar reclamação à autoridade de controlo (CNPD)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">6. Cookies</h2>
            <p className="text-slate-600 mb-6">
              O site da BumbaSite <strong>não utiliza cookies</strong> nem qualquer tecnologia de rastreamento automático.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-8 mb-4">7. Contacto</h2>
            <p className="text-slate-600 mb-6">
              Para exercer os seus direitos ou esclarecer dúvidas sobre a nossa política de privacidade, 
              entre em contacto através do email: <a href="mailto:nelsonbumbassite@gmail.com" className="text-gold-500 hover:text-gold-600">nelsonbumbassite@gmail.com</a>
            </p>

            <p className="text-sm text-slate-500 mt-8">
              Última atualização: 10 de dezembro de 2025
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
