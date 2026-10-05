"use client";

import { EventItem } from "@/lib/eventsData";
import { Clock, Calendar as CalendarIcon, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useRef } from "react";

export function CalendarView({ events = [] }: { events?: EventItem[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const groupedByDate = useMemo(() => {
    const grouped = events.reduce((acc, event) => {
      const dateKey = event.fecha || "0000-00-00";
      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(event);
      return acc;
    }, {} as Record<string, EventItem[]>);

    // Sort events within each day by time
    Object.keys(grouped).forEach(dateKey => {
      grouped[dateKey].sort((a, b) => {
        const timeA = a.horaInicio || "00:00";
        const timeB = b.horaInicio || "00:00";
        return timeA.localeCompare(timeB);
      });
    });

    return grouped;
  }, [events]);

  const activeDays = useMemo(() => {
    return Object.keys(groupedByDate).sort((a, b) => a.localeCompare(b));
  }, [groupedByDate]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-10 bg-[#0B0813] relative z-20 border-t border-white/5" id="calendario">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-tight flex items-center justify-center gap-3">
            <CalendarIcon className="text-fuchsia-500" size={32} />
            Semana Aniversario
          </h2>
          <p className="text-zinc-400">Vista rápida del cronograma por días.</p>
          
        </div>

        {/* Horizontal scroll container for the weekly calendar columns */}
        <div className="relative group">
          {/* Side floating buttons (visible on hover or always on mobile) */}
          <button 
            onClick={scrollLeft}
            className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/10 bg-[#0B0813]/90 hover:bg-white/10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={scrollRight}
            className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border border-white/10 bg-[#0B0813]/90 hover:bg-white/10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all sm:opacity-0 sm:group-hover:opacity-100"
          >
            <ChevronRight size={24} />
          </button>

          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-4 min-w-max px-2 md:px-0">
              {activeDays.map(dateKey => {
                const eventsOnDate = groupedByDate[dateKey];
                const firstEvent = eventsOnDate[0];
                return (
                  <div 
                    key={dateKey} 
                    className="w-[280px] sm:w-[320px] flex-shrink-0 bg-white/5 border border-white/10 rounded-3xl p-5 flex flex-col snap-start"
                  >
                    <div className="text-center pb-4 mb-4 border-b border-white/10">
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500">
                        {firstEvent?.diaSemana || "Día"}
                      </h3>
                      <span className="text-xs text-zinc-500 font-medium tracking-widest uppercase">
                        {dateKey.split('-').reverse().join('/') || ""}
                      </span>
                    </div>
                    
                    <div className="flex flex-col gap-3 flex-1 overflow-y-auto pr-1 custom-scrollbar">
                      {eventsOnDate.map(event => (
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
                              {event.ubicacion_url ? (
                                <a href={event.ubicacion_url} target="_blank" rel="noreferrer" className="line-clamp-2 hover:text-purple-300 underline decoration-purple-500/30 underline-offset-2 transition-colors">
                                  {event.ubicacion}
                                </a>
                              ) : (
                                <span className="line-clamp-2">{event.ubicacion}</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
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
