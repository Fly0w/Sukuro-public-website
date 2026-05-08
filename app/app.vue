<script setup lang="ts">
const { t } = useI18n()

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Sukuro` : 'Sukuro - Learn Japanese'
  },
  meta: [
    { name: 'description', content: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.' }
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
})

useSeoMeta({
  ogTitle: 'Sukuro - Learn Japanese',
  ogDescription: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  ogImage: '/og-image.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
  </NuxtLayout>
</template>
