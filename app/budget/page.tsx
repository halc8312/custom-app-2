'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function BudgetPage() {
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const budgetData = {
    '2024': {
      revenue: {
        total: 4567.8,
        items: [
          { name: '県税', amount: 1890.2, percentage: 41.4 },
          { name: '地方交付税', amount: 1234.5, percentage: 27.0 },
          { name: '国庫支出金', amount: 678.9, percentage: 14.9 },
          { name: '県債', amount: 456.7, percentage: 10.0 },
          { name: 'その他', amount: 307.5, percentage: 6.7 }
        ]
      },
      expenditure: {
        total: 4567.8,
        items: [
          { name: '民生費', amount: 1370.3, percentage: 30.0 },
          { name: '教育費', amount: 913.6, percentage: 20.0 },
          { name: '土木費', amount: 685.2, percentage: 15.0 },
          { name: '総務費', amount: 456.8, percentage: 10.0 },
          { name: '衛生費', amount: 365.4, percentage: 8.0 },
          { name: '商工費', amount: 274.1, percentage: 6.0 },
          { name: '農林水産業費', amount: 228.4, percentage: 5.0 },
          { name: 'その他', amount: 274.0, percentage: 6.0 }
        ]
      }
    },
    '2023': {
      revenue: {
        total: 4456.7,
        items: [
          { name: '県税', amount: 1823.4, percentage: 40.9 },
          { name: '地方交付税', amount: 1223.4, percentage: 27.5 },
          { name: '国庫支出金', amount: 667.8, percentage: 15.0 },
          { name: '県債', amount: 445.7, percentage: 10.0 },
          { name: 'その他', amount: 296.4, percentage: 6.6 }
        ]
      },
      expenditure: {
        total: 4456.7,
        items: [
          { name: '民生費', amount: 1336.0, percentage: 30.0 },
          { name: '教育費', amount: 891.3, percentage: 20.0 },
          { name: '土木費', amount: 668.5, percentage: 15.0 },
          { name: '総務費', amount: 445.7, percentage: 10.0 },
          { name: '衛生費', amount: 356.5, percentage: 8.0 },
          { name: '商工費', amount: 267.4, percentage: 6.0 },
          { name: '農林水産業費', amount: 222.8, percentage: 5.0 },
          { name: 'その他', amount: 268.5, percentage: 6.0 }
        ]
      }
    }
  }

  const currentBudget = budgetData[selectedYear as keyof typeof budgetData]

  const financialIndicators = {
    '実質収支比率': { value: '3.2%', trend: 'up', description: '標準財政規模に対する実質収支の割合' },
    '経常収支比率': { value: '92.5%', trend: 'down', description: '財政構造の弾力性を示す指標' },
    '実質公債費比率': { value: '11.8%', trend: 'down', description: '公債費の財政負担を示す指標' },
    '将来負担比率': { value: '156.7%', trend: 'down', description: '将来の財政負担を示す指標' }
  }

  const majorProjects = [
    {
      name: '桜花環状道路整備事業',
      totalBudget: 1234.5,
      fy2024: 234.5,
      progress: 45,
      completion: '2027年度'
    },
    {
      name: 'スマートシティ推進事業',
      totalBudget: 567.8,
      fy2024: 123.4,
      progress: 60,
      completion: '2026年度'
    },
    {
      name: '学校施設長寿命化改修',
      totalBudget: 345.6,
      fy2024: 89.0,
      progress: 70,
      completion: '2025年度'
    },
    {
      name: '防災インフラ強化事業',
      totalBudget: 789.0,
      fy2024: 156.7,
      progress: 35,
      completion: '2028年度'
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>予算・財政</h1>
        <p className={styles.subtitle}>
          桜県の予算編成と財政状況について、わかりやすく公開しています
        </p>
      </div>

      <nav className={styles.breadcrumb}>
        <Link href="/">ホーム</Link>
        <span className={styles.separator}>/</span>
        <span>予算・財政</span>
      </nav>

      <div className={styles.content}>
        <div className={styles.yearSelector}>
          <h2>年度選択</h2>
          <div className={styles.yearButtons}>
            {Object.keys(budgetData).map(year => (
              <button
                key={year}
                className={`${styles.yearButton} ${selectedYear === year ? styles.active : ''}`}
                onClick={() => setSelectedYear(year)}
              >
                {year}年度
              </button>
            ))}
          </div>
        </div>

        <section className={styles.budgetOverview}>
          <h2>{selectedYear}年度 当初予算の概要</h2>
          <div className={styles.totalBudget}>
            <div className={styles.totalCard}>
              <h3>歳入総額</h3>
              <p className={styles.totalAmount}>{currentBudget.revenue.total.toLocaleString()}億円</p>
            </div>
            <div className={styles.totalCard}>
              <h3>歳出総額</h3>
              <p className={styles.totalAmount}>{currentBudget.expenditure.total.toLocaleString()}億円</p>
            </div>
          </div>

          <div className={styles.budgetDetails}>
            <div className={styles.budgetSection}>
              <h3>歳入の内訳</h3>
              <div className={styles.budgetChart}>
                {currentBudget.revenue.items.map((item, index) => (
                  <div key={index} className={styles.budgetItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemAmount}>{item.amount.toLocaleString()}億円</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className={styles.percentage}>{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.budgetSection}>
              <h3>歳出の内訳</h3>
              <div className={styles.budgetChart}>
                {currentBudget.expenditure.items.map((item, index) => (
                  <div key={index} className={styles.budgetItem}>
                    <div className={styles.itemHeader}>
                      <span className={styles.itemName}>{item.name}</span>
                      <span className={styles.itemAmount}>{item.amount.toLocaleString()}億円</span>
                    </div>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className={styles.percentage}>{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.financialIndicators}>
          <h2>財政指標</h2>
          <div className={styles.indicatorGrid}>
            {Object.entries(financialIndicators).map(([name, data]) => (
              <div key={name} className={styles.indicatorCard}>
                <h3>{name}</h3>
                <div className={styles.indicatorValue}>
                  <span className={styles.value}>{data.value}</span>
                  <span className={`${styles.trend} ${styles[data.trend]}`}>
                    {data.trend === 'up' ? '↑' : '↓'}
                  </span>
                </div>
                <p className={styles.description}>{data.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.majorProjects}>
          <h2>主要事業</h2>
          <div className={styles.projectList}>
            {majorProjects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <h3>{project.name}</h3>
                <div className={styles.projectInfo}>
                  <div className={styles.projectDetail}>
                    <span>総事業費</span>
                    <strong>{project.totalBudget.toLocaleString()}億円</strong>
                  </div>
                  <div className={styles.projectDetail}>
                    <span>{selectedYear}年度予算</span>
                    <strong>{project.fy2024.toLocaleString()}億円</strong>
                  </div>
                  <div className={styles.projectDetail}>
                    <span>完成予定</span>
                    <strong>{project.completion}</strong>
                  </div>
                </div>
                <div className={styles.projectProgress}>
                  <div className={styles.progressHeader}>
                    <span>進捗率</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.documents}>
          <h2>予算関連資料</h2>
          <div className={styles.documentGrid}>
            <div className={styles.documentCard}>
              <h3>予算書・予算説明書</h3>
              <ul className={styles.documentList}>
                <li>
                  <a href="#">令和6年度当初予算書（PDF）</a>
                </li>
                <li>
                  <a href="#">令和6年度予算の概要（PDF）</a>
                </li>
                <li>
                  <a href="#">主要事業一覧（PDF）</a>
                </li>
              </ul>
            </div>
            <div className={styles.documentCard}>
              <h3>財政状況資料</h3>
              <ul className={styles.documentList}>
                <li>
                  <a href="#">財政状況等一覧表（PDF）</a>
                </li>
                <li>
                  <a href="#">健全化判断比率等の状況（PDF）</a>
                </li>
                <li>
                  <a href="#">中期財政見通し（PDF）</a>
                </li>
              </ul>
            </div>
            <div className={styles.documentCard}>
              <h3>決算資料</h3>
              <ul className={styles.documentList}>
                <li>
                  <a href="#">令和4年度決算書（PDF）</a>
                </li>
                <li>
                  <a href="#">令和4年度決算の概要（PDF）</a>
                </li>
                <li>
                  <a href="#">令和4年度主要施策の成果（PDF）</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>お問い合わせ</h2>
          <div className={styles.contactInfo}>
            <p>予算・財政に関するお問い合わせは、下記までご連絡ください。</p>
            <div className={styles.contactDetails}>
              <h3>総務部財政課</h3>
              <p>電話：023-456-7890（直通）</p>
              <p>FAX：023-456-7891</p>
              <p>メール：zaisei@pref.sakura.lg.jp</p>
              <p>受付時間：平日 8:30〜17:15</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}