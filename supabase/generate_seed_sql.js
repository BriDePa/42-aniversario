const fs = require('fs');

const EVENTOS = [
  {
    slug: 'coloquio-ia',
    titulo: 'Coloquio sobre ética, gobernanza y normativa de la IA',
    categoria: 'Académico',
    fecha_inicio: '2026-10-08',
    fecha_fin: '2026-10-09',
    ubicacion: 'Audiovisual / Auditorio',
    comision: 'Dirección',
    descripcion: 'Espacio de debate académico sobre los desafíos éticos, marcos regulatorios y gobernanza de la Inteligencia Artificial en Bolivia y la región.',
    whatsapp_mensaje: 'Hola, deseo información e inscripción para el Coloquio de IA.',
    sesiones: [
      { fecha: '2026-10-08', hora_inicio: '14:00', hora_fin: '18:00', detalle: 'Día 1: Introducción y Marcos Regulatorios' },
      { fecha: '2026-10-09', hora_inicio: '14:00', hora_fin: '18:00', detalle: 'Día 2: Mesas redondas y conclusiones' }
    ]
  },
  {
    slug: 'futsal-varones',
    titulo: 'Torneo de Futsal Varones',
    categoria: 'Deportes',
    fecha_inicio: '2026-10-08',
    fecha_fin: '2026-10-16',
    ubicacion: 'Canchas',
    comision: 'Deportes',
    descripcion: 'Campeonato de futsal varones inter-semestres. Se juega en distintas fechas.',
    whatsapp_mensaje: 'Hola, quisiera consultar sobre el fixture y planillas del Torneo de Futsal Varones.',
    encargados: [
      { nombre: 'Luis Herrera', telefono: '59160161167', rol: 'Coordinador Deportes' },
      { nombre: 'Sergio Zabaleta', telefono: '59165536176', rol: 'Coordinador Deportes' }
    ],
    sesiones: [
      { fecha: '2026-10-08', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'Fase de Grupos (Día 1)' },
      { fecha: '2026-10-09', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'Fase de Grupos (Día 2)' },
      { fecha: '2026-10-10', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'Fase de Grupos (Día 3)' },
      { fecha: '2026-10-13', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'Fase de Grupos (Día 4)' },
      { fecha: '2026-10-14', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'Cuartos de final' },
      { fecha: '2026-10-15', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'Semifinales' },
      { fecha: '2026-10-16', hora_inicio: '08:30', hora_fin: '13:00', detalle: 'La Gran Final' }
    ]
  },
  {
    slug: 'captura-bandera',
    titulo: 'Captura la Bandera (CTF)',
    categoria: 'Académico',
    fecha_inicio: '2026-10-10',
    fecha_fin: '2026-10-16',
    ubicacion: 'Laboratorios / Online',
    comision: 'Grupos de estudio',
    descripcion: 'Competencia de ciberseguridad, hacking ético y criptografía a través de acertijos. Inicia el sábado y dura toda la semana.',
    whatsapp_mensaje: 'Hola Andrés, quiero inscribir a mi equipo para la competencia Captura la Bandera.',
    encargados: [
      { nombre: 'Andres Gómez', telefono: '59179631539', rol: 'Encargado CTF' }
    ],
    sesiones: [
      { fecha: '2026-10-10', hora_inicio: '16:00', hora_fin: null, detalle: 'Inauguración y liberación de retos' }
    ]
  },
  {
    slug: 'bautizo',
    titulo: 'Gran Bautizo de Nuevos Estudiantes',
    categoria: 'Tradición',
    fecha_inicio: '2026-10-10',
    ubicacion: 'Patio Central / Externo',
    comision: 'Bautizo',
    descripcion: 'La bienvenida tradicional para los nuevos ingresantes a la carrera de Informática.',
    whatsapp_mensaje: 'Hola, tengo dudas sobre el horario y punto de encuentro del Bautizo.',
    encargados: [
      { nombre: 'Ericka Barrionuevo', telefono: '59169922008', rol: 'Comisión Bautizo' },
      { nombre: 'Cristian Velasco', telefono: '59160111070', rol: 'Comisión Bautizo' }
    ],
    sesiones: [
      { fecha: '2026-10-10', hora_inicio: '08:00', hora_fin: '14:00', detalle: 'Bautizo' }
    ],
    avisos: [
      { titulo: 'Convocatoria Oficial de Bautizo', descripcion: 'Llamado a todos los estudiantes de primer año.' },
      { titulo: 'Convocatoria para Verdugos', descripcion: 'Requisitos y registro para participar como verdugo en el bautizo.' }
    ]
  },
  {
    slug: 'acto-inaugural',
    titulo: 'Acto conmemorativo al aniversario',
    categoria: 'Oficial',
    fecha_inicio: '2026-10-12',
    ubicacion: 'Auditorio de la Carrera',
    comision: 'Dirección',
    descripcion: 'Acto conmemorativo al aniversario, con presencia de autoridades universitarias. Lugar, Auditorio de la Carrera.',
    whatsapp_mensaje: 'Hola, quisiera saber los detalles del Acto Inaugural del Aniversario.',
    sesiones: [
      { fecha: '2026-10-12', hora_inicio: '09:00', hora_fin: '12:00', detalle: 'Acto central' }
    ]
  },
  {
    slug: 'basquet',
    titulo: 'Torneo de Básquet',
    categoria: 'Deportes',
    fecha_inicio: '2026-10-12',
    ubicacion: 'Canchas',
    comision: 'Deportes',
    descripcion: 'Arranque del torneo de básquetbol inter-semestres.',
    whatsapp_mensaje: 'Hola, quisiera consultar los horarios de básquet.',
    encargados: [
      { nombre: 'Luis Herrera', telefono: '59160161167', rol: 'Deportes' },
      { nombre: 'Sergio Zabaleta', telefono: '59165536176', rol: 'Deportes' },
      { nombre: 'Alex Condori', telefono: '59169922008', rol: 'Deportes' }
    ],
    sesiones: [
      { fecha: '2026-10-12', hora_inicio: '13:00', hora_fin: '17:00', detalle: 'Primera fecha' }
    ]
  },
  {
    slug: 'wally',
    titulo: 'Torneo de Wally',
    categoria: 'Deportes',
    fecha_inicio: '2026-10-12',
    ubicacion: 'Canchas',
    comision: 'Deportes',
    descripcion: 'Arranque del torneo de wallybol inter-semestres.',
    whatsapp_mensaje: 'Hola, quisiera consultar los horarios de wally.',
    encargados: [
      { nombre: 'Luis Herrera', telefono: '59160161167', rol: 'Deportes' },
      { nombre: 'Sergio Zabaleta', telefono: '59165536176', rol: 'Deportes' },
      { nombre: 'Alex Condori', telefono: '59169922008', rol: 'Deportes' }
    ],
    sesiones: [
      { fecha: '2026-10-12', hora_inicio: '13:00', hora_fin: '17:00', detalle: 'Primera fecha' }
    ]
  },
  {
    slug: 'futsal-damas',
    titulo: 'Torneo de Futsal Damas',
    categoria: 'Deportes',
    fecha_inicio: '2026-10-12',
    ubicacion: 'Canchas',
    comision: 'Deportes',
    descripcion: 'Arranque del torneo de futsal femenino inter-semestres.',
    whatsapp_mensaje: 'Hola, quisiera consultar los horarios de futsal damas.',
    encargados: [
      { nombre: 'Luis Herrera', telefono: '59160161167', rol: 'Deportes' },
      { nombre: 'Sergio Zabaleta', telefono: '59165536176', rol: 'Deportes' },
      { nombre: 'Alex Condori', telefono: '59169922008', rol: 'Deportes' }
    ],
    sesiones: [
      { fecha: '2026-10-12', hora_inicio: '13:00', hora_fin: '17:00', detalle: 'Primera fecha' }
    ]
  },
  {
    slug: 'seminario-principal',
    titulo: 'Seminario (Ciclo de Conferencias)',
    categoria: 'Académico',
    fecha_inicio: '2026-10-12',
    fecha_fin: '2026-10-16',
    ubicacion: 'Audiovisual / Auditorio',
    comision: 'Cursos y Seminarios',
    descripcion: 'Ciclo de conferencias especializadas con expositores invitados del área de software y nuevas tecnologías.',
    whatsapp_mensaje: 'Hola, quisiera información sobre los temas del Seminario.',
    sesiones: [
      { fecha: '2026-10-12', hora_inicio: '14:00', hora_fin: '18:00', detalle: 'Sesión 1: Área de Software' },
      { fecha: '2026-10-13', hora_inicio: '14:00', hora_fin: '18:00', detalle: 'Sesión 2: Charlas Técnicas' },
      { fecha: '2026-10-14', hora_inicio: '14:00', hora_fin: '18:00', detalle: 'Sesión 3: Desarrollo de Sistemas' },
      { fecha: '2026-10-15', hora_inicio: '09:00', hora_fin: '13:00', detalle: 'Sesión 4: Taller práctico de herramientas modernas (Auditorio)' },
      { fecha: '2026-10-16', hora_inicio: '14:00', hora_fin: '18:00', detalle: 'Sesión 5: Conferencia Magistral de Cierre' }
    ]
  },
  {
    slug: 'coronacion-bufa',
    titulo: 'Coronación Bufa',
    categoria: 'Social / Gala',
    fecha_inicio: '2026-10-12',
    ubicacion: 'Patio Central',
    comision: 'Miss Mister y Bufa',
    descripcion: 'La tradicional y divertida presentación y coronación de la corte bufa de la carrera.',
    whatsapp_mensaje: 'Hola Eynar, quisiera saber los detalles y participantes de la Coronación Bufa.',
    encargados: [
      { nombre: 'Eynar Tarifa', telefono: '59177505766', rol: 'Comisión Bufa' }
    ],
    sesiones: [
      { fecha: '2026-10-12', hora_inicio: '16:00', hora_fin: '20:00', detalle: 'Coronación Bufa' }
    ]
  },
  {
    slug: 'torneo-videojuegos',
    titulo: 'Torneo de Videojuegos',
    categoria: 'Recreativo',
    fecha_inicio: '2026-10-13',
    fecha_fin: '2026-10-14',
    ubicacion: 'Auditorio',
    comision: 'Videojuegos y Botargas',
    descripcion: 'Torneos eSports (Dota 2, Valorant, FIFA, Smash, etc.) durante 24 horas continuas.',
    whatsapp_mensaje: 'Hola, quiero inscribir a mi equipo para el Torneo de Videojuegos.',
    encargados: [
      { nombre: 'Eliane', telefono: '59178991244', rol: 'Comisión Videojuegos' },
      { nombre: 'Gustavo Vera', telefono: '59160116016', rol: 'Comisión Videojuegos' }
    ],
    sesiones: [
      { fecha: '2026-10-13', hora_inicio: '08:30', hora_fin: '23:59', detalle: 'Clasificatorias (24h Continuas)' },
      { fecha: '2026-10-14', hora_inicio: '00:00', hora_fin: '12:00', detalle: 'Finales' }
    ]
  },
  {
    slug: 'miss-mister',
    titulo: 'Elección Miss y Míster Informática',
    categoria: 'Social / Gala',
    fecha_inicio: '2026-10-13',
    ubicacion: 'Auditorio',
    comision: 'Miss Mister y Bufa',
    descripcion: 'Gala de elección de la Miss y Míster de la carrera de Informática 2026.',
    whatsapp_mensaje: 'Hola Eynar, deseo información sobre las candidatas y entradas para Miss y Míster.',
    encargados: [
      { nombre: 'Eynar Tarifa', telefono: '59177505766', rol: 'Comisión Miss/Mister' }
    ],
    sesiones: [
      { fecha: '2026-10-13', hora_inicio: '15:30', hora_fin: '20:00', detalle: 'Gala Principal' }
    ]
  },
  {
    slug: 'noche-talentos',
    titulo: 'Gran Noche de Talentos',
    categoria: 'Cultura',
    fecha_inicio: '2026-10-14',
    ubicacion: 'Auditorio',
    comision: 'Noche de Talentos',
    descripcion: 'Presentaciones musicales, danza, comedia, bandas y expresiones artísticas de la carrera.',
    whatsapp_mensaje: 'Hola Shelly, quiero inscribir mi número artístico para la Noche de Talentos.',
    encargados: [
      { nombre: 'Shelly', telefono: '59160108102', rol: 'Comisión Talentos' }
    ],
    sesiones: [
      { fecha: '2026-10-14', hora_inicio: '15:00', hora_fin: '20:00', detalle: 'Noche de Talentos' }
    ]
  },
  {
    slug: 'tarde-pelicula',
    titulo: 'Tarde de Película',
    categoria: 'Recreativo',
    fecha_inicio: '2026-10-15',
    ubicacion: 'Audiovisual',
    comision: 'Sin Comisión',
    descripcion: 'Proyección cinematográfica con refrigerio para compartir entre compañeros.',
    whatsapp_mensaje: 'Hola, ¿qué película se transmitirá en la Tarde de Película?',
    sesiones: [
      { fecha: '2026-10-15', hora_inicio: '13:00', hora_fin: '15:00', detalle: 'Proyección' }
    ]
  },
  {
    slug: 'carrera-botargas',
    titulo: 'Carrera de Botargas y Disfraces',
    categoria: 'Recreativo',
    fecha_inicio: '2026-10-15',
    ubicacion: 'PUC',
    comision: 'Videojuegos y Botargas',
    descripcion: 'Carrera de obstáculos con botargas gigantes, trajes cómicos y disfraces universitarios.',
    whatsapp_mensaje: 'Hola, deseo inscribir mi botarga/disfraz para la carrera del jueves.',
    encargados: [
      { nombre: 'Eliane', telefono: '59178991244', rol: 'Encargada Botargas' },
      { nombre: 'Gustavo Vera', telefono: '59160116016', rol: 'Encargado Botargas' }
    ],
    sesiones: [
      { fecha: '2026-10-15', hora_inicio: '15:00', hora_fin: '17:00', detalle: 'Carrera' }
    ]
  },
  {
    slug: 'hackaton',
    titulo: 'Hackatón 24 Horas (AFTER CODE)',
    categoria: 'Académico',
    fecha_inicio: '2026-10-15',
    fecha_fin: '2026-10-16',
    ubicacion: 'Laboratorios Centrales',
    comision: 'Grupos de estudio',
    descripcion: 'Maratón nocturna de desarrollo de software, resolución de retos y prototipado rápido con premios en efectivo.',
    whatsapp_mensaje: 'Hola Alejandra, deseo inscribir a mi equipo para la Hackatón 24 Horas.',
    encargados: [
      { nombre: 'Alejandra Tejerina', telefono: '59177238511', rol: 'Coordinadora Hackatón' }
    ],
    sesiones: [
      { fecha: '2026-10-15', hora_inicio: '18:00', hora_fin: '23:59', detalle: 'Hackatón (Día 1)' },
      { fecha: '2026-10-16', hora_inicio: '00:00', hora_fin: '11:00', detalle: 'Hackatón (Madrugada y Final)' }
    ]
  },
  {
    slug: 'alcohoritmo',
    titulo: 'ALCOHORITMO HALLOWEEN M.10 F.26 - Gran Fiesta de Aniversario',
    categoria: 'Fiesta',
    fecha_inicio: '2026-10-16',
    fecha_fin: '2026-10-17',
    ubicacion: 'Forum Club',
    comision: 'Fiesta',
    descripcion: 'El evento estelar de cierre. Dos años de espera terminan a lo grande en Forum Club. Fiesta de disfraces, estación de maquillaje neón, shows en vivo y premios.',
    whatsapp_mensaje: 'Hola Brian, deseo asegurar mi entrada/mesa para Alcohoritmo Halloween en Forum.',
    encargados: [
      { nombre: 'Brian Patty', telefono: '59165991669', rol: 'Mesas & Combos' }
    ],
    sesiones: [
      { fecha: '2026-10-16', hora_inicio: '19:00', hora_fin: '23:59', detalle: 'Apertura de Puertas, Warm Up & Concursos' },
      { fecha: '2026-10-17', hora_inicio: '00:00', hora_fin: '04:00', detalle: 'Show Central y DJ hasta el cierre' }
    ]
  }
];

let sql = '-- Vaciando tablas por si se repite la ejecución\n';
sql += 'DELETE FROM encargados;\nDELETE FROM avisos;\nDELETE FROM sesiones;\nDELETE FROM eventos;\n\n';

EVENTOS.forEach(ev => {
  const escapeSql = str => str ? "'" + str.replace(/'/g, "''") + "'" : "NULL";
  
  // Usaremos un truco en PostgresSQL: insertar y recuperar el id en una variable o hacer subqueries no es tan trivial sin plpgsql.
  // Pero usando UUID determinísticos con uuid_generate_v5 es lo mejor.
  
  sql += `INSERT INTO eventos (id, slug, titulo, categoria, fecha_inicio, fecha_fin, ubicacion, comision, descripcion, whatsapp_mensaje) VALUES (\n  uuid_generate_v5(uuid_ns_url(), '${ev.slug}'), \n  ${escapeSql(ev.slug)}, ${escapeSql(ev.titulo)}, ${escapeSql(ev.categoria)}, ${escapeSql(ev.fecha_inicio)}, ${escapeSql(ev.fecha_fin)}, ${escapeSql(ev.ubicacion)}, ${escapeSql(ev.comision)}, ${escapeSql(ev.descripcion)}, ${escapeSql(ev.whatsapp_mensaje)}\n);\n`;

  if (ev.sesiones) {
    ev.sesiones.forEach(ses => {
      sql += `INSERT INTO sesiones (evento_id, fecha, hora_inicio, hora_fin, detalle) VALUES (\n  uuid_generate_v5(uuid_ns_url(), '${ev.slug}'),\n  ${escapeSql(ses.fecha)}, ${escapeSql(ses.hora_inicio)}, ${escapeSql(ses.hora_fin)}, ${escapeSql(ses.detalle)}\n);\n`;
    });
  }

  if (ev.encargados) {
    ev.encargados.forEach(enc => {
      sql += `INSERT INTO encargados (evento_id, nombre, telefono, rol) VALUES (\n  uuid_generate_v5(uuid_ns_url(), '${ev.slug}'),\n  ${escapeSql(enc.nombre)}, ${escapeSql(enc.telefono)}, ${escapeSql(enc.rol)}\n);\n`;
    });
  }

  if (ev.avisos) {
    ev.avisos.forEach(avi => {
      sql += `INSERT INTO avisos (evento_id, titulo, descripcion) VALUES (\n  uuid_generate_v5(uuid_ns_url(), '${ev.slug}'),\n  ${escapeSql(avi.titulo)}, ${escapeSql(avi.descripcion)}\n);\n`;
    });
  }
  
  sql += '\n';
});

fs.writeFileSync('supabase/seed.sql', sql);
console.log('Seed SQL generado!');
