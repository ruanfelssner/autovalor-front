// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },  
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  runtimeConfig:{
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/autovalor',
  }
})