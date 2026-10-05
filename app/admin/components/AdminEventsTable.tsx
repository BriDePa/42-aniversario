"use client"

import { useState } from "react"
import { EventEditorModal } from "./EventEditorModal"

type Evento = {
  id: string
  slug?: string | null
  titulo: string
  categoria: string
  ubicacion: string
  descripcion: string | null
  imagen_url?: string | null
  fecha_inicio?: string | null
  fecha_fin?: string | null
  comision?: string | null
  whatsapp_mensaje?: string | null
  es_convocatoria?: boolean
  sesiones?: any[]
  encargados?: any[]
  avisos?: any[]
}

export default function AdminEventsTable({
  eventos,
  error,
}: {
  eventos: Evento[]
  error: string | null
}) {
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const handleEdit = (evento: Evento) => {
    setSelectedEvent(evento)
    setIsSheetOpen(true)
  }

  const handleCreate = () => {
    setSelectedEvent(null)
    setIsSheetOpen(true)
  }

  const handleClose = () => {
    setIsSheetOpen(false)
    setTimeout(() => setSelectedEvent(null), 300) // Clear after animation
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h2 className="text-xl font-semibold text-white">Tus Eventos Creados</h2>
        <button
          onClick={handleCreate}
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-lg transition-colors text-sm font-medium shadow-[0_0_15px_rgba(34,211,238,0.3)]"
        >
          + Nuevo Evento
        </button>
      </div>

      {error ? (
        <p className="text-red-400">Hubo un error cargando los eventos: {error}</p>
      ) : !eventos || eventos.length === 0 ? (
        <p className="text-gray-400">No hay eventos creados. ¡Sincroniza la base de datos!</p>
      ) : (
        <div className="overflow-x-auto w-full pb-4">
          <table className="w-full min-w-[600px] text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-gray-400 font-medium text-sm">Título</th>
                <th className="py-3 px-4 text-gray-400 font-medium text-sm">Categoría</th>
                <th className="py-3 px-4 text-gray-400 font-medium text-sm">Ubicación</th>
                <th className="py-3 px-4 text-gray-400 font-medium text-sm text-right">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {eventos.map((evento) => (
                <tr key={evento.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-3 px-4 font-medium">{evento.titulo}</td>
                  <td className="py-3 px-4 text-gray-300 text-sm">
                    <span className="px-2 py-1 bg-white/10 rounded-full">{evento.categoria}</span>
                  </td>
                  <td className="py-3 px-4 text-gray-400 text-sm">{evento.ubicacion}</td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleEdit(evento)}
                      className="text-cyan-400 hover:text-cyan-300 text-sm font-medium mr-3"
                    >
                      Editar
                    </button>
                    <button className="text-red-400 hover:text-red-300 text-sm font-medium">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <EventEditorModal
        isOpen={isSheetOpen}
        onClose={handleClose}
        event={selectedEvent}
      />
    </div>
  )
}
