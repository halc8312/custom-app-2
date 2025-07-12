'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from './page.module.css'

type Tab = 'payment' | 'certificate' | 'simulator'
type TaxType = 'resident' | 'automobile' | 'property' | 'light-vehicle'
type PaymentMethod = 'bank' | 'convenience' | 'credit' | 'smartphone'

interface TaxInfo {
  name: string
  description: string
  dueDate: string
  amount?: number
}

const taxInfoMap: Record<TaxType, TaxInfo> = {
  resident: { 
    name: '県民税・市民税', 
    description: '住民税の納付',
    dueDate: '年4回（6月、8月、10月、1月）'
  },
  automobile: { 
    name: '自動車税', 
    description: '自動車の所有に対する税金',
    dueDate: '毎年5月31日'
  },
  property: { 
    name: '固定資産税', 
    description: '土地・建物に対する税金',
    dueDate: '年4回（4月、7月、12月、2月）'
  },
  'light-vehicle': { 
    name: '軽自動車税', 
    description: '軽自動車・バイクの所有に対する税金',
    dueDate: '毎年5月31日'
  }
}

export default function TaxServicePage() {
  const [activeTab, setActiveTab] = useState<Tab>('payment')
  const [selectedTax, setSelectedTax] = useState<TaxType | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)
  const [applicationNumber, setApplicationNumber] = useState('')
  
  // Simulator states
  const [income, setIncome] = useState('')
  const [propertyValue, setPropertyValue] = useState('')
  const [carType, setCarType] = useState<'regular' | 'light' | 'none'>('none')
  const [simulationResult, setSimulationResult] = useState<any>(null)

  // Certificate application states
  const [certificateForm, setCertificateForm] = useState({
    taxType: '',
    year: new Date().getFullYear().toString(),
    name: '',
    address: '',
    phone: '',
    email: ''
  })
  const [certificateStep, setCertificateStep] = useState<'form' | 'confirm' | 'complete'>('form')

  const calculateTax = () => {
    const incomeNum = parseInt(income) || 0
    const propertyNum = parseInt(propertyValue) || 0
    
    // 簡易的な計算（実際の税計算はもっと複雑です）
    const residentTax = Math.floor(incomeNum * 0.1) // 所得の約10%
    const propertyTax = Math.floor(propertyNum * 0.014) // 固定資産評価額の1.4%
    const automobileTax = carType === 'regular' ? 39500 : carType === 'light' ? 10800 : 0
    
    setSimulationResult({
      resident: residentTax,
      property: propertyTax,
      automobile: automobileTax,
      total: residentTax + propertyTax + automobileTax
    })
  }

  const handleCertificateSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCertificateStep('confirm')
  }

  const handleCertificateConfirm = () => {
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`TAX-${new Date().getFullYear()}-${randomNum}`)
    setCertificateStep('complete')
  }

  const handlePaymentComplete = () => {
    const randomNum = Math.floor(Math.random() * 900000) + 100000
    setApplicationNumber(`PAY-${new Date().getFullYear()}-${randomNum}`)
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
            <span>税金関連サービス</span>
          </div>

          <h1 className={styles.pageTitle}>税金関連サービス</h1>

          <div className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${activeTab === 'payment' ? styles.active : ''}`}
              onClick={() => setActiveTab('payment')}
            >
              税金の納付
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'certificate' ? styles.active : ''}`}
              onClick={() => setActiveTab('certificate')}
            >
              納税証明書の申請
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'simulator' ? styles.active : ''}`}
              onClick={() => setActiveTab('simulator')}
            >
              税額シミュレーター
            </button>
          </div>

          {activeTab === 'payment' && (
            <section className={styles.tabContent}>
              {!selectedTax ? (
                <>
                  <h2>納付する税金を選択してください</h2>
                  <div className={styles.taxGrid}>
                    {Object.entries(taxInfoMap).map(([key, info]) => (
                      <button
                        key={key}
                        className={styles.taxCard}
                        onClick={() => setSelectedTax(key as TaxType)}
                      >
                        <h3>{info.name}</h3>
                        <p>{info.description}</p>
                        <p className={styles.dueDate}>納期: {info.dueDate}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : !paymentMethod ? (
                <>
                  <h2>{taxInfoMap[selectedTax].name}の納付方法を選択</h2>
                  <div className={styles.paymentMethods}>
                    <button
                      className={styles.paymentCard}
                      onClick={() => setPaymentMethod('bank')}
                    >
                      <div className={styles.paymentIcon}>🏦</div>
                      <h3>金融機関</h3>
                      <p>銀行・信用金庫等の窓口で納付</p>
                    </button>
                    <button
                      className={styles.paymentCard}
                      onClick={() => setPaymentMethod('convenience')}
                    >
                      <div className={styles.paymentIcon}>🏪</div>
                      <h3>コンビニエンスストア</h3>
                      <p>24時間納付可能</p>
                    </button>
                    <button
                      className={styles.paymentCard}
                      onClick={() => setPaymentMethod('credit')}
                    >
                      <div className={styles.paymentIcon}>💳</div>
                      <h3>クレジットカード</h3>
                      <p>オンラインで即時納付</p>
                    </button>
                    <button
                      className={styles.paymentCard}
                      onClick={() => setPaymentMethod('smartphone')}
                    >
                      <div className={styles.paymentIcon}>📱</div>
                      <h3>スマートフォン決済</h3>
                      <p>PayPay、LINE Pay等で納付</p>
                    </button>
                  </div>
                  <button
                    className={styles.backButton}
                    onClick={() => setSelectedTax(null)}
                  >
                    戻る
                  </button>
                </>
              ) : !applicationNumber ? (
                <div className={styles.paymentInfo}>
                  <h2>納付情報</h2>
                  <div className={styles.paymentSummary}>
                    <h3>税金の種類</h3>
                    <p>{taxInfoMap[selectedTax].name}</p>
                    
                    <h3>納付方法</h3>
                    <p>
                      {paymentMethod === 'bank' && '金融機関窓口'}
                      {paymentMethod === 'convenience' && 'コンビニエンスストア'}
                      {paymentMethod === 'credit' && 'クレジットカード'}
                      {paymentMethod === 'smartphone' && 'スマートフォン決済'}
                    </p>

                    <div className={styles.paymentInstructions}>
                      <h4>納付手順</h4>
                      {paymentMethod === 'bank' && (
                        <ol>
                          <li>納付書を持参して金融機関へ</li>
                          <li>窓口で納付手続き</li>
                          <li>領収証書を受け取る</li>
                        </ol>
                      )}
                      {paymentMethod === 'convenience' && (
                        <ol>
                          <li>納付書のバーコードを確認</li>
                          <li>コンビニのレジで提示</li>
                          <li>現金で支払い</li>
                          <li>領収証書を受け取る</li>
                        </ol>
                      )}
                      {paymentMethod === 'credit' && (
                        <ol>
                          <li>専用サイトにアクセス</li>
                          <li>納付番号を入力</li>
                          <li>クレジットカード情報を入力</li>
                          <li>決済完了</li>
                        </ol>
                      )}
                      {paymentMethod === 'smartphone' && (
                        <ol>
                          <li>決済アプリを起動</li>
                          <li>納付書のバーコードをスキャン</li>
                          <li>金額を確認して決済</li>
                          <li>決済完了通知を確認</li>
                        </ol>
                      )}
                    </div>

                    <div className={styles.notice}>
                      <h4>注意事項</h4>
                      <ul>
                        <li>納期限を過ぎると延滞金が発生する場合があります</li>
                        <li>クレジットカード決済には手数料がかかります</li>
                        <li>領収証書は大切に保管してください</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.formButtons}>
                    <button
                      className={styles.backButton}
                      onClick={() => setPaymentMethod(null)}
                    >
                      戻る
                    </button>
                    <button
                      className={styles.primaryButton}
                      onClick={handlePaymentComplete}
                    >
                      納付手続きへ進む（デモ）
                    </button>
                  </div>
                </div>
              ) : (
                <div className={styles.completeSection}>
                  <div className={styles.successIcon}>✅</div>
                  <h2>納付手続きの準備が完了しました</h2>
                  <div className={styles.applicationInfo}>
                    <h3>受付番号</h3>
                    <p className={styles.applicationNumber}>{applicationNumber}</p>
                    <p className={styles.applicationNote}>
                      実際の納付は選択した方法で行ってください
                    </p>
                  </div>
                  <Link href="/services" className={styles.primaryButton}>
                    サービス一覧へ戻る
                  </Link>
                </div>
              )}
            </section>
          )}

          {activeTab === 'certificate' && (
            <section className={styles.tabContent}>
              {certificateStep === 'form' && (
                <>
                  <h2>納税証明書の申請</h2>
                  <form onSubmit={handleCertificateSubmit} className={styles.certificateForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="taxType">証明書の種類 <span className={styles.required}>必須</span></label>
                      <select
                        id="taxType"
                        value={certificateForm.taxType}
                        onChange={(e) => setCertificateForm({...certificateForm, taxType: e.target.value})}
                        required
                      >
                        <option value="">選択してください</option>
                        <option value="payment">納税証明書（未納税額のない証明）</option>
                        <option value="income">所得証明書</option>
                        <option value="assessment">課税証明書</option>
                        <option value="property">固定資産評価証明書</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="year">年度 <span className={styles.required}>必須</span></label>
                      <select
                        id="year"
                        value={certificateForm.year}
                        onChange={(e) => setCertificateForm({...certificateForm, year: e.target.value})}
                        required
                      >
                        <option value={new Date().getFullYear()}>{new Date().getFullYear()}年度</option>
                        <option value={new Date().getFullYear() - 1}>{new Date().getFullYear() - 1}年度</option>
                        <option value={new Date().getFullYear() - 2}>{new Date().getFullYear() - 2}年度</option>
                      </select>
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="name">申請者氏名 <span className={styles.required}>必須</span></label>
                      <input
                        type="text"
                        id="name"
                        value={certificateForm.name}
                        onChange={(e) => setCertificateForm({...certificateForm, name: e.target.value})}
                        required
                        placeholder="桜県 太郎"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="address">住所 <span className={styles.required}>必須</span></label>
                      <input
                        type="text"
                        id="address"
                        value={certificateForm.address}
                        onChange={(e) => setCertificateForm({...certificateForm, address: e.target.value})}
                        required
                        placeholder="桜県○○市○○町1-2-3"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">電話番号 <span className={styles.required}>必須</span></label>
                      <input
                        type="tel"
                        id="phone"
                        value={certificateForm.phone}
                        onChange={(e) => setCertificateForm({...certificateForm, phone: e.target.value})}
                        required
                        placeholder="090-1234-5678"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email">メールアドレス <span className={styles.required}>必須</span></label>
                      <input
                        type="email"
                        id="email"
                        value={certificateForm.email}
                        onChange={(e) => setCertificateForm({...certificateForm, email: e.target.value})}
                        required
                        placeholder="example@email.com"
                      />
                    </div>

                    <button type="submit" className={styles.primaryButton}>
                      確認画面へ
                    </button>
                  </form>
                </>
              )}

              {certificateStep === 'confirm' && (
                <>
                  <h2>申請内容の確認</h2>
                  <div className={styles.confirmSection}>
                    <table className={styles.confirmTable}>
                      <tbody>
                        <tr>
                          <th>証明書の種類</th>
                          <td>{certificateForm.taxType}</td>
                        </tr>
                        <tr>
                          <th>年度</th>
                          <td>{certificateForm.year}年度</td>
                        </tr>
                        <tr>
                          <th>申請者氏名</th>
                          <td>{certificateForm.name}</td>
                        </tr>
                        <tr>
                          <th>住所</th>
                          <td>{certificateForm.address}</td>
                        </tr>
                        <tr>
                          <th>電話番号</th>
                          <td>{certificateForm.phone}</td>
                        </tr>
                        <tr>
                          <th>メールアドレス</th>
                          <td>{certificateForm.email}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className={styles.feeInfo}>
                      <h3>手数料</h3>
                      <p className={styles.feeAmount}>300円</p>
                    </div>

                    <div className={styles.formButtons}>
                      <button
                        className={styles.backButton}
                        onClick={() => setCertificateStep('form')}
                      >
                        戻る
                      </button>
                      <button
                        className={styles.primaryButton}
                        onClick={handleCertificateConfirm}
                      >
                        申請する
                      </button>
                    </div>
                  </div>
                </>
              )}

              {certificateStep === 'complete' && (
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
                      <li>本人確認書類を準備する</li>
                      <li>市役所・区役所の税務窓口へ</li>
                      <li>申請番号を伝える</li>
                      <li>手数料を支払い、証明書を受け取る</li>
                    </ol>
                  </div>
                  <Link href="/services" className={styles.primaryButton}>
                    サービス一覧へ戻る
                  </Link>
                </div>
              )}
            </section>
          )}

          {activeTab === 'simulator' && (
            <section className={styles.tabContent}>
              <h2>税額シミュレーター</h2>
              <div className={styles.simulatorForm}>
                <p className={styles.simulatorNote}>
                  ※このシミュレーターは概算です。実際の税額とは異なる場合があります。
                </p>
                
                <div className={styles.formGroup}>
                  <label htmlFor="income">年収（万円）</label>
                  <input
                    type="number"
                    id="income"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="500"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="propertyValue">固定資産評価額（万円）</label>
                  <input
                    type="number"
                    id="propertyValue"
                    value={propertyValue}
                    onChange={(e) => setPropertyValue(e.target.value)}
                    placeholder="2000"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="carType">自動車の種類</label>
                  <select
                    id="carType"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value as any)}
                  >
                    <option value="none">所有していない</option>
                    <option value="regular">普通自動車</option>
                    <option value="light">軽自動車</option>
                  </select>
                </div>

                <button
                  className={styles.primaryButton}
                  onClick={calculateTax}
                >
                  税額を計算する
                </button>

                {simulationResult && (
                  <div className={styles.simulationResult}>
                    <h3>シミュレーション結果</h3>
                    <table className={styles.resultTable}>
                      <tbody>
                        <tr>
                          <th>住民税（年額）</th>
                          <td>{simulationResult.resident.toLocaleString()}円</td>
                        </tr>
                        <tr>
                          <th>固定資産税（年額）</th>
                          <td>{simulationResult.property.toLocaleString()}円</td>
                        </tr>
                        <tr>
                          <th>自動車税（年額）</th>
                          <td>{simulationResult.automobile.toLocaleString()}円</td>
                        </tr>
                        <tr className={styles.totalRow}>
                          <th>合計（年額）</th>
                          <td>{simulationResult.total.toLocaleString()}円</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className={styles.monthlyAmount}>
                      月額換算: 約{Math.floor(simulationResult.total / 12).toLocaleString()}円
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}