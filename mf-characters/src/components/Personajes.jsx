import React, { useState, useEffect } from 'react'

function Personajes({ onSelectPersonaje }) {
  const [personajes, setPersonajes] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [nombre, setNombre] = useState('')
  const [especie, setEspecie] = useState('')
  const [estado, setEstado] = useState('')

  useEffect(() => {
    const fetchPersonajes = () => {
      setLoading(true)

      const queryParams = new URLSearchParams()
      if (nombre) queryParams.append('name', nombre)
      if (especie) queryParams.append('species', especie)
      if (estado) queryParams.append('status', estado)

      fetch(`https://rickandmortyapi.com/api/character?${queryParams.toString()}`)
        .then(res => {
          if (!res.ok) throw new Error('No se encontraron personajes')
          return res.json()
        })
        .then(data => {
          setPersonajes(data.results)
          setLoading(false)
          setError(null)
        })
        .catch(err => {
          setError(err.message)
          setPersonajes([])
          setLoading(false)
        })
    }

    fetchPersonajes()
  }, [nombre, especie, estado])

  return (
    <div className="personajes-container">
      <h1 className="personajes-title">Lista de Personajes</h1>

      {/* Filtros */}
      <div className="personajes-filtros">
        <input
          className="filtro-input"
          type="text"
          placeholder="Filtrar por nombre"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          className="filtro-input"
          type="text"
          placeholder="Filtrar por especie"
          value={especie}
          onChange={e => setEspecie(e.target.value)}
        />
        <select
          className="filtro-select"
          value={estado}
          onChange={e => setEstado(e.target.value)}
        >
          <option value="">Todos los estados</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Estados */}
      {loading && <p className="personajes-loading">Cargando personajes...</p>}
      {error && <p className="personajes-error">Error: {error}</p>}

      {/* Lista */}
      <div className="personajes-lista">
        {personajes.map(personaje => (
          <div
            key={personaje.id}
            className="personaje-card"
            onClick={() => onSelectPersonaje(personaje.id)}
            role="button"
            tabIndex={0}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') onSelectPersonaje(personaje.id)
            }}
          >
            <img
              className="personaje-image"
              src={personaje.image}
              alt={personaje.name}
            />
            <h3 className="personaje-name">{personaje.name}</h3>
            <p className="personaje-info"><b>Género:</b> {personaje.gender}</p>
            <p className="personaje-info"><b>Estado:</b> {personaje.status}</p>
            <p className="personaje-info"><b>Especie:</b> {personaje.species}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Personajes
