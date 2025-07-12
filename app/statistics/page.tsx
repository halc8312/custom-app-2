'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function StatisticsPage() {
  const [selectedCategory, setSelectedCategory] = useState('population')
  const [selectedSubCategory, setSelectedSubCategory] = useState('overview')

  const categories = [
    { id: 'population', name: '人口・世帯', icon: '👥' },
    { id: 'economy', name: '経済・産業', icon: '📊' },
    { id: 'education', name: '教育・文化', icon: '🎓' },
    { id: 'health', name: '医療・福祉', icon: '🏥' },
    { id: 'environment', name: '環境・エネルギー', icon: '🌱' },
    { id: 'safety', name: '安全・防災', icon: '🛡️' }
  ]

  const populationData = {
    total: 2854327,
    male: 1398567,
    female: 1455760,
    households: 1245678,
    density: 1161.6,
    birthRate: 7.8,
    deathRate: 11.2,
    elderlyRatio: 25.8
  }

  const economyData = {
    gdp: 11845.6,
    gdpGrowth: 2.3,
    unemployment: 2.3,
    averageIncome: 5.23,
    companies: 45678,
    employees: 1498234
  }

  const educationData = {
    schools: {
      elementary: 234,
      junior: 98,
      high: 67,
      university: 8
    },
    students: {
      elementary: 145678,
      junior: 78901,
      high: 67890,
      university: 34567
    },
    literacyRate: 99.8
  }

  const renderPopulationStats = () => (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <h3>総人口</h3>
        <p className={styles.statValue}>{populationData.total.toLocaleString()}</p>
        <p className={styles.statLabel}>人</p>
        <div className={styles.statDetail}>
          <span>男性: {populationData.male.toLocaleString()}人</span>
          <span>女性: {populationData.female.toLocaleString()}人</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>世帯数</h3>
        <p className={styles.statValue}>{populationData.households.toLocaleString()}</p>
        <p className={styles.statLabel}>世帯</p>
        <div className={styles.statDetail}>
          <span>平均世帯人員: 2.29人</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>人口密度</h3>
        <p className={styles.statValue}>{populationData.density}</p>
        <p className={styles.statLabel}>人/km²</p>
        <div className={styles.statDetail}>
          <span>全国平均: 338.2人/km²</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>高齢化率</h3>
        <p className={styles.statValue}>{populationData.elderlyRatio}</p>
        <p className={styles.statLabel}>%</p>
        <div className={styles.statDetail}>
          <span>65歳以上: 736,417人</span>
        </div>
      </div>
    </div>
  )

  const renderEconomyStats = () => (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <h3>県内総生産（GDP）</h3>
        <p className={styles.statValue}>{economyData.gdp.toLocaleString()}</p>
        <p className={styles.statLabel}>億円</p>
        <div className={styles.statDetail}>
          <span>成長率: +{economyData.gdpGrowth}%</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>失業率</h3>
        <p className={styles.statValue}>{economyData.unemployment}</p>
        <p className={styles.statLabel}>%</p>
        <div className={styles.statDetail}>
          <span>全国平均: 2.6%</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>平均年収</h3>
        <p className={styles.statValue}>{economyData.averageIncome}</p>
        <p className={styles.statLabel}>百万円</p>
        <div className={styles.statDetail}>
          <span>中央値: 4.56百万円</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>事業所数</h3>
        <p className={styles.statValue}>{economyData.companies.toLocaleString()}</p>
        <p className={styles.statLabel}>事業所</p>
        <div className={styles.statDetail}>
          <span>従業者数: {economyData.employees.toLocaleString()}人</span>
        </div>
      </div>
    </div>
  )

  const renderEducationStats = () => (
    <div className={styles.statsGrid}>
      <div className={styles.statCard}>
        <h3>小学校</h3>
        <p className={styles.statValue}>{educationData.schools.elementary}</p>
        <p className={styles.statLabel}>校</p>
        <div className={styles.statDetail}>
          <span>児童数: {educationData.students.elementary.toLocaleString()}人</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>中学校</h3>
        <p className={styles.statValue}>{educationData.schools.junior}</p>
        <p className={styles.statLabel}>校</p>
        <div className={styles.statDetail}>
          <span>生徒数: {educationData.students.junior.toLocaleString()}人</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>高等学校</h3>
        <p className={styles.statValue}>{educationData.schools.high}</p>
        <p className={styles.statLabel}>校</p>
        <div className={styles.statDetail}>
          <span>生徒数: {educationData.students.high.toLocaleString()}人</span>
        </div>
      </div>

      <div className={styles.statCard}>
        <h3>大学・短期大学</h3>
        <p className={styles.statValue}>{educationData.schools.university}</p>
        <p className={styles.statLabel}>校</p>
        <div className={styles.statDetail}>
          <span>学生数: {educationData.students.university.toLocaleString()}人</span>
        </div>
      </div>
    </div>
  )

  const renderCategoryContent = () => {
    switch (selectedCategory) {
      case 'population':
        return renderPopulationStats()
      case 'economy':
        return renderEconomyStats()
      case 'education':
        return renderEducationStats()
      default:
        return renderPopulationStats()
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>統計情報</h1>
        <p className={styles.subtitle}>
          桜県の各種統計データを分かりやすく公開しています
        </p>
      </div>

      <nav className={styles.breadcrumb}>
        <Link href="/">ホーム</Link>
        <span className={styles.separator}>/</span>
        <span>統計情報</span>
      </nav>

      <div className={styles.content}>
        <div className={styles.categoryNav}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className={styles.categoryIcon}>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        <section className={styles.statsSection}>
          <h2 className={styles.sectionTitle}>
            {categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          {renderCategoryContent()}
        </section>

        <section className={styles.charts}>
          <h2>データビジュアライゼーション</h2>
          <div className={styles.chartGrid}>
            <div className={styles.chartCard}>
              <h3>人口推移</h3>
              <div className={styles.chartPlaceholder}>
                <p>1920年: 890,123人</p>
                <p>1950年: 1,234,567人</p>
                <p>1980年: 2,345,678人</p>
                <p>2000年: 2,789,012人</p>
                <p>2020年: 2,856,789人</p>
                <p>2025年: 2,854,327人</p>
              </div>
            </div>

            <div className={styles.chartCard}>
              <h3>年齢別人口構成</h3>
              <div className={styles.chartPlaceholder}>
                <p>0-14歳: 11.8%</p>
                <p>15-64歳: 62.4%</p>
                <p>65歳以上: 25.8%</p>
              </div>
            </div>

            <div className={styles.chartCard}>
              <h3>産業別就業者数</h3>
              <div className={styles.chartPlaceholder}>
                <p>製造業: 19.9%</p>
                <p>卸売・小売業: 15.7%</p>
                <p>医療・福祉: 12.5%</p>
                <p>情報通信業: 9.0%</p>
                <p>その他: 42.9%</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.download}>
          <h2>統計データのダウンロード</h2>
          <div className={styles.downloadGrid}>
            <div className={styles.downloadCard}>
              <h3>統計年鑑</h3>
              <p>桜県の総合的な統計データを収録</p>
              <div className={styles.downloadLinks}>
                <a href="#" className={styles.downloadLink}>
                  2024年版（PDF）
                </a>
                <a href="#" className={styles.downloadLink}>
                  2024年版（Excel）
                </a>
              </div>
            </div>

            <div className={styles.downloadCard}>
              <h3>人口統計</h3>
              <p>人口・世帯に関する詳細データ</p>
              <div className={styles.downloadLinks}>
                <a href="#" className={styles.downloadLink}>
                  最新データ（CSV）
                </a>
                <a href="#" className={styles.downloadLink}>
                  時系列データ（Excel）
                </a>
              </div>
            </div>

            <div className={styles.downloadCard}>
              <h3>経済統計</h3>
              <p>経済・産業に関する各種統計</p>
              <div className={styles.downloadLinks}>
                <a href="#" className={styles.downloadLink}>
                  県民経済計算（PDF）
                </a>
                <a href="#" className={styles.downloadLink}>
                  産業連関表（Excel）
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.openData}>
          <h2>オープンデータ</h2>
          <div className={styles.openDataInfo}>
            <p>
              桜県では、行政の透明性向上と地域の課題解決を目的として、
              各種統計データをオープンデータとして公開しています。
            </p>
            <div className={styles.openDataFeatures}>
              <div className={styles.feature}>
                <h3>利用可能な形式</h3>
                <ul>
                  <li>CSV形式</li>
                  <li>JSON形式</li>
                  <li>Excel形式</li>
                  <li>API提供</li>
                </ul>
              </div>
              <div className={styles.feature}>
                <h3>ライセンス</h3>
                <p>クリエイティブ・コモンズ・ライセンス 表示 4.0 国際</p>
                <p>（CC BY 4.0）</p>
              </div>
            </div>
            <a href="#" className={styles.openDataLink}>
              オープンデータポータルサイトへ
            </a>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>お問い合わせ</h2>
          <div className={styles.contactInfo}>
            <p>統計情報に関するお問い合わせは、下記までご連絡ください。</p>
            <div className={styles.contactDetails}>
              <h3>企画部統計課</h3>
              <p>電話：023-456-7892（直通）</p>
              <p>FAX：023-456-7893</p>
              <p>メール：toukei@pref.sakura.lg.jp</p>
              <p>受付時間：平日 8:30〜17:15</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}