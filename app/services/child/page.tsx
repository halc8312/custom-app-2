'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

type ServiceType = 'nursery' | 'allowance' | 'support-search' | 'education-consultation'
type Step = 'select' | 'form' | 'confirm' | 'complete'

interface NurseryApplicationData {
  childName: string
  childBirthDate: string
  childGender: string
  parentName: string
  parentPhone: string
  parentEmail: string
  address: string
  preferredNursery1: string
  preferredNursery2: string
  preferredNursery3: string
  desiredStartDate: string
  careReason: string
  workingHours: string
  needExtendedCare: boolean
  specialNeeds: string
}

interface AllowanceApplicationData {
  applicantName: string
  applicantRelation: string
  address: string
  phone: string
  email: string
  childrenCount: string
  children: Array<{
    name: string
    birthDate: string
    school: string
  }>
  bankName: string
  branchName: string
  accountType: string
  accountNumber: string
  accountHolder: string
}

interface ConsultationData {
  parentName: string
  childName: string
  childAge: string
  school: string
  phone: string
  email: string
  consultationType: string
  preferredDate: string
  preferredTime: string
  consultationMethod: string
  concern: string
}

export default function ChildServicePage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [currentStep, setCurrentStep] = useState<Step>('select')
  const [applicationNumber, setApplicationNumber] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedSupportService, setSelectedSupportService] = useState<string | null>(null)

  // 保育園申込データ
  const [nurseryData, setNurseryData] = useState<NurseryApplicationData>({
    childName: '',
    childBirthDate: '',
    childGender: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    preferredNursery1: '',
    preferredNursery2: '',
    preferredNursery3: '',
    desiredStartDate: '',
    careReason: '',
    workingHours: '',
    needExtendedCare: false,
    specialNeeds: ''
  })

  // 児童手当申請データ
  const [allowanceData, setAllowanceData] = useState<AllowanceApplicationData>({
    applicantName: '',
    applicantRelation: '',
    address: '',
    phone: '',
    email: '',
    childrenCount: '1',
    children: [{ name: '', birthDate: '', school: '' }],
    bankName: '',
    branchName: '',
    accountType: '',
    accountNumber: '',
    accountHolder: ''
  })

  // 教育相談データ
  const [consultationData, setConsultationData] = useState<ConsultationData>({
    parentName: '',
    childName: '',
    childAge: '',
    school: '',
    phone: '',
    email: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    consultationMethod: '',
    concern: ''
  })

  const supportServices = [
    { id: 'after-school', name: '学童保育', description: '放課後の児童預かりサービス', target: '小学生' },
    { id: 'child-center', name: '子育て支援センター', description: '親子で遊べる交流施設', target: '未就学児と保護者' },
    { id: 'temporary-care', name: '一時預かり', description: '一時的な保育サービス', target: '生後6ヶ月〜就学前' },
    { id: 'family-support', name: 'ファミリーサポート', description: '地域の相互援助活動', target: '全年齢' },
    { id: 'sick-child', name: '病児・病後児保育', description: '体調不良時の保育サービス', target: '生後6ヶ月〜小学生' },
    { id: 'development', name: '発達支援', description: '発達に心配のあるお子さんの支援', target: '0歳〜18歳' }
  ]

  useEffect(() => {
    if (allowanceData.childrenCount) {
      const count = parseInt(allowanceData.childrenCount)
      const newChildren = Array(count).fill(null).map((_, index) => 
        allowanceData.children[index] || { name: '', birthDate: '', school: '' }
      )
      setAllowanceData(prev => ({ ...prev, children: newChildren }))
    }
  }, [allowanceData.childrenCount, allowanceData.children])

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service)
    setCurrentStep('form')
  }

  const handleNurserySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleAllowanceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleConfirm = () => {
    const prefix = selectedService === 'nursery' ? 'NUR' :
                  selectedService === 'allowance' ? 'ALW' :
                  selectedService === 'education-consultation' ? 'EDU' : 'CHD'
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`${prefix}-${new Date().getFullYear()}-${randomNum}`)
    setCurrentStep('complete')
  }

  const calculateMonthlyAllowance = () => {
    const count = parseInt(allowanceData.childrenCount)
    // 児童手当の金額（簡易計算）
    // 3歳未満：15,000円、3歳以上小学校修了前：10,000円（第3子以降は15,000円）
    // 中学生：10,000円
    return count * 10000 // 簡易的に一律1万円で計算
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className="container">
          <div className={styles.breadcrumb}>
            <Link href="/">ホーム</Link>
            <span> &gt; </span>
            <Link href="/services">県民サービス</Link>
            <span> &gt; </span>
            <span>子育て・教育サービス</span>
          </div>

          <h1 className={styles.pageTitle}>子育て・教育サービス</h1>

          {currentStep === 'select' && (
            <section className={styles.serviceSection}>
              <h2>ご利用になるサービスを選択してください</h2>
              <div className={styles.serviceGrid}>
                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('nursery')}
                >
                  <div className={styles.serviceIcon}>🏫</div>
                  <h3>保育園入園申込み</h3>
                  <p>認可保育園の入園申請</p>
                  <p className={styles.serviceNote}>0歳〜就学前のお子様</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('allowance')}
                >
                  <div className={styles.serviceIcon}>💴</div>
                  <h3>児童手当の申請</h3>
                  <p>児童手当の新規・変更申請</p>
                  <p className={styles.serviceNote}>中学校修了までのお子様</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('support-search')}
                >
                  <div className={styles.serviceIcon}>🎯</div>
                  <h3>子育て支援サービス検索</h3>
                  <p>利用可能なサービスを検索</p>
                  <p className={styles.serviceNote}>年齢・地域別に検索</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('education-consultation')}
                >
                  <div className={styles.serviceIcon}>📚</div>
                  <h3>教育相談の予約</h3>
                  <p>学習・進路・不登校等の相談</p>
                  <p className={styles.serviceNote}>専門カウンセラーが対応</p>
                </button>
              </div>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'nursery' && (
            <section className={styles.formSection}>
              <h2>保育園入園申込み</h2>
              <form onSubmit={handleNurserySubmit} className={styles.applicationForm}>
                <h3>お子様の情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="childName">お子様の氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="childName"
                    value={nurseryData.childName}
                    onChange={(e) => setNurseryData({...nurseryData, childName: e.target.value})}
                    required
                    placeholder="桜県 花子"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="childBirthDate">生年月日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="childBirthDate"
                    value={nurseryData.childBirthDate}
                    onChange={(e) => setNurseryData({...nurseryData, childBirthDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="childGender">性別 <span className={styles.required}>必須</span></label>
                  <select
                    id="childGender"
                    value={nurseryData.childGender}
                    onChange={(e) => setNurseryData({...nurseryData, childGender: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                  </select>
                </div>

                <h3>保護者情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="parentName">保護者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="parentName"
                    value={nurseryData.parentName}
                    onChange={(e) => setNurseryData({...nurseryData, parentName: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="address"
                    value={nurseryData.address}
                    onChange={(e) => setNurseryData({...nurseryData, address: e.target.value})}
                    required
                    placeholder="桜県○○市○○町1-2-3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="parentPhone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="parentPhone"
                    value={nurseryData.parentPhone}
                    onChange={(e) => setNurseryData({...nurseryData, parentPhone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="parentEmail">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="parentEmail"
                    value={nurseryData.parentEmail}
                    onChange={(e) => setNurseryData({...nurseryData, parentEmail: e.target.value})}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <h3>希望保育園</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="nursery1">第1希望 <span className={styles.required}>必須</span></label>
                  <select
                    id="nursery1"
                    value={nurseryData.preferredNursery1}
                    onChange={(e) => setNurseryData({...nurseryData, preferredNursery1: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="sakura-central">さくら中央保育園</option>
                    <option value="himawari">ひまわり保育園</option>
                    <option value="niji">にじいろ保育園</option>
                    <option value="tanpopo">たんぽぽ保育園</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="nursery2">第2希望</label>
                  <select
                    id="nursery2"
                    value={nurseryData.preferredNursery2}
                    onChange={(e) => setNurseryData({...nurseryData, preferredNursery2: e.target.value})}
                  >
                    <option value="">選択してください</option>
                    <option value="sakura-central">さくら中央保育園</option>
                    <option value="himawari">ひまわり保育園</option>
                    <option value="niji">にじいろ保育園</option>
                    <option value="tanpopo">たんぽぽ保育園</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="nursery3">第3希望</label>
                  <select
                    id="nursery3"
                    value={nurseryData.preferredNursery3}
                    onChange={(e) => setNurseryData({...nurseryData, preferredNursery3: e.target.value})}
                  >
                    <option value="">選択してください</option>
                    <option value="sakura-central">さくら中央保育園</option>
                    <option value="himawari">ひまわり保育園</option>
                    <option value="niji">にじいろ保育園</option>
                    <option value="tanpopo">たんぽぽ保育園</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="startDate">入園希望日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="startDate"
                    value={nurseryData.desiredStartDate}
                    onChange={(e) => setNurseryData({...nurseryData, desiredStartDate: e.target.value})}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <h3>保育の必要性</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="careReason">保育を必要とする理由 <span className={styles.required}>必須</span></label>
                  <select
                    id="careReason"
                    value={nurseryData.careReason}
                    onChange={(e) => setNurseryData({...nurseryData, careReason: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="work">就労</option>
                    <option value="pregnancy">妊娠・出産</option>
                    <option value="illness">疾病・障害</option>
                    <option value="care">介護・看護</option>
                    <option value="jobsearch">求職活動</option>
                    <option value="study">就学</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="workingHours">就労時間（就労の場合） <span className={styles.required}>必須</span></label>
                  <select
                    id="workingHours"
                    value={nurseryData.workingHours}
                    onChange={(e) => setNurseryData({...nurseryData, workingHours: e.target.value})}
                    required={nurseryData.careReason === 'work'}
                    disabled={nurseryData.careReason !== 'work'}
                  >
                    <option value="">選択してください</option>
                    <option value="full">フルタイム（月120時間以上）</option>
                    <option value="part">パートタイム（月64時間以上）</option>
                    <option value="short">短時間（月48時間以上）</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.checkboxLabel}>
                    <input
                      type="checkbox"
                      checked={nurseryData.needExtendedCare}
                      onChange={(e) => setNurseryData({...nurseryData, needExtendedCare: e.target.checked})}
                    />
                    <span>延長保育を希望する</span>
                  </label>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="specialNeeds">特記事項</label>
                  <textarea
                    id="specialNeeds"
                    value={nurseryData.specialNeeds}
                    onChange={(e) => setNurseryData({...nurseryData, specialNeeds: e.target.value})}
                    rows={3}
                    placeholder="アレルギー、配慮が必要な事項など"
                  />
                </div>

                <div className={styles.formButtons}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={() => setCurrentStep('select')}
                  >
                    戻る
                  </button>
                  <button type="submit" className={styles.primaryButton}>
                    確認画面へ
                  </button>
                </div>
              </form>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'allowance' && (
            <section className={styles.formSection}>
              <h2>児童手当の申請</h2>
              <form onSubmit={handleAllowanceSubmit} className={styles.applicationForm}>
                <h3>申請者情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="applicantName">申請者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="applicantName"
                    value={allowanceData.applicantName}
                    onChange={(e) => setAllowanceData({...allowanceData, applicantName: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="applicantRelation">児童との続柄 <span className={styles.required}>必須</span></label>
                  <select
                    id="applicantRelation"
                    value={allowanceData.applicantRelation}
                    onChange={(e) => setAllowanceData({...allowanceData, applicantRelation: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="father">父</option>
                    <option value="mother">母</option>
                    <option value="guardian">その他保護者</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="alwAddress">住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="alwAddress"
                    value={allowanceData.address}
                    onChange={(e) => setAllowanceData({...allowanceData, address: e.target.value})}
                    required
                    placeholder="桜県○○市○○町1-2-3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="alwPhone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="alwPhone"
                    value={allowanceData.phone}
                    onChange={(e) => setAllowanceData({...allowanceData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="alwEmail">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="alwEmail"
                    value={allowanceData.email}
                    onChange={(e) => setAllowanceData({...allowanceData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <h3>児童情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="childrenCount">児童数 <span className={styles.required}>必須</span></label>
                  <select
                    id="childrenCount"
                    value={allowanceData.childrenCount}
                    onChange={(e) => setAllowanceData({...allowanceData, childrenCount: e.target.value})}
                    required
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}人</option>
                    ))}
                  </select>
                </div>

                {allowanceData.children.map((child, index) => (
                  <div key={index} className={styles.childInfo}>
                    <h4>第{index + 1}子</h4>
                    <div className={styles.formGroup}>
                      <label htmlFor={`childName${index}`}>氏名 <span className={styles.required}>必須</span></label>
                      <input
                        type="text"
                        id={`childName${index}`}
                        value={child.name}
                        onChange={(e) => {
                          const newChildren = [...allowanceData.children]
                          newChildren[index].name = e.target.value
                          setAllowanceData({...allowanceData, children: newChildren})
                        }}
                        required
                        placeholder="桜県 花子"
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor={`childBirth${index}`}>生年月日 <span className={styles.required}>必須</span></label>
                      <input
                        type="date"
                        id={`childBirth${index}`}
                        value={child.birthDate}
                        onChange={(e) => {
                          const newChildren = [...allowanceData.children]
                          newChildren[index].birthDate = e.target.value
                          setAllowanceData({...allowanceData, children: newChildren})
                        }}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor={`childSchool${index}`}>所属</label>
                      <input
                        type="text"
                        id={`childSchool${index}`}
                        value={child.school}
                        onChange={(e) => {
                          const newChildren = [...allowanceData.children]
                          newChildren[index].school = e.target.value
                          setAllowanceData({...allowanceData, children: newChildren})
                        }}
                        placeholder="○○保育園、○○小学校など"
                      />
                    </div>
                  </div>
                ))}

                <h3>振込先口座情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="bankName">金融機関名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="bankName"
                    value={allowanceData.bankName}
                    onChange={(e) => setAllowanceData({...allowanceData, bankName: e.target.value})}
                    required
                    placeholder="○○銀行"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="branchName">支店名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="branchName"
                    value={allowanceData.branchName}
                    onChange={(e) => setAllowanceData({...allowanceData, branchName: e.target.value})}
                    required
                    placeholder="○○支店"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="accountType">口座種別 <span className={styles.required}>必須</span></label>
                  <select
                    id="accountType"
                    value={allowanceData.accountType}
                    onChange={(e) => setAllowanceData({...allowanceData, accountType: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="ordinary">普通</option>
                    <option value="current">当座</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="accountNumber">口座番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="accountNumber"
                    value={allowanceData.accountNumber}
                    onChange={(e) => setAllowanceData({...allowanceData, accountNumber: e.target.value})}
                    required
                    placeholder="1234567"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="accountHolder">口座名義 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="accountHolder"
                    value={allowanceData.accountHolder}
                    onChange={(e) => setAllowanceData({...allowanceData, accountHolder: e.target.value})}
                    required
                    placeholder="サクラケン タロウ"
                  />
                </div>

                <div className={styles.formButtons}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={() => setCurrentStep('select')}
                  >
                    戻る
                  </button>
                  <button type="submit" className={styles.primaryButton}>
                    確認画面へ
                  </button>
                </div>
              </form>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'support-search' && (
            <section className={styles.searchSection}>
              <h2>子育て支援サービス検索</h2>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="サービス名や対象年齢で検索"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className={styles.searchInput}
                />
                <button className={styles.searchButton}>検索</button>
              </div>

              <div className={styles.filterOptions}>
                <h3>絞り込み条件</h3>
                <div className={styles.filterGroup}>
                  <label>対象年齢</label>
                  <select className={styles.filterSelect}>
                    <option value="">すべて</option>
                    <option value="baby">0〜2歳</option>
                    <option value="preschool">3〜5歳</option>
                    <option value="elementary">小学生</option>
                    <option value="junior">中学生</option>
                  </select>
                </div>
              </div>

              <div className={styles.serviceList}>
                {supportServices.map(service => (
                  <div
                    key={service.id}
                    className={`${styles.serviceItem} ${selectedSupportService === service.id ? styles.selected : ''}`}
                    onClick={() => setSelectedSupportService(service.id)}
                  >
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p className={styles.targetAge}>対象: {service.target}</p>
                    {selectedSupportService === service.id && (
                      <div className={styles.serviceDetail}>
                        <h4>サービス詳細</h4>
                        <p>利用時間: 平日 9:00〜17:00</p>
                        <p>利用料: サービスにより異なります</p>
                        <p>申込方法: 各施設へ直接お問い合わせください</p>
                        <button className={styles.detailButton}>
                          施設一覧を見る
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className={styles.formButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setCurrentStep('select')}
                >
                  戻る
                </button>
              </div>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'education-consultation' && (
            <section className={styles.formSection}>
              <h2>教育相談の予約</h2>
              <form onSubmit={handleConsultationSubmit} className={styles.applicationForm}>
                <h3>保護者情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="eduParentName">保護者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="eduParentName"
                    value={consultationData.parentName}
                    onChange={(e) => setConsultationData({...consultationData, parentName: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eduPhone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="eduPhone"
                    value={consultationData.phone}
                    onChange={(e) => setConsultationData({...consultationData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eduEmail">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="eduEmail"
                    value={consultationData.email}
                    onChange={(e) => setConsultationData({...consultationData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <h3>お子様の情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="eduChildName">お子様の氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="eduChildName"
                    value={consultationData.childName}
                    onChange={(e) => setConsultationData({...consultationData, childName: e.target.value})}
                    required
                    placeholder="桜県 花子"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="childAge">年齢 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="childAge"
                    value={consultationData.childAge}
                    onChange={(e) => setConsultationData({...consultationData, childAge: e.target.value})}
                    required
                    placeholder="12歳"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="school">学校名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="school"
                    value={consultationData.school}
                    onChange={(e) => setConsultationData({...consultationData, school: e.target.value})}
                    required
                    placeholder="○○小学校"
                  />
                </div>

                <h3>相談内容</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="consultationType">相談種別 <span className={styles.required}>必須</span></label>
                  <select
                    id="consultationType"
                    value={consultationData.consultationType}
                    onChange={(e) => setConsultationData({...consultationData, consultationType: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="learning">学習・学力について</option>
                    <option value="career">進路・進学について</option>
                    <option value="school-refusal">不登校について</option>
                    <option value="behavior">行動・生活について</option>
                    <option value="friendship">友人関係について</option>
                    <option value="development">発達について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="concern">相談内容の詳細 <span className={styles.required}>必須</span></label>
                  <textarea
                    id="concern"
                    value={consultationData.concern}
                    onChange={(e) => setConsultationData({...consultationData, concern: e.target.value})}
                    required
                    rows={4}
                    placeholder="お困りの内容を具体的にお書きください"
                  />
                </div>

                <h3>相談日時</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="eduDate">希望日（第1希望） <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="eduDate"
                    value={consultationData.preferredDate}
                    onChange={(e) => setConsultationData({...consultationData, preferredDate: e.target.value})}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eduTime">希望時間帯 <span className={styles.required}>必須</span></label>
                  <select
                    id="eduTime"
                    value={consultationData.preferredTime}
                    onChange={(e) => setConsultationData({...consultationData, preferredTime: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="9-10">9:00-10:00</option>
                    <option value="10-11">10:00-11:00</option>
                    <option value="11-12">11:00-12:00</option>
                    <option value="13-14">13:00-14:00</option>
                    <option value="14-15">14:00-15:00</option>
                    <option value="15-16">15:00-16:00</option>
                    <option value="16-17">16:00-17:00</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="eduMethod">相談方法 <span className={styles.required}>必須</span></label>
                  <select
                    id="eduMethod"
                    value={consultationData.consultationMethod}
                    onChange={(e) => setConsultationData({...consultationData, consultationMethod: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="visit">来所相談</option>
                    <option value="phone">電話相談</option>
                    <option value="online">オンライン相談</option>
                  </select>
                </div>

                <div className={styles.formButtons}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={() => setCurrentStep('select')}
                  >
                    戻る
                  </button>
                  <button type="submit" className={styles.primaryButton}>
                    確認画面へ
                  </button>
                </div>
              </form>
            </section>
          )}

          {currentStep === 'confirm' && (
            <section className={styles.confirmSection}>
              <h2>申請内容の確認</h2>
              <div className={styles.confirmContent}>
                {selectedService === 'nursery' && (
                  <>
                    <h3>保育園入園申込情報</h3>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>お子様の氏名</th>
                          <td>{nurseryData.childName}</td>
                        </tr>
                        <tr>
                          <th>生年月日</th>
                          <td>{nurseryData.childBirthDate}</td>
                        </tr>
                        <tr>
                          <th>保護者氏名</th>
                          <td>{nurseryData.parentName}</td>
                        </tr>
                        <tr>
                          <th>第1希望園</th>
                          <td>{nurseryData.preferredNursery1}</td>
                        </tr>
                        <tr>
                          <th>入園希望日</th>
                          <td>{nurseryData.desiredStartDate}</td>
                        </tr>
                        <tr>
                          <th>保育理由</th>
                          <td>{nurseryData.careReason}</td>
                        </tr>
                        <tr>
                          <th>延長保育</th>
                          <td>{nurseryData.needExtendedCare ? '希望する' : '希望しない'}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}

                {selectedService === 'allowance' && (
                  <>
                    <h3>児童手当申請情報</h3>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>申請者氏名</th>
                          <td>{allowanceData.applicantName}</td>
                        </tr>
                        <tr>
                          <th>児童との続柄</th>
                          <td>
                            {allowanceData.applicantRelation === 'father' && '父'}
                            {allowanceData.applicantRelation === 'mother' && '母'}
                            {allowanceData.applicantRelation === 'guardian' && 'その他保護者'}
                          </td>
                        </tr>
                        <tr>
                          <th>児童数</th>
                          <td>{allowanceData.childrenCount}人</td>
                        </tr>
                        <tr>
                          <th>振込先金融機関</th>
                          <td>{allowanceData.bankName} {allowanceData.branchName}</td>
                        </tr>
                        <tr>
                          <th>口座番号</th>
                          <td>{allowanceData.accountType === 'ordinary' ? '普通' : '当座'} {allowanceData.accountNumber}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className={styles.allowanceInfo}>
                      <h4>支給予定額（月額）</h4>
                      <p className={styles.allowanceAmount}>{calculateMonthlyAllowance().toLocaleString()}円</p>
                      <p className={styles.allowanceNote}>※所得制限により変動する場合があります</p>
                    </div>
                  </>
                )}

                {selectedService === 'education-consultation' && (
                  <>
                    <h3>教育相談予約情報</h3>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>保護者氏名</th>
                          <td>{consultationData.parentName}</td>
                        </tr>
                        <tr>
                          <th>お子様の氏名</th>
                          <td>{consultationData.childName}</td>
                        </tr>
                        <tr>
                          <th>年齢</th>
                          <td>{consultationData.childAge}</td>
                        </tr>
                        <tr>
                          <th>相談種別</th>
                          <td>{consultationData.consultationType}</td>
                        </tr>
                        <tr>
                          <th>希望日</th>
                          <td>{consultationData.preferredDate}</td>
                        </tr>
                        <tr>
                          <th>希望時間</th>
                          <td>{consultationData.preferredTime}</td>
                        </tr>
                        <tr>
                          <th>相談方法</th>
                          <td>
                            {consultationData.consultationMethod === 'visit' && '来所相談'}
                            {consultationData.consultationMethod === 'phone' && '電話相談'}
                            {consultationData.consultationMethod === 'online' && 'オンライン相談'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}

                <div className={styles.notice}>
                  <h4>注意事項</h4>
                  <ul>
                    {selectedService === 'nursery' && (
                      <>
                        <li>入園の可否は申込順ではなく、保育の必要性を考慮して決定されます</li>
                        <li>必要書類を期限内に提出してください</li>
                        <li>就労証明書等の追加書類が必要です</li>
                      </>
                    )}
                    {selectedService === 'allowance' && (
                      <>
                        <li>所得制限があります。詳しくは窓口でご確認ください</li>
                        <li>現況届の提出が必要です（年1回）</li>
                        <li>振込は申請月の翌月から開始されます</li>
                      </>
                    )}
                    {selectedService === 'education-consultation' && (
                      <>
                        <li>相談内容は秘密厳守いたします</li>
                        <li>相談時間は50分程度です</li>
                        <li>必要に応じて継続相談も可能です</li>
                      </>
                    )}
                  </ul>
                </div>

                <div className={styles.formButtons}>
                  <button
                    className={styles.backButton}
                    onClick={() => setCurrentStep('form')}
                  >
                    戻る
                  </button>
                  <button
                    className={styles.primaryButton}
                    onClick={handleConfirm}
                  >
                    申請する
                  </button>
                </div>
              </div>
            </section>
          )}

          {currentStep === 'complete' && (
            <section className={styles.completeSection}>
              <div className={styles.successIcon}>✅</div>
              <h2>
                {selectedService === 'nursery' && '申込が完了しました'}
                {selectedService === 'allowance' && '申請が完了しました'}
                {selectedService === 'education-consultation' && '予約が完了しました'}
              </h2>
              <div className={styles.applicationInfo}>
                <h3>
                  {selectedService === 'nursery' && '申込番号'}
                  {selectedService === 'allowance' && '申請番号'}
                  {selectedService === 'education-consultation' && '予約番号'}
                </h3>
                <p className={styles.applicationNumber}>{applicationNumber}</p>
                <p className={styles.applicationNote}>
                  この番号を控えて、
                  {selectedService === 'nursery' && '必要書類と共に窓口へお越しください'}
                  {selectedService === 'allowance' && '窓口での手続きにお使いください'}
                  {selectedService === 'education-consultation' && '相談日にお持ちください'}
                </p>
              </div>

              <div className={styles.nextSteps}>
                <h3>次のステップ</h3>
                {selectedService === 'nursery' && (
                  <ol>
                    <li>就労証明書等の必要書類を準備</li>
                    <li>申込期限内に市役所へ提出</li>
                    <li>面接・健康診断の案内を待つ</li>
                    <li>入園決定通知を確認（2月頃）</li>
                    <li>入園説明会に参加</li>
                  </ol>
                )}
                {selectedService === 'allowance' && (
                  <ol>
                    <li>所得証明書等の必要書類を準備</li>
                    <li>市役所の児童手当窓口へ</li>
                    <li>申請番号を伝えて正式申請</li>
                    <li>審査結果を待つ（約1ヶ月）</li>
                    <li>支給開始の通知を確認</li>
                  </ol>
                )}
                {selectedService === 'education-consultation' && (
                  <ol>
                    <li>相談内容をまとめておく</li>
                    <li>必要な資料があれば準備</li>
                    <li>予約日時に教育相談センターへ</li>
                    <li>相談員と面談（約50分）</li>
                    <li>必要に応じて継続相談を検討</li>
                  </ol>
                )}
              </div>

              <div className={styles.confirmEmail}>
                <p>
                  確認メールを 
                  {selectedService === 'nursery' && ` ${nurseryData.parentEmail} `}
                  {selectedService === 'allowance' && ` ${allowanceData.email} `}
                  {selectedService === 'education-consultation' && ` ${consultationData.email} `}
                  に送信しました。
                </p>
                <p className={styles.demoNote}>※これはデモです。実際のメールは送信されません。</p>
              </div>

              <div className={styles.completeButtons}>
                <button
                  className={styles.printButton}
                  onClick={() => window.print()}
                >
                  印刷する
                </button>
                <Link href="/services" className={styles.primaryButton}>
                  サービス一覧へ戻る
                </Link>
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}