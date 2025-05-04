import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // The backend server URL
        // changeOrigin: true, // Change the origin of the host header to the target URL
        // secure: false, // Allow self-signed certificates if using HTTPS
      }
    }
  },
  plugins: [react()]
});
