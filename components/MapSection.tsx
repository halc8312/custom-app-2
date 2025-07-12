'use client'

import Link from 'next/link'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import SakuraMap from './SakuraMap'
import styles from './MapSection.module.css'

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: '500px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#f3f4f6',
      borderRadius: '12px'
    }}>
      <p>地図を読み込んでいます...</p>
    </div>
  )
})

export default function MapSection() {
  const [mapType, setMapType] = useState<'svg' | 'geojson'>('geojson')

  return (
    <section className={styles.mapSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>桜県を探索する</h2>
          <p className={styles.subtitle}>
            インタラクティブマップで桜県の各地域を詳しく見てみましょう
          </p>
        </div>

        <div className={styles.mapToggle}>
          <button
            className={`${styles.toggleButton} ${mapType === 'svg' ? styles.active : ''}`}
            onClick={() => setMapType('svg')}
          >
            シンプル
          </button>
          <button
            className={`${styles.toggleButton} ${mapType === 'geojson' ? styles.active : ''}`}
            onClick={() => setMapType('geojson')}
          >
            詳細
          </button>
        </div>

        <div className={styles.mapWrapper}>
          {mapType === 'svg' ? (
            <SakuraMap height="500px" showControls={true} />
          ) : (
            <LeafletMap height="500px" />
          )}
        </div>

        <div className={styles.mapActions}>
          <Link href="/map" className={styles.fullMapLink}>
            <span>🗺️</span>
            フルスクリーンマップを見る
          </Link>
          <div className={styles.quickInfo}>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🏛️</span>
              <div>
                <strong>6都市</strong>
                <span>主要都市</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>🌸</span>
              <div>
                <strong>10箇所</strong>
                <span>観光スポット</span>
              </div>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoIcon}>👥</span>
              <div>
                <strong>220万人</strong>
                <span>総人口</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}