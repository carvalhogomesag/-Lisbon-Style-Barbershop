// src/components/Navbar.tsx
import { motion, AnimatePresence } from "motion/react";
import { Globe, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
}

export const Navbar = ({ lang, setLang }: NavbarProps) => {
  const { salonData } = useSalon();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const t = UI_STRINGS[lang];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: "#sobre" },
    { name: t.services, href: "#servicos" },
    { name: t.gallery, href: "#galeria" },
  ];

  if (salonData.team && salonData.team.length > 0) {
    navLinks.push({ name: t.team, href: "#equipa" });
  }

  navLinks.push(
    { name: t.reviews, href: "#avaliacoes" },
    { name: t.location, href: "#contato" }
  );

  const languages: { code: Language; label: string }[] = [
    { code: "pt", label: "Português" },
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass py-4" : "bg-transparent py-8"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGÓTIPO MORN: Estilo Industrial */}
        <a href="#" className="text-2xl font-serif font-bold tracking-tighter text-brand-dark uppercase">
          MORN <span className="text-brand-leaf font-light italic lowercase tracking-normal ml-1">Barbearia</span>
        </a>

        {/* --- MENU DESKTOP --- */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] uppercase tracking-[0.25em] font-bold text-brand-dark/80 hover:text-brand-leaf transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} 
              className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-brand-leaf transition-colors"
            >
              <Globe size={14} /> {lang}
            </button>
            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: 10 }} 
                  className="absolute right-0 mt-4 w-32 bg-white shadow-2xl rounded-none overflow-hidden border border-zinc-200 p-1"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code} 
                      onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }} 
                      className={`w-full text-left px-4 py-2 text-[11px] font-bold uppercase tracking-wider transition-colors ${lang === l.code ? "text-brand-leaf bg-zinc-50" : "text-brand-dark/70 hover:bg-zinc-100"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href={salonData.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary">
            {t.bookNow}
          </a>
        </div>

        {/* --- CABEÇALHO MOBILE --- */}
        <div className="flex items-center gap-3 lg:hidden">
          
          {/* SELETOR DE IDIOMAS MOBILE: Pílula Industrial */}
          <div className="relative">
            <button 
              onClick={() => {
                setIsLangMenuOpen(!isLangMenuOpen);
                if (isMobileMenuOpen) setIsMobileMenuOpen(false);
              }} 
              className="flex items-center gap-1 px-3 py-2 bg-brand-dark text-white border border-brand-dark rounded-none text-[9px] font-black uppercase tracking-widest transition-all active:scale-95 shadow-lg"
            >
              <Globe size={12} className="text-brand-straw" />
              {lang}
              <ChevronDown size={10} className={`transition-transform duration-300 text-brand-straw ${isLangMenuOpen ? "rotate-180" : ""}`} />
            </button>

            <AnimatePresence>
              {isLangMenuOpen && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 5 }} 
                  animate={{ opacity: 1, scale: 1, y: 0 }} 
                  exit={{ opacity: 0, scale: 0.9, y: 5 }} 
                  className="absolute right-0 mt-3 w-32 bg-brand-dark shadow-2xl rounded-none border border-brand-straw/20 p-1 z-[60]"
                >
                  {languages.map((l) => (
                    <button 
                      key={l.code} 
                      onClick={() => { setLang(l.code); setIsLangMenuOpen(false); }} 
                      className={`w-full text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors ${lang === l.code ? "text-white bg-brand-leaf" : "text-brand-straw hover:text-white"}`}
                    >
                      {l.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* BOTÃO HAMBÚRGUER: Sharp style */}
          <button 
            className="w-10 h-10 flex items-center justify-center text-brand-dark active:scale-90 transition-transform" 
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
              if (isLangMenuOpen) setIsLangMenuOpen(false);
            }}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENU MOBILE EXPANDIDO --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -20 }} 
            className="absolute top-full left-0 right-0 bg-brand-cream shadow-2xl border-t border-zinc-200 p-8 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif font-bold text-brand-dark border-b border-zinc-200 pb-2 uppercase tracking-tight"
              >
                {link.name}
              </a>
            ))}
            <a href={salonData.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary text-center py-5">
              {t.bookNow}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};