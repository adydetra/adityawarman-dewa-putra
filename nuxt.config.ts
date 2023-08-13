// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "nuxt-icon",
    "nuxt-delay-hydration",
    "nuxt-simple-robots",
    "@vite-pwa/nuxt",
    "@vueuse/nuxt",
    "@element-plus/nuxt"
  ],

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
  },

  colorMode: {
    classSuffix: "",
    preference: "dark",
  },

  delayHydration: {
    mode: "mount",
  },

  device: {
    refreshOnResize: true
  },
  
  content: {
    documentDriven: true
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Adityawarman Dewa Putra",
      short_name: "Adityawarman Dewa Putra",
      theme_color: "#000",
      background_color: "#000",
      icons: [
        {
          src: "pwa/icon_48x48.png",
          sizes: "48x48",
          type: "image/png",
        },
        {
          src: "pwa/icon_64x64.png",
          sizes: "64x64",
          type: "image/png",
        },
        {
          src: "pwa/icon_72x72.png",
          sizes: "72x72",
          type: "image/png",
        },
        {
          src: "pwa/icon_96x96.png",
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "pwa/icon_144x144.png",
          sizes: "144x144",
          type: "image/png",
        },
        {
          src: "pwa/icon_192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "pwa/icon_512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["*"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
