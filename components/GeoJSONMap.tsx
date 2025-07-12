'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import sakuraPrefectureData from '@/data/sakura-prefecture.geojson'
import styles from './GeoJSONMap.module.css'

// Leafletアイコンの修正
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
})

interface GeoJSONMapProps {
  height?: string
  center?: [number, number]
  zoom?: number
}

export default function GeoJSONMap({ 
  height = '600px',
  center = [35.65, 139.65], // 桜花市の中心
  zoom = 9
}: GeoJSONMapProps) {
  const mapRef = useRef<L.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return

    // 地図の初期化
    const map = L.map(mapContainerRef.current).setView(center, zoom)
    mapRef.current = map

    // カスタムタイルレイヤー（架空の地図なのでシンプルなスタイル）
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; 桜県地理院 | Map data &copy; Sakura Prefecture',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map)

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

    // カスタムアイコン
    const getMarkerIcon = (feature: any) => {
      const iconMap: { [key: string]: string } = {
        castle: '🏯',
        park: '🌸',
        airport: '✈️',
        station: '🚉',
        onsen: '♨️'
      }
      
      const iconHtml = `
        <div class="${styles.customMarker}">
          <span class="${styles.markerIcon}">${iconMap[feature.properties.category] || '📍'}</span>
        </div>
      `

      return L.divIcon({
        html: iconHtml,
        className: 'custom-div-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -35]
      })
    }

    // GeoJSONレイヤーの追加
    L.geoJSON(sakuraPrefectureData as any, {
      style: getFeatureStyle,
      pointToLayer: (feature, latlng) => {
        return L.marker(latlng, { icon: getMarkerIcon(feature) })
      },
      onEachFeature: (feature, layer) => {
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
            popupContent += `<p>役割: ${feature.properties.role}</p>`
          }
          
          popupContent += '</div>'
          
          layer.bindPopup(popupContent)
          
          // ホバー効果
          if (feature.geometry.type !== 'Point') {
            layer.on({
              mouseover: (e) => {
                const target = e.target
                target.setStyle({
                  weight: 5,
                  fillOpacity: 0.7
                })
              },
              mouseout: (e) => {
                const target = e.target
                L.geoJSON().resetStyle(target)
                target.setStyle(getFeatureStyle(feature))
              }
            })
          }
        }
      }
    }).addTo(map)

    // カスタムコントロール
    const legendControl = L.control({ position: 'topright' })
    legendControl.onAdd = () => {
      const div = L.DomUtil.create('div', styles.legend)
      div.innerHTML = `
        <h4>凡例</h4>
        <div class="${styles.legendItem}">
          <span style="background-color: #fce7f3; border: 2px solid #ec4899;"></span> 市区町村
        </div>
        <div class="${styles.legendItem}">
          <span style="background-color: #3b82f6;"></span> 河川
        </div>
        <div class="${styles.legendItem}">
          <span style="background-color: #ef4444; border-style: dashed;"></span> 高速道路
        </div>
        <div class="${styles.legendItem}">
          <span style="background-color: #10b981; border-style: dashed;"></span> 鉄道
        </div>
        <div class="${styles.legendItem}">
          <span style="background-color: #60a5fa;"></span> 湖
        </div>
      `
      return div
    }
    legendControl.addTo(map)

    // クリーンアップ
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [center, zoom])

  return (
    <div className={styles.mapWrapper}>
      <div 
        ref={mapContainerRef} 
        className={styles.mapContainer}
        style={{ height }}
      />
      <div className={styles.attribution}>
        <p>この地図は架空の桜県を表現したものです</p>
        <p>実際の地理座標を使用していますが、内容はフィクションです</p>
      </div>
    </div>
  )
}