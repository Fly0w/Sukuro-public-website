<script setup lang="ts">
import gpEnglish from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_English.svg'
import gpJapanese from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Japanese.svg'
import gpChinese from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Chinese-China.svg'
import gpSpanish from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Spanish.svg'
import gpFrench from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_French.svg'
import gpVietnamese from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Vietnamese.svg'
import gpFilipino from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Filipino.svg'
import gpKorean from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Korean.svg'
import gpRussian from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Russian.svg'
import gpHindi from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_Hindi.svg'
import gpGerman from '~/assets/icon/googleplay/GetItOnGooglePlay_Badge_Web_color_German.svg'

import asEnglish from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg'
import asJapanese from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg'
import asChinese from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_CNSC_RGB_blk_092917.svg'
import asSpanish from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_ES_RGB_blk_100217.svg'
import asFrench from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg'
import asVietnamese from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_VN_RGB_blk_100217.svg'
import asFilipino from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_PH_RGB_blk_100317.svg'
import asKorean from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_KR_RGB_blk_100317.svg'
import asRussian from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_RU_RGB_blk_100317.svg'
import asHindi from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_Blk_IN_CI_091224.svg'
import asGerman from '~/assets/icon/appstore/Download_on_the_App_Store_Badge_DE_RGB_blk_092917.svg'

const props = defineProps<{
  googlePlayUrl: string
  appStoreUrl: string
}>()

const { locale } = useI18n()

const localeCode = computed(() => locale.value.toLowerCase().split('-')[0] ?? 'en')

const googlePlayByLocale: Record<string, string> = {
  en: gpEnglish,
  ja: gpJapanese,
  zh: gpChinese,
  es: gpSpanish,
  fr: gpFrench,
  vi: gpVietnamese,
  tl: gpFilipino,
  ko: gpKorean,
  ru: gpRussian,
  hi: gpHindi,
  de: gpGerman,
}

const appStoreByLocale: Record<string, string> = {
  en: asEnglish,
  ja: asJapanese,
  zh: asChinese,
  es: asSpanish,
  fr: asFrench,
  vi: asVietnamese,
  tl: asFilipino,
  ko: asKorean,
  ru: asRussian,
  hi: asHindi,
  de: asGerman,
}

const googlePlayBadgeSrc = computed(() => googlePlayByLocale[localeCode.value] ?? gpEnglish)
const appStoreBadgeSrc = computed(() => appStoreByLocale[localeCode.value] ?? asEnglish)
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
    <a :href="props.googlePlayUrl" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
      <img
        :src="googlePlayBadgeSrc"
        alt="Get it on Google Play"
        class="h-14 w-auto max-w-full mx-auto sm:mx-0"
      >
    </a>

    <a v-if="false" :href="props.appStoreUrl" target="_blank" rel="noopener noreferrer" class="w-full sm:w-auto">
      <img
        :src="appStoreBadgeSrc"
        alt="Download on the App Store"
        class="h-14 w-auto max-w-full mx-auto sm:mx-0"
      >
    </a>
  </div>
</template>
