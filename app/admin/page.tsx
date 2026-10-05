import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from './actions'
import AdminDashboardClient from './components/AdminDashboardClient'

export default async function AdminDashboard() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Obtener los eventos desde Supabase con todas las relaciones
  const { data: allEventos, error } = await supabase
    .from('eventos')
    .select(`
      id, slug, titulo, categoria, ubicacion, ubicacion_url, descripcion, imagen_url, banner_url,
      fecha_inicio, fecha_fin, fecha_expiracion, comision, whatsapp_mensaje, es_convocatoria, 
      sesiones(id, fecha, hora_inicio, hora_fin, detalle),
      encargados(id, nombre, telefono, rol, email),
      avisos(id, titulo, url_archivo, descripcion)
    `)
    .order('fecha_inicio', { ascending: true })

  let eventos = allEventos || []

  // Role-Based Access Control (RBAC)
  const superAdminEmail = process.env.NEXT_PUBLIC_SUPERADMIN_EMAIL || 'deymarbrian02@gmail.com';
  if (user.email !== superAdminEmail) {
    eventos = eventos.filter((evento: any) =>
      evento.encargados?.some((encargado: any) => encargado.email === user.email)
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Panel de Administración
            </h1>
            <p className="text-gray-400 mt-1">Conectado como {user.email}</p>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-colors text-sm font-medium"
            >
              Cerrar Sesión
            </button>
          </form>
        </header>

        <AdminDashboardClient eventos={eventos || []} error={error ? error.message : null} userEmail={user.email || ''} />
      </div>
    </div>
  )
}
