"use client";

import { useState } from "react";
import { EVENTOS_ANIVERSARIO, EventItem } from "@/lib/eventsData";
import { Clock, LayoutGrid } from "lucide-react";
import { EventModal } from "./EventModal";

export function FullSchedule() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Group events by Category
  const groupedEvents = EVENTOS_ANIVERSARIO.reduce((acc, event) => {
    const key = event.categoria || "Otros";
    if (!acc[key]) acc[key] = [];
    acc[key].push(event);
    return acc;
  }, {} as Record<string, EventItem[]>);

  return (
    <section className="py-20 bg-[#0B0813] relative z-20 border-t border-white/5" id="eventos">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-4 tracking-tight">
            Nuestros Eventos
          </h2>
          <p className="text-zinc-400">Explora todas las actividades agrupadas por categorías.</p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedEvents).map(([category, events]) => (
            <div key={category} className="bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <LayoutGrid className="text-fuchsia-500" size={28} />
                {category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event) => (
                  <div 
                    key={event.id} 
                    onClick={() => setSelectedEvent(event)}
                    className="group cursor-pointer flex flex-col p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-fuchsia-500/50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {event.diaSemana} {event.fecha.split('-').reverse().join('/')}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-fuchsia-300 transition-colors line-clamp-2">
                      {event.titulo}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-2">
                      {event.descripcion}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-2 text-sm text-zinc-300">
                        <Clock size={16} className="text-fuchsia-500" />
                        {event.horaInicio}
                      </div>
                      <span className="text-xs font-semibold px-4 py-2 rounded-full bg-fuchsia-600/20 text-fuchsia-400 group-hover:bg-fuchsia-500 group-hover:text-white transition-all">
                        Ver Detalles
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
