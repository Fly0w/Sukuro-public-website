<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.map(l => {
    if (typeof l === 'string') return { code: l, name: l }
    return { code: l.code, name: (l as { name?: string }).name || l.language || l.code }
  })
})

const currentLocaleName = computed(() => {
  const current = availableLocales.value.find(l => l.code === locale.value)
  return current ? current.name : locale.value
})
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline" size="sm" class="flex items-center gap-2">
        <Icon name="lucide:globe" class="w-4 h-4" />
        <span class="hidden sm:inline-block">{{ currentLocaleName }}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem
        v-for="l in availableLocales"
        :key="l.code"
        @click="setLocale(l.code)"
      >
        {{ l.name }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
