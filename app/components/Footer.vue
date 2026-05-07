<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
</script>

<template>
  <footer class="border-t bg-muted/40">
    <div class="container py-10 md:py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <NuxtLink :to="localePath('/')" class="flex items-center space-x-2 mb-4">
            <img src="~/assets/icon/app_icon.svg" alt="Sukuro Logo" class="h-8 w-8 rounded-md grayscale opacity-80" />
            <span class="inline-block font-bold text-xl text-foreground">Sukuro</span>
          </NuxtLink>
          <p class="text-sm text-muted-foreground max-w-xs">
            {{ t('landing.hero.subtitle') }}
          </p>
        </div>
        
        <div>
          <h3 class="font-semibold mb-4">{{ t('footer.links') }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink :to="localePath('/')" class="text-sm text-muted-foreground hover:text-foreground">
                {{ t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy-policy')" class="text-sm text-muted-foreground hover:text-foreground">
                {{ t('nav.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/support')" class="text-sm text-muted-foreground hover:text-foreground">
                {{ t('nav.support') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">{{ t('footer.social') }}</h3>
          <ul class="space-y-2">
            <li>
              <a :href="appConfig.sukuro.links.instagram" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Icon name="lucide:instagram" class="w-4 h-4" />
                Instagram
              </a>
            </li>
            <li>
              <a :href="appConfig.sukuro.links.x" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Icon name="lucide:twitter" class="w-4 h-4" />
                X (Twitter)
              </a>
            </li>
            <li>
              <a :href="appConfig.sukuro.links.tiktok" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
                <Icon name="lucide:video" class="w-4 h-4" />
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <Separator class="my-8" />
      
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-muted-foreground">
          {{ t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>
