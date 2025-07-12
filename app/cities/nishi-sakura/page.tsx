import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function NishiSakuraPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>西桜市</h1>
          <p className={styles.subtitle}>伝統と創造が織りなす文化都市</p>

          <section className={styles.section}>
            <h2>市の概要</h2>
            <p className={styles.description}>
              西桜市は桜県西部に位置する歴史と文化の都市です。
              古い街並みと伝統産業が残る一方、近年は文化芸術の発信地として注目を集めています。
              400年の歴史を誇る西桜焼や桜染めなどの伝統工芸が今も息づき、
              芸術家や工芸職人が集まる創造的な街として発展しています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p className={styles.infoValue}>19.9万人</p>
                <span className={styles.infoNote}>2024年推計</span>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p className={styles.infoValue}>156.8 km²</p>
                <span className={styles.infoNote}>人口密度: 1,267人/km²</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市制施行</h3>
                <p className={styles.infoValue}>1940年</p>
                <span className={styles.infoNote}>昭和15年</span>
              </div>
              <div className={styles.infoItem}>
                <h3>標高</h3>
                <p className={styles.infoValue}>80-320m</p>
                <span className={styles.infoNote}>市役所地点: 120m</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地区紹介</h2>
            <div className={styles.districtGrid}>
              <div className={styles.districtCard}>
                <h3>旧市街地区</h3>
                <p className={styles.population}>人口: 4.8万人</p>
                <p>歴史的街並み保存地区。江戸時代から続く商家や伝統工芸品店舗が集積。石畳の路地が残る風情ある地域。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>文化地区</h3>
                <p className={styles.population}>人口: 5.5万人</p>
                <p>美術館・博物館が集まる文化の中心地。西桜芸術大学のキャンパスもあり、若い芸術家が多く居住。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>新市街地区</h3>
                <p className={styles.population}>人口: 5.2万人</p>
                <p>西桜駅周辺の商業・住宅地域。近代的な街並みと便利な生活環境が整備されている。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>丘陵地区</h3>
                <p className={styles.population}>人口: 4.4万人</p>
                <p>自然豊かな住宅地。アトリエ村があり、30人の芸術家が創作活動を行う。農業地帯も広がる。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要スポット</h2>
            <div className={styles.spotGrid}>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏛️</div>
                <h3>西桜県立美術館</h3>
                <p>国内有数のコレクションを誇る美術館。年間50万人が訪れる県内屈指の文化施設。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🎨</div>
                <h3>伝統工芸館</h3>
                <p>西桜焼や桜染めなどの伝統工芸を紹介。体験工房では職人指導のもと制作体験が可能。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏯</div>
                <h3>西桜城跡公園</h3>
                <p>県指定史跡。桜の名所として知られ、1,500本の桜が春を彩る。天守台跡からの眺望は絶景。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏘️</div>
                <h3>旧西桜宿</h3>
                <p>重要伝統的建造物群保存地区。江戸時代の宿場町の面影を今に伝える歴史的街並み。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🖼️</div>
                <h3>アトリエ村</h3>
                <p>芸術家30人が居住・創作する集落。オープンアトリエやギャラリーカフェで作品を鑑賞できる。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🌿</div>
                <h3>花見丘陵自然公園</h3>
                <p>ハイキングコースや野鳥観察、山野草園があり、四季折々の自然を楽しめる。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>伝統工芸</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>西桜焼</h3>
                <p>400年の歴史を持つ陶器。15軒の窯元が伝統を守りながら新しい作品を生み出している。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜染め</h3>
                <p>県無形文化財。桜の樹皮を使った独特の染色技法で、淡いピンク色が特徴。職人20名が技術を継承。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>西桜漆器</h3>
                <p>伝統的工芸品指定。美しい塗りと繊細な蒔絵が特徴で、日用品から美術品まで幅広く制作。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>西桜和紙</h3>
                <p>手漉き和紙の工房が5軒。独特の風合いと強さを持ち、美術作品や工芸品に使用される。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>交通アクセス</h2>
            <div className={styles.accessGrid}>
              <div className={styles.accessCard}>
                <h3>鉄道</h3>
                <ul>
                  <li>JR中央本線: 西桜駅、西桜温泉駅</li>
                  <li>西桜電気鉄道 文化線: 5駅（美術館前駅など）</li>
                  <li>西桜電気鉄道 丘陵線: 4駅（アトリエ村駅など）</li>
                </ul>
              </div>
              <div className={styles.accessCard}>
                <h3>道路</h3>
                <ul>
                  <li>中央自動車道: 西桜IC</li>
                  <li>国道20号、411号、470号（西桜街道）</li>
                  <li>西桜市民バス: 12路線</li>
                  <li>観光循環バス「文化めぐり号」</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>3月</span>
                <span className={styles.eventName}>西桜ひな祭り（古い雛人形展示）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>4月</span>
                <span className={styles.eventName}>西桜城祭り（桜まつり・武者行列）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>6月</span>
                <span className={styles.eventName}>工芸まつり（作品展示即売会）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>9月</span>
                <span className={styles.eventName}>西桜アートフェスティバル</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>10月</span>
                <span className={styles.eventName}>秋の収穫祭（農産物・地酒）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>12月</span>
                <span className={styles.eventName}>西桜灯籠祭り（幻想的ライトアップ）</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>特産品・グルメ</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>地酒「西桜」「花見桜」</h3>
                <p>3軒の酒蔵が醸造。全国新酒鑑評会受賞の実績を持つ銘酒。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>西桜味噌・醤油</h3>
                <p>伝統製法で作られる調味料。深い味わいと芳醇な香りが特徴。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜花羊羹</h3>
                <p>桜の花びらを練り込んだ上品な和菓子。春の季節限定品として人気。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>工芸品各種</h3>
                <p>伝統工芸品から現代アート作品まで、多彩な作品が購入できる。</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}