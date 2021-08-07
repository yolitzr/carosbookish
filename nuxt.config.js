import axios from 'axios';

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: `Caro's Bookish`,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Web literaria dedicada a la novedades, recomendaciones y reseñas de libros. Encontrarás información de todo lo referente a la literatura."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700&family=Oxygen:wght@400;700&family=Source+Sans+Pro:wght@300;400&display=swap"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
      }
    ]
  },

  render: {
    cps: {
      reportOnly: false,
      addMeta: true,
      hashAlgorithm: "sha256",
      unsafeInlineCompatibility: false,
      policies: {
        "script-src": ["'unsafe-inline'", "'unsafe-eval'"]
      },
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/disqus"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss",
    [
      "@nuxtjs/moment",
      {
        moment: {
          locales: ["en"]
        }
      }
    ],

    "@nuxtjs/google-analytics"
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {}
  },

  googleAnalytics: {
    id: "UA-126186784-1"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",

    "@nuxtjs/gtm",

    "@nuxtjs/feed"
  ],

  gtm: {
    id: "GTM-K8J8VL7"
  },

  feed: [
    {
      path: "/feed.xml",
      async create(feed) {
        feed.options = {
          title: `Caro's Bookish`,
          link: "https://carosbokish.com/feed.xml",
          description: "Web Literary"
        };

        // const config = {
        //   headers: {
        //     "X-AUTH-TOKEN": "r0bUsSF2H9LiL1aYoHw"
        //   }
        // };

        // const posts = await axios.post('http://admin.carosbookish.com/api/v1/book/list', config).data
        // posts.forEach(post => {
        //   feed.addItem({
        //     title: post.title,
        //     link: post.slug,
        //     description: post.summary,
        //     content: post.synopsis
        //   });
        // });

        feed.addCategory("Nuxt.js");

        feed.addContributor({
          name: "Yolit Zacarias",
          email: "info@carosbookish.com",
          link: "https://carosbokish.com/"
        });
      },
      cacheTime: 1000 * 60 * 15,
      type: "rss2"
    }
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      title: `Caro's Bookish`,
      author: "Yolitzareth Zacarias",
      description: "Web litetary"
    },

    manifest: {
      lang: "en",
      name: "Caros Bookish",
      short_name: "Caro's Bookish",
      start_url: "/",
      display: "standalone",
      background_color: "#fffbfb",
      theme_color: "#86425f",
      useWebmanifestExtension: false,
      viewport: "width=device-width, initial-scale=1"
    },

    icon: {
      src: "./static/logo.png",
      fileName: "icon.png",
      cacheDir: "./node_modules/.cache/pwa/icon"
    }

    // workbox: {
    //   dev: true,
    // },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // publicPath: "https//carosbookish.com/"
    vendor: ['axios']
  },

  serverMiddleware: [{ path: "/api", handler: "~/api/newsletter.js" }],

  env: {
    DB_HOST: process.env.DB_HOST
  },

  publicRuntimeConfig: {
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https//carosbookish.com/"
        : "http://blog.carosbookish.com"
  }
  // privateRuntimeConfig: {
  //   apiSecret: process.env.API_SECRET
  // }
};
