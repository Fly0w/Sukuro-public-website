<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const SITE_URL = 'https://sukuro-app.com'

// useLocaleHead génère automatiquement hreflang + og:locale pour toutes les langues
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead(() => ({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Sukuro` : 'Sukuro - Learn Japanese'
  },
  htmlAttrs: {
    ...i18nHead.value.htmlAttrs,
  },
  link: [
    ...(i18nHead.value.link ?? []),
  ],
  meta: [
    ...(i18nHead.value.meta ?? []),
  ],
}))

useSeoMeta({
  ogTitle: 'Sukuro - Learn Japanese',
  ogDescription: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  ogImage: `${SITE_URL}/og-image.png`,
  ogImageAlt: 'Sukuro — Learn Japanese App',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogType: 'website',
  ogSiteName: 'Sukuro',
  ogUrl: computed(() => `${SITE_URL}${route.path}`),
  twitterCard: 'summary_large_image',
  twitterSite: '@sukuroapp',
  twitterTitle: 'Sukuro - Learn Japanese',
  twitterDescription: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  twitterImage: `${SITE_URL}/og-image.png`,
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </NuxtLayout>
</template>
