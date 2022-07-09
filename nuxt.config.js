export default {
  head: {
    title: 'finnoRealty',
    htmlAttrs: {
      lang: 'fa-IR',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['~/assets/styles/main.css'],

  plugins: [],

  components: true,

  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss', 'nuxt-vite'],

  modules: ['@nuxtjs/axios'],

  axios: {
    baseURL: '/',
  },

  build: {},
}
