'use client'

import Link from 'next/link'
import styles from './News.module.css'
import { NewsItem } from '@/types'
import { getLatestNews } from '@/lib/news-data'
import { useI18n } from '@/lib/i18n/i18n-context'

export default function News() {
  const { t } = useI18n()
  const newsItems = getLatestNews().slice(0, 4) // Show only 4 latest items on homepage
  
  return (
    <section className={styles.news}>
      <div className="container">
        <div className={styles.newsHeader}>
          <h2 className={styles.sectionTitle}>{t('news.title')}</h2>
          <Link href="/news" className={styles.viewAll}>
            {t('common.viewAll')} →
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
