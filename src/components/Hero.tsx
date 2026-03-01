// src/components/Hero.tsx
import { motion } from "motion/react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Hero = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-brand-cream">
      {/* Background Industrial Otimizado */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="MORN Barbearia Interior" 
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          loading="eager"
        />
        {/* Overlay de gradiente para garantir leitura e profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/80 via-brand-cream/20 to-brand-cream"></div>
      </div>

      {/* Conteúdo Central: Foco em Benfica */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 md:pt-32">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Tag de Localização em Prata/Cromo */}
          <span className="text-brand-straw uppercase tracking-[0.5em] text-[10px] md:text-xs font-black mb-6 block border-b border-brand-straw/30 pb-2 w-fit mx-auto">
            Benfica, Lisboa
          </span>
          
          {/* Título de Impacto: Serifado e Robusto */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[1] md:leading-[0.85] text-brand-dark tracking-tighter">
            {lang === "pt" ? (
              <>Corte, Barba <br />& <span className="text-brand-leaf">Tradição.</span></>
            ) : lang === "en" ? (
              <>Cut, Beard <br />& <span className="text-brand-leaf">Tradition.</span></>
            ) : (
              <>Corte, Barba <br />& <span className="text-brand-leaf">Tradición.</span></>
            )}
          </h1>

          <p className="text-base md:text-2xl text-brand-dark/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4 md:px-0 border-l-2 md:border-l-0 border-brand-leaf md:border-none">
            {salonData.tagline[lang]}
          </p>

          {/* Botões: Estilo Matrix Ready (Rígidos e Masculinos) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href={salonData.bookingUrl} target="_blank" rel="noreferrer" className="btn-primary w-full sm:w-64">
              {t.bookTreatment}
            </a>
            <a href="#servicos" className="btn-outline w-full sm:w-64">
              {t.viewServices}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Detalhe Decorativo: Barra Vertical MORN */}
      <div className="absolute left-8 bottom-0 w-px h-32 bg-brand-straw/30 hidden lg:block"></div>
      <div className="absolute right-8 bottom-0 w-px h-32 bg-brand-straw/30 hidden lg:block"></div>
    </section>
  );
};