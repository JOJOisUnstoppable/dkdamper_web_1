import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations()

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl">
            {t('home.hero.description')}
          </p>
        </div>
      </section>
    </div>
  )
}