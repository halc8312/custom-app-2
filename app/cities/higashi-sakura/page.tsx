import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function HigashiSakuraPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>東桜市</h1>
          <p className={styles.subtitle}>技術と革新の未来都市</p>

          <section className={styles.section}>
            <h2>市の概要</h2>
            <p className={styles.description}>
              東桜市は桜県東北部に位置する工業都市です。
              県内有数の工業地帯を擁し、先端技術産業の集積地として「桜県のシリコンバレー」と呼ばれています。
              東京都に隣接し、首都圏へのアクセスの良さから、ベッドタウンとしても発展しています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p className={styles.infoValue}>41.2万人</p>
                <span className={styles.infoNote}>2024年推計</span>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p className={styles.infoValue}>198.5 km²</p>
                <span className={styles.infoNote}>人口密度: 2,077人/km²</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市制施行</h3>
                <p className={styles.infoValue}>1958年</p>
                <span className={styles.infoNote}>昭和33年</span>
              </div>
              <div className={styles.infoItem}>
                <h3>東京まで</h3>
                <p className={styles.infoValue}>40分</p>
                <span className={styles.infoNote}>東桜急行特急</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地区紹介</h2>
            <div className={styles.districtGrid}>
              <div className={styles.districtCard}>
                <h3>中央地区</h3>
                <p className={styles.population}>人口: 9.2万人</p>
                <p>市役所所在地。東桜駅周辺の商業地で、市の行政・商業の中心。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>工業地区</h3>
                <p className={styles.population}>人口: 6.5万人</p>
                <p>東桜テクノパークを中心とした先端技術産業の集積地。研究開発施設が多数立地。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>北部地区</h3>
                <p className={styles.population}>人口: 8.8万人</p>
                <p>ベッドタウンとして発展。大型商業施設があり、ファミリー層に人気。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>南部地区</h3>
                <p className={styles.population}>人口: 8.5万人</p>
                <p>新興住宅地と文教地区。桜県工科大学のキャンパスがある。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>東部地区</h3>
                <p className={styles.population}>人口: 8.2万人</p>
                <p>東京都に隣接。通勤者が多く、住宅と商業が混在する地域。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要スポット</h2>
            <div className={styles.spotGrid}>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏭</div>
                <h3>東桜テクノパーク</h3>
                <p>IT・バイオ・ナノテク企業が集積する県内最大の研究開発拠点。156社が進出。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🔬</div>
                <h3>桜県科学技術センター</h3>
                <p>最先端の科学技術を体験できる施設。プラネタリウムや実験教室が人気。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🎓</div>
                <h3>桜県工科大学</h3>
                <p>工学系の名門大学。産学連携の拠点として、多くの革新的技術を生み出す。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏢</div>
                <h3>イノベーションセンター</h3>
                <p>スタートアップ支援施設。インキュベーションオフィスと交流スペースを提供。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🌳</div>
                <h3>東桜中央公園</h3>
                <p>市民の憩いの場。スポーツ施設や野外ステージがあり、イベントも多数開催。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🛍️</div>
                <h3>東桜ショッピングモール</h3>
                <p>北部地区の大型商業施設。映画館や飲食店など200店舗以上が入居。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>交通アクセス</h2>
            <div className={styles.accessGrid}>
              <div className={styles.accessCard}>
                <h3>鉄道</h3>
                <ul>
                  <li>JR埼京線: 東桜駅、新東桜駅</li>
                  <li>JR武蔵野線: 東桜台駅、桜テクノパーク駅</li>
                  <li>東桜急行: 東京まで特急40分</li>
                  <li>都営大江戸線延伸（2026年予定）</li>
                </ul>
              </div>
              <div className={styles.accessCard}>
                <h3>道路</h3>
                <ul>
                  <li>東京外環自動車道: 東桜IC、東桜北IC</li>
                  <li>首都高速道路: 東桜出入口</li>
                  <li>国道254号、463号、298号</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>産業・特徴</h2>
            <div className={styles.industryGrid}>
              <div className={styles.industryCard}>
                <h3>IT産業</h3>
                <p>ソフトウェア開発、AI研究の拠点。大手IT企業の研究所が集積。</p>
              </div>
              <div className={styles.industryCard}>
                <h3>バイオテクノロジー</h3>
                <p>医薬品開発、再生医療の研究施設。産学連携プロジェクトが活発。</p>
              </div>
              <div className={styles.industryCard}>
                <h3>ナノテクノロジー</h3>
                <p>新素材開発の中心地。世界レベルの研究が行われている。</p>
              </div>
              <div className={styles.industryCard}>
                <h3>ロボティクス</h3>
                <p>産業用ロボット、サービスロボットの開発・製造拠点。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>3月</span>
                <span className={styles.eventName}>東桜テクノロジーフェア</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>5月</span>
                <span className={styles.eventName}>サイエンスフェスティバル</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>8月</span>
                <span className={styles.eventName}>東桜夏まつり</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>10月</span>
                <span className={styles.eventName}>イノベーション EXPO</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>11月</span>
                <span className={styles.eventName}>大学祭・研究発表会</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}