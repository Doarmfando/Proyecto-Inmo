import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/Proyecto-Inmo/', // 👈 ESTA LÍNEA ES CLAVE
  plugins: [react()],
})
