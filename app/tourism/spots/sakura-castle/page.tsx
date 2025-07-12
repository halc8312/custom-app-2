import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function SakuraCastlePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>桜城</h1>
            <p className={styles.heroSubtitle}>国指定史跡・桜県のシンボル</p>
          </div>
        </div>

        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">ホーム</Link>
            <span> / </span>
            <Link href="/tourism">観光</Link>
            <span> / </span>
            <span>桜城</span>
          </nav>

          <section className={styles.overview}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>🏯</div>
              <div className={styles.imageGrid}>
                <div className={styles.subImage}>🌸</div>
                <div className={styles.subImage}>🏛️</div>
                <div className={styles.subImage}>🌳</div>
                <div className={styles.subImage}>🗾</div>
              </div>
            </div>
            
            <div className={styles.content}>
              <h2>桜城について</h2>
              <p>
                桜城は1573年（天正元年）に築城された、桜県を代表する歴史的建造物です。
                国指定史跡として保護され、壮麗な天守閣、堅固な石垣、美しい日本庭園が
                訪れる人々を魅了します。春には城内に植えられた500本の桜が一斉に咲き誇り、
                まさに「桜の城」の名にふさわしい絶景を作り出します。
              </p>
              
              <h3>歴史的背景</h3>
              <p>
                戦国時代の武将・桜井信長によって築城され、江戸時代を通じて桜藩の居城として
                栄えました。明治維新後も奇跡的に破却を免れ、昭和初期に大規模な修復工事が
                行われました。現在の天守閣は当時の設計図を基に忠実に復元されたものです。
              </p>
            </div>
          </section>

          <section className={styles.highlights}>
            <h2>見どころ</h2>
            <div className={styles.highlightGrid}>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏯</div>
                <h3>天守閣</h3>
                <p>
                  5層6階の壮麗な天守閣。最上階からは桜花市街を一望でき、
                  天気の良い日には遠く桜峰まで見渡せます。
                </p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏛️</div>
                <h3>石垣と城門</h3>
                <p>
                  築城当時の石垣がそのまま残る貴重な遺構。
                  大手門、桜門、搦手門の3つの城門も見応えがあります。
                </p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🌳</div>
                <h3>桜城庭園</h3>
                <p>
                  池泉回遊式の日本庭園。四季折々の花が楽しめ、
                  特に春の桜と秋の紅葉は必見です。
                </p>
              </div>
              <div className={styles.highlightCard}>
                <div className={styles.highlightIcon}>🏛️</div>
                <h3>歴史博物館</h3>
                <p>
                  城内にある博物館では、武具や古文書など
                  桜藩に関する貴重な資料を展示しています。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.info}>
            <h2>施設情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>営業時間</h3>
                <p className={styles.infoMain}>9:00 - 17:00</p>
                <p className={styles.infoSub}>（最終入場 16:30）</p>
                <p className={styles.infoNote}>年中無休（年末年始を除く）</p>
              </div>
              <div className={styles.infoCard}>
                <h3>入場料金</h3>
                <div className={styles.priceList}>
                  <div className={styles.priceItem}>
                    <span>大人</span>
                    <span>500円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>高校生</span>
                    <span>300円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>小・中学生</span>
                    <span>200円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>未就学児</span>
                    <span>無料</span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <h3>アクセス</h3>
                <p className={styles.infoMain}>桜花駅から徒歩15分</p>
                <p className={styles.infoSub}>または桜バス「桜城前」下車すぐ</p>
                <p className={styles.infoNote}>駐車場：普通車200台（500円/日）</p>
              </div>
            </div>
          </section>

          <section className={styles.events}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>4月</div>
                <div className={styles.eventContent}>
                  <h3>桜城桜まつり</h3>
                  <p>城内の桜が満開となる時期に開催。夜桜ライトアップも実施</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>8月</div>
                <div className={styles.eventContent}>
                  <h3>桜城夏祭り</h3>
                  <p>戦国時代の合戦を再現する武者行列や火縄銃実演</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>11月</div>
                <div className={styles.eventContent}>
                  <h3>桜城菊花展</h3>
                  <p>城内各所に菊花を展示。菊人形の展示も人気</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>12月</div>
                <div className={styles.eventContent}>
                  <h3>桜城イルミネーション</h3>
                  <p>天守閣と庭園を彩る幻想的なライトアップ</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.tips}>
            <h2>おすすめ情報</h2>
            <div className={styles.tipGrid}>
              <div className={styles.tipCard}>
                <h3>🎯 ベストシーズン</h3>
                <p>
                  春（3月下旬〜4月上旬）の桜の時期が最も人気。
                  秋の紅葉シーズン（11月）も美しい景色が楽しめます。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>📸 撮影スポット</h3>
                <p>
                  天守閣と桜のコラボレーション、水堀に映る逆さ天守、
                  庭園の太鼓橋からの眺めがおすすめ。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🍱 グルメ情報</h3>
                <p>
                  城内の茶屋では桜餅や桜茶が楽しめます。
                  周辺には郷土料理を提供する老舗料亭も。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🎁 お土産</h3>
                <p>
                  桜城限定の御城印、武将グッズ、桜をモチーフにした
                  和菓子などが人気です。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.nearby}>
            <h2>周辺の観光スポット</h2>
            <div className={styles.nearbyGrid}>
              <Link href="/tourism/spots/sakura-museum" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏛️</div>
                <h3>桜県立博物館</h3>
                <p>徒歩10分</p>
              </Link>
              <Link href="/tourism/spots/samurai-district" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏘️</div>
                <h3>武家屋敷通り</h3>
                <p>徒歩15分</p>
              </Link>
              <Link href="/tourism/spots/sakura-shrine" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>⛩️</div>
                <h3>桜神社</h3>
                <p>徒歩20分</p>
              </Link>
            </div>
          </section>

          <div className={styles.backLink}>
            <Link href="/tourism" className={styles.backButton}>
              観光トップに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}