import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      overlay: {
        initialIsOpen: false, // Disables overlay by default
      },
    }),
    eslint({
      emitWarning: true,
    }),
  ],
  server: {
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
  build: {
    sourcemap: true,
  },
});
