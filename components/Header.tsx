'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>桜県</span>
            <span className={styles.logoSubtext}>SAKURA PREFECTURE</span>
          </Link>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li>
              <Link href="/about">桜県について</Link>
            </li>
            <li>
              <Link href="/tourism">観光情報</Link>
            </li>
            <li>
              <Link href="/access">アクセス・交通</Link>
            </li>
            <li>
              <Link href="/news">お知らせ</Link>
            </li>
            <li>
              <Link href="/services">県民サービス</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
