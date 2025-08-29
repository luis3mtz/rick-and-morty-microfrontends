import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  base: "/", // Así remoteEntry.js queda accesible en la raíz
  plugins: [
    react(),
    federation({
      name: "mf_characters",
      filename: "remoteEntry.js",
      exposes: {
        "./Personajes": "./src/components/Personajes.jsx",
      },

     shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 5001,
  },
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
