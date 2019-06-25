import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\bootstrap\\dist\\css\\bootstrap.css'

import '..\\node_modules\\bootstrap-vue\\dist\\bootstrap-vue.css'

import '..\\assets\\css\\bootstrap.min.css'

import '..\\assets\\css\\slicknav.css'

import '..\\assets\\css\\ion.rangeSlider.css'

import '..\\assets\\css\\ion.rangeSlider.skinFlat.css'

import '..\\assets\\css\\nivo-lightbox.css'

import '..\\assets\\css\\animate.css'

import '..\\assets\\css\\main.css'

import '..\\assets\\css\\responsive.css'

import _6f6c098b from '..\\layouts\\default.vue'
import _782cec08 from '..\\layouts\\vacio.vue'

const layouts = { "_default": _6f6c098b,"_vacio": _782cec08 }

export default {
  head: {"title":"inmobiliario","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"inmobiliario"}],"script":["~\u002Fassets\u002Fjquery-min.js","~\u002Fassets\u002Fpopper.min.js","~\u002Fassets\u002Fbootstrap.min.js","~\u002Fassets\u002Fjquery.mixitup.js","~\u002Fassets\u002Fjquery.counterup.min.js","~\u002Fassets\u002Fion.rangeSlider.js","~\u002Fassets\u002Fjquery.parallax.js","~\u002Fassets\u002Fwaypoints.min.js","~\u002Fassets\u002Fwow.js","~\u002Fassets\u002Fowl.carousel.min.js","~\u002Fassets\u002Fjquery.slicknav.js","~\u002Fassets\u002Fnivo-lightbox.js","~\u002Fassets\u002Fjquery.slicknav.js","~\u002Fassets\u002Fmain.js","~\u002Fassets\u002Fform-validator.min.js","~\u002Fassets\u002Fcontact-form-script.min.js"],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002FOwlCarousel2\u002F2.3.4\u002Fassets\u002Fowl.carousel.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.lineicons.com\u002F1.0.1\u002FLineIcons.min.css"}],"style":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
