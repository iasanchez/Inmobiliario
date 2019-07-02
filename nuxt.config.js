module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    script: [
      "~/assets/jquery-min.js",
      "~/assets/popper.min.js",
      "~/assets/bootstrap.min.js",
      "~/assets/jquery.mixitup.js",
      "~/assets/jquery.counterup.min.js",
      "~/assets/ion.rangeSlider.js",
      "~/assets/jquery.parallax.js",
      "~/assets/waypoints.min.js",
      "~/assets/wow.js",
      "~/assets/owl.carousel.min.js",
      "~/assets/jquery.slicknav.js",
      "~/assets/nivo-lightbox.js",
      "~/assets/jquery.slicknav.js",
      "~/assets/main.js",
      "~/assets/form-validator.min.js",
      "~/assets/contact-form-script.min.js"
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css"
      },
      {
        rel: "stylesheet",
        href: "https://cdn.lineicons.com/1.0.1/LineIcons.min.css"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    "~/assets/css/bootstrap.min.css",
    "~/assets/css/slicknav.css",
    "~/assets/css/ion.rangeSlider.css",
    "~/assets/css/ion.rangeSlider.skinFlat.css",
    "~/assets/css/nivo-lightbox.css",
    "~/assets/css/animate.css",
    "~/assets/css/main.css",
    "~/assets/css/responsive.css"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  router: {
    middleware: "i18n"
  },
  plugins: ["~/plugins/i18n.js"],
  generate: {
    routes: [
      "/",
      "/index",
      "/login",
      "/search",
      "/es",
      "/es/index",
      "/es/news",
      "/es/contact"
    ]
  },
  /*
   ** Nuxt.js modules
   */ modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  buildDir: "_nuxt",
  build: {
    publicPath: "_nuxt/assets/"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */

  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extractCSS: {
      allChunks: true
    },
    extend(config, ctx) {}
  }
};
