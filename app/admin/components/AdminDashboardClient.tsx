"use client"

import { useState, useMemo } from "react"
import { EventEditorModal } from "./EventEditorModal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, MapPinIcon, UsersIcon, PenSquareIcon, TrashIcon, LinkIcon, BellIcon, MegaphoneIcon } from "lucide-react"

type Encargado = {
  id: string
  nombre: string
  telefono: string
  rol: string
  email: string
}

type Evento = {
  id: string
  slug?: string | null
  titulo: string
  categoria: string
  ubicacion: string
  descripcion: string | null
  imagen_url?: string | null
  banner_url?: string | null
  fecha_inicio?: string | null
  fecha_fin?: string | null
  fecha_expiracion?: string | null
  whatsapp_mensaje?: string | null
  es_convocatoria?: boolean
  sesiones?: any[]
  encargados?: Encargado[]
  avisos?: any[]
}

export default function AdminDashboardClient({
  eventos,
  error,
  userEmail,
}: {
  eventos: Evento[]
  error: string | null
  userEmail: string
}) {
  const [selectedEvent, setSelectedEvent] = useState<Evento | null>(null)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [modalTabConfig, setModalTabConfig] = useState<{accordion?: string, tab?: string}>({})

  const superAdminEmail = process.env.NEXT_PUBLIC_SUPERADMIN_EMAIL || 'deymarbrian02@gmail.com';
  const isSuperAdmin = userEmail === superAdminEmail;

  // Obtener usuarios únicos a partir de los encargados de los eventos
  const usuarios = useMemo(() => {
    const userMap = new Map<string, Encargado>()
    eventos?.forEach(evento => {
      evento.encargados?.forEach(encargado => {
        if (!userMap.has(encargado.email)) {
          userMap.set(encargado.email, encargado)
        }
      })
    })
    return Array.from(userMap.values())
  }, [eventos])

  const handleEdit = (evento: Evento) => {
    setSelectedEvent(evento)
    setModalTabConfig({})
    setIsSheetOpen(true)
  }

  const handleCreate = () => {
    setSelectedEvent(null)
    setModalTabConfig({})
    setIsSheetOpen(true)
  }

  const handleCreateAviso = (evento: Evento) => {
    setSelectedEvent(evento)
    setModalTabConfig({ accordion: "avisos", tab: "aviso" })
    setIsSheetOpen(true)
  }

  const handleCreateConvocatoria = (evento: Evento) => {
    setSelectedEvent(evento)
    setModalTabConfig({ accordion: "avisos", tab: "convocatoria" })
    setIsSheetOpen(true)
  }

  const handleClose = () => {
    setIsSheetOpen(false)
    setTimeout(() => setSelectedEvent(null), 300)
  }

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "Fecha no definida"
    return new Date(dateString).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "short",
      year: "numeric"
    })
  }

  if (error) {
    return <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">Error: {error}</div>
  }

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-white">Resumen del Sistema</h2>
        {isSuperAdmin && (
          <button
            onClick={handleCreate}
            className="px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] font-medium text-sm flex items-center gap-2"
          >
            <span className="text-lg leading-none">+</span> Nuevo Evento
          </button>
        )}
      </div>

      <Tabs defaultValue="eventos" className="w-full">
        <TabsList className="bg-white/5 border border-white/10 p-1 rounded-xl mb-8 flex flex-wrap h-auto">
          <TabsTrigger 
            value="eventos"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white text-gray-400 rounded-lg transition-all"
          >
            Eventos ({eventos?.length || 0})
          </TabsTrigger>
          <TabsTrigger 
            value="usuarios"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500/20 data-[state=active]:to-blue-500/20 data-[state=active]:text-white text-gray-400 rounded-lg transition-all"
          >
            Usuarios ({usuarios.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="eventos" className="mt-0 outline-none">
          {!eventos || eventos.length === 0 ? (
            <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-400">No hay eventos creados todavía.</p>
              <p className="text-sm text-gray-500 mt-2">Crea tu primer evento para verlo aquí.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventos.map((evento) => (
                <div 
                  key={evento.id} 
                  className="group relative bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 flex flex-col"
                >
                  {/* Banner/Image Area */}
                  <div className="h-40 w-full relative bg-gray-900 overflow-hidden">
                    {evento.banner_url || evento.imagen_url ? (
                      <img 
                        src={evento.banner_url || evento.imagen_url || ''} 
                        alt={evento.titulo}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <span className="text-gray-600 font-medium">Sin imagen</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-xs font-medium text-cyan-400">
                        {evento.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 leading-tight">
                      {evento.titulo}
                    </h3>
                    
                    <div className="space-y-2 mt-auto mb-6">
                      <div className="flex items-center text-sm text-gray-400">
                        <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 shrink-0" />
                        {formatDate(evento.fecha_inicio)}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <MapPinIcon className="w-4 h-4 mr-2 text-gray-500 shrink-0" />
                        <span className="truncate">{evento.ubicacion}</span>
                      </div>
                      {evento.es_convocatoria && (
                        <div className="inline-flex items-center mt-2 px-2 py-0.5 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-500 font-medium">
                          Convocatoria Abierta
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 justify-between">
                      <div className="flex gap-2 w-full sm:w-auto">
                        <button 
                          onClick={() => handleEdit(evento)}
                          className="flex-1 sm:flex-none flex items-center justify-center py-2 px-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors gap-2"
                          title="Editar evento"
                        >
                          <PenSquareIcon className="w-4 h-4" />
                          Editar
                        </button>
                        <button 
                          onClick={() => handleCreateAviso(evento)}
                          className="flex items-center justify-center py-2 px-3 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 rounded-lg text-sm text-blue-400 transition-colors gap-1"
                          title="Crear Aviso"
                        >
                          <BellIcon className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleCreateConvocatoria(evento)}
                          className="flex items-center justify-center py-2 px-3 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/20 rounded-lg text-sm text-fuchsia-400 transition-colors gap-1"
                          title="Crear Convocatoria"
                        >
                          <MegaphoneIcon className="w-4 h-4" />
                        </button>
                      </div>
                      
                      {isSuperAdmin && (
                        <button 
                          className="flex-1 sm:flex-none flex items-center justify-center py-2 px-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-sm text-red-400 transition-colors gap-2"
                        >
                          <TrashIcon className="w-4 h-4" />
                          Eliminar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="usuarios" className="mt-0 outline-none">
          {usuarios.length === 0 ? (
            <div className="text-center py-16 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
              <p className="text-gray-400">No hay usuarios registrados como encargados.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usuarios.map((usuario) => (
                <div 
                  key={usuario.email} 
                  className="bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-6 backdrop-blur-sm transition-all flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shrink-0">
                    {usuario.nombre ? usuario.nombre.charAt(0).toUpperCase() : usuario.email.charAt(0).toUpperCase()}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-white font-medium truncate">{usuario.nombre || "Usuario"}</h3>
                    <p className="text-sm text-gray-400 truncate mb-2" title={usuario.email}>{usuario.email}</p>
                    <div className="inline-flex items-center px-2 py-1 bg-white/10 rounded-md text-xs text-gray-300 font-medium">
                      {usuario.rol || "Organizador"}
                    </div>
                    {usuario.telefono && (
                      <p className="text-xs text-gray-500 mt-2">Tel: {usuario.telefono}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>

      <EventEditorModal
        isOpen={isSheetOpen}
        onClose={handleClose}
        event={selectedEvent}
        userEmail={userEmail}
        defaultAccordion={modalTabConfig.accordion}
        defaultTab={modalTabConfig.tab}
      />
    </div>
  )
}
