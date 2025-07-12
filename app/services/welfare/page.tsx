'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

type ServiceType = 'care-certification' | 'disability-card' | 'welfare-search' | 'consultation'
type Step = 'select' | 'form' | 'confirm' | 'complete'
type CareLevel = 'support1' | 'support2' | 'care1' | 'care2' | 'care3' | 'care4' | 'care5'

interface CareApplicationData {
  applicantName: string
  applicantBirthDate: string
  applicantAddress: string
  applicantPhone: string
  targetName: string
  targetBirthDate: string
  relationship: string
  currentCondition: string
  desiredServices: string[]
  email: string
}

interface DisabilityApplicationData {
  applicantName: string
  birthDate: string
  address: string
  phone: string
  email: string
  disabilityType: string
  disabilityGrade: string
  medicalInstitution: string
  doctorName: string
  diagnosisDate: string
}

interface ConsultationData {
  name: string
  phone: string
  email: string
  consultationType: string
  preferredDate: string
  preferredTime: string
  consultationMethod: string
  message: string
}

export default function WelfareServicePage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [currentStep, setCurrentStep] = useState<Step>('select')
  const [applicationNumber, setApplicationNumber] = useState('')
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedWelfareService, setSelectedWelfareService] = useState<string | null>(null)

  // 介護認定申請データ
  const [careData, setCareData] = useState<CareApplicationData>({
    applicantName: '',
    applicantBirthDate: '',
    applicantAddress: '',
    applicantPhone: '',
    targetName: '',
    targetBirthDate: '',
    relationship: '',
    currentCondition: '',
    desiredServices: [],
    email: ''
  })

  // 障害者手帳申請データ
  const [disabilityData, setDisabilityData] = useState<DisabilityApplicationData>({
    applicantName: '',
    birthDate: '',
    address: '',
    phone: '',
    email: '',
    disabilityType: '',
    disabilityGrade: '',
    medicalInstitution: '',
    doctorName: '',
    diagnosisDate: ''
  })

  // 相談予約データ
  const [consultationData, setConsultationData] = useState<ConsultationData>({
    name: '',
    phone: '',
    email: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    consultationMethod: '',
    message: ''
  })

  const welfareServices = [
    { id: 'home-care', name: '訪問介護', description: '自宅での身体介護・生活援助' },
    { id: 'day-service', name: 'デイサービス', description: '日帰りでの介護・機能訓練' },
    { id: 'short-stay', name: 'ショートステイ', description: '短期間の施設入所サービス' },
    { id: 'nursing-home', name: '特別養護老人ホーム', description: '常時介護が必要な方の入所施設' },
    { id: 'disability-support', name: '障害福祉サービス', description: '障害者の日常生活支援' },
    { id: 'child-development', name: '児童発達支援', description: '障害児の療育・支援' }
  ]

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service)
    if (service === 'welfare-search') {
      // 福祉サービス検索は別画面
      setCurrentStep('form')
    } else {
      setCurrentStep('form')
    }
  }

  const handleCareSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleDisabilitySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleConfirm = () => {
    const prefix = selectedService === 'care-certification' ? 'CARE' :
                  selectedService === 'disability-card' ? 'DIS' :
                  selectedService === 'consultation' ? 'CON' : 'WEL'
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`${prefix}-${new Date().getFullYear()}-${randomNum}`)
    setCurrentStep('complete')
  }

  const handleServiceCheck = (service: string) => {
    setCareData(prev => ({
      ...prev,
      desiredServices: prev.desiredServices.includes(service)
        ? prev.desiredServices.filter(s => s !== service)
        : [...prev.desiredServices, service]
    }))
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
            <span>福祉・介護サービス</span>
          </div>

          <h1 className={styles.pageTitle}>福祉・介護サービス</h1>

          {currentStep === 'select' && (
            <section className={styles.serviceSection}>
              <h2>ご利用になるサービスを選択してください</h2>
              <div className={styles.serviceGrid}>
                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('care-certification')}
                >
                  <div className={styles.serviceIcon}>🏥</div>
                  <h3>介護認定の申請</h3>
                  <p>要介護・要支援認定の新規申請</p>
                  <p className={styles.serviceNote}>65歳以上または特定疾病の方</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('disability-card')}
                >
                  <div className={styles.serviceIcon}>♿</div>
                  <h3>障害者手帳の申請</h3>
                  <p>身体・知的・精神障害者手帳の申請</p>
                  <p className={styles.serviceNote}>各種手帳の新規・更新申請</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('welfare-search')}
                >
                  <div className={styles.serviceIcon}>🔍</div>
                  <h3>福祉サービスの検索</h3>
                  <p>利用可能な福祉サービスを検索</p>
                  <p className={styles.serviceNote}>条件に合うサービスを探す</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('consultation')}
                >
                  <div className={styles.serviceIcon}>💬</div>
                  <h3>相談予約</h3>
                  <p>福祉・介護に関する相談予約</p>
                  <p className={styles.serviceNote}>専門スタッフが対応</p>
                </button>
              </div>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'care-certification' && (
            <section className={styles.formSection}>
              <h2>介護認定の申請</h2>
              <form onSubmit={handleCareSubmit} className={styles.applicationForm}>
                <h3>申請者情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="applicantName">申請者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="applicantName"
                    value={careData.applicantName}
                    onChange={(e) => setCareData({...careData, applicantName: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="applicantBirthDate">申請者生年月日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="applicantBirthDate"
                    value={careData.applicantBirthDate}
                    onChange={(e) => setCareData({...careData, applicantBirthDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="applicantAddress">申請者住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="applicantAddress"
                    value={careData.applicantAddress}
                    onChange={(e) => setCareData({...careData, applicantAddress: e.target.value})}
                    required
                    placeholder="桜県○○市○○町1-2-3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="applicantPhone">申請者電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="applicantPhone"
                    value={careData.applicantPhone}
                    onChange={(e) => setCareData({...careData, applicantPhone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <h3>要介護認定を受ける方の情報</h3>
                <div className={styles.formGroup}>
                  <label htmlFor="targetName">対象者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="targetName"
                    value={careData.targetName}
                    onChange={(e) => setCareData({...careData, targetName: e.target.value})}
                    required
                    placeholder="桜県 花子"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="targetBirthDate">対象者生年月日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="targetBirthDate"
                    value={careData.targetBirthDate}
                    onChange={(e) => setCareData({...careData, targetBirthDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="relationship">申請者との続柄 <span className={styles.required}>必須</span></label>
                  <select
                    id="relationship"
                    value={careData.relationship}
                    onChange={(e) => setCareData({...careData, relationship: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="self">本人</option>
                    <option value="spouse">配偶者</option>
                    <option value="child">子</option>
                    <option value="parent">親</option>
                    <option value="sibling">兄弟姉妹</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="currentCondition">現在の状態 <span className={styles.required}>必須</span></label>
                  <textarea
                    id="currentCondition"
                    value={careData.currentCondition}
                    onChange={(e) => setCareData({...careData, currentCondition: e.target.value})}
                    required
                    rows={4}
                    placeholder="日常生活で困っていること、介護が必要な状況などを具体的に記入してください"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>希望するサービス（複数選択可）</label>
                  <div className={styles.checkboxGroup}>
                    {['訪問介護', 'デイサービス', 'ショートステイ', '福祉用具レンタル', '住宅改修'].map(service => (
                      <label key={service} className={styles.checkboxLabel}>
                        <input
                          type="checkbox"
                          checked={careData.desiredServices.includes(service)}
                          onChange={() => handleServiceCheck(service)}
                        />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="email"
                    value={careData.email}
                    onChange={(e) => setCareData({...careData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
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

          {currentStep === 'form' && selectedService === 'disability-card' && (
            <section className={styles.formSection}>
              <h2>障害者手帳の申請</h2>
              <form onSubmit={handleDisabilitySubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="disName">申請者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="disName"
                    value={disabilityData.applicantName}
                    onChange={(e) => setDisabilityData({...disabilityData, applicantName: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="disBirthDate">生年月日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="disBirthDate"
                    value={disabilityData.birthDate}
                    onChange={(e) => setDisabilityData({...disabilityData, birthDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="disAddress">住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="disAddress"
                    value={disabilityData.address}
                    onChange={(e) => setDisabilityData({...disabilityData, address: e.target.value})}
                    required
                    placeholder="桜県○○市○○町1-2-3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="disPhone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="disPhone"
                    value={disabilityData.phone}
                    onChange={(e) => setDisabilityData({...disabilityData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="disabilityType">障害の種類 <span className={styles.required}>必須</span></label>
                  <select
                    id="disabilityType"
                    value={disabilityData.disabilityType}
                    onChange={(e) => setDisabilityData({...disabilityData, disabilityType: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="physical">身体障害</option>
                    <option value="intellectual">知的障害</option>
                    <option value="mental">精神障害</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="disabilityGrade">障害等級（申請予定） <span className={styles.required}>必須</span></label>
                  <select
                    id="disabilityGrade"
                    value={disabilityData.disabilityGrade}
                    onChange={(e) => setDisabilityData({...disabilityData, disabilityGrade: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="1">1級</option>
                    <option value="2">2級</option>
                    <option value="3">3級</option>
                    <option value="4">4級</option>
                    <option value="5">5級</option>
                    <option value="6">6級</option>
                    <option value="unknown">不明</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="medicalInstitution">診断医療機関 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="medicalInstitution"
                    value={disabilityData.medicalInstitution}
                    onChange={(e) => setDisabilityData({...disabilityData, medicalInstitution: e.target.value})}
                    required
                    placeholder="桜県立中央病院"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="doctorName">診断医師名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="doctorName"
                    value={disabilityData.doctorName}
                    onChange={(e) => setDisabilityData({...disabilityData, doctorName: e.target.value})}
                    required
                    placeholder="山田 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="diagnosisDate">診断日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="diagnosisDate"
                    value={disabilityData.diagnosisDate}
                    onChange={(e) => setDisabilityData({...disabilityData, diagnosisDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="disEmail">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="disEmail"
                    value={disabilityData.email}
                    onChange={(e) => setDisabilityData({...disabilityData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
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

          {currentStep === 'form' && selectedService === 'welfare-search' && (
            <section className={styles.searchSection}>
              <h2>福祉サービスの検索</h2>
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="サービス名やキーワードを入力"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  className={styles.searchInput}
                />
                <button className={styles.searchButton}>検索</button>
              </div>

              <div className={styles.serviceList}>
                {welfareServices.map(service => (
                  <div
                    key={service.id}
                    className={`${styles.serviceItem} ${selectedWelfareService === service.id ? styles.selected : ''}`}
                    onClick={() => setSelectedWelfareService(service.id)}
                  >
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    {selectedWelfareService === service.id && (
                      <div className={styles.serviceDetail}>
                        <h4>サービス詳細</h4>
                        <p>対象者: 要介護認定を受けた方</p>
                        <p>利用料: 介護保険適用で1割〜3割負担</p>
                        <p>申込方法: ケアマネジャーにご相談ください</p>
                        <button className={styles.detailButton}>
                          詳しい情報を見る
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

          {currentStep === 'form' && selectedService === 'consultation' && (
            <section className={styles.formSection}>
              <h2>相談予約</h2>
              <form onSubmit={handleConsultationSubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="conName">お名前 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="conName"
                    value={consultationData.name}
                    onChange={(e) => setConsultationData({...consultationData, name: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="conPhone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="conPhone"
                    value={consultationData.phone}
                    onChange={(e) => setConsultationData({...consultationData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="conEmail">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="conEmail"
                    value={consultationData.email}
                    onChange={(e) => setConsultationData({...consultationData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="consultationType">相談内容 <span className={styles.required}>必須</span></label>
                  <select
                    id="consultationType"
                    value={consultationData.consultationType}
                    onChange={(e) => setConsultationData({...consultationData, consultationType: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="care">介護サービスについて</option>
                    <option value="disability">障害福祉について</option>
                    <option value="elderly">高齢者福祉について</option>
                    <option value="child">児童福祉について</option>
                    <option value="life">生活支援について</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="conDate">希望日（第1希望） <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="conDate"
                    value={consultationData.preferredDate}
                    onChange={(e) => setConsultationData({...consultationData, preferredDate: e.target.value})}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="conTime">希望時間帯 <span className={styles.required}>必須</span></label>
                  <select
                    id="conTime"
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
                  <label htmlFor="consultationMethod">相談方法 <span className={styles.required}>必須</span></label>
                  <select
                    id="consultationMethod"
                    value={consultationData.consultationMethod}
                    onChange={(e) => setConsultationData({...consultationData, consultationMethod: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="visit">来所相談</option>
                    <option value="phone">電話相談</option>
                    <option value="online">オンライン相談</option>
                    <option value="home">訪問相談</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">相談内容の詳細</label>
                  <textarea
                    id="message"
                    value={consultationData.message}
                    onChange={(e) => setConsultationData({...consultationData, message: e.target.value})}
                    rows={4}
                    placeholder="相談したい内容を具体的に記入してください（任意）"
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

          {currentStep === 'confirm' && (
            <section className={styles.confirmSection}>
              <h2>申請内容の確認</h2>
              <div className={styles.confirmContent}>
                {selectedService === 'care-certification' && (
                  <>
                    <h3>介護認定申請情報</h3>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>申請者氏名</th>
                          <td>{careData.applicantName}</td>
                        </tr>
                        <tr>
                          <th>申請者住所</th>
                          <td>{careData.applicantAddress}</td>
                        </tr>
                        <tr>
                          <th>対象者氏名</th>
                          <td>{careData.targetName}</td>
                        </tr>
                        <tr>
                          <th>続柄</th>
                          <td>{careData.relationship}</td>
                        </tr>
                        <tr>
                          <th>希望サービス</th>
                          <td>{careData.desiredServices.join('、')}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}

                {selectedService === 'disability-card' && (
                  <>
                    <h3>障害者手帳申請情報</h3>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>申請者氏名</th>
                          <td>{disabilityData.applicantName}</td>
                        </tr>
                        <tr>
                          <th>生年月日</th>
                          <td>{disabilityData.birthDate}</td>
                        </tr>
                        <tr>
                          <th>障害の種類</th>
                          <td>
                            {disabilityData.disabilityType === 'physical' && '身体障害'}
                            {disabilityData.disabilityType === 'intellectual' && '知的障害'}
                            {disabilityData.disabilityType === 'mental' && '精神障害'}
                          </td>
                        </tr>
                        <tr>
                          <th>診断医療機関</th>
                          <td>{disabilityData.medicalInstitution}</td>
                        </tr>
                        <tr>
                          <th>診断医師</th>
                          <td>{disabilityData.doctorName}</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}

                {selectedService === 'consultation' && (
                  <>
                    <h3>相談予約情報</h3>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>お名前</th>
                          <td>{consultationData.name}</td>
                        </tr>
                        <tr>
                          <th>相談内容</th>
                          <td>{consultationData.consultationType}</td>
                        </tr>
                        <tr>
                          <th>希望日</th>
                          <td>{consultationData.preferredDate}</td>
                        </tr>
                        <tr>
                          <th>希望時間帯</th>
                          <td>{consultationData.preferredTime}</td>
                        </tr>
                        <tr>
                          <th>相談方法</th>
                          <td>
                            {consultationData.consultationMethod === 'visit' && '来所相談'}
                            {consultationData.consultationMethod === 'phone' && '電話相談'}
                            {consultationData.consultationMethod === 'online' && 'オンライン相談'}
                            {consultationData.consultationMethod === 'home' && '訪問相談'}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}

                <div className={styles.notice}>
                  <h4>注意事項</h4>
                  <ul>
                    <li>この申請は仮申請です。正式な手続きは窓口で行います。</li>
                    <li>必要書類を準備の上、窓口にお越しください。</li>
                    <li>申請内容により、追加の書類が必要な場合があります。</li>
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
              <h2>申請が完了しました</h2>
              <div className={styles.applicationInfo}>
                <h3>申請番号</h3>
                <p className={styles.applicationNumber}>{applicationNumber}</p>
                <p className={styles.applicationNote}>
                  この番号を控えて、窓口にお越しください
                </p>
              </div>

              <div className={styles.nextSteps}>
                <h3>次のステップ</h3>
                {selectedService === 'care-certification' && (
                  <ol>
                    <li>市区町村の介護保険課窓口へ</li>
                    <li>申請番号を伝える</li>
                    <li>正式な申請手続きを行う</li>
                    <li>認定調査の日程を調整</li>
                    <li>認定結果を待つ（約30日）</li>
                  </ol>
                )}
                {selectedService === 'disability-card' && (
                  <ol>
                    <li>診断書を準備する</li>
                    <li>写真（縦4cm×横3cm）を準備</li>
                    <li>福祉事務所窓口へ</li>
                    <li>申請番号を伝える</li>
                    <li>正式な申請手続きを行う</li>
                  </ol>
                )}
                {selectedService === 'consultation' && (
                  <ol>
                    <li>予約日時の確認</li>
                    <li>相談したい内容をまとめる</li>
                    <li>必要な資料があれば準備</li>
                    <li>予約時間に相談を受ける</li>
                  </ol>
                )}
              </div>

              <div className={styles.confirmEmail}>
                <p>
                  確認メールを 
                  {selectedService === 'care-certification' && ` ${careData.email} `}
                  {selectedService === 'disability-card' && ` ${disabilityData.email} `}
                  {selectedService === 'consultation' && ` ${consultationData.email} `}
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