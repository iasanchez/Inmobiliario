import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _1f23b0f1 = () => interopDefault(import('..\\pages\\busqueda\\index.vue' /* webpackChunkName: "pages_busqueda_index" */))
const _2ad999c2 = () => interopDefault(import('..\\pages\\contacto.vue' /* webpackChunkName: "pages_contacto" */))
const _193e9506 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _7190c3fe = () => interopDefault(import('..\\pages\\noticias.vue' /* webpackChunkName: "pages_noticias" */))
const _78111e16 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _28c41d7c = () => interopDefault(import('..\\pages\\busqueda\\_category.vue' /* webpackChunkName: "pages_busqueda__category" */))
const _2d5e0bfb = () => interopDefault(import('..\\pages\\busqueda\\_category\\_subcategory.vue' /* webpackChunkName: "pages_busqueda__category__subcategory" */))
const _4f96f1ef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/busqueda",
      component: _1f23b0f1,
      name: "busqueda"
    }, {
      path: "/contacto",
      component: _2ad999c2,
      name: "contacto"
    }, {
      path: "/login",
      component: _193e9506,
      name: "login"
    }, {
      path: "/noticias",
      component: _7190c3fe,
      name: "noticias"
    }, {
      path: "/register",
      component: _78111e16,
      name: "register"
    }, {
      path: "/busqueda/:category",
      component: _28c41d7c,
      name: "busqueda-category",
      children: [{
        path: ":subcategory?",
        component: _2d5e0bfb,
        name: "busqueda-category-subcategory"
      }]
    }, {
      path: "/",
      component: _4f96f1ef,
      name: "index"
    }],

    fallback: false
  })
}
