import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://musfwcptnfhokwxyfdfo.supabase.co'
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_y15dsFX1x5sSQ_zmPRmd7g_LqQgHS7M'

  return createBrowserClient(supabaseUrl, supabaseKey)
}
