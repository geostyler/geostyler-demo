import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import VitePluginMetaEnv from 'vite-plugin-meta-env';
import packageLockJson from './package-lock.json';

const metaEnv = {
  GEOSTYLER_VERSION: packageLockJson.packages['node_modules/geostyler'].version
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginMetaEnv(metaEnv, 'import.meta.env'),
  ],
  base: '/geostyler-demo',
  server: {
    host: '0.0.0.0',
  },
  define: {
    global: {},
  },
});
