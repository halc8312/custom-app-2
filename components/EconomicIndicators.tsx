import styles from './EconomicIndicators.module.css'
import economyData from '@/lib/economy.json'
import Link from 'next/link'

export default function EconomicIndicators() {
  const { gdp, employment } = economyData

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>桜県の経済指標</h2>
        
        <div className={styles.indicatorGrid}>
          <div className={styles.indicatorCard}>
            <div className={styles.indicatorIcon}>💰</div>
            <h3>県内総生産</h3>
            <p className={styles.indicatorValue}>{(gdp.total_billion_yen / 1000).toFixed(1)}兆円</p>
            <span className={styles.indicatorLabel}>全国第{gdp.rank_national}位</span>
          </div>
          
          <div className={styles.indicatorCard}>
            <div className={styles.indicatorIcon}>📈</div>
            <h3>経済成長率</h3>
            <p className={styles.indicatorValue}>+{gdp.real_growth_rate}%</p>
            <span className={styles.indicatorLabel}>実質成長率（前年比）</span>
          </div>
          
          <div className={styles.indicatorCard}>
            <div className={styles.indicatorIcon}>👥</div>
            <h3>就業者数</h3>
            <p className={styles.indicatorValue}>{(employment.total_employed / 10000).toFixed(1)}万人</p>
            <span className={styles.indicatorLabel}>失業率 {employment.unemployment_rate}%</span>
          </div>
          
          <div className={styles.indicatorCard}>
            <div className={styles.indicatorIcon}>🏢</div>
            <h3>主要産業</h3>
            <p className={styles.indicatorValue}>製造業</p>
            <span className={styles.indicatorLabel}>GDP構成比 25.2%</span>
          </div>
        </div>
        
        <div className={styles.linkWrapper}>
          <Link href="/economy" className={styles.detailLink}>
            経済・産業の詳細を見る →
          </Link>
        </div>
      </div>
    </section>
  )
}