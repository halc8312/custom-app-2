'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

type Step = 'type' | 'form' | 'documents' | 'confirm' | 'complete'
type MoveType = 'in' | 'out' | 'within'

export default function MovingServicePage() {
  const [currentStep, setCurrentStep] = useState<Step>('type')
  const [moveType, setMoveType] = useState<MoveType | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    currentAddress: '',
    newAddress: '',
    moveDate: '',
    email: '',
    phone: '',
    familySize: '1',
  })
  const [checkedDocuments, setCheckedDocuments] = useState<string[]>([])
  const [applicationNumber, setApplicationNumber] = useState('')

  const handleMoveTypeSelect = (type: MoveType) => {
    setMoveType(type)
    setCurrentStep('form')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('documents')
  }

  const handleDocumentCheck = (doc: string) => {
    setCheckedDocuments(prev =>
      prev.includes(doc) ? prev.filter(d => d !== doc) : [...prev, doc]
    )
  }

  const handleConfirm = () => {
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`SKR-${new Date().getFullYear()}-${randomNum}`)
    setCurrentStep('complete')
  }

  const getRequiredDocuments = () => {
    const common = ['本人確認書類（運転免許証、マイナンバーカードなど）', '印鑑']
    if (moveType === 'in') {
      return [...common, '転出証明書（前住所地で発行）', '世帯全員の住民票（世帯主変更の場合）']
    } else if (moveType === 'out') {
      return [...common, '新住所が確認できる書類']
    } else {
      return [...common, '新住所が確認できる書類（賃貸契約書など）']
    }
  }

  const calculateFee = () => {
    const baseFee = 300
    const familyFee = (parseInt(formData.familySize) - 1) * 200
    return baseFee + familyFee
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
            <span>引越し・転入転出手続き</span>
          </div>

          <h1 className={styles.pageTitle}>引越し・転入転出手続き</h1>

          <div className={styles.progressBar}>
            <div className={`${styles.progressStep} ${currentStep === 'type' ? styles.active : ''} ${['form', 'documents', 'confirm', 'complete'].includes(currentStep) ? styles.completed : ''}`}>
              1. 手続き選択
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'form' ? styles.active : ''} ${['documents', 'confirm', 'complete'].includes(currentStep) ? styles.completed : ''}`}>
              2. 情報入力
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'documents' ? styles.active : ''} ${['confirm', 'complete'].includes(currentStep) ? styles.completed : ''}`}>
              3. 必要書類
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'confirm' ? styles.active : ''} ${currentStep === 'complete' ? styles.completed : ''}`}>
              4. 確認
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'complete' ? styles.active : ''}`}>
              5. 完了
            </div>
          </div>

          {currentStep === 'type' && (
            <section className={styles.stepSection}>
              <h2>手続きの種類を選択してください</h2>
              <div className={styles.typeGrid}>
                <button 
                  className={styles.typeCard}
                  onClick={() => handleMoveTypeSelect('in')}
                >
                  <div className={styles.typeIcon}>📥</div>
                  <h3>転入届</h3>
                  <p>他の市区町村から桜県へ引越し</p>
                </button>
                <button 
                  className={styles.typeCard}
                  onClick={() => handleMoveTypeSelect('out')}
                >
                  <div className={styles.typeIcon}>📤</div>
                  <h3>転出届</h3>
                  <p>桜県から他の市区町村へ引越し</p>
                </button>
                <button 
                  className={styles.typeCard}
                  onClick={() => handleMoveTypeSelect('within')}
                >
                  <div className={styles.typeIcon}>🔄</div>
                  <h3>転居届</h3>
                  <p>桜県内での引越し</p>
                </button>
              </div>
            </section>
          )}

          {currentStep === 'form' && (
            <section className={styles.stepSection}>
              <h2>申請者情報を入力してください</h2>
              <form onSubmit={handleFormSubmit} className={styles.applicationForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="currentAddress">現住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="currentAddress"
                    value={formData.currentAddress}
                    onChange={(e) => setFormData({...formData, currentAddress: e.target.value})}
                    required
                    placeholder={moveType === 'in' ? "東京都○○区..." : "桜県○○市..."}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="newAddress">新住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="newAddress"
                    value={formData.newAddress}
                    onChange={(e) => setFormData({...formData, newAddress: e.target.value})}
                    required
                    placeholder={moveType === 'out' ? "東京都○○区..." : "桜県○○市..."}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="moveDate">転入/転出予定日 <span className={styles.required}>必須</span></label>
                  <input
                    type="date"
                    id="moveDate"
                    value={formData.moveDate}
                    onChange={(e) => setFormData({...formData, moveDate: e.target.value})}
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="familySize">世帯人数</label>
                  <select
                    id="familySize"
                    value={formData.familySize}
                    onChange={(e) => setFormData({...formData, familySize: e.target.value})}
                  >
                    <option value="1">1人</option>
                    <option value="2">2人</option>
                    <option value="3">3人</option>
                    <option value="4">4人</option>
                    <option value="5">5人以上</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formButtons}>
                  <button 
                    type="button" 
                    className={styles.backButton}
                    onClick={() => setCurrentStep('type')}
                  >
                    戻る
                  </button>
                  <button type="submit" className={styles.primaryButton}>
                    次へ
                  </button>
                </div>
              </form>
            </section>
          )}

          {currentStep === 'documents' && (
            <section className={styles.stepSection}>
              <h2>必要書類を確認してください</h2>
              <div className={styles.documentsSection}>
                <p>以下の書類をご用意の上、窓口にお越しください。</p>
                <div className={styles.documentsList}>
                  {getRequiredDocuments().map((doc, index) => (
                    <div key={index} className={styles.documentItem}>
                      <input
                        type="checkbox"
                        id={`doc-${index}`}
                        checked={checkedDocuments.includes(doc)}
                        onChange={() => handleDocumentCheck(doc)}
                      />
                      <label htmlFor={`doc-${index}`}>{doc}</label>
                    </div>
                  ))}
                </div>

                <div className={styles.feeInfo}>
                  <h3>手数料</h3>
                  <p className={styles.feeAmount}>{calculateFee()}円</p>
                  <p className={styles.feeNote}>
                    基本手数料: 300円<br />
                    世帯人数による追加料金: {(parseInt(formData.familySize) - 1) * 200}円
                  </p>
                </div>

                <div className={styles.officeInfo}>
                  <h3>受付窓口</h3>
                  <p>お住まいの地域の市役所・区役所</p>
                  <p>受付時間: 平日 8:30〜17:00</p>
                  <p>※土曜日は一部窓口で受付（要確認）</p>
                </div>
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
                  onClick={() => setCurrentStep('confirm')}
                  disabled={checkedDocuments.length !== getRequiredDocuments().length}
                >
                  確認画面へ
                </button>
              </div>
            </section>
          )}

          {currentStep === 'confirm' && (
            <section className={styles.stepSection}>
              <h2>申請内容の確認</h2>
              <div className={styles.confirmSection}>
                <h3>手続き種別</h3>
                <p>{moveType === 'in' ? '転入届' : moveType === 'out' ? '転出届' : '転居届'}</p>

                <h3>申請者情報</h3>
                <table className={styles.confirmTable}>
                  <tbody>
                    <tr>
                      <th>氏名</th>
                      <td>{formData.name}</td>
                    </tr>
                    <tr>
                      <th>現住所</th>
                      <td>{formData.currentAddress}</td>
                    </tr>
                    <tr>
                      <th>新住所</th>
                      <td>{formData.newAddress}</td>
                    </tr>
                    <tr>
                      <th>転入/転出予定日</th>
                      <td>{formData.moveDate}</td>
                    </tr>
                    <tr>
                      <th>世帯人数</th>
                      <td>{formData.familySize}人</td>
                    </tr>
                    <tr>
                      <th>メールアドレス</th>
                      <td>{formData.email}</td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>{formData.phone}</td>
                    </tr>
                  </tbody>
                </table>

                <h3>手数料</h3>
                <p className={styles.confirmFee}>{calculateFee()}円</p>

                <div className={styles.notice}>
                  <h4>注意事項</h4>
                  <ul>
                    <li>この申請は仮申請です。必ず窓口での手続きが必要です。</li>
                    <li>申請番号をメモまたは印刷して、窓口にお持ちください。</li>
                    <li>必要書類を忘れずにご持参ください。</li>
                  </ul>
                </div>

                <div className={styles.formButtons}>
                  <button 
                    className={styles.backButton}
                    onClick={() => setCurrentStep('documents')}
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
            <section className={styles.stepSection}>
              <div className={styles.completeSection}>
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
                  <ol>
                    <li>必要書類を準備する</li>
                    <li>お住まいの地域の市役所・区役所へ行く</li>
                    <li>窓口で申請番号を伝える</li>
                    <li>正式な手続きを行う</li>
                  </ol>
                </div>

                <div className={styles.confirmEmail}>
                  <p>確認メールを {formData.email} に送信しました。</p>
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
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}