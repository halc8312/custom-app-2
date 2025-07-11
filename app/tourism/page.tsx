import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function TourismPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>桜県の観光</h1>
            <p className={styles.heroSubtitle}>千本桜の県へようこそ</p>
          </div>
        </div>

        <div className="container">
          <section className={styles.section}>
            <h2>観光の特徴</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🌸</div>
                <h3>桜観光</h3>
                <p>
                  日本一の桜の名所として、春だけでなく四季を通じた桜観光を実現
                </p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>♨️</div>
                <h3>温泉観光</h3>
                <p>南桜温泉郷を中心とした豊富な温泉資源でリラックス</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏯</div>
                <h3>歴史文化観光</h3>
                <p>千年の歴史を持つ寺社や城跡、伝統工芸体験</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🏔️</div>
                <h3>自然観光</h3>
                <p>山岳、河川、湖沼を活かしたアウトドア観光</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>人気の観光スポット</h2>
            <div className={styles.spotGrid}>
              <Link
                href="/tourism/spots/sakura-castle"
                className={styles.spotCard}
              >
                <div className={styles.spotImage}>🏯</div>
                <h3>桜城</h3>
                <p>国指定史跡・桜県のシンボル</p>
              </Link>
              <Link
                href="/tourism/spots/thousand-sakura"
                className={styles.spotCard}
              >
                <div className={styles.spotImage}>🌸</div>
                <h3>千本桜公園</h3>
                <p>日本最大級の桜の名所</p>
              </Link>
              <Link
                href="/tourism/spots/minami-onsen"
                className={styles.spotCard}
              >
                <div className={styles.spotImage}>♨️</div>
                <h3>南桜温泉郷</h3>
                <p>四大源泉を持つ温泉地</p>
              </Link>
              <Link
                href="/tourism/spots/sakura-lake"
                className={styles.spotCard}
              >
                <div className={styles.spotImage}>🏞️</div>
                <h3>桜湖</h3>
                <p>四季折々の自然美を楽しめる</p>
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2>観光情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>年間観光客数</h3>
                <p className={styles.infoNumber}>3,456万人</p>
                <p className={styles.infoDetail}>
                  国内外から多くの観光客が訪れています
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3>観光満足度</h3>
                <p className={styles.infoNumber}>84.5%</p>
                <p className={styles.infoDetail}>
                  「満足」以上の評価をいただいています
                </p>
              </div>
              <div className={styles.infoCard}>
                <h3>平均滞在日数</h3>
                <p className={styles.infoNumber}>2.3泊</p>
                <p className={styles.infoDetail}>
                  ゆっくりと桜県を楽しんでいただけます
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>季節のイベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventSeason}>春</div>
                <div className={styles.eventContent}>
                  <h3>桜県桜まつり</h3>
                  <p>3月下旬〜4月中旬 / 県内各地で開催される桜の祭典</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventSeason}>夏</div>
                <div className={styles.eventContent}>
                  <h3>桜花火大会</h3>
                  <p>8月第1土曜日 / 10,000発の花火が夜空を彩る</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventSeason}>秋</div>
                <div className={styles.eventContent}>
                  <h3>もみじ狩りフェスティバル</h3>
                  <p>10月〜11月 / 紅葉の名所でのイベント</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventSeason}>冬</div>
                <div className={styles.eventContent}>
                  <h3>桜イルミネーション</h3>
                  <p>12月〜2月 / 桜をモチーフにした光の演出</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.ctaSection}>
            <h2>桜県観光をもっと楽しむ</h2>
            <div className={styles.ctaButtons}>
              <Link href="/tourism/map" className={styles.ctaButton}>
                観光マップを見る
              </Link>
              <Link href="/tourism/guide" className={styles.ctaButton}>
                観光ガイドをダウンロード
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
