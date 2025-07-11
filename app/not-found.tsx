import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './not-found.module.css'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>404</h1>
          <h2 className={styles.subtitle}>ページが見つかりません</h2>
          <p className={styles.description}>
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <Link href="/" className={styles.homeButton}>
            ホームへ戻る
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
