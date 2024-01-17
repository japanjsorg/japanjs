// ライブラリモード | Vite
// https://vitejs.dev/guide/build.html#library-mode

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'JapanJS',
      // the proper extensions will be added
      fileName: 'japanjs',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        // https://rollupjs.org/configuration-options/#output-preservemodules
        preserveModules: true,
        // https://rollupjs.org/configuration-options/#output-preservemodulesroot
        preserveModulesRoot: 'lib'
      },
    },
  },
})