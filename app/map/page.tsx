import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SakuraMap from '@/components/SakuraMap'
import Link from 'next/link'
import styles from './page.module.css'

export default function MapPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">ホーム</Link>
            <span> &gt; </span>
            <span>桜県マップ</span>
          </div>

          <h1 className={styles.pageTitle}>桜県マップ</h1>
          
          <div className={styles.mapSection}>
            <div className={styles.instructions}>
              <h2>マップの使い方</h2>
              <ul>
                <li>🖱️ ドラッグで地図を移動</li>
                <li>🔍 マウスホイールで拡大・縮小</li>
                <li>📍 マーカーをクリックで詳細情報表示</li>
                <li>🔄 リセットボタンで初期表示に戻る</li>
              </ul>
            </div>

            <SakuraMap height="700px" />

            <div className={styles.mapInfo}>
              <h2>桜県について</h2>
              <div className={styles.infoGrid}>
                <div className={styles.infoCard}>
                  <h3>地理</h3>
                  <p>
                    桜県は本州中部に位置し、豊かな自然と都市機能が調和した地域です。
                    県の中央を桜川が流れ、東部には桜湖があります。
                  </p>
                </div>
                <div className={styles.infoCard}>
                  <h3>主要都市</h3>
                  <ul>
                    <li><strong>桜花市</strong> - 県庁所在地（人口68.5万人）</li>
                    <li><strong>桜川市</strong> - 港湾都市（人口52.3万人）</li>
                    <li><strong>東桜市</strong> - IT産業の中心（人口41.2万人）</li>
                    <li><strong>西桜市</strong> - 伝統工芸の街（人口23.8万人）</li>
                    <li><strong>南桜市</strong> - 温泉観光都市（人口15.6万人）</li>
                    <li><strong>北桜市</strong> - 農業都市（人口18.9万人）</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>観光名所</h3>
                  <ul>
                    <li>🏯 <Link href="/tourism/spots/sakura-castle">桜城</Link> - 国宝指定の歴史的建造物</li>
                    <li>🌸 <Link href="/tourism/spots/thousand-sakura">千本桜公園</Link> - 日本三大桜名所</li>
                    <li>♨️ <Link href="/tourism/spots/minami-onsen">南桜温泉郷</Link> - 名湯として有名</li>
                    <li>🏞️ <Link href="/tourism/spots/sakura-lake">桜湖</Link> - レジャースポット</li>
                  </ul>
                </div>
                <div className={styles.infoCard}>
                  <h3>交通アクセス</h3>
                  <p>
                    <strong>🚄 新幹線:</strong> 東京から約1時間30分<br />
                    <strong>✈️ 空路:</strong> 桜空港（国内線・国際線）<br />
                    <strong>🚗 高速道路:</strong> 桜自動車道が県内を縦断
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.relatedLinks}>
              <h2>関連情報</h2>
              <div className={styles.linkGrid}>
                <Link href="/tourism" className={styles.linkCard}>
                  <span className={styles.linkIcon}>🗾</span>
                  <div>
                    <h3>観光情報</h3>
                    <p>桜県の観光スポットを詳しく紹介</p>
                  </div>
                </Link>
                <Link href="/government" className={styles.linkCard}>
                  <span className={styles.linkIcon}>🏛️</span>
                  <div>
                    <h3>県政情報</h3>
                    <p>桜県の行政・統計情報</p>
                  </div>
                </Link>
                <Link href="/culture" className={styles.linkCard}>
                  <span className={styles.linkIcon}>🎭</span>
                  <div>
                    <h3>文化・スポーツ</h3>
                    <p>イベントや文化施設の情報</p>
                  </div>
                </Link>
                <Link href="/business" className={styles.linkCard}>
                  <span className={styles.linkIcon}>🏢</span>
                  <div>
                    <h3>産業・雇用</h3>
                    <p>ビジネス・就職情報</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}