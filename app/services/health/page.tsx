'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

type ServiceType = 'checkup' | 'vaccination' | 'insurance' | 'subsidy'
type Step = 'select' | 'form' | 'confirm' | 'complete'

interface CheckupData {
  type: string
  date: string
  time: string
  location: string
  name: string
  birthDate: string
  phone: string
  email: string
  insuranceNumber: string
}

interface VaccinationData {
  vaccine: string
  preferredDate: string
  preferredTime: string
  name: string
  birthDate: string
  address: string
  phone: string
  email: string
  allergies: string
}

export default function HealthServicePage() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null)
  const [currentStep, setCurrentStep] = useState<Step>('select')
  const [applicationNumber, setApplicationNumber] = useState('')

  // 健康診断予約データ
  const [checkupData, setCheckupData] = useState<CheckupData>({
    type: '',
    date: '',
    time: '',
    location: '',
    name: '',
    birthDate: '',
    phone: '',
    email: '',
    insuranceNumber: ''
  })

  // 予防接種申込データ
  const [vaccinationData, setVaccinationData] = useState<VaccinationData>({
    vaccine: '',
    preferredDate: '',
    preferredTime: '',
    name: '',
    birthDate: '',
    address: '',
    phone: '',
    email: '',
    allergies: ''
  })

  const handleServiceSelect = (service: ServiceType) => {
    setSelectedService(service)
    setCurrentStep('form')
  }

  const handleCheckupSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleVaccinationSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('confirm')
  }

  const handleConfirm = () => {
    const prefix = selectedService === 'checkup' ? 'CHK' : 
                  selectedService === 'vaccination' ? 'VAC' : 
                  selectedService === 'insurance' ? 'INS' : 'SUB'
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`${prefix}-${new Date().getFullYear()}-${randomNum}`)
    setCurrentStep('complete')
  }

  const calculateCheckupFee = () => {
    const baseFee = checkupData.type === 'basic' ? 5000 : 
                   checkupData.type === 'comprehensive' ? 12000 : 
                   checkupData.type === 'specific' ? 8000 : 0
    // 保険適用で3割負担
    return Math.floor(baseFee * 0.3)
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
            <span>健康・保険サービス</span>
          </div>

          <h1 className={styles.pageTitle}>健康・保険サービス</h1>

          {currentStep === 'select' && (
            <section className={styles.serviceSection}>
              <h2>ご利用になるサービスを選択してください</h2>
              <div className={styles.serviceGrid}>
                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('checkup')}
                >
                  <div className={styles.serviceIcon}>🏥</div>
                  <h3>健康診断の予約</h3>
                  <p>定期健診・特定健診の予約申込み</p>
                  <p className={styles.serviceNote}>オンラインで簡単予約</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('vaccination')}
                >
                  <div className={styles.serviceIcon}>💉</div>
                  <h3>予防接種の申込み</h3>
                  <p>各種予防接種の予約・申請</p>
                  <p className={styles.serviceNote}>インフルエンザ・肺炎球菌など</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('insurance')}
                >
                  <div className={styles.serviceIcon}>🏛️</div>
                  <h3>国民健康保険の手続き</h3>
                  <p>加入・変更・喪失手続きの案内</p>
                  <p className={styles.serviceNote}>必要書類の確認</p>
                </button>

                <button
                  className={styles.serviceCard}
                  onClick={() => handleServiceSelect('subsidy')}
                >
                  <div className={styles.serviceIcon}>💰</div>
                  <h3>医療費助成の申請</h3>
                  <p>各種医療費助成制度の申請</p>
                  <p className={styles.serviceNote}>子ども・ひとり親・障害者医療</p>
                </button>
              </div>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'checkup' && (
            <section className={styles.formSection}>
              <h2>健康診断の予約</h2>
              <form onSubmit={handleCheckupSubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="checkupType">健診の種類 <span className={styles.required}>必須</span></label>
                  <select
                    id="checkupType"
                    value={checkupData.type}
                    onChange={(e) => setCheckupData({...checkupData, type: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="basic">基本健診</option>
                    <option value="comprehensive">人間ドック</option>
                    <option value="specific">特定健診</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="checkupDate">希望日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="checkupDate"
                    value={checkupData.date}
                    onChange={(e) => setCheckupData({...checkupData, date: e.target.value})}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="checkupTime">希望時間帯 <span className={styles.required}>必須</span></label>
                  <select
                    id="checkupTime"
                    value={checkupData.time}
                    onChange={(e) => setCheckupData({...checkupData, time: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="morning">午前（9:00-12:00）</option>
                    <option value="afternoon">午後（13:00-17:00）</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="location">受診施設 <span className={styles.required}>必須</span></label>
                  <select
                    id="location"
                    value={checkupData.location}
                    onChange={(e) => setCheckupData({...checkupData, location: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="central">桜県中央健診センター</option>
                    <option value="north">北部保健センター</option>
                    <option value="south">南部保健センター</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="name">氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="name"
                    value={checkupData.name}
                    onChange={(e) => setCheckupData({...checkupData, name: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="birthDate">生年月日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="birthDate"
                    value={checkupData.birthDate}
                    onChange={(e) => setCheckupData({...checkupData, birthDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="insuranceNumber">保険証番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="insuranceNumber"
                    value={checkupData.insuranceNumber}
                    onChange={(e) => setCheckupData({...checkupData, insuranceNumber: e.target.value})}
                    required
                    placeholder="12345678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="phone"
                    value={checkupData.phone}
                    onChange={(e) => setCheckupData({...checkupData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="email"
                    value={checkupData.email}
                    onChange={(e) => setCheckupData({...checkupData, email: e.target.value})}
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

          {currentStep === 'form' && selectedService === 'vaccination' && (
            <section className={styles.formSection}>
              <h2>予防接種の申込み</h2>
              <form onSubmit={handleVaccinationSubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="vaccine">ワクチンの種類 <span className={styles.required}>必須</span></label>
                  <select
                    id="vaccine"
                    value={vaccinationData.vaccine}
                    onChange={(e) => setVaccinationData({...vaccinationData, vaccine: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="influenza">インフルエンザ</option>
                    <option value="pneumonia">肺炎球菌</option>
                    <option value="hpv">子宮頸がん（HPV）</option>
                    <option value="hepatitis">B型肝炎</option>
                    <option value="measles">麻しん風しん（MR）</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacDate">希望接種日（第1希望） <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="vacDate"
                    value={vaccinationData.preferredDate}
                    onChange={(e) => setVaccinationData({...vaccinationData, preferredDate: e.target.value})}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacTime">希望時間帯 <span className={styles.required}>必須</span></label>
                  <select
                    id="vacTime"
                    value={vaccinationData.preferredTime}
                    onChange={(e) => setVaccinationData({...vaccinationData, preferredTime: e.target.value})}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="9-10">9:00-10:00</option>
                    <option value="10-11">10:00-11:00</option>
                    <option value="11-12">11:00-12:00</option>
                    <option value="14-15">14:00-15:00</option>
                    <option value="15-16">15:00-16:00</option>
                    <option value="16-17">16:00-17:00</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacName">氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="vacName"
                    value={vaccinationData.name}
                    onChange={(e) => setVaccinationData({...vaccinationData, name: e.target.value})}
                    required
                    placeholder="桜県 花子"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacBirthDate">生年月日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="vacBirthDate"
                    value={vaccinationData.birthDate}
                    onChange={(e) => setVaccinationData({...vaccinationData, birthDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacAddress">住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="vacAddress"
                    value={vaccinationData.address}
                    onChange={(e) => setVaccinationData({...vaccinationData, address: e.target.value})}
                    required
                    placeholder="桜県○○市○○町1-2-3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacPhone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="vacPhone"
                    value={vaccinationData.phone}
                    onChange={(e) => setVaccinationData({...vaccinationData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="vacEmail">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="vacEmail"
                    value={vaccinationData.email}
                    onChange={(e) => setVaccinationData({...vaccinationData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="allergies">アレルギー・既往症など</label>
                  <textarea
                    id="allergies"
                    value={vaccinationData.allergies}
                    onChange={(e) => setVaccinationData({...vaccinationData, allergies: e.target.value})}
                    rows={3}
                    placeholder="特記事項があれば記入してください"
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

          {currentStep === 'form' && selectedService === 'insurance' && (
            <section className={styles.infoSection}>
              <h2>国民健康保険の手続き案内</h2>
              <div className={styles.procedureGuide}>
                <div className={styles.procedureCard}>
                  <h3>加入手続き</h3>
                  <h4>対象者</h4>
                  <ul>
                    <li>会社を退職した方</li>
                    <li>他市区町村から転入した方</li>
                    <li>生活保護を受けなくなった方</li>
                  </ul>
                  <h4>必要書類</h4>
                  <ul>
                    <li>本人確認書類</li>
                    <li>退職証明書または離職票</li>
                    <li>印鑑</li>
                    <li>マイナンバーカード</li>
                  </ul>
                </div>

                <div className={styles.procedureCard}>
                  <h3>変更手続き</h3>
                  <h4>対象となる変更</h4>
                  <ul>
                    <li>住所変更</li>
                    <li>氏名変更</li>
                    <li>世帯主変更</li>
                  </ul>
                  <h4>必要書類</h4>
                  <ul>
                    <li>保険証</li>
                    <li>本人確認書類</li>
                    <li>変更を証明する書類</li>
                  </ul>
                </div>

                <div className={styles.procedureCard}>
                  <h3>喪失手続き</h3>
                  <h4>対象者</h4>
                  <ul>
                    <li>就職して社会保険に加入した方</li>
                    <li>他市区町村へ転出する方</li>
                    <li>生活保護を受けることになった方</li>
                  </ul>
                  <h4>必要書類</h4>
                  <ul>
                    <li>国民健康保険証</li>
                    <li>新しい保険証（社保の場合）</li>
                    <li>印鑑</li>
                  </ul>
                </div>
              </div>

              <div className={styles.officeInfo}>
                <h3>お問い合わせ・手続き窓口</h3>
                <p>桜県庁 保険年金課</p>
                <p>電話: 0XX-XXX-XXXX</p>
                <p>受付時間: 平日 8:30〜17:00</p>
              </div>

              <div className={styles.formButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setCurrentStep('select')}
                >
                  戻る
                </button>
                <button
                  className={styles.primaryButton}
                  onClick={handleConfirm}
                >
                  手続き予約をする
                </button>
              </div>
            </section>
          )}

          {currentStep === 'form' && selectedService === 'subsidy' && (
            <section className={styles.subsidySection}>
              <h2>医療費助成制度の案内</h2>
              <div className={styles.subsidyGrid}>
                <div className={styles.subsidyCard}>
                  <h3>子ども医療費助成</h3>
                  <p className={styles.targetAge}>対象: 0歳〜中学3年生</p>
                  <h4>助成内容</h4>
                  <ul>
                    <li>保険診療の自己負担分を助成</li>
                    <li>入院・通院とも対象</li>
                  </ul>
                  <h4>必要書類</h4>
                  <ul>
                    <li>子どもの健康保険証</li>
                    <li>保護者の本人確認書類</li>
                    <li>印鑑</li>
                  </ul>
                </div>

                <div className={styles.subsidyCard}>
                  <h3>ひとり親医療費助成</h3>
                  <p className={styles.targetAge}>対象: ひとり親家庭</p>
                  <h4>助成内容</h4>
                  <ul>
                    <li>保険診療の自己負担分を助成</li>
                    <li>所得制限あり</li>
                  </ul>
                  <h4>必要書類</h4>
                  <ul>
                    <li>健康保険証</li>
                    <li>戸籍謄本</li>
                    <li>所得証明書</li>
                    <li>印鑑</li>
                  </ul>
                </div>

                <div className={styles.subsidyCard}>
                  <h3>重度障害者医療費助成</h3>
                  <p className={styles.targetAge}>対象: 重度障害者</p>
                  <h4>助成内容</h4>
                  <ul>
                    <li>保険診療の自己負担分を助成</li>
                    <li>入院時の食事代も一部助成</li>
                  </ul>
                  <h4>必要書類</h4>
                  <ul>
                    <li>健康保険証</li>
                    <li>障害者手帳</li>
                    <li>印鑑</li>
                  </ul>
                </div>
              </div>

              <div className={styles.applicationNote}>
                <p>※詳しい条件や申請方法については、窓口でご相談ください</p>
              </div>

              <div className={styles.formButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setCurrentStep('select')}
                >
                  戻る
                </button>
                <button
                  className={styles.primaryButton}
                  onClick={handleConfirm}
                >
                  申請予約をする
                </button>
              </div>
            </section>
          )}

          {currentStep === 'confirm' && selectedService === 'checkup' && (
            <section className={styles.confirmSection}>
              <h2>予約内容の確認</h2>
              <div className={styles.confirmContent}>
                <h3>健康診断予約情報</h3>
                <table className={styles.confirmTable}>
                  <tbody>
                    <tr>
                      <th>健診の種類</th>
                      <td>
                        {checkupData.type === 'basic' && '基本健診'}
                        {checkupData.type === 'comprehensive' && '人間ドック'}
                        {checkupData.type === 'specific' && '特定健診'}
                      </td>
                    </tr>
                    <tr>
                      <th>希望日</th>
                      <td>{checkupData.date}</td>
                    </tr>
                    <tr>
                      <th>希望時間帯</th>
                      <td>{checkupData.time === 'morning' ? '午前（9:00-12:00）' : '午後（13:00-17:00）'}</td>
                    </tr>
                    <tr>
                      <th>受診施設</th>
                      <td>{checkupData.location}</td>
                    </tr>
                    <tr>
                      <th>氏名</th>
                      <td>{checkupData.name}</td>
                    </tr>
                    <tr>
                      <th>生年月日</th>
                      <td>{checkupData.birthDate}</td>
                    </tr>
                    <tr>
                      <th>保険証番号</th>
                      <td>{checkupData.insuranceNumber}</td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>{checkupData.phone}</td>
                    </tr>
                    <tr>
                      <th>メールアドレス</th>
                      <td>{checkupData.email}</td>
                    </tr>
                  </tbody>
                </table>

                <div className={styles.feeInfo}>
                  <h3>自己負担額（予定）</h3>
                  <p className={styles.feeAmount}>{calculateCheckupFee().toLocaleString()}円</p>
                  <p className={styles.feeNote}>※保険適用後の金額です</p>
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
                    予約を確定する
                  </button>
                </div>
              </div>
            </section>
          )}

          {currentStep === 'confirm' && selectedService === 'vaccination' && (
            <section className={styles.confirmSection}>
              <h2>申込内容の確認</h2>
              <div className={styles.confirmContent}>
                <h3>予防接種申込情報</h3>
                <table className={styles.confirmTable}>
                  <tbody>
                    <tr>
                      <th>ワクチンの種類</th>
                      <td>{vaccinationData.vaccine}</td>
                    </tr>
                    <tr>
                      <th>希望接種日</th>
                      <td>{vaccinationData.preferredDate}</td>
                    </tr>
                    <tr>
                      <th>希望時間帯</th>
                      <td>{vaccinationData.preferredTime}</td>
                    </tr>
                    <tr>
                      <th>氏名</th>
                      <td>{vaccinationData.name}</td>
                    </tr>
                    <tr>
                      <th>生年月日</th>
                      <td>{vaccinationData.birthDate}</td>
                    </tr>
                    <tr>
                      <th>住所</th>
                      <td>{vaccinationData.address}</td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>{vaccinationData.phone}</td>
                    </tr>
                    <tr>
                      <th>メールアドレス</th>
                      <td>{vaccinationData.email}</td>
                    </tr>
                    {vaccinationData.allergies && (
                      <tr>
                        <th>アレルギー・既往症</th>
                        <td>{vaccinationData.allergies}</td>
                      </tr>
                    )}
                  </tbody>
                </table>

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
                    申込を確定する
                  </button>
                </div>
              </div>
            </section>
          )}

          {currentStep === 'complete' && (
            <section className={styles.completeSection}>
              <div className={styles.successIcon}>✅</div>
              <h2>
                {selectedService === 'checkup' && '予約が完了しました'}
                {selectedService === 'vaccination' && '申込が完了しました'}
                {selectedService === 'insurance' && '予約が完了しました'}
                {selectedService === 'subsidy' && '予約が完了しました'}
              </h2>
              <div className={styles.applicationInfo}>
                <h3>
                  {selectedService === 'checkup' && '予約番号'}
                  {selectedService === 'vaccination' && '申込番号'}
                  {(selectedService === 'insurance' || selectedService === 'subsidy') && '受付番号'}
                </h3>
                <p className={styles.applicationNumber}>{applicationNumber}</p>
                <p className={styles.applicationNote}>
                  この番号を控えて、
                  {selectedService === 'checkup' && '健診当日にお持ちください'}
                  {selectedService === 'vaccination' && '接種日にお持ちください'}
                  {(selectedService === 'insurance' || selectedService === 'subsidy') && '窓口にお越しください'}
                </p>
              </div>

              <div className={styles.nextSteps}>
                <h3>次のステップ</h3>
                {selectedService === 'checkup' && (
                  <ol>
                    <li>健診前日は21時以降の食事を控える</li>
                    <li>当日は朝食を摂らずに来院</li>
                    <li>保険証と予約番号を持参</li>
                    <li>受付で予約番号を伝える</li>
                  </ol>
                )}
                {selectedService === 'vaccination' && (
                  <ol>
                    <li>体調を整えて当日を迎える</li>
                    <li>予診票を記入して持参</li>
                    <li>本人確認書類を準備</li>
                    <li>接種後15分は会場で待機</li>
                  </ol>
                )}
                {selectedService === 'insurance' && (
                  <ol>
                    <li>必要書類を準備する</li>
                    <li>予約日時に窓口へ</li>
                    <li>受付番号を伝える</li>
                    <li>手続きを行う</li>
                  </ol>
                )}
                {selectedService === 'subsidy' && (
                  <ol>
                    <li>必要書類を準備する</li>
                    <li>予約日時に窓口へ</li>
                    <li>受付番号を伝える</li>
                    <li>申請手続きを行う</li>
                  </ol>
                )}
              </div>

              <div className={styles.confirmEmail}>
                <p>
                  確認メールを 
                  {selectedService === 'checkup' && ` ${checkupData.email} `}
                  {selectedService === 'vaccination' && ` ${vaccinationData.email} `}
                  {(selectedService === 'insurance' || selectedService === 'subsidy') && ' 登録メールアドレス '}
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