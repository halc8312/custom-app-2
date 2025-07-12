import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function SakuragawaPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>桜川市</h1>
          <p className={styles.subtitle}>水と桜の調和都市</p>

          <section className={styles.section}>
            <h2>市の概要</h2>
            <p className={styles.description}>
              桜川市は桜県第2の都市であり、県東部の中心都市です。
              桜川の河口に位置し、古くから水運で栄えた歴史ある港湾都市として、
              県内最大の貿易港を有しています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p className={styles.infoValue}>52.3万人</p>
                <span className={styles.infoNote}>2024年推計</span>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p className={styles.infoValue}>285.3 km²</p>
                <span className={styles.infoNote}>人口密度: 1,834人/km²</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市制施行</h3>
                <p className={styles.infoValue}>1921年</p>
                <span className={styles.infoNote}>大正10年</span>
              </div>
              <div className={styles.infoItem}>
                <h3>海岸線</h3>
                <p className={styles.infoValue}>15 km</p>
                <span className={styles.infoNote}>東京湾に面する</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地区紹介</h2>
            <div className={styles.districtGrid}>
              <div className={styles.districtCard}>
                <h3>港地区</h3>
                <p className={styles.population}>人口: 9.5万人</p>
                <p>桜川港周辺の商工業地域。物流センターや魚市場があり、県内最大の貿易港として機能。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>中央地区</h3>
                <p className={styles.population}>人口: 10.2万人</p>
                <p>市役所所在地で商業の中心。桜川駅周辺には繁華街が広がる。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>海岸地区</h3>
                <p className={styles.population}>人口: 7.8万人</p>
                <p>リゾート・観光エリア。美しい砂浜海岸、マリーナ、海水浴場が人気。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>川北地区</h3>
                <p className={styles.population}>人口: 8.6万人</p>
                <p>住宅地域として発展。桜川市立大学のキャンパスがある文教地区。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>川南地区</h3>
                <p className={styles.population}>人口: 9.2万人</p>
                <p>新興住宅地と工業団地が混在。大型ショッピングモールも立地。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>丘陵地区</h3>
                <p className={styles.population}>人口: 7.0万人</p>
                <p>自然豊かな住宅地。農業地帯や観光農園があり、のどかな環境。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要スポット</h2>
            <div className={styles.spotGrid}>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🚢</div>
                <h3>桜川港</h3>
                <p>県内最大の貿易港。コンテナターミナル、フェリーターミナル、魚市場を有する総合港湾。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏖️</div>
                <h3>桜川海岸</h3>
                <p>15kmに及ぶ美しい砂浜海岸。夏は海水浴客で賑わい、マリンスポーツも盛ん。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🎣</div>
                <h3>桜川魚市場</h3>
                <p>県内最大の水揚げ量を誇る魚市場。新鮮な海産物と活気ある競りが見学できる。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🛥️</div>
                <h3>桜川マリーナ</h3>
                <p>ヨットやクルーザーが係留される県内最大級のマリーナ。海洋レジャーの拠点。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏛️</div>
                <h3>桜川市立博物館</h3>
                <p>港町の歴史と海洋文化を展示。江戸時代の廻船問屋の建物を復元。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🌊</div>
                <h3>桜川アクアリウム</h3>
                <p>東京湾の海洋生物を中心に展示。イルカショーやペンギンの散歩が人気。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>交通アクセス</h2>
            <div className={styles.accessGrid}>
              <div className={styles.accessCard}>
                <h3>鉄道</h3>
                <ul>
                  <li>JR桜花線: 桜川駅、東桜川駅、桜川港駅</li>
                  <li>JR湾岸線: 海岸桜川駅、マリーナ前駅</li>
                  <li>桜川電鉄: 市内を網羅する2路線</li>
                </ul>
              </div>
              <div className={styles.accessCard}>
                <h3>道路</h3>
                <ul>
                  <li>東関東自動車道: 桜川IC、桜川港IC</li>
                  <li>国道14号（湾岸道路）</li>
                  <li>桜川市営バス: 32路線</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>特産品・グルメ</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>桜エビ</h3>
                <p>桜川港で水揚げされる名産品。かき揚げや塩辛が人気。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜川寿司</h3>
                <p>新鮮な地魚を使った江戸前寿司。港町ならではの味。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>船宿料理</h3>
                <p>江戸時代から続く伝統の宿場料理。海の幸を活かした会席。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜川焼き</h3>
                <p>港町の陶芸品。海をモチーフにした青い釉薬が特徴。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>5月</span>
                <span className={styles.eventName}>桜川港まつり</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>7月</span>
                <span className={styles.eventName}>桜川海上花火大会</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>8月</span>
                <span className={styles.eventName}>ビーチフェスティバル</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>10月</span>
                <span className={styles.eventName}>桜川マリンスポーツ大会</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>11月</span>
                <span className={styles.eventName}>桜川魚まつり</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}