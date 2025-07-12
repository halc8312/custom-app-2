'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import styles from './GeoJSONMap.module.css'

const GeoJSONMap = dynamic(() => import('./GeoJSONMap'), {
  ssr: false,
  loading: () => (
    <div style={{ 
      height: '600px', 
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

interface DynamicGeoJSONMapProps {
  height?: string
}

export default function DynamicGeoJSONMap({ height = '600px' }: DynamicGeoJSONMapProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div style={{ 
        height, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: '#f3f4f6',
        borderRadius: '12px'
      }}>
        <p>地図を準備しています...</p>
      </div>
    )
  }

  return <GeoJSONMap height={height} />
}