'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

type Step = 'select' | 'form' | 'delivery' | 'confirm' | 'complete'
type CertificateType = 'resident' | 'family' | 'seal' | 'income' | 'tax'
type DeliveryMethod = 'counter' | 'mail'

interface FormData {
  certificateType: CertificateType | null
  quantity: string
  purpose: string
  name: string
  address: string
  phone: string
  email: string
  deliveryMethod: DeliveryMethod
  mailAddress?: string
}

const certificateInfo = {
  resident: { name: '住民票の写し', fee: 300, description: '現住所の証明書' },
  family: { name: '戸籍謄本・抄本', fee: 450, description: '戸籍に関する証明書' },
  seal: { name: '印鑑登録証明書', fee: 300, description: '実印の証明書' },
  income: { name: '所得証明書', fee: 300, description: '所得額の証明書' },
  tax: { name: '納税証明書', fee: 300, description: '税金納付の証明書' }
}

export default function CertificateServicePage() {
  const [currentStep, setCurrentStep] = useState<Step>('select')
  const [formData, setFormData] = useState<FormData>({
    certificateType: null,
    quantity: '1',
    purpose: '',
    name: '',
    address: '',
    phone: '',
    email: '',
    deliveryMethod: 'counter',
    mailAddress: ''
  })
  const [applicationNumber, setApplicationNumber] = useState('')

  const handleCertificateSelect = (type: CertificateType) => {
    setFormData({ ...formData, certificateType: type })
    setCurrentStep('form')
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep('delivery')
  }

  const calculateFee = () => {
    if (!formData.certificateType) return 0
    const baseFee = certificateInfo[formData.certificateType].fee
    const quantity = parseInt(formData.quantity)
    const certificateFee = baseFee * quantity
    const deliveryFee = formData.deliveryMethod === 'mail' ? 370 : 0 // 郵送手数料
    return certificateFee + deliveryFee
  }

  const handleConfirm = () => {
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`CERT-${new Date().getFullYear()}-${randomNum}`)
    setCurrentStep('complete')
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
            <span>各種証明書の申請</span>
          </div>

          <h1 className={styles.pageTitle}>各種証明書の申請</h1>

          <div className={styles.progressBar}>
            <div className={`${styles.progressStep} ${currentStep === 'select' ? styles.active : ''} ${['form', 'delivery', 'confirm', 'complete'].includes(currentStep) ? styles.completed : ''}`}>
              1. 証明書選択
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'form' ? styles.active : ''} ${['delivery', 'confirm', 'complete'].includes(currentStep) ? styles.completed : ''}`}>
              2. 申請情報
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'delivery' ? styles.active : ''} ${['confirm', 'complete'].includes(currentStep) ? styles.completed : ''}`}>
              3. 交付方法
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'confirm' ? styles.active : ''} ${currentStep === 'complete' ? styles.completed : ''}`}>
              4. 確認
            </div>
            <div className={`${styles.progressStep} ${currentStep === 'complete' ? styles.active : ''}`}>
              5. 完了
            </div>
          </div>

          {currentStep === 'select' && (
            <section className={styles.stepSection}>
              <h2>申請する証明書を選択してください</h2>
              <div className={styles.certificateGrid}>
                {Object.entries(certificateInfo).map(([key, info]) => (
                  <button
                    key={key}
                    className={styles.certificateCard}
                    onClick={() => handleCertificateSelect(key as CertificateType)}
                  >
                    <h3>{info.name}</h3>
                    <p className={styles.description}>{info.description}</p>
                    <p className={styles.fee}>手数料: {info.fee}円/通</p>
                  </button>
                ))}
              </div>
            </section>
          )}

          {currentStep === 'form' && formData.certificateType && (
            <section className={styles.stepSection}>
              <h2>申請情報を入力してください</h2>
              <form onSubmit={handleFormSubmit} className={styles.applicationForm}>
                <div className={styles.selectedCertificate}>
                  <h3>選択した証明書</h3>
                  <p>{certificateInfo[formData.certificateType].name}</p>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="quantity">必要部数 <span className={styles.required}>必須</span></label>
                  <select
                    id="quantity"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    required
                  >
                    {[1, 2, 3, 4, 5].map(num => (
                      <option key={num} value={num}>{num}通</option>
                    ))}
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="purpose">使用目的 <span className={styles.required}>必須</span></label>
                  <select
                    id="purpose"
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="official">官公署提出用</option>
                    <option value="employment">就職・転職用</option>
                    <option value="school">学校提出用</option>
                    <option value="bank">金融機関提出用</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="name">申請者氏名 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="桜県 太郎"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="address">住所 <span className={styles.required}>必須</span></label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                    placeholder="桜県○○市○○町1-2-3"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">電話番号 <span className={styles.required}>必須</span></label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="090-1234-5678"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">メールアドレス <span className={styles.required}>必須</span></label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    次へ
                  </button>
                </div>
              </form>
            </section>
          )}

          {currentStep === 'delivery' && (
            <section className={styles.stepSection}>
              <h2>交付方法を選択してください</h2>
              <div className={styles.deliverySection}>
                <div className={styles.deliveryOptions}>
                  <label className={styles.deliveryOption}>
                    <input
                      type="radio"
                      name="delivery"
                      value="counter"
                      checked={formData.deliveryMethod === 'counter'}
                      onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value as DeliveryMethod })}
                    />
                    <div className={styles.deliveryContent}>
                      <h3>窓口受取</h3>
                      <p>市役所・区役所の窓口で受け取り</p>
                      <p className={styles.deliveryNote}>即日交付可能</p>
                    </div>
                  </label>

                  <label className={styles.deliveryOption}>
                    <input
                      type="radio"
                      name="delivery"
                      value="mail"
                      checked={formData.deliveryMethod === 'mail'}
                      onChange={(e) => setFormData({ ...formData, deliveryMethod: e.target.value as DeliveryMethod })}
                    />
                    <div className={styles.deliveryContent}>
                      <h3>郵送受取</h3>
                      <p>指定の住所へ郵送</p>
                      <p className={styles.deliveryNote}>郵送料: 370円</p>
                    </div>
                  </label>
                </div>

                {formData.deliveryMethod === 'mail' && (
                  <div className={styles.mailAddressSection}>
                    <div className={styles.formGroup}>
                      <label htmlFor="mailAddress">送付先住所</label>
                      <input
                        type="text"
                        id="mailAddress"
                        value={formData.mailAddress}
                        onChange={(e) => setFormData({ ...formData, mailAddress: e.target.value })}
                        placeholder="住民登録地と異なる場合のみ入力"
                      />
                    </div>
                  </div>
                )}

                <div className={styles.feeInfo}>
                  <h3>手数料合計</h3>
                  <p className={styles.feeAmount}>{calculateFee()}円</p>
                  <div className={styles.feeBreakdown}>
                    <p>証明書手数料: {formData.certificateType ? certificateInfo[formData.certificateType].fee * parseInt(formData.quantity) : 0}円</p>
                    {formData.deliveryMethod === 'mail' && <p>郵送料: 370円</p>}
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
                  >
                    確認画面へ
                  </button>
                </div>
              </div>
            </section>
          )}

          {currentStep === 'confirm' && formData.certificateType && (
            <section className={styles.stepSection}>
              <h2>申請内容の確認</h2>
              <div className={styles.confirmSection}>
                <h3>証明書情報</h3>
                <table className={styles.confirmTable}>
                  <tbody>
                    <tr>
                      <th>証明書の種類</th>
                      <td>{certificateInfo[formData.certificateType].name}</td>
                    </tr>
                    <tr>
                      <th>必要部数</th>
                      <td>{formData.quantity}通</td>
                    </tr>
                    <tr>
                      <th>使用目的</th>
                      <td>{formData.purpose}</td>
                    </tr>
                  </tbody>
                </table>

                <h3>申請者情報</h3>
                <table className={styles.confirmTable}>
                  <tbody>
                    <tr>
                      <th>氏名</th>
                      <td>{formData.name}</td>
                    </tr>
                    <tr>
                      <th>住所</th>
                      <td>{formData.address}</td>
                    </tr>
                    <tr>
                      <th>電話番号</th>
                      <td>{formData.phone}</td>
                    </tr>
                    <tr>
                      <th>メールアドレス</th>
                      <td>{formData.email}</td>
                    </tr>
                  </tbody>
                </table>

                <h3>交付方法</h3>
                <p>{formData.deliveryMethod === 'counter' ? '窓口受取' : '郵送受取'}</p>
                {formData.deliveryMethod === 'mail' && formData.mailAddress && (
                  <p>送付先: {formData.mailAddress}</p>
                )}

                <h3>手数料</h3>
                <p className={styles.confirmFee}>{calculateFee()}円</p>

                <div className={styles.notice}>
                  <h4>注意事項</h4>
                  <ul>
                    <li>この申請は仮申請です。正式な申請は窓口で行ってください。</li>
                    <li>窓口での本人確認が必要です。</li>
                    <li>手数料は窓口でお支払いください。</li>
                  </ul>
                </div>

                <div className={styles.formButtons}>
                  <button
                    className={styles.backButton}
                    onClick={() => setCurrentStep('delivery')}
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
                  {formData.deliveryMethod === 'counter' ? (
                    <ol>
                      <li>本人確認書類を準備する</li>
                      <li>お住まいの地域の市役所・区役所へ行く</li>
                      <li>証明書交付窓口で申請番号を伝える</li>
                      <li>手数料を支払い、証明書を受け取る</li>
                    </ol>
                  ) : (
                    <ol>
                      <li>窓口で正式な申請手続きを行う</li>
                      <li>手数料を支払う</li>
                      <li>証明書が郵送されるのを待つ（3-5営業日）</li>
                    </ol>
                  )}
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