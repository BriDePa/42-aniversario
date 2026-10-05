"use client";

import { useState } from "react";
import { EventItem } from "@/lib/eventsData";
import { EventModal } from "./EventModal";
import FlexCarousel from "./FlexCarousel";
import BorderGlow from "./BorderGlow";
import TextLoop from "./TextLoop";

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
  });

  if (convocatorias.length === 0) return null;

  const carouselItems = convocatorias.map(ev => ({
    src: ev.banner_url || ev.imagenUrl || "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=", // 1x1 white pixel as fallback
    title: ev.titulo,
    subtitle: ev.categoria || "Convocatoria",
  }));

  return (
    <section className="py-20 bg-[#0B0813] relative z-20 border-t border-white/5" id="convocatorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-4 tracking-tight flex items-center justify-center gap-4">
            <TextLoop
               text="CONCURSOS ✦ TORNEOS ✦ CONVOCATORIAS"
               separator="✦"
               shape="line"
               fontSize={32}
            />
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Gira el carrusel para descubrir todas las convocatorias activas y haz clic para ver las bases e inscribirte.
          </p>
        </div>

        {/* React Bits FlexCarousel wrapped in BorderGlow */}
        <div className="mx-auto max-w-5xl h-[500px]">
          <BorderGlow 
            colors={["#a855f7", "#ec4899", "#38bdf8"]} 
            className="w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="w-full h-full bg-[#111]">
              <FlexCarousel 
                 items={carouselItems}
                 preset="vortex"
                 intro="bloom"
                 captions={true}
                 autoplay={true}
                 onSelect={(index) => setSelectedEvent(convocatorias[index])}
              />
            </div>
          </BorderGlow>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
