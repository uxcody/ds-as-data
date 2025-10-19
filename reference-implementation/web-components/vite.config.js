import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  server: {
    port: 5174,
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
