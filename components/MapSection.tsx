import Link from 'next/link'
import SakuraMap from './SakuraMap'
import styles from './MapSection.module.css'

export default function MapSection() {
  return (
    <section className={styles.mapSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>桜県を探索する</h2>
          <p className={styles.subtitle}>
            インタラクティブマップで桜県の各地域を詳しく見てみましょう
          </p>
        </div>

        <div className={styles.mapWrapper}>
          <SakuraMap height="500px" showControls={true} />
        </div>

        <div className={styles.mapActions}>
          <Link href="/map" className={styles.fullMapLink}>
            <span>🗺️</span>
            フルスクリーンマップを見る
          </Link>
          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🏛️</span>
              <div>
                <strong>6都市</strong>
                <span>主要都市</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🌸</span>
              <div>
                <strong>10箇所</strong>
                <span>観光スポット</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>👥</span>
              <div>
                <strong>220万人</strong>
                <span>総人口</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}