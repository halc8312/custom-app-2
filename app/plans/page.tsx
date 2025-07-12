'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function PlansPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const planCategories = [
    { id: 'all', name: 'すべて', icon: '📋' },
    { id: 'comprehensive', name: '総合計画', icon: '🎯' },
    { id: 'industry', name: '産業・経済', icon: '🏭' },
    { id: 'welfare', name: '福祉・医療', icon: '🏥' },
    { id: 'education', name: '教育・文化', icon: '🎓' },
    { id: 'environment', name: '環境・エネルギー', icon: '🌱' },
    { id: 'infrastructure', name: 'インフラ・まちづくり', icon: '🏗️' }
  ]

  const plans = [
    {
      id: 1,
      category: 'comprehensive',
      title: '第5次桜県総合計画',
      subtitle: '「花ひらく未来、みんなで創る桜県」',
      period: '2023年度～2032年度',
      status: '実施中',
      progress: 20,
      description: '10年後の桜県の目指すべき姿と、その実現に向けた施策の基本的方向を示す最上位計画',
      keyPoints: [
        '持続可能な地域経済の構築',
        '誰もが活躍できる共生社会の実現',
        'DXによる県民サービスの向上',
        '脱炭素社会への転換'
      ]
    },
    {
      id: 2,
      category: 'industry',
      title: '桜県産業振興ビジョン',
      subtitle: 'イノベーションで拓く産業の未来',
      period: '2024年度～2028年度',
      status: '実施中',
      progress: 15,
      description: '県内産業の競争力強化と新産業創出に向けた戦略的な取り組みを推進',
      keyPoints: [
        'AI・ロボティクス産業の集積',
        'スタートアップエコシステムの構築',
        '伝統産業のDX推進',
        '観光産業の高付加価値化'
      ]
    },
    {
      id: 3,
      category: 'welfare',
      title: '桜県地域福祉支援計画',
      subtitle: '支え合い、誰一人取り残さない地域へ',
      period: '2023年度～2027年度',
      status: '実施中',
      progress: 40,
      description: '地域共生社会の実現に向けて、市町村と連携した福祉施策を展開',
      keyPoints: [
        '地域包括ケアシステムの深化',
        '子育て支援の充実',
        '障害者の自立支援強化',
        '高齢者の社会参加促進'
      ]
    },
    {
      id: 4,
      category: 'education',
      title: '桜県教育振興基本計画',
      subtitle: '未来を創る人づくり',
      period: '2023年度～2027年度',
      status: '実施中',
      progress: 35,
      description: '次世代を担う子どもたちの可能性を最大限に引き出す教育環境の整備',
      keyPoints: [
        'ICT教育の推進',
        'グローバル人材の育成',
        '個別最適な学びの実現',
        '教職員の働き方改革'
      ]
    },
    {
      id: 5,
      category: 'environment',
      title: '桜県ゼロカーボン戦略',
      subtitle: '2050年カーボンニュートラルの実現',
      period: '2022年度～2050年度',
      status: '実施中',
      progress: 10,
      description: '温室効果ガス排出実質ゼロを目指し、環境と経済の好循環を創出',
      keyPoints: [
        '再生可能エネルギーの導入拡大',
        '省エネルギーの徹底',
        '森林吸収源対策の推進',
        'グリーンイノベーションの促進'
      ]
    },
    {
      id: 6,
      category: 'infrastructure',
      title: '桜県国土強靱化地域計画',
      subtitle: '災害に強い県土づくり',
      period: '2024年度～2028年度',
      status: '策定中',
      progress: 80,
      description: '大規模自然災害に備えた強靱な県土づくりと地域防災力の向上',
      keyPoints: [
        '防災インフラの整備・更新',
        '避難体制の強化',
        '災害情報システムの高度化',
        '地域防災組織の活性化'
      ]
    }
  ]

  const filteredPlans = selectedCategory === 'all' 
    ? plans 
    : plans.filter(plan => plan.category === selectedCategory)

  const getStatusColor = (status: string) => {
    switch (status) {
      case '実施中': return styles.statusActive
      case '策定中': return styles.statusDraft
      case '評価中': return styles.statusReview
      default: return ''
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>計画・施策</h1>
        <p className={styles.subtitle}>
          桜県の未来を創る各種計画・施策をご紹介します
        </p>
      </div>

      <nav className={styles.breadcrumb}>
        <Link href="/">ホーム</Link>
        <span className={styles.separator}>/</span>
        <span>計画・施策</span>
      </nav>

      <div className={styles.content}>
        <div className={styles.categoryFilter}>
          <h2>カテゴリー</h2>
          <div className={styles.categoryButtons}>
            {planCategories.map(category => (
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
        </div>

        <section className={styles.plansSection}>
          <h2>
            {selectedCategory === 'all' 
              ? '全ての計画・施策' 
              : planCategories.find(c => c.id === selectedCategory)?.name}
          </h2>
          <div className={styles.plansGrid}>
            {filteredPlans.map(plan => (
              <article key={plan.id} className={styles.planCard}>
                <div className={styles.planHeader}>
                  <h3 className={styles.planTitle}>{plan.title}</h3>
                  <span className={`${styles.status} ${getStatusColor(plan.status)}`}>
                    {plan.status}
                  </span>
                </div>
                <p className={styles.planSubtitle}>{plan.subtitle}</p>
                <p className={styles.planPeriod}>{plan.period}</p>
                <p className={styles.planDescription}>{plan.description}</p>
                
                <div className={styles.keyPoints}>
                  <h4>主な取り組み</h4>
                  <ul>
                    {plan.keyPoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

                <div className={styles.planProgress}>
                  <div className={styles.progressHeader}>
                    <span>進捗状況</span>
                    <span>{plan.progress}%</span>
                  </div>
                  <div className={styles.progressBar}>
                    <div 
                      className={styles.progressFill}
                      style={{ width: `${plan.progress}%` }}
                    />
                  </div>
                </div>

                <div className={styles.planActions}>
                  <a href="#" className={styles.detailLink}>
                    詳細を見る
                  </a>
                  <a href="#" className={styles.downloadLink}>
                    PDFダウンロード
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.timeline}>
          <h2>計画策定スケジュール</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025年4月</div>
              <div className={styles.timelineContent}>
                <h3>桜県デジタル田園都市構想</h3>
                <p>策定開始予定</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025年7月</div>
              <div className={styles.timelineContent}>
                <h3>第3次桜県観光振興計画</h3>
                <p>パブリックコメント実施予定</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2025年10月</div>
              <div className={styles.timelineContent}>
                <h3>桜県スポーツ推進計画</h3>
                <p>策定完了予定</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2026年3月</div>
              <div className={styles.timelineContent}>
                <h3>第5次桜県総合計画</h3>
                <p>前期実施計画の評価</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.participation}>
          <h2>県民参加</h2>
          <div className={styles.participationGrid}>
            <div className={styles.participationCard}>
              <h3>パブリックコメント</h3>
              <p>計画策定過程で県民の皆様のご意見を募集しています</p>
              <a href="#" className={styles.participationLink}>
                実施中の意見募集
              </a>
            </div>
            <div className={styles.participationCard}>
              <h3>審議会・委員会</h3>
              <p>各種計画の策定・評価に関する審議会情報</p>
              <a href="#" className={styles.participationLink}>
                会議情報・議事録
              </a>
            </div>
            <div className={styles.participationCard}>
              <h3>県民ワークショップ</h3>
              <p>対話を通じて県民の声を計画に反映</p>
              <a href="#" className={styles.participationLink}>
                開催予定・報告書
              </a>
            </div>
          </div>
        </section>

        <section className={styles.evaluation}>
          <h2>計画の評価・検証</h2>
          <div className={styles.evaluationInfo}>
            <p>
              桜県では、PDCAサイクルに基づき、各計画の進捗状況を定期的に評価・検証しています。
              評価結果は県民の皆様に公表し、施策の改善に活用しています。
            </p>
            <div className={styles.evaluationLinks}>
              <a href="#" className={styles.evaluationLink}>
                <span className={styles.linkIcon}>📊</span>
                <div>
                  <h4>評価報告書</h4>
                  <p>各計画の年次評価報告書</p>
                </div>
              </a>
              <a href="#" className={styles.evaluationLink}>
                <span className={styles.linkIcon}>📈</span>
                <div>
                  <h4>KPI達成状況</h4>
                  <p>重要業績評価指標の進捗</p>
                </div>
              </a>
              <a href="#" className={styles.evaluationLink}>
                <span className={styles.linkIcon}>🔍</span>
                <div>
                  <h4>外部評価</h4>
                  <p>第三者による評価結果</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>お問い合わせ</h2>
          <div className={styles.contactInfo}>
            <p>計画・施策に関するお問い合わせは、下記までご連絡ください。</p>
            <div className={styles.contactDetails}>
              <h3>企画部企画課</h3>
              <p>電話：023-456-7894（直通）</p>
              <p>FAX：023-456-7895</p>
              <p>メール：kikaku@pref.sakura.lg.jp</p>
              <p>受付時間：平日 8:30〜17:15</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}