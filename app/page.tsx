import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuickLinks from '@/components/QuickLinks'
import News from '@/components/News'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <News />
      </main>
      <Footer />
    </>
  )
}
