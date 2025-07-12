'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './SakuraMap.module.css'

interface MapLocation {
  id: string
  name: string
  type: 'city' | 'landmark' | 'facility' | 'tourist'
  coordinates: { x: number; y: number }
  description?: string
  link?: string
}

interface MapProps {
  height?: string
  showControls?: boolean
  initialZoom?: number
  center?: { x: number; y: number }
}

export default function SakuraMap({ 
  height = '600px', 
  showControls = true,
  initialZoom = 1,
  center = { x: 50, y: 50 }
}: MapProps) {
  const [zoom, setZoom] = useState(initialZoom)
  const [position, setPosition] = useState(center)
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const mapRef = useRef<HTMLDivElement>(null)

  // 桜県の地理データ
  const locations: MapLocation[] = [
    // 都市
    { id: 'sakuraka', name: '桜花市', type: 'city', coordinates: { x: 50, y: 50 }, description: '県庁所在地・人口68.5万人', link: '/' },
    { id: 'sakuragawa', name: '桜川市', type: 'city', coordinates: { x: 30, y: 40 }, description: '港湾都市・人口52.3万人', link: '/cities/sakuragawa' },
    { id: 'higashi-sakura', name: '東桜市', type: 'city', coordinates: { x: 70, y: 45 }, description: 'IT産業の中心・人口41.2万人', link: '/cities/higashi-sakura' },
    { id: 'nishi-sakura', name: '西桜市', type: 'city', coordinates: { x: 20, y: 55 }, description: '伝統工芸の街・人口23.8万人', link: '/cities/nishi-sakura' },
    { id: 'minami-sakura', name: '南桜市', type: 'city', coordinates: { x: 45, y: 75 }, description: '温泉観光都市・人口15.6万人', link: '/cities/minami-sakura' },
    { id: 'kita-sakura', name: '北桜市', type: 'city', coordinates: { x: 55, y: 25 }, description: '農業都市・人口18.9万人', link: '/cities/kita-sakura' },
    
    // 観光地
    { id: 'sakura-castle', name: '桜城', type: 'tourist', coordinates: { x: 52, y: 48 }, description: '国宝・桜県のシンボル', link: '/tourism/spots/sakura-castle' },
    { id: 'thousand-sakura', name: '千本桜公園', type: 'tourist', coordinates: { x: 48, y: 52 }, description: '日本三大桜名所', link: '/tourism/spots/thousand-sakura' },
    { id: 'sakura-lake', name: '桜湖', type: 'tourist', coordinates: { x: 65, y: 60 }, description: 'レジャースポット', link: '/tourism/spots/sakura-lake' },
    { id: 'minami-onsen', name: '南桜温泉郷', type: 'tourist', coordinates: { x: 43, y: 73 }, description: '名湯の里', link: '/tourism/spots/minami-onsen' },
    
    // 主要施設
    { id: 'prefectural-office', name: '桜県庁', type: 'facility', coordinates: { x: 51, y: 51 }, description: '県政の中心' },
    { id: 'sakura-airport', name: '桜空港', type: 'facility', coordinates: { x: 35, y: 35 }, description: '国際空港' },
    { id: 'sakura-station', name: '桜花駅', type: 'facility', coordinates: { x: 49, y: 49 }, description: '新幹線停車駅' },
    { id: 'tech-park', name: '桜テクノパーク', type: 'facility', coordinates: { x: 72, y: 43 }, description: 'IT企業集積地' },
  ]

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!mapRef.current) return
    setIsDragging(true)
    setDragStart({
      x: e.clientX - position.x * zoom,
      y: e.clientY - position.y * zoom
    })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !mapRef.current) return
    setPosition({
      x: (e.clientX - dragStart.x) / zoom,
      y: (e.clientY - dragStart.y) / zoom
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.max(0.5, Math.min(3, zoom * delta))
    setZoom(newZoom)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(3, prev * 1.2))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(0.5, prev * 0.8))
  }

  const handleReset = () => {
    setZoom(initialZoom)
    setPosition(center)
  }

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case 'city': return '🏛️'
      case 'tourist': return '🌸'
      case 'facility': return '🏢'
      default: return '📍'
    }
  }

  return (
    <div className={styles.mapContainer} style={{ height }}>
      <div 
        ref={mapRef}
        className={styles.mapViewport}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div 
          className={styles.mapContent}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transformOrigin: '0 0'
          }}
        >
          {/* 桜県の地形（SVG） */}
          <svg 
            className={styles.mapSvg}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* 県境 */}
            <path
              d="M 20 10 Q 50 5 80 15 Q 90 40 85 70 Q 70 90 40 92 Q 10 80 5 50 Q 8 20 20 10"
              fill="#f0f9ff"
              stroke="#1e40af"
              strokeWidth="0.5"
            />
            
            {/* 主要道路 */}
            <line x1="50" y1="50" x2="30" y2="40" stroke="#6b7280" strokeWidth="0.3" strokeDasharray="0.5,0.5" />
            <line x1="50" y1="50" x2="70" y2="45" stroke="#6b7280" strokeWidth="0.3" strokeDasharray="0.5,0.5" />
            <line x1="50" y1="50" x2="45" y2="75" stroke="#6b7280" strokeWidth="0.3" strokeDasharray="0.5,0.5" />
            <line x1="50" y1="50" x2="55" y2="25" stroke="#6b7280" strokeWidth="0.3" strokeDasharray="0.5,0.5" />
            
            {/* 河川 */}
            <path
              d="M 25 20 Q 35 35 30 40 Q 32 50 35 65 Q 40 75 45 80"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.4"
            />
            
            {/* 湖 */}
            <ellipse cx="65" cy="60" rx="5" ry="3" fill="#60a5fa" opacity="0.6" />
          </svg>

          {/* マーカー */}
          {locations.map(location => (
            <div
              key={location.id}
              className={`${styles.marker} ${selectedLocation?.id === location.id ? styles.selected : ''}`}
              style={{
                left: `${location.coordinates.x}%`,
                top: `${location.coordinates.y}%`,
              }}
              onClick={(e) => {
                e.stopPropagation()
                setSelectedLocation(location)
              }}
            >
              <span className={styles.markerIcon}>{getMarkerIcon(location.type)}</span>
              <span className={styles.markerLabel}>{location.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* コントロールパネル */}
      {showControls && (
        <div className={styles.controls}>
          <button onClick={handleZoomIn} className={styles.controlButton} title="拡大">
            ➕
          </button>
          <button onClick={handleZoomOut} className={styles.controlButton} title="縮小">
            ➖
          </button>
          <button onClick={handleReset} className={styles.controlButton} title="リセット">
            🔄
          </button>
        </div>
      )}

      {/* 情報パネル */}
      {selectedLocation && (
        <div className={styles.infoPanel}>
          <button 
            className={styles.closeButton}
            onClick={() => setSelectedLocation(null)}
          >
            ✕
          </button>
          <h3>{selectedLocation.name}</h3>
          {selectedLocation.description && (
            <p>{selectedLocation.description}</p>
          )}
          {selectedLocation.link && (
            <a href={selectedLocation.link} className={styles.infoLink}>
              詳細を見る →
            </a>
          )}
        </div>
      )}

      {/* 凡例 */}
      <div className={styles.legend}>
        <h4>凡例</h4>
        <div className={styles.legendItem}>
          <span className={styles.legendIcon}>🏛️</span>
          <span>都市</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendIcon}>🌸</span>
          <span>観光地</span>
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendIcon}>🏢</span>
          <span>主要施設</span>
        </div>
      </div>
    </div>
  )
}