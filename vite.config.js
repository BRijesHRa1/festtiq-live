import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Increase chunk size warning limit to handle large assets
    chunkSizeWarningLimit: 1000,
    // Optimize asset handling
    assetsInlineLimit: 0, // Don't inline any assets
    rollupOptions: {
      output: {
        // Split chunks to reduce memory usage
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router-dom'],
          'icons': ['@heroicons/react', '@phosphor-icons/react', 'react-icons'],
          'ui': ['keen-slider', 'swiper']
        }
      }
    }
  },
  // Optimize dev server
  server: {
    port: 5173
  }
})
