import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function AccessPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>アクセス・交通</h1>

          <section className={styles.section}>
            <h2>桜県へのアクセス</h2>
            <p className={styles.intro}>
              桜県は関東地方の中心に位置し、東京都心から約30分、
              各地からのアクセスも良好です。
            </p>
          </section>

          <section className={styles.section}>
            <h2>鉄道でのアクセス</h2>
            <div className={styles.accessGrid}>
              <div className={styles.accessCard}>
                <h3>東京から</h3>
                <div className={styles.routeList}>
                  <div className={styles.route}>
                    <span className={styles.routeName}>JR桜県線</span>
                    <span className={styles.routeTime}>約30分</span>
                  </div>
                  <div className={styles.route}>
                    <span className={styles.routeName}>東桜急行線</span>
                    <span className={styles.routeTime}>約25分</span>
                  </div>
                </div>
              </div>
              <div className={styles.accessCard}>
                <h3>横浜から</h3>
                <div className={styles.routeList}>
                  <div className={styles.route}>
                    <span className={styles.routeName}>JR東海道線→桜県線</span>
                    <span className={styles.routeTime}>約40分</span>
                  </div>
                  <div className={styles.route}>
                    <span className={styles.routeName}>南桜急行線</span>
                    <span className={styles.routeTime}>約35分</span>
                  </div>
                </div>
              </div>
              <div className={styles.accessCard}>
                <h3>千葉から</h3>
                <div className={styles.routeList}>
                  <div className={styles.route}>
                    <span className={styles.routeName}>JR総武線→桜県線</span>
                    <span className={styles.routeTime}>約50分</span>
                  </div>
                </div>
              </div>
              <div className={styles.accessCard}>
                <h3>大宮から</h3>
                <div className={styles.routeList}>
                  <div className={styles.route}>
                    <span className={styles.routeName}>JR埼京線→桜県線</span>
                    <span className={styles.routeTime}>約45分</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>高速道路でのアクセス</h2>
            <div className={styles.highwayGrid}>
              <div className={styles.highwayCard}>
                <h3>桜県中央IC</h3>
                <p>東名高速道路から桜県自動車道経由</p>
                <ul>
                  <li>東京ICから約30分</li>
                  <li>横浜ICから約25分</li>
                </ul>
              </div>
              <div className={styles.highwayCard}>
                <h3>東桜IC</h3>
                <p>首都高速道路から直結</p>
                <ul>
                  <li>新宿から約25分</li>
                  <li>渋谷から約30分</li>
                </ul>
              </div>
              <div className={styles.highwayCard}>
                <h3>西桜IC</h3>
                <p>中央自動車道から接続</p>
                <ul>
                  <li>八王子ICから約20分</li>
                  <li>相模湖ICから約15分</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>県内の交通機関</h2>
            <div className={styles.transportGrid}>
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚃</div>
                <h3>鉄道</h3>
                <p>JR桜県線、桜県電鉄、各私鉄が県内各地を結んでいます</p>
              </div>
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚌</div>
                <h3>バス</h3>
                <p>桜県交通を中心に、きめ細かな路線網を整備</p>
              </div>
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚕</div>
                <h3>タクシー</h3>
                <p>県内各地で利用可能、観光タクシーも充実</p>
              </div>
              <div className={styles.transportCard}>
                <div className={styles.transportIcon}>🚲</div>
                <h3>レンタサイクル</h3>
                <p>主要駅や観光地で利用可能なシェアサイクルサービス</p>
              </div>
            </div>
          </section>

          <section className={styles.mapSection}>
            <h2>交通アクセスマップ</h2>
            <div className={styles.mapPlaceholder}>
              <p>🗺️</p>
              <p>桜県交通アクセスマップ</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>お問い合わせ</h2>
            <div className={styles.contactCard}>
              <h3>桜県交通案内センター</h3>
              <p>電話: 012-345-6789（9:00〜18:00）</p>
              <p>メール: access@sakura-ken.jp</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
