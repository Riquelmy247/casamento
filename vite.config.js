import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/** Deve coincidir com o nome do repositório no GitHub Pages: /NOME_DO_REPO/ */
const GH_PAGES_BASE = '/casamento/'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  base: command === 'build' ? GH_PAGES_BASE : '/',
}))