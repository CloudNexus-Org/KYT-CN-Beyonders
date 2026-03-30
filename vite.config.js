import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/KYT-CN-Beyonders/',
  server: {
    port: 3000,
    host: true
  }
})