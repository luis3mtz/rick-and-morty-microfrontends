import React, { useEffect, useState } from "react";

function PersonajeDetalles({ personajeId, onClose }) {
  const [detalle, setDetalle] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!personajeId) return;

    setLoading(true);
    setError(null);

    fetch(`https://rickandmortyapi.com/api/character/${personajeId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al obtener detalle");
        return res.json();
      })
      .then((data) => {
        setDetalle(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [personajeId]);

  if (!personajeId) return null;

  return (
    <div className="detalle-container">
      <button
        className="detalle-close-button"
        onClick={onClose}
        aria-label="Cerrar detalle"
      >
        &times;
      </button>

      {loading && <p className="detalle-loading">Cargando detalle...</p>}
      {error && <p className="detalle-error">Error: {error}</p>}

      {!loading && !error && detalle && (
        <>
          <h2 className="detalle-title">{detalle.name}</h2>
          <img
            className="detalle-image"
            src={detalle.image}
            alt={detalle.name}
          />
          <p><b>Género:</b> <span>{detalle.gender}</span></p>
          <p><b>Estado:</b> <span>{detalle.status}</span></p>
          <p><b>Especie:</b> <span>{detalle.species}</span></p>
          <p><b>Origen:</b> <span>{detalle.origin.name}</span></p>
          <p><b>Ubicación:</b> <span>{detalle.location.name}</span></p>
          <h3>Episodios:</h3>
          <ul className="detalle-episode-list">
  {detalle.episode.map((ep) => (
    <li key={ep} className="detalle-episode-item">
      <a 
        href={ep} 
        target="_blank" 
        rel="noopener noreferrer"
        className="detalle-episode-link"
      >
        {ep}
      </a>
    </li>
  ))}
</ul>

        </>
      )}
    </div>
  );
}

export default PersonajeDetalles;
