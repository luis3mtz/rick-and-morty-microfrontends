// mf-character-detail/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  base: '/', 
  plugins: [
    react(),
    federation({
      name: 'mf_character_detail',
      filename: 'remoteEntry.js',
      exposes: {
        './PersonajeDetalles': './src/components/PersonajeDetalles.jsx', 
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ],
  server: {
    port: 5002
  },
  build: {
    target: 'esnext',
    modulePreload: false,
    minify: false,
    cssCodeSplit: false
  }
})
