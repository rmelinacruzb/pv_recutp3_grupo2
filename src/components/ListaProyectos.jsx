import { useState } from "react";
import proyectoServices from "../services/proyectoServices.js";
import "../css/Listaproyectos.css";

export const ListaProyectos = () => {

  const [proyectos, setProyectos] = useState(proyectoServices.obtenerProyectos());

  const [nuevoProyecto, setNuevoProyecto] = useState({
    titulo: "",
    categoria: "",
    estado: "",
  });

  const invalido =
    !nuevoProyecto.titulo ||
    !nuevoProyecto.categoria ||
    !nuevoProyecto.estado;

  const handleEliminar = (id) => {
    proyectoServices.eliminarProyecto(id);
    setProyectos(proyectoServices.obtenerProyectos());
  };

  const handleBuscar = (e) => {
    setProyectos(proyectoServices.buscarProyecto(e.target.value));
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    proyectoServices.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoServices.obtenerProyectos());
    setNuevoProyecto({ titulo: "", categoria: "", estado: "" });
  };

  return (
    <>
      <aside>
        <label>
          Buscar:
          <input type="text" placeholder="Buscar proyecto" onChange={handleBuscar} />
        </label>
      </aside>

      <main>
    <form className="form-agregar" onSubmit={handleAgregar}>
  <h2>Agregar Nuevo Proyecto</h2>
  
  <input
    name="titulo"
    placeholder="Título"
    value={nuevoProyecto.titulo}
    onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })}
  />

  <select
    name="categoria"
    value={nuevoProyecto.categoria}
    onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })}
  >
    <option value="">-- Categoría --</option>
    <option value="Taller">Taller</option>
    <option value="Comedor">Comedor</option>
    <option value="Curso">Curso</option>
    <option value="Recaudacion">Recaudación</option>
  </select>

  <select
    name="estado"
    value={nuevoProyecto.estado}
    onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })}
  >
    <option value="">-- Estado --</option>
    <option value="En Proceso">En Proceso</option>
    <option value="Finalizado">Finalizado</option>
  </select>

  <button type="submit" disabled={invalido}>
    Agregar Proyecto
  </button>
</form>

        <div className="contenedor">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="card">
              <h2>{proyecto.titulo}</h2>
              <h3>{proyecto.categoria}</h3>
              <span className={`estado-badge ${proyecto.estado === "Finalizado" ? "finalizado" : "en-proceso"}`}>
                {proyecto.estado}
              </span>
              <div className="card-botones">
                <button className="btn-borrar" onClick={() => handleEliminar(proyecto.id)}>
                  Eliminar Proyecto
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};