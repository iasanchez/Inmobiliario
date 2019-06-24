
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    script: [
        { src: 'assets/js/jquery-min.js' },
        { src: 'assets/js/popper.min.js' },
        { src: 'assets/js/bootstrap.min.js' },
        { src: 'assets/js/jquery.mixitup.js' },
        { src: 'assets/js/jquery.counterup.min.js' },
        { src: 'assets/js/ion.rangeSlider.js' },
        { src: 'assets/js/jquery.parallax.js' },
        { src: 'assets/js/waypoints.min.js' },
        { src: 'assets/js/wow.js' },
        { src: 'assets/js/owl.carousel.min.js' },
        { src: 'assets/js/jquery.slicknav.js' },
        { src: 'assets/js/nivo-lightbox.js' },
        { src: 'assets/js/jquery.slicknav.js' },
        { src: 'assets/js/main.js' },
        { src: 'assets/js/form-validator.min.js' },
        { src: 'assets/js/contact-form-script.min.js' }
    ],
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.css' }

      ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
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
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
    extend(config, ctx) {
    }
  }
}
