// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@element-plus/nuxt"],
  build: {
    transpile: [/echarts/],
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  nitro: {  
    devProxy: {  
      '/sse': {  
        target: 'http://192.168.28.33:8000',  
        changeOrigin: true  
      }  
    }  
  } 
})
