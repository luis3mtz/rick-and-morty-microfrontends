// src/main.jsx o donde renderices la app
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import CharactersApp from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CharactersApp />
  </BrowserRouter>
)
