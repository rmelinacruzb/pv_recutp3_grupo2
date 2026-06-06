const proyectoServices = (() => {
  let proyectos = [
    { id: 1, titulo: "Taller de SQL", categoria: "Taller", estado: "En Proceso" },
    { id: 2, titulo: "Nutrición con Energía", categoria: "Comedor", estado: "Finalizado" },
    { id: 3, titulo: "Curso de Python", categoria: "Curso", estado: "En Proceso" },
    { id: 4, titulo: "Lotería Universitaria: Probabilidad en Acción", categoria: "Recaudacion", estado: "Finalizado" },
    { id: 5, titulo: "Impresión 3D y Prototipado Rápido", categoria: "Taller", estado: "En Proceso" },
  ];

  const obtenerProyectos = () => [...proyectos];

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

  return { obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto };
})();

export default proyectoServices;