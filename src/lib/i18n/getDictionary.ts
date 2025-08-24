import 'server-only'
import type { Locale } from './config'

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  pl: () => import('./dictionaries/pl.json').then((module) => module.default),
  es: () => import('./dictionaries/es.json').then((module) => module.default),
  de: () => import('./dictionaries/de.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => {
  // 检查字典中是否存在该语言，如果不存在使用默认语言
  const targetLocale = dictionaries[locale] ? locale : 'en' as Locale;
  return dictionaries[targetLocale]()
}