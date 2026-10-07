"use client";

import { useState } from "react";
import { FIESTA_ALCOHORITMO, ANIVERSARIO_METADATA } from "@/lib/eventsData";
import { 
  MapPin, Ticket, Info, CheckCircle2, Star, Sparkles, Trophy, Shirt, 
  X, ZoomIn, Gift, Calendar, AlertCircle, ShieldAlert, Bell, MessageSquare, Wine
} from "lucide-react";
import BorderGlow from "./BorderGlow";
import TearTicket from "./TearTicket";
import { StaffCarousel } from "./StaffCarousel";
import ScrollFloat from "./ScrollFloat";
import SlideCommit from "./SlideCommit";

interface ComboPoster {
  id: string;
  nombre: string;
  subtitulo: string;
  imagen: string;
  disponible: boolean;
  precioVip?: string;
  precioGeneral: string;
}

const COMBOS_DATA: ComboPoster[] = [
  {
    id: "combo-party",
    nombre: "Combo Party",
    subtitulo: "21 Manillas + 2 Mezcladores + 2 Botellas a elección",
    imagen: "/combo-party.png",
    disponible: true,
    precioVip: "Bs. 1400",
    precioGeneral: "Bs. 1200",
  },
  {
    id: "combo-xtreme",
    nombre: "Combo X-Treme",
    subtitulo: "16 Manillas + 3 Mezcladores + 1825 + Buhero Negro + Amarula",
    imagen: "/combo-xtreme.png",
    disponible: true,
    precioVip: "Bs. 1655",
    precioGeneral: "Bs. 1505",
  },
  {
    id: "combo-yardas",
    nombre: "Combo Yardas",
    subtitulo: "11 Manillas + 2 Yardas a elección (Vértigo Líquido)",
    imagen: "/combo-yardas.png",
    disponible: true,
    precioVip: "Bs. 790",
    precioGeneral: "Bs. 690",
  },
  {
    id: "combo-principiante",
    nombre: "Combo Principiante",
    subtitulo: "11 Manillas + 1 Mezclador + 1 Botella a elección",
    imagen: "/combo-principiante.png",
    disponible: true,
    precioVip: "Bs. 700",
    precioGeneral: "Bs. 600",
  },
  {
    id: "combo-noob",
    nombre: "Combo Noob",
    subtitulo: "11 Manillas + 3 Jarras a elección (Pisco, Daiquiri, Mojito, etc.)",
    imagen: "/combo-noob.png",
    disponible: true,
    precioGeneral: "Bs. 490",
  },
];

const AVISOS_FIESTA = [
  {
    tag: "Beneficio Grupal • 19:00 a 21:00",
    titulo: "Ingreso de Botella Sellada (Grupos de 10)",
    detalle: "De 7:00 PM a 9:00 PM (19:00 a 21:00), los grupos de 10 personas tienen permitido el ingreso de 1 botella de vidrio sellada original a la fiesta.",
    tipo: "exclusivo",
  },
  {
    tag: "Aforo y Mesas",
    titulo: "Mesas Exclusivas Limitadas",
    detalle: "Las ubicaciones de mesas en Forum Club se asignan por orden de reserva con confirmación de combo. Cupos limitados por seguridad.",
    tipo: "alerta",
  },
  {
    tag: "Control de Acceso",
    titulo: "Cédula de Identidad Obligatoria",
    detalle: "Evento estrictamente para mayores de 18 años. Todo asistente debe presentar su Cédula de Identidad original vigente junto con su manilla puesta.",
    tipo: "info",
  },
  {
    tag: "Promoción Doble Fiesta",
    titulo: "Pase al Apocalipsis Zombie",
    detalle: "Conserva tu manilla oficial intacta para ingresar sin costo alguno a la fiesta del sábado 17 de octubre en Forum.",
    tipo: "exclusivo",
  },
  {
    tag: "Horario de Puertas",
    titulo: "Apertura Puntual 19:00",
    detalle: "Recomendamos llegar temprano para evitar filas en portería y aprovechar la estación de maquillaje neón UV en sala.",
    tipo: "info",
  },
];

export function PartySection() {
  const party = FIESTA_ALCOHORITMO as any;
  const meta = ANIVERSARIO_METADATA as any;

  const [activeModalPoster, setActiveModalPoster] = useState<ComboPoster | null>(null);

  const buildComboWhatsAppUrl = (comboName: string) => {
    const phone = meta.contactoMesasYCombos.telefono;
    const msg = encodeURIComponent(`Hola Brian, deseo información y reservar el ${comboName} para Alcohoritmo.`);
    return `https://wa.me/${phone}?text=${msg}`;
  };

  const buildBirthdayWhatsAppUrl = () => {
    const phone = meta.contactoMesasYCombos.telefono;
    const msg = encodeURIComponent("Hola Brian, cumplo años en el mes de octubre y deseo activar el Combo Cumpleañero para Alcohoritmo.");
    return `https://wa.me/${phone}?text=${msg}`;
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#05030A]" id="fiesta">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-fuchsia-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── HEADER ── */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 mb-10 font-mono text-sm uppercase tracking-widest">
            Gran Cierre del {meta.titulo}
          </div>
          <div className="relative mb-8 max-w-4xl mx-auto px-4">
            <img src="/alcohoritmo2.jpg" alt="Alcohoritmo Billboard" className="w-full rounded-3xl opacity-80 shadow-[0_0_50px_rgba(255,0,255,0.15)] border border-white/5" />
          </div>
          <p className="text-xl sm:text-2xl text-zinc-300 font-medium max-w-2xl mt-4">{party.eslogan}</p>
        </div>

        {/* ── INFO CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <BorderGlow colors={["#a855f7", "#ec4899"]} className="w-full">
            <div className="bg-[#0a0a0a] rounded-[inherit] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                  <MapPin size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Locación Oficial</h4>
                <a 
                  href="https://share.google/tFu44qDmaykApMY39" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors font-medium underline underline-offset-4 decoration-fuchsia-500/50 flex items-center gap-1.5 group"
                >
                  <span>{party.lugar}</span>
                </a>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Apertura: {party.horaApertura}</span>
                <a 
                  href="https://share.google/tFu44qDmaykApMY39" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  Ver en Maps →
                </a>
              </div>
            </div>
          </BorderGlow>

          <BorderGlow colors={["#ec4899", "#8b5cf6"]} className="w-full">
            <div className="bg-[#0a0a0a] rounded-[inherit] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-fuchsia-500/20 rounded-2xl flex items-center justify-center text-fuchsia-400">
                    <Ticket size={24} />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/40 font-mono text-[11px] font-bold tracking-wider uppercase">
                    TIER 1 PREVENTA
                  </span>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Entradas Individuales</h4>
                <div className="flex flex-wrap gap-3 mb-2">
                  <div className="bg-black/40 px-3.5 py-2 rounded-xl border border-white/10 flex-1">
                    <span className="text-[11px] text-zinc-400 uppercase tracking-wider block font-mono">General T1</span>
                    <span className="text-white font-extrabold text-lg">{party.preciosTier1.general} {party.preciosTier1.moneda}</span>
                  </div>
                  <div className="bg-fuchsia-500/10 px-3.5 py-2 rounded-xl border border-fuchsia-500/30 flex-1">
                    <span className="text-[11px] text-fuchsia-300 uppercase tracking-wider block font-mono">VIP T1</span>
                    <span className="text-white font-extrabold text-lg">{party.preciosTier1.vip} {party.preciosTier1.moneda}</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-zinc-500 mt-3 font-mono">{party.preciosTier1.condicion}</p>
            </div>
          </BorderGlow>

          <BorderGlow colors={["#f97316", "#f43f5e"]} className="w-full">
            <div className="bg-[#0a0a0a] rounded-[inherit] p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-orange-500/20 rounded-2xl flex items-center justify-center mb-6 text-orange-400">
                  <Info size={24} />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Bonus Exclusivo</h4>
                <p className="text-zinc-400 text-sm mb-2 font-bold text-orange-300">{party.bonusDobleFiesta.titulo}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{party.bonusDobleFiesta.descripcion}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={13} /> Entrada libre al día siguiente
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* ── DRESSING CODE / CONCEPTO HALLOWEEN ── */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <ScrollFloat
              containerClassName="justify-center"
              textClassName="font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-fuchsia-400 to-purple-500 uppercase tracking-widest"
              animationDuration={1.2}
              stagger={0.04}
            >
              Dressing Code
            </ScrollFloat>
            <p className="text-zinc-400 max-w-xl mx-auto -mt-2">
              Detalles sobre la temática y concursos de la noche
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative rounded-3xl overflow-hidden border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-[#0a0a0a] to-[#05030A]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-3xl rounded-full" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-4">
                  <Shirt size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-orange-300 transition-colors">Fiesta de Disfraces</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Temática de disfraces abierta. Diseño, personificación o temática de preferencia.</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden border border-fuchsia-500/20 hover:border-fuchsia-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-900/40 via-[#0a0a0a] to-[#05030A]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-2xl bg-fuchsia-500/20 border border-fuchsia-500/30 flex items-center justify-center text-fuchsia-400 mb-4">
                  <Sparkles size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-fuchsia-300 transition-colors">Estación Neón</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Estación de maquillaje neón UV habilitada durante el evento para todos los asistentes.</p>
              </div>
            </div>
            <div className="group relative rounded-3xl overflow-hidden border border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/30 via-[#0a0a0a] to-[#05030A]" />
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full" />
              <div className="relative p-8">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center text-yellow-400 mb-4">
                  <Trophy size={24} />
                </div>
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-yellow-300 transition-colors">Concurso y Premios</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">Evaluación y premiación especial para los mejores disfraces presentados en sala.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── STAFF / COMPRA DE ENTRADAS GENERALES Y VIP ── */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20 font-mono text-xs uppercase tracking-widest mb-3">
              Precios Preventa TIER 1
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Staff Autorizado de Ventas</h3>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Comunícate directamente con nuestro equipo de ventas para adquirir tus manillas General o VIP:
            </p>
          </div>
          <StaffCarousel />
        </div>

        {/* ── GALERÍA DE POSTERS OFICIALES DE COMBOS ── */}
        <div className="mb-24" id="combos">
          <div className="text-center mb-12">
            <ScrollFloat
              containerClassName="justify-center"
              textClassName="font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-purple-500 uppercase tracking-widest"
              animationDuration={1.2}
              stagger={0.04}
            >
              Combos Oficiales
            </ScrollFloat>
            <p className="text-zinc-400 max-w-xl mx-auto -mt-2">
              Posters oficiales de combinados para grupos. Pulsa sobre cualquier cartel para ampliar los detalles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMBOS_DATA.map((combo) => (
              <BorderGlow 
                key={combo.id}
                colors={["#ec4899", "#a855f7"]}
                borderRadius={24}
                glowRadius={25}
                glowIntensity={1}
                className="w-full h-full"
              >
                <div
                  className="group flex flex-col h-full rounded-[inherit] overflow-hidden bg-[#0A0713] transition-all duration-300"
                >
                  {/* Poster container (9:16 aspect ratio look) */}
                  <div 
                    onClick={() => setActiveModalPoster(combo)}
                    className="relative aspect-[9/16] w-full overflow-hidden bg-black/60 cursor-pointer"
                  >
                    <img
                      src={combo.imagen}
                      alt={combo.nombre}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0713] via-transparent to-transparent opacity-80" />

                    {/* Zoom indicator on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 border border-fuchsia-500/50 text-white font-mono text-xs font-bold tracking-wider">
                        <ZoomIn size={14} className="text-fuchsia-400" />
                        Ver Poster Completo
                      </span>
                    </div>

                    {/* Status badge */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-wider uppercase border ${
                        combo.disponible
                          ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
                          : "bg-purple-500/20 text-purple-300 border-purple-500/40"
                      }`}>
                        {combo.disponible ? "Disponible" : "Próximamente"}
                      </span>
                    </div>
                  </div>

                  {/* Info & Action Footer */}
                  <div className="p-5 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <h4 className="text-xl font-black text-white group-hover:text-fuchsia-300 transition-colors">
                        {combo.nombre}
                      </h4>
                      <p className="text-xs text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {combo.subtitulo}
                      </p>
                    </div>

                    {/* Prices strip */}
                    <div className={`grid ${combo.precioVip ? "grid-cols-2" : "grid-cols-1"} gap-2 bg-black/40 p-2.5 rounded-2xl border border-white/5 text-center`}>
                      {combo.precioVip && (
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">VIP</span>
                          <span className="text-xs font-mono font-bold text-fuchsia-300">{combo.precioVip}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest block font-mono">
                          {combo.precioVip ? "General" : "Precio Oficial"}
                        </span>
                        <span className="text-xs font-mono font-bold text-emerald-300">{combo.precioGeneral}</span>
                      </div>
                    </div>

                    {/* SlideCommit Action: Desliza para reservar por WhatsApp */}
                    <div className="flex justify-center w-full pt-1">
                      <SlideCommit
                        width={240}
                        height={46}
                        radius={23}
                        trackColor="#1a0b2e"
                        handleColor="#d946ef"
                        successColor="#22c55e"
                        label={`Desliza: Reservar`}
                        doneLabel="Abriendo..."
                        onConfirm={() => {
                          window.open(buildComboWhatsAppUrl(combo.nombre), "_blank");
                        }}
                        className="shadow-[0_0_15px_rgba(217,70,239,0.25)]"
                      />
                    </div>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>
        </div>

        {/* ── COMBO CUMPLEAÑERO (VIP SPOTLIGHT) ── */}
        <div className="mb-24 relative">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-[#0D0914] to-[#05030A] p-8 sm:p-12 shadow-[0_0_50px_rgba(245,158,11,0.12)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Poster Cumpleañero Thumbnail */}
              <div 
                onClick={() => setActiveModalPoster({
                  id: "combo-cumple",
                  nombre: "Combo Cumpleañero",
                  subtitulo: "Ruta de 6 shots + Letrero + Bengala + Show en Forum",
                  imagen: "/combo-cumple.png",
                  disponible: true,
                  precioGeneral: "Bs. 50"
                })}
                className="w-48 sm:w-56 shrink-0 aspect-[9/16] rounded-2xl overflow-hidden border border-amber-500/40 relative cursor-pointer group shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:scale-105 transition-all duration-300"
              >
                <img 
                  src="/combo-cumple.png" 
                  alt="Combo Cumple" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-black/70 border border-amber-400 text-amber-300 text-xs font-mono font-bold flex items-center gap-1">
                    <ZoomIn size={14} /> Ampliar
                  </span>
                </div>
              </div>

              <div className="space-y-4 text-center lg:text-left max-w-xl flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono text-xs uppercase tracking-widest">
                  <Gift size={14} />
                  Promoción Especial • Octubre 16
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Combo Cumple <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-fuchsia-400">Bs. 50</span>
                </h3>

                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  ¿Festejas tu cumpleaños? Adquiere el paquete cumpleañero oficial en Forum Club:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Ruta de 6 Shots</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Letrero Cumpleañero VIP</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Bengala Cumple</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    <CheckCircle2 size={16} className="text-amber-400 shrink-0" />
                    <span>Show Cumpleañero en Sala</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 w-full lg:w-auto shrink-0">
                <a
                  href={buildBirthdayWhatsAppUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-fuchsia-600 hover:from-amber-400 hover:to-fuchsia-500 text-white font-black py-4 px-8 rounded-2xl transition-all shadow-[0_0_30px_rgba(245,158,11,0.35)] hover:shadow-[0_0_40px_rgba(245,158,11,0.5)] text-sm uppercase tracking-wider font-mono text-center"
                >
                  <Gift size={18} />
                  Reclamar Combo Cumple
                </a>
                <span className="text-[11px] text-zinc-500 font-mono text-center">
                  * Válido presentando Cédula de Identidad en mesa
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── AVISOS Y NOVEDADES (TABLÓN OFICIAL) ── */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-zinc-400 border border-white/10 font-mono text-xs uppercase tracking-widest mb-3">
              <Bell size={13} className="text-fuchsia-400" />
              Comunicados Importantes
            </div>
            <h3 className="text-3xl font-bold text-white tracking-tight">
              Avisos & Novedades
            </h3>
            <p className="text-zinc-400 text-sm max-w-lg mx-auto mt-2">
              Información oficial relevante antes de asistir al evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {AVISOS_FIESTA.map((aviso, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-fuchsia-500/30 transition-colors flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20">
                      {aviso.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1.5">{aviso.titulo}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{aviso.detalle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BONUS DOBLE FIESTA — Banner destacado ── */}
        <div className="mb-24 relative">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 shadow-[0_0_60px_rgba(16,185,129,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-[#050f0a] to-[#05030A]" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full" />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 font-mono text-sm uppercase tracking-widest">
                Beneficio Especial
              </div>

              <ScrollFloat
                containerClassName="justify-center"
                textClassName="font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 uppercase leading-none"
                animationDuration={1.4}
                stagger={0.03}
              >
                Doble Fiesta
              </ScrollFloat>

              <p className="text-2xl sm:text-3xl font-black text-white mb-4 -mt-2">
                {party.bonusDobleFiesta.titulo}
              </p>
              <p className="text-zinc-300 text-lg max-w-2xl mx-auto mb-6 leading-relaxed">
                {party.bonusDobleFiesta.descripcion}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="px-5 py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono font-bold">
                  Fecha: {party.bonusDobleFiesta.fecha}
                </div>
                <div className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-bold">
                  Ingreso Libre con Manilla Oficial Intacta
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ATRACCIONES & CRONOGRAMA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
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
                    <div className="w-2 h-2 bg-fuchsia-500 rounded-full" />
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2rem)] bg-[#0a0a0a] border border-white/10 p-4 rounded-xl shadow">
                    <time className="font-mono text-sm font-bold text-fuchsia-400 block mb-1">{item.hora}</time>
                    <div className="text-zinc-300 text-sm">{item.actividad}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── TICKET INTERACTIVO — Pase de Acceso al final tras leer todo ── */}
        <div id="tu-pase-acceso" className="flex flex-col items-center justify-center pt-10 pb-8 z-10 relative scroll-mt-24">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-fuchsia-500/10 text-fuchsia-300 border border-fuchsia-500/20 font-mono text-xs uppercase tracking-widest mb-3">
              Comunidad Oficial
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Tu Pase de Acceso</h3>
            <p className="text-zinc-400 text-sm max-w-md mx-auto">
              Desprende el talón de la manilla para acceder directamente al canal y grupo de WhatsApp oficial.
            </p>
          </div>

          {/* Desktop */}
          <div className="hidden sm:flex justify-center w-full">
            <TearTicket
              width={620}
              height={220}
              stubSize={160}
              stubBackground="linear-gradient(135deg, #ec4899, #a855f7)"
              className="drop-shadow-[0_0_50px_rgba(236,72,153,0.3)]"
              onTear={() => window.open(meta.whatsappGrupoOficial, "_blank")}
              stub={
                <div className="flex flex-col items-center justify-center h-full w-full gap-1">
                  <Ticket size={24} className="text-white" />
                  <span className="text-white font-black text-xl tracking-wider">GRUPO</span>
                  <span className="text-fuchsia-100 font-mono text-xs uppercase">WhatsApp</span>
                </div>
              }
            >
              <div className="flex flex-col justify-center h-full bg-[#110d18] text-white p-10 border border-fuchsia-500/20 rounded-l-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-fuchsia-500/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
                <h4 className="text-4xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-2 relative z-10">
                  ALCOHORITMO
                </h4>
                <p className="text-lg text-zinc-400 uppercase tracking-widest relative z-10">Halloween V.11 F.255</p>
                <div className="mt-4 inline-flex px-3 py-1 bg-white/5 rounded-lg border border-white/10 w-fit relative z-10">
                  <span className="text-xs text-zinc-300 font-mono">Desprende para unirte al canal</span>
                </div>
              </div>
            </TearTicket>
          </div>

          {/* Mobile */}
          <div className="sm:hidden flex justify-center w-full mt-4">
            <TearTicket
              width={340}
              height={140}
              stubSize={90}
              stubBackground="linear-gradient(135deg, #ec4899, #a855f7)"
              className="drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]"
              onTear={() => window.open(meta.whatsappGrupoOficial, "_blank")}
              stub={
                <div className="flex flex-col items-center justify-center h-full w-full p-2">
                  <Ticket size={18} className="text-white mb-1" />
                  <span className="text-white font-black text-sm tracking-wider">GRUPO</span>
                </div>
              }
            >
              <div className="flex flex-col justify-center h-full bg-[#110d18] text-white p-4 border border-fuchsia-500/20 rounded-l-2xl">
                <h4 className="text-xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-500 mb-1">
                  ALCOHORITMO
                </h4>
                <p className="text-xs text-zinc-400 uppercase tracking-widest">Canal Oficial</p>
              </div>
            </TearTicket>
          </div>
        </div>

      </div>

      {/* ── LIGHTBOX MODAL PARA POSTERS DE COMBOS ── */}
      {activeModalPoster && (
        <div 
          onClick={() => setActiveModalPoster(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full max-h-[92vh] flex flex-col bg-[#0d0914] border border-fuchsia-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(217,70,239,0.35)]"
          >
            {/* Modal header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-black/40">
              <div>
                <h4 className="text-lg font-black text-white">{activeModalPoster.nombre}</h4>
                <p className="text-xs text-zinc-400">{activeModalPoster.subtitulo}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalPoster(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                aria-label="Cerrar poster"
              >
                <X size={20} />
              </button>
            </div>

            {/* Poster view */}
            <div className="overflow-y-auto flex-1 flex items-center justify-center p-3 bg-black">
              <img
                src={activeModalPoster.imagen}
                alt={activeModalPoster.nombre}
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal footer */}
            <div className="p-4 border-t border-white/10 bg-black/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-center sm:text-left">
                <span className="text-xs text-zinc-400 font-mono block">Precios Preventa:</span>
                <span className="text-sm font-bold text-fuchsia-300 font-mono mr-3">VIP: {activeModalPoster.precioVip}</span>
                <span className="text-sm font-bold text-emerald-300 font-mono">GRAL: {activeModalPoster.precioGeneral}</span>
              </div>
              <div className="w-full sm:w-auto flex justify-center">
                <SlideCommit
                  width={220}
                  height={46}
                  radius={23}
                  trackColor="#1a0b2e"
                  handleColor="#d946ef"
                  successColor="#22c55e"
                  label="Desliza: Reservar"
                  doneLabel="Abriendo..."
                  onConfirm={() => {
                    window.open(buildComboWhatsAppUrl(activeModalPoster.nombre), "_blank");
                  }}
                  className="shadow-[0_0_20px_rgba(217,70,239,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

