import { useState } from "react";
import proyectoServices from "../services/proyectoServices.js";
import ProyectoCard from "./Proyectocard.jsx";
import DetalleProyecto from "./Detalleproyecto.jsx";
import "../css/Listaproyectos.css";

const formInicial = {
  titulo: "", categoria: "", estado: "", descripcion: "" ,   recursos: [{ tipo: "PDF", url: "", label: "" }],
  equipo: [{ nombre: "", rol: "" }],
};

export const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoServices.obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [nuevoProyecto, setNuevoProyecto] = useState(formInicial);
 
  const { titulo, categoria, estado, descripcion, recursos, equipo  } = nuevoProyecto;

  const tieneRecurso = recursos.some(r => r.url.trim());
  const tieneIntegrante = equipo.some(i => i.nombre.trim() && i.rol.trim());

 const invalido = !titulo || !categoria || !estado || !tieneRecurso || !tieneIntegrante;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };
  
 const handleActualizar = (tipo, index, field, value) => {
    const listaActualizada = nuevoProyecto[tipo].map((item, i) =>i === index ? { ...item, [field]: value } : item
    );
    setNuevoProyecto({ ...nuevoProyecto, [tipo]: listaActualizada });
  };

  const handleAgregarRI = (tipo, Vacio) => {
    setNuevoProyecto({ ...nuevoProyecto, [tipo]: [...nuevoProyecto[tipo], Vacio] });
  };

  const handleEliminar = (id) => {
    proyectoServices.eliminarProyecto(id);
    setProyectos(proyectoServices.obtenerProyectos());
     if (proyectoSeleccionado?.id === id) setProyectoSeleccionado(null);
  };

  const handleBuscar = (e) => {
    setProyectos(proyectoServices.buscarProyecto(e.target.value));
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    const proyectoCompleto = {
      titulo, categoria, estado,
      descripcion: descripcion,
      recursos: recursos.filter(r => r.url.trim()),
      equipo: equipo.filter(i => i.nombre.trim()),
    };
    proyectoServices.agregarProyecto(proyectoCompleto);
    setProyectos(proyectoServices.obtenerProyectos());
    setNuevoProyecto(formInicial);
  };

  return (
    <>
      <aside className="seccion-busqueda">
        <label>
          <span>Buscar:</span>
          <input type="text" placeholder="Buscar proyecto" onChange={handleBuscar} />
        </label>
      </aside>


      <main>
       {proyectoSeleccionado ? (
          <DetalleProyecto
            proyecto={proyectoSeleccionado}
            onVolver={() => setProyectoSeleccionado(null)}
          />) : (
            <>       
       <form className="form-agregar" onSubmit={handleAgregar}>
      <h2>Agregar Nuevo Proyecto</h2>
  
    <fieldset className="form-fieldset">
        <input name="titulo" placeholder="Título del proyecto" value={titulo} onChange={handleChange} />
        <div className="form-row">
        <select name="categoria" value={categoria} onChange={handleChange}>
        <option value="">-- Categoría --</option>
        <option value="Taller">Taller</option>
        <option value="Comedor">Comedor</option>
        <option value="Curso">Curso</option>
        <option value="Recaudacion">Recaudación</option>
        </select>
        <select name="estado" value={estado} onChange={handleChange}>
        <option value="">-- Estado --</option>
        <option value="En Proceso">En Proceso</option>
        <option value="Finalizado">Finalizado</option>
        </select>
      </div>
    </fieldset> 

    <fieldset className="form-fieldset">
       <legend>Descripción</legend>
       <textarea name="descripcion" placeholder="Descripcion" value={descripcion} onChange={handleChange} />
    </fieldset>

   <fieldset className="form-fieldset">
      <legend>Recursos</legend>
      {recursos.map((r, i) => (
      <div className="form-dinamico" key={i}>
      <select value={r.tipo} onChange={(e) =>
      handleActualizar("recursos", i, "tipo", e.target.value)}>
        <option value="PDF">PDF</option>
        <option value="GitHub">GitHub</option> 
        <option value="Drive">Drive</option>
      </select>
       <input placeholder="Nombre" value={r.label} onChange={(e) => handleActualizar("recursos", i, "label", e.target.value)} />
       <input placeholder="URL" value={r.url} onChange={(e) => handleActualizar("recursos", i, "url", e.target.value)} />
      </div>
    ))}
    <button type="button" className="btn-agregar-item" onClick={() => handleAgregarRI("recursos",  { tipo: "PDF", url: "", label: "" })}>
      Agregar Recurso
    </button>
    </fieldset>
   
    <fieldset className="form-fieldset">
      <legend>Equipo</legend>
      {equipo.map((integrante, i) => (
      <div className="form-dinamico" key={i}>
       <input placeholder="Nombre" value={integrante.nombre} onChange={(e) =>  handleActualizar("equipo", i, "nombre", e.target.value)} />
       <input placeholder="Rol" value={integrante.rol} onChange={(e) => handleActualizar("equipo", i, "url", e.target.value)} />
      </div>
    ))}
    <button type="button" className="btn-agregar-item" onClick={() => handleAgregarRI("equipo", { nombre: "", rol: "" })}>
      Agregar integrante
    </button>
  </fieldset>
  
   <button type="submit" disabled={invalido}>
     Agregar Proyecto
   </button>
   </form>
   

   <section className="contenedor">
      {proyectos.map((proyecto) => (
      <ProyectoCard
       key={proyecto.id}
       proyecto={proyecto}
       onEliminar={handleEliminar}
       onVerdetalle={(id) => setProyectoSeleccionado(proyectoServices.obtenerProyectoPorId(id))}/>
        ))}
     </section>
     </>
       )}
      </main>
    </>
  );
};

export default ListaProyectos;