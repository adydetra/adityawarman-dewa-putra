import tailwindcss from '@tailwindcss/vite';

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
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/sitemap',
    '@nuxtjs/critters',
  ],

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google', weights: ['200', '300', '400', '500', '600', '700', '800', '900'] },
    ],
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },

  routeRules: {
    '/': {
      prerender: true,
    },
    '/feed': {
      isr: 3600,
    },
    '/demo': {
      isr: 3600,
    },
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
    url: 'https://www.adydetra.my.id/',
  },

  devtools: {
    enabled: false,
  },

  compatibilityDate: '2024-08-02',
});
