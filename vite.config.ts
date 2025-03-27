import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',  // ✅ Simulate a browser environment
    setupFiles: './src/test/setup.ts',  // ✅ Ensure Jest-DOM matchers are loaded
    exclude: [...configDefaults.exclude, 'node_modules/'],  // ✅ Avoid testing node_modules
  },
});
