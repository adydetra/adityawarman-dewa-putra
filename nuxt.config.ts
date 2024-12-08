export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
    },
  },

  srcDir: 'src/',

  runtimeConfig: {
    public: {
      MASTODON_URL: import.meta.env.MASTODON_URL,
    },
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/fontaine',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    'nuxt-delay-hydration',
  ],

  googleFonts: {
    families: {
      Poppins: [200, 300, 400, 500, 600, 700],
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
  },

  sitemap: {
    xsl: false,
    exclude: ['/closing'],
  },

  image: {
    quality: 30,
    format: ['webp'],
  },

  site: {
    url: 'https://adityawarman.vercel.app',
  },

  fontMetrics: {
    fonts: ['Poppins'],
  },

  delayHydration: {
    mode: 'mount',
  },

  devtools: {
    enabled: false,
  },

  tailwindcss: {
    viewer: false,
  },

  compatibilityDate: '2024-08-02',
});
