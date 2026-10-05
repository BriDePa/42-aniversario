"use client"

import { useEffect, useState, useTransition, useRef } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Plus, Trash2, X, Image as ImageIcon } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { saveEvent } from "../actions"

const eventSchema = z.object({
  id: z.string().optional(),
  slug: z.string().min(1, "Slug requerido"),
  titulo: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  categoria: z.string().min(2, "La categoría es requerida"),
  ubicacion: z.string().min(2, "La ubicación es requerida"),
  ubicacion_url: z.string().optional(),
  descripcion: z.string().optional(),
  fecha_inicio: z.string().min(1, "Fecha de inicio requerida"),
  fecha_fin: z.string().optional(),
  comision: z.string().optional(),
  whatsapp_mensaje: z.string().optional(),
  es_convocatoria: z.boolean().optional(),
  sesiones: z.array(z.object({
    id: z.string().optional(),
    fecha: z.string().min(1, "Fecha es requerida"),
    hora_inicio: z.string().min(1, "Hora inicio requerida"),
    hora_fin: z.string().min(1, "Hora fin requerida"),
    detalle: z.string().optional(),
  })).optional(),
  encargados: z.array(z.object({
    id: z.string().optional(),
    nombre: z.string().min(1, "Nombre requerido"),
    telefono: z.string().optional(),
    rol: z.string().optional(),
    email: z.string().optional(),
  })).optional(),
  avisos: z.array(z.object({
    id: z.string().optional(),
    titulo: z.string().min(1, "Título requerido"),
    url_archivo: z.string().optional(),
    descripcion: z.string().optional(),
  })).optional(),
})

type EventFormValues = z.infer<typeof eventSchema>

type Evento = {
  id: string
  slug?: string | null
  titulo: string
  categoria: string
  ubicacion: string
  ubicacion_url?: string | null
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

export function EventEditorModal({
  isOpen,
  onClose,
  event,
}: {
  isOpen: boolean
  onClose: () => void
  event: Evento | null
}) {
  const isEditing = !!event
  const [isPending, startTransition] = useTransition()
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      titulo: "",
      slug: "",
      categoria: "",
      ubicacion: "",
      ubicacion_url: "",
      descripcion: "",
      fecha_inicio: "",
      fecha_fin: "",
      comision: "",
      whatsapp_mensaje: "",
      es_convocatoria: false,
      sesiones: [],
      encargados: [],
      avisos: [],
    },
  })

  const { fields: sesionesFields, append: appendSesion, remove: removeSesion } = useFieldArray({
    control,
    name: "sesiones",
  })
  
  const { fields: encargadosFields, append: appendEncargado, remove: removeEncargado } = useFieldArray({
    control,
    name: "encargados",
  })

  const { fields: avisosFields, append: appendAviso, remove: removeAviso } = useFieldArray({
    control,
    name: "avisos",
  })

  // Prefill the form when an event is passed
  useEffect(() => {
    if (event) {
      reset({
        id: event.id,
        titulo: event.titulo || "",
        slug: event.slug || "",
        categoria: event.categoria || "",
        ubicacion: event.ubicacion || "",
        ubicacion_url: event.ubicacion_url || "",
        descripcion: event.descripcion || "",
        fecha_inicio: event.fecha_inicio ? new Date(event.fecha_inicio).toISOString().split('T')[0] : "",
        fecha_fin: event.fecha_fin ? new Date(event.fecha_fin).toISOString().split('T')[0] : "",
        comision: event.comision || "",
        whatsapp_mensaje: event.whatsapp_mensaje || "",
        es_convocatoria: !!event.es_convocatoria,
        sesiones: event.sesiones?.map(s => ({
          id: s.id,
          fecha: s.fecha,
          hora_inicio: s.hora_inicio,
          hora_fin: s.hora_fin,
          detalle: s.detalle || "",
        })) || [],
        encargados: event.encargados?.map(e => ({
          id: e.id,
          nombre: e.nombre,
          telefono: e.telefono || "",
          rol: e.rol || "",
          email: e.email || "",
        })) || [],
        avisos: event.avisos?.map(a => ({
          id: a.id,
          titulo: a.titulo,
          url_archivo: a.url_archivo || "",
          descripcion: a.descripcion || "",
        })) || [],
      })
      setImagePreview(event.imagen_url || null)
    } else {
      reset({
        id: undefined,
        titulo: "",
        slug: "",
        categoria: "",
        ubicacion: "",
        ubicacion_url: "",
        descripcion: "",
        fecha_inicio: "",
        fecha_fin: "",
        comision: "",
        whatsapp_mensaje: "",
        es_convocatoria: false,
        sesiones: [],
        encargados: [],
        avisos: [],
      })
      setImagePreview(null)
    }
    setImageFile(null)
    setErrorMsg(null)
  }, [event, isOpen, reset])

  const onSubmit = (data: EventFormValues) => {
    setErrorMsg(null)
    startTransition(async () => {
      const formData = new FormData()
      if (data.id) formData.append("id", data.id)
      formData.append("titulo", data.titulo)
      formData.append("slug", data.slug)
      formData.append("categoria", data.categoria)
      formData.append("ubicacion", data.ubicacion)
      if (data.ubicacion_url) formData.append("ubicacion_url", data.ubicacion_url)
      if (data.descripcion) formData.append("descripcion", data.descripcion)
      
      formData.append("fecha_inicio", data.fecha_inicio)
      if (data.fecha_fin) formData.append("fecha_fin", data.fecha_fin)
      if (data.comision) formData.append("comision", data.comision)
      if (data.whatsapp_mensaje) formData.append("whatsapp_mensaje", data.whatsapp_mensaje)
      formData.append("es_convocatoria", (!!data.es_convocatoria).toString())
      
      formData.append("sesiones", JSON.stringify(data.sesiones || []))
      formData.append("encargados", JSON.stringify(data.encargados || []))
      formData.append("avisos", JSON.stringify(data.avisos || []))
      
      if (imageFile) {
        formData.append("imagen", imageFile)
      }

      const result = await saveEvent(formData as any) // Note: saveEvent accepts FormData directly now
      if (result.success) {
        onClose()
      } else {
        setErrorMsg(result.error || "Error al guardar el evento")
      }
    })
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setImageFile(file)
      const url = URL.createObjectURL(file)
      setImagePreview(url)
    }
  }

  const removeImage = () => {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="bg-[#0B0813]/95 backdrop-blur-md border-l-cyan-500/30 text-white w-full sm:max-w-xl md:max-w-2xl max-h-[90vh] overflow-y-auto shadow-[-10px_0_30px_rgba(34,211,238,0.15)] z-50">
        <DialogHeader className="mb-8">
          <DialogTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
            {isEditing ? "Editar Evento" : "Nuevo Evento"}
          </DialogTitle>
          <DialogDescription className="text-zinc-400 text-sm">
            {isEditing
              ? "Modifica los detalles del evento a continuación."
              : "Ingresa los detalles para crear un nuevo evento. Los cambios se reflejarán inmediatamente."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pb-20">
          {errorMsg && (
            <div className="p-3 rounded bg-red-500/20 border border-red-500/50 text-red-200 text-sm">
              {errorMsg}
            </div>
          )}

          <Accordion className="w-full space-y-4">
            
            {/* INFORMACION BASICA */}
            <AccordionItem value="info-basica" className="border-white/10 border bg-white/5 rounded-xl px-4 overflow-hidden">
              <AccordionTrigger className="text-zinc-300 hover:text-white hover:no-underline font-semibold py-4">
                Información Básica
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-4">
                <div className="space-y-2">
                  <Label htmlFor="titulo" className="text-zinc-300">Título</Label>
                  <Input id="titulo" {...register("titulo")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                  {errors.titulo && <p className="text-red-400 text-xs">{errors.titulo.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="slug" className="text-zinc-300">Slug</Label>
                  <Input id="slug" {...register("slug")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                  {errors.slug && <p className="text-red-400 text-xs">{errors.slug.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="categoria" className="text-zinc-300">Categoría</Label>
                    <Input id="categoria" {...register("categoria")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                    {errors.categoria && <p className="text-red-400 text-xs">{errors.categoria.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ubicacion" className="text-zinc-300">Ubicación</Label>
                    <Input id="ubicacion" {...register("ubicacion")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                    {errors.ubicacion && <p className="text-red-400 text-xs">{errors.ubicacion.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ubicacion_url" className="text-zinc-300">Link Ubicación (Opcional)</Label>
                  <Input id="ubicacion_url" type="url" {...register("ubicacion_url")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                  {errors.ubicacion_url && <p className="text-red-400 text-xs">{errors.ubicacion_url.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fecha_inicio" className="text-zinc-300">Fecha Inicio</Label>
                    <Input type="date" id="fecha_inicio" {...register("fecha_inicio")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                    {errors.fecha_inicio && <p className="text-red-400 text-xs">{errors.fecha_inicio.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="fecha_fin" className="text-zinc-300">Fecha Fin</Label>
                    <Input type="date" id="fecha_fin" {...register("fecha_fin")} className="bg-black/20 border-white/10 text-white focus:border-cyan-500" />
                    {errors.fecha_fin && <p className="text-red-400 text-xs">{errors.fecha_fin.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label className="text-zinc-300">Comisión</Label>
                  <Select onValueChange={(val) => setValue("comision", val || undefined)} defaultValue={watch("comision") || ""}>
                    <SelectTrigger className="bg-black/20 border-white/10 text-white focus:ring-cyan-500">
                      <SelectValue placeholder="Selecciona una comisión" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0B0813] border-white/10 text-white">
                      <SelectItem value="Logística">Logística</SelectItem>
                      <SelectItem value="Difusión">Difusión</SelectItem>
                      <SelectItem value="Técnica">Técnica</SelectItem>
                      <SelectItem value="Ninguna">Ninguna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion" className="text-zinc-300">Descripción</Label>
                  <Textarea id="descripcion" {...register("descripcion")} className="bg-black/20 border-white/10 text-white min-h-[100px] focus:border-cyan-500" />
                  {errors.descripcion && <p className="text-red-400 text-xs">{errors.descripcion.message}</p>}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* MULTIMEDIA & REDES */}
            <AccordionItem value="multimedia" className="border-white/10 border bg-white/5 rounded-xl px-4 overflow-hidden">
              <AccordionTrigger className="text-zinc-300 hover:text-white hover:no-underline font-semibold py-4">
                Multimedia & Redes
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-4">
                <div className="space-y-2">
                  <Label className="text-zinc-300">Imagen del Evento</Label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-white/10 border-dashed rounded-xl bg-black/20 hover:bg-black/30 transition-colors relative group">
                    {imagePreview ? (
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imagePreview} alt="Preview" className="object-cover w-full h-full" />
                        <button
                          type="button"
                          onClick={removeImage}
                          className="absolute top-2 right-2 p-1 bg-black/50 hover:bg-red-500/80 rounded-full text-white backdrop-blur-sm transition-all"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-10 w-10 text-zinc-400 group-hover:text-purple-400 transition-colors" />
                        <div className="flex text-sm text-zinc-400 justify-center">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-purple-400 hover:text-purple-300 bg-transparent"
                          >
                            <span>Sube un archivo</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
                          </label>
                          <p className="pl-1">o arrastra y suelta</p>
                        </div>
                        <p className="text-xs text-zinc-500">PNG, JPG, GIF hasta 10MB</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="whatsapp_mensaje" className="text-zinc-300">Mensaje de WhatsApp Predefinido</Label>
                  <Textarea id="whatsapp_mensaje" {...register("whatsapp_mensaje")} className="bg-black/20 border-white/10 text-white min-h-[80px] focus:border-cyan-500" />
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* SESIONES */}
            <AccordionItem value="sesiones" className="border-white/10 border bg-white/5 rounded-xl px-4 overflow-hidden">
              <AccordionTrigger className="text-zinc-300 hover:text-white hover:no-underline font-semibold py-4">
                Sesiones
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-4">
                <div className="flex justify-end">
                  <Button type="button" variant="outline" size="sm" onClick={() => appendSesion({ fecha: "", hora_inicio: "", hora_fin: "", detalle: "" })} className="bg-purple-500/20 border-purple-500/50 text-purple-300 hover:bg-purple-500/30">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Sesión
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {sesionesFields.map((field, index) => (
                    <div key={field.id} className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-zinc-400">Sesión {index + 1}</h4>
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeSesion(index)} className="h-6 w-6 text-zinc-500 hover:text-red-400 hover:bg-red-400/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Fecha</Label>
                          <Input type="date" {...register(`sesiones.${index}.fecha` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Hora Inicio</Label>
                          <Input type="time" {...register(`sesiones.${index}.hora_inicio` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Hora Fin</Label>
                          <Input type="time" {...register(`sesiones.${index}.hora_fin` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs text-zinc-400">Detalle (Opcional)</Label>
                        <Input placeholder="Ej. Charla principal..." {...register(`sesiones.${index}.detalle` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                      </div>
                    </div>
                  ))}
                  {sesionesFields.length === 0 && (
                    <div className="text-center py-6 text-zinc-500 text-sm border border-dashed border-white/10 rounded-xl">
                      No hay sesiones programadas.
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* ENCARGADOS */}
            <AccordionItem value="encargados" className="border-white/10 border bg-white/5 rounded-xl px-4 overflow-hidden">
              <AccordionTrigger className="text-zinc-300 hover:text-white hover:no-underline font-semibold py-4">
                Encargados
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-4">
                <div className="flex justify-end">
                  <Button type="button" variant="outline" size="sm" onClick={() => appendEncargado({ nombre: "", telefono: "", rol: "", email: "" })} className="bg-cyan-500/20 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Encargado
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {encargadosFields.map((field, index) => (
                    <div key={field.id} className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-zinc-400">Encargado {index + 1}</h4>
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeEncargado(index)} className="h-6 w-6 text-zinc-500 hover:text-red-400 hover:bg-red-400/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Nombre</Label>
                          <Input {...register(`encargados.${index}.nombre` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Teléfono</Label>
                          <Input {...register(`encargados.${index}.telefono` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Rol</Label>
                          <Input placeholder="Ej. Organizador, Moderador..." {...register(`encargados.${index}.rol` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                        <div className="space-y-1.5">
                          <Label className="text-xs text-zinc-400">Email (Acceso)</Label>
                          <Input type="email" placeholder="Para RBAC..." {...register(`encargados.${index}.email` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                        </div>
                      </div>
                    </div>
                  ))}
                  {encargadosFields.length === 0 && (
                    <div className="text-center py-6 text-zinc-500 text-sm border border-dashed border-white/10 rounded-xl">
                      No hay encargados registrados.
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* AVISOS & CONVOCATORIAS */}
            <AccordionItem value="avisos" className="border-white/10 border bg-white/5 rounded-xl px-4 overflow-hidden">
              <AccordionTrigger className="text-zinc-300 hover:text-white hover:no-underline font-semibold py-4">
                Avisos & Convocatorias
              </AccordionTrigger>
              <AccordionContent className="space-y-4 pb-4">
                <div className="flex items-center space-x-2 py-2">
                  <Switch 
                    id="es_convocatoria" 
                    checked={watch("es_convocatoria")} 
                    onCheckedChange={(val) => setValue("es_convocatoria", val)}
                  />
                  <Label htmlFor="es_convocatoria" className="text-zinc-300">Es Convocatoria</Label>
                </div>
                
                <div className="flex justify-end border-t border-white/10 pt-4 mt-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => appendAviso({ titulo: "", url_archivo: "", descripcion: "" })} className="bg-blue-500/20 border-blue-500/50 text-blue-300 hover:bg-blue-500/30">
                    <Plus className="w-4 h-4 mr-2" />
                    Añadir Aviso
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {avisosFields.map((field, index) => (
                    <div key={field.id} className="p-4 rounded-xl bg-black/20 border border-white/10 space-y-3 relative">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-zinc-400">Aviso {index + 1}</h4>
                        <Button type="button" variant="ghost" size="icon" onClick={() => removeAviso(index)} className="h-6 w-6 text-zinc-500 hover:text-red-400 hover:bg-red-400/10">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="space-y-1.5">
                        <Label className="text-xs text-zinc-400">Título</Label>
                        <Input {...register(`avisos.${index}.titulo` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs text-zinc-400">URL Archivo / Enlace</Label>
                        <Input type="url" {...register(`avisos.${index}.url_archivo` as const)} className="bg-black/40 border-white/10 h-8 text-sm focus:border-cyan-500" />
                      </div>
                      <div className="space-y-1.5">
                        <Label className="text-xs text-zinc-400">Descripción</Label>
                        <Textarea {...register(`avisos.${index}.descripcion` as const)} className="bg-black/40 border-white/10 min-h-[60px] text-sm focus:border-cyan-500" />
                      </div>
                    </div>
                  ))}
                  {avisosFields.length === 0 && (
                    <div className="text-center py-6 text-zinc-500 text-sm border border-dashed border-white/10 rounded-xl">
                      No hay avisos para este evento.
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

          <div className="flex justify-end gap-3 pt-6 border-t border-white/10 sticky bottom-0 bg-[#0B0813]/95 pb-4 backdrop-blur-md z-10">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isPending}
              className="bg-transparent border-white/10 text-white hover:bg-white/10 hover:text-white"
            >
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={isPending}
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all border-none"
            >
              {isPending ? "Guardando..." : "Guardar"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
