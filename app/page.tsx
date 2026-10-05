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
  let events: any[] = [];
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.from('eventos').select(`
    id,
    titulo,
    categoria,
    descripcion,
    imagen_url,
    banner_url,
    es_convocatoria,
    fecha_expiracion,
    bases_url,
    convocatoria_descripcion,
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
      detalle,
      telefono_referencia
    ),
    avisos (
      id,
      titulo,
      url_archivo,
      descripcion
    ),
    encargados (
      nombre,
      rol,
      telefono,
      email
    )
  `);
    
    if (data) {
      events = data;
    }
    
    if (error) {
      console.error("Error fetching events:", error);
    }
  } catch (err) {
    console.error("Exception fetching events:", err);
  }

  const mappedEvents: EventItem[] = (events || []).flatMap((ev: any) => {
    const sesiones = (ev.sesiones && ev.sesiones.length > 0) ? ev.sesiones : [null];
    
    return sesiones.map((sesion: any, idx: number) => {
      const rawDate = (sesion?.fecha || ev.fecha_inicio || "2024-01-01").split('T')[0];
      const [year, month, day] = rawDate.split('-');
      const dateObj = new Date(Date.UTC(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10)));
      const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      
      const tituloConDetalle = sesion?.detalle ? `${ev.titulo} - ${sesion.detalle}` : ev.titulo;

      return {
        id: sesion ? `${ev.id}-${sesion.id}` : ev.id,
        titulo: tituloConDetalle,
        tituloOriginalNotion: ev.titulo,
        categoria: ev.categoria || "General",
        fecha: rawDate,
        diaSemana: dias[dateObj.getUTCDay() || 0],
        horaInicio: sesion?.hora_inicio || "00:00",
        horaFin: sesion?.hora_fin || null,
        ubicacion: ev.ubicacion || "Por definir",
        ubicacion_url: ev.ubicacion_url || null,
        comision: ev.comision || "",
        esConvocatoria: ev.es_convocatoria,
        fecha_expiracion: ev.fecha_expiracion,
        banner_url: ev.banner_url,
        descripcion: ev.descripcion || "",
        convocatoria_descripcion: ev.convocatoria_descripcion || null,
        basesUrl: ev.bases_url || ev.avisos?.[0]?.url_archivo || null,
        imagenUrl: ev.imagen_url,
        encargados: ev.encargados || [],
        telefonoReferencia: sesion?.telefono_referencia || null,
        whatsappMensajeSugerido: ev.whatsapp_mensaje || `Hola, tengo una duda sobre ${ev.titulo}`,
        rawAvisos: ev.avisos,
      } as any;
    });
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
