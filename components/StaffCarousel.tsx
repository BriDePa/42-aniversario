"use client";

import React from "react";
import { ANIVERSARIO_METADATA } from "@/lib/eventsData";
import { Phone } from "lucide-react";

export function StaffCarousel() {
  const staffMembers = ANIVERSARIO_METADATA.staffsVentaEntradas as Array<{ nombre: string; telefono: string; enlace: string }>;
  
  // Array for continuous scrolling
  // Array for continuous scrolling with delay
  const duplicatedStaff = [...staffMembers];

  return (
    <div className="w-full flex flex-col items-start justify-start py-8 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0B0813] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0B0813] to-transparent z-10 pointer-events-none"></div>

      <div className="flex animate-marquee-delay gap-6 hover:[animation-play-state:paused] cursor-pointer" style={{ width: 'max-content' }}>
        {duplicatedStaff.map((staff, idx) => (
          <a
            key={idx}
            href={staff.enlace}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 border border-fuchsia-500/30 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden bg-fuchsia-500/20 flex-shrink-0">
              <img 
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${staff.nombre}&backgroundColor=transparent`} 
                alt={staff.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col pr-2">
              <span className="text-white font-bold text-sm group-hover:text-fuchsia-400 transition-colors">{staff.nombre}</span>
              <span className="text-zinc-400 text-xs flex items-center gap-1">
                <Phone size={10} />
                {staff.telefono}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
