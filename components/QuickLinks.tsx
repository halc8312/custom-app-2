import Link from 'next/link'
import styles from './QuickLinks.module.css'

const quickLinks = [
  {
    title: '県政情報',
    description: '県の政策、組織、予算など',
    href: '/government',
    icon: '🏛️',
  },
  {
    title: '観光・イベント',
    description: '観光スポット、イベント情報',
    href: '/tourism',
    icon: '🌸',
  },
  {
    title: '生活・福祉',
    description: '健康、福祉、教育サービス',
    href: '/services',
    icon: '🏥',
  },
  {
    title: '産業・雇用',
    description: 'ビジネス支援、求人情報',
    href: '/business',
    icon: '💼',
  },
]

export default function QuickLinks() {
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
