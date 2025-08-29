import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mf_shell',
      remotes: {
        mf_characters: 'http://localhost:5001/assets/remoteEntry.js',
        mf_character_detail: 'http://localhost:5002/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 5003, // el puerto principal para acceder desde el navegador
    cors: true,  // habilita CORS para evitar bloqueos
  },
});
