export interface EventItem {
  id: string;
  titulo: string;
  tituloOriginalNotion: string;
  categoria: string;
  fecha: string;
  diaSemana: string;
  horaInicio: string;
  horaFin: string | null;
  ubicacion: string;
  ubicacion_url?: string | null;
  comision: string;
  esConvocatoria: boolean;
  fecha_expiracion?: string | null;
  banner_url?: string | null;
  descripcion: string;
  convocatoria_descripcion?: string | null;
  basesUrl: string | null;
  imagenUrl?: string;
  encargados: Array<{ nombre: string; telefono: string | null; rol: string }>;
  telefonoReferencia?: string;
  whatsappMensajeSugerido: string;
}

export const ANIVERSARIO_METADATA: Record<string, unknown>;
export const FIESTA_ALCOHORITMO: Record<string, unknown>;
export const EVENTOS_ANIVERSARIO: EventItem[];

export function buildWhatsAppUrl(phoneNumber: string, customMessage?: string): string | null;
export function buildGoogleCalendarUrl(event: EventItem): string;
export function computeEventStatus(event: EventItem, now?: Date): { status: string; label: string; badgeColor: string };
