'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return redirect('/admin/login?error=true')
  }

  revalidatePath('/admin', 'layout')
  redirect('/admin')
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

export async function saveEvent(formData: FormData) {
  const supabase = await createClient()

  const id = formData.get('id') as string | null
  const titulo = formData.get('titulo') as string
  const slug = formData.get('slug') as string
  const categoria = formData.get('categoria') as string
  const ubicacion = formData.get('ubicacion') as string
  const descripcion = formData.get('descripcion') as string | null
  
  const fecha_inicio = formData.get('fecha_inicio') as string
  const fecha_fin = formData.get('fecha_fin') as string | null
  const fecha_expiracion = formData.get('fecha_expiracion') as string | null
  const comision = formData.get('comision') as string | null
  const whatsapp_mensaje = formData.get('whatsapp_mensaje') as string | null
  const ubicacion_url = formData.get('ubicacion_url') as string | null
  const es_convocatoria = formData.get('es_convocatoria') === 'true'
  
  const sesionesStr = formData.get('sesiones') as string
  const sesiones = sesionesStr ? JSON.parse(sesionesStr) : []

  const encargadosStr = formData.get('encargados') as string
  const encargados = encargadosStr ? JSON.parse(encargadosStr) : []

  const avisosStr = formData.get('avisos') as string
  const avisos = avisosStr ? JSON.parse(avisosStr) : []
  
  const imagen = formData.get('imagen') as File | null
  let imagen_url = null
  
  if (imagen && imagen.size > 0) {
    const fileExt = imagen.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const { data, error } = await supabase.storage
      .from('imagenes_eventos')
      .upload(`eventos/${fileName}`, imagen)
      
    if (error) {
      console.error("Error uploading image:", error)
      return { success: false, error: "Error al subir la imagen" }
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('imagenes_eventos')
      .getPublicUrl(`eventos/${fileName}`)
      
    imagen_url = publicUrlData.publicUrl
  }

  const banner = formData.get('banner') as File | null
  let banner_url = null

  if (banner && banner.size > 0) {
    const fileExt = banner.name.split('.').pop()
    const fileName = `banner_${Math.random()}.${fileExt}`
    const { data, error } = await supabase.storage
      .from('imagenes_eventos')
      .upload(`eventos/${fileName}`, banner)
      
    if (error) {
      console.error("Error uploading banner:", error)
      return { success: false, error: "Error al subir el banner" }
    }
    
    const { data: publicUrlData } = supabase.storage
      .from('imagenes_eventos')
      .getPublicUrl(`eventos/${fileName}`)
      
    banner_url = publicUrlData.publicUrl
  }

  let eventId = id

  const eventData: any = { 
    titulo, 
    slug,
    categoria, 
    ubicacion,
    ubicacion_url,
    descripcion,
    fecha_inicio,
    fecha_fin,
    fecha_expiracion,
    comision,
    whatsapp_mensaje,
    es_convocatoria
  }

  if (imagen_url) {
    eventData.imagen_url = imagen_url
  }

  if (banner_url) {
    eventData.banner_url = banner_url
  }

  if (id) {
    const result = await supabase
      .from('eventos')
      .update(eventData)
      .eq('id', id)
      
    if (result.error) {
      console.error("Error updating event:", result.error)
      return { success: false, error: result.error.message }
    }
  } else {
    const result = await supabase
      .from('eventos')
      .insert(eventData)
      .select('id')
      .single()
      
    if (result.error) {
      console.error("Error inserting event:", result.error)
      return { success: false, error: result.error.message }
    }
    eventId = result.data.id
  }

  if (eventId) {
    // SESIONES
    await supabase.from('sesiones').delete().eq('evento_id', eventId)
    if (sesiones.length > 0) {
      const sesionesToInsert = sesiones.map((s: any) => ({
        evento_id: eventId,
        fecha: s.fecha,
        hora_inicio: s.hora_inicio,
        hora_fin: s.hora_fin,
        detalle: s.detalle || null
      }))
      const result = await supabase.from('sesiones').insert(sesionesToInsert)
      if (result.error) console.error("Error inserting sessions:", result.error)
    }

    // ENCARGADOS
    await supabase.from('encargados').delete().eq('evento_id', eventId)
    if (encargados.length > 0) {
      const encargadosToInsert = encargados.map((e: any) => ({
        evento_id: eventId,
        nombre: e.nombre,
        telefono: e.telefono || null,
        rol: e.rol || null,
        email: e.email || null
      }))
      const result = await supabase.from('encargados').insert(encargadosToInsert)
      if (result.error) console.error("Error inserting encargados:", result.error)
    }

    // AVISOS
    await supabase.from('avisos').delete().eq('evento_id', eventId)
    if (avisos.length > 0) {
      const avisosToInsert = avisos.map((a: any) => ({
        evento_id: eventId,
        titulo: a.titulo,
        url_archivo: a.url_archivo || null,
        descripcion: a.descripcion || null
      }))
      const result = await supabase.from('avisos').insert(avisosToInsert)
      if (result.error) console.error("Error inserting avisos:", result.error)
    }
  }

  revalidatePath('/admin', 'layout')
  revalidatePath('/', 'layout')
  
  return { success: true }
}
