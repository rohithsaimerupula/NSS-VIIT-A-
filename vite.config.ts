import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    // Target modern browsers; adjust based on institutional requirements.
    target: 'es2020',
    // Source maps in production aid debugging; disable if storage/policy requires.
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split vendor chunk to improve caching.
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          supabase: ['@supabase/supabase-js'],
        },
      },
    },
  },
  server: {
    port: 5173,
    strictPort: false,
  },
})
