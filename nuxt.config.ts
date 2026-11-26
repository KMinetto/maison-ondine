// https://nuxt.com/docs/api/configuration/nuxt-config
const revealFallback = `
(function (root) {
  root.classList.add('js');
  setTimeout(function () {
    if (!root.classList.contains('anim-ready')) root.classList.remove('js');
  }, 5000);
})(document.documentElement);
`


export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/sitemap'],
  site: {
    url: 'https://maison-ondine.fr',
    name: 'Maison Ondine'
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      titleTemplate: '%s · Maison Ondine',
      meta: [{ name: 'theme-color', content: '#fbf7f1'}],
      script: [
        {
          innerHTML: revealFallback,
          tagPosition: 'head'
        }
      ]
    }
  },
  fonts: {
    defaults: { subsets: ['latin'], styles: ['normal'] },
    families: [
      { name: 'Cormorant Garamond', provider: 'google', weights: [400], styles: ['normal', 'italic'] },
      { name: 'Jost', provider: 'google', weights: [300, 400] }
    ]
  },
  image: {
    format: ['webp'],
    quality: 80
  },
  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': 'publix, max-age=2592000' } }
  }
});