import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: []
  },
  server: {
    fs: {
      // Prevent serving files from nested node_modules
      deny: ['**/node_modules/**']
    }
  }
})
