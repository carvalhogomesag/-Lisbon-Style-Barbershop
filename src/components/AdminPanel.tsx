// src/components/AdminPanel.tsx
import { useState } from "react";
import { motion } from "motion/react";
import { X, Plus, Trash2, Save, Code, Image as ImageIcon, RotateCcw, Users, Phone } from "lucide-react";
import { useSalon } from "../context/SalonContext";

export const AdminPanel = ({ onClose }: { onClose: () => void }) => {
  const { salonData, updateSalonData } = useSalon();
  
  // Matrix Ready: Prepara os dados garantindo que as estruturas existam
  const initialForm = JSON.parse(JSON.stringify(salonData));
  if (!initialForm.socialLinks) initialForm.socialLinks = { instagram: "", facebook: "", tiktok: "" };
  if (!initialForm.galleryPhotos) initialForm.galleryPhotos = Array(10).fill("");
  if (!initialForm.team) initialForm.team = [];
  if (!initialForm.phoneNumber) initialForm.phoneNumber = "";
  
  const [formData, setFormData] = useState(initialForm);
  const [activeTab, setActiveTab] = useState<"servicos" | "equipa" | "galeria" | "horarios" | "mapa" | "redes">("servicos");

  const handleSave = () => {
    updateSalonData(formData);
    onClose();
    window.location.reload();
  };

  const handleReset = () => {
    if (confirm(`Deseja apagar as edições locais e restaurar os dados originais de ${salonData.name}?`)) {
      localStorage.removeItem("bless-nails-data"); // Mantemos a chave técnica, mas o texto é dinâmico
      window.location.reload();
    }
  };

  const handleExportCode = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    alert("Código da Matrix copiado! Cole-o no seu arquivo constants.ts substituindo o objeto SALON_DATA.");
  };

  // CRUD Genérico: Serviços
  const addService = () => {
    setFormData({
      ...formData,
      services: [
        ...formData.services, 
        { name: { pt: "", en: "", es: "" }, price: "", duration: "", description: { pt: "", en: "", es: "" } }
      ]
    });
  };

  const removeService = (index: number) => {
    const newServices = [...formData.services];
    newServices.splice(index, 1);
    setFormData({ ...formData, services: newServices });
  };

  // CRUD Genérico: Equipa/Profissionais
  const addTeamMember = () => {
    setFormData({
      ...formData,
      team: [...formData.team, { name: "", role: { pt: "", en: "", es: "" }, image: "" }]
    });
  };

  const removeTeamMember = (index: number) => {
    const newTeam = [...formData.team];
    newTeam.splice(index, 1);
    setFormData({ ...formData, team: newTeam });
  };

  const gallerySlots = Array(10).fill("").map((_, i) => formData.galleryPhotos[i] || "");

  return (
    <div className="fixed inset-0 z-[100] bg-brand-dark/80 backdrop-blur-md flex items-center justify-center p-4 md:p-6">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-brand-cream w-full max-w-5xl h-[90vh] md:h-[85vh] rounded-[2rem] shadow-2xl flex flex-col overflow-hidden border border-white/20">
        
        {/* Header Dinâmico */}
        <div className="bg-white p-6 border-b border-brand-straw/30 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-serif text-brand-dark">Painel de Gestão 🤫</h2>
            <p className="text-[10px] text-brand-leaf font-bold uppercase tracking-[0.2em] mt-1">
              {salonData.name} Admin
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-brand-cream rounded-full transition-colors text-brand-dark/40 hover:text-brand-dark">
            <X size={24} />
          </button>
        </div>

        {/* Navegação de Tabs Matrix */}
        <div className="flex bg-white px-6 gap-6 border-b border-brand-straw/20 overflow-x-auto custom-scrollbar shrink-0">
          {(["servicos", "equipa", "galeria", "horarios", "mapa", "redes"] as const).map(tab => (
            <button 
              key={tab} 
              onClick={() => setActiveTab(tab)} 
              className={`py-4 text-[10px] font-bold uppercase tracking-widest border-b-2 transition-all whitespace-nowrap ${activeTab === tab ? "border-brand-leaf text-brand-leaf" : "border-transparent text-brand-dark/40 hover:text-brand-leaf"}`}
            >
              {tab === "redes" ? "Contactos" : tab === "servicos" ? "Serviços" : tab === "equipa" ? "Equipa" : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Área de Conteúdo */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-brand-cream/50 custom-scrollbar">
          
          {/* TAB: SERVIÇOS */}
          {activeTab === "servicos" && (
            <div className="space-y-6">
              {formData.services.map((service: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-brand-straw/30 shadow-sm relative group">
                  <button onClick={() => removeService(index)} className="absolute top-4 right-4 text-brand-dark/20 hover:text-brand-leaf transition-colors">
                    <Trash2 size={20} />
                  </button>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Nome do Serviço</label>
                      <input type="text" value={service.name.pt} onChange={(e) => { const newS = [...formData.services]; newS[index].name.pt = e.target.value; setFormData({...formData, services: newS}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm focus:border-brand-leaf outline-none" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Preço (€)</label>
                      <input type="text" value={service.price} onChange={(e) => { const newS = [...formData.services]; newS[index].price = e.target.value; setFormData({...formData, services: newS}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm focus:border-brand-leaf outline-none" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Duração</label>
                      <input type="text" value={service.duration} onChange={(e) => { const newS = [...formData.services]; newS[index].duration = e.target.value; setFormData({...formData, services: newS}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm focus:border-brand-leaf outline-none" />
                    </div>
                  </div>
                  <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Descrição Curta</label>
                  <textarea value={service.description.pt} onChange={(e) => { const newS = [...formData.services]; newS[index].description.pt = e.target.value; setFormData({...formData, services: newS}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm focus:border-brand-leaf outline-none" rows={2} />
                </div>
              ))}
              <button onClick={addService} className="w-full py-4 border-2 border-dashed border-brand-straw/40 rounded-2xl flex items-center justify-center gap-2 text-brand-leaf font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">
                <Plus size={18} /> Adicionar Novo Serviço
              </button>
            </div>
          )}

          {/* TAB: EQUIPA */}
          {activeTab === "equipa" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-straw/20">
                <div className="p-3 bg-brand-leaf/10 text-brand-leaf rounded-xl"><Users size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl">Equipa de Especialistas</h3>
                  <p className="text-xs text-brand-dark/50">Gira os profissionais que aparecem no site.</p>
                </div>
              </div>
              {formData.team.map((member: any, index: number) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-brand-straw/30 relative shadow-sm">
                  <button onClick={() => removeTeamMember(index)} className="absolute top-4 right-4 text-brand-dark/20 hover:text-brand-leaf">
                    <Trash2 size={20} />
                  </button>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Nome do Profissional</label>
                      <input type="text" value={member.name} onChange={(e) => { const newT = [...formData.team]; newT[index].name = e.target.value; setFormData({...formData, team: newT}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm outline-none" />
                    </div>
                    <div>
                      <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Cargo / Especialidade</label>
                      <input type="text" value={member.role.pt} onChange={(e) => { const newT = [...formData.team]; newT[index].role.pt = e.target.value; setFormData({...formData, team: newT}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm outline-none" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Link da Foto (ImgBB Direto)</label>
                      <input type="text" value={member.image} onChange={(e) => { const newT = [...formData.team]; newT[index].image = e.target.value; setFormData({...formData, team: newT}) }} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm outline-none" placeholder="https://i.ibb.co/..." />
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={addTeamMember} className="w-full py-4 border-2 border-dashed border-brand-straw/40 rounded-2xl flex items-center justify-center gap-2 text-brand-leaf font-bold uppercase text-[10px] tracking-widest hover:bg-white transition-all">
                <Plus size={18} /> Adicionar Profissional
              </button>
            </div>
          )}

          {/* TAB: GALERIA */}
          {activeTab === "galeria" && (
            <div className="bg-white p-6 rounded-2xl border border-brand-straw/30">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brand-straw/20">
                <div className="p-3 bg-brand-leaf/10 text-brand-leaf rounded-xl"><ImageIcon size={24} /></div>
                <div>
                  <h3 className="font-serif text-xl">Fotos do Portfólio</h3>
                  <p className="text-xs text-brand-dark/50">Links diretos de imagens (jpg, png, webp).</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                {gallerySlots.map((url, i) => (
                  <div key={i}>
                    <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Slot de Foto {i + 1}</label>
                    <input 
                      type="text" 
                      value={url} 
                      onChange={(e) => { 
                        const newPhotos = [...gallerySlots]; 
                        newPhotos[i] = e.target.value; 
                        setFormData({...formData, galleryPhotos: newPhotos}) 
                      }} 
                      className="w-full border border-brand-straw/30 p-3 rounded-xl text-xs outline-none focus:border-brand-leaf bg-brand-cream/20" 
                      placeholder="https://..." 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB: CONTACTOS */}
          {activeTab === "redes" && (
            <div className="bg-white p-6 rounded-2xl border border-brand-straw/30 space-y-8">
              <div>
                <label className="text-[9px] font-bold uppercase text-brand-leaf mb-2 block tracking-widest">Número de Telefone Principal</label>
                <input type="text" value={formData.phoneNumber} onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} className="w-full border border-brand-straw/30 p-4 rounded-xl text-lg font-mono outline-none focus:border-brand-leaf" placeholder="+351 939 559 805" />
              </div>
              <div className="space-y-4 pt-4 border-t border-brand-straw/10">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-brand-dark/40">Presença Digital</h4>
                <div>
                  <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Instagram URL</label>
                  <input type="text" value={formData.socialLinks.instagram} onChange={(e) => setFormData({...formData, socialLinks: {...formData.socialLinks, instagram: e.target.value}})} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm outline-none" />
                </div>
                <div>
                  <label className="text-[9px] font-bold uppercase text-brand-leaf mb-1 block">Facebook URL</label>
                  <input type="text" value={formData.socialLinks.facebook} onChange={(e) => setFormData({...formData, socialLinks: {...formData.socialLinks, facebook: e.target.value}})} className="w-full border border-brand-straw/30 p-3 rounded-xl text-sm outline-none" />
                </div>
              </div>
            </div>
          )}

          {/* TAB: HORÁRIOS */}
          {activeTab === "horarios" && (
            <div className="grid md:grid-cols-2 gap-4">
              {formData.hours.map((h: any, i: number) => (
                <div key={i} className="bg-white p-4 rounded-xl border border-brand-straw/30 flex items-center justify-between shadow-sm">
                  <span className="font-serif text-sm text-brand-dark">{h.day.pt}</span>
                  <input type="text" value={h.time} onChange={(e) => { const newH = [...formData.hours]; newH[i].time = e.target.value; setFormData({...formData, hours: newH}) }} className="border border-brand-straw/20 p-2 rounded-lg text-sm w-40 text-center outline-none focus:border-brand-leaf" />
                </div>
              ))}
            </div>
          )}

          {/* TAB: MAPA */}
          {activeTab === "mapa" && (
            <div className="bg-white p-6 rounded-2xl border border-brand-straw/30">
              <label className="text-[9px] font-bold uppercase text-brand-leaf mb-2 block tracking-widest">Link de Incorporação (iFrame SRC)</label>
              <textarea value={formData.mapEmbedUrl} onChange={(e) => setFormData({...formData, mapEmbedUrl: e.target.value})} className="w-full border border-brand-straw/30 p-4 rounded-xl text-xs font-mono text-brand-dark/70 outline-none focus:border-brand-leaf" rows={6} />
            </div>
          )}

        </div>

        {/* Footer Buttons: Matrix Style */}
        <div className="bg-white p-6 border-t border-brand-straw/30 flex justify-between items-center shrink-0">
          <div className="flex gap-4 md:gap-8">
            <button onClick={handleReset} className="flex items-center gap-2 text-red-500/60 hover:text-red-500 font-bold text-[9px] uppercase tracking-widest transition-all">
              <RotateCcw size={14} /> Restaurar Código
            </button>
            <button onClick={handleExportCode} className="flex items-center gap-2 text-brand-dark/40 hover:text-brand-dark font-bold text-[9px] uppercase tracking-widest transition-all">
              <Code size={14} /> Gerar Código
            </button>
          </div>
          <div className="flex gap-4">
            <button onClick={onClose} className="btn-outline py-2.5 px-6 border-brand-straw/30">Cancelar</button>
            <button onClick={handleSave} className="btn-primary py-2.5 px-8 flex items-center gap-2">
              <Save size={16} /> Guardar Live
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};