<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const appConfig = useAppConfig()
</script>

<template>
  <footer class="border-t border-border/60 bg-muted/30">
    <div class="container mx-auto px-4 md:px-6 py-8 md:py-14">

      <!-- Logo + description : pleine largeur mobile -->
      <div class="mb-8 md:mb-0 md:hidden">
        <NuxtLink :to="localePath('/')" class="inline-flex items-center space-x-2 mb-3 group">
          <img
            src="~/assets/icon/app_icon.svg"
            alt="Sukuro Logo"
            class="h-7 w-7 rounded-md grayscale opacity-70 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
          />
          <span class="font-bold text-lg text-foreground transition-colors duration-200 group-hover:text-primary">Sukuro</span>
        </NuxtLink>
        <p class="text-sm text-muted-foreground leading-relaxed">
          {{ t('landing.hero.subtitle') }}
        </p>
      </div>

      <!-- Grille : 2 cols mobile, 4 cols desktop -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">

        <!-- Logo (desktop seulement) -->
        <div class="hidden md:block col-span-2">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center space-x-2 mb-4 group">
            <img
              src="~/assets/icon/app_icon.svg"
              alt="Sukuro Logo"
              class="h-8 w-8 rounded-md grayscale opacity-70 transition-all duration-200 group-hover:grayscale-0 group-hover:opacity-100"
            />
            <span class="font-bold text-xl text-foreground transition-colors duration-200 group-hover:text-primary">Sukuro</span>
          </NuxtLink>
          <p class="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {{ t('landing.hero.subtitle') }}
          </p>
        </div>

        <!-- Liens -->
        <div>
          <h3 class="font-semibold mb-3 text-xs uppercase tracking-widest text-foreground/60">{{ t('footer.links') }}</h3>
          <ul class="space-y-2.5">
            <li>
              <NuxtLink :to="localePath('/')" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 hover:translate-x-0.5 inline-block transition-transform">
                {{ t('nav.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/about')" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 hover:translate-x-0.5 inline-block transition-transform">
                {{ t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/privacy-policy')" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 hover:translate-x-0.5 inline-block transition-transform">
                {{ t('nav.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/support')" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 hover:translate-x-0.5 inline-block transition-transform">
                {{ t('nav.support') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Réseaux -->
        <div>
          <h3 class="font-semibold mb-3 text-xs uppercase tracking-widest text-foreground/60">{{ t('footer.social') }}</h3>
          <ul class="space-y-2.5">
            <li>
              <a :href="appConfig.sukuro.links.instagram" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 flex items-center gap-2 group/social">
                <Icon name="lucide:instagram" class="w-3.5 h-3.5 shrink-0 transition-transform duration-150 group-hover/social:scale-110" />
                Instagram
              </a>
            </li>
            <li>
              <a :href="appConfig.sukuro.links.x" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 flex items-center gap-2 group/social">
                <Icon name="lucide:twitter" class="w-3.5 h-3.5 shrink-0 transition-transform duration-150 group-hover/social:scale-110" />
                X (Twitter)
              </a>
            </li>
            <li>
              <a :href="appConfig.sukuro.links.tiktok" target="_blank" rel="noopener noreferrer" class="text-sm text-muted-foreground hover:text-primary transition-colors duration-150 flex items-center gap-2 group/social">
                <Icon name="lucide:video" class="w-3.5 h-3.5 shrink-0 transition-transform duration-150 group-hover/social:scale-110" />
                TikTok
              </a>
            </li>
          </ul>
        </div>

      </div>

      <Separator class="my-6 md:my-8 opacity-60" />

      <p class="text-xs text-muted-foreground text-center md:text-left">
        {{ t('footer.rights') }}
      </p>
    </div>
  </footer>
</template>
