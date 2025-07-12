import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'
import economyData from '@/lib/economy.json'

export default function EconomyPage() {
  const { gdp, gdp_by_industry, employment } = economyData

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <h1 className={styles.pageTitle}>桜県の経済・産業</h1>

          <section className={styles.section}>
            <h2>経済概要</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <h3>県内総生産（GDP）</h3>
                <p>{gdp.total_billion_yen.toLocaleString()}億円</p>
                <span className={styles.subInfo}>全国第{gdp.rank_national}位</span>
              </div>
              <div className={styles.infoItem}>
                <h3>1人当たり県民所得</h3>
                <p>{gdp.per_capita_million_yen}百万円</p>
              </div>
              <div className={styles.infoItem}>
                <h3>経済成長率（実質）</h3>
                <p>{gdp.real_growth_rate}%</p>
                <span className={styles.subInfo}>前年比</span>
              </div>
              <div className={styles.infoItem}>
                <h3>就業者数</h3>
                <p>{employment.total_employed.toLocaleString()}人</p>
                <span className={styles.subInfo}>失業率 {employment.unemployment_rate}%</span>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>産業別GDP構成</h2>
            <div className={styles.industryBreakdown}>
              <div className={styles.sectorCard}>
                <h3>第一次産業</h3>
                <div className={styles.percentage}>{gdp_by_industry.primary_sector.agriculture_forestry_fishery.percentage}%</div>
                <p>{gdp_by_industry.primary_sector.agriculture_forestry_fishery.value_billion_yen.toLocaleString()}億円</p>
                <ul className={styles.subSectorList}>
                  <li>農業: {gdp_by_industry.primary_sector.agriculture_forestry_fishery.sub_sectors.agriculture}億円</li>
                  <li>林業: {gdp_by_industry.primary_sector.agriculture_forestry_fishery.sub_sectors.forestry}億円</li>
                  <li>水産業: {gdp_by_industry.primary_sector.agriculture_forestry_fishery.sub_sectors.fishery}億円</li>
                </ul>
              </div>

              <div className={styles.sectorCard}>
                <h3>第二次産業</h3>
                <div className={styles.percentage}>{gdp_by_industry.secondary_sector.total.percentage}%</div>
                <p>{gdp_by_industry.secondary_sector.total.value_billion_yen.toLocaleString()}億円</p>
                <div className={styles.subSectorDetail}>
                  <h4>製造業</h4>
                  <p>{gdp_by_industry.secondary_sector.manufacturing.value_billion_yen.toLocaleString()}億円 ({gdp_by_industry.secondary_sector.manufacturing.percentage}%)</p>
                  <div className={styles.productList}>
                    <strong>主要製品：</strong>
                    {gdp_by_industry.secondary_sector.manufacturing.major_products.join('、')}
                  </div>
                </div>
                <div className={styles.subSectorDetail}>
                  <h4>建設業</h4>
                  <p>{gdp_by_industry.secondary_sector.construction.value_billion_yen.toLocaleString()}億円 ({gdp_by_industry.secondary_sector.construction.percentage}%)</p>
                </div>
              </div>

              <div className={styles.sectorCard}>
                <h3>第三次産業</h3>
                <div className={styles.percentage}>{gdp_by_industry.tertiary_sector.total.percentage}%</div>
                <p>{gdp_by_industry.tertiary_sector.total.value_billion_yen.toLocaleString()}億円</p>
                <div className={styles.tertiaryGrid}>
                  <div className={styles.tertiaryItem}>
                    <span>卸売・小売業</span>
                    <strong>{gdp_by_industry.tertiary_sector.wholesale_retail.percentage}%</strong>
                  </div>
                  <div className={styles.tertiaryItem}>
                    <span>不動産業</span>
                    <strong>{gdp_by_industry.tertiary_sector.real_estate.percentage}%</strong>
                  </div>
                  <div className={styles.tertiaryItem}>
                    <span>金融・保険業</span>
                    <strong>{gdp_by_industry.tertiary_sector.finance_insurance.percentage}%</strong>
                  </div>
                  <div className={styles.tertiaryItem}>
                    <span>情報通信業</span>
                    <strong>{gdp_by_industry.tertiary_sector.information_communication.percentage}%</strong>
                  </div>
                  <div className={styles.tertiaryItem}>
                    <span>医療・福祉</span>
                    <strong>{gdp_by_industry.tertiary_sector.medical_welfare.percentage}%</strong>
                  </div>
                  <div className={styles.tertiaryItem}>
                    <span>その他サービス</span>
                    <strong>{gdp_by_industry.tertiary_sector.other_services.percentage}%</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2>産業別就業者数</h2>
            <div className={styles.employmentGrid}>
              {employment.by_industry.slice(0, 6).map((industry, index) => (
                <div key={index} className={styles.employmentCard}>
                  <h3>{industry.industry}</h3>
                  <p className={styles.employeeCount}>{industry.employees.toLocaleString()}人</p>
                  <div className={styles.employmentBar}>
                    <div 
                      className={styles.employmentBarFill} 
                      style={{ width: `${industry.percentage}%` }}
                    />
                  </div>
                  <span className={styles.employmentPercentage}>{industry.percentage}%</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2>経済の特徴</h2>
            <div className={styles.featureGrid}>
              <div className={styles.featureCard}>
                <h3>バランスの取れた産業構造</h3>
                <p>
                  製造業を中心とした第二次産業と、サービス業を中心とした第三次産業がバランス良く発展。
                  特に電子部品・デバイス製造が県経済を牽引。
                </p>
              </div>
              <div className={styles.featureCard}>
                <h3>首都圏アクセスの優位性</h3>
                <p>
                  東京都と神奈川県に隣接する立地を活かし、物流・商業の拠点として発展。
                  多くの企業が桜県に拠点を設置。
                </p>
              </div>
              <div className={styles.featureCard}>
                <h3>観光産業の成長</h3>
                <p>
                  年間3,456万人の観光客が訪れ、観光関連産業が着実に成長。
                  桜の名所や温泉、歴史的建造物が人気。
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}