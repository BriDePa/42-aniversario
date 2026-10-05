-- Habilitar extensión para UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de Eventos
CREATE TABLE eventos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  titulo TEXT NOT NULL,
  categoria TEXT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE,
  ubicacion TEXT,
  comision TEXT,
  descripcion TEXT,
  imagen_url TEXT,
  whatsapp_mensaje TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabla de Sesiones (Para eventos de múltiples días/horarios)
CREATE TABLE sesiones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  evento_id UUID REFERENCES eventos(id) ON DELETE CASCADE,
  fecha DATE NOT NULL,
  hora_inicio TIME,
  hora_fin TIME,
  detalle TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabla de Avisos / Comunicados (Múltiples convocatorias por evento)
CREATE TABLE avisos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  evento_id UUID REFERENCES eventos(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  url_archivo TEXT,
  descripcion TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Tabla de Encargados
CREATE TABLE encargados (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  evento_id UUID REFERENCES eventos(id) ON DELETE CASCADE,
  nombre TEXT NOT NULL,
  telefono TEXT,
  rol TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Habilitar RLS (Row Level Security) para que sea público leer, pero protegido escribir
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE sesiones ENABLE ROW LEVEL SECURITY;
ALTER TABLE avisos ENABLE ROW LEVEL SECURITY;
ALTER TABLE encargados ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura (Públicas)
CREATE POLICY "Eventos son públicos" ON eventos FOR SELECT USING (true);
CREATE POLICY "Sesiones son públicas" ON sesiones FOR SELECT USING (true);
CREATE POLICY "Avisos son públicos" ON avisos FOR SELECT USING (true);
CREATE POLICY "Encargados son públicos" ON encargados FOR SELECT USING (true);

-- Políticas de escritura (Solo usuarios autenticados)
CREATE POLICY "Solo admins modifican eventos" ON eventos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Solo admins modifican sesiones" ON sesiones FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Solo admins modifican avisos" ON avisos FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Solo admins modifican encargados" ON encargados FOR ALL USING (auth.role() = 'authenticated');
