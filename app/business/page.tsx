import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function BusinessPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>産業・雇用</h1>

          <section className={styles.section}>
            <h2>桜県の経済概況</h2>
            <div className={styles.economyOverview}>
              <div className={styles.gdpCard}>
                <h3>県内総生産（GDP）</h3>
                <div className={styles.gdpStats}>
                  <div className={styles.gdpItem}>
                    <span className={styles.gdpValue}>22.5</span>
                    <span className={styles.gdpUnit}>兆円</span>
                  </div>
                  <div className={styles.gdpDetails}>
                    <p>全国第8位</p>
                    <p>一人あたり: 380万円</p>
                    <p>実質成長率: 2.3%</p>
                  </div>
                </div>
              </div>
              <div className={styles.industryBreakdown}>
                <h3>産業別構成</h3>
                <div className={styles.industryChart}>
                  <div className={styles.industryItem}>
                    <span className={styles.industryName}>第三次産業</span>
                    <span className={styles.industryPercent}>65.4%</span>
                  </div>
                  <div className={styles.industryItem}>
                    <span className={styles.industryName}>第二次産業</span>
                    <span className={styles.industryPercent}>32.5%</span>
                  </div>
                  <div className={styles.industryItem}>
                    <span className={styles.industryName}>第一次産業</span>
                    <span className={styles.industryPercent}>2.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要産業</h2>
            <div className={styles.industriesGrid}>
              <div className={styles.industryCard}>
                <h3>製造業</h3>
                <p className={styles.industryValue}>5.67兆円（25.2%）</p>
                <h4>主要製品</h4>
                <ul>
                  <li>電子部品・デバイス</li>
                  <li>輸送用機械</li>
                  <li>化学製品</li>
                  <li>食料品</li>
                  <li>金属製品</li>
                </ul>
              </div>
              <div className={styles.industryCard}>
                <h3>情報通信業</h3>
                <p className={styles.industryValue}>1.8兆円（8.0%）</p>
                <h4>重点分野</h4>
                <ul>
                  <li>AI・機械学習</li>
                  <li>IoT・センサー技術</li>
                  <li>サイバーセキュリティ</li>
                  <li>フィンテック</li>
                  <li>デジタルコンテンツ</li>
                </ul>
              </div>
              <div className={styles.industryCard}>
                <h3>観光業</h3>
                <p className={styles.industryValue}>8,940億円（4.0%）</p>
                <h4>特徴</h4>
                <ul>
                  <li>年間観光客数: 4,567万人</li>
                  <li>外国人観光客: 234万人</li>
                  <li>観光消費額: 8,940億円</li>
                  <li>宿泊施設: 1,234軒</li>
                </ul>
              </div>
              <div className={styles.industryCard}>
                <h3>農林水産業</h3>
                <p className={styles.industryValue}>4,725億円（2.1%）</p>
                <h4>主要産品</h4>
                <ul>
                  <li>桜県産コシヒカリ</li>
                  <li>桜牛（ブランド和牛）</li>
                  <li>いちご・梨・桃</li>
                  <li>桜エビ・真鯛</li>
                  <li>桜材（高級木材）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>雇用情報</h2>
            <div className={styles.employmentGrid}>
              <div className={styles.employmentCard}>
                <h3>雇用状況</h3>
                <div className={styles.employmentStats}>
                  <div className={styles.statRow}>
                    <span>労働力人口</span>
                    <span className={styles.statValue}>143.2万人</span>
                  </div>
                  <div className={styles.statRow}>
                    <span>就業者数</span>
                    <span className={styles.statValue}>139.8万人</span>
                  </div>
                  <div className={styles.statRow}>
                    <span>完全失業率</span>
                    <span className={styles.statValue}>2.4%</span>
                  </div>
                  <div className={styles.statRow}>
                    <span>有効求人倍率</span>
                    <span className={styles.statValue}>1.45倍</span>
                  </div>
                </div>
              </div>
              <div className={styles.employmentCard}>
                <h3>平均賃金</h3>
                <div className={styles.wageInfo}>
                  <p className={styles.averageWage}>
                    <span className={styles.wageAmount}>342</span>
                    <span className={styles.wageUnit}>万円/年</span>
                  </p>
                  <p className={styles.wageNote}>（全国平均: 320万円）</p>
                  <h4>業種別（月額）</h4>
                  <ul className={styles.wageList}>
                    <li>情報通信業: 42.3万円</li>
                    <li>金融・保険業: 38.7万円</li>
                    <li>製造業: 31.2万円</li>
                    <li>建設業: 29.8万円</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>ビジネス支援</h2>
            <div className={styles.supportGrid}>
              <div className={styles.supportCard}>
                <h3>創業支援</h3>
                <ul>
                  <li>創業支援補助金（最大500万円）</li>
                  <li>インキュベーション施設提供</li>
                  <li>メンター制度</li>
                  <li>ビジネスプランコンテスト</li>
                </ul>
                <a href="#" className={styles.supportLink}>詳細を見る</a>
              </div>
              <div className={styles.supportCard}>
                <h3>中小企業支援</h3>
                <ul>
                  <li>設備投資補助金</li>
                  <li>低利融資制度</li>
                  <li>経営相談窓口</li>
                  <li>販路開拓支援</li>
                </ul>
                <a href="#" className={styles.supportLink}>詳細を見る</a>
              </div>
              <div className={styles.supportCard}>
                <h3>企業誘致</h3>
                <ul>
                  <li>工業団地優遇措置</li>
                  <li>税制優遇（最大5年間）</li>
                  <li>雇用促進助成金</li>
                  <li>オフィス賃料補助</li>
                </ul>
                <a href="#" className={styles.supportLink}>詳細を見る</a>
              </div>
              <div className={styles.supportCard}>
                <h3>人材育成</h3>
                <ul>
                  <li>職業訓練プログラム</li>
                  <li>資格取得支援</li>
                  <li>産学連携事業</li>
                  <li>インターンシップ支援</li>
                </ul>
                <a href="#" className={styles.supportLink}>詳細を見る</a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>産業振興地区</h2>
            <div className={styles.zonesGrid}>
              <div className={styles.zoneCard}>
                <h3>桜花テクノパーク</h3>
                <p className={styles.zoneLocation}>東桜市</p>
                <p>IT・バイオ・ナノテク企業集積地</p>
                <p className={styles.zoneCompanies}>進出企業: 156社</p>
              </div>
              <div className={styles.zoneCard}>
                <h3>桜川工業団地</h3>
                <p className={styles.zoneLocation}>桜川市</p>
                <p>製造業・物流センター</p>
                <p className={styles.zoneCompanies}>進出企業: 89社</p>
              </div>
              <div className={styles.zoneCard}>
                <h3>桜県フードバレー</h3>
                <p className={styles.zoneLocation}>北桜市</p>
                <p>食品加工・農業6次産業化</p>
                <p className={styles.zoneCompanies}>進出企業: 45社</p>
              </div>
              <div className={styles.zoneCard}>
                <h3>桜花金融センター</h3>
                <p className={styles.zoneLocation}>桜花市</p>
                <p>金融・フィンテック企業</p>
                <p className={styles.zoneCompanies}>進出企業: 78社</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>お問い合わせ</h2>
            <div className={styles.contactGrid}>
              <div className={styles.contactCard}>
                <h3>桜県産業労働部</h3>
                <p>企業支援・産業振興</p>
                <p className={styles.contactPhone}>📞 03-1234-5678</p>
              </div>
              <div className={styles.contactCard}>
                <h3>桜県商工会議所</h3>
                <p>経営相談・ビジネスマッチング</p>
                <p className={styles.contactPhone}>📞 03-2345-6789</p>
              </div>
              <div className={styles.contactCard}>
                <h3>ハローワーク桜花</h3>
                <p>求人・求職相談</p>
                <p className={styles.contactPhone}>📞 03-3456-7890</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}