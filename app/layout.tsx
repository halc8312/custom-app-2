import type { Metadata } from 'next'
import { I18nProvider } from '@/lib/i18n/i18n-context'
import './globals.css'

export const metadata: Metadata = {
  title: '桜県公式サイト | Sakura Prefecture Official Website',
  description:
    '桜県の公式ウェブサイトです。県政情報、観光案内、県民サービスなどをご案内しています。 | Official website of Sakura Prefecture. Government information, tourism guide, and resident services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
