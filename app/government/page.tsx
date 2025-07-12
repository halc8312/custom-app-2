import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function GovernmentPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>県政情報</h1>

          <section className={styles.section}>
            <h2>桜県知事</h2>
            <div className={styles.governorInfo}>
              <div className={styles.governorProfile}>
                <h3>現職知事</h3>
                <div className={styles.infoGrid}>
                  <div className={styles.infoItem}>
                    <h4>氏名</h4>
                    <p>佐藤 桜子（さとう さくらこ）</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>就任</h4>
                    <p>2023年4月23日（第19代）</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>任期</h4>
                    <p>2027年4月22日まで（1期目）</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>所属</h4>
                    <p>無所属（県民党推薦）</p>
                  </div>
                </div>
              </div>
              <div className={styles.viceGovernors}>
                <h3>副知事</h3>
                <ul className={styles.officialsList}>
                  <li>筆頭副知事: 山田 花男（やまだ はなお）</li>
                  <li>副知事: 鈴木 美咲（すずき みさき）</li>
                  <li>副知事: 田中 春樹（たなか はるき）</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>桜県議会</h2>
            <div className={styles.assemblyInfo}>
              <h3>議会構成</h3>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <h4>定数</h4>
                  <p>87名</p>
                </div>
                <div className={styles.infoItem}>
                  <h4>任期</h4>
                  <p>4年（現任期：2023年4月30日～2027年4月29日）</p>
                </div>
                <div className={styles.infoItem}>
                  <h4>議長</h4>
                  <p>高橋 桜太郎（たかはし さくらたろう）</p>
                </div>
                <div className={styles.infoItem}>
                  <h4>副議長</h4>
                  <p>伊藤 花子（いとう はなこ）</p>
                </div>
              </div>
            </div>

            <div className={styles.partyComposition}>
              <h3>会派構成（2025年1月現在）</h3>
              <div className={styles.tableWrapper}>
                <table className={styles.dataTable}>
                  <thead>
                    <tr>
                      <th>会派名</th>
                      <th>議席数</th>
                      <th>代表者</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>県民党</td>
                      <td>32</td>
                      <td>渡辺 一郎</td>
                    </tr>
                    <tr>
                      <td>桜県自民党</td>
                      <td>28</td>
                      <td>佐々木 健一</td>
                    </tr>
                    <tr>
                      <td>公明党</td>
                      <td>10</td>
                      <td>小林 明美</td>
                    </tr>
                    <tr>
                      <td>立憲民主党</td>
                      <td>8</td>
                      <td>中村 太一</td>
                    </tr>
                    <tr>
                      <td>日本維新の会</td>
                      <td>5</td>
                      <td>藤井 勇</td>
                    </tr>
                    <tr>
                      <td>共産党</td>
                      <td>3</td>
                      <td>松本 和子</td>
                    </tr>
                    <tr>
                      <td>無所属</td>
                      <td>1</td>
                      <td>-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>県庁組織</h2>
            <div className={styles.departmentGrid}>
              <div className={styles.departmentCard}>
                <h3>知事直轄組織</h3>
                <ul>
                  <li>秘書課</li>
                  <li>広報県民課</li>
                  <li>政策企画課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>総務部</h3>
                <ul>
                  <li>総務課</li>
                  <li>財政課</li>
                  <li>税務課</li>
                  <li>管財課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>企画振興部</h3>
                <ul>
                  <li>地域振興課</li>
                  <li>統計調査課</li>
                  <li>情報政策課</li>
                  <li>交通政策課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>健康福祉部</h3>
                <ul>
                  <li>福祉政策課</li>
                  <li>健康増進課</li>
                  <li>高齢者支援課</li>
                  <li>子育て支援課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>環境農林部</h3>
                <ul>
                  <li>環境政策課</li>
                  <li>農業振興課</li>
                  <li>林業振興課</li>
                  <li>自然保護課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>産業労働部</h3>
                <ul>
                  <li>産業政策課</li>
                  <li>商工振興課</li>
                  <li>観光課</li>
                  <li>労働政策課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>県土整備部</h3>
                <ul>
                  <li>道路課</li>
                  <li>河川課</li>
                  <li>都市計画課</li>
                  <li>建築指導課</li>
                </ul>
              </div>
              <div className={styles.departmentCard}>
                <h3>教育委員会</h3>
                <ul>
                  <li>教育総務課</li>
                  <li>学校教育課</li>
                  <li>生涯学習課</li>
                  <li>文化財保護課</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>各種委員会</h2>
            <div className={styles.committeeGrid}>
              <div className={styles.committeeItem}>
                <h3>常任委員会</h3>
                <ul>
                  <li>総務企画委員会（15名）</li>
                  <li>文教厚生委員会（14名）</li>
                  <li>環境農林委員会（14名）</li>
                  <li>産業労働委員会（15名）</li>
                  <li>建設委員会（14名）</li>
                  <li>警察委員会（15名）</li>
                </ul>
              </div>
              <div className={styles.committeeItem}>
                <h3>行政委員会</h3>
                <ul>
                  <li>教育委員会</li>
                  <li>選挙管理委員会</li>
                  <li>人事委員会</li>
                  <li>監査委員</li>
                  <li>公安委員会</li>
                  <li>労働委員会</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>関連リンク</h2>
            <div className={styles.linkGrid}>
              <a href="/budget" className={styles.linkCard}>
                <h3>予算・財政</h3>
                <p>県の予算情報と財政状況をご覧いただけます</p>
              </a>
              <a href="/statistics" className={styles.linkCard}>
                <h3>統計情報</h3>
                <p>桜県の各種統計データを公開しています</p>
              </a>
              <a href="/plans" className={styles.linkCard}>
                <h3>計画・施策</h3>
                <p>県の各種計画と主要施策について</p>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}