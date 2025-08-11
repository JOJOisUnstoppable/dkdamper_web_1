export const locales = ['en', 'pl', 'es', 'de'] as const
export type Locale = typeof locales[number]
export const defaultLocale: Locale = 'en'

export const localeNames = {
  en: 'English',
  pl: 'Polski',
  es: 'Español',
  de: 'Deutsch'
} as const