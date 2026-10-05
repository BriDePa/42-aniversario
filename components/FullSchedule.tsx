"use client";

import { useState, useMemo } from "react";
import { EventItem } from "@/lib/eventsData";
import { Clock, LayoutGrid, Calendar } from "lucide-react";
import { EventModal } from "./EventModal";
import OptionWheel from "./OptionWheel";

export function FullSchedule({ events = [] }: { events?: EventItem[] }) {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [selectedDay, setSelectedDay] = useState<string>("Todos");

  const categories = useMemo(() => {
    const cats = new Set(events.map(e => e.categoria || "Otros"));
    return ["Todas", ...Array.from(cats)];
  }, [events]);

  const days = useMemo(() => {
    const datesMap = new Map<string, string>();
    events.forEach(e => {
      if (e.fecha && e.diaSemana) {
        const parts = e.fecha.split('-'); // [YYYY, MM, DD]
        if (parts.length === 3) {
          const formatted = `${e.diaSemana} ${parts[2]}/${parts[1]}`;
          datesMap.set(e.fecha, formatted);
        }
      }
    });
    const sortedDates = Array.from(datesMap.keys()).sort((a, b) => a.localeCompare(b));
    return ["Todos", ...sortedDates.map(date => datesMap.get(date)!)];
  }, [events]);

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      const matchCat = selectedCategory === "Todas" || (e.categoria || "Otros") === selectedCategory;
      
      let matchDay = selectedDay === "Todos";
      if (selectedDay !== "Todos" && e.fecha && e.diaSemana) {
        const parts = e.fecha.split('-');
        if (parts.length === 3) {
          const formatted = `${e.diaSemana} ${parts[2]}/${parts[1]}`;
          matchDay = formatted === selectedDay;
        }
      }
      
      return matchCat && matchDay;
    });
  }, [events, selectedCategory, selectedDay]);

  return (
    <section className="py-10 bg-[#0B0813] relative z-20 border-t border-white/5" id="eventos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-4 tracking-tight">
            Nuestros Eventos
          </h2>
          <p className="text-zinc-400">Filtra todas las actividades por categoría y día.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="h-64 rounded-3xl p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-2 text-center flex items-center justify-center gap-2">
                <LayoutGrid size={18} className="text-fuchsia-500" />
                Categoría
              </h3>
              <div className="flex-1 relative overflow-hidden">
                <OptionWheel 
                  items={categories} 
                  defaultSelected={0} 
                  onChange={(_, item) => setSelectedCategory(item)} 
                  fontSize={1.5}
                  spacing={1.2}
                  tilt={3}
                  side="left"
                  textColor="#888"
                  activeColor="#e879f9"
                />
              </div>
            </div>

            <div className="h-64 rounded-3xl p-6 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-white mb-2 text-center flex items-center justify-center gap-2">
                <Calendar size={18} className="text-fuchsia-500" />
                Día
              </h3>
              <div className="flex-1 relative overflow-hidden">
                <OptionWheel 
                  items={days} 
                  defaultSelected={0} 
                  onChange={(_, item) => setSelectedDay(item)}
                  fontSize={1.5}
                  spacing={1.2}
                  tilt={3}
                  side="right"
                  textColor="#888"
                  activeColor="#e879f9"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-sm min-h-[500px]">
            {filteredEvents.length === 0 ? (
              <div className="flex items-center justify-center h-full text-zinc-500">
                No se encontraron eventos con estos filtros.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredEvents.map((event) => (
                  <div 
                    key={event.id} 
                    onClick={() => setSelectedEvent(event)}
                    className="group cursor-pointer flex flex-col p-5 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-transparent hover:border-fuchsia-500/50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {event.diaSemana} {event.fecha ? event.fecha.split('-').reverse().join('/') : ''}
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
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
