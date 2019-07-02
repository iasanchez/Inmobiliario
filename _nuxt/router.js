import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _921a6e06 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages_contact" */))
const _193e9506 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _ee837074 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */))
const _78111e16 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages_register" */))
const _bda0f720 = () => interopDefault(import('..\\pages\\search\\property.vue' /* webpackChunkName: "pages_search_property" */))
const _7b618aef = () => interopDefault(import('..\\pages\\search\\_id.vue' /* webpackChunkName: "pages_search__id" */))
const _4f96f1ef = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))
const _6980ea50 = () => interopDefault(import('..\\pages\\_lang\\index.vue' /* webpackChunkName: "pages__lang_index" */))
const _2a4e68b4 = () => interopDefault(import('..\\pages\\_lang\\contact.vue' /* webpackChunkName: "pages__lang_contact" */))
const _d631a422 = () => interopDefault(import('..\\pages\\_lang\\login.vue' /* webpackChunkName: "pages__lang_login" */))
const _089a6dbd = () => interopDefault(import('..\\pages\\_lang\\news.vue' /* webpackChunkName: "pages__lang_news" */))
const _7e291ee6 = () => interopDefault(import('..\\pages\\_lang\\register.vue' /* webpackChunkName: "pages__lang_register" */))
const _47676fe7 = () => interopDefault(import('..\\pages\\_lang\\search\\property.vue' /* webpackChunkName: "pages__lang_search_property" */))
const _71c41118 = () => interopDefault(import('..\\pages\\_lang\\search\\_id.vue' /* webpackChunkName: "pages__lang_search__id" */))

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
      path: "/contact",
      component: _921a6e06,
      name: "contact"
    }, {
      path: "/login",
      component: _193e9506,
      name: "login"
    }, {
      path: "/news",
      component: _ee837074,
      name: "news"
    }, {
      path: "/register",
      component: _78111e16,
      name: "register"
    }, {
      path: "/search/property",
      component: _bda0f720,
      name: "search-property"
    }, {
      path: "/search/:id?",
      component: _7b618aef,
      name: "search-id"
    }, {
      path: "/",
      component: _4f96f1ef,
      name: "index"
    }, {
      path: "/:lang",
      component: _6980ea50,
      name: "lang"
    }, {
      path: "/:lang/contact",
      component: _2a4e68b4,
      name: "lang-contact"
    }, {
      path: "/:lang/login",
      component: _d631a422,
      name: "lang-login"
    }, {
      path: "/:lang/news",
      component: _089a6dbd,
      name: "lang-news"
    }, {
      path: "/:lang/register",
      component: _7e291ee6,
      name: "lang-register"
    }, {
      path: "/:lang/search/property",
      component: _47676fe7,
      name: "lang-search-property"
    }, {
      path: "/:lang/search/:id?",
      component: _71c41118,
      name: "lang-search-id"
    }],

    fallback: false
  })
}
