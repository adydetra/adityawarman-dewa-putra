// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-swiper',
  ],

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700],
    }
  },
  
  colorMode: {    
    classSuffix: ''
  },

  swiper: {
    // Swiper options
    //----------------------
    // prefix: 'Swiper',
    // styleLang: 'css',
    // modules: ['navigation', 'pagination'], // all modules are imported by default
  },
})