import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vitime.dev/config/
export default defineConfig({
  plugins: [react() , tailwindcss()], 
  base: '/SnakeGame/',  // 👈 اسم مخزنت رو اینجا بذار
})
