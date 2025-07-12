import styles from './CityList.module.css'
import citiesData from '@/lib/cities.json'
import Link from 'next/link'

export default function CityList() {
  const cities = citiesData.cities

  const getCityPath = (cityName: string) => {
    const pathMap: {[key: string]: string} = {
      '桜花市': '/cities/sakura-ka',
      '桜川市': '/cities/sakuragawa',
      '東桜市': '/cities/higashi-sakura',
      '西桜市': '/cities/nishi-sakura',
      '南桜市': '/cities/minami-sakura',
      '北桜市': '/cities/kita-sakura'
    }
    return pathMap[cityName] || '#'
  }

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>桜県の市町村</h2>
        
        <div className={styles.cityGrid}>
          {cities.map((city) => (
            <Link 
              key={city.id} 
              href={getCityPath(city.name.japanese)}
              className={styles.cityCard}
            >
              <div className={styles.cityHeader}>
                <h3>{city.name.japanese}</h3>
                <span className={styles.cityType}>{city.type}</span>
              </div>
              
              <div className={styles.cityInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>人口</span>
                  <span className={styles.infoValue}>{(city.population.total / 10000).toFixed(1)}万人</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>面積</span>
                  <span className={styles.infoValue}>{city.area_km2} km²</span>
                </div>
              </div>
              
              <p className={styles.cityDescription}>
                {city.characteristics}
              </p>
              
              <div className={styles.viewMore}>
                詳細を見る →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}