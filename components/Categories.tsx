"use client";

import { useState } from "react";
import OptionWheel from "./OptionWheel";
import { EVENTOS_ANIVERSARIO } from "@/lib/eventsData";
import { ArrowRight, LayoutGrid } from "lucide-react";
import { EventModal } from "./EventModal";

const CATEGORIES = [
  "Coloquio de IA",
  "Seminarios",
  "Torneos E-Sports",
  "Deportes",
  "Hackathon",
  "Actividades Culturales",
  "Fiestas y Convivencia"
];

const CATEGORY_IMAGES: Record<string, string> = {
  "Coloquio de IA": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  "Seminarios": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
  "Torneos E-Sports": "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
  "Deportes": "https://images.unsplash.com/photo-1518605368461-1e1e38ce8a58?q=80&w=800&auto=format&fit=crop",
  "Hackathon": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop",
  "Actividades Culturales": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop",
  "Fiestas y Convivencia": "https://images.unsplash.com/photo-1516450360452-9312f5e86ce7?q=80&w=800&auto=format&fit=crop"
};

export function Categories() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const activeCategory = CATEGORIES[activeCategoryIndex];
  
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  // Get events for active category
  const categoryEvents = EVENTOS_ANIVERSARIO.filter(e => 
    e.categoria === activeCategory || (activeCategory === "Fiestas y Convivencia" && e.titulo.includes("Alcohoritmo"))
  );

  return (
    <section className="py-20 bg-[#0B0813] relative z-10 border-t border-white/5" id="categorias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-4 tracking-tight">
            Explora por Categorías
          </h2>
          <p className="text-zinc-400">Gira la rueda para descubrir los eventos de cada área.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* OptionWheel Column */}
          <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] bg-white/5 rounded-3xl border border-white/10 relative overflow-hidden flex items-center justify-center">
            {/* Ambient glow behind wheel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-600/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="w-full h-full">
              <OptionWheel 
                items={CATEGORIES}
                defaultSelected={0}
                onChange={(idx) => setActiveCategoryIndex(idx)}
                textColor="#4f4f5a"
                activeColor="#ec4899"
                side="left"
                fontSize={2}
                spacing={1.5}
                tilt={20}
                curve={1.2}
                inset={40}
                blur={3}
                fade={0.3}
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full lg:w-1/2 flex flex-col h-full min-h-[400px]">
            <div className="relative h-48 sm:h-64 rounded-3xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={CATEGORY_IMAGES[activeCategory]} 
                alt={activeCategory} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-100 hover:scale-105" 
                key={activeCategory} // forces remount/animation
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0813] via-[#0B0813]/40 to-transparent" />
              <h3 className="absolute bottom-6 left-6 text-3xl font-bold text-white flex items-center gap-3">
                <LayoutGrid className="text-fuchsia-500" />
                {activeCategory}
              </h3>
            </div>

            <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-md">
              <h4 className="text-sm uppercase tracking-widest text-zinc-500 font-bold mb-4">Eventos Programados</h4>
              
              {categoryEvents.length > 0 ? (
                <div className="space-y-3">
                  {categoryEvents.map((ev, i) => (
                    <button 
                      key={i}
                      onClick={() => setSelectedEvent(ev)}
                      className="w-full text-left group flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-fuchsia-500/30 transition-all"
                    >
                      <div>
                        <h5 className="text-white font-semibold group-hover:text-fuchsia-400 transition-colors">{ev.titulo}</h5>
                        <p className="text-xs text-zinc-400 mt-1">{ev.fecha.split('-').reverse().join('/')} • {ev.horaInicio}</p>
                      </div>
                      <ArrowRight className="text-zinc-600 group-hover:text-fuchsia-400 transition-colors shrink-0" size={18} />
                    </button>
                  ))}
                </div>
              ) : (
                <div className="text-zinc-500 text-sm py-8 text-center bg-black/20 rounded-xl">
                  Más eventos por anunciar...
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
}
