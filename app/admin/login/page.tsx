import { login } from '../actions'

export default async function LoginPage(
  props: {
    searchParams: Promise<{ error?: string }>
  }
) {
  const searchParams = await props.searchParams;
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-white p-4">
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-2xl">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Centro de Control
          </h1>
          <p className="text-gray-400 mt-2 text-sm">
            Inicia sesión para gestionar los eventos del Aniversario
          </p>
        </div>

        <form action={login} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="tu@correo.com"
              required
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-500"
            />
          </div>

          {searchParams?.error && (
            <div className="p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center">
              Credenciales incorrectas. Intenta nuevamente.
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/25 transition-all active:scale-95"
          >
            Ingresar al Panel
          </button>
        </form>
        
      </div>
    </div>
  )
}
