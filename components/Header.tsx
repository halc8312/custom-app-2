'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'
import Search from './Search'
import LanguageSwitcher from './LanguageSwitcher'
import { useI18n } from '@/lib/i18n/i18n-context'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t, locale } = useI18n()

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>{t('common.prefecture')}</span>
            <span className={styles.logoSubtext}>
              {locale === 'ja' ? 'SAKURA PREFECTURE' : t('common.prefecture')}
            </span>
          </Link>
        </div>

        <div className={styles.searchWrapper}>
          <Search />
        </div>

        <div className={styles.langSwitcherWrapper}>
          <LanguageSwitcher />
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={locale === 'ja' ? 'メニューを開く' : 'Open menu'}
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/about">{t('navigation.about')}</Link>
            </li>
            <li>
              <Link href="/tourism">{t('navigation.tourism')}</Link>
            </li>
            <li>
              <Link href="/economy">{t('navigation.economy')}</Link>
            </li>
            <li>
              <Link href="/access">{t('navigation.access')}</Link>
            </li>
            <li>
              <Link href="/news">{t('navigation.news')}</Link>
            </li>
            <li>
              <Link href="/services">{t('navigation.services')}</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
