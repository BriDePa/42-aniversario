"use client";

import React from "react";
import { ANIVERSARIO_METADATA } from "@/lib/eventsData";
import { Phone } from "lucide-react";

export function StaffCarousel() {
  const staffMembers = ANIVERSARIO_METADATA.staffsVentaEntradas as Array<{ nombre: string; telefono: string; enlace: string }>;
  
  // Duplicar el array para loop continuo sin gaps
  const duplicatedStaff = [...staffMembers, ...staffMembers, ...staffMembers];

  return (
    <div className="w-full flex flex-col items-start justify-start py-6 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0813] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0813] to-transparent z-10 pointer-events-none" />

      <div
        className="flex animate-marquee gap-8 hover:[animation-play-state:paused] cursor-pointer"
        style={{ width: "max-content" }}
      >
        {duplicatedStaff.map((staff, idx) => (
          <a
            key={idx}
            href={staff.enlace}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 px-8 py-5 rounded-3xl bg-black/50 border border-fuchsia-500/30 hover:border-fuchsia-400 hover:bg-fuchsia-500/10 transition-all group shadow-lg min-w-[200px]"
          >
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-fuchsia-500/20 flex-shrink-0 border border-white/10">
              <img
                src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${staff.nombre}&backgroundColor=transparent`}
                alt={staff.nombre}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-base group-hover:text-fuchsia-400 transition-colors">
                {staff.nombre}
              </span>
              <span className="text-zinc-400 text-sm flex items-center gap-1.5">
                <Phone size={12} className="text-fuchsia-500" />
                {staff.telefono}
              </span>
              <span className="text-xs text-fuchsia-400/70 font-mono uppercase tracking-wider">
                Staff Ventas
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
