'use client'

import { useI18n } from '@/lib/i18n/i18n-context'
import styles from './LanguageSwitcher.module.css'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <div className={styles.languageSwitcher}>
      <button
        className={`${styles.langButton} ${locale === 'ja' ? styles.active : ''}`}
        onClick={() => setLocale('ja')}
        aria-label="日本語に切り替え"
      >
        日本語
      </button>
      <span className={styles.separator}>|</span>
      <button
        className={`${styles.langButton} ${locale === 'en' ? styles.active : ''}`}
        onClick={() => setLocale('en')}
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  )
}