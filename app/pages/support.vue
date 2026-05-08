<script setup lang="ts">
const { t } = useI18n()
const { data: contact } = await useFetch('/api/contact-email')
const supportEmail = computed(() => contact.value?.email || '')

useSeoMeta({
  title: t('nav.support'),
  description: t('support.contact.description')
})
</script>

<template>
  <div class="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">
    <h1 class="animate-fade-up text-3xl font-bold mb-10 tracking-tight">{{ t('support.title') }}</h1>
    
    <div class="animate-fade-up animation-delay-100">
      <Card class="mb-10 border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardHeader class="pb-3">
          <CardTitle>{{ t('support.contact.title') }}</CardTitle>
          <CardDescription class="mt-1">{{ t('support.contact.description') }}</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="mb-4 text-muted-foreground leading-relaxed">{{ t('support.contact.text') }}</p>
          <a
            :href="`mailto:${supportEmail}`"
            class="inline-flex items-center gap-1.5 text-primary font-medium hover:underline underline-offset-4 transition-colors duration-150"
          >
            <Icon name="lucide:mail" class="w-4 h-4" />
            {{ supportEmail }}
          </a>
        </CardContent>
      </Card>
    </div>

    <h2 class="animate-fade-up animation-delay-200 text-2xl font-semibold mb-6 mt-2 tracking-tight">{{ t('support.faq.title') }}</h2>
    
    <div class="space-y-4 animate-fade-up animation-delay-300">
      <div class="group rounded-lg border border-border/60 bg-card p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200">
        <h3 class="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-150">{{ t('support.faq.q1.q') }}</h3>
        <p class="text-muted-foreground text-sm leading-relaxed">{{ t('support.faq.q1.a') }}</p>
      </div>
      
      <div class="group rounded-lg border border-border/60 bg-card p-5 hover:border-primary/30 hover:shadow-sm transition-all duration-200">
        <h3 class="text-base font-semibold mb-2 group-hover:text-primary transition-colors duration-150">{{ t('support.faq.q2.q') }}</h3>
        <p class="text-muted-foreground text-sm leading-relaxed">{{ t('support.faq.q2.a') }}</p>
      </div>
    </div>
  </div>
</template>
