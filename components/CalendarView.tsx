"use client";

import { EventItem } from "@/lib/eventsData";
import { Clock, Calendar as CalendarIcon, MapPin } from "lucide-react";
import { useMemo } from "react";

export function CalendarView({ events = [] }: { events?: EventItem[] }) {
  const DIAS_ORDEN = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  const groupedByDay = useMemo(() => {
    const grouped = events.reduce((acc, event) => {
      const day = event.diaSemana || "Otros";
      if (!acc[day]) acc[day] = [];
      acc[day].push(event);
      return acc;
    }, {} as Record<string, EventItem[]>);

    // Sort events within each day by time
    Object.keys(grouped).forEach(day => {
      grouped[day].sort((a, b) => {
        const timeA = a.horaInicio || "00:00";
        const timeB = b.horaInicio || "00:00";
        return timeA.localeCompare(timeB);
      });
    });

    return grouped;
  }, [events]);

  const activeDays = DIAS_ORDEN.filter(day => groupedByDay[day] && groupedByDay[day].length > 0);

  return (
    <section className="py-20 bg-[#0B0813] relative z-20 border-t border-white/5" id="calendario">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight flex items-center justify-center gap-3">
            <CalendarIcon className="text-fuchsia-500" size={32} />
            Semana Aniversario
          </h2>
          <p className="text-zinc-400">Vista rápida del cronograma por días.</p>
        </div>

        {/* Horizontal scroll container for the weekly calendar columns */}
        <div className="overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
          <div className="flex gap-4 min-w-max">
            {activeDays.map(day => (
              <div 
                key={day} 
                className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white/5 border border-white/10 rounded-3xl p-5 flex flex-col snap-start"
              >
                <div className="text-center pb-4 mb-4 border-b border-white/10">
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
                    {day}
                  </h3>
                  <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">
                    {groupedByDay[day][0]?.fecha?.split('-').reverse().join('/') || ""}
                  </span>
                </div>
                
                <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                  {groupedByDay[day].map(event => (
                    <div key={event.id} className="p-3 rounded-xl bg-black/40 border border-white/5 hover:border-fuchsia-500/30 transition-colors">
                      <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-bold mb-1.5">
                        <Clock size={12} />
                        {event.horaInicio} {event.horaFin ? `- ${event.horaFin}` : ''}
                      </div>
                      <h4 className="text-sm font-semibold text-white leading-tight mb-2">
                        {event.titulo}
                      </h4>
                      {event.ubicacion && (
                        <div className="flex items-start gap-1.5 text-xs text-zinc-400">
                          <MapPin size={12} className="text-purple-400 mt-0.5 shrink-0" />
                          <span className="line-clamp-2">{event.ubicacion}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
}
