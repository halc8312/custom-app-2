import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function ThousandSakuraPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>千本桜公園</h1>
            <p className={styles.heroSubtitle}>日本最大級の桜の名所</p>
          </div>
        </div>

        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">ホーム</Link>
            <span> / </span>
            <Link href="/tourism">観光</Link>
            <span> / </span>
            <span>千本桜公園</span>
          </nav>

          <section className={styles.overview}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>🌸</div>
              <div className={styles.imageGrid}>
                <div className={styles.subImage}>🌸</div>
                <div className={styles.subImage}>🌳</div>
                <div className={styles.subImage}>🏞️</div>
                <div className={styles.subImage}>🚶</div>
              </div>
            </div>
            
            <div className={styles.content}>
              <h2>千本桜公園について</h2>
              <p>
                千本桜公園は、その名の通り1,000本以上の桜が植えられた日本最大級の桜の名所です。
                12,345ヘクタールの広大な敷地には、ソメイヨシノ、ヤマザクラ、シダレザクラなど
                100種類以上の桜が植栽されており、春から冬まで年間を通じて様々な桜を楽しむことができます。
              </p>
              
              <h3>四季を通じた桜の楽しみ</h3>
              <p>
                一般的な春の桜だけでなく、高山桜（夏）、十月桜（秋）、寒桜（冬）など、
                四季折々の桜が楽しめるのが千本桜公園の最大の特徴です。
                「一年中桜が咲く公園」として、年間567万人もの観光客が訪れます。
              </p>
            </div>
          </section>

          <section className={styles.seasons}>
            <h2>季節ごとの見どころ</h2>
            <div className={styles.seasonGrid}>
              <div className={styles.seasonCard}>
                <div className={styles.seasonIcon}>🌸</div>
                <h3>春桜（3月下旬〜4月中旬）</h3>
                <p>
                  ソメイヨシノを中心に、園内が桜色に染まる最も華やかな季節。
                  桜のトンネルや桜の絨毯など、圧巻の景色が広がります。
                </p>
                <div className={styles.seasonInfo}>
                  <strong>主な品種：</strong>ソメイヨシノ、ヤマザクラ、オオシマザクラ
                </div>
              </div>
              <div className={styles.seasonCard}>
                <div className={styles.seasonIcon}>☀️</div>
                <h3>夏桜（6月〜7月）</h3>
                <p>
                  標高の高いエリアに植えられた高山桜が見頃を迎えます。
                  涼しい風に揺れる桜は、夏の暑さを忘れさせてくれます。
                </p>
                <div className={styles.seasonInfo}>
                  <strong>主な品種：</strong>高山桜、遅咲き八重桜
                </div>
              </div>
              <div className={styles.seasonCard}>
                <div className={styles.seasonIcon}>🍂</div>
                <h3>秋桜（10月〜11月）</h3>
                <p>
                  十月桜や冬桜が咲き始め、紅葉とのコラボレーションが楽しめます。
                  秋ならではの風情ある桜の姿を堪能できます。
                </p>
                <div className={styles.seasonInfo}>
                  <strong>主な品種：</strong>十月桜、冬桜、四季桜
                </div>
              </div>
              <div className={styles.seasonCard}>
                <div className={styles.seasonIcon}>❄️</div>
                <h3>冬桜（12月〜2月）</h3>
                <p>
                  寒桜が冬の澄んだ空気の中で可憐な花を咲かせます。
                  雪との共演が見られることもあり、幻想的な光景が広がります。
                </p>
                <div className={styles.seasonInfo}>
                  <strong>主な品種：</strong>寒桜、河津桜、熱海桜
                </div>
              </div>
            </div>
          </section>

          <section className={styles.areas}>
            <h2>園内エリア紹介</h2>
            <div className={styles.areaGrid}>
              <div className={styles.areaCard}>
                <h3>🌸 桜の丘</h3>
                <p>
                  公園の中心部に位置し、360度桜に囲まれる絶景スポット。
                  展望台からは桜の海を一望できます。
                </p>
              </div>
              <div className={styles.areaCard}>
                <h3>🚶 桜並木遊歩道</h3>
                <p>
                  全長5kmの遊歩道。両側に植えられた桜のトンネルを
                  散策しながら楽しめます。
                </p>
              </div>
              <div className={styles.areaCard}>
                <h3>🏞️ 桜の広場</h3>
                <p>
                  ピクニックやお花見に最適な芝生広場。
                  家族連れに人気のエリアです。
                </p>
              </div>
              <div className={styles.areaCard}>
                <h3>🌳 品種園</h3>
                <p>
                  100種類以上の桜を品種ごとに植栽。
                  桜の多様性を学べる教育的エリア。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.info}>
            <h2>施設情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>開園時間</h3>
                <p className={styles.infoMain}>24時間開園</p>
                <p className={styles.infoSub}>（有料エリアは9:00-17:00）</p>
                <p className={styles.infoNote}>年中無休</p>
              </div>
              <div className={styles.infoCard}>
                <h3>入園料</h3>
                <div className={styles.priceList}>
                  <div className={styles.priceItem}>
                    <span>基本エリア</span>
                    <span>無料</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>特別観覧エリア（大人）</span>
                    <span>300円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>特別観覧エリア（子供）</span>
                    <span>100円</span>
                  </div>
                </div>
              </div>
              <div className={styles.infoCard}>
                <h3>アクセス</h3>
                <p className={styles.infoMain}>桜花駅から桜バス30分</p>
                <p className={styles.infoSub}>「千本桜公園」下車すぐ</p>
                <p className={styles.infoNote}>駐車場：1,000台（有料）</p>
              </div>
            </div>
          </section>

          <section className={styles.events}>
            <h2>主なイベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>3-4月</div>
                <div className={styles.eventContent}>
                  <h3>千本桜まつり</h3>
                  <p>春桜の最盛期に開催される県最大の桜まつり。夜桜ライトアップ、屋台村、ステージイベントなど</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>7月</div>
                <div className={styles.eventContent}>
                  <h3>夏桜涼風まつり</h3>
                  <p>高山桜の開花に合わせて開催。涼を求めて訪れる人々で賑わう</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>10月</div>
                <div className={styles.eventContent}>
                  <h3>秋桜紅葉まつり</h3>
                  <p>秋桜と紅葉の共演を楽しむイベント。写真コンテストも開催</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>1月</div>
                <div className={styles.eventContent}>
                  <h3>冬桜観賞会</h3>
                  <p>寒桜の開花に合わせた特別観賞会。温かい甘酒のサービスも</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.facilities}>
            <h2>園内施設</h2>
            <div className={styles.facilityGrid}>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>ℹ️</div>
                <h3>ビジターセンター</h3>
                <p>
                  桜に関する展示、パンフレット配布、
                  ガイドツアーの受付など
                </p>
              </div>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>🍴</div>
                <h3>レストラン・売店</h3>
                <p>
                  桜をテーマにした料理やお土産を販売。
                  桜ソフトクリームが人気
                </p>
              </div>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>🚻</div>
                <h3>休憩所・トイレ</h3>
                <p>
                  園内各所に設置。バリアフリー対応の
                  設備も充実
                </p>
              </div>
              <div className={styles.facilityCard}>
                <div className={styles.facilityIcon}>🚲</div>
                <h3>レンタサイクル</h3>
                <p>
                  広い園内を効率的に回れる自転車レンタル。
                  電動アシスト付きも
                </p>
              </div>
            </div>
          </section>

          <section className={styles.tips}>
            <h2>おすすめ情報</h2>
            <div className={styles.tipGrid}>
              <div className={styles.tipCard}>
                <h3>🎯 混雑回避のコツ</h3>
                <p>
                  春の最盛期は早朝（6:00-8:00）がおすすめ。
                  平日は比較的ゆっくり観賞できます。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>📸 撮影ポイント</h3>
                <p>
                  桜の丘展望台、桜並木の中央部、
                  鏡池に映る桜が人気の撮影スポット。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🌸 穴場スポット</h3>
                <p>
                  品種園の奥にある「秘密の桜園」は
                  比較的人が少なく、ゆっくり楽しめます。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>👨‍👩‍👧‍👦 ファミリー向け</h3>
                <p>
                  子供広場には遊具もあり、桜を見ながら
                  子供も楽しめる設計になっています。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.nearby}>
            <h2>周辺の観光スポット</h2>
            <div className={styles.nearbyGrid}>
              <Link href="/tourism/spots/sakura-lake" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏞️</div>
                <h3>桜花湖</h3>
                <p>車で15分</p>
              </Link>
              <Link href="/tourism/spots/sakura-museum" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏛️</div>
                <h3>桜県立美術館</h3>
                <p>車で20分</p>
              </Link>
              <Link href="/tourism/spots/flower-temple" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏯</div>
                <h3>千本寺</h3>
                <p>車で25分</p>
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