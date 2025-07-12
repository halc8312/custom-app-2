import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import citiesData from '@/lib/cities.json'

export default function SakuraKaPage() {
  const city = citiesData.cities.find(c => c.id === '13201')
  
  if (!city) return null

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <a href="/">ホーム</a> &gt; <a href="/about">桜県について</a> &gt; 桜花市
          </div>

          <h1 className={styles.pageTitle}>
            {city.name.japanese}
            <span className={styles.titleRomaji}>（{city.name.romaji}）</span>
          </h1>

          <div className={styles.heroImage}>
            <div className={styles.heroOverlay}>
              <p className={styles.heroText}>県庁所在地・政治経済の中心</p>
            </div>
          </div>

          <section className={styles.section}>
            <h2>市の概要</h2>
            <p className={styles.description}>
              {city.characteristics}
            </p>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>人口</h3>
                <p className={styles.mainValue}>{city.population.total.toLocaleString()}人</p>
                <span className={styles.subInfo}>世帯数: {city.population.households.toLocaleString()}</span>
              </div>
              <div className={styles.infoItem}>
                <h3>面積</h3>
                <p className={styles.mainValue}>{city.area_km2} km²</p>
                <span className={styles.subInfo}>人口密度: {city.population.density_per_km2}人/km²</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市制施行</h3>
                <p className={styles.mainValue}>{new Date(city.established).getFullYear()}年</p>
                <span className={styles.subInfo}>{city.type}</span>
              </div>
              <div className={styles.infoItem}>
                <h3>市長</h3>
                <p className={styles.mainValue}>{city.mayor.name}</p>
                <span className={styles.subInfo}>{city.mayor.party}</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>地区一覧</h2>
            <div className={styles.districtGrid}>
              {city.districts.map((district, index) => (
                <div key={index} className={styles.districtCard}>
                  <h3>{district}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>市のシンボル</h2>
            <div className={styles.symbolGrid}>
              <div className={styles.symbolItem}>
                <div className={styles.symbolIcon}>🌸</div>
                <h3>市の花</h3>
                <p>{city.symbols.flower}</p>
              </div>
              <div className={styles.symbolItem}>
                <div className={styles.symbolIcon}>🌳</div>
                <h3>市の木</h3>
                <p>{city.symbols.tree}</p>
              </div>
              <div className={styles.symbolItem}>
                <div className={styles.symbolIcon}>🐦</div>
                <h3>市の鳥</h3>
                <p>{city.symbols.bird}</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要産業</h2>
            <div className={styles.industryGrid}>
              {city.main_industries.map((industry, index) => (
                <div key={index} className={styles.industryCard}>
                  <h3>{industry}</h3>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>交通アクセス</h2>
            <div className={styles.transportGrid}>
              <div className={styles.transportCard}>
                <h3>鉄道</h3>
                <p className={styles.transportValue}>{city.transportation.railway_lines}路線</p>
                <span className={styles.transportDetail}>{city.transportation.stations}駅</span>
              </div>
              <div className={styles.transportCard}>
                <h3>バス</h3>
                <p className={styles.transportValue}>{city.transportation.bus_routes}路線</p>
              </div>
              <div className={styles.transportCard}>
                <h3>高速道路</h3>
                <p className={styles.transportValue}>{city.transportation.highways}路線</p>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>主要施設</h2>
            <div className={styles.facilityGrid}>
              {city.notable_facilities.map((facility, index) => (
                <div key={index} className={styles.facilityCard}>
                  <p>{facility}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>位置情報</h2>
            <div className={styles.locationInfo}>
              <p>緯度: {city.coordinates.latitude}° / 経度: {city.coordinates.longitude}°</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}