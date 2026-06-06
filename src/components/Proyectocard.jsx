import React from "react";

const ProyectoCard = ({ proyecto, onEliminar , onVerdetalle }) => {
    const { id, titulo, categoria, estado } = proyecto;
    return (
       <article className="card">
      <h2>{titulo}</h2>
      <h3>{categoria}</h3> 
       <span
        className={`estado-badge ${
          estado === "Finalizado" ? "finalizado" : "en-proceso"
        }`}
      >
        {estado}
      </span>
       
       <div className="card-actions">
            <button className="btn-detalle" onClick={() => onVerdetalle(id)}>
          Ver Detalle
        </button>
        <button className="btn-borrar" onClick={() => onEliminar(id)}>
          Eliminar proyecto
        </button>
      </div>
    </article>
  );
};


export default ProyectoCard;