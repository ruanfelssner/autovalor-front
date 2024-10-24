// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
		head: {
			title: 'Autovalor | Histórico de fipes',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1'
		}
	},
  compatibilityDate: '2024-04-03',
  future: {
    compatibilityVersion: 4,
  },  
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui'],
  runtimeConfig:{
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/autovalor',
  }
})