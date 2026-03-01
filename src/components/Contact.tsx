// src/components/Contact.tsx
import { motion } from "motion/react";
import { MapPin, Clock, ChevronRight } from "lucide-react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const Contact = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    /* Fundo Branco Puro (brand-cream) para um aspeto Neo-Clássico limpo */
    <section id="contato" className="section-padding bg-brand-cream overflow-hidden relative">
      {/* Detalhe Decorativo: Linha de precisão Lisbon'Style */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-leaf/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* INFORMAÇÕES DE CONTACTO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-leaf uppercase tracking-[0.4em] text-[10px] md:text-xs font-black mb-4 block">
            {t.visitUs}
          </span>
          <h2 className="text-5xl md:text-7xl mb-12 font-serif font-bold uppercase tracking-tighter text-brand-dark leading-[0.9]">
            {t.location}
          </h2>
          
          <div className="space-y-12">
            {/* Bloco: Morada Neo-Clássica */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-brand-dark rounded-none flex items-center justify-center shadow-lg shrink-0 border border-brand-straw/20 rotate-45 group-hover:rotate-0 transition-all duration-500">
                <MapPin className="text-brand-leaf -rotate-45 group-hover:rotate-0 transition-all duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xl mb-2 font-serif font-bold uppercase tracking-tight">{t.location}</h4>
                <p className="text-base md:text-lg text-brand-dark/60 mb-3 font-light leading-relaxed italic">
                  {salonData.address}
                </p>
                <a 
                  href={salonData.googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-brand-leaf font-black flex items-center gap-1 hover:gap-3 transition-all duration-300 uppercase tracking-[0.2em] text-[10px] border-b border-brand-leaf/20 pb-1"
                >
                  {t.seeOnGoogleMaps} <ChevronRight size={14} />
                </a>
              </div>
            </div>

            {/* Bloco: Horários */}
            <div className="flex gap-6 group">
              <div className="w-14 h-14 bg-brand-dark rounded-none flex items-center justify-center shadow-lg shrink-0 border border-brand-straw/20 rotate-45 group-hover:rotate-0 transition-all duration-500">
                <Clock className="text-brand-leaf -rotate-45 group-hover:rotate-0 transition-all duration-500" size={24} strokeWidth={1.5} />
              </div>
              <div className="w-full">
                <h4 className="text-xl mb-4 font-serif font-bold uppercase tracking-tight">{t.openingHours}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-3">
                  {salonData.hours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-zinc-100 pb-2 group/line">
                      <span className="text-sm text-brand-dark/50 font-medium uppercase tracking-wider group-hover/line:text-brand-leaf transition-colors">{h.day[lang]}</span>
                      <span className="text-sm font-bold text-brand-dark">
                        {h.time === "Fechado" ? t.closed : h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* MAPA INTERATIVO: Estética Sharp com Sombra Azul Royal */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1 }}
          /* 
             MOLDURA LISBON'STYLE:
             - rounded-none (Cantos Vivos)
             - shadow offset em Azul Royal
             - Filtro frio e contrastado
          */
          className="relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(37,99,235,1)] h-[400px] md:h-[550px] rounded-none border-[12px] border-white z-10"
        >
          {/* Overlay técnico para mobile */}
          <div className="absolute inset-0 pointer-events-none bg-brand-leaf/5 z-10 md:hidden"></div>
          
          <iframe 
            src={salonData.mapEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="filter contrast-125 saturate-[0.6] brightness-90 hue-rotate-[10deg]" 
          ></iframe>
        </motion.div>
      </div>

      {/* Marca d'água monumental de fundo */}
      <div className="absolute bottom-8 left-8 text-[100px] font-serif font-black text-brand-dark/[0.03] pointer-events-none select-none hidden lg:block uppercase tracking-tighter">
        Lisbon'Style
      </div>
    </section>
  );
};