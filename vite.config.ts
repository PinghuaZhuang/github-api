import { defineConfig, UserConfig, UserConfigFn } from 'vite';
import path from 'path';

function resolve(url: string) {
  return path.resolve(__dirname, url);
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isNodeEnv = mode === 'node';

  return {
    base: './',
    envPrefix: 'APP_',
    server: {
      host: '0.0.0.0',
    },
    build: {
      outDir: isNodeEnv ? 'lib/node' : 'lib',
      lib: {
        entry: isNodeEnv ? resolve('./src/index.node.ts') : resolve('./src/index.ts'),
        name: 'request',
        fileName: isNodeEnv ? 'request.node' : 'request',
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
