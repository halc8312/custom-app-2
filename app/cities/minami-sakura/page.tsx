import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function MinamiSakuraPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>南桜市</h1>
          <p className={styles.subtitle}>桜と温泉の癒しの都市</p>

          <section className={styles.section}>
            <h2>市の概要</h2>
            <p className={styles.description}>
              南桜市は桜県南部の中心都市で、県内第3の都市です。
              南桜山地の麓に位置し、豊かな自然と温泉資源に恵まれた観光都市として発展しています。
              12の温泉地を有し、年間350万人の観光客が訪れる県内屈指の観光地。
              県最高峰の桜峰（1,247m）への登山口としても知られています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p className={styles.infoValue}>28.6万人</p>
                <span className={styles.infoNote}>2024年推計</span>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p className={styles.infoValue}>412.7 km²</p>
                <span className={styles.infoNote}>人口密度: 692人/km²</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市制施行</h3>
                <p className={styles.infoValue}>1954年</p>
                <span className={styles.infoNote}>昭和29年</span>
              </div>
              <div className={styles.infoItem}>
                <h3>標高</h3>
                <p className={styles.infoValue}>120-980m</p>
                <span className={styles.infoNote}>市役所地点: 180m</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地区紹介</h2>
            <div className={styles.districtGrid}>
              <div className={styles.districtCard}>
                <h3>中央地区</h3>
                <p className={styles.population}>人口: 7.8万人</p>
                <p>市役所所在地で商業の中心。南桜駅周辺に市街地が広がり、行政・商業施設が集積。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>温泉地区</h3>
                <p className={styles.population}>人口: 5.2万人</p>
                <p>南桜温泉郷の中心地。温泉旅館やホテルが立ち並び、観光施設が集積する観光の拠点。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>山麓地区</h3>
                <p className={styles.population}>人口: 6.5万人</p>
                <p>住宅地と農地が広がる地域。果樹園や観光農園が多く、自然豊かな環境。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>東部地区</h3>
                <p className={styles.population}>人口: 4.8万人</p>
                <p>工業団地と新興住宅地が混在。南桜IC周辺に物流施設が集積。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>西部地区</h3>
                <p className={styles.population}>人口: 4.3万人</p>
                <p>山間集落と森林地帯。キャンプ場や自然公園があり、アウトドア活動の拠点。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要スポット</h2>
            <div className={styles.spotGrid}>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>♨️</div>
                <h3>南桜温泉郷</h3>
                <p>12の温泉地で構成される県内最大の温泉郷。1200年の歴史を持ち、多様な泉質が楽しめる。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏔️</div>
                <h3>桜峰</h3>
                <p>標高1,247mの県最高峰。3つの登山ルートがあり、山頂からの絶景は必見。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🌸</div>
                <h3>花見山公園</h3>
                <p>山桜5,000本が咲き誇る桜の名所。4月中旬から5月上旬が見頃で、展望台からの眺めは圧巻。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏞️</div>
                <h3>花山渓谷</h3>
                <p>紅葉の名所として有名。渓流釣りやキャンプが楽しめ、つり橋「夢のかけ橋」は人気スポット。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🌄</div>
                <h3>桜山高原</h3>
                <p>標高800mの高原地帯。夏は避暑地として人気。高山植物の群生地や星空観察スポットがある。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🚡</div>
                <h3>桜峰ロープウェイ</h3>
                <p>標高差600mを結ぶロープウェイ。四季折々の山の風景を楽しみながら空中散歩。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>温泉地詳細</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>南桜温泉</h3>
                <p>市街地にある温泉。アクセスが良く、日帰り入浴施設も充実。美肌の湯として人気。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>花山温泉</h3>
                <p>渓谷沿いの秘湯。自然に囲まれた露天風呂が自慢。紅葉シーズンは特に人気。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜峰温泉</h3>
                <p>標高600mにある温泉。登山客に人気で、疲れた体を癒す絶好の休憩スポット。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>奥南桜温泉</h3>
                <p>最奥地にある静かな温泉。秘湯ファンに愛される、静寂に包まれた癒しの空間。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>交通アクセス</h2>
            <div className={styles.accessGrid}>
              <div className={styles.accessCard}>
                <h3>鉄道</h3>
                <ul>
                  <li>JR中央本線: 南桜駅、温泉口駅</li>
                  <li>JR桜山線: 観光路線（桜峰口駅まで）</li>
                  <li>南桜電鉄 温泉線: 7駅（奥南桜温泉駅まで）</li>
                  <li>桜峰ロープウェイ（標高差600m）</li>
                </ul>
              </div>
              <div className={styles.accessCard}>
                <h3>道路</h3>
                <ul>
                  <li>中央自動車道: 南桜IC</li>
                  <li>桜県南北道路: 南桜温泉IC</li>
                  <li>国道20号、139号、469号（桜山街道）</li>
                  <li>南桜市営バス: 18路線</li>
                  <li>観光周遊バス「さくら号」</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>2月</span>
                <span className={styles.eventName}>雪見温泉まつり（冬の温泉イベント）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>5月</span>
                <span className={styles.eventName}>南桜温泉まつり（温泉街パレード）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>7月</span>
                <span className={styles.eventName}>桜峰山開き（安全祈願祭）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>8月</span>
                <span className={styles.eventName}>南桜夏祭り（盆踊り・花火）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>10月</span>
                <span className={styles.eventName}>紅葉まつり（ライトアップ）</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>特産品・グルメ</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>温泉饅頭</h3>
                <p>南桜温泉の名物和菓子。各温泉地で独自の味が楽しめる。お土産の定番。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜桃（さくらんぼ）</h3>
                <p>県内生産量第1位。初夏の味覚として人気。観光農園での摘み取り体験も可能。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>山菜料理</h3>
                <p>山の恵みを活かした郷土料理。旅館では季節の山菜を使った会席料理が味わえる。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜峰の水</h3>
                <p>県最高峰の天然水。ミネラル豊富で、お茶やコーヒーに最適。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>木工芸品</h3>
                <p>桜材を使用した工芸品。温かみのある風合いが特徴で、実用品から装飾品まで幅広い。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>地酒「桜峰」</h3>
                <p>清らかな水と気候を活かした地酒。すっきりとした味わいが特徴。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>観光情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>年間観光客数</h3>
                <p className={styles.infoValue}>350万人</p>
                <span className={styles.infoNote}>県内第2位</span>
              </div>
              <div className={styles.infoItem}>
                <h3>宿泊施設</h3>
                <p className={styles.infoValue}>80施設</p>
                <span className={styles.infoNote}>収容人数15,000人</span>
              </div>
              <div className={styles.infoItem}>
                <h3>日帰り温泉</h3>
                <p className={styles.infoValue}>25施設</p>
                <span className={styles.infoNote}>多様な泉質</span>
              </div>
              <div className={styles.infoItem}>
                <h3>観光消費額</h3>
                <p className={styles.infoValue}>450億円</p>
                <span className={styles.infoNote}>年間</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}