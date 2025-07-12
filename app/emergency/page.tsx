import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function EmergencyPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>防災・緊急情報</h1>

          <section className={styles.emergencyNumbers}>
            <h2 className={styles.emergencyTitle}>緊急連絡先</h2>
            <div className={styles.numberGrid}>
              <div className={styles.numberCard}>
                <div className={styles.numberDisplay}>119</div>
                <h3>火事・救急車</h3>
                <p>消防・救急</p>
              </div>
              <div className={styles.numberCard}>
                <div className={styles.numberDisplay}>110</div>
                <h3>事件・事故</h3>
                <p>警察</p>
              </div>
              <div className={styles.numberCard}>
                <div className={styles.numberDisplay}>118</div>
                <h3>海の事故</h3>
                <p>海上保安庁</p>
              </div>
              <div className={styles.numberCard}>
                <div className={styles.numberDisplay}>#7119</div>
                <h3>救急相談</h3>
                <p>医療相談・病院案内</p>
              </div>
            </div>
            <div className={styles.additionalNumbers}>
              <p><strong>観光客緊急ホットライン:</strong> 050-3816-2787（多言語対応）</p>
              <p><strong>災害用伝言ダイヤル:</strong> 171</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2>緊急時の心得</h2>
            <div className={styles.guidelineGrid}>
              <div className={styles.guidelineCard}>
                <h3>地震発生時</h3>
                <ul>
                  <li>まず身の安全を確保</li>
                  <li>揺れが収まったら火の元確認</li>
                  <li>避難は徒歩で、持ち物は最小限に</li>
                  <li>正確な情報を入手</li>
                </ul>
              </div>
              <div className={styles.guidelineCard}>
                <h3>火災発生時</h3>
                <ul>
                  <li>大声で「火事だ！」と周囲に知らせる</li>
                  <li>119番通報</li>
                  <li>初期消火（無理は禁物）</li>
                  <li>煙を吸わないよう低い姿勢で避難</li>
                </ul>
              </div>
              <div className={styles.guidelineCard}>
                <h3>水害・台風時</h3>
                <ul>
                  <li>早めの避難を心がける</li>
                  <li>避難情報に注意</li>
                  <li>地下や低地から離れる</li>
                  <li>川や海に近づかない</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>避難所情報</h2>
            <div className={styles.evacuationInfo}>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <h3>指定避難所</h3>
                  <p className={styles.statNumber}>234</p>
                  <span>箇所</span>
                </div>
                <div className={styles.statCard}>
                  <h3>緊急避難場所</h3>
                  <p className={styles.statNumber}>345</p>
                  <span>箇所</span>
                </div>
                <div className={styles.statCard}>
                  <h3>福祉避難所</h3>
                  <p className={styles.statNumber}>45</p>
                  <span>箇所</span>
                </div>
                <div className={styles.statCard}>
                  <h3>収容可能人数</h3>
                  <p className={styles.statNumber}>56.8</p>
                  <span>万人</span>
                </div>
              </div>
              <div className={styles.evacuationNote}>
                <p>最寄りの避難所は、お住まいの地域の防災マップでご確認ください。</p>
                <a href="#" className={styles.mapLink}>防災マップを見る</a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>緊急サービス体制</h2>
            <div className={styles.serviceGrid}>
              <div className={styles.serviceCard}>
                <h3>消防署</h3>
                <div className={styles.serviceStats}>
                  <div>
                    <span className={styles.statLabel}>署所数</span>
                    <span className={styles.statValue}>45箇所</span>
                  </div>
                  <div>
                    <span className={styles.statLabel}>消防車両</span>
                    <span className={styles.statValue}>234台</span>
                  </div>
                  <div>
                    <span className={styles.statLabel}>救急車</span>
                    <span className={styles.statValue}>156台</span>
                  </div>
                  <div>
                    <span className={styles.statLabel}>消防士</span>
                    <span className={styles.statValue}>3,456名</span>
                  </div>
                </div>
              </div>
              <div className={styles.serviceCard}>
                <h3>警察署</h3>
                <div className={styles.serviceStats}>
                  <div>
                    <span className={styles.statLabel}>署所数</span>
                    <span className={styles.statValue}>44箇所</span>
                  </div>
                  <div>
                    <span className={styles.statLabel}>パトカー</span>
                    <span className={styles.statValue}>345台</span>
                  </div>
                  <div>
                    <span className={styles.statLabel}>交番</span>
                    <span className={styles.statValue}>31箇所</span>
                  </div>
                  <div>
                    <span className={styles.statLabel}>警察官</span>
                    <span className={styles.statValue}>5,678名</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>災害への備え</h2>
            <div className={styles.preparationGrid}>
              <div className={styles.preparationCard}>
                <h3>非常持出品</h3>
                <ul>
                  <li>飲料水（3日分）</li>
                  <li>非常食（3日分）</li>
                  <li>救急用品・常備薬</li>
                  <li>懐中電灯・ラジオ</li>
                  <li>現金・貴重品</li>
                  <li>衣類・防寒具</li>
                </ul>
              </div>
              <div className={styles.preparationCard}>
                <h3>家庭での備え</h3>
                <ul>
                  <li>家具の転倒防止</li>
                  <li>避難経路の確認</li>
                  <li>家族の連絡方法確認</li>
                  <li>ハザードマップの確認</li>
                  <li>防災訓練への参加</li>
                  <li>災害用伝言サービスの登録</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>防災情報リンク</h2>
            <div className={styles.linkGrid}>
              <a href="#" className={styles.infoLink}>
                <h3>避難所マップ</h3>
                <p>最寄りの避難所を検索</p>
              </a>
              <a href="#" className={styles.infoLink}>
                <h3>ハザードマップ</h3>
                <p>災害リスクを確認</p>
              </a>
              <a href="#" className={styles.infoLink}>
                <h3>防災メール登録</h3>
                <p>緊急情報を受信</p>
              </a>
              <a href="#" className={styles.infoLink}>
                <h3>防災アプリ</h3>
                <p>スマートフォン用アプリ</p>
              </a>
            </div>
          </section>

          <section className={styles.warningSection}>
            <h2>現在の警報・注意報</h2>
            <div className={styles.warningBox}>
              <p className={styles.noWarning}>現在、桜県に発表されている警報・注意報はありません。</p>
              <p className={styles.updateTime}>最終更新: {new Date().toLocaleString('ja-JP')}</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}