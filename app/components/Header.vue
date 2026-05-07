<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n()
</script>

<template>
  <header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-6 md:gap-10">
        <NuxtLink :to="localePath('/')" class="flex items-center space-x-2">
          <img src="~/assets/icon/app_icon.svg" alt="Sukuro Logo" class="h-8 w-8 rounded-md" />
          <span class="inline-block font-bold text-xl text-primary">Sukuro</span>
        </NuxtLink>
        <nav class="hidden md:flex gap-6">
          <NuxtLink
            :to="localePath('/')"
            class="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {{ t('nav.home') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/privacy-policy')"
            class="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {{ t('nav.privacy') }}
          </NuxtLink>
          <NuxtLink
            :to="localePath('/support')"
            class="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {{ t('nav.support') }}
          </NuxtLink>
        </nav>
      </div>
      <div class="flex items-center gap-2">
        <LanguageSwitcher />
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" class="md:hidden">
              <Icon name="lucide:menu" class="w-5 h-5" />
              <span class="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader class="sr-only">
              <SheetTitle>Navigation menu</SheetTitle>
              <SheetDescription>Mobile navigation links for Sukuro website</SheetDescription>
            </SheetHeader>
            <nav class="flex flex-col gap-4 mt-8">
              <NuxtLink
                :to="localePath('/')"
                class="text-lg font-medium"
              >
                {{ t('nav.home') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/privacy-policy')"
                class="text-lg font-medium"
              >
                {{ t('nav.privacy') }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/support')"
                class="text-lg font-medium"
              >
                {{ t('nav.support') }}
              </NuxtLink>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
</template>
