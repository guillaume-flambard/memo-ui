import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.{ts,tsx}'],
    css: false,
  },
  resolve: {
    alias: {
      '@memo-ui/utils': path.resolve(__dirname, '../utils/src'),
      '@memo-ui/core': path.resolve(__dirname, '../core/src'),
    },
  },
});
