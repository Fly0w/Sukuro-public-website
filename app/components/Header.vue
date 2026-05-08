<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
    <div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
      <div class="flex items-center gap-6 md:gap-10">
        <NuxtLink :to="localePath('/')" class="flex items-center space-x-2 group">
          <NuxtImg
            src="/app_icon.png"
            alt="Sukuro Logo"
            :width="32"
            :height="32"
            format="webp"
            loading="eager"
            class="h-8 w-8 rounded-md transition-transform duration-200 group-hover:scale-110"
          />
          <span class="inline-block font-bold text-xl text-primary transition-opacity duration-200 group-hover:opacity-80">Sukuro</span>
        </NuxtLink>
        <nav class="hidden md:flex gap-6">
          <NuxtLink
            :to="localePath('/')"
            class="nav-link-animated flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/privacy-policy')"
            class="nav-link-animated flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {{ t('nav.privacy') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/support')"
            class="nav-link-animated flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {{ t('nav.support') }}
          </NuxtLink>
        </nav>
      </div>
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <Sheet v-model:open="mobileMenuOpen">
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" class="md:hidden">
              <Icon name="lucide:menu" class="w-5 h-5" />
              <span class="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" class="w-72 px-0">
            <SheetHeader class="px-6 pb-4 border-b border-border/60">
              <div class="flex items-center gap-2.5">
                <NuxtImg src="/app_icon.png" alt="Sukuro Logo" :width="32" :height="32" format="webp" loading="eager" class="h-8 w-8 rounded-md" />
                <SheetTitle class="text-lg font-bold text-primary">Sukuro</SheetTitle>
              </div>
              <SheetDescription class="sr-only">Mobile navigation links for Sukuro website</SheetDescription>
            </SheetHeader>
            <nav class="flex flex-col gap-1 px-3 pt-4">
              <NuxtLink
                :to="localePath('/')"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
                @click="mobileMenuOpen = false"
              >
                <Icon name="lucide:house" class="w-5 h-5 shrink-0" />
                {{ t('nav.home') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/privacy-policy')"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
                @click="mobileMenuOpen = false"
              >
                <Icon name="lucide:shield" class="w-5 h-5 shrink-0" />
                {{ t('nav.privacy') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/support')"
                class="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-150"
                @click="mobileMenuOpen = false"
              >
                <Icon name="lucide:circle-help" class="w-5 h-5 shrink-0" />
                {{ t('nav.support') }}
              </NuxtLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
