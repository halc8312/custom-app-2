import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function CulturePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>文化・スポーツ</h1>

          <section className={styles.section}>
            <h2>桜県の文化</h2>
            <div className={styles.cultureIntro}>
              <p>
                桜県は、古来より続く伝統文化と現代の文化が融合した、豊かな文化的土壌を持つ地域です。
                四季折々の祭りや行事、伝統工芸、そして現代アートまで、多彩な文化活動が展開されています。
              </p>
            </div>

            <div className={styles.cultureGrid}>
              <div className={styles.cultureCard}>
                <h3>伝統行事</h3>
                <div className={styles.cultureContent}>
                  <p className={styles.highlight}>年間123の伝統行事</p>
                  <ul>
                    <li>桜八幡宮初詣（1月）</li>
                    <li>桜花祭（4月）- 県内最大の花見イベント</li>
                    <li>夏越の大祓（6月）</li>
                    <li>桜県大花火大会（8月）</li>
                    <li>秋の収穫祭（10月）</li>
                  </ul>
                </div>
              </div>

              <div className={styles.cultureCard}>
                <h3>伝統工芸</h3>
                <div className={styles.cultureContent}>
                  <ul>
                    <li>桜染め - 桜の花びらを使った天然染色</li>
                    <li>桜細工 - 桜材を使った木工芸品</li>
                    <li>花見団子 - 300年の歴史を持つ和菓子</li>
                    <li>桜和紙 - 伝統的な手漉き和紙</li>
                  </ul>
                </div>
              </div>

              <div className={styles.cultureCard}>
                <h3>文化施設</h3>
                <div className={styles.cultureContent}>
                  <ul>
                    <li>桜県立美術館</li>
                    <li>桜県立博物館</li>
                    <li>桜花文化会館（2,000席）</li>
                    <li>各市民文化センター</li>
                    <li>伝統工芸館</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>年間イベントカレンダー</h2>
            <div className={styles.eventStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>456</span>
                <span className={styles.statLabel}>年間イベント数</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>1,234万</span>
                <span className={styles.statLabel}>年間来場者数</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>45</span>
                <span className={styles.statLabel}>主要イベント</span>
              </div>
            </div>

            <div className={styles.seasonGrid}>
              <div className={styles.seasonCard}>
                <h3>春（3-5月）</h3>
                <p className={styles.eventCount}>156イベント</p>
                <p className={styles.highlight}>桜の季節</p>
                <ul>
                  <li>桜花祭（4月上旬）</li>
                  <li>春の音楽祭</li>
                  <li>新緑まつり</li>
                </ul>
              </div>
              <div className={styles.seasonCard}>
                <h3>夏（6-8月）</h3>
                <p className={styles.eventCount}>134イベント</p>
                <p className={styles.highlight}>祭りと花火</p>
                <ul>
                  <li>夏祭り・盆踊り</li>
                  <li>大花火大会</li>
                  <li>海開きイベント</li>
                </ul>
              </div>
              <div className={styles.seasonCard}>
                <h3>秋（9-11月）</h3>
                <p className={styles.eventCount}>98イベント</p>
                <p className={styles.highlight}>文化と収穫</p>
                <ul>
                  <li>秋の収穫祭</li>
                  <li>文化祭</li>
                  <li>紅葉まつり</li>
                </ul>
              </div>
              <div className={styles.seasonCard}>
                <h3>冬（12-2月）</h3>
                <p className={styles.eventCount}>68イベント</p>
                <p className={styles.highlight}>新春と梅</p>
                <ul>
                  <li>イルミネーション</li>
                  <li>初詣・新春行事</li>
                  <li>梅まつり</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>プロスポーツチーム</h2>
            <div className={styles.teamsGrid}>
              <div className={styles.teamCard}>
                <h3>桜花FC</h3>
                <div className={styles.teamInfo}>
                  <p className={styles.teamLeague}>J1リーグ</p>
                  <p className={styles.teamVenue}>桜花スタジアム（42,000人収容）</p>
                  <div className={styles.achievements}>
                    <h4>主な実績</h4>
                    <ul>
                      <li>J1リーグ優勝 2回</li>
                      <li>天皇杯優勝 3回</li>
                      <li>ACL出場 4回</li>
                    </ul>
                  </div>
                  <p className={styles.teamColors}>
                    チームカラー: <span className={styles.colorPink}>桜ピンク</span>・白
                  </p>
                </div>
              </div>

              <div className={styles.teamCard}>
                <h3>桜ブロッサムズ</h3>
                <div className={styles.teamInfo}>
                  <p className={styles.teamLeague}>セントラル・リーグ</p>
                  <p className={styles.teamVenue}>桜川ドーム（38,000人収容）</p>
                  <div className={styles.achievements}>
                    <h4>主な実績</h4>
                    <ul>
                      <li>日本シリーズ優勝 1回（2020年）</li>
                      <li>リーグ優勝 3回</li>
                      <li>クライマックスシリーズ進出 8回</li>
                    </ul>
                  </div>
                  <p className={styles.teamColors}>
                    チームカラー: <span className={styles.colorPink}>桜ピンク</span>・緑・白
                  </p>
                </div>
              </div>

              <div className={styles.teamCard}>
                <h3>桜県サンダース</h3>
                <div className={styles.teamInfo}>
                  <p className={styles.teamLeague}>Bリーグ（B1）</p>
                  <p className={styles.teamVenue}>桜花アリーナ（8,000人収容）</p>
                  <div className={styles.achievements}>
                    <h4>主な実績</h4>
                    <ul>
                      <li>B1リーグ優勝 1回</li>
                      <li>天皇杯準優勝 2回</li>
                      <li>B1プレーオフ進出 5回</li>
                    </ul>
                  </div>
                  <p className={styles.teamColors}>
                    チームカラー: 紫・黄色・白
                  </p>
                </div>
              </div>

              <div className={styles.teamCard}>
                <h3>桜花ヴィーナス</h3>
                <div className={styles.teamInfo}>
                  <p className={styles.teamLeague}>Vリーグ女子（V1）</p>
                  <p className={styles.teamVenue}>桜花体育館（5,000人収容）</p>
                  <div className={styles.achievements}>
                    <h4>主な実績</h4>
                    <ul>
                      <li>V1リーグ優勝 4回</li>
                      <li>天皇杯優勝 2回</li>
                      <li>アジアクラブ選手権 準優勝</li>
                    </ul>
                  </div>
                  <p className={styles.teamColors}>
                    チームカラー: <span className={styles.colorPink}>桜ピンク</span>・銀
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>市民スポーツ活動</h2>
            <div className={styles.citizenSports}>
              <div className={styles.sportsCard}>
                <h3>スポーツ施設</h3>
                <ul>
                  <li>県営体育館: 6施設</li>
                  <li>市民体育館: 24施設</li>
                  <li>公営プール: 45施設</li>
                  <li>野球場: 32施設</li>
                  <li>サッカー場: 28施設</li>
                  <li>テニスコート: 156面</li>
                </ul>
              </div>
              <div className={styles.sportsCard}>
                <h3>主要大会</h3>
                <ul>
                  <li>桜県マラソン（2月）- 参加者3万人</li>
                  <li>県民体育大会（10月）</li>
                  <li>高校総体（年間）</li>
                  <li>市民スポーツ祭（各市）</li>
                  <li>桜県トライアスロン（7月）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>文化・スポーツ振興</h2>
            <div className={styles.promotionGrid}>
              <div className={styles.promotionCard}>
                <h3>支援制度</h3>
                <p>文化活動・スポーツ活動への助成金制度、施設利用料減免など</p>
              </div>
              <div className={styles.promotionCard}>
                <h3>青少年育成</h3>
                <p>ジュニアスポーツクラブ、文化教室、学校部活動支援</p>
              </div>
              <div className={styles.promotionCard}>
                <h3>国際交流</h3>
                <p>姉妹都市との文化・スポーツ交流、国際大会誘致</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}