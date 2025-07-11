import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroOverlay}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>桜県へようこそ</h1>
          <p className={styles.heroSubtitle}>
            桜の美しさと豊かな自然、歴史と文化が織りなす魅力的な県
          </p>
          <div className={styles.heroButtons}>
            <a href="/tourism" className={styles.primaryButton}>
              観光情報を見る
            </a>
            <a href="/about" className={styles.secondaryButton}>
              桜県について
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
