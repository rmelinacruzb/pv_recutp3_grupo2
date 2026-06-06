import React from "react";
import "../css/Detalleproyecto.css";

const Detalleproyecto = ({ proyecto, onVolver }) => {
    const { titulo, categoria, estado , descripcion, recursos, equipo} = proyecto;

    return (
        <article className="detalle-contenedor">
            
            <header className="detalle-header">
                <h2>{titulo}</h2>
            </header>

            <div className="detalle-info">
             <span><strong>Categoría:</strong> {categoria}</span>
             <span><strong>Estado:</strong> {estado}</span>
            </div>

            <section className="detalle-seccion">
               <h3>Descripción del Proyecto</h3>
               <p>{descripcion}</p>   
            </section>

            <section className="detalle-seccion">
                <h3>Recursos:</h3>
               <ul>
            {recursos.map((recurso, i) => (
              <li key={i}>
                <a href= "#" >
                    {recurso.label} ({recurso.tipo})
                </a>
              </li>
            ))}
            </ul>
            </section>

            <section className="detalle-seccion">
                <h3>Equipo de Trabajo:</h3>
                <ul>
                    {equipo.map((miembro, i) => (
                        <li key={i}>
                        {miembro.nombre} - <strong>{miembro.rol} </strong>
                        </li>
                    ))}
                </ul>
            </section>
            
            <footer>
              <button className="btn-volver" onClick={onVolver}>
                    Volver
                </button>
            </footer>
        </article>
    );
};

export default Detalleproyecto;