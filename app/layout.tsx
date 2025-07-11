import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '桜県公式サイト',
  description:
    '桜県の公式ウェブサイトです。県政情報、観光案内、県民サービスなどをご案内しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
