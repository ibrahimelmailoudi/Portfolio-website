// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // Ensure that Vite serves index.html for any non-file requests
    fs: {
      strict: false,
    },
  },
});
