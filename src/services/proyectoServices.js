const proyectoServices = (() => {
  let proyectos = [ {
      id: 1,
      titulo: "Taller de SQL",
      categoria: "Taller",
      estado: "En Proceso",
      descripcion: "El Taller de SQL es un proyecto educativo orientado a estudiantes de la Facultad de Ingeniería que deseen fortalecer sus habilidades en el manejo de bases de datos relacionales. Un espacio práctico donde aprenderás a diseñar, crear y consultar bases de datos desde cero, con enfoque en cómo estructurar la información de manera lógica y cómo extraer datos valiosos usando comandos como SELECT, JOIN y GROUP BY para tomar decisiones basadas en datos reales.Al finalizar el taller, cada participante habrá completado un proyecto integrador que simula un caso de uso profesional, consolidando los conocimientos adquiridos a lo largo de las sesiones y desarrollando competencias directamente aplicables en el ámbito laboral y académico.",
      recursos: [
        { tipo: "PDF", url: "http://docs.google.com/guia.pdf", label: "Guía de Armado" },
        { tipo: "GitHub", url: "https://github.com/ejemplo/SQL", label: "Repositorio de estructuracion" },
        { tipo: "Drive", url: "https://drive.google.com/drive/folders/1A2B3C4D5E6F7G8H9I0J", label: "Recursos de Aprendizaje" }
      ],
      equipo: [
        { nombre: "Ana García", rol: "Gestion de contenidos" },
        { nombre: "Luis Pérez", rol: "Desarrollo tecnico" },
        { nombre: "Leonel Rodríguez", rol: "Tutoria academica" },
        { nombre: "Sara Juárez", rol: "Administracion de repositorios" }
      ]
    },
    {
      id: 2,
      titulo: "Nutrición con Energía",
      categoria: "Comedor",
      estado: "Finalizado",
      descripcion: "El proyecto Nutrición con Energía es una iniciativa de economía circular gestionada íntegramente por estudiantes, diseñada para combatir la inseguridad alimentaria mediante la provisión de almuerzos balanceados a precios accesibles. Su pilar fundamental es un sistema de reservaciones digital, desarrollado por los propios alumnos, que permite predecir la demanda exacta de cada jornada, eliminando la incertidumbre en las compras y reduciendo el desperdicio de alimentos a prácticamente cero.Al integrar tecnología propia con una logística de aprovechamiento de alimentos, el espacio no solo funciona como un comedor, sino como un laboratorio de ingenio para garantizar nutricion solidaria a lacomunidad universitaria sin generar grandes gastos.",
      recursos: [ { tipo: "PDF", url: "http://docs.google.com/manual.pdf", label: "Sistema de reservaciones - Manual de uso (PDF)" },
        { tipo: "GitHub", url: "https://github.com/reservas/NE", label: "Repositorio deL sistema" },
        { tipo: "Drive", url: "https://drive.google.com/drive/folders/hjkhuhb6-L", label: "Planillas de seguimiento nutricional (Drive)" }],
      equipo: [{ nombre: "Andrea Yapura", rol: "Coordinadora general" },
        { nombre: "Facundo Chauque", rol: "Logistica de insumos" },
        { nombre: "Miriam Gallardo", rol: "Diseño del sistema rotativo" },
      ]
    },
    {
      id: 3,
      titulo: "Curso de Python",
      categoria: "Curso",
      estado: "En Proceso",
      descripcion: "Este curso introduce a los participantes en el mundo de la programación con Python, partiendo desde los conceptos fundamentales del lenguaje como variables, estructuras de control, funciones y manejo de colecciones, hasta llegar a la aplicación práctica en el campo de la Inteligencia Artificial y el Machine Learning. A lo largo del recorrido se trabajará con librerías esenciales del ecosistema científico de Python como NumPy para el manejo de arrays y operaciones matemáticas, Pandas para el análisis y manipulación de datos tabulares, Matplotlib y Seaborn para la visualización de información, y Scikit-learn para la construcción y evaluación de modelos predictivos. Los participantes aprenderán a preprocesar datasets reales, aplicar algoritmos de clasificación y regresión, interpretar métricas de rendimiento y tomar decisiones basadas en los resultados obtenidos. Al finalizar el curso cada estudiante habrá desarrollado un proyecto integrador aplicando todo lo aprendido sobre un caso de uso real, consolidando las competencias necesarias para iniciarse profesionalmente en el análisis de datos y el desarrollo de soluciones basadas en inteligencia artificial.",
       recursos: [ { tipo: "PDF", url: "https://docs.google.com/document/d/guia-python-ml.pdf", label: "Guía de Introducción a Python" },
        { tipo: "GitHub", url: "https://github.com/curso-python/machine-learning-intro", label: "Repositorio de Ejercicios" },
       { tipo: "Drive", url: "https://drive.google.com/drive/folders/curso-python-ml", label: "Material del Curso" }],
      equipo: [{ nombre: "Valentina Ríos", rol: "Instructora de Python" },
       { nombre: "Matías Herrera", rol: "Asistente de Machine Learning" },
       { nombre: "Camila Solano", rol: "Coordinadora Académica" },
      ]
    },
    {
      id: 4,
      titulo: "Loteria Universitaria: Probabilidad en Acción",
      categoria: "Recaudacion",
      estado: "Finalizado",
      descripcion: "La Lotería Universitaria: Probabilidad en Acción, es una iniciativa organizada por los estudiantes con el objetivo de recaudar fondos para mejorar el equipamiento y los materiales de los laboratorios. Lo que hace especial a este proyecto es que los propios alumnos desarrollan el software encargado del sorteo, utilizando algoritmos que aseguran que la selección de los ganadores sea totalmente aleatoria, justa y transparente para todos los participantes.Además de la parte tecnológica, el proyecto incluye un análisis matemático para definir los precios de los números y el valor de los premios de manera equilibrada. De esta forma, los estudiantes logran aplicar sus conocimientos de programación y estadística en una actividad práctica que beneficia a toda la facultad, permitiendo que la institución cuente con mejores recursos gracias al trabajo colaborativo.",
      recursos: [
      { tipo: "PDF", url: "https://docs.google.com/document/d/informe-probabilidades.pdf", label: "Informe de estudio de probabilidades" },
      {tipo: "GitHub", url: "https://github.com/sorteo/software-loteria", label: "Código fuente del software de sorteo" },
      { tipo: "Drive", url: "https://drive.google.com/drive/folders/rendicion-cuentas", label: "Rendición de cuentas y destino de fondos" },
      ],
    equipo: [
     { nombre: "Nicolás Herrera", rol: "Coordinador y administración de fondos" },
    { nombre: "Jimena Cabrera", rol: "Diseño y venta de boletos" },
    { nombre: "Tomás Arroyo", rol: "Selección y gestión de premios" },
   { nombre: "Dante Vilca", rol: "Estudio de probabilidades y estadística" },
   ],
    },
    {
      id: 5,
      titulo: "Impresión 3D y Prototipado Rápido",
      categoria: "Taller",
      estado: "En Proceso",
      descripcion: " Este espacio de capacitación práctica tiene como objetivo que los estudiantes de ingeniería aprendan a calibrar impresoras FDM y autilizar software de laminado para convertir sus diseños CAD en modelos físicos reales. El taller cubre desde los conceptos básicos de la tecnología de deposición de material fundido hasta la optimización de parámetros de impresión como temperatura, velocidad, relleno y soportes.A lo largo del taller, cada participante desarrolla al menos un prototipo propio, aplicando el proceso completo: diseño en software CAD, preparación del archivo en el laminador, configuración de la impresora y post-procesado de la pieza. El proyecto busca democratizar el acceso a herramientas de fabricación digital dentro de la facultad, fomentando la cultura del prototipado rápido como metodología de resolución de problemas de ingeniería.",
      recursos: [
      { tipo: "PDF", url: "https://docs.google.com/document/d/guia-calibracion-fdm.pdf", label: "Guía de calibración de impresoras FDM" },
      { tipo: "GitHub", url: "https://github.com/taller3d/modelos-ejemplo", label: "Modelos de ejemplo en repositorio" },
      { tipo: "Drive", url: "https://drive.google.com/drive/folders/galeria-prototipos", label: "Galería de prototipos realizados" },
       ],
      equipo: [
       { nombre: "Lucía Mamani", rol: "Coordinadora del taller" },
       { nombre: "Rodrigo Condorí", rol: "Técnico de equipos e impresoras" },
      { nombre: "Martin Fernandez", rol: "Instructor de software CAD y laminado" },]
       },
  ];

  const obtenerProyectos = () => [...proyectos];

 const obtenerProyectoPorId = (id) => {
    return proyectos.find((p) => p.id === Number(id));
  };

  const agregarProyecto = (nuevoProyecto) => {
  const nuevoId = proyectos.length > 0 ? proyectos.at(-1).id + 1 : 1;
  const nuevo = { id: nuevoId, ...nuevoProyecto };
  proyectos = [...proyectos, nuevo];
};

  const eliminarProyecto = (id) => {
    proyectos = proyectos.filter((p) => p.id !== id);
  };

  const buscarProyecto = (texto) => {
    return proyectos.filter((p) =>
      p.titulo.toLowerCase().includes(texto.toLowerCase())
    );
  };

  return { obtenerProyectos,  obtenerProyectoPorId, agregarProyecto, eliminarProyecto, buscarProyecto };
})();

export default proyectoServices;