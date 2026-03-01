// src/components/About.tsx
import { motion } from "motion/react";
import { UI_STRINGS, Language } from "../constants";
import { useSalon } from "../context/SalonContext";

export const About = ({ lang }: { lang: Language }) => {
  const t = UI_STRINGS[lang];
  const { salonData } = useSalon();

  return (
    /* Fundo Vermelho MORN e Texto Creme/Branco Perolado */
    <section id="sobre" className="section-padding bg-brand-leaf text-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* LADO DA IMAGEM: Estética Industrial/Geométrica */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative px-4 md:px-0"
        >
          {/* Moldura Rígida e Imagem com Zoom Sutil */}
          <div className="aspect-[4/5] rounded-none overflow-hidden shadow-[20px_20px_0px_0px_rgba(10,10,10,0.3)] relative border-4 border-white/10">
            <div className="absolute inset-0 bg-brand-dark/10 mix-blend-multiply z-10"></div>
            <img 
              src="/sobre-principal.png" 
              alt="MORN Barbearia Interior" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" 
              loading="lazy"
            />
          </div>
          
          {/* Detalhe Flutuante: Retangular e com borda em Prata/Cromo */}
          <div className="absolute -bottom-6 -right-6 w-48 h-64 rounded-none overflow-hidden border-[8px] border-brand-dark shadow-2xl hidden lg:block z-20">
            <img src="/sobre-detalhe.png" alt="Barbeiro em Ação" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </motion.div>

        {/* LADO DO TEXTO: Tipografia Editorial de Luxo */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Subtítulo em Prata (Straw) */}
          <span className="text-brand-straw uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-6 block">
            {t.ourEssence}
          </span>
          
          <h2 className="text-5xl md:text-7xl mb-8 leading-[1.1] text-white font-serif font-bold">
            {t.luxuryMeetsRelaxation}
          </h2>
          
          <p className="text-lg md:text-xl text-brand-cream/80 leading-relaxed mb-12 font-light">
            {salonData.description[lang]}
          </p>
          
          {/* GRELHA DE ATRIBUTOS: Visual de "Clube Privado" */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-2 border-t border-brand-cream/20 pt-8">
            {salonData.features[lang].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex items-center gap-4 py-4 border-b border-brand-cream/10 group"
              >
                {/* Marcador Quadrado (Industrial) em Prata */}
                <div className="w-2 h-2 bg-brand-straw rotate-45 group-hover:rotate-180 group-hover:bg-white transition-all duration-700"></div>
                
                <span className="text-lg md:text-xl font-serif font-medium tracking-wide text-brand-cream/90 group-hover:text-white transition-colors duration-500">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};