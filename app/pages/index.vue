<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()

useSeoMeta({
  title: t('nav.home'),
  description: t('landing.hero.subtitle')
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "Sukuro",
  "operatingSystem": "ANDROID, IOS",
  "applicationCategory": "EducationalApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd)
    }
  ]
})
</script>

<template>
  <div class="flex flex-col min-h-[calc(100vh-4rem)]">
    <!-- Hero Section -->
    <section class="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted/30">
      <div class="container px-4 md:px-6">
        <div class="flex flex-col items-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary">
              {{ t('landing.hero.title') }}
            </h1>
            <p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {{ t('landing.hero.subtitle') }}
            </p>
          </div>
          <div class="space-x-4 pt-4 flex flex-col sm:flex-row gap-4 sm:gap-0">
            <a :href="appConfig.sukuro.links.googlePlay" target="_blank" rel="noopener noreferrer">
              <Button size="lg" class="w-full sm:w-auto gap-2">
                <Icon name="lucide:play" class="w-5 h-5" />
                Google Play
              </Button>
            </a>
            <a :href="appConfig.sukuro.links.appStore" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" class="w-full sm:w-auto gap-2">
                <Icon name="lucide:apple" class="w-5 h-5" />
                App Store
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Creator Section -->
    <section class="w-full py-12 md:py-24 lg:py-32">
      <div class="container px-4 md:px-6">
        <div class="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle class="text-2xl">{{ t('landing.creator.title') }}</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-muted-foreground leading-relaxed">
                {{ t('landing.creator.message') }}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  </div>
</template>
