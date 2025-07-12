import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function SakuraLakePage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>桜湖</h1>
            <p className={styles.heroSubtitle}>県内最大の湖で楽しむ四季折々の自然美</p>
          </div>
        </div>

        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">ホーム</Link>
            <span> / </span>
            <Link href="/tourism">観光</Link>
            <span> / </span>
            <span>桜湖</span>
          </nav>

          <section className={styles.overview}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>🏞️</div>
              <div className={styles.imageGrid}>
                <div className={styles.subImage}>🚣</div>
                <div className={styles.subImage}>🎣</div>
                <div className={styles.subImage}>🌸</div>
                <div className={styles.subImage}>🚴</div>
              </div>
            </div>
            
            <div className={styles.content}>
              <h2>桜湖について</h2>
              <p>
                桜湖（正式名称：桜花湖）は、桜花市北部に位置する県内最大の湖です。
                面積12.8km²、最大水深42mの人造湖で、1965年に完成しました。
                湖畔には2万本の桜が植えられ、四季を通じて美しい景観を楽しめます。
              </p>
              
              <h3>豊富なレクリエーション</h3>
              <p>
                ボート、カヌー、釣りなどの水上アクティビティから、
                湖畔のサイクリング、キャンプまで、多彩なレジャーが楽しめます。
                年間234万人が訪れる県内有数の観光スポットです。
              </p>
            </div>
          </section>

          <section className={styles.activities}>
            <h2>アクティビティ</h2>
            <div className={styles.activityGrid}>
              <div className={styles.activityCard}>
                <div className={styles.activityIcon}>🚣</div>
                <h3>ボート・カヌー</h3>
                <p>
                  手漕ぎボート、スワンボート、カヌーなど各種レンタル。
                  初心者向けのカヌー教室も開催。
                </p>
                <div className={styles.activityInfo}>
                  <strong>料金：</strong>1時間 1,000円〜<br />
                  <strong>営業：</strong>9:00-17:00（4月-10月）
                </div>
              </div>
              
              <div className={styles.activityCard}>
                <div className={styles.activityIcon}>🎣</div>
                <h3>釣り</h3>
                <p>
                  ブラックバス、ヘラブナ、ワカサギなど多彩な魚種。
                  冬季はワカサギ釣りの桟橋も設置。
                </p>
                <div className={styles.activityInfo}>
                  <strong>遊漁料：</strong>1日 1,500円<br />
                  <strong>レンタル：</strong>釣り具セット 2,000円
                </div>
              </div>
              
              <div className={styles.activityCard}>
                <div className={styles.activityIcon}>🚴</div>
                <h3>サイクリング</h3>
                <p>
                  湖を一周する全長18kmのサイクリングロード。
                  電動アシスト自転車のレンタルも。
                </p>
                <div className={styles.activityInfo}>
                  <strong>レンタル：</strong>2時間 500円〜<br />
                  <strong>一周所要時間：</strong>約1時間30分
                </div>
              </div>
              
              <div className={styles.activityCard}>
                <div className={styles.activityIcon}>🏕️</div>
                <h3>キャンプ</h3>
                <p>
                  湖畔にある3つのキャンプ場。
                  バーベキュー設備も完備。
                </p>
                <div className={styles.activityInfo}>
                  <strong>サイト料金：</strong>3,000円〜/泊<br />
                  <strong>予約：</strong>オンライン可
                </div>
              </div>
            </div>
          </section>

          <section className={styles.seasons}>
            <h2>四季の見どころ</h2>
            <div className={styles.seasonGrid}>
              <div className={styles.seasonCard}>
                <div className={styles.seasonHeader}>
                  <div className={styles.seasonIcon}>🌸</div>
                  <h3>春（3月〜5月）</h3>
                </div>
                <p>
                  湖畔の2万本の桜が一斉に開花。
                  遊覧船から眺める桜は絶景。桜まつりも開催。
                </p>
                <ul className={styles.seasonHighlight}>
                  <li>桜の見頃：3月下旬〜4月上旬</li>
                  <li>桜まつり：4月第1週</li>
                  <li>春の野鳥観察会</li>
                </ul>
              </div>
              
              <div className={styles.seasonCard}>
                <div className={styles.seasonHeader}>
                  <div className={styles.seasonIcon}>☀️</div>
                  <h3>夏（6月〜8月）</h3>
                </div>
                <p>
                  水上アクティビティのベストシーズン。
                  湖水浴場もオープンし、家族連れで賑わう。
                </p>
                <ul className={styles.seasonHighlight}>
                  <li>湖水浴場：7月〜8月</li>
                  <li>花火大会：8月15日</li>
                  <li>サマーフェスティバル</li>
                </ul>
              </div>
              
              <div className={styles.seasonCard}>
                <div className={styles.seasonHeader}>
                  <div className={styles.seasonIcon}>🍂</div>
                  <h3>秋（9月〜11月）</h3>
                </div>
                <p>
                  周囲の山々が紅葉に染まり、湖面に映る景色が美しい。
                  トライアスロン大会も開催。
                </p>
                <ul className={styles.seasonHighlight}>
                  <li>紅葉の見頃：10月下旬〜11月上旬</li>
                  <li>桜湖トライアスロン：9月</li>
                  <li>秋の味覚フェア</li>
                </ul>
              </div>
              
              <div className={styles.seasonCard}>
                <div className={styles.seasonHeader}>
                  <div className={styles.seasonIcon}>❄️</div>
                  <h3>冬（12月〜2月）</h3>
                </div>
                <p>
                  ワカサギ釣りのシーズン。
                  晴れた日には雪化粧した桜峰が湖面に映る。
                </p>
                <ul className={styles.seasonHighlight}>
                  <li>ワカサギ釣り：12月〜2月</li>
                  <li>白鳥飛来：11月〜3月</li>
                  <li>イルミネーション：12月〜1月</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.facilities}>
            <h2>周辺施設</h2>
            <div className={styles.facilityGrid}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>ℹ️</div>
                <h3>ビジターセンター</h3>
                <p>
                  湖の歴史や自然について学べる展示施設。
                  展望デッキからの眺めも抜群。
                </p>
                <div className={styles.facilityDetail}>
                  営業：9:00-17:00 / 入館無料
                </div>
              </div>
              
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>⛵</div>
                <h3>桜湖マリーナ</h3>
                <p>
                  ヨット、モーターボートの係留施設。
                  ヨット教室やクルージングツアーも。
                </p>
                <div className={styles.facilityDetail}>
                  収容：200隻 / レンタル有
                </div>
              </div>
              
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>🍴</div>
                <h3>レストラン・売店</h3>
                <p>
                  湖畔のレストランでは地元食材を使った料理を提供。
                  テラス席からの眺望が人気。
                </p>
                <div className={styles.facilityDetail}>
                  営業：11:00-20:00
                </div>
              </div>
              
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>🏨</div>
                <h3>宿泊施設</h3>
                <p>
                  湖畔ホテル、ペンション、コテージなど
                  多彩な宿泊施設が充実。
                </p>
                <div className={styles.facilityDetail}>
                  総客室数：約500室
                </div>
              </div>
            </div>
          </section>

          <section className={styles.info}>
            <h2>アクセス・基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>アクセス</h3>
                <p className={styles.infoMain}>桜花駅から車で20分</p>
                <p className={styles.infoSub}>路線バス「桜湖」下車</p>
                <p className={styles.infoNote}>駐車場：1,000台（有料）</p>
              </div>
              <div className={styles.infoCard}>
                <h3>遊覧船</h3>
                <div className={styles.priceList}>
                  <div className={styles.priceItem}>
                    <span>大人</span>
                    <span>1,200円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>子供</span>
                    <span>600円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>運航時間</span>
                    <span>9:00-16:00</span>
                  </div>
                </div>
                <p className={styles.infoNote}>1時間周遊（1日8便）</p>
              </div>
              <div className={styles.infoCard}>
                <h3>営業情報</h3>
                <p className={styles.infoMain}>年中無休</p>
                <p className={styles.infoSub}>施設により営業時間異なる</p>
                <p className={styles.infoNote}>冬季は一部施設休業</p>
              </div>
            </div>
          </section>

          <section className={styles.spots}>
            <h2>湖畔の見どころスポット</h2>
            <div className={styles.spotGrid}>
              <div className={styles.spotCard}>
                <h3>🌸 千本桜公園</h3>
                <p>
                  湖畔最大の桜の名所。春には桜のトンネルが出現。
                  展望台からは湖と桜の絶景パノラマ。
                </p>
              </div>
              <div className={styles.spotCard}>
                <h3>🦢 白鳥の浜</h3>
                <p>
                  冬季に白鳥が飛来する浜辺。
                  観察小屋から間近で白鳥を観察できる。
                </p>
              </div>
              <div className={styles.spotCard}>
                <h3>🌅 夕日の丘</h3>
                <p>
                  湖に沈む夕日の絶景スポット。
                  カップルに人気の「恋人の聖地」認定地。
                </p>
              </div>
              <div className={styles.spotCard}>
                <h3>🏛️ 水の科学館</h3>
                <p>
                  ダムの仕組みや水資源について学べる施設。
                  体験型展示が子供に人気。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.tips}>
            <h2>おすすめ情報</h2>
            <div className={styles.tipGrid}>
              <div className={styles.tipCard}>
                <h3>🎯 ベストビュースポット</h3>
                <p>
                  展望台（標高234m）からの360度パノラマ、
                  夕日の丘、桜並木遊歩道がおすすめ。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>📸 撮影ポイント</h3>
                <p>
                  朝霧に包まれる早朝の湖、夕焼けの湖面、
                  桜と湖のコラボレーションが人気。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🍱 グルメ情報</h3>
                <p>
                  湖で獲れたワカサギの天ぷら、地元野菜のBBQ、
                  桜ソフトクリームが名物。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>👨‍👩‍👧‍👦 ファミリー向け</h3>
                <p>
                  湖畔の芝生広場、遊具のある子供広場、
                  浅瀬の湖水浴場など家族で楽しめる。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.events}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>4月</div>
                <div className={styles.eventContent}>
                  <h3>桜湖さくらまつり</h3>
                  <p>湖畔の桜が満開となる時期に開催。屋台村、ステージイベント、夜桜ライトアップ</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>7月</div>
                <div className={styles.eventContent}>
                  <h3>桜湖レガッタ</h3>
                  <p>ボート競技大会。市民参加のドラゴンボートレースも同時開催</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>8月</div>
                <div className={styles.eventContent}>
                  <h3>桜湖花火大会</h3>
                  <p>湖上から打ち上げる1万発の花火。水中花火と音楽のコラボレーション</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>9月</div>
                <div className={styles.eventContent}>
                  <h3>桜湖トライアスロン</h3>
                  <p>スイム1.5km、バイク40km、ラン10kmの本格的大会</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.nearby}>
            <h2>周辺の観光スポット</h2>
            <div className={styles.nearbyGrid}>
              <Link href="/tourism/spots/thousand-sakura" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🌸</div>
                <h3>千本桜公園</h3>
                <p>車で15分</p>
              </Link>
              <Link href="/tourism/spots/sakura-castle" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏯</div>
                <h3>桜城</h3>
                <p>車で25分</p>
              </Link>
              <Link href="/tourism/spots/sakura-ropeway" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🚡</div>
                <h3>桜峰ロープウェイ</h3>
                <p>車で30分</p>
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