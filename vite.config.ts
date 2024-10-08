import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'public') },
      { find: '@images', replacement: resolve(__dirname, '/images') },
      { find: '@src', replacement: resolve(__dirname, 'src') },
      {
        find: '@components',
        replacement: resolve(__dirname, 'src/components'),
      },
    ],
  },
  plugins: [react(), tsconfigPaths()],
  base: process.env.NODE_ENV === 'production' ? '/pixel-bagel/' : '/',
})
