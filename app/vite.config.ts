/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { exec } from 'child_process';
import path from 'path';
import util from 'util';
import { defineConfig, loadEnv } from 'vite';

const asyncExec = util.promisify(exec);

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const envPrefix = '';
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), envPrefix) };

  const packageVersion = process.env.npm_package_version || '0.0.0';
  const appVersion = process.env.VITE_APP_VERSION || packageVersion;
  process.env.VITE_APP_VERSION = appVersion;
  if (appVersion === 'GIT_BRANCH') {
    const { stderr, stdout } = await asyncExec(
      'git rev-parse --abbrev-ref HEAD'
    );
    if (!stderr && typeof stdout === 'string') {
      const gitBranchName = stdout;
      process.env.VITE_APP_VERSION = gitBranchName;
    }
  }

  const serverOptions = {
    port: Number(process.env.APP_PORT || 3000),
  };

  return {
    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },

    preview: serverOptions,
    server: serverOptions,

    test: {
      environment: 'jsdom',
      setupFiles: './src/tests/setup.ts',
    },
  };
});
