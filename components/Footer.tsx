"use client";

import { ANIVERSARIO_METADATA } from "@/lib/eventsData";
import { Hexagon, Phone } from "lucide-react";

export function Footer() {
  const meta = ANIVERSARIO_METADATA as any;

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Hexagon className="text-fuchsia-500 fill-fuchsia-500" size={32} />
              <span className="text-white font-bold text-2xl tracking-tight">
                Hub<span className="text-fuchsia-400">42</span>
              </span>
            </div>
            <p className="text-zinc-400 max-w-md mb-6 leading-relaxed">
              Plataforma oficial del {meta.titulo} de la Carrera de {meta.carrera}, {meta.universidad}.
            </p>
            <a 
              href={meta.whatsappGrupoOficial}
              target="_blank" rel="noreferrer"
              className="inline-block px-6 py-2 rounded-full border border-green-500/50 bg-green-500/10 text-green-400 font-medium hover:bg-green-500/20 transition-colors"
            >
              Unirse al Grupo Oficial de WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Venta de Entradas</h4>
            <ul className="space-y-3">
              {meta.staffsVentaEntradas.map((staff: any, idx: number) => (
                <li key={idx}>
                  <a href={staff.enlace} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-fuchsia-400 transition-colors">
                    <Phone size={14} />
                    <span>{staff.nombre} ({staff.telefono.substring(3)})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Coordinación</h4>
            <ul className="space-y-3">
              {meta.coordinadoresGenerales.map((coord: any, idx: number) => (
                <li key={idx} className="text-zinc-400">
                  <span className="block text-white">{coord.nombre}</span>
                  <span className="text-xs text-zinc-500">{coord.rol}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm">
            © 2026 {meta.carrera} UMSA. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4 text-zinc-600 text-sm">
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
