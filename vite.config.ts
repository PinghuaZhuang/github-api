import { defineConfig } from 'vite';
import path from 'path';

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

export default defineConfig((/* { command, mode } */) => {
  return {
    base: './',
    envPrefix: 'APP_',
    server: {
      host: '0.0.0.0',
    },
    build: {
      outDir: 'lib',
      lib: {
        entry: resolve('./src/index.ts'),
        name: 'request',
        fileName: 'request',
        formats: ['es', 'cjs', 'umd'],
      },
      // rollupOptions: {
      //   output: {
      //     exports: 'named',
      //   },
      // },
    },
    define: {
      GITHUB_TOKEN: JSON.stringify(process.env.GITHUB_TOKEN),
      GITHUB_OWNER: JSON.stringify(process.env.GITHUB_OWNER),
      GITHUB_REPO: JSON.stringify(process.env.GITHUB_REPO),
    },
  }
});
