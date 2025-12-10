import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const Footer: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/351926389247', '_blank');
  };

  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <span className="text-3xl font-serif font-bold text-gold-500 tracking-tight">
                BumbaSite
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-400">
              Criamos experiências digitais memoráveis que conectam marcas e pessoas. A sua parceira para a inovação digital.
            </p>
            <div className="flex gap-4">
              <button onClick={openWhatsApp} className="hover:text-gold-500 transition-colors flex items-center gap-2 text-sm font-medium">
                <MessageCircle size={20} />
                <span>+351 926 389 247</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Empresa</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfólio</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Sobre Nós</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contactos</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <a href="mailto:nelsonbumbassite@gmail.com" className="hover:text-white transition-colors">nelsonbumbassite@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="https://wa.me/351926389247" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">+351 926 389 247</a>
              </li>
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Vamos Conversar?</h4>
            <p className="text-sm text-slate-400 mb-4">
              Tem um projeto em mente? Fale connosco pelo WhatsApp para um orçamento rápido.
            </p>
            <Button size="sm" className="w-full" onClick={openWhatsApp}>
              Pedir Orçamento
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} BumbaSite. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-slate-300">Política de Privacidade</a>
            <a href="mailto:nelsonbumbassite@gmail.com" className="hover:text-slate-300">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};