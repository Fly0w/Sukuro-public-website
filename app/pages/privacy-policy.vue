<script setup lang="ts">
const { t } = useI18n()
const SUPPORT_EMAIL = 'florian.budniewski@hotmail.com'

useSeoMeta({
  title: t('nav.privacy'),
  description: t('privacy.intro.text')
})
</script>

<template>
  <div class="container py-12 max-w-3xl">
    <h1 class="text-3xl font-bold mb-8">{{ t('privacy.title') }}</h1>
    
    <div class="prose prose-slate dark:prose-invert max-w-none">
      <p><strong>{{ t('privacy.lastUpdated') }}</strong></p>

      <h2>{{ t('privacy.intro.title') }}</h2>
      <p>{{ t('privacy.intro.text') }}</p>

      <h2>{{ t('privacy.data.title') }}</h2>
      <p>{{ t('privacy.data.text') }}</p>
      <ul>
        <li>{{ t('privacy.data.auth') }}</li>
        <li>{{ t('privacy.data.progress') }}</li>
        <li>{{ t('privacy.data.technical') }}</li>
      </ul>

      <h2>{{ t('privacy.ai.title') }}</h2>
      <p>{{ t('privacy.ai.text') }}</p>
      <ul>
        <li>{{ t('privacy.ai.point1') }}</li>
        <li>{{ t('privacy.ai.point2') }}</li>
      </ul>

      <h2>{{ t('privacy.sharing.title') }}</h2>
      <p>{{ t('privacy.sharing.text') }}</p>
      <ul>
        <li>{{ t('privacy.sharing.supabase') }}</li>
        <li>{{ t('privacy.sharing.google') }}</li>
        <li>{{ t('privacy.sharing.apple') }}</li>
      </ul>

      <h2>{{ t('privacy.security.title') }}</h2>
      <p>{{ t('privacy.security.text') }}</p>

      <h2>{{ t('privacy.retention.title') }}</h2>
      <p>{{ t('privacy.retention.text1') }}</p>
      <p>{{ t('privacy.retention.text2') }}</p>
      <p>{{ t('privacy.retention.text3') }}</p>
      <ol>
        <li>{{ t('privacy.retention.point1') }}</li>
        <li>{{ t('privacy.retention.point2', { email: SUPPORT_EMAIL }) }}</li>
      </ol>

      <h2>{{ t('privacy.children.title') }}</h2>
      <p>{{ t('privacy.children.text') }}</p>

      <h2>{{ t('privacy.contact.title') }}</h2>
      <p>{{ t('privacy.contact.text') }}</p>
      <p><strong>{{ t('privacy.contact.name') }}</strong><br>
      {{ t('privacy.contact.email', { email: SUPPORT_EMAIL }) }}</p>
    </div>
  </div>
</template>
