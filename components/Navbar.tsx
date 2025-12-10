import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './Button';

const navItems: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Serviços', href: '#services' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Porquê Nós', href: '#why-us' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = () => {
    window.open('https://wa.me/351926389247', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-3xl font-serif font-bold text-gold-500 tracking-tight hover:text-gold-600 transition-colors">
              BumbaSite
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-slate-600 hover:text-gold-600 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button size="sm" onClick={openWhatsApp}>
              Contactar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4 animate-fade-in-down">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-slate-600 hover:text-gold-500 font-medium py-2 px-4 rounded-lg hover:bg-slate-50"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <Button className="w-full mt-2" onClick={openWhatsApp}>
            Contactar Agora
          </Button>
        </div>
      )}
    </nav>
  );
};