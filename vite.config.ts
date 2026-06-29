import { defineConfig } from 'vite';
import { resolve } from 'path';
// @ts-expect-error - vite-plugin-dts has an invalid export assignment in its type definitions
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
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: (id) =>
        ['react', 'react-dom', 'styled-components', '@strapi/design-system'].some(
          (dep) => id === dep || id.startsWith(`${dep}/`),
        ) || id.startsWith('@radix-ui/'),
    },
  },
});
