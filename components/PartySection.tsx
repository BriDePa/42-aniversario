"use client";

import { FIESTA_ALCOHORITMO, ANIVERSARIO_METADATA } from "@/lib/eventsData";
import { Ghost, MapPin, Martini, Ticket, Info, CheckCircle2 } from "lucide-react";
import BorderGlow from "./BorderGlow";
import TearTicket from "./TearTicket";
import { StaffCarousel } from "./StaffCarousel";

export function PartySection() {
  const party = FIESTA_ALCOHORITMO as any;
  const meta = ANIVERSARIO_METADATA as any;

  return (
    <section className="py-24 relative overflow-hidden bg-[#05030A]" id="fiesta">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-10 font-mono text-sm uppercase tracking-widest">
            <Ghost size={16} /> Gran Cierre del {meta.titulo}
          </div>
          
          <div className="relative mb-8 max-w-4xl mx-auto px-4">
             {/* Billboard Image */}
             <img src="/alcohoritmo2.jpg" alt="Alcohoritmo Billboard" className="w-full rounded-3xl opacity-80 shadow-[0_0_50px_rgba(255,0,255,0.15)] border border-white/5" />
          </div>

          <p className="text-xl sm:text-2xl text-zinc-300 font-medium max-w-2xl mt-4">
            {party.eslogan}
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <BorderGlow
             colors={["#a855f7", "#ec4899"]}
             className="w-full"
          >
            <div className="bg-[#0a0a0a] rounded-[inherit] p-8 h-full">
              <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                <MapPin size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Locación</h4>
              <p className="text-zinc-400">{party.lugar}</p>
              <p className="text-sm text-zinc-500 mt-2 font-mono">Apertura: {party.horaApertura}</p>
            </div>
          </BorderGlow>
          
          <BorderGlow
             colors={["#ec4899", "#8b5cf6"]}
             className="w-full"
          >
            <div className="bg-[#0a0a0a] rounded-[inherit] p-8 h-full">
              <div className="w-12 h-12 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center mb-6 text-fuchsia-400">
                <Ticket size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Entradas</h4>
              <div className="flex flex-wrap gap-4 mb-2">
                <div className="bg-black/30 px-3 py-1 rounded-lg">
                  <span className="text-xs text-zinc-500 block">General</span>
                  <span className="text-white font-bold">{party.preciosTier1.general} {party.preciosTier1.moneda}</span>
                </div>
                <div className="bg-fuchsia-500/20 px-3 py-1 rounded-lg border border-fuchsia-500/30">
                  <span className="text-xs text-fuchsia-300 block">VIP</span>
                  <span className="text-white font-bold">{party.preciosTier1.vip} {party.preciosTier1.moneda}</span>
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">{party.preciosTier1.condicion}</p>
            </div>
          </BorderGlow>

          <BorderGlow
             colors={["#f97316", "#f43f5e"]}
             className="w-full"
          >
            <div className="bg-[#0a0a0a] rounded-[inherit] p-8 h-full">
              <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                <Info size={24} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Bonus Exclusivo</h4>
              <p className="text-zinc-400 text-sm mb-2 font-bold text-orange-300">{party.bonusDobleFiesta.titulo}</p>
              <p className="text-zinc-500 text-xs leading-relaxed">{party.bonusDobleFiesta.descripcion}</p>
            </div>
          </BorderGlow>
        </div>

        
        {/* Interactive Ticket Section */}
        <div className="flex flex-col items-center justify-center my-24 z-10 relative">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-2">Tu Pase de Acceso</h3>
            <p className="text-zinc-400">Desgarra el talón de la manilla interactiva.</p>
          </div>
          
          <div className="hidden sm:block">
            <TearTicket
              width={600}
              height={220}
              stubSize={160}
              stubBackground="linear-gradient(135deg, #ec4899, #a855f7)"
              className="drop-shadow-[0_0_50px_rgba(236,72,153,0.3)]"
              stub={
                <div className="flex flex-col items-center justify-center h-full w-full">
                  <span className="text-white font-black text-4xl mb-1 drop-shadow-md">VIP</span>
                  <span className="text-fuchsia-100 font-bold text-xl">{party.preciosTier1.vip} {party.preciosTier1.moneda}</span>
                </div>
              }
            >
              <div className="flex flex-col justify-center h-full bg-[#110d18] text-white p-10 border border-fuchsia-500/20 rounded-l-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full"></div>
                
                <h4 className="text-4xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-2 relative z-10">ALCOHORITMO</h4>
                <p className="text-lg text-zinc-400 uppercase tracking-widest relative z-10">Halloween V.11 F.255</p>
                <div className="mt-4 inline-flex px-3 py-1 bg-white/5 rounded-lg border border-white/10 w-fit relative z-10">
                  <span className="text-xs text-zinc-300 font-mono">ID: ALCO-2026-VIP</span>
                </div>
              </div>
            </TearTicket>
          </div>
          <div className="sm:hidden flex justify-center w-full mt-4">
            <TearTicket
              width={340}
              height={140}
              stubSize={90}
              stubBackground="linear-gradient(135deg, #ec4899, #a855f7)"
              className="drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]"
              stub={
                <div className="flex flex-col items-center justify-center h-full w-full p-2">
                  <span className="text-white font-black text-2xl drop-shadow-md">VIP</span>
                  <span className="text-fuchsia-100 font-bold text-sm">{party.preciosTier1.vip} {party.preciosTier1.moneda}</span>
                </div>
              }
            >
              <div className="flex flex-col justify-center h-full bg-[#110d18] text-white p-4 border border-fuchsia-500/20 rounded-l-2xl">
                <h4 className="text-xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-1">ALCOHORITMO</h4>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Halloween V.11</p>
              </div>
            </TearTicket>
          </div>
        </div>

        {/* Staff Section */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-4">Adquiere tus Entradas</h3>
            <p className="text-zinc-400 max-w-xl mx-auto">Contacta a nuestro Staff Autorizado de Venta para adquirir tus manillas o reservar combos. ¡Elige a tu vendedor favorito!</p>
          </div>
          <StaffCarousel />
        </div>

        {/* Menu & Attractions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Attractions & Timeline */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Atracciones</h3>
              <ul className="space-y-4">
                {party.atracciones.map((attr: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-fuchsia-500 shrink-0 mt-1" size={20} />
                    <span className="text-zinc-300">{attr}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Cronograma de la Noche</h3>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-4 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {party.timelineNoche.map((item: any, idx: number) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-white/10 bg-[#0B0813] text-zinc-500 group-[.is-active]:text-fuchsia-400 group-[.is-active]:border-fuchsia-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <div className="w-2 h-2 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-[#0a0a0a] border border-white/10 p-4 rounded-xl shadow">
                      <div className="flex items-center justify-between mb-1">
                        <time className="font-mono text-sm font-bold text-fuchsia-400">{item.hora}</time>
                      </div>
                      <div className="text-zinc-300 text-sm">{item.actividad}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drinks Menu */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Martini className="text-fuchsia-500" />
              Menú Oficial de Combos
            </h3>
            
            <div className="space-y-3">
              {party.menuBebidas.map((bebida: any) => (
                <div key={bebida.id} className="group bg-[#0a0a0a] hover:bg-white/10 border border-white/10 rounded-2xl p-4 flex items-center justify-between gap-4 transition-colors cursor-default">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center text-2xl shrink-0">
                      {bebida.icono}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-white font-bold group-hover:text-fuchsia-300 transition-colors truncate">{bebida.nombre}</h4>
                      <p className="text-xs text-zinc-500 truncate">{bebida.descripcion}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="block font-mono font-bold text-lg text-white">{bebida.precioBs} Bs</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Combos Grupales CTA */}
            <div className="mt-8 bg-gradient-to-br from-purple-900/40 to-fuchsia-900/20 border border-fuchsia-500/30 rounded-3xl p-6 text-center shadow-[0_0_40px_rgba(255,0,255,0.1)]">
              <h4 className="text-xl font-bold text-white mb-2">¿Vienes en grupo?</h4>
              <p className="text-zinc-300 text-sm mb-4">Aprovecha los combos grupales para 10, 15 o 20 personas con manillas gratis y mesas incluidas.</p>
              <a 
                href={meta.contactoMesasYCombos.enlace}
                target="_blank" rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto shadow-[0_0_20px_rgba(217,70,239,0.5)]"
              >
                Reservar Mesa / Combo
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
