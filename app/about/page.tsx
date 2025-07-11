import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>桜県について</h1>

          <section className={styles.section}>
            <h2>県の概要</h2>
            <p>
              桜県は関東地方の南部に位置し、東京都と神奈川県の間に存在する県です。
              明治4年（1871年）に設立され、「花咲く未来へ、桜県」をキャッチフレーズに、
              自然と都市が調和した魅力的な地域づくりを進めています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>県庁所在地</h3>
                <p>桜花市（おうかし）</p>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p>2,456.78 km²</p>
              </div>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p>約285万人（2024年推計）</p>
              </div>
              <div className={styles.infoItem}>
                <h3>人口密度</h3>
                <p>1,160人/km²</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>県のシンボル</h2>
            <div className={styles.symbolGrid}>
              <div className={styles.symbolItem}>
                <div className={styles.symbolIcon}>🌸</div>
                <h3>県の花</h3>
                <p>八重桜</p>
              </div>
              <div className={styles.symbolItem}>
                <div className={styles.symbolIcon}>🌳</div>
                <h3>県の木</h3>
                <p>山桜</p>
              </div>
              <div className={styles.symbolItem}>
                <div className={styles.symbolIcon}>🐦</div>
                <h3>県の鳥</h3>
                <p>メジロ</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地理的位置</h2>
            <p>
              桜県は関東地方の要衝に位置し、北は東京都、東は千葉県（東京湾）、
              南は神奈川県、西は山梨県に接しています。
              この恵まれた立地により、首都圏へのアクセスが良好で、
              豊かな自然環境と都市機能が共存する理想的な生活環境を提供しています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>主要都市</h2>
            <div className={styles.cityGrid}>
              <div className={styles.cityCard}>
                <h3>桜花市</h3>
                <p>県庁所在地・中心都市</p>
              </div>
              <div className={styles.cityCard}>
                <h3>東桜市</h3>
                <p>商業・ビジネスの中心</p>
              </div>
              <div className={styles.cityCard}>
                <h3>西桜市</h3>
                <p>歴史と文化の街</p>
              </div>
              <div className={styles.cityCard}>
                <h3>南桜市</h3>
                <p>港湾都市・物流拠点</p>
              </div>
              <div className={styles.cityCard}>
                <h3>北桜市</h3>
                <p>自然豊かな観光都市</p>
              </div>
              <div className={styles.cityCard}>
                <h3>桜川市</h3>
                <p>河川沿いの風光明媚な街</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
