-- Vaciando tablas por si se repite la ejecución
DELETE FROM encargados;
DELETE FROM avisos;
DELETE FROM sesiones;
DELETE FROM eventos;

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'coloquio-ia'), 
  'coloquio-ia', 'Coloquio sobre ética, gobernanza y normativa de la IA', 'Académico', '2026-10-08', '2026-10-09', 'Audiovisual / Auditorio', 'Dirección', 'Espacio de debate académico sobre los desafíos éticos, marcos regulatorios y gobernanza de la Inteligencia Artificial en Bolivia y la región.', 'Hola, deseo información e inscripción para el Coloquio de IA.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'coloquio-ia'),
  '2026-10-08', '14:00', '18:00', 'Día 1: Introducción y Marcos Regulatorios'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'coloquio-ia'),
  '2026-10-09', '14:00', '18:00', 'Día 2: Mesas redondas y conclusiones'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'), 
  'futsal-varones', 'Torneo de Futsal Varones', 'Deportes', '2026-10-08', '2026-10-16', 'Canchas', 'Deportes', 'Campeonato de futsal varones inter-semestres. Se juega en distintas fechas.', 'Hola, quisiera consultar sobre el fixture y planillas del Torneo de Futsal Varones.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-08', '08:30', '13:00', 'Fase de Grupos (Día 1)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-09', '08:30', '13:00', 'Fase de Grupos (Día 2)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-10', '08:30', '13:00', 'Fase de Grupos (Día 3)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-13', '08:30', '13:00', 'Fase de Grupos (Día 4)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-14', '08:30', '13:00', 'Cuartos de final'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-15', '08:30', '13:00', 'Semifinales'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  '2026-10-16', '08:30', '13:00', 'La Gran Final'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  'Luis Herrera', '59160161167', 'Coordinador Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-varones'),
  'Sergio Zabaleta', '59165536176', 'Coordinador Deportes'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'captura-bandera'), 
  'captura-bandera', 'Captura la Bandera (CTF)', 'Académico', '2026-10-10', '2026-10-16', 'Laboratorios / Online', 'Grupos de estudio', 'Competencia de ciberseguridad, hacking ético y criptografía a través de acertijos. Inicia el sábado y dura toda la semana.', 'Hola Andrés, quiero inscribir a mi equipo para la competencia Captura la Bandera.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'captura-bandera'),
  '2026-10-10', '16:00', NULL, 'Inauguración y liberación de retos'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'captura-bandera'),
  'Andres Gómez', '59179631539', 'Encargado CTF'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'bautizo'), 
  'bautizo', 'Gran Bautizo de Nuevos Estudiantes', 'Tradición', '2026-10-10', NULL, 'Patio Central / Externo', 'Bautizo', 'La bienvenida tradicional para los nuevos ingresantes a la carrera de Informática.', 'Hola, tengo dudas sobre el horario y punto de encuentro del Bautizo.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'bautizo'),
  '2026-10-10', '08:00', '14:00', 'Bautizo'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'bautizo'),
  'Ericka Barrionuevo', '59169922008', 'Comisión Bautizo'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'bautizo'),
  'Cristian Velasco', '59160111070', 'Comisión Bautizo'
);
INSERT INTO avisos (evento_id, titulo, descripcion) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'bautizo'),
  'Convocatoria Oficial de Bautizo', 'Llamado a todos los estudiantes de primer año.'
);
INSERT INTO avisos (evento_id, titulo, descripcion) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'bautizo'),
  'Convocatoria para Verdugos', 'Requisitos y registro para participar como verdugo en el bautizo.'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'acto-inaugural'), 
  'acto-inaugural', 'Acto conmemorativo al aniversario', 'Oficial', '2026-10-12', NULL, 'Auditorio de la Carrera', 'Dirección', 'Acto conmemorativo al aniversario, con presencia de autoridades universitarias. Lugar, Auditorio de la Carrera.', 'Hola, quisiera saber los detalles del Acto Inaugural del Aniversario.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'acto-inaugural'),
  '2026-10-12', '09:00', '12:00', 'Acto central'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'basquet'), 
  'basquet', 'Torneo de Básquet', 'Deportes', '2026-10-12', NULL, 'Canchas', 'Deportes', 'Arranque del torneo de básquetbol inter-semestres.', 'Hola, quisiera consultar los horarios de básquet.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'basquet'),
  '2026-10-12', '13:00', '17:00', 'Primera fecha'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'basquet'),
  'Luis Herrera', '59160161167', 'Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'basquet'),
  'Sergio Zabaleta', '59165536176', 'Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'basquet'),
  'Alex Condori', '59169922008', 'Deportes'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'wally'), 
  'wally', 'Torneo de Wally', 'Deportes', '2026-10-12', NULL, 'Canchas', 'Deportes', 'Arranque del torneo de wallybol inter-semestres.', 'Hola, quisiera consultar los horarios de wally.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'wally'),
  '2026-10-12', '13:00', '17:00', 'Primera fecha'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'wally'),
  'Luis Herrera', '59160161167', 'Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'wally'),
  'Sergio Zabaleta', '59165536176', 'Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'wally'),
  'Alex Condori', '59169922008', 'Deportes'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-damas'), 
  'futsal-damas', 'Torneo de Futsal Damas', 'Deportes', '2026-10-12', NULL, 'Canchas', 'Deportes', 'Arranque del torneo de futsal femenino inter-semestres.', 'Hola, quisiera consultar los horarios de futsal damas.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-damas'),
  '2026-10-12', '13:00', '17:00', 'Primera fecha'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-damas'),
  'Luis Herrera', '59160161167', 'Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-damas'),
  'Sergio Zabaleta', '59165536176', 'Deportes'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'futsal-damas'),
  'Alex Condori', '59169922008', 'Deportes'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'seminario-principal'), 
  'seminario-principal', 'Seminario (Ciclo de Conferencias)', 'Académico', '2026-10-12', '2026-10-16', 'Audiovisual / Auditorio', 'Cursos y Seminarios', 'Ciclo de conferencias especializadas con expositores invitados del área de software y nuevas tecnologías.', 'Hola, quisiera información sobre los temas del Seminario.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'seminario-principal'),
  '2026-10-12', '14:00', '18:00', 'Sesión 1: Área de Software'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'seminario-principal'),
  '2026-10-13', '14:00', '18:00', 'Sesión 2: Charlas Técnicas'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'seminario-principal'),
  '2026-10-14', '14:00', '18:00', 'Sesión 3: Desarrollo de Sistemas'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'seminario-principal'),
  '2026-10-15', '09:00', '13:00', 'Sesión 4: Taller práctico de herramientas modernas (Auditorio)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'seminario-principal'),
  '2026-10-16', '14:00', '18:00', 'Sesión 5: Conferencia Magistral de Cierre'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'coronacion-bufa'), 
  'coronacion-bufa', 'Coronación Bufa', 'Social / Gala', '2026-10-12', NULL, 'Patio Central', 'Miss Mister y Bufa', 'La tradicional y divertida presentación y coronación de la corte bufa de la carrera.', 'Hola Eynar, quisiera saber los detalles y participantes de la Coronación Bufa.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'coronacion-bufa'),
  '2026-10-12', '16:00', '20:00', 'Coronación Bufa'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'coronacion-bufa'),
  'Eynar Tarifa', '59177505766', 'Comisión Bufa'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'torneo-videojuegos'), 
  'torneo-videojuegos', 'Torneo de Videojuegos', 'Recreativo', '2026-10-13', '2026-10-14', 'Auditorio', 'Videojuegos y Botargas', 'Torneos eSports (Dota 2, Valorant, FIFA, Smash, etc.) durante 24 horas continuas.', 'Hola, quiero inscribir a mi equipo para el Torneo de Videojuegos.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'torneo-videojuegos'),
  '2026-10-13', '08:30', '23:59', 'Clasificatorias (24h Continuas)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'torneo-videojuegos'),
  '2026-10-14', '00:00', '12:00', 'Finales'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'torneo-videojuegos'),
  'Eliane', '59178991244', 'Comisión Videojuegos'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'torneo-videojuegos'),
  'Gustavo Vera', '59160116016', 'Comisión Videojuegos'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'miss-mister'), 
  'miss-mister', 'Elección Miss y Míster Informática', 'Social / Gala', '2026-10-13', NULL, 'Auditorio', 'Miss Mister y Bufa', 'Gala de elección de la Miss y Míster de la carrera de Informática 2026.', 'Hola Eynar, deseo información sobre las candidatas y entradas para Miss y Míster.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'miss-mister'),
  '2026-10-13', '15:30', '20:00', 'Gala Principal'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'miss-mister'),
  'Eynar Tarifa', '59177505766', 'Comisión Miss/Mister'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'noche-talentos'), 
  'noche-talentos', 'Gran Noche de Talentos', 'Cultura', '2026-10-14', NULL, 'Auditorio', 'Noche de Talentos', 'Presentaciones musicales, danza, comedia, bandas y expresiones artísticas de la carrera.', 'Hola Shelly, quiero inscribir mi número artístico para la Noche de Talentos.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'noche-talentos'),
  '2026-10-14', '15:00', '20:00', 'Noche de Talentos'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'noche-talentos'),
  'Shelly', '59160108102', 'Comisión Talentos'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'tarde-pelicula'), 
  'tarde-pelicula', 'Tarde de Película', 'Recreativo', '2026-10-15', NULL, 'Audiovisual', 'Sin Comisión', 'Proyección cinematográfica con refrigerio para compartir entre compañeros.', 'Hola, ¿qué película se transmitirá en la Tarde de Película?'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'tarde-pelicula'),
  '2026-10-15', '13:00', '15:00', 'Proyección'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'carrera-botargas'), 
  'carrera-botargas', 'Carrera de Botargas y Disfraces', 'Recreativo', '2026-10-15', NULL, 'PUC', 'Videojuegos y Botargas', 'Carrera de obstáculos con botargas gigantes, trajes cómicos y disfraces universitarios.', 'Hola, deseo inscribir mi botarga/disfraz para la carrera del jueves.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'carrera-botargas'),
  '2026-10-15', '15:00', '17:00', 'Carrera'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'carrera-botargas'),
  'Eliane', '59178991244', 'Encargada Botargas'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'carrera-botargas'),
  'Gustavo Vera', '59160116016', 'Encargado Botargas'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'hackaton'), 
  'hackaton', 'Hackatón 24 Horas (AFTER CODE)', 'Académico', '2026-10-15', '2026-10-16', 'Laboratorios Centrales', 'Grupos de estudio', 'Maratón nocturna de desarrollo de software, resolución de retos y prototipado rápido con premios en efectivo.', 'Hola Alejandra, deseo inscribir a mi equipo para la Hackatón 24 Horas.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'hackaton'),
  '2026-10-15', '18:00', '23:59', 'Hackatón (Día 1)'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'hackaton'),
  '2026-10-16', '00:00', '11:00', 'Hackatón (Madrugada y Final)'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'hackaton'),
  'Alejandra Tejerina', '59177238511', 'Coordinadora Hackatón'
);

INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'alcohoritmo'), 
  'alcohoritmo', 'ALCOHORITMO HALLOWEEN M.10 F.26 - Gran Fiesta de Aniversario', 'Fiesta', '2026-10-16', '2026-10-17', 'Forum Club', 'Fiesta', 'El evento estelar de cierre. Dos años de espera terminan a lo grande en Forum Club. Fiesta de disfraces, estación de maquillaje neón, shows en vivo y premios.', 'Hola Brian, deseo asegurar mi entrada/mesa para Alcohoritmo Halloween en Forum.'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'alcohoritmo'),
  '2026-10-16', '19:00', '23:59', 'Apertura de Puertas, Warm Up & Concursos'
);
INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'alcohoritmo'),
  '2026-10-17', '00:00', '04:00', 'Show Central y DJ hasta el cierre'
);
INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (
  uuid_generate_v5(uuid_ns_url(), 'alcohoritmo'),
  'Brian Patty', '59165991669', 'Mesas & Combos'
);

