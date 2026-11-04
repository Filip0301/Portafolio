import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

// ESLint 9+ solo lee "flat config"; el antiguo .eslintrc.json se ignoraba y
// el proyecto no tenía linting.
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    // Archivos de configuración en CommonJS (Tailwind/PostCSS).
    files: ['*.config.js'],
    rules: { '@typescript-eslint/no-require-imports': 'off' },
  },
]);
