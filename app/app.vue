<template>
  <header class="site-header">
    <Header />
  </header>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <main class="site-main">
        <NuxtPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const site = useSiteConfig()
const canonical = computed(() => new URL(route.path, site.url).href);
const nuxtApp = useNuxtApp();
const { $ScrollTrigger, $ScrollSmoother } = nuxtApp;

useHead({
  link: [{ rel: 'canonical', href: canonical }]
});

useSeoMeta({
  ogSiteName: 'Maison Ondine',
  ogType: 'website',
  ogLocale: 'fr_FR',
  ogUrl: canonical,
  ogImage: `${ site.url }/images/og/ondine.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Intérieur du salon Ondine, rue de Saintonge à Paris',
  twitterCard: 'summary_large_image'
});

onMounted(() => {
  useSmoother();
  document.fonts.ready.then(() => $ScrollTrigger.refresh());
}); 

nuxtApp.hook('page:finish', () => {
  const smoother = $ScrollSmoother.get();
  const target = route.hash ? document.getElementById(decodeURIComponent(route.hash.slice(1))) : null;

  if (smoother) {
    const headerHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 0;
    if (target) smoother.scrollTo(target, false, `top ${headerHeight + 24}px`);
    else smoother.scrollTop(0)
  }

  $ScrollTrigger.refresh();
});
</script>

<style scoped lang="css">
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: var(--color-bg);
}

.site-main {
  padding-top: var(--header-h);
}
</style>
