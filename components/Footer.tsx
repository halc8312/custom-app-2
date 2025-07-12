import Link from 'next/link'
import styles from './Footer.module.css'
import { prefectureInfo } from '@/lib/data'

export default function Footer() {
  const contact = prefectureInfo.contact.prefecture_office
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>
              {prefectureInfo.name.japanese}庁
            </h3>
            <p className={styles.footerText}>
              〒{contact.postal_code}
              <br />
              {contact.address}
              <br />
              電話: {contact.phone}（代表）
            </p>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>県政情報</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/government">組織・業務</Link>
              </li>
              <li>
                <Link href="/budget">予算・財政</Link>
              </li>
              <li>
                <Link href="/statistics">統計情報</Link>
              </li>
              <li>
                <Link href="/plans">計画・施策</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>県民サービス</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/services">各種手続き</Link>
              </li>
              <li>
                <Link href="/facilities">施設案内</Link>
              </li>
              <li>
                <Link href="/emergency">防災・緊急情報</Link>
              </li>
              <li>
                <Link href="/consultation">相談窓口</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>関連リンク</h3>
            <ul className={styles.footerLinks}>
              <li>
                <Link href="/sitemap">サイトマップ</Link>
              </li>
              <li>
                <Link href="/privacy">個人情報保護</Link>
              </li>
              <li>
                <Link href="/accessibility">アクセシビリティ</Link>
              </li>
              <li>
                <Link href="/contact">お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} {prefectureInfo.name.japanese} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
