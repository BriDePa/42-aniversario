-- Script para actualizar la base de datos con las nuevas columnas
-- Puedes correr esto completo en el SQL Editor de Supabase sin problemas.

ALTER TABLE eventos ADD COLUMN IF NOT EXISTS es_convocatoria BOOLEAN DEFAULT FALSE;
ALTER TABLE eventos ADD COLUMN IF NOT EXISTS slug TEXT;
ALTER TABLE eventos ADD COLUMN IF NOT EXISTS fecha_fin DATE;
ALTER TABLE eventos ADD COLUMN IF NOT EXISTS comision TEXT;
ALTER TABLE eventos ADD COLUMN IF NOT EXISTS whatsapp_mensaje TEXT;

ALTER TABLE encargados ADD COLUMN IF NOT EXISTS email TEXT;
