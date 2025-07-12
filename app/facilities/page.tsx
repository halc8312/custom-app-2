'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

export default function FacilitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedCity, setSelectedCity] = useState('all')

  const categories = [
    { id: 'all', name: '全施設', icon: '🏢' },
    { id: 'culture', name: '文化・スポーツ', icon: '🎭' },
    { id: 'education', name: '教育・学習', icon: '📚' },
    { id: 'welfare', name: '福祉・保健', icon: '🏥' },
    { id: 'community', name: 'コミュニティ', icon: '👥' },
    { id: 'park', name: '公園・レジャー', icon: '🌳' },
    { id: 'government', name: '行政機関', icon: '🏛️' }
  ]

  const cities = [
    { id: 'all', name: '全地域' },
    { id: 'sakura-ka', name: '桜花市' },
    { id: 'higashi-sakura', name: '東桜市' },
    { id: 'sakuragawa', name: '桜川市' },
    { id: 'minami-sakura', name: '南桜市' },
    { id: 'nishi-sakura', name: '西桜市' },
    { id: 'kita-sakura', name: '北桜市' }
  ]

  const facilities = [
    {
      id: 1,
      name: '桜県立美術館',
      category: 'culture',
      city: 'sakura-ka',
      address: '桜花市中央1-2-3',
      phone: '023-456-7890',
      hours: '9:00-17:00（月曜休館）',
      description: '県内外の優れた美術作品を収蔵・展示。特に桜をテーマにした作品コレクションが充実',
      facilities: ['展示室', 'ミュージアムショップ', 'カフェ', '駐車場'],
      image: '🎨'
    },
    {
      id: 2,
      name: '桜県立総合体育館',
      category: 'culture',
      city: 'sakura-ka',
      address: '桜花市スポーツ町4-5-6',
      phone: '023-456-7891',
      hours: '9:00-21:00',
      description: '各種スポーツ大会やイベントが開催される大型体育施設',
      facilities: ['メインアリーナ', 'サブアリーナ', 'トレーニングルーム', '会議室'],
      image: '🏟️'
    },
    {
      id: 3,
      name: '桜県立図書館',
      category: 'education',
      city: 'sakura-ka',
      address: '桜花市文教町7-8-9',
      phone: '023-456-7892',
      hours: '9:00-20:00（月曜休館）',
      description: '県内最大級の蔵書数を誇る総合図書館。デジタルアーカイブも充実',
      facilities: ['一般書架', '児童書コーナー', '学習室', 'カフェスペース'],
      image: '📚'
    },
    {
      id: 4,
      name: '桜県福祉センター',
      category: 'welfare',
      city: 'higashi-sakura',
      address: '東桜市福祉町10-11-12',
      phone: '023-456-7893',
      hours: '8:30-17:15（土日祝休）',
      description: '福祉に関する相談窓口や各種支援サービスを提供',
      facilities: ['相談室', '会議室', '福祉機器展示室', 'バリアフリートイレ'],
      image: '♿'
    },
    {
      id: 5,
      name: '桜湖公園',
      category: 'park',
      city: 'minami-sakura',
      address: '南桜市湖畔町13-14-15',
      phone: '023-456-7894',
      hours: '終日開放',
      description: '桜湖のほとりに広がる県民憩いの公園。春の桜まつりが有名',
      facilities: ['遊歩道', '芝生広場', '遊具', 'バーベキュー場'],
      image: '🌸'
    },
    {
      id: 6,
      name: '桜県科学館',
      category: 'education',
      city: 'higashi-sakura',
      address: '東桜市科学町16-17-18',
      phone: '023-456-7895',
      hours: '9:30-17:00（月曜休館）',
      description: '体験型展示で科学の楽しさを学べる施設。プラネタリウムも人気',
      facilities: ['展示室', 'プラネタリウム', '実験室', 'ショップ'],
      image: '🔬'
    },
    {
      id: 7,
      name: '北桜市民センター',
      category: 'community',
      city: 'kita-sakura',
      address: '北桜市市民町19-20-21',
      phone: '023-456-7896',
      hours: '9:00-21:00',
      description: '市民の交流と学習の場。各種講座やイベントを開催',
      facilities: ['ホール', '会議室', '調理室', '和室'],
      image: '🏢'
    },
    {
      id: 8,
      name: '桜県立病院',
      category: 'welfare',
      city: 'sakura-ka',
      address: '桜花市医療町22-23-24',
      phone: '023-456-7897',
      hours: '24時間（救急対応）',
      description: '県内の中核医療機関。高度医療と救急医療を提供',
      facilities: ['外来', '入院病棟', '救急センター', 'リハビリ室'],
      image: '🏥'
    }
  ]

  const filteredFacilities = facilities.filter(facility => {
    const categoryMatch = selectedCategory === 'all' || facility.category === selectedCategory
    const cityMatch = selectedCity === 'all' || facility.city === selectedCity
    return categoryMatch && cityMatch
  })

  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>施設案内</h1>
        <p className={styles.subtitle}>
          桜県内の公共施設をご案内します
        </p>
      </div>

      <nav className={styles.breadcrumb}>
        <Link href="/">ホーム</Link>
        <span className={styles.separator}>/</span>
        <span>施設案内</span>
      </nav>

      <div className={styles.content}>
        <div className={styles.filters}>
          <div className={styles.filterSection}>
            <h3>施設カテゴリー</h3>
            <div className={styles.filterButtons}>
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`${styles.filterButton} ${selectedCategory === category.id ? styles.active : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <span className={styles.filterIcon}>{category.icon}</span>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterSection}>
            <h3>地域</h3>
            <div className={styles.filterButtons}>
              {cities.map(city => (
                <button
                  key={city.id}
                  className={`${styles.filterButton} ${selectedCity === city.id ? styles.active : ''}`}
                  onClick={() => setSelectedCity(city.id)}
                >
                  {city.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className={styles.facilitiesSection}>
          <div className={styles.resultsHeader}>
            <h2>検索結果</h2>
            <p className={styles.resultCount}>{filteredFacilities.length}件の施設が見つかりました</p>
          </div>

          <div className={styles.facilitiesGrid}>
            {filteredFacilities.map(facility => (
              <article key={facility.id} className={styles.facilityCard}>
                <div className={styles.facilityHeader}>
                  <span className={styles.facilityIcon}>{facility.image}</span>
                  <div>
                    <h3 className={styles.facilityName}>{facility.name}</h3>
                    <p className={styles.facilityCategory}>
                      {categories.find(c => c.id === facility.category)?.name}
                    </p>
                  </div>
                </div>

                <p className={styles.facilityDescription}>{facility.description}</p>

                <div className={styles.facilityInfo}>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📍</span>
                    <span>{facility.address}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>📞</span>
                    <span>{facility.phone}</span>
                  </div>
                  <div className={styles.infoItem}>
                    <span className={styles.infoIcon}>🕐</span>
                    <span>{facility.hours}</span>
                  </div>
                </div>

                <div className={styles.facilityFeatures}>
                  <h4>主な設備</h4>
                  <div className={styles.featuresList}>
                    {facility.facilities.map((feature, index) => (
                      <span key={index} className={styles.feature}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.facilityActions}>
                  <a href="#" className={styles.detailLink}>
                    詳細情報
                  </a>
                  <a href="#" className={styles.mapLink}>
                    地図を見る
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.accessInfo}>
          <h2>アクセシビリティ情報</h2>
          <div className={styles.accessGrid}>
            <div className={styles.accessCard}>
              <h3>バリアフリー対応</h3>
              <p>車椅子対応、多目的トイレ、エレベーター設置状況など</p>
              <a href="#" className={styles.accessLink}>
                バリアフリー情報一覧
              </a>
            </div>
            <div className={styles.accessCard}>
              <h3>駐車場情報</h3>
              <p>各施設の駐車場台数、料金、障害者用駐車スペースなど</p>
              <a href="#" className={styles.accessLink}>
                駐車場情報一覧
              </a>
            </div>
            <div className={styles.accessCard}>
              <h3>公共交通アクセス</h3>
              <p>最寄り駅・バス停からの経路、時刻表リンクなど</p>
              <a href="#" className={styles.accessLink}>
                アクセス方法一覧
              </a>
            </div>
          </div>
        </section>

        <section className={styles.reservation}>
          <h2>施設予約システム</h2>
          <div className={styles.reservationInfo}>
            <div className={styles.reservationContent}>
              <h3>オンライン予約が可能です</h3>
              <p>
                会議室、ホール、スポーツ施設などの予約が
                24時間いつでもオンラインで可能です。
              </p>
              <ul className={styles.reservationFeatures}>
                <li>空き状況をリアルタイムで確認</li>
                <li>最大3ヶ月先まで予約可能</li>
                <li>予約の変更・キャンセルも簡単</li>
                <li>利用料金の事前確認</li>
              </ul>
            </div>
            <div className={styles.reservationActions}>
              <a href="#" className={styles.reservationButton}>
                予約システムにログイン
              </a>
              <a href="#" className={styles.registerLink}>
                新規利用者登録
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>お問い合わせ</h2>
          <div className={styles.contactInfo}>
            <p>施設に関するお問い合わせは、各施設または下記までご連絡ください。</p>
            <div className={styles.contactDetails}>
              <h3>総務部管財課施設管理係</h3>
              <p>電話：023-456-7898（直通）</p>
              <p>FAX：023-456-7899</p>
              <p>メール：shisetsu@pref.sakura.lg.jp</p>
              <p>受付時間：平日 8:30〜17:15</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}