// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  plugins: [{ src: '~/plugins/aos', mode: "client" }],

  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-swiper',
    '@vite-pwa/nuxt'
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

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: "Adityawarman Dewa Putra",
      short_name: "Adityawarman Dewa Putra",
      theme_color: '#000',
      background_color: '#000',
      icons: [
        {
          src: 'pwa/icon_48x48.png',
          sizes: '48x48',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_64x64.png',
          sizes: '64x64',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_72x72.png',
          sizes: '72x72',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_96x96.png',
          sizes: '96x96',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_144x144.png',
          sizes: '144x144',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa/icon_512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico,webp}'],
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },
})