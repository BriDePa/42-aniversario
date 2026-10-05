"use client";

import { Star } from "lucide-react";

interface EventCardProps {
  id: string;
  titulo: string;
  categoria: string;
  fecha: string; // e.g., "2026-10-08"
  horaInicio?: string;
  ubicacion?: string;
  descripcion: string;
  isCenter?: boolean;
}

export function EventCard({ titulo, fecha, horaInicio, ubicacion, descripcion, isCenter }: EventCardProps) {
  // Format Date: "2026-10-08" -> "08 OCT"
  const dateParts = (fecha || "").split('T')[0].split('-');
  const day = dateParts[2] ? dateParts[2].padStart(2, '0') : "01";
  const months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
  const monthIdx = dateParts[1] ? parseInt(dateParts[1], 10) - 1 : 0;
  const month = months[monthIdx] || 'ENE';


  // Image based on category or random
  let bgImg = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop";
  if (titulo.toLowerCase().includes('ia') || titulo.toLowerCase().includes('hackatón')) bgImg = "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop";
  else if (titulo.toLowerCase().includes('futsal') || titulo.toLowerCase().includes('deportes')) bgImg = "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop";
  else if (titulo.toLowerCase().includes('fiesta') || titulo.toLowerCase().includes('coronación')) bgImg = "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop";
  else if (titulo.toLowerCase().includes('videojuegos')) bgImg = "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop";

  return (
    <div 
      className={`relative rounded-2xl overflow-hidden shrink-0 transition-all duration-500 cursor-pointer group 
        ${isCenter 
          ? 'w-[280px] sm:w-[320px] h-[360px] sm:h-[400px] z-20 scale-100 shadow-[0_0_30px_rgba(168,85,247,0.4)] ring-1 ring-purple-500/50' 
          : 'w-[240px] sm:w-[280px] h-[320px] sm:h-[360px] z-10 scale-95 opacity-60 hover:opacity-100'
        }`}
    >
      {/* Background Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={bgImg} alt={titulo} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${isCenter ? 'from-purple-900/90 via-purple-900/40 to-transparent' : 'from-black/90 via-black/40 to-transparent'}`}></div>

      {/* Date Badge */}
      <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-2 text-center leading-tight">
        <span className="block text-white font-bold text-sm sm:text-base">{day}</span>
        <span className="block text-zinc-300 font-medium text-[10px] sm:text-xs">{month}</span>
      </div>

      {/* Favorite Button */}
      <button className="absolute top-4 right-4 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-all">
        <Star size={16} className={isCenter ? 'fill-white' : ''} />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2">{titulo}</h3>
        <p className="text-zinc-300 text-xs mb-3 line-clamp-2">{descripcion}</p>
        
        {/* Footer info */}
        <div className="flex items-center gap-3 text-[10px] sm:text-xs font-medium text-purple-300/80 uppercase tracking-wider">
          {horaInicio && <span>{horaInicio}</span>}
          {horaInicio && ubicacion && <span>•</span>}
          {ubicacion && <span className="flex-1 min-w-0 truncate">{ubicacion}</span>}
        </div>
      </div>
    </div>
  );
}
