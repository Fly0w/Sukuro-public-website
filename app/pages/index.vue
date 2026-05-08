<script setup lang="ts">
const { t } = useI18n()
const appConfig = useAppConfig()

const SITE_URL = 'https://sukuro-app.com'

useSeoMeta({
  title: t('nav.home'),
  description: t('landing.hero.subtitle'),
})

const jsonLdWebSite = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Sukuro',
  url: SITE_URL,
  description: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/about`,
    },
    'query-input': 'required name=search_term_string',
  },
}

const jsonLdApp = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Sukuro',
  url: SITE_URL,
  description: 'Master Japanese vocabulary, kanji, and grammar with Sukuro.',
  image: `${SITE_URL}/og-image.png`,
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'ANDROID, IOS',
  inLanguage: ['en', 'ja', 'zh', 'es', 'fr', 'vi', 'tl', 'ko', 'ru'],
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  downloadUrl: [appConfig.sukuro.links.googlePlay],
  publisher: {
    '@type': 'Organization',
    name: 'Sukuro',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/favicon.png`,
    },
  },
}

useHead({
  script: [
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLdWebSite) },
    { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLdApp) },
  ],
})

// ── Feature pillars ──────────────────────────────────────────────────────────
const pillars = computed(() => [
  { char: '語', title: t('about.pillars.vocabulary.title'), desc: t('about.pillars.vocabulary.desc') },
  { char: '漢', title: t('about.pillars.kanji.title'), desc: t('about.pillars.kanji.desc') },
  { char: '文', title: t('about.pillars.grammar.title'), desc: t('about.pillars.grammar.desc') },
])

// ── JLPT levels ──────────────────────────────────────────────────────────────
const jlptLevels = ['N5', 'N4', 'N3', 'N2', 'N1'] as const
const vocabLevel = ref<(typeof jlptLevels)[number]>('N5')
const kanjiLevel = ref<(typeof jlptLevels)[number]>('N5')
const grammarLevel = ref<(typeof jlptLevels)[number]>('N5')

// ── Vocabulary data ───────────────────────────────────────────────────────────
const vocabularyByLevel = computed<Record<string, Array<{
  kana: string
  romaji: string
  kanji: string
  meaning: string
  example: string
  exampleMeaning: string
}>>>(() => ({
  N5: [
    { kana: 'みず', romaji: 'mizu', kanji: '水', meaning: t('about.examples.vocab.n5.w1.meaning'), example: '水を飲む', exampleMeaning: t('about.examples.vocab.n5.w1.exampleMeaning') },
    { kana: 'たべる', romaji: 'taberu', kanji: '食べる', meaning: t('about.examples.vocab.n5.w2.meaning'), example: '朝ごはんを食べる', exampleMeaning: t('about.examples.vocab.n5.w2.exampleMeaning') },
    { kana: 'がっこう', romaji: 'gakkō', kanji: '学校', meaning: t('about.examples.vocab.n5.w3.meaning'), example: '学校に行く', exampleMeaning: t('about.examples.vocab.n5.w3.exampleMeaning') },
    { kana: 'ともだち', romaji: 'tomodachi', kanji: '友達', meaning: t('about.examples.vocab.n5.w4.meaning'), example: '友達と遊ぶ', exampleMeaning: t('about.examples.vocab.n5.w4.exampleMeaning') },
  ],
  N4: [
    { kana: 'やくそく', romaji: 'yakusoku', kanji: '約束', meaning: t('about.examples.vocab.n4.w1.meaning'), example: '約束を守る', exampleMeaning: t('about.examples.vocab.n4.w1.exampleMeaning') },
    { kana: 'けいけん', romaji: 'keiken', kanji: '経験', meaning: t('about.examples.vocab.n4.w2.meaning'), example: '海外で経験を積む', exampleMeaning: t('about.examples.vocab.n4.w2.exampleMeaning') },
    { kana: 'ふくしゅう', romaji: 'fukushū', kanji: '復習', meaning: t('about.examples.vocab.n4.w3.meaning'), example: '毎日復習する', exampleMeaning: t('about.examples.vocab.n4.w3.exampleMeaning') },
    { kana: 'しゅみ', romaji: 'shumi', kanji: '趣味', meaning: t('about.examples.vocab.n4.w4.meaning'), example: '趣味は写真です', exampleMeaning: t('about.examples.vocab.n4.w4.exampleMeaning') },
  ],
  N3: [
    { kana: 'かんきょう', romaji: 'kankyō', kanji: '環境', meaning: t('about.examples.vocab.n3.w1.meaning'), example: '環境問題を考える', exampleMeaning: t('about.examples.vocab.n3.w1.exampleMeaning') },
    { kana: 'けつろん', romaji: 'ketsuron', kanji: '結論', meaning: t('about.examples.vocab.n3.w2.meaning'), example: '結論を先に言う', exampleMeaning: t('about.examples.vocab.n3.w2.exampleMeaning') },
    { kana: 'じつげん', romaji: 'jitsugen', kanji: '実現', meaning: t('about.examples.vocab.n3.w3.meaning'), example: '夢を実現する', exampleMeaning: t('about.examples.vocab.n3.w3.exampleMeaning') },
    { kana: 'てきせつ', romaji: 'tekisetsu', kanji: '適切', meaning: t('about.examples.vocab.n3.w4.meaning'), example: '適切な表現を選ぶ', exampleMeaning: t('about.examples.vocab.n3.w4.exampleMeaning') },
  ],
  N2: [
    { kana: 'かだい', romaji: 'kadai', kanji: '課題', meaning: t('about.examples.vocab.n2.w1.meaning'), example: '課題を分析する', exampleMeaning: t('about.examples.vocab.n2.w1.exampleMeaning') },
    { kana: 'ろんり', romaji: 'ronri', kanji: '論理', meaning: t('about.examples.vocab.n2.w2.meaning'), example: '論理的に説明する', exampleMeaning: t('about.examples.vocab.n2.w2.exampleMeaning') },
    { kana: 'げんしょう', romaji: 'genshō', kanji: '現象', meaning: t('about.examples.vocab.n2.w3.meaning'), example: '社会現象を研究する', exampleMeaning: t('about.examples.vocab.n2.w3.exampleMeaning') },
    { kana: 'しさく', romaji: 'shisaku', kanji: '施策', meaning: t('about.examples.vocab.n2.w4.meaning'), example: '新しい施策を導入する', exampleMeaning: t('about.examples.vocab.n2.w4.exampleMeaning') },
  ],
  N1: [
    { kana: 'きはく', romaji: 'kihaku', kanji: '気迫', meaning: t('about.examples.vocab.n1.w1.meaning'), example: '気迫に満ちた演説', exampleMeaning: t('about.examples.vocab.n1.w1.exampleMeaning') },
    { kana: 'しゅうち', romaji: 'shūchi', kanji: '周知', meaning: t('about.examples.vocab.n1.w2.meaning'), example: '規則を周知徹底する', exampleMeaning: t('about.examples.vocab.n1.w2.exampleMeaning') },
    { kana: 'だとう', romaji: 'datō', kanji: '妥当', meaning: t('about.examples.vocab.n1.w3.meaning'), example: '妥当な判断を下す', exampleMeaning: t('about.examples.vocab.n1.w3.exampleMeaning') },
    { kana: 'はんちゅう', romaji: 'hanchū', kanji: '範疇', meaning: t('about.examples.vocab.n1.w4.meaning'), example: '専門の範疇を超える', exampleMeaning: t('about.examples.vocab.n1.w4.exampleMeaning') },
  ],
}))

// ── Kanji data ────────────────────────────────────────────────────────────────
const kanjiByLevel = computed<Record<string, Array<{
  char: string
  meaning: string
  on: string
  kun: string
  jlpt: string
}>>>(() => ({
  N5: [
    { char: '日', meaning: t('about.examples.kanji.n5.k1.meaning'), on: 'にち・じつ', kun: 'ひ・か', jlpt: 'N5' },
    { char: '月', meaning: t('about.examples.kanji.n5.k2.meaning'), on: 'げつ・がつ', kun: 'つき', jlpt: 'N5' },
    { char: '山', meaning: t('about.examples.kanji.n5.k3.meaning'), on: 'さん', kun: 'やま', jlpt: 'N5' },
    { char: '川', meaning: t('about.examples.kanji.n5.k4.meaning'), on: 'せん', kun: 'かわ', jlpt: 'N5' },
    { char: '人', meaning: t('about.examples.kanji.n5.k5.meaning'), on: 'じん・にん', kun: 'ひと', jlpt: 'N5' },
  ],
  N4: [
    { char: '通', meaning: t('about.examples.kanji.n4.k1.meaning'), on: 'つう', kun: 'とお・かよ', jlpt: 'N4' },
    { char: '業', meaning: t('about.examples.kanji.n4.k2.meaning'), on: 'ぎょう', kun: 'わざ', jlpt: 'N4' },
    { char: '特', meaning: t('about.examples.kanji.n4.k3.meaning'), on: 'とく', kun: '—', jlpt: 'N4' },
    { char: '説', meaning: t('about.examples.kanji.n4.k4.meaning'), on: 'せつ', kun: 'と', jlpt: 'N4' },
    { char: '続', meaning: t('about.examples.kanji.n4.k5.meaning'), on: 'ぞく', kun: 'つづ', jlpt: 'N4' },
  ],
  N3: [
    { char: '慣', meaning: t('about.examples.kanji.n3.k1.meaning'), on: 'かん', kun: 'な', jlpt: 'N3' },
    { char: '況', meaning: t('about.examples.kanji.n3.k2.meaning'), on: 'きょう', kun: '—', jlpt: 'N3' },
    { char: '提', meaning: t('about.examples.kanji.n3.k3.meaning'), on: 'てい', kun: 'さ', jlpt: 'N3' },
    { char: '案', meaning: t('about.examples.kanji.n3.k4.meaning'), on: 'あん', kun: '—', jlpt: 'N3' },
    { char: '営', meaning: t('about.examples.kanji.n3.k5.meaning'), on: 'えい', kun: 'いとな', jlpt: 'N3' },
  ],
  N2: [
    { char: '論', meaning: t('about.examples.kanji.n2.k1.meaning'), on: 'ろん', kun: '—', jlpt: 'N2' },
    { char: '責', meaning: t('about.examples.kanji.n2.k2.meaning'), on: 'せき', kun: 'せ', jlpt: 'N2' },
    { char: '測', meaning: t('about.examples.kanji.n2.k3.meaning'), on: 'そく', kun: 'はか', jlpt: 'N2' },
    { char: '証', meaning: t('about.examples.kanji.n2.k4.meaning'), on: 'しょう', kun: 'あかし', jlpt: 'N2' },
    { char: '導', meaning: t('about.examples.kanji.n2.k5.meaning'), on: 'どう', kun: 'みちび', jlpt: 'N2' },
  ],
  N1: [
    { char: '顕', meaning: t('about.examples.kanji.n1.k1.meaning'), on: 'けん', kun: 'あらわ', jlpt: 'N1' },
    { char: '慮', meaning: t('about.examples.kanji.n1.k2.meaning'), on: 'りょ', kun: '—', jlpt: 'N1' },
    { char: '随', meaning: t('about.examples.kanji.n1.k3.meaning'), on: 'ずい', kun: 'したが', jlpt: 'N1' },
    { char: '緻', meaning: t('about.examples.kanji.n1.k4.meaning'), on: 'ち', kun: '—', jlpt: 'N1' },
    { char: '堅', meaning: t('about.examples.kanji.n1.k5.meaning'), on: 'けん', kun: 'かた', jlpt: 'N1' },
  ],
}))

// ── Grammar data ──────────────────────────────────────────────────────────────
const grammarByLevel = computed<Record<string, Array<{
  pattern: string
  label: string
  explanation: string
  example: string
  reading: string
  translation: string
}>>>(() => ({
  N5: [
    { pattern: '〜は〜です', label: t('about.examples.grammar.n5.g1.label'), explanation: t('about.examples.grammar.n5.g1.explanation'), example: 'これは本です。', reading: 'Kore wa hon desu.', translation: t('about.examples.grammar.n5.g1.translation') },
    { pattern: '〜が好きです', label: t('about.examples.grammar.n5.g2.label'), explanation: t('about.examples.grammar.n5.g2.explanation'), example: '日本語が好きです。', reading: 'Nihongo ga suki desu.', translation: t('about.examples.grammar.n5.g2.translation') },
  ],
  N4: [
    { pattern: '〜なければなりません', label: t('about.examples.grammar.n4.g1.label'), explanation: t('about.examples.grammar.n4.g1.explanation'), example: '毎日漢字を練習しなければなりません。', reading: 'Mainichi kanji o renshū shinakereba narimasen.', translation: t('about.examples.grammar.n4.g1.translation') },
    { pattern: '〜と思います', label: t('about.examples.grammar.n4.g2.label'), explanation: t('about.examples.grammar.n4.g2.explanation'), example: 'この文法は大切だと思います。', reading: 'Kono bunpō wa taisetsu da to omoimasu.', translation: t('about.examples.grammar.n4.g2.translation') },
  ],
  N3: [
    { pattern: '〜ように', label: t('about.examples.grammar.n3.g1.label'), explanation: t('about.examples.grammar.n3.g1.explanation'), example: '日本語で話せるように練習しています。', reading: 'Nihongo de hanaseru yō ni renshū shiteimasu.', translation: t('about.examples.grammar.n3.g1.translation') },
    { pattern: '〜ことになっている', label: t('about.examples.grammar.n3.g2.label'), explanation: t('about.examples.grammar.n3.g2.explanation'), example: '授業では日本語だけを使うことになっています。', reading: 'Jugyō de wa nihongo dake o tsukau koto ni natteimasu.', translation: t('about.examples.grammar.n3.g2.translation') },
  ],
  N2: [
    { pattern: '〜にすぎない', label: t('about.examples.grammar.n2.g1.label'), explanation: t('about.examples.grammar.n2.g1.explanation'), example: 'これは一つの例にすぎない。', reading: 'Kore wa hitotsu no rei ni suginai.', translation: t('about.examples.grammar.n2.g1.translation') },
    { pattern: '〜に伴って', label: t('about.examples.grammar.n2.g2.label'), explanation: t('about.examples.grammar.n2.g2.explanation'), example: 'レベルの向上に伴って、語彙も増える。', reading: 'Reberu no kōjō ni tomonatte, goi mo fueru.', translation: t('about.examples.grammar.n2.g2.translation') },
  ],
  N1: [
    { pattern: '〜をめぐって', label: t('about.examples.grammar.n1.g1.label'), explanation: t('about.examples.grammar.n1.g1.explanation'), example: '教育改革をめぐって議論が続いている。', reading: 'Kyōiku kaikaku o megutte giron ga tsuzuiteiru.', translation: t('about.examples.grammar.n1.g1.translation') },
    { pattern: '〜ずにはいられない', label: t('about.examples.grammar.n1.g2.label'), explanation: t('about.examples.grammar.n1.g2.explanation'), example: 'この話を聞いて驚かずにはいられない。', reading: 'Kono hanashi o kiite odorokazu ni wa irarenai.', translation: t('about.examples.grammar.n1.g2.translation') },
  ],
}))

const vocabularyCards = computed(() => vocabularyByLevel.value[vocabLevel.value] ?? vocabularyByLevel.value.N5)
const kanjiCards = computed(() => kanjiByLevel.value[kanjiLevel.value] ?? kanjiByLevel.value.N5)
const grammarPatterns = computed(() => grammarByLevel.value[grammarLevel.value] ?? grammarByLevel.value.N5)

// ── Kana showcase ─────────────────────────────────────────────────────────────
const kanaShowcase = computed(() => [
  {
    id: 'hiragana',
    title: t('about.kana.hiragana.title'),
    description: t('about.kana.hiragana.description'),
    chars: [
      { char: 'あ', romaji: 'a' }, { char: 'い', romaji: 'i' }, { char: 'う', romaji: 'u' },
      { char: 'え', romaji: 'e' }, { char: 'お', romaji: 'o' }, { char: 'か', romaji: 'ka' },
      { char: 'き', romaji: 'ki' }, { char: 'く', romaji: 'ku' }, { char: 'け', romaji: 'ke' },
      { char: 'こ', romaji: 'ko' },
    ],
  },
  {
    id: 'katakana',
    title: t('about.kana.katakana.title'),
    description: t('about.kana.katakana.description'),
    chars: [
      { char: 'ア', romaji: 'a' }, { char: 'イ', romaji: 'i' }, { char: 'ウ', romaji: 'u' },
      { char: 'エ', romaji: 'e' }, { char: 'オ', romaji: 'o' }, { char: 'カ', romaji: 'ka' },
      { char: 'キ', romaji: 'ki' }, { char: 'ク', romaji: 'ku' }, { char: 'ケ', romaji: 'ke' },
      { char: 'コ', romaji: 'ko' },
    ],
  },
])

// ── JLPT ─────────────────────────────────────────────────────────────────────
const jlptLevelDetails = computed(() => [
  { id: 'N5', key: 'n5' },
  { id: 'N4', key: 'n4' },
  { id: 'N3', key: 'n3' },
  { id: 'N2', key: 'n2' },
  { id: 'N1', key: 'n1' },
])

const favoriteJlpt = ref('N5')

const selectedJlpt = computed(() => {
  const selected = jlptLevelDetails.value.find(level => level.id === favoriteJlpt.value) ?? jlptLevelDetails.value[0]!
  return {
    id: selected.id,
    label: t(`about.jlpt.levels.${selected.key}.label`),
    focus: t(`about.jlpt.levels.${selected.key}.focus`),
    description: t(`about.jlpt.levels.${selected.key}.description`),
  }
})

function jlptButtonClass(level: string, selected: boolean) {
  const base = 'px-3 py-1.5 rounded-full border text-sm font-medium transition-colors duration-150'
  const palette: Record<string, string> = {
    N5: selected ? 'bg-green-700 text-white border-green-700' : 'bg-green-600/10 text-green-800 border-green-600/30 hover:bg-green-600/20 dark:text-green-200',
    N4: selected ? 'bg-blue-700 text-white border-blue-700' : 'bg-blue-600/10 text-blue-800 border-blue-600/30 hover:bg-blue-600/20 dark:text-blue-200',
    N3: selected ? 'bg-orange-600 text-white border-orange-600' : 'bg-orange-500/10 text-orange-800 border-orange-500/30 hover:bg-orange-500/20 dark:text-orange-200',
    N2: selected ? 'bg-purple-700 text-white border-purple-700' : 'bg-purple-600/10 text-purple-800 border-purple-600/30 hover:bg-purple-600/20 dark:text-purple-200',
    N1: selected ? 'bg-red-700 text-white border-red-700' : 'bg-red-600/10 text-red-800 border-red-600/30 hover:bg-red-600/20 dark:text-red-200',
  }
  return `${base} ${palette[level] ?? 'bg-muted text-muted-foreground border-border'}`
}

function jlptBadgeClass(level: string) {
  const palette: Record<string, string> = {
    N5: 'bg-green-600/15 text-green-800 dark:text-green-200',
    N4: 'bg-blue-600/15 text-blue-800 dark:text-blue-200',
    N3: 'bg-orange-500/15 text-orange-800 dark:text-orange-200',
    N2: 'bg-purple-600/15 text-purple-800 dark:text-purple-200',
    N1: 'bg-red-600/15 text-red-800 dark:text-red-200',
  }
  return palette[level] ?? 'bg-muted text-muted-foreground'
}

// ── AI demo ───────────────────────────────────────────────────────────────────
const aiLoading = ref(false)
const aiDone = ref(false)

function resetAI() {
  aiDone.value = false
  aiLoading.value = false
}

const aiWord = {
  kanji: '曖昧',
  reading: 'あいまい',
  romaji: 'aimai',
  level: 'N2',
  examples: [
    { jp: '曖昧な返事をした', reading: 'あいまいなへんじをした' },
    { jp: 'その規則は曖昧だ', reading: 'そのきそくはあいまいだ' },
    { jp: '彼女は曖昧に笑った', reading: 'かのじょはあいまいにわらった' },
  ],
}

const aiSections = computed(() => [
  { title: t('about.ai.s1Title'), body: t('about.ai.s1Body') },
  { title: t('about.ai.s2Title'), body: t('about.ai.s2Body') },
  { title: t('about.ai.s3Title'), body: t('about.ai.s3Body') },
])

const aiExampleTrans = computed(() => [
  t('about.ai.ex1Trans'),
  t('about.ai.ex2Trans'),
  t('about.ai.ex3Trans'),
])

async function handleAskAI() {
  if (aiLoading.value || aiDone.value) return
  aiLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 2400))
  aiLoading.value = false
  aiDone.value = true
}
</script>

<template>
  <div class="flex flex-col">

    <!-- Hero Section -->
    <section class="relative w-full py-14 md:py-24 lg:py-32 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/8 via-muted/30 to-background pointer-events-none" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/6 rounded-full blur-3xl pointer-events-none" />
      <div class="relative container mx-auto px-4 md:px-6">
        <div class="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16">
          <!-- Text + CTA -->
          <div class="flex flex-col items-center md:items-start gap-6 text-center md:text-left max-w-xl">
            <div class="space-y-4">
              <h1 class="animate-fade-up text-gradient-primary text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl pb-2">
                {{ t('landing.hero.title') }}
              </h1>
              <p class="animate-fade-up animation-delay-100 text-muted-foreground text-base md:text-xl leading-relaxed">
                {{ t('landing.hero.subtitle') }}
              </p>
            </div>
            <div class="animate-fade-up animation-delay-200 w-full sm:w-auto">
              <StoreBadges
                :google-play-url="appConfig.sukuro.links.googlePlay"
                :app-store-url="appConfig.sukuro.links.appStore"
              />
            </div>
          </div>
          <!-- App Icon -->
          <div class="animate-fade-up animation-delay-100 shrink-0">
            <div class="relative">
              <div class="absolute inset-0 rounded-[28%] bg-primary/20 blur-2xl scale-110 pointer-events-none" />
              <NuxtPicture
                src="/app_icon.png"
                alt="Sukuro App Icon"
                :width="256"
                :height="256"
                sizes="xs:144px sm:192px md:224px lg:256px"
                format="webp,avif"
                preload
                :img-attrs="{
                  class: 'relative w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-[22%] shadow-2xl shadow-primary/20 object-cover',
                  fetchpriority: 'high',
                  loading: 'eager',
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature pills -->
    <section class="w-full py-10 md:py-14">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto animate-fade-up animation-delay-100">
          <div
            v-for="feat in pillars"
            :key="feat.title"
            class="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-border/60 bg-card hover:shadow-sm hover:border-primary/30 transition-all duration-200"
          >
            <div class="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
              {{ feat.char }}
            </div>
            <div>
              <p class="font-semibold text-sm">{{ feat.title }}</p>
              <p class="text-xs text-muted-foreground mt-1 leading-relaxed">{{ feat.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kana -->
    <section class="w-full py-10 md:py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-8 animate-fade-up">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.kana.eyebrow') }}</span>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-3">{{ t('about.kana.title') }}</h2>
          <p class="text-muted-foreground text-[15px] max-w-2xl leading-relaxed">{{ t('about.kana.description') }}</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 animate-fade-up animation-delay-100">
          <div
            v-for="set in kanaShowcase"
            :key="set.id"
            class="rounded-xl border border-border/60 bg-card p-5 md:p-6 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
          >
            <div class="mb-4">
              <h3 class="text-lg font-semibold">{{ set.title }}</h3>
              <p class="text-sm text-muted-foreground mt-1">{{ set.description }}</p>
            </div>
            <div class="grid grid-cols-5 gap-2">
              <div
                v-for="item in set.chars"
                :key="`${set.id}-${item.char}`"
                class="rounded-lg border border-border/50 bg-muted/30 px-2 py-2 text-center"
              >
                <p class="text-xl font-bold leading-none">{{ item.char }}</p>
                <p class="text-[11px] text-muted-foreground mt-1">{{ item.romaji }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- JLPT -->
    <section class="w-full py-10 md:py-16 bg-muted/20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-8 animate-fade-up">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.jlpt.eyebrow') }}</span>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-3">{{ t('about.jlpt.title') }}</h2>
          <p class="text-muted-foreground text-[15px] max-w-2xl leading-relaxed">{{ t('about.jlpt.description') }}</p>
        </div>
        <div class="animate-fade-up animation-delay-100 rounded-xl border border-border/60 bg-card p-5 md:p-6">
          <p class="text-sm text-muted-foreground mb-4">{{ t('about.jlpt.selectLabel') }}</p>
          <div class="flex flex-wrap gap-2 mb-5">
            <button
              v-for="level in jlptLevelDetails"
              :key="level.id"
              type="button"
              :class="jlptButtonClass(level.id, favoriteJlpt === level.id)"
              @click="favoriteJlpt = level.id"
            >
              {{ level.id }}
            </button>
          </div>
          <div class="rounded-lg border border-primary/20 bg-primary/5 p-4 md:p-5">
            <p class="text-xs uppercase tracking-widest text-primary font-semibold mb-1">{{ t('about.jlpt.favoriteLabel') }}</p>
            <h3 class="text-xl font-bold mb-2">{{ selectedJlpt.id }} — {{ selectedJlpt.label }}</h3>
            <p class="text-sm font-medium text-foreground/80 mb-2">{{ selectedJlpt.focus }}</p>
            <p class="text-sm text-muted-foreground leading-relaxed">{{ selectedJlpt.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vocabulary -->
    <section class="w-full py-10 md:py-16 bg-muted/20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-8 animate-fade-up">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.vocab.eyebrow') }}</span>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-3">{{ t('about.vocab.title') }}</h2>
          <p class="text-muted-foreground text-[15px] max-w-xl leading-relaxed">{{ t('about.vocab.description') }}</p>
        </div>
        <div class="mb-5 animate-fade-up animation-delay-100">
          <p class="text-sm text-muted-foreground mb-2">{{ t('about.vocab.levelLabel') }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="level in jlptLevels"
              :key="`vocab-${level}`"
              type="button"
              :class="jlptButtonClass(level, vocabLevel === level)"
              @click="vocabLevel = level"
            >
              {{ level }}
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 animate-fade-up animation-delay-200">
          <div
            v-for="card in vocabularyCards"
            :key="card.kanji"
            class="group rounded-xl border border-border/60 bg-card p-4 md:p-5 hover:shadow-md hover:border-primary/30 transition-all duration-200 flex flex-col gap-2"
          >
            <span class="self-end text-[10px] font-bold px-2 py-0.5 rounded-full" :class="jlptBadgeClass(vocabLevel)">
              {{ vocabLevel }}
            </span>
            <div class="text-center pb-3 border-b border-border/40">
              <p class="text-xs text-muted-foreground tracking-wide">{{ card.kana }}</p>
              <p class="text-3xl md:text-4xl font-bold text-foreground my-0.5 leading-tight">{{ card.kanji }}</p>
                <p class="text-[11px] text-muted-foreground">{{ card.romaji }}</p>
            </div>
            <p class="text-sm font-semibold text-primary text-center">{{ card.meaning }}</p>
            <div class="mt-auto pt-2 border-t border-border/30">
              <p class="text-xs font-medium text-foreground/80">{{ card.example }}</p>
              <p class="text-[11px] text-muted-foreground italic mt-0.5">{{ card.exampleMeaning }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kanji -->
    <section class="w-full py-10 md:py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-8 animate-fade-up">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.kanji.eyebrow') }}</span>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-3">{{ t('about.kanji.title') }}</h2>
          <p class="text-muted-foreground text-[15px] max-w-xl leading-relaxed">{{ t('about.kanji.description') }}</p>
        </div>
        <div class="mb-5 animate-fade-up animation-delay-100">
          <p class="text-sm text-muted-foreground mb-2">{{ t('about.kanji.levelLabel') }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="level in jlptLevels"
              :key="`kanji-${level}`"
              type="button"
              :class="jlptButtonClass(level, kanjiLevel === level)"
              @click="kanjiLevel = level"
            >
              {{ level }}
            </button>
          </div>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 animate-fade-up animation-delay-200">
          <div
            v-for="k in kanjiCards"
            :key="k.char"
            class="relative rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 overflow-hidden p-4 flex flex-col items-center gap-2 text-center"
          >
            <span class="absolute top-2 right-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full" :class="jlptBadgeClass(k.jlpt)">
              {{ k.jlpt }}
            </span>
            <p class="text-5xl md:text-6xl font-bold text-foreground/90 leading-none mt-3">{{ k.char }}</p>
            <p class="text-xs font-semibold text-primary">{{ k.meaning }}</p>
            <div class="w-full pt-2 border-t border-border/40 space-y-1">
              <p class="text-[11px] text-muted-foreground">
                <span class="text-muted-foreground">{{ t('about.kanji.onLabel') }} </span>{{ k.on }}
              </p>
              <p class="text-[11px] text-muted-foreground">
                <span class="text-muted-foreground">{{ t('about.kanji.kunLabel') }} </span>{{ k.kun }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Grammar -->
    <section class="w-full py-10 md:py-16 bg-muted/20">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mb-8 animate-fade-up">
          <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.grammar.eyebrow') }}</span>
          <h2 class="text-2xl md:text-3xl font-bold tracking-tight mt-1 mb-3">{{ t('about.grammar.title') }}</h2>
          <p class="text-muted-foreground text-[15px] max-w-xl leading-relaxed">{{ t('about.grammar.description') }}</p>
        </div>
        <div class="mb-5 animate-fade-up animation-delay-100">
          <p class="text-sm text-muted-foreground mb-2">{{ t('about.grammar.levelLabel') }}</p>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="level in jlptLevels"
              :key="`grammar-${level}`"
              type="button"
              :class="jlptButtonClass(level, grammarLevel === level)"
              @click="grammarLevel = level"
            >
              {{ level }}
            </button>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-up animation-delay-200">
          <div
            v-for="g in grammarPatterns"
            :key="g.pattern"
            class="rounded-xl border border-border/60 bg-card hover:border-primary/30 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col"
          >
            <div class="px-5 py-4 border-b border-border/50 bg-primary/4">
              <p class="text-xl font-bold text-foreground tracking-wide">{{ g.pattern }}</p>
              <div class="mt-2 flex items-center gap-2">
                <Badge variant="secondary" class="text-[11px]">{{ g.label }}</Badge>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="jlptBadgeClass(grammarLevel)">
                  {{ grammarLevel }}
                </span>
              </div>
            </div>
            <div class="px-5 py-4 flex flex-col gap-3 flex-1">
              <p class="text-[13px] text-muted-foreground leading-relaxed">{{ g.explanation }}</p>
              <div class="mt-auto rounded-lg bg-muted/40 px-4 py-3 space-y-1.5">
                <p class="text-base font-semibold text-foreground">{{ g.example }}</p>
                <p class="text-[11px] text-muted-foreground italic">{{ g.reading }}</p>
                <p class="text-[12px] font-medium text-primary">{{ g.translation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI -->
    <section class="relative w-full py-10 md:py-16 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary/4 rounded-full blur-3xl pointer-events-none" />
      <div class="relative container mx-auto px-4 md:px-6">
        <div class="max-w-3xl mx-auto animate-fade-up">
          <div class="mb-7">
            <div class="inline-flex items-center gap-2 mb-3">
              <div class="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-primary/30 to-primary/10">
                <Icon name="lucide:sparkles" class="w-3 h-3 text-primary" />
              </div>
              <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.ai.eyebrow') }}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-bold tracking-tight mb-3">{{ t('about.ai.title') }}</h2>
            <p class="text-muted-foreground text-[15px] max-w-xl leading-relaxed">{{ t('about.ai.description') }}</p>
          </div>
          <div class="relative rounded-2xl border border-border/60 bg-card overflow-hidden shadow-md ring-1 ring-primary/5">
            <div class="h-[3px] bg-gradient-to-r from-primary via-primary/70 to-primary/20" />
            <div class="p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 border-b border-border/40">
              <div class="flex items-center gap-4 flex-1 min-w-0">
                <div class="relative shrink-0">
                  <div class="absolute inset-0 rounded-xl bg-primary/10 blur-md" />
                  <div class="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/20 flex items-center justify-center">
                    <span class="text-3xl font-bold text-foreground">{{ aiWord.kanji }}</span>
                  </div>
                </div>
                <div>
                  <div class="flex items-center gap-2 flex-wrap">
                    <span class="text-lg font-semibold text-foreground">{{ aiWord.reading }}</span>
                    <span class="text-muted-foreground text-sm">·</span>
                    <span class="text-sm text-muted-foreground">{{ aiWord.romaji }}</span>
                    <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="jlptBadgeClass(aiWord.level)">{{ aiWord.level }}</span>
                  </div>
                  <p class="text-sm font-medium text-foreground/70 mt-1">{{ t('about.ai.wordMeaning') }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 shrink-0">
                <Button
                  v-if="aiDone"
                  variant="ghost"
                  size="sm"
                  class="gap-1.5 text-muted-foreground hover:text-foreground"
                  @click="resetAI"
                >
                  <Icon name="lucide:rotate-ccw" class="w-3.5 h-3.5" />
                  {{ t('about.ai.reset') }}
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  class="gap-1.5 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-sm"
                  :disabled="aiLoading || aiDone"
                  @click="handleAskAI"
                >
                  <Icon name="lucide:sparkles" class="w-3.5 h-3.5" />
                  {{ t('about.ai.askAi') }}
                </Button>
              </div>
            </div>
            <Transition
              enter-active-class="transition-all duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition-all duration-200 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <div v-if="aiLoading" class="px-5 md:px-6 py-5 flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon name="lucide:sparkles" class="w-3.5 h-3.5 text-primary" />
                </div>
                <div class="flex items-center gap-2 bg-muted/60 rounded-2xl rounded-tl-sm px-4 py-2.5 border border-border/40">
                  <span class="text-sm text-muted-foreground">{{ t('about.ai.analyzing') }}</span>
                  <div class="flex items-center gap-1 ml-1">
                    <span class="w-1.5 h-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:0ms]" />
                    <span class="w-1.5 h-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:150ms]" />
                    <span class="w-1.5 h-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            </Transition>
            <Transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="opacity-0 translate-y-3"
              enter-to-class="opacity-100 translate-y-0"
            >
              <div v-if="aiDone" class="border-t border-border/40 bg-muted/10">
                <div class="px-5 md:px-6 pt-5 pb-3 flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center shrink-0 shadow-sm ring-1 ring-primary/20">
                    <Icon name="lucide:sparkles" class="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p class="text-xs font-semibold text-foreground/80">{{ t('about.ai.resultHeader') }}</p>
                  </div>
                </div>
                <div class="px-5 md:px-6 pb-5 space-y-4">
                  <div class="rounded-2xl rounded-tl-sm bg-card border border-border/50 shadow-sm p-4 md:p-5 space-y-4">
                    <div v-for="(section, i) in aiSections" :key="i">
                      <h4 class="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{{ section.title }}</h4>
                      <p class="text-sm text-foreground/80 leading-relaxed">{{ section.body }}</p>
                    </div>
                  </div>
                  <div class="space-y-2">
                    <p class="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground px-1">{{ t('about.ai.examplesLabel') }}</p>
                    <div
                      v-for="(ex, i) in aiWord.examples"
                      :key="i"
                      class="rounded-xl bg-card border border-border/50 px-4 py-3 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                    >
                      <p class="font-semibold text-foreground text-sm">{{ ex.jp }}</p>
                      <p class="text-xs text-muted-foreground mt-0.5 italic">{{ ex.reading }}</p>
                      <p class="text-xs text-primary/80 mt-1.5 font-medium">{{ aiExampleTrans[i] }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Creator Section -->
    <section class="w-full py-6 md:py-8 lg:py-10">
      <div class="container mx-auto px-4 md:px-6">
        <div class="mx-auto max-w-4xl animate-fade-up animation-delay-300">
          <div class="flex items-center gap-2 mb-4">
            <Icon name="lucide:message-square-quote" class="w-4 h-4 text-primary/60 shrink-0" />
            <span class="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {{ t('landing.creator.title') }}
            </span>
          </div>
          <Card class="relative overflow-hidden border-border/60 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/60 to-transparent" />
            <CardContent class="pt-4 pb-4 px-5 md:px-8 lg:px-10">
              <span aria-hidden="true" class="block text-6xl font-bold leading-none text-primary/10 select-none -mb-1">"</span>
              <div class="space-y-3 md:space-y-2.5">
                <p
                  v-for="(para, i) in t('landing.creator.message').split('\n\n')"
                  :key="i"
                  class="text-foreground/75 leading-[1.75] text-[15px] md:text-[16px]"
                >
                  {{ para }}
                </p>
              </div>
              <div class="mt-4 pt-3 border-t border-border/40 flex items-center gap-3">
                <NuxtImg
                  src="/app_icon.png"
                  alt="Sukuro"
                  :width="32"
                  :height="32"
                  format="webp"
                  loading="lazy"
                  class="w-8 h-8 rounded-lg object-cover shrink-0"
                />
                <div>
                  <p class="text-sm font-semibold text-foreground/80">Florian</p>
                  <p class="text-xs text-muted-foreground">{{ t('landing.creator.role') }}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="w-full py-10 md:py-16 bg-muted/20">
      <div class="container mx-auto px-4 md:px-6 text-center animate-fade-up">
        <span class="text-xs font-semibold uppercase tracking-widest text-primary">{{ t('about.cta.eyebrow') }}</span>
        <h2 class="text-2xl md:text-3xl font-bold tracking-tight mt-2 mb-3">{{ t('about.cta.title') }}</h2>
        <p class="text-muted-foreground text-[15px] mb-8 max-w-md mx-auto leading-relaxed">{{ t('about.cta.description') }}</p>
        <div class="flex justify-center">
          <StoreBadges
            :google-play-url="appConfig.sukuro.links.googlePlay"
            :app-store-url="appConfig.sukuro.links.appStore"
          />
        </div>
      </div>
    </section>

  </div>
</template>
