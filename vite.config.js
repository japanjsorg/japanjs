// ライブラリモード | Vite
// https://vitejs.dev/guide/build.html#library-mode

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist', // 出力先
    emptyOutDir: false, // ディレクトリをクリアしない
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/japanjs.ts'),
      name: 'JapanJS',
      // the proper extensions will be added
      fileName: 'japanjs',
    },
  },
})