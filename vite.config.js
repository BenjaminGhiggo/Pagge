import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Pagge/', // Reemplaza con el nombre de tu repositorio
  server: {
    open: true, // Abre automáticamente el navegador al iniciar el servidor de desarrollo
  },
});
