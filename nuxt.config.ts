// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    'shadcn-nuxt',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#7c3e0a' },
        { name: 'color-scheme', content: 'light dark' },
        { name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/app_icon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/app_icon.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },

  fonts: {
    families: [
      { name: 'Noto Sans', provider: 'google', weights: [400, 500, 600, 700] },
    ],
    defaults: {
      preload: true,
    },
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'class-variance-authority',
        'reka-ui',
        'clsx',
        'tailwind-merge',
        'lucide-vue-next',
      ]
    }
  },
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    prefix: '',
    componentDir: '@/components/ui',
  },
  i18n: {
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'ja', language: 'ja-JP', name: '日本語', file: 'ja.json' },
      { code: 'zh', language: 'zh-CN', name: '中文', file: 'zh.json' },
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'vi', language: 'vi-VN', name: 'Tiếng Việt', file: 'vi.json' },
      { code: 'tl', language: 'tl-PH', name: 'Tagalog', file: 'tl.json' },
      { code: 'ko', language: 'ko-KR', name: '한국어', file: 'ko.json' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', file: 'ru.json' },
      { code: 'hi', language: 'hi-IN', name: 'हिन्दी', file: 'hi.json' },
      { code: 'de', language: 'de-DE', name: 'Deutsch', file: 'de.json' }
    ],
    baseUrl: 'https://sukuro-app.com',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    restructureDir: '',
    langDir: 'locales',
    detectBrowserLanguage: false,
  },
})