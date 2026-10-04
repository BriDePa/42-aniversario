"use client";

import { useState, useMemo } from "react";
import { EVENTOS_ANIVERSARIO, EventItem } from "@/lib/eventsData";
import { EventModal } from "./EventModal";
import GooeyNav from "./GooeyNav";
import BorderGlow from "./BorderGlow";
import { CalendarDays, Clock, MapPin } from "lucide-react";

const DAY_ITEMS = [
  { label: "Todo", href: "#todo-dias" },
  { label: "Miércoles 7", href: "#miercoles-7" },
  { label: "Jueves 8", href: "#jueves-8" },
  { label: "Viernes 9", href: "#viernes-9" },
  { label: "Sábado 10", href: "#sabado-10" },
  { label: "Lunes 12", href: "#lunes-12" },
  { label: "Martes 13", href: "#martes-13" },
  { label: "Miércoles 14", href: "#miercoles-14" },
  { label: "Jueves 15", href: "#jueves-15" },
  { label: "Viernes 16", href: "#viernes-16" },
];

const CATEGORY_ITEMS = [
  { label: "Todas", href: "#todas-cat" },
  { label: "Coloquio de IA", href: "#coloquio" },
  { label: "Seminarios", href: "#seminarios" },
  { label: "Torneos E-Sports", href: "#esports" },
  { label: "Deportes", href: "#deportes" },
  { label: "Actividades Culturales", href: "#cultural" },
  { label: "Fiestas y Convivencia", href: "#fiestas" },
];

export function TimelineSchedule() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [activeDay, setActiveDay] = useState("Todo");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const filteredAndSortedEvents = useMemo(() => {
    let filtered = [...EVENTOS_ANIVERSARIO];
    
    // Apply Day filter
    if (activeDay !== "Todo") {
      filtered = filtered.filter(ev => {
        const matchStr = activeDay.split(' '); // e.g. ["Miércoles", "7"]
        if (matchStr.length === 2) {
          const expectedDay = matchStr[1].padStart(2, '0');
          return ev.fecha.endsWith(`-${expectedDay}`);
        }
        return true;
      });
    }

    // Apply Category filter
    if (activeCategory !== "Todas") {
      filtered = filtered.filter(ev => 
        ev.categoria === activeCategory || 
        (activeCategory === "Fiestas y Convivencia" && ev.titulo.includes("Alcohoritmo"))
      );
    }

    // Sort by fecha and horaInicio ascending
    filtered.sort((a, b) => {
      const dateA = new Date(`${a.fecha}T${a.horaInicio || "00:00"}`);
      const dateB = new Date(`${b.fecha}T${b.horaInicio || "00:00"}`);
      return dateA.getTime() - dateB.getTime();
    });

    return filtered;
  }, [activeDay, activeCategory]);

  return (
    <section className="py-20 bg-[#0B0813] relative z-20 border-t border-white/5" id="eventos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-4 tracking-tight">
            Cronograma Oficial
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mb-10">
            Explora las diferentes convocatorias y eventos. Haz click en cualquier tarjeta para ver información detallada, avisos o escanear el QR.
          </p>
          
          <div className="flex flex-col gap-4 w-full">
            {/* Days Filter */}
            <div className="flex justify-start sm:justify-center w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <GooeyNav 
                items={DAY_ITEMS} 
                onChange={(_, item) => setActiveDay(item.label)} 
              />
            </div>

            {/* Categories Filter */}
            <div className="flex justify-start sm:justify-center w-full overflow-x-auto pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <GooeyNav 
                items={CATEGORY_ITEMS} 
                onChange={(_, item) => setActiveCategory(item.label)} 
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {filteredAndSortedEvents.map((ev, i) => (
            <div key={`${ev.id}-${i}`} onClick={() => setSelectedEvent(ev)} className="h-full">
              <BorderGlow 
                className="w-full h-full min-h-[220px] bg-[#120E1A] p-5 rounded-2xl flex flex-col hover:-translate-y-1 transition-transform duration-300"
                glowColor="310 100% 50%" 
                colors={['#ec4899', '#a855f7', '#d946ef']}
                animated={false}
              >
                <div className="flex flex-col h-full z-10 pointer-events-none">
                  <div className="mb-auto">
                    <span className="inline-block text-[10px] uppercase tracking-widest px-2 py-1 rounded bg-fuchsia-500/20 text-fuchsia-300 mb-3 border border-fuchsia-500/20">
                      {ev.categoria}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2 leading-snug">{ev.titulo}</h3>
                  </div>
                  
                  <div className="space-y-2 mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center text-xs text-zinc-400">
                      <CalendarDays size={14} className="mr-2 text-fuchsia-400 shrink-0" />
                      <span>{ev.diaSemana}, {ev.fecha.split('-').reverse().join('/')}</span>
                    </div>
                    <div className="flex items-center text-xs text-zinc-400">
                      <Clock size={14} className="mr-2 text-fuchsia-400 shrink-0" />
                      <span>{ev.horaInicio} {ev.horaFin ? `- ${ev.horaFin}` : ''}</span>
                    </div>
                    <div className="flex items-center text-xs text-zinc-400">
                      <MapPin size={14} className="mr-2 text-fuchsia-400 shrink-0" />
                      <span className="line-clamp-1">{ev.ubicacion}</span>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          ))}
          {filteredAndSortedEvents.length === 0 && (
            <div className="col-span-full text-center py-20 text-zinc-500">
              No hay eventos programados para esta fecha.
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
