import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/landing/', // ✅ lowercase 'l' to match folder name
  plugins: [react()],
})

