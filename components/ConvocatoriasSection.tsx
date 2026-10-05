"use client";

import { useState } from "react";
import { EventItem } from "@/lib/eventsData";
import { EventModal } from "./EventModal";
import FlipCard from "./FlipCard";

export function ConvocatoriasSection({ events = [] }: { events?: EventItem[] }) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Filter convocatorias: esConvocatoria === true OR rawAvisos has files
  const convocatorias = events.filter((event) => {
    // Check expiration if it has one
    if (event.fecha_expiracion) {
      const expirationDate = new Date(event.fecha_expiracion);
      if (new Date() > expirationDate) {
        return false;
      }
    }

    if (event.esConvocatoria) return true;
    
    // Check if avisos exist and have files
    const avisos = (event as any).rawAvisos;
    if (avisos && Array.isArray(avisos)) {
      return avisos.some((aviso: any) => aviso.url_archivo);
    }
    return false;
  }).sort((a, b) => {
    if (!a.fecha_expiracion && !b.fecha_expiracion) return 0;
    if (!a.fecha_expiracion) return 1;
    if (!b.fecha_expiracion) return -1;
    return new Date(a.fecha_expiracion).getTime() - new Date(b.fecha_expiracion).getTime();
  });

  if (convocatorias.length === 0) return null;



  return (
    <section className="py-20 bg-[#0B0813] relative z-20 border-t border-white/5" id="convocatorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 flex flex-col items-center">
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Descubre todas las convocatorias activas, gira las tarjetas y haz clic para ver las bases e inscribirte.
          </p>
        </div>

        <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
          {convocatorias.map((ev) => (
            <div key={ev.id} className="relative group">
              <FlipCard
                width={320}
                height={420}
                front={
                  <div className="w-full h-full relative overflow-hidden">
                    <img 
                      src={ev.banner_url || ev.imagenUrl || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop"} 
                      alt={ev.titulo} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0813] via-[#0B0813]/40 to-transparent flex flex-col justify-end p-6">
                      <span className="text-xs font-bold text-fuchsia-400 mb-2 uppercase tracking-widest">{ev.categoria || "Convocatoria"}</span>
                      <h3 className="text-2xl font-bold text-white leading-tight">{ev.titulo}</h3>
                    </div>
                  </div>
                }
                back={
                  <div className="w-full h-full bg-gradient-to-br from-[#1A1528] to-[#0B0813] p-8 flex flex-col items-center justify-center text-center border border-fuchsia-500/20 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-purple-500"></div>
                    <h3 className="text-xl font-bold text-white mb-4 leading-snug">{ev.titulo}</h3>
                    <p className="text-sm text-zinc-400 mb-8 line-clamp-5 leading-relaxed">
                      {ev.convocatoria_descripcion || ev.descripcion}
                    </p>
                    <button 
                      onPointerDown={(e) => e.stopPropagation()}
                      onPointerUp={(e) => e.stopPropagation()}
                      onClick={(e) => { e.stopPropagation(); setSelectedEvent(ev); }}
                      className="mt-auto px-8 py-3 bg-fuchsia-500 hover:bg-fuchsia-400 text-white rounded-xl font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all flex items-center gap-2"
                    >
                      Detalles
                    </button>
                  </div>
                }
                axis="y"
                shadow={true}
                shadowOpacity={0.2}
                glare={true}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} allConvocatorias={convocatorias} />
      )}
    </section>
  );
}
