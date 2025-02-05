// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  ssr: false,
  spaLoadingTemplate: false,
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    public: {
      apiBase: process.env.API_BASE_URL || '/api',
      appUrl: process.env.APP_URL,
    }
  },
})
