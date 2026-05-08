<script setup lang="ts">
const { t } = useI18n()
const SUPPORT_EMAIL = 'florian.budniewski@hotmail.com'

useSeoMeta({
  title: t('nav.privacy'),
  description: t('privacy.intro.text')
})
</script>

<template>
  <div class="container mx-auto px-4 md:px-6 py-12 md:py-16 max-w-3xl">

    <!-- En-tête -->
    <div class="animate-fade-up mb-12">
      <h1 class="text-3xl font-bold tracking-tight mb-2">{{ t('privacy.title') }}</h1>
      <p class="text-sm text-muted-foreground">{{ t('privacy.lastUpdated') }}</p>
    </div>

    <!-- Sections -->
    <div class="animate-fade-up animation-delay-100 space-y-10">

      <section>
        <h2 class="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border/60">
          {{ t('privacy.intro.title') }}
        </h2>
        <p class="text-[15px] text-muted-foreground leading-relaxed">
          {{ t('privacy.intro.text') }}
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border/60">
          {{ t('privacy.data.title') }}
        </h2>
        <p class="text-[15px] text-muted-foreground leading-relaxed mb-3">
          {{ t('privacy.data.text') }}
        </p>
        <ul class="list-disc list-outside ml-5 space-y-2 marker:text-primary/50">
          <li class="text-[15px] text-muted-foreground leading-relaxed">{{ t('privacy.data.local') }}</li>
          <li class="text-[15px] text-muted-foreground leading-relaxed">{{ t('privacy.data.technical') }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border/60">
          {{ t('privacy.ai.title') }}
        </h2>
        <p class="text-[15px] text-muted-foreground leading-relaxed mb-3">
          {{ t('privacy.ai.text') }}
        </p>
        <ul class="list-disc list-outside ml-5 space-y-2 marker:text-primary/50">
          <li class="text-[15px] text-muted-foreground leading-relaxed">{{ t('privacy.ai.point1') }}</li>
          <li class="text-[15px] text-muted-foreground leading-relaxed">{{ t('privacy.ai.point2') }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border/60">
          {{ t('privacy.sharing.title') }}
        </h2>
        <p class="text-[15px] text-muted-foreground leading-relaxed mb-3">
          {{ t('privacy.sharing.text') }}
        </p>
        <ul class="list-disc list-outside ml-5 space-y-2 marker:text-primary/50">
          <li class="text-[15px] text-muted-foreground leading-relaxed">{{ t('privacy.sharing.google') }}</li>
        </ul>
        <p class="text-[15px] text-muted-foreground leading-relaxed mt-3 italic">
          {{ t('privacy.sharing.note') }}
        </p>
      </section>

      <section>
        <h2 class="text-base font-semibold text-foreground mb-3 pb-2 border-b border-border/60">
          {{ t('privacy.storage.title') }}
        </h2>
        <p class="text-[15px] text-muted-foreground leading-relaxed">
          {{ t('privacy.storage.text') }}
        </p>
      </section>

      <!-- Contact — mis en valeur avec une card -->
      <section>
        <h2 class="text-base font-semibold text-foreground mb-4 pb-2 border-b border-border/60">
          {{ t('privacy.contact.title') }}
        </h2>
        <div class="rounded-lg border border-border/60 bg-card p-5 space-y-3">
          <p class="text-[15px] text-muted-foreground leading-relaxed">{{ t('privacy.contact.text') }}</p>
          <div class="pt-1">
            <p class="text-sm font-semibold text-foreground">{{ t('privacy.contact.name') }}</p>
            <a
              :href="`mailto:${SUPPORT_EMAIL}`"
              class="inline-flex items-center gap-1.5 text-sm text-primary hover:underline underline-offset-4 transition-colors duration-150 mt-1"
            >
              <Icon name="lucide:mail" class="w-3.5 h-3.5" />
              {{ SUPPORT_EMAIL }}
            </a>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>
