<script setup lang="ts">
const { t } = useI18n()

useSeoMeta({
  title: t('nav.support'),
  description: t('support.contact.description')
})
</script>

<template>
  <div class="container py-12 max-w-3xl">
    <h1 class="text-3xl font-bold mb-8">{{ t('support.title') }}</h1>
    
    <Card class="mb-8">
      <CardHeader>
        <CardTitle>{{ t('support.contact.title') }}</CardTitle>
        <CardDescription>{{ t('support.contact.description') }}</CardDescription>
      </CardHeader>
      <CardContent>
        <p class="mb-4">{{ t('support.contact.text') }}</p>
        <a href="mailto:florian.budniewski@hotmail.com" class="text-primary hover:underline font-medium">
          florian.budniewski@hotmail.com
        </a>
      </CardContent>
    </Card>

    <h2 class="text-2xl font-semibold mb-4 mt-12">{{ t('support.faq.title') }}</h2>
    
    <div class="space-y-6">
      <div>
        <h3 class="text-lg font-medium mb-2">{{ t('support.faq.q1.q') }}</h3>
        <p class="text-muted-foreground">{{ t('support.faq.q1.a') }}</p>
      </div>
      
      <div>
        <h3 class="text-lg font-medium mb-2">{{ t('support.faq.q2.q') }}</h3>
        <p class="text-muted-foreground">
          {{ t('support.faq.q2.a') }}
        </p>
      </div>
    </div>
  </div>
</template>
