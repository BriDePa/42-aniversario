"use client";

import { Menu, X, Hexagon } from "lucide-react";
import { useState } from "react";
import { ANIVERSARIO_METADATA } from "@/lib/eventsData";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const meta = ANIVERSARIO_METADATA as Record<string, any>;

  const whatsappLink = "https://wa.me/59165991669?text=Hola%20Brian%2C%20vengo%20de%20la%20p%C3%A1gina%20oficial%20del%20aniversario";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-6 py-3 shadow-xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Logo Carrera" className="w-10 h-10 object-contain rounded-full bg-white p-0.5" />
          <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
            Informática <span className="text-fuchsia-400">42</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="/" className="hover:text-fuchsia-400 transition-colors">Inicio</a>
          <a href="/#eventos" className="hover:text-fuchsia-400 transition-colors">Cronograma</a>
          <a href="/fiesta" className="text-white font-bold hover:text-fuchsia-400 transition-colors drop-shadow-[0_0_10px_rgba(255,0,255,0.5)]">Fiesta Alcohoritmo</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" className="hover:text-fuchsia-400 transition-colors">Contacto</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/admin" className="text-sm font-bold text-white px-5 py-2 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/20 hover:bg-fuchsia-500/40 transition-colors">
            Administrar
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[80px] left-4 right-4 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          <a href="/" onClick={() => setIsOpen(false)} className="text-white text-lg">Inicio</a>
          <a href="/#eventos" onClick={() => setIsOpen(false)} className="text-zinc-300 text-lg">Cronograma Completo</a>
          <a href="/fiesta" onClick={() => setIsOpen(false)} className="text-fuchsia-400 font-bold text-lg">Fiesta Alcohoritmo</a>
          <a href={whatsappLink} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)} className="text-zinc-300 text-lg">Contacto Oficial</a>
          <div className="h-px bg-white/10 my-2" />
          <a href="/admin" className="w-full block text-center text-white px-5 py-3 rounded-full border border-fuchsia-500/50 bg-fuchsia-500/20 font-bold">
            Administrar
          </a>
        </div>
      )}
    </nav>
  );
}
