import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CalendarView } from "@/components/CalendarView";
import { EventsCarousel } from "@/components/EventsCarousel";
import { ConvocatoriasSection } from "@/components/ConvocatoriasSection";
import { FullSchedule } from "@/components/FullSchedule";
import { PartySection } from "@/components/PartySection";
import { Footer } from "@/components/Footer";
import TextLoop from "@/components/TextLoop";
import { createClient } from "@/utils/supabase/server";
import { EventItem } from "@/lib/eventsData";

export default async function Home() {
  const supabase = await createClient();
  const { data: events, error } = await supabase.from('eventos').select(`
    id,
    titulo,
    categoria,
    descripcion,
    imagen_url,
    es_convocatoria,
    fecha_inicio,
    ubicacion,
    ubicacion_url,
    whatsapp_mensaje,
    comision,
    sesiones (
      id,
      fecha,
      hora_inicio,
      hora_fin,
      detalle
    ),
    avisos (
      id,
      titulo,
      url_archivo,
      descripcion
    )
  `);

  if (error) {
    console.error("Error fetching events:", error);
  }

  const mappedEvents: EventItem[] = (events || []).map((ev: any) => {
    const primeraSesion = ev.sesiones?.[0];
    const rawDate = (primeraSesion?.fecha || ev.fecha_inicio || "2024-01-01").split('T')[0];
    const [year, month, day] = rawDate.split('-');
    const dateObj = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)));
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    return {
      id: ev.id,
      titulo: ev.titulo,
      tituloOriginalNotion: ev.titulo,
      categoria: ev.categoria || "General",
      fecha: rawDate,
      diaSemana: dias[dateObj.getUTCDay() || 0],
      horaInicio: primeraSesion?.hora_inicio || "00:00",
      horaFin: primeraSesion?.hora_fin || null,
      ubicacion: ev.ubicacion || "Por definir",
      ubicacion_url: ev.ubicacion_url || null,
      comision: ev.comision || "",
      esConvocatoria: ev.es_convocatoria,
      descripcion: ev.descripcion || "",
      basesUrl: ev.avisos?.[0]?.url_archivo || null,
      imagenUrl: ev.imagen_url,
      encargados: [],
      whatsappMensajeSugerido: ev.whatsapp_mensaje || `Hola, tengo una duda sobre ${ev.titulo}`,
      rawAvisos: ev.avisos,
    } as any;
  });

  return (
    <main className="min-h-screen bg-[#0B0813] selection:bg-fuchsia-500/30 overflow-x-hidden">
      <Navbar />
      <Hero />
      <CalendarView events={mappedEvents} />
      
      <div className="w-full my-4 py-8 overflow-hidden">
        <TextLoop text="CONVOCATORIAS" separator="✦" shape="line" fontSize={32} speed={120} />
      </div>
      <ConvocatoriasSection events={mappedEvents} />

      <div className="w-full my-4 py-8 overflow-hidden">
        <TextLoop text="PROGRAMA COMPLETO" separator="✦" shape="line" fontSize={32} speed={120} />
      </div>
      <FullSchedule events={mappedEvents} />

      <Footer />
    </main>
  );
}
