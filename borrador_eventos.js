/**
 * ==============================================================================
 * ARCHIVO TEMPORAL PARA EDICIÓN MANUAL
 * Puedes editar este archivo, llenar los datos, y luego copiar el texto y pasármelo.
 * ==============================================================================
 */

export const ANIVERSARIO_METADATA = {
  titulo: "Semana Aniversario 2026",
  carrera: "Informática & Sistemas",
  universidad: "UMSA",
  fechaInicio: "2026-10-08",
  fechaFin: "2026-10-16",
  rangoTexto: "08 al 16 de Octubre de 2026",
  coordinadoresGenerales: [
    { nombre: "Deymar Patty", rol: "Coordinador General" },
    { nombre: "Brayan Rios", rol: "Coordinador General" }
  ],
  whatsappGrupoOficial: "https://chat.whatsapp.com/Lt6f9ZYociNDvvt8mgOFwY",
  staffsVentaEntradas: [
    { nombre: "Juanito", telefono: "59179100835", enlace: "https://wa.me/59179100835" },
    { nombre: "Omar", telefono: "59160519730", enlace: "https://wa.me/59160519730" },
    { nombre: "Eynar", telefono: "59177505766", enlace: "https://wa.me/59177505766" },
    { nombre: "Hajime", telefono: "59172514616", enlace: "https://wa.me/59172514616" }
  ],
  contactoMesasYCombos: {
    nombre: "Brian",
    telefono: "59165991669",
    enlace: "https://wa.me/59165991669"
  }
};

export const EVENTOS_ANIVERSARIO = [
  // --- JUEVES 08 OCTUBRE ---
  {
    id: "coloquio-ia-dia1",
    titulo: "Coloquio sobre ética, gobernanza y normativa de la IA",
    tituloOriginalNotion: "Coloquio sobre ética, gobernanza y normativa de la IA",
    categoria: "Académico",
    fecha: "2026-10-08",
    diaSemana: "Jueves",
    horaInicio: "14:00",
    horaFin: "18:00",
    ubicacion: "Audiovisual / Auditorio",
    comision: "Cursos y Seminarios",
    esConvocatoria: true,
    descripcion: "Espacio de debate académico sobre los desafíos éticos, marcos regulatorios y gobernanza de la Inteligencia Artificial en Bolivia y la región.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, deseo información e inscripción para el Coloquio de IA."
  },

  // --- VIERNES 09 OCTUBRE ---
  {
    id: "futsal-varones-inicio",
    titulo: "Inicio Torneo de Futsal Varones",
    tituloOriginalNotion: "Inicio Torneo de Futsal Varones",
    categoria: "Deportes",
    fecha: "2026-10-09",
    diaSemana: "Viernes",
    horaInicio: "09:00",
    horaFin: null,
    ubicacion: "Canchas",
    comision: "Deportes",
    esConvocatoria: true,
    descripcion: "Inauguración de la fase de grupos del campeonato de futsal varones inter-semestres. (Nota: el campeonato iniciará según la coordinación de los organizadores).",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Luis Herrera", telefono: "59160161167", rol: "Coordinador Deportes" },
      { nombre: "Sergio Zabaleta", telefono: "59165536176", rol: "Coordinador Deportes" }
    ],
    whatsappMensajeSugerido: "Hola, quisiera consultar sobre el fixture y planillas del Torneo de Futsal Varones."
  },
  {
    id: "coloquio-ia-dia2",
    titulo: "Coloquio sobre ética, gobernanza y normativa de la IA (Parte 2)",
    tituloOriginalNotion: "Coloquio sobre ética, gobernanza y normativa de la IA (1)",
    categoria: "Académico",
    fecha: "2026-10-09",
    diaSemana: "Viernes",
    horaInicio: "14:00",
    horaFin: "18:00",
    ubicacion: "Audiovisual",
    comision: "Cursos y Seminarios",
    esConvocatoria: true,
    descripcion: "Segunda jornada del coloquio de IA: mesas redondas y conclusiones finales.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera información sobre la sesión de cierre del Coloquio de IA."
  },
  {
    id: "captura-bandera-inauguracion",
    titulo: "Inauguración Captura la Bandera (CTF)",
    tituloOriginalNotion: "Inauguración Captura la Bandera",
    categoria: "Académico",
    fecha: "2026-10-09",
    diaSemana: "Viernes",
    horaInicio: "16:00",
    horaFin: null,
    ubicacion: "Laboratorios de Informática",
    comision: "Grupos de estudio",
    esConvocatoria: true,
    descripcion: "Competencia de ciberseguridad, hacking ético, criptografía y resolución de retos técnicos.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Andres Gómez", telefono: "59179631539", rol: "Encargado CTF" }
    ],
    whatsappMensajeSugerido: "Hola Andrés, quiero inscribir a mi equipo para la competencia Captura la Bandera."
  },

  // --- SÁBADO 10 OCTUBRE ---
  {
    id: "bautizo-estudiantes",
    titulo: "Gran Bautizo de Nuevos Estudiantes",
    tituloOriginalNotion: "Bautizo",
    categoria: "Tradición",
    fecha: "2026-10-10",
    diaSemana: "Sábado",
    horaInicio: "08:00",
    horaFin: "14:00",
    ubicacion: "Patio Central / Externo",
    comision: "Bautizo",
    esConvocatoria: true,
    descripcion: "La bienvenida tradicional para los nuevos ingresantes a la carrera de Informática.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Ericka Barrionuevo", telefono: "59169922008", rol: "Comisión Bautizo" },
      { nombre: "Cristian Velasco", telefono: "59160111070", rol: "Comisión Bautizo" }
    ],
    whatsappMensajeSugerido: "Hola, tengo dudas sobre el horario y punto de encuentro del Bautizo."
  },

  // --- LUNES 12 OCTUBRE ---
  {
    id: "acto-inaugural-misa",
    titulo: "Acto conmemorativo al aniversario",
    tituloOriginalNotion: "acto inaugural y Misa",
    categoria: "Oficial",
    fecha: "2026-10-12",
    diaSemana: "Lunes",
    horaInicio: "09:00",
    horaFin: "12:00",
    ubicacion: "Auditorio de la Carrera",
    comision: "Videojuegos y Botargas",
    esConvocatoria: false,
    descripcion: "Acto conmemorativo al aniversario, con presencia de autoridades universitarias. Lugar, Auditorio de la Carrera.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera saber los detalles del Acto Inaugural del Aniversario."
  },
  {
    id: "inicio-otros-deportes",
    titulo: "Inicio de Deportes: Básquet, Wally y Futsal Damas",
    tituloOriginalNotion: "Inicio de los deportes basquet, wally y futsal damas",
    categoria: "Deportes",
    fecha: "2026-10-12",
    diaSemana: "Lunes",
    horaInicio: "13:00",
    horaFin: null,
    ubicacion: "Canchas",
    comision: "Deportes",
    esConvocatoria: true,
    descripcion: "Arranque de los torneos de básquetbol, wallybol y futsal femenino.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Luis Herrera", telefono: "59160161167", rol: "Deportes" },
      { nombre: "Sergio Zabaleta", telefono: "59165536176", rol: "Deportes" }
    ],
    whatsappMensajeSugerido: "Hola, quisiera consultar los horarios de básquet, wally y futsal damas."
  },
  {
    id: "seminario-dia1",
    titulo: "Seminario",
    tituloOriginalNotion: "SEMINARIO",
    categoria: "Académico",
    fecha: "2026-10-12",
    diaSemana: "Lunes",
    horaInicio: "14:00",
    horaFin: "18:00",
    ubicacion: "Audiovisual",
    comision: "Cursos y Seminarios",
    esConvocatoria: false,
    descripcion: "Ciclo de conferencias especializadas con expositores invitados del área de software.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera información sobre los temas del Seminario de hoy."
  },
  {
    id: "coronacion-bufa",
    titulo: "Coronación Bufa",
    tituloOriginalNotion: "Coronación Bufa",
    categoria: "Social / Gala",
    fecha: "2026-10-12",
    diaSemana: "Lunes",
    horaInicio: "16:00",
    horaFin: "20:00",
    ubicacion: "Patio Central",
    comision: "Miss Mister y Bufa",
    esConvocatoria: true,
    descripcion: "La tradicional y divertida presentación y coronación de la corte bufa de la carrera.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Eynar Tarifa", telefono: "59177505766", rol: "Comisión Bufa" },
      { nombre: "Patricio Ilaluque", telefono: null, rol: "Docente Asesor" }
    ],
    whatsappMensajeSugerido: "Hola Eynar, quisiera saber los detalles y participantes de la Coronación Bufa."
  },

  // --- MARTES 13 OCTUBRE ---
  {
    id: "torneo-videojuegos",
    titulo: "Torneo de Videojuegos",
    tituloOriginalNotion: "Juegos",
    categoria: "Recreativo",
    fecha: "2026-10-13",
    diaSemana: "Martes",
    horaInicio: "08:30",
    horaFin: "2026-10-14T08:30:00",
    ubicacion: "Auditorio",
    comision: "Videojuegos y Botargas",
    esConvocatoria: true,
    descripcion: "Torneos eSports (Dota 2, Valorant, FIFA, Smash, etc.) durante 24 horas continuas.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Eliane", telefono: "59178991244", rol: "Comisión Videojuegos" },
      { nombre: "Gustavo Vera", telefono: "59160116016", rol: "Comisión Videojuegos" }
    ],
    whatsappMensajeSugerido: "Hola, quiero inscribir a mi equipo para el Torneo de Videojuegos."
  },
  {
    id: "seminario-dia2",
    titulo: "Seminario",
    tituloOriginalNotion: "SEMINARIO 2",
    categoria: "Académico",
    fecha: "2026-10-13",
    diaSemana: "Martes",
    horaInicio: "14:00",
    horaFin: "18:00",
    ubicacion: "Audiovisual",
    comision: "Cursos y Seminarios",
    esConvocatoria: false,
    descripcion: "Segunda jornada de charlas técnicas y conferencias universitarias.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera consultar los expositores del Seminario del martes."
  },
  {
    id: "miss-mister",
    titulo: "Elección Miss y Míster Informática",
    tituloOriginalNotion: "Miss y Mister",
    categoria: "Social / Gala",
    fecha: "2026-10-13",
    diaSemana: "Martes",
    horaInicio: "15:30",
    horaFin: null,
    ubicacion: "Auditorio",
    comision: "Miss Mister y Bufa",
    esConvocatoria: true,
    descripcion: "Gala de elección de la Miss y Míster de la carrera de Informática 2026.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Eynar Tarifa", telefono: "59177505766", rol: "Comisión Miss/Mister" },
      { nombre: "Patricio Ilaluque", telefono: null, rol: "Docente Asesor" }
    ],
    whatsappMensajeSugerido: "Hola Eynar, deseo información sobre las candidatas y entradas para Miss y Míster."
  },

  // --- MIÉRCOLES 14 OCTUBRE ---
  {
    id: "torneo-videojuegos-dia2",
    titulo: "Juegos & E-sports (Día 2)",
    tituloOriginalNotion: "Juegos",
    categoria: "Recreativo",
    fecha: "2026-10-14",
    diaSemana: "Miércoles",
    horaInicio: "08:30",
    horaFin: "12:00",
    ubicacion: "Auditorio",
    comision: "Videojuegos y Botargas",
    esConvocatoria: false,
    descripcion: "Continuación y finales de los Torneos eSports (Dota 2, Valorant, FIFA, Smash, etc.).",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Eliane", telefono: "59178991244", rol: "Comisión Videojuegos" },
      { nombre: "Gustavo Vera", telefono: "59160116016", rol: "Comisión Videojuegos" }
    ],
    whatsappMensajeSugerido: "Hola, quiero información sobre las finales del Torneo de Videojuegos."
  },
  {
    id: "seminario-dia3",
    titulo: "Seminario",
    tituloOriginalNotion: "SEMINARIO 3",
    categoria: "Académico",
    fecha: "2026-10-14",
    diaSemana: "Miércoles",
    horaInicio: "14:00",
    horaFin: "18:00",
    ubicacion: "Audiovisual",
    comision: "Cursos y Seminarios",
    esConvocatoria: false,
    descripcion: "Tercer ciclo de conferencias sobre desarrollo de sistemas y nuevas tecnologías.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera información sobre el Seminario del miércoles."
  },
  {
    id: "noche-talentos",
    titulo: "Gran Noche de Talentos",
    tituloOriginalNotion: "Noche de Talentos",
    categoria: "Cultura",
    fecha: "2026-10-14",
    diaSemana: "Miércoles",
    horaInicio: "15:00",
    horaFin: "20:00",
    ubicacion: "Auditorio",
    comision: "Noche de Talentos",
    esConvocatoria: true,
    descripcion: "Presentaciones musicales, danza, comedia, bandas y expresiones artísticas de la carrera.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Shelly", telefono: "59160108102", rol: "Comisión Talentos" },
      { nombre: "Grover Rodríguez", telefono: null, rol: "Docente Asesor" }
    ],
    whatsappMensajeSugerido: "Hola Shelly, quiero inscribir mi número artístico para la Noche de Talentos."
  },

  // --- JUEVES 15 OCTUBRE ---
  {
    id: "seminario-dia4",
    titulo: "Seminario",
    tituloOriginalNotion: "CURSO 4",
    categoria: "Académico",
    fecha: "2026-10-15",
    diaSemana: "Jueves",
    horaInicio: "09:00",
    horaFin: "13:00",
    ubicacion: "Auditorio",
    comision: "Cursos y Seminarios",
    esConvocatoria: false,
    descripcion: "Taller práctico sobre herramientas modernas de desarrollo.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera consultar los requisitos para el seminario práctico del jueves."
  },
  {
    id: "tarde-pelicula",
    titulo: "Tarde de Película",
    tituloOriginalNotion: "Tarde de Película",
    categoria: "Recreativo",
    fecha: "2026-10-15",
    diaSemana: "Jueves",
    horaInicio: "13:00",
    horaFin: null,
    ubicacion: "Audiovisual",
    comision: "Sin Comisión",
    esConvocatoria: false,
    descripcion: "Proyección cinematográfica con refrigerio para compartir entre compañeros.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, ¿qué película se transmitirá en la Tarde de Película?"
  },
  {
    id: "carrera-botargas",
    titulo: "Carrera de Botargas y Disfraces",
    tituloOriginalNotion: "Carrera de Botargas y Disfraces",
    categoria: "Recreativo",
    fecha: "2026-10-15",
    diaSemana: "Jueves",
    horaInicio: "15:00",
    horaFin: null,
    ubicacion: "PUC",
    comision: "Videojuegos y Botargas",
    esConvocatoria: true,
    descripcion: "Carrera de obstáculos con botargas gigantes, trajes cómicos y disfraces universitarios.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Eliane", telefono: "59178991244", rol: "Encargada Botargas" },
      { nombre: "Gustavo Vera", telefono: "59160116016", rol: "Encado Botargas" }
    ],
    whatsappMensajeSugerido: "Hola, deseo inscribir mi botarga/disfraz para la carrera del jueves."
  },
  {
    id: "hackaton-24h",
    titulo: "Hackatón 24 Horas (AFTER CODE)",
    tituloOriginalNotion: "Hackaton",
    categoria: "Académico",
    fecha: "2026-10-15",
    diaSemana: "Jueves",
    horaInicio: "18:00",
    horaFin: "2026-10-16T11:00:00",
    ubicacion: "Laboratorios Centrales",
    comision: "Grupos de estudio",
    esConvocatoria: true,
    descripcion: "Maratón nocturna de desarrollo de software, resolución de retos y prototipado rápido con premios en efectivo.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Alejandra Tejerina", telefono: "59177238511", rol: "Coordinadora Hackatón" }
    ],
    whatsappMensajeSugerido: "Hola Alejandra, deseo inscribir a mi equipo para la Hackatón 24 Horas."
  },

  // --- VIERNES 16 OCTUBRE ---
  {
    id: "seminario-dia5",
    titulo: "Seminario",
    tituloOriginalNotion: "CURSO 5",
    categoria: "Académico",
    fecha: "2026-10-16",
    diaSemana: "Viernes",
    horaInicio: "14:00",
    horaFin: "18:00",
    ubicacion: "Audiovisual",
    comision: "Cursos y Seminarios",
    esConvocatoria: false,
    descripcion: "Conferencia magistral de cierre académico del aniversario.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera consultar el certificado y expositores del último seminario."
  },
  {
    id: "fiesta-alcohoritmo",
    titulo: "ALCOHORITMO HALLOWEEN V.11 F.255 - Gran Fiesta de Aniversario",
    tituloOriginalNotion: "Fiesta de la Carrer",
    categoria: "Fiesta",
    fecha: "2026-10-16",
    diaSemana: "Viernes",
    horaInicio: "18:30",
    horaFin: "2026-10-17T04:00:00",
    ubicacion: "Forum Club",
    comision: "Fiesta",
    esConvocatoria: true,
    descripcion: "El evento estelar de cierre. Dos años de espera terminan a lo grande en Forum Club. Fiesta de disfraces, estación de maquillaje neón, shows en vivo y premios.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Brian Patty", telefono: "59165991669", rol: "Mesas & Combos" }
    ],
    whatsappMensajeSugerido: "Hola Brian, deseo asegurar mi entrada/mesa para Alcohoritmo Halloween en Forum."
  }
];
