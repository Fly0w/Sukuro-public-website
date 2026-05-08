<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()

const SITE_URL = 'https://sukuro-app.com'

useSeoMeta({
  title: t('nav.home'),
  description: t('landing.hero.subtitle')
})

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sukuro',
  url: SITE_URL,
  description: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/about`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const jsonLdApp = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Sukuro',
  url: SITE_URL,
  description: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  image: `${SITE_URL}/og-image.png`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'ANDROID, IOS',
  inLanguage: ['en', 'ja', 'zh', 'es', 'fr', 'vi', 'tl', 'ko', 'ru'],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  downloadUrl: [
    appConfig.sukuro.links.googlePlay,
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Sukuro',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.png`,
    },
  },
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLdWebSite) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLdApp) },
  ],
})
</script>

<template>
  <div class="flex flex-col">
    <!-- Hero Section -->
    <section class="relative w-full py-14 md:py-28 lg:py-36 xl:py-48 overflow-hidden">
      <!-- Subtle gradient background -->
      <div class="absolute inset-0 bg-gradient-to-b from-primary/8 via-muted/30 to-background pointer-events-none" />
      <!-- Decorative radial glow -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />

      <div class="relative container mx-auto px-4 md:px-6">
        <div class="flex flex-col items-center gap-6 text-center">
          <div class="space-y-4">
            <h1 class="animate-fade-up text-gradient-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl pb-2">
              {{ t('landing.hero.title') }}
            </h1>
            <p class="animate-fade-up animation-delay-100 mx-auto max-w-[600px] text-muted-foreground text-base md:text-xl leading-relaxed">
              {{ t('landing.hero.subtitle') }}
            </p>
          </div>
          <div class="animate-fade-up animation-delay-200 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a :href="appConfig.sukuro.links.googlePlay" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
              <Button size="lg" class="w-full gap-2 shadow-md hover:shadow-lg transition-shadow duration-200">
                <Icon name="lucide:play" class="w-5 h-5" />
                Google Play
              </Button>
            </a>
            <a :href="appConfig.sukuro.links.appStore" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
              <Button size="lg" variant="outline" class="w-full gap-2 hover:bg-primary/5 transition-colors duration-200">
                <Icon name="lucide:apple" class="w-5 h-5" />
                App Store
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Creator Section -->
    <section class="w-full py-10 md:py-20 lg:py-28">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mx-auto max-w-2xl animate-fade-up animation-delay-300">

          <!-- Label -->
          <div class="flex items-center gap-2 mb-4">
            <Icon name="lucide:message-square-quote" class="w-4 h-4 text-primary/60 shrink-0" />
            <span class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {{ t('landing.creator.title') }}
            </span>
          </div>

          <Card class="relative overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <!-- Barre d'accent en haut -->
            <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />

            <CardContent class="pt-7 pb-7 px-6 md:px-8">
              <!-- Guillemet décoratif -->
              <span aria-hidden="true" class="block text-7xl font-bold leading-none text-primary/15 select-none -mb-2">"</span>

              <p class="text-foreground/75 leading-relaxed text-base md:text-[17px]">
                {{ t('landing.creator.message') }}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
