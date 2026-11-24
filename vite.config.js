import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 3000, open: false },
  preview: { port: 3000 },
  build: {
    // Keep the CRA output directory name: `npm run deploy` (gh-pages -d build) and docs rely on it.
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: false,
  },
});
