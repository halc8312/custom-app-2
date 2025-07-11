import Link from 'next/link'
import styles from './News.module.css'

const newsItems = [
  {
    date: '2024年12月15日',
    category: 'イベント',
    title: '第25回桜県桜まつり開催のお知らせ',
    href: '/news/sakura-festival-2024',
  },
  {
    date: '2024年12月10日',
    category: '県政',
    title: '令和7年度予算編成方針について',
    href: '/news/budget-2025',
  },
  {
    date: '2024年12月5日',
    category: '観光',
    title: '桜県観光アプリがリニューアル',
    href: '/news/tourism-app-renewal',
  },
  {
    date: '2024年11月28日',
    category: '生活',
    title: '年末年始の県庁窓口業務について',
    href: '/news/year-end-schedule',
  },
]

export default function News() {
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.newsHeader}>
          <h2 className={styles.sectionTitle}>お知らせ・新着情報</h2>
          <Link href="/news" className={styles.viewAll}>
            すべて見る →
          </Link>
        </div>
        <div className={styles.newsList}>
          {newsItems.map((item, index) => (
            <article key={index} className={styles.newsItem}>
              <div className={styles.newsDate}>{item.date}</div>
              <div className={styles.newsContent}>
                <span className={styles.newsCategory}>{item.category}</span>
                <Link href={item.href} className={styles.newsTitle}>
                  {item.title}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
