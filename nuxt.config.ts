// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { dir: 'rtl', lang: 'fa' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi'] // <!--- this
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
})