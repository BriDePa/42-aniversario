/**
 * ==============================================================================
 * ARCHIVO TEMPORAL PARA EDICIÓN MANUAL - VERSIÓN MULTI-DÍA Y SESIONES
 * Llenado con TODA la información actual. 
 * Edítalo y avísame cuando lo tengas listo.
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
    { nombre: "M. Sc. Manuel Ramiro Flores Rojas", rol: "Director de la carrera de Informática" },
    { nombre: "Deymar Patty", rol: "Coordinador General" }
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

export const FIESTA_ALCOHORITMO = {
  nombre: "ALCOHORITMO HALLOWEEN M.10 F.26",
  eslogan: "La fiesta más esperada del año // 2 años de sequía terminan a lo grande",
  fecha: "2026-10-16",
  horaApertura: "19:00",
  lugar: "Forum Club (¡Por primera vez en la historia!)",
  concepto: "Fiesta de Disfraces & Halloween",
  antecedente: "La última fiesta oficial fue en 2024 (2 años de espera)",
  atracciones: [
    "Fiesta & Concurso de Disfraces con premios brutales",
    "Estación de Maquillaje Neón en vivo (pintura UV y glitter)",
    "Show de Hora Loca en vivo",
    "Hora Loca temática terrorífica",
    "Fiesta con DJ hasta el cierre"
  ],
  bonusDobleFiesta: {
    titulo: "Pase Libre a Apocalipsis Zombie",
    fecha: "2026-10-17",
    descripcion: "Con tu manilla de Alcohoritmo entras TOTALMENTE GRATIS a la fiesta Apocalipsis Zombie del sábado 17 de octubre."
  },
  preciosTier1: {
    general: 25,
    vip: 35,
    moneda: "Bs",
    condicion: "Preventa limitada por aforo de Forum"
  },
  menuBebidas: [
    { id: "cisco-sour", nombre: "Cisco Sour", descripcion: "Pisco Sour", precioBs: 80, icono: "🍋" },
    { id: "plan-antiguo", nombre: "El Plan Antiguo", descripcion: "Yarda Cerveza", precioBs: 220, icono: "🍻" },
    { id: "juez-patito", nombre: "Juez Patito", descripcion: "Yarda Mexicana", precioBs: 220, icono: "🇲🇽" },
    { id: "git", nombre: "Git", descripcion: "Brighton GIN", precioBs: 350, icono: "🍸" },
    { id: "piso-5", nombre: "Piso 5", descripcion: "Flor de Caña 5 Años", precioBs: 380, icono: "🥃" },
    { id: "compilador", nombre: "El Compilador", descripcion: "Crema Amarula", precioBs: 380, icono: "🥛" },
    { id: "dinosaurio", nombre: "Dinosaurio", descripcion: "Vodka 1825", precioBs: 400, icono: "🦖" }
  ],
  combosGrupales: {
    combo10: { personas: 10, manillasTotales: 11, bonus: "¡+1 Manilla EXTRA GRATIS! (Pagan 10 y entran 11)", mesaIncluida: true, preciosTotales: { general: { "cisco-sour": 330, "plan-antiguo": 470, "juez-patito": 470, "git": 600, "piso-5": 630, "compilador": 630, "dinosaurio": 650 }, vip: { "cisco-sour": 430, "plan-antiguo": 570, "juez-patito": 570, "git": 700, "piso-5": 730, "compilador": 730, "dinosaurio": 750 } } },
    combo15: { personas: 15, manillasTotales: 17, bonus: "¡+2 Manillas EXTRA GRATIS! (Pagan 15 y entran 17)", mesaIncluida: true, preciosTotales: { general: { "cisco-sour": 455, "plan-antiguo": 595, "juez-patito": 595, "git": 725, "piso-5": 755, "compilador": 755, "dinosaurio": 775 }, vip: { "cisco-sour": 605, "plan-antiguo": 745, "juez-patito": 745, "git": 875, "piso-5": 905, "compilador": 905, "dinosaurio": 925 } } },
    combo20: { personas: 20, mesaIncluida: true, bonusGeneral: "¡+3 Manillas EXTRA GRATIS! (Pagan 20 y entran 23)", bonusVIP: "¡+1 JARRA EXTRA A ELECCIÓN DE REGALO! (Excepto Whiskey Sour)", preciosTotales: { general: { "cisco-sour": 580, "plan-antiguo": 720, "juez-patito": 720, "git": 850, "piso-5": 880, "compilador": 880, "dinosaurio": 900 }, vip: { "cisco-sour": 780, "plan-antiguo": 920, "juez-patito": 920, "git": 1050, "piso-5": 1080, "compilador": 1080, "dinosaurio": 1100 } } }
  },
  timelineNoche: [
    { hora: "19:00", actividad: "Apertura de Puertas, Warm Up & Recepción de Disfraces" },
    { hora: "19:30", actividad: "Concurso Oficial al Mejor Disfraz (Premios) y Premiación Ganadores de la Semana Aniversario" },
    { hora: "20:00", actividad: "DJ KOALA" },
    { hora: "22:00", actividad: "Grupo sorpresa y Hora Loca " },
    { hora: "23:00", actividad: "DJ Alan hasta el cierre" }
  ]
};

export const EVENTOS_ANIVERSARIO = [
  // --- JUEVES 08 OCTUBRE ---
  {
    id: "coloquio-ia-dia1",
    titulo: "Coloquio sobre ética, gobernanza y normativa de la IA",
    categoria: "Académico",
    fecha: "2026-10-08",
    diaSemana: "Jueves" &"Viernes",
    horaInicio: "14:00" "ambos días",
    horaFin: "18:00",
    ubicacion: "Audiovisual / Auditorio",
    comision: "Dirección",
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
    titulo: "Torneo de Futsal Varones",
    categoria: "Deportes",
    fecha: "2026-10-08", // Día de inicio oficial
    diaSemana: "Miercoles 8, Jueves 9, Viernes 10, Martes 13, Miercoles 14, Jueves 15 y viernes 16",
    horaInicio: "hora del día de inicio oficial: 08:30",
    horaFin: null,
    ubicacion: "Canchas",
    comision: "Deportes",
    esConvocatoria: true,
    descripcion: "Campeonato de futsal varones inter-semestres. Se juega en distintas fechas.",
    // AQUI PUEDES LLENAR LAS SESIONES DE FÚTBOL
    sesiones: [
      { fecha: "2026-10-08", diaSemana: "Jueves", horaInicio: "09:00", horaFin: "13:00", detalle: "Fase de Grupos (Ejemplo)" },
      { fecha: "2026-10-09", diaSemana: "Viernes", horaInicio: "09:00", horaFin: "13:00", detalle: "Fase de Grupos" }
    ],
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Luis Herrera", telefono: "59160161167", rol: "Coordinador Deportes" },
      { nombre: "Sergio Zabaleta", telefono: "59165536176", rol: "Coordinador Deportes" }
    ],
    whatsappMensajeSugerido: "Hola, quisiera consultar sobre el fixture y planillas del Torneo de Futsal Varones."
  },
  
  // --- SÁBADO 10 OCTUBRE ---
  {
    id: "captura-bandera-inauguracion",
    titulo: "Captura la Bandera (CTF)",
    categoria: "Académico",
    fecha: "2026-10-10",
    fechaFin: "2026-10-16", // EVENTO CONTINUO HASTA EL VIERNES
    diaSemana: "Sábado a Viernes",
    horaInicio: "16:00",
    horaFin: "Evento Continuo",
    ubicacion: "Laboratorios / Online",
    comision: "Grupos de estudio",
    esConvocatoria: true,
    descripcion: "Competencia de ciberseguridad, hacking ético y criptografía a través de acertijos. Inicia el sábado y dura toda la semana.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Andres Gómez", telefono: "59179631539", rol: "Encargado CTF" }
    ],
    whatsappMensajeSugerido: "Hola Andrés, quiero inscribir a mi equipo para la competencia Captura la Bandera."
  },
  {
    id: "bautizo-estudiantes",
    titulo: "Gran Bautizo de Nuevos Estudiantes",
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
    categoria: "Oficial",
    fecha: "2026-10-12",
    diaSemana: "Lunes",
    horaInicio: "09:00",
    horaFin: "12:00",
    ubicacion: "Auditorio de la Carrera",
    comision: "Dirección",
    esConvocatoria: false,
    descripcion: "Acto conmemorativo al aniversario, con presencia de autoridades universitarias. Lugar, Auditorio de la Carrera.",
    basesUrl: null,
    imagenUrl: null,
    encargados: [],
    whatsappMensajeSugerido: "Hola, quisiera saber los detalles del Acto Inaugural del Aniversario."
  },
  {
    id: "inicio-otros-deportes",
    titulo: "Inicio de Deportes: Básquet, Wally y Futsal Damas. separar los deportes en eventos diferentes pero que inician el mismo día",
    categoria: "Deportes",
    fecha: "2026-10-12",
    diaSemana: "Múltiples Días",
    horaInicio: "13:00",
    horaFin: null,
    ubicacion: "Canchas",
    comision: "Deportes",
    esConvocatoria: true,
    descripcion: "Arranque de los torneos de básquetbol, wallybol y futsal femenino.",
    sesiones: [
      { fecha: "2026-10-12", diaSemana: "Lunes", horaInicio: "13:00", horaFin: "17:00", detalle: "Primera fecha" }
    ],
    basesUrl: null,
    imagenUrl: null,
    encargados: [
      { nombre: "Luis Herrera", telefono: "59160161167", rol: "Deportes" },
      { nombre: "Sergio Zabaleta", telefono: "59165536176", rol: "Deportes" },
      { nombre: "Alex Condori", telefono: "59169922008", rol: "Deportes" }
    ],
    whatsappMensajeSugerido: "Hola, quisiera consultar los horarios de básquet, wally y futsal damas."
  },
  {
    id: "seminario-dia1",
    titulo: "Seminario",
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
    categoria: "Recreativo",
    fecha: "2026-10-13",
    fechaFin: "2026-10-14",
    diaSemana: "Martes y Miércoles",
    horaInicio: "08:30",
    horaFin: "Continuo",
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
    id: "seminario-dia3",
    titulo: "Seminario",
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
      { nombre: "Gustavo Vera", telefono: "59160116016", rol: "Encargado Botargas" }
    ],
    whatsappMensajeSugerido: "Hola, deseo inscribir mi botarga/disfraz para la carrera del jueves."
  },
  {
    id: "hackaton-24h",
    titulo: "Hackatón 24 Horas (AFTER CODE)",
    categoria: "Académico",
    fecha: "2026-10-15",
    fechaFin: "2026-10-16",
    diaSemana: "Jueves",
    horaInicio: "18:00",
    horaFin: "11:00",
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
    categoria: "Fiesta",
    fecha: "2026-10-16",
    diaSemana: "Viernes",
    horaInicio: "18:30",
    horaFin: "04:00",
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
