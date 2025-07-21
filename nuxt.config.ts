export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'keywords', content: 'adydetra, Adityawarman, Dewa, Putra, SMKN 1 Jakarta, Frontend Developer, Aptrocode' },
        { name: 'author', content: 'Adityawarman Dewa Putra' },
      ],
    },
  },

  runtimeConfig: {
    public: {
      MASTODON_URL: import.meta.env.MASTODON_URL,
      SUPABASE_URL: import.meta.env.SUPABASE_URL,
      SUPABASE_KEY: import.meta.env.SUPABASE_KEY,
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
    format: ['webp'],
  },

  site: {
    url: 'https://adydetra.my.id',
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
