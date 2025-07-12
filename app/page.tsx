import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import EconomicIndicators from '@/components/EconomicIndicators'
import CityList from '@/components/CityList'
import News from '@/components/News'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <EconomicIndicators />
        <CityList />
        <News />
      </main>
      <Footer />
    </>
  )
}
