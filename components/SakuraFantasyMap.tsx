'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './SakuraFantasyMap.module.css'

interface MapProps {
  height?: string
  showControls?: boolean
}

export default function SakuraFantasyMap({ 
  height = '600px',
  showControls = true 
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [zoom, setZoom] = useState(1)
  const [viewBox, setViewBox] = useState({ x: 0, y: 0, width: 1000, height: 1000 })
  const [selectedLocation, setSelectedLocation] = useState<any>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  // 桜県の完全オリジナル地形データ
  const sakuraLandscape = {
    // 県境（架空の形状）
    boundary: "M 100 200 Q 200 50 400 100 Q 600 150 700 300 Q 750 500 600 700 Q 400 800 200 750 Q 50 600 100 400 Q 80 300 100 200",
    
    // 主要都市
    cities: [
      { id: 'sakuraka', name: '桜花市', x: 400, y: 400, size: 'large', population: '68.5万人' },
      { id: 'sakuragawa', name: '桜川市', x: 250, y: 350, size: 'medium', population: '52.3万人' },
      { id: 'higashi', name: '東桜市', x: 550, y: 380, size: 'medium', population: '41.2万人' },
      { id: 'nishi', name: '西桜市', x: 200, y: 500, size: 'small', population: '23.8万人' },
      { id: 'minami', name: '南桜市', x: 450, y: 650, size: 'small', population: '15.6万人' },
      { id: 'kita', name: '北桜市', x: 500, y: 250, size: 'small', population: '18.9万人' }
    ],
    
    // 河川
    rivers: [
      {
        id: 'sakura-river',
        name: '桜川',
        path: "M 150 250 Q 300 300 400 400 Q 500 500 550 650 Q 600 700 650 750"
      },
      {
        id: 'east-river',
        name: '東桜川',
        path: "M 600 200 Q 550 300 500 400 Q 450 450 400 500"
      }
    ],
    
    // 山脈
    mountains: [
      { id: 'mt-sakura', name: '桜山', x: 350, y: 200, height: '2,156m' },
      { id: 'mt-east', name: '東桜山', x: 600, y: 250, height: '1,892m' },
      { id: 'mt-south', name: '南桜山', x: 500, y: 550, height: '1,654m' }
    ],
    
    // 湖
    lakes: [
      { id: 'sakura-lake', name: '桜湖', cx: 550, cy: 500, rx: 60, ry: 40 },
      { id: 'north-lake', name: '北桜湖', cx: 450, cy: 300, rx: 40, ry: 30 }
    ],
    
    // 交通網
    highways: [
      {
        id: 'sakura-expressway',
        name: '桜縦貫道',
        path: "M 400 100 L 400 300 L 400 500 L 450 700 L 500 800"
      },
      {
        id: 'coastal-highway',
        name: '桜浜街道',
        path: "M 150 300 L 250 350 L 350 400 L 450 450 L 550 500"
      }
    ],
    
    // 鉄道
    railways: [
      {
        id: 'sakura-shinkansen',
        name: '桜新幹線',
        path: "M 300 150 L 400 250 L 400 400 L 450 550 L 500 700"
      }
    ],
    
    // 観光地
    landmarks: [
      { id: 'castle', name: '桜城', x: 420, y: 380, type: 'castle' },
      { id: 'park', name: '千本桜公園', x: 380, y: 420, type: 'park' },
      { id: 'onsen', name: '南桜温泉郷', x: 430, y: 630, type: 'onsen' },
      { id: 'shrine', name: '桜大社', x: 390, y: 360, type: 'shrine' }
    ],
    
    // 地形の高低
    elevation: [
      { type: 'highland', path: "M 300 150 Q 400 100 500 150 Q 550 250 450 300 Q 350 250 300 150", color: '#8b7355' },
      { type: 'lowland', path: "M 200 400 Q 300 450 400 500 Q 500 550 600 600 Q 500 650 300 600 Q 200 500 200 400", color: '#90ee90' },
      { type: 'valley', path: "M 350 350 Q 400 380 450 350 Q 480 400 450 450 Q 400 480 350 450 Q 320 400 350 350", color: '#98fb98' }
    ]
  }

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const delta = e.deltaY > 0 ? 1.1 : 0.9
    const newZoom = Math.max(0.5, Math.min(5, zoom * delta))
    setZoom(newZoom)
    
    // ズームに応じてviewBoxを調整
    const newWidth = 1000 / newZoom
    const newHeight = 1000 / newZoom
    setViewBox(prev => ({
      ...prev,
      width: newWidth,
      height: newHeight
    }))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    
    const dx = (dragStart.x - e.clientX) / zoom
    const dy = (dragStart.y - e.clientY) / zoom
    
    setViewBox(prev => ({
      x: prev.x + dx,
      y: prev.y + dy,
      width: prev.width,
      height: prev.height
    }))
    
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleZoomIn = () => setZoom(prev => Math.min(5, prev * 1.2))
  const handleZoomOut = () => setZoom(prev => Math.max(0.5, prev * 0.8))
  const handleReset = () => {
    setZoom(1)
    setViewBox({ x: 0, y: 0, width: 1000, height: 1000 })
  }

  return (
    <div className={styles.mapContainer} style={{ height }}>
      <svg
        ref={svgRef}
        className={styles.mapSvg}
        viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {/* 背景（海） */}
        <rect x="0" y="0" width="1000" height="1000" fill="#e6f3ff" />
        
        {/* 地形の高低 */}
        {sakuraLandscape.elevation.map(area => (
          <path
            key={area.type}
            d={area.path}
            fill={area.color}
            opacity="0.3"
            stroke="none"
          />
        ))}
        
        {/* 県境 */}
        <path
          d={sakuraLandscape.boundary}
          fill="#f0f9e8"
          stroke="#2d5016"
          strokeWidth="3"
        />
        
        {/* 湖 */}
        {sakuraLandscape.lakes.map(lake => (
          <g key={lake.id}>
            <ellipse
              cx={lake.cx}
              cy={lake.cy}
              rx={lake.rx}
              ry={lake.ry}
              fill="#4da6ff"
              opacity="0.7"
            />
            <text
              x={lake.cx}
              y={lake.cy}
              textAnchor="middle"
              className={styles.lakeLabel}
            >
              {lake.name}
            </text>
          </g>
        ))}
        
        {/* 河川 */}
        {sakuraLandscape.rivers.map(river => (
          <path
            key={river.id}
            d={river.path}
            fill="none"
            stroke="#4da6ff"
            strokeWidth="4"
            opacity="0.8"
          />
        ))}
        
        {/* 高速道路 */}
        {sakuraLandscape.highways.map(highway => (
          <path
            key={highway.id}
            d={highway.path}
            fill="none"
            stroke="#ff6b6b"
            strokeWidth="6"
            strokeDasharray="15,5"
            opacity="0.7"
          />
        ))}
        
        {/* 鉄道 */}
        {sakuraLandscape.railways.map(railway => (
          <path
            key={railway.id}
            d={railway.path}
            fill="none"
            stroke="#333"
            strokeWidth="4"
            strokeDasharray="10,5"
          />
        ))}
        
        {/* 山 */}
        {sakuraLandscape.mountains.map(mountain => (
          <g key={mountain.id}>
            <polygon
              points={`${mountain.x},${mountain.y} ${mountain.x-30},${mountain.y+40} ${mountain.x+30},${mountain.y+40}`}
              fill="#8b7355"
              stroke="#654321"
              strokeWidth="2"
            />
            <text
              x={mountain.x}
              y={mountain.y + 60}
              textAnchor="middle"
              className={styles.mountainLabel}
            >
              {mountain.name}
            </text>
            <text
              x={mountain.x}
              y={mountain.y + 75}
              textAnchor="middle"
              className={styles.heightLabel}
            >
              {mountain.height}
            </text>
          </g>
        ))}
        
        {/* 都市 */}
        {sakuraLandscape.cities.map(city => (
          <g 
            key={city.id}
            onClick={() => setSelectedLocation(city)}
            className={styles.cityGroup}
          >
            <circle
              cx={city.x}
              cy={city.y}
              r={city.size === 'large' ? 25 : city.size === 'medium' ? 20 : 15}
              fill="#ff69b4"
              stroke="#d1387d"
              strokeWidth="3"
              className={styles.cityCircle}
            />
            <text
              x={city.x}
              y={city.y + 5}
              textAnchor="middle"
              className={styles.cityIcon}
            >
              🏛️
            </text>
            <text
              x={city.x}
              y={city.y + 40}
              textAnchor="middle"
              className={styles.cityLabel}
            >
              {city.name}
            </text>
          </g>
        ))}
        
        {/* ランドマーク */}
        {sakuraLandscape.landmarks.map(landmark => (
          <g 
            key={landmark.id}
            onClick={() => setSelectedLocation(landmark)}
            className={styles.landmarkGroup}
          >
            <circle
              cx={landmark.x}
              cy={landmark.y}
              r="15"
              fill="#fffacd"
              stroke="#ffd700"
              strokeWidth="2"
            />
            <text
              x={landmark.x}
              y={landmark.y + 5}
              textAnchor="middle"
              className={styles.landmarkIcon}
            >
              {landmark.type === 'castle' && '🏯'}
              {landmark.type === 'park' && '🌸'}
              {landmark.type === 'onsen' && '♨️'}
              {landmark.type === 'shrine' && '⛩️'}
            </text>
          </g>
        ))}
      </svg>
      
      {/* コントロール */}
      {showControls && (
        <div className={styles.controls}>
          <button onClick={handleZoomIn} title="拡大">➕</button>
          <button onClick={handleZoomOut} title="縮小">➖</button>
          <button onClick={handleReset} title="リセット">🔄</button>
        </div>
      )}
      
      {/* 情報パネル */}
      {selectedLocation && (
        <div className={styles.infoPanel}>
          <button onClick={() => setSelectedLocation(null)} className={styles.closeButton}>✕</button>
          <h3>{selectedLocation.name}</h3>
          {selectedLocation.population && <p>人口: {selectedLocation.population}</p>}
          {selectedLocation.height && <p>標高: {selectedLocation.height}</p>}
        </div>
      )}
      
      {/* 凡例 */}
      <div className={styles.legend}>
        <h4>凡例</h4>
        <div className={styles.legendItem}>
          <span style={{ color: '#ff69b4' }}>●</span> 都市
        </div>
        <div className={styles.legendItem}>
          <span style={{ color: '#4da6ff' }}>〜</span> 河川・湖
        </div>
        <div className={styles.legendItem}>
          <span style={{ color: '#8b7355' }}>▲</span> 山
        </div>
        <div className={styles.legendItem}>
          <span style={{ color: '#ff6b6b' }}>- -</span> 高速道路
        </div>
        <div className={styles.legendItem}>
          <span style={{ color: '#333' }}>▬▬</span> 鉄道
        </div>
      </div>
    </div>
  )
}