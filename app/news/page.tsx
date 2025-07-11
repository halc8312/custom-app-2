import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

const newsData = [
  {
    id: 1,
    date: '2024年12月15日',
    category: 'イベント',
    title: '第25回桜県桜まつり開催のお知らせ',
    excerpt:
      '2025年3月20日から4月15日まで、県内各地で第25回桜県桜まつりを開催します。今年は新たに夜桜ライトアップエリアを拡大し、より幻想的な桜をお楽しみいただけます。',
    important: true,
  },
  {
    id: 2,
    date: '2024年12月10日',
    category: '県政',
    title: '令和7年度予算編成方針について',
    excerpt:
      '令和7年度の予算編成方針を決定しました。子育て支援、高齢者福祉、地域経済活性化を重点分野として、県民の皆様の生活向上に向けた施策を推進します。',
    important: false,
  },
  {
    id: 3,
    date: '2024年12月5日',
    category: '観光',
    title: '桜県観光アプリがリニューアル',
    excerpt:
      '桜県公式観光アプリ「さくらナビ」が大幅リニューアル。ARを活用した観光案内機能や、多言語対応を強化し、より便利にご利用いただけるようになりました。',
    important: false,
  },
  {
    id: 4,
    date: '2024年11月28日',
    category: '生活',
    title: '年末年始の県庁窓口業務について',
    excerpt:
      '年末年始期間（12月29日〜1月3日）は、県庁窓口業務をお休みさせていただきます。緊急時の連絡先など、詳細はこちらをご確認ください。',
    important: true,
  },
  {
    id: 5,
    date: '2024年11月20日',
    category: '福祉',
    title: '高齢者向け無料健康診断の実施',
    excerpt:
      '65歳以上の県民を対象に、無料健康診断を実施します。期間は1月15日から3月31日まで。お近くの指定医療機関でご受診いただけます。',
    important: false,
  },
  {
    id: 6,
    date: '2024年11月15日',
    category: '教育',
    title: '県立高校入試の出願受付開始',
    excerpt:
      '令和7年度県立高等学校入学者選抜の出願受付を開始しました。出願期間は1月15日から1月25日まで。詳しい募集要項は各高校のウェブサイトをご覧ください。',
    important: false,
  },
]

export default function NewsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>お知らせ・新着情報</h1>

          <div className={styles.categoryFilter}>
            <button className={styles.filterButton}>すべて</button>
            <button className={styles.filterButton}>県政</button>
            <button className={styles.filterButton}>イベント</button>
            <button className={styles.filterButton}>生活</button>
            <button className={styles.filterButton}>観光</button>
            <button className={styles.filterButton}>福祉</button>
            <button className={styles.filterButton}>教育</button>
          </div>

          <div className={styles.newsList}>
            {newsData.map((news) => (
              <article
                key={news.id}
                className={`${styles.newsItem} ${news.important ? styles.important : ''}`}
              >
                <div className={styles.newsHeader}>
                  <time className={styles.newsDate}>{news.date}</time>
                  <span className={styles.newsCategory}>{news.category}</span>
                  {news.important && (
                    <span className={styles.importantBadge}>重要</span>
                  )}
                </div>
                <Link href={`/news/${news.id}`} className={styles.newsLink}>
                  <h2 className={styles.newsTitle}>{news.title}</h2>
                </Link>
                <p className={styles.newsExcerpt}>{news.excerpt}</p>
                <Link href={`/news/${news.id}`} className={styles.readMore}>
                  続きを読む →
                </Link>
              </article>
            ))}
          </div>

          <div className={styles.pagination}>
            <button className={styles.paginationButton} disabled>
              前へ
            </button>
            <span className={styles.pageNumbers}>
              <button className={`${styles.pageNumber} ${styles.active}`}>
                1
              </button>
              <button className={styles.pageNumber}>2</button>
              <button className={styles.pageNumber}>3</button>
            </span>
            <button className={styles.paginationButton}>次へ</button>
          </div>

          <section className={styles.archiveSection}>
            <h2>過去のお知らせ</h2>
            <div className={styles.archiveLinks}>
              <Link href="/news/archive/2024">2024年</Link>
              <Link href="/news/archive/2023">2023年</Link>
              <Link href="/news/archive/2022">2022年</Link>
              <Link href="/news/archive/2021">2021年</Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
