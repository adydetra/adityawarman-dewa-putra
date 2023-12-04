export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1000712907457165',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      MASTODON_URL: import.meta.env.MASTODON_URL,
    },
  },

  devtools: { enabled: false },

  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts', '@nuxt/image', '@nuxtjs/color-mode', 'nuxt-icon', 'nuxt-delay-hydration', 'nuxt-simple-sitemap'],

  site: {
    url: 'https://www.adydetra.my.id',
  },

  sitemap: {
    xsl: false,
    exclude: ['/closing'],
  },

  image: {
    quality: 30,
    format: ['webp'],
  },

  tailwindcss: {
    viewer: false,
  },

  delayHydration: {
    mode: 'mount',
  },

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
});
