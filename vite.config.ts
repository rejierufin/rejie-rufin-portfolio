import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Only the preview hostname supplied for this workspace is allowed, passed in
// through PREVIEW_HOSTNAME. No wildcard or blanket host allowlist is used.
const previewHost = process.env.PREVIEW_HOSTNAME

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  server: {
    host: true,
    port: 3000,
    allowedHosts: previewHost ? [previewHost] : [],
  },
})
