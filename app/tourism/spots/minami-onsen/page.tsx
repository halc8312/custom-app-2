import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

export default function MinamiOnsenPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>南桜温泉郷</h1>
            <p className={styles.heroSubtitle}>四大源泉を持つ癒しの温泉地</p>
          </div>
        </div>

        <div className="container">
          <nav className={styles.breadcrumb}>
            <Link href="/">ホーム</Link>
            <span> / </span>
            <Link href="/tourism">観光</Link>
            <span> / </span>
            <span>南桜温泉郷</span>
          </nav>

          <section className={styles.overview}>
            <div className={styles.imageSection}>
              <div className={styles.mainImage}>♨️</div>
              <div className={styles.imageGrid}>
                <div className={styles.subImage}>🛁</div>
                <div className={styles.subImage}>🏔️</div>
                <div className={styles.subImage}>🏯</div>
                <div className={styles.subImage}>🌸</div>
              </div>
            </div>
            
            <div className={styles.content}>
              <h2>南桜温泉郷について</h2>
              <p>
                南桜温泉郷は、桜県南部の山間に位置する県内最大の温泉地です。
                47もの源泉を有し、硫黄泉、炭酸水素塩泉、単純泉など多彩な泉質が楽しめます。
                開湯は1200年前と伝えられ、古くから湯治場として親しまれてきました。
              </p>
              
              <h3>四大源泉の特徴</h3>
              <p>
                南桜温泉郷は「桜の湯」「花見の湯」「千年の湯」「癒しの湯」の
                四大源泉を中心に発展してきました。それぞれ異なる泉質と効能を持ち、
                湯めぐりを楽しむ観光客で年間を通じて賑わいます。
              </p>
            </div>
          </section>

          <section className={styles.springs}>
            <h2>四大源泉紹介</h2>
            <div className={styles.springGrid}>
              <div className={styles.springCard}>
                <div className={styles.springHeader}>
                  <div className={styles.springIcon}>🌸</div>
                  <h3>桜の湯</h3>
                </div>
                <div className={styles.springInfo}>
                  <p><strong>泉質：</strong>単純温泉（弱アルカリ性）</p>
                  <p><strong>温度：</strong>42℃</p>
                  <p><strong>効能：</strong>美肌効果、疲労回復、神経痛</p>
                  <p className={styles.springDesc}>
                    「美人の湯」として知られ、とろみのある泉質が特徴。
                    桜のエキスを配合した化粧品も人気。
                  </p>
                </div>
              </div>
              
              <div className={styles.springCard}>
                <div className={styles.springHeader}>
                  <div className={styles.springIcon}>🌺</div>
                  <h3>花見の湯</h3>
                </div>
                <div className={styles.springInfo}>
                  <p><strong>泉質：</strong>硫黄泉</p>
                  <p><strong>温度：</strong>48℃</p>
                  <p><strong>効能：</strong>皮膚病、関節痛、糖尿病</p>
                  <p className={styles.springDesc}>
                    独特の硫黄の香りと白濁したお湯が特徴。
                    湯の花が浮かぶ本格的な硫黄泉。
                  </p>
                </div>
              </div>
              
              <div className={styles.springCard}>
                <div className={styles.springHeader}>
                  <div className={styles.springIcon}>🏛️</div>
                  <h3>千年の湯</h3>
                </div>
                <div className={styles.springInfo}>
                  <p><strong>泉質：</strong>炭酸水素塩泉</p>
                  <p><strong>温度：</strong>38℃</p>
                  <p><strong>効能：</strong>切り傷、やけど、慢性皮膚病</p>
                  <p className={styles.springDesc}>
                    開湯1200年の歴史を持つ最古の源泉。
                    ぬるめの湯でゆっくり長湯が楽しめる。
                  </p>
                </div>
              </div>
              
              <div className={styles.springCard}>
                <div className={styles.springHeader}>
                  <div className={styles.springIcon}>💆</div>
                  <h3>癒しの湯</h3>
                </div>
                <div className={styles.springInfo}>
                  <p><strong>泉質：</strong>含鉄泉</p>
                  <p><strong>温度：</strong>45℃</p>
                  <p><strong>効能：</strong>貧血、冷え性、婦人病</p>
                  <p className={styles.springDesc}>
                    鉄分を多く含む茶褐色のお湯。
                    体の芯から温まる「子宝の湯」としても有名。
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.facilities}>
            <h2>主要温泉施設</h2>
            <div className={styles.facilityList}>
              <div className={styles.facilityItem}>
                <h3>🏨 温泉旅館（34軒）</h3>
                <p>
                  伝統的な和風旅館から近代的なホテルまで多彩な宿泊施設。
                  露天風呂付き客室や貸切風呂も充実。
                </p>
                <div className={styles.facilityExample}>
                  代表的な旅館：桜花亭、千年館、花見荘、南桜ホテル
                </div>
              </div>
              
              <div className={styles.facilityItem}>
                <h3>♨️ 日帰り温泉（23施設）</h3>
                <p>
                  気軽に温泉を楽しめる日帰り入浴施設。
                  食事処や休憩所も完備し、一日中楽しめます。
                </p>
                <div className={styles.facilityExample}>
                  人気施設：南桜の湯、湯めぐり館、露天風呂パーク
                </div>
              </div>
              
              <div className={styles.facilityItem}>
                <h3>🦶 足湯・手湯（8か所）</h3>
                <p>
                  温泉街の各所に無料の足湯・手湯を設置。
                  散策の途中で気軽に温泉を楽しめます。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.info}>
            <h2>アクセス・基本情報</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3>アクセス</h3>
                <p className={styles.infoMain}>南桜駅から路線バス40分</p>
                <p className={styles.infoSub}>または車で30分</p>
                <p className={styles.infoNote}>東京から特急で2時間30分</p>
              </div>
              <div className={styles.infoCard}>
                <h3>湯めぐり手形</h3>
                <div className={styles.priceList}>
                  <div className={styles.priceItem}>
                    <span>1日券</span>
                    <span>1,500円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>2日券</span>
                    <span>2,500円</span>
                  </div>
                  <div className={styles.priceItem}>
                    <span>3日券</span>
                    <span>3,000円</span>
                  </div>
                </div>
                <p className={styles.infoNote}>加盟施設で3か所まで入浴可能</p>
              </div>
              <div className={styles.infoCard}>
                <h3>観光案内所</h3>
                <p className={styles.infoMain}>9:00 - 18:00</p>
                <p className={styles.infoSub}>年中無休</p>
                <p className={styles.infoNote}>多言語パンフレット配布</p>
              </div>
            </div>
          </section>

          <section className={styles.attractions}>
            <h2>温泉街の見どころ</h2>
            <div className={styles.attractionGrid}>
              <div className={styles.attractionCard}>
                <div className={styles.attractionIcon}>🚶</div>
                <h3>温泉街散策</h3>
                <p>
                  石畳の通りに土産物店や飲食店が軒を連ねる。
                  浴衣での散策が風情を楽しめます。
                </p>
              </div>
              <div className={styles.attractionCard}>
                <div className={styles.attractionIcon}>🏮</div>
                <h3>湯けむり横丁</h3>
                <p>
                  温泉まんじゅうや地酒など、地元の名物が
                  揃う食べ歩きスポット。
                </p>
              </div>
              <div className={styles.attractionCard}>
                <div className={styles.attractionIcon}>⛩️</div>
                <h3>温泉神社</h3>
                <p>
                  温泉の守り神を祀る神社。
                  健康祈願や美肌祈願で人気。
                </p>
              </div>
              <div className={styles.attractionCard}>
                <div className={styles.attractionIcon}>🎭</div>
                <h3>伝統芸能館</h3>
                <p>
                  地元の伝統芸能を毎晩上演。
                  温泉客は割引料金で観賞可能。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.events}>
            <h2>年間イベント</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>2月</div>
                <div className={styles.eventContent}>
                  <h3>湯けむり雪まつり</h3>
                  <p>雪見風呂と雪灯籠のライトアップ。温泉卵作り体験も開催</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>5月</div>
                <div className={styles.eventContent}>
                  <h3>温泉まつり</h3>
                  <p>湯かけ神輿や温泉供養祭。この日は全施設で入浴料割引</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>8月</div>
                <div className={styles.eventContent}>
                  <h3>温泉花火大会</h3>
                  <p>山間に響く花火と温泉のコラボレーション。浴衣コンテストも</p>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventMonth}>11月</div>
                <div className={styles.eventContent}>
                  <h3>紅葉温泉ウィーク</h3>
                  <p>紅葉露天風呂の特別開放。もみじ茶の無料サービス</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.tips}>
            <h2>温泉を楽しむコツ</h2>
            <div className={styles.tipGrid}>
              <div className={styles.tipCard}>
                <h3>♨️ 入浴マナー</h3>
                <p>
                  かけ湯をしてから入浴、タオルは湯船に入れない、
                  長湯は避けるなど、基本的なマナーを守りましょう。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🕐 おすすめ時間帯</h3>
                <p>
                  朝6時〜8時は空いていて、朝日を浴びながらの入浴が格別。
                  夕方は混雑するので避けるのがおすすめ。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🎁 お土産情報</h3>
                <p>
                  温泉まんじゅう、湯の花、温泉コスメが定番。
                  地酒「湯けむり」も人気のお土産です。
                </p>
              </div>
              <div className={styles.tipCard}>
                <h3>🍱 グルメ情報</h3>
                <p>
                  温泉たまご、地元野菜の温泉蒸し、
                  山菜料理など、温泉地ならではの料理を堪能。
                </p>
              </div>
            </div>
          </section>

          <section className={styles.nearby}>
            <h2>周辺の観光スポット</h2>
            <div className={styles.nearbyGrid}>
              <Link href="/tourism/spots/sakura-falls" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>💦</div>
                <h3>桜滝</h3>
                <p>車で20分</p>
              </Link>
              <Link href="/tourism/spots/minami-sakura-mountain" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>🏔️</div>
                <h3>南桜山</h3>
                <p>ロープウェイで15分</p>
              </Link>
              <Link href="/tourism/spots/hotaru-valley" className={styles.nearbyCard}>
                <div className={styles.nearbyIcon}>✨</div>
                <h3>ホタルの里</h3>
                <p>車で15分</p>
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