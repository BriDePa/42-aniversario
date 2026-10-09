"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Clock, MapPin, CalendarPlus, MessageCircle, Users, FileText } from "lucide-react";
import { buildWhatsAppUrl, buildGoogleCalendarUrl, EventItem } from "@/lib/eventsData";

function EventCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number, minutes: number, seconds: number} | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeLeft) return null;

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10 text-zinc-400 font-mono text-sm">Evento finalizado / En vivo</div>;
  }

  return (
    <div className="flex justify-center gap-2 sm:gap-4 my-6">
      {[
        { label: 'D', value: timeLeft.days },
        { label: 'H', value: timeLeft.hours },
        { label: 'M', value: timeLeft.minutes },
        { label: 'S', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-black/50 border border-fuchsia-500/30 rounded-lg w-12 h-12 flex items-center justify-center shadow-lg">
            <span className="text-lg font-mono font-bold text-fuchsia-400">
              {item.value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="mt-1 text-[10px] font-medium text-zinc-500">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export function EventModal({ event, onClose }: { event: EventItem, onClose: () => void }) {
  // Fix for hydration and React Portal
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(onClose, 300); // Wait for animation
  };

  const whatsappUrl = event.whatsappMensajeSugerido 
    ? buildWhatsAppUrl(
        event.telefonoReferencia || event.encargados?.[0]?.telefono || "60519730", 
        event.whatsappMensajeSugerido
      ) 
    : null;
  
  const gcalUrl = buildGoogleCalendarUrl(event);
  
  // Construct a valid ISO date for countdown (fallback to 09:00 if no hour)
  const targetDateStr = `${event.fecha}T${event.horaInicio ? event.horaInicio : '09:00'}:00-04:00`; // Added Bolivia timezone

  if (!mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        onClick={handleClose}
      />
      
      <div className={`relative w-full max-w-lg max-h-[90vh] flex flex-col bg-[#120E24] border border-white/10 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 transform ${isClosing ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        
        {/* Scrollable Container */}
        <div className="overflow-y-auto flex-1 custom-scrollbar">
          {/* Header / Banner */}
          <div className="h-32 bg-gradient-to-br from-purple-600 via-fuchsia-500 to-orange-500 relative shrink-0">
            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="absolute -bottom-6 left-6 px-4 py-2 bg-black border border-white/10 rounded-xl font-mono text-sm font-bold text-fuchsia-400 shadow-lg">
              {event.diaSemana}, {event.fecha.split('-').reverse().join('/')}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 pt-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-zinc-400">
                {event.categoria}
              </span>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 leading-tight">{event.titulo}</h2>
            
            
            {(() => {
              const galleryImages = [];
              if (event.imagenUrl) galleryImages.push({ url: event.imagenUrl, title: "Imagen Principal" });
              if (event.banner_url && event.banner_url !== event.imagenUrl) galleryImages.push({ url: event.banner_url, title: "Banner" });
              if ((event as any).rawAvisos && Array.isArray((event as any).rawAvisos)) {
                (event as any).rawAvisos.forEach((aviso: any) => {
                  if (aviso.url_archivo) galleryImages.push({ url: aviso.url_archivo, title: aviso.titulo || "Aviso" });
                });
              }

              if (galleryImages.length === 0) return null;
              
              if (galleryImages.length === 1) {
                return (
                  <div className="mb-6 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <img src={galleryImages[0].url} alt={galleryImages[0].title} className="w-full h-auto object-cover" />
                  </div>
                );
              }

              return (
                <div className="mb-6 relative group">
                  <h3 className="text-fuchsia-400 font-semibold mb-3 text-sm uppercase tracking-wider">Galería de Imágenes & QRs</h3>
                  <div 
                    id="modal-gallery"
                    className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-2"
                    style={{ scrollbarWidth: 'none' }}
                  >
                    {galleryImages.map((img, idx) => (
                      <div key={idx} className="min-w-[100%] shrink-0 snap-center rounded-xl overflow-hidden border border-white/10 shadow-lg relative bg-black/40">
                        <img src={img.url} alt={img.title} className="w-full h-auto object-contain max-h-[60vh] mx-auto" />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md p-3 text-center text-sm font-semibold text-white">
                          {img.title}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Custom Navigation Buttons */}
                  <button 
                    onClick={() => {
                      const el = document.getElementById('modal-gallery');
                      if (el) el.scrollBy({ left: -el.clientWidth, behavior: 'smooth' });
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  </button>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('modal-gallery');
                      if (el) el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </button>
                  <div className="flex justify-center mt-3 gap-1">
                    {galleryImages.map((_, idx) => (
                      <div key={idx} className="w-2 h-2 rounded-full bg-white/20"></div>
                    ))}
                  </div>
                </div>
              );
            })()}

            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {(event as any).convocatoria_descripcion || event.descripcion}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 text-zinc-300 bg-white/5 p-3 rounded-xl border border-white/5">
                <Clock className="text-fuchsia-400 shrink-0" size={18} />
                <div className="text-xs">
                  <span className="block text-zinc-500 mb-0.5">Horario</span>
                  <span className="font-semibold">{event.horaInicio} {event.horaFin ? `- ${event.horaFin.includes('T') ? event.horaFin.split('T')[1].substring(0,5) : event.horaFin}` : ''}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-zinc-300 bg-white/5 p-3 rounded-xl border border-white/5">
                <MapPin className="text-fuchsia-400 shrink-0" size={18} />
                <div className="text-xs">
                  <span className="block text-zinc-500 mb-0.5">Ubicación</span>
                  {event.ubicacion_url ? (
                    <a href={event.ubicacion_url} target="_blank" rel="noreferrer" className="font-semibold line-clamp-1 hover:text-fuchsia-400 transition-colors underline decoration-fuchsia-500/30 underline-offset-2" title={event.ubicacion}>
                      {event.ubicacion}
                    </a>
                  ) : (
                    <span className="font-semibold line-clamp-1" title={event.ubicacion}>{event.ubicacion}</span>
                  )}
                </div>
              </div>
            </div>

            {event.encargados && event.encargados.length > 0 && (
              <div className="mb-6 p-4 rounded-xl border border-white/5 bg-black/30">
                <h4 className="text-xs text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                  <Users size={14} /> Organizadores
                </h4>
                <div className="space-y-2">
                  {event.encargados.map((enc: any, idx: number) => (
                    <div key={idx} className="flex justify-between items-center text-sm">
                      <span className="text-zinc-300">{enc.nombre}</span>
                      <span className="text-zinc-500 text-xs">{enc.rol}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <EventCountdown targetDate={targetDateStr} />

            {event.esConvocatoria ? (
              <div className="flex flex-col gap-3 mt-8">
                {event.basesUrl && (
                  <a href={event.basesUrl} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-fuchsia-500 bg-fuchsia-500/10 text-fuchsia-400 font-bold hover:bg-fuchsia-500 hover:text-white transition-all shadow-[0_0_15px_rgba(236,72,153,0.2)]">
                    <FileText size={18} />
                    <span>Bases de Convocatoria</span>
                  </a>
                )}
                {event.formulario_url && (
                  <a href={event.formulario_url} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-orange-500 to-fuchsia-500 text-white font-bold hover:opacity-90 transition-all shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                    <FileText size={18} />
                    <span>Formulario de Inscripción</span>
                  </a>
                )}
                {event.whatsapp_grupo_url && (
                  <a href={event.whatsapp_grupo_url} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#20bd5a] transition-all shadow-[0_0_15px_rgba(37,211,102,0.3)]">
                    <MessageCircle size={18} />
                    <span>Grupo de WhatsApp</span>
                  </a>
                )}
              </div>
            ) : (
              <>
                {event.basesUrl && (
                  <a href={event.basesUrl} target="_blank" rel="noreferrer" className="block w-full text-center mt-4 py-3 px-4 rounded-xl border border-fuchsia-500 text-fuchsia-400 font-bold hover:bg-fuchsia-500 hover:text-white transition-colors shadow-[0_0_15px_rgba(236,72,153,0.2)] flex items-center justify-center gap-2">
                    <FileText size={18} />
                    <span>Ver Convocatoria Oficial</span>
                  </a>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  {whatsappUrl && (
                    <a 
                      href={whatsappUrl} 
                      target="_blank" rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)] shrink-0"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>
                  )}
                  
                  <a 
                    href={gcalUrl} 
                    target="_blank" rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-4 rounded-xl transition-colors border border-white/10 shrink-0"
                  >
                    <CalendarPlus size={18} />
                    Agendar Evento
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
