import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function KitaSakuraPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>北桜市</h1>
          <p className={styles.subtitle}>実り豊かな緑の都市</p>

          <section className={styles.section}>
            <h2>市の概要</h2>
            <p className={styles.description}>
              北桜市は桜県北部に位置する田園都市です。
              豊かな農業地帯と良好な住環境を併せ持ち、「食と農の都市」として県内の食料供給基地の役割を担っています。
              農業産出額は年間280億円で県内第1位。東京都との県境に位置し、
              都心へのアクセスも良好なことから、近年は移住者も増加しています。
            </p>
          </section>

          <section className={styles.section}>
            <h2>基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p className={styles.infoValue}>15.7万人</p>
                <span className={styles.infoNote}>2024年推計</span>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p className={styles.infoValue}>245.2 km²</p>
                <span className={styles.infoNote}>人口密度: 640人/km²</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市制施行</h3>
                <p className={styles.infoValue}>1971年</p>
                <span className={styles.infoNote}>昭和46年</span>
              </div>
              <div className={styles.infoItem}>
                <h3>農地率</h3>
                <p className={styles.infoValue}>65%</p>
                <span className={styles.infoNote}>県内最高</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地区紹介</h2>
            <div className={styles.districtGrid}>
              <div className={styles.districtCard}>
                <h3>中央地区</h3>
                <p className={styles.population}>人口: 4.5万人</p>
                <p>市役所所在地で行政・商業の中心。北桜駅周辺に市街地が形成され、生活利便施設が充実。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>東部地区</h3>
                <p className={styles.population}>人口: 3.8万人</p>
                <p>新興住宅地と工業団地が立地。物流センターも集積し、産業と住宅のバランスが取れた地域。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>西部地区</h3>
                <p className={styles.population}>人口: 4.2万人</p>
                <p>農業の中心地。観光農園エリアがあり、グリーンツーリズムの拠点として人気。</p>
              </div>
              <div className={styles.districtCard}>
                <h3>北部地区</h3>
                <p className={styles.population}>人口: 3.2万人</p>
                <p>里山地域で伝統的農村集落が残る。森林セラピー基地もあり、自然豊かな環境。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要スポット</h2>
            <div className={styles.spotGrid}>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏪</div>
                <h3>さくら市場</h3>
                <p>県内最大級の農産物直売所。3,000㎡の売場に新鮮な農産物が並ぶ。年間来場者150万人。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🍓</div>
                <h3>北桜観光農園エリア</h3>
                <p>いちご狩り、ぶどう狩り、りんご狩りなど季節の果物狩りが楽しめる25の観光農園が集積。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🌾</div>
                <h3>桜県立農業大学</h3>
                <p>最新の農業技術を研究・教育する県立大学。キャンパス内の実習農場は見学可能。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏞️</div>
                <h3>桜ヶ池公園</h3>
                <p>周囲5kmの農業用ため池を中心とした公園。桜並木800本とサイクリングロードが人気。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🏘️</div>
                <h3>里山の郷</h3>
                <p>古民家集落保存地区。農村体験施設ではそば打ちや味噌作りなどの体験ができる。</p>
              </div>
              <div className={styles.spotCard}>
                <div className={styles.spotIcon}>🍷</div>
                <h3>北桜ワイナリー</h3>
                <p>地元産ぶどうを使用したワイン製造。見学ツアーや試飲、レストランも併設。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>農業・特産品</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>北桜こしひかり</h3>
                <p>ブランド米として県内外で高評価。昼夜の寒暖差が生む甘みと粘りが特徴。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>北桜梨</h3>
                <p>幸水、豊水などの品種を栽培。糖度が高く、みずみずしい食感が人気。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>桜ヶ池牛</h3>
                <p>黒毛和牛のブランド牛。きめ細かい霜降りと柔らかな肉質が特徴。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>高原野菜</h3>
                <p>トマト、きゅうり、なすなどの施設園芸が盛ん。新鮮で味が濃いと評判。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>花卉栽培</h3>
                <p>バラ、カーネーションなどの花卉栽培も盛ん。品質の高さで市場から高い評価。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>地酒「豊穣」</h3>
                <p>地元産の米と清らかな水で醸造。まろやかな味わいで食中酒として最適。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>交通アクセス</h2>
            <div className={styles.accessGrid}>
              <div className={styles.accessCard}>
                <h3>鉄道</h3>
                <ul>
                  <li>JR高崎線: 北桜駅、新北桜駅</li>
                  <li>JR八高線: 里山駅、桜ヶ池駅</li>
                  <li>北桜モノレール 農園線（2027年開業予定）</li>
                  <li>東京まで: 電車60分</li>
                </ul>
              </div>
              <div className={styles.accessCard}>
                <h3>道路</h3>
                <ul>
                  <li>関越自動車道: 北桜IC</li>
                  <li>圏央道: 北桜東IC</li>
                  <li>国道17号、125号、462号（北桜街道）</li>
                  <li>北桜市循環バス: 15路線</li>
                  <li>デマンドバス（農村部対応）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>5月</span>
                <span className={styles.eventName}>北桜田植え祭（伝統行事）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>8月</span>
                <span className={styles.eventName}>さくら市場収穫祭（農産物即売）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>9月</span>
                <span className={styles.eventName}>北桜新米まつり（新米試食）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>10月</span>
                <span className={styles.eventName}>実りの秋祭り（収穫感謝祭）</span>
              </div>
              <div className={styles.eventItem}>
                <span className={styles.eventMonth}>12月</span>
                <span className={styles.eventName}>北桜鍋まつり（地元食材の鍋）</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>農業データ</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>農業産出額</h3>
                <p className={styles.infoValue}>280億円</p>
                <span className={styles.infoNote}>県内第1位</span>
              </div>
              <div className={styles.infoItem}>
                <h3>農家数</h3>
                <p className={styles.infoValue}>2,500戸</p>
                <span className={styles.infoNote}>認定農業者350人</span>
              </div>
              <div className={styles.infoItem}>
                <h3>観光農園</h3>
                <p className={styles.infoValue}>25箇所</p>
                <span className={styles.infoNote}>年間80万人来場</span>
              </div>
              <div className={styles.infoItem}>
                <h3>学校給食地元産率</h3>
                <p className={styles.infoValue}>85%</p>
                <span className={styles.infoNote}>県内最高</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>特色ある取り組み</h2>
            <div className={styles.specialtyGrid}>
              <div className={styles.specialtyCard}>
                <h3>スマート農業</h3>
                <p>ICT活用やドローン防除など、最新技術を導入した先進的な農業を推進。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>6次産業化</h3>
                <p>農産物加工施設の整備や農家レストランの支援など、付加価値向上を推進。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>有機農業</h3>
                <p>環境保全型農業を推進。減農薬・減化学肥料で安全安心な農産物を生産。</p>
              </div>
              <div className={styles.specialtyCard}>
                <h3>農業教育</h3>
                <p>小中学校で農業体験を必修化。市民農園500区画、農業塾に年間200人が受講。</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>生活情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>東京まで</h3>
                <p className={styles.infoValue}>60分</p>
                <span className={styles.infoNote}>電車・車とも</span>
              </div>
              <div className={styles.infoItem}>
                <h3>地価</h3>
                <p className={styles.infoValue}>県内最安値圏</p>
                <span className={styles.infoNote}>住みやすい環境</span>
              </div>
              <div className={styles.infoItem}>
                <h3>待機児童</h3>
                <p className={styles.infoValue}>0人</p>
                <span className={styles.infoNote}>2024年実績</span>
              </div>
              <div className={styles.infoItem}>
                <h3>新規就農者支援</h3>
                <p className={styles.infoValue}>充実</p>
                <span className={styles.infoNote}>研修・資金援助</span>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}