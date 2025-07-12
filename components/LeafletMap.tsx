'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import sakuraPrefectureData from '@/data/sakura-prefecture.json'
import styles from './LeafletMap.module.css'

declare global {
  interface Window {
    L: any
  }
}

interface LeafletMapProps {
  height?: string
  center?: [number, number]
  zoom?: number
}

export default function LeafletMap({ 
  height = '600px',
  center = [35.65, 139.65], // 桜花市の中心
  zoom = 9
}: LeafletMapProps) {
  const mapRef = useRef<any>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const isInitialized = useRef(false)
  const [mapError, setMapError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const initializeMap = () => {
    console.log('Initializing map...', { hasContainer: !!mapContainerRef.current, hasLeaflet: !!window.L, isInitialized: isInitialized.current })
    
    if (!mapContainerRef.current || !window.L || isInitialized.current) {
      if (!window.L) {
        console.error('Leaflet not loaded')
        setMapError('地図ライブラリの読み込みに失敗しました')
      }
      return
    }

    try {
      isInitialized.current = true
      setIsLoading(false)

      // 地図の初期化
      const L = window.L
      const map = L.map(mapContainerRef.current).setView(center, zoom)
      mapRef.current = map

    // タイルレイヤー
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; 桜県地理院 | Map data &copy; Sakura Prefecture',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map)

    // カスタムアイコン定義
    const cityIcon = L.divIcon({
      html: '<div class="' + styles.customMarker + ' ' + styles.cityMarker + '">🏛️</div>',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35],
      className: ''
    })

    const touristIcon = L.divIcon({
      html: '<div class="' + styles.customMarker + ' ' + styles.touristMarker + '">🌸</div>',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35],
      className: ''
    })

    const facilityIcon = L.divIcon({
      html: '<div class="' + styles.customMarker + ' ' + styles.facilityMarker + '">🏢</div>',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -35],
      className: ''
    })

    // スタイル関数
    const getFeatureStyle = (feature: any) => {
      switch (feature.properties.type) {
        case 'prefecture':
          return {
            fillColor: '#e0f2fe',
            weight: 3,
            opacity: 1,
            color: '#1e40af',
            fillOpacity: 0.3
          }
        case 'city':
          return {
            fillColor: '#fce7f3',
            weight: 2,
            opacity: 1,
            color: '#ec4899',
            fillOpacity: 0.5
          }
        case 'river':
          return {
            color: '#3b82f6',
            weight: 3,
            opacity: 0.8
          }
        case 'highway':
          return {
            color: '#ef4444',
            weight: 4,
            opacity: 0.7,
            dashArray: '10, 5'
          }
        case 'railway':
          return {
            color: '#10b981',
            weight: 3,
            opacity: 0.8,
            dashArray: '5, 5'
          }
        case 'lake':
          return {
            fillColor: '#60a5fa',
            weight: 1,
            opacity: 1,
            color: '#2563eb',
            fillOpacity: 0.6
          }
        default:
          return {
            fillColor: '#gray',
            weight: 1,
            opacity: 1,
            color: 'black',
            fillOpacity: 0.5
          }
      }
    }

    // GeoJSONレイヤーの追加
    L.geoJSON(sakuraPrefectureData, {
      style: getFeatureStyle,
      pointToLayer: (feature: any, latlng: any) => {
        let icon
        if (feature.properties.type === 'tourist') {
          icon = touristIcon
        } else if (feature.properties.type === 'facility') {
          icon = facilityIcon
        } else {
          icon = cityIcon
        }
        return L.marker(latlng, { icon })
      },
      onEachFeature: (feature: any, layer: any) => {
        if (feature.properties) {
          let popupContent = `<div class="${styles.popup}">
            <h3>${feature.properties.name}</h3>`
          
          if (feature.properties.description) {
            popupContent += `<p>${feature.properties.description}</p>`
          }
          
          if (feature.properties.population) {
            popupContent += `<p>人口: ${feature.properties.population.toLocaleString()}人</p>`
          }
          
          if (feature.properties.role) {
            popupContent += `<p>${feature.properties.role}</p>`
          }

          if (feature.properties.category) {
            const categoryLabels: { [key: string]: string } = {
              castle: '城',
              park: '公園',
              airport: '空港',
              station: '駅',
              onsen: '温泉'
            }
            popupContent += `<p>種別: ${categoryLabels[feature.properties.category] || feature.properties.category}</p>`
          }
          
          popupContent += '</div>'
          
          layer.bindPopup(popupContent)
          
          // ホバー効果（ポイント以外）
          if (feature.geometry.type !== 'Point') {
            layer.on({
              mouseover: (e: any) => {
                const target = e.target
                target.setStyle({
                  weight: 5,
                  fillOpacity: 0.7
                })
              },
              mouseout: (e: any) => {
                const target = e.target
                target.setStyle(getFeatureStyle(feature))
              }
            })
          }
        }
      }
    }).addTo(map)

    // 凡例の追加
    const legend = L.control({ position: 'topright' })
    legend.onAdd = () => {
      const div = L.DomUtil.create('div', styles.legend)
      div.innerHTML = `
        <h4>凡例</h4>
        <div class="${styles.legendItem}">
          <span class="${styles.legendColor}" style="background-color: #fce7f3; border: 2px solid #ec4899;"></span> 市区町村
        </div>
        <div class="${styles.legendItem}">
          <span class="${styles.legendLine}" style="background-color: #3b82f6;"></span> 河川
        </div>
        <div class="${styles.legendItem}">
          <span class="${styles.legendLine}" style="background-color: #ef4444; border-style: dashed;"></span> 高速道路
        </div>
        <div class="${styles.legendItem}">
          <span class="${styles.legendLine}" style="background-color: #10b981; border-style: dashed;"></span> 鉄道
        </div>
        <div class="${styles.legendItem}">
          <span class="${styles.legendColor}" style="background-color: #60a5fa;"></span> 湖
        </div>
      `
      return div
    }
    legend.addTo(map)
    
    } catch (error) {
      console.error('Map initialization error:', error)
      setMapError('地図の初期化に失敗しました')
      isInitialized.current = false
    }
  }

  useEffect(() => {
    // LeafletのCSSを追加
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
    link.crossOrigin = ''
    document.head.appendChild(link)

    // Leafletが既にロードされているかチェック
    if (window.L && !isInitialized.current) {
      initializeMap()
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
        isInitialized.current = false
      }
      // CSSリンクも削除
      document.head.removeChild(link)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
        strategy="afterInteractive"
        onLoad={initializeMap}
        onError={() => setMapError('地図ライブラリの読み込みに失敗しました')}
      />
      <div className={styles.mapWrapper}>
        {mapError ? (
          <div className={styles.errorMessage}>
            <p>⚠️ {mapError}</p>
          </div>
        ) : isLoading ? (
          <div className={styles.loadingMessage}>
            <p>🗺️ 地図を読み込んでいます...</p>
          </div>
        ) : null}
        <div 
          ref={mapContainerRef} 
          className={styles.mapContainer}
          style={{ height, display: mapError || isLoading ? 'none' : 'block' }}
        />
        {!mapError && !isLoading && (
          <div className={styles.attribution}>
            <p>この地図は架空の桜県を表現したものです</p>
            <p>実際の地理座標を使用していますが、内容はフィクションです</p>
          </div>
        )}
      </div>
    </>
  )
}