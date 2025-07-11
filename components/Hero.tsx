'use client'

import Link from 'next/link'
import styles from './Hero.module.css'
import { getPrefectureSymbols } from '@/lib/data'
import { useI18n } from '@/lib/i18n/i18n-context'

export default function Hero() {
  const { t, locale } = useI18n()
  const symbols = getPrefectureSymbols()

  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t('common.welcome')}</h1>
          <p className={styles.heroSubtitle}>
            {locale === 'ja' ? symbols.catchphrase.japanese : symbols.catchphrase.english}
          </p>
          <div className={styles.heroButtons}>
            <Link href="/tourism" className={styles.primaryButton}>
              {t('hero.tourismButton')}
            </Link>
            <Link href="/about" className={styles.secondaryButton}>
              {t('hero.aboutButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
