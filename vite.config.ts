import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ['src'],
      exclude: ['src/playground/**', 'src/**/*.stories.ts', 'src/**/*.stories.tsx'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'StrapiDesignExtended',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'styled-components', '@strapi/design-system'],
      output: [
        {
          format: 'es',
          entryFileNames: 'index.mjs',
        },
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          exports: 'named',
        },
      ],
    },
  },
});
