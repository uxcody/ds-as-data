import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from the shared directory
      allow: [
        path.resolve(__dirname, '../..'),
      ]
    }
  },
  resolve: {
    alias: {
      '/shared': path.resolve(__dirname, '../../shared')
    }
  }
})

