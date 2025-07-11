import Link from 'next/link'
import styles from './QuickLinks.module.css'
import { QuickLink } from '@/types'
import { getFeaturedQuickLinks } from '@/lib/quick-links-config'

export default function QuickLinks() {
  const quickLinks = getFeaturedQuickLinks()
  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h2 className={styles.sectionTitle}>県民の皆様へ</h2>
        <div className={styles.linkGrid}>
          {quickLinks.map((link, index) => (
            <Link href={link.href} key={index} className={styles.linkCard}>
              <div className={styles.linkIcon}>{link.icon}</div>
              <h3 className={styles.linkTitle}>{link.title}</h3>
              <p className={styles.linkDescription}>{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
