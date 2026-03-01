// src/components/FloatingContact.tsx
import { motion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import { useSalon } from "../context/SalonContext";

export const FloatingContact = () => {
  const { salonData } = useSalon();

  // Limpeza do número para os links funcionais (Vem da "Verdade Absoluta")
  const cleanPhone = salonData.phoneNumber?.replace(/\s/g, "") || "";
  const waNumber = cleanPhone.replace("+", "");

  return (
    <div className="fixed bottom-10 right-10 z-40 hidden md:flex flex-col gap-6">
      
      {/* BOTÃO: CHAMADA TELEFÓNICA (Estética Neo-Clássica) */}
      <motion.a
        href={`tel:${cleanPhone}`}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.05, x: -5 }}
        /* 
           DESIGN LISBON'STYLE:
           - Borda preta grossa
           - Sombra sólida em AZUL ROYAL
        */
        className="w-14 h-14 bg-white text-brand-dark border-2 border-brand-dark flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(37,99,235,1)] hover:shadow-none hover:bg-brand-leaf hover:text-white transition-all duration-300 group rounded-none"
        title={`Ligar para ${salonData.name}`}
      >
        <Phone size={22} strokeWidth={2.5} className="group-hover:rotate-12 transition-transform duration-300" />
      </motion.a>

      {/* BOTÃO: WHATSAPP (Sombra Industrial Black) */}
      <motion.a
        href={`https://wa.me/${waNumber}?text=Olá! Gostaria de obter informações sobre os serviços da Lisbon'Style Barbershop Alvalade.`}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05, x: -5 }}
        /* Sombra sólida preta para destacar o verde do WhatsApp no fundo claro */
        className="w-14 h-14 bg-[#25D366] text-white flex items-center justify-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.8)] hover:shadow-none transition-all duration-300 group rounded-none"
        title="Enviar WhatsApp"
      >
        <MessageCircle size={26} fill="currentColor" className="transition-transform duration-300 group-hover:-rotate-12" />
      </motion.a>
    </div>
  );
};