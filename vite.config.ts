// Fixed: base path explicitly set, comments clarify GH Pages usage
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    // IMPORTANT: Set to '/' for the root user/org repo (h-yeo.github.io).
    // If this is a project repo (e.g. h-yeo.github.io/my-portfolio), change to '/my-portfolio/'
    base: '/',
    plugins: [react(), tailwindcss()],
    define: {
      // Expose build-time env vars here if needed, e.g.:
      // 'import.meta.env.APP_URL': JSON.stringify(env.APP_URL),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR disabled during agent edits to prevent flickering
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    build: {
      outDir: 'dist',
      // Ensure source maps are off for production (cleaner deploy)
      sourcemap: false,
    },
  };
});
