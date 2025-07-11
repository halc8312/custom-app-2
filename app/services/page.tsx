import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>県民サービス</h1>

          <section className={styles.section}>
            <p className={styles.intro}>
              桜県では、県民の皆様の生活をサポートする様々なサービスを提供しています。
              各種手続きや相談窓口をご利用ください。
            </p>
          </section>

          <section className={styles.section}>
            <h2>よく利用されるサービス</h2>
            <div className={styles.serviceGrid}>
              <Link href="/services/moving" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏠</div>
                <h3>引越し・転入転出</h3>
                <p>住所変更に関する手続き</p>
              </Link>
              <Link href="/services/certificate" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📄</div>
                <h3>各種証明書</h3>
                <p>住民票・戸籍謄本など</p>
              </Link>
              <Link href="/services/tax" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💰</div>
                <h3>税金</h3>
                <p>県税の納付・証明書発行</p>
              </Link>
              <Link href="/services/health" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏥</div>
                <h3>健康・医療</h3>
                <p>健康診断・予防接種など</p>
              </Link>
              <Link href="/services/welfare" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🤝</div>
                <h3>福祉</h3>
                <p>介護・障害者支援など</p>
              </Link>
              <Link href="/services/child" className={styles.serviceCard}>
                <div className={styles.serviceIcon}>👶</div>
                <h3>子育て支援</h3>
                <p>保育・児童手当など</p>
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <h2>オンラインサービス</h2>
            <div className={styles.onlineServices}>
              <div className={styles.onlineCard}>
                <h3>電子申請システム</h3>
                <p>24時間365日、各種申請手続きがオンラインで可能です</p>
                <a href="#" className={styles.onlineButton}>
                  利用する
                </a>
              </div>
              <div className={styles.onlineCard}>
                <h3>施設予約システム</h3>
                <p>県立施設の利用予約がオンラインで簡単にできます</p>
                <a href="#" className={styles.onlineButton}>
                  予約する
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>相談窓口</h2>
            <div className={styles.consultGrid}>
              <div className={styles.consultCard}>
                <h3>県民相談センター</h3>
                <p>一般的な相談・問い合わせ</p>
                <p className={styles.consultInfo}>
                  電話: 012-345-6789
                  <br />
                  平日 9:00〜17:00
                </p>
              </div>
              <div className={styles.consultCard}>
                <h3>消費生活センター</h3>
                <p>消費者トラブル・悪質商法相談</p>
                <p className={styles.consultInfo}>
                  電話: 012-345-1111
                  <br />
                  平日 9:00〜16:30
                </p>
              </div>
              <div className={styles.consultCard}>
                <h3>こころの健康相談</h3>
                <p>メンタルヘルス・心の悩み相談</p>
                <p className={styles.consultInfo}>
                  電話: 012-345-2222
                  <br />
                  24時間対応
                </p>
              </div>
              <div className={styles.consultCard}>
                <h3>子育て相談ダイヤル</h3>
                <p>子育ての悩み・育児相談</p>
                <p className={styles.consultInfo}>
                  電話: 012-345-3333
                  <br />
                  平日 9:00〜21:00
                </p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>窓口案内</h2>
            <div className={styles.officeInfo}>
              <div className={styles.officeCard}>
                <h3>県庁本庁舎</h3>
                <p>
                  〒123-4567 桜県桜花市中央1-1-1
                  <br />
                  電話: 012-345-6789（代表）
                  <br />
                  開庁時間: 平日 8:30〜17:15
                </p>
              </div>
              <div className={styles.branchOffices}>
                <h3>地域振興局</h3>
                <ul>
                  <li>東桜地域振興局（東桜市）</li>
                  <li>西桜地域振興局（西桜市）</li>
                  <li>南桜地域振興局（南桜市）</li>
                  <li>北桜地域振興局（北桜市）</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
