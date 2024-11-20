
// https://vitejs.dev/guide/build.html#multi-page-app

import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aboutUs: resolve(__dirname, 'src/pages/about-us/about-us.html'),
        admin: resolve(__dirname, 'src/pages/admin/admin.html'),
        register: resolve(__dirname, 'src/pages/register/register.html'),
        login: resolve(__dirname, 'src/pages/login/login.html'),
      },
    },
  },
})