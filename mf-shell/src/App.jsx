import React, { useState } from "react";
import Personajes from "mf_characters/Personajes";
import PersonajeDetalles from "mf_character_detail/PersonajeDetalles";
import './styles.css';

function ShellApp() {
  const [personajeId, setPersonajeId] = useState(null);

  return (
    <div className="layout">
      <header className="header">Rick & Morty Shell</header>

      <section className="content">
        <Personajes onSelectPersonaje={setPersonajeId} />
      </section>

      <aside className="lateral">
        {personajeId ? (
          <PersonajeDetalles personajeId={personajeId} onClose={() => setPersonajeId(null)} />
        ) : (
          <p style={{ color: '#888', margin: '20px' }}>
            Selecciona un personaje para ver sus detalles aquí
          </p>
        )}
      </aside>

      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/luis-enrique-martinez-garcia-01a031198/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#03228f', textDecoration: 'underline' }}
        >
          © Luis Enrique Martinez Garcia 
        </a>
      </footer>
    </div>
  );
}

export default ShellApp;
