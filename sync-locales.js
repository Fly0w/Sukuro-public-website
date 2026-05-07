import fs from 'fs'
import path from 'path'

const localesDir = path.join(process.cwd(), 'locales')
const enPath = path.join(localesDir, 'en.json')
const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'))

const languages = ['ja', 'zh', 'es', 'fr', 'vi', 'tl', 'ko', 'ru']

function syncKeys(source, target) {
  const result = { ...target }
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      result[key] = syncKeys(source[key], target[key] || {})
    } else {
      if (result[key] === undefined || result[key] === '') {
        result[key] = source[key] // Use English as fallback
      }
    }
  }
  return result
}

languages.forEach(lang => {
  const langPath = path.join(localesDir, `${lang}.json`)
  let langData = {}
  if (fs.existsSync(langPath)) {
    langData = JSON.parse(fs.readFileSync(langPath, 'utf8'))
  }
  const syncedData = syncKeys(enData, langData)
  fs.writeFileSync(langPath, JSON.stringify(syncedData, null, 2))
  console.log(`Synced ${lang}.json`)
})
