// News data for Sakura Prefecture Website
import { NewsItem } from '@/types'

// In a real application, this would come from an API or CMS
export const getLatestNews = (): NewsItem[] => {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 1

  return [
    {
      date: `${currentYear}年${currentMonth}月15日`,
      category: 'イベント',
      title: '第25回桜県桜まつり開催のお知らせ',
      href: '/news/sakura-festival-2024',
    },
    {
      date: `${currentYear}年${currentMonth}月10日`,
      category: '県政',
      title: '令和7年度予算編成方針について',
      href: '/news/budget-2025',
    },
    {
      date: `${currentYear}年${currentMonth}月5日`,
      category: '観光',
      title: '桜県観光アプリがリニューアル',
      href: '/news/tourism-app-renewal',
    },
    {
      date: `${currentYear}年${currentMonth - 1}月28日`,
      category: '生活',
      title: '年末年始の県庁窓口業務について',
      href: '/news/year-end-schedule',
    },
    {
      date: `${currentYear}年${currentMonth - 1}月20日`,
      category: '福祉',
      title: '高齢者向け健康教室の参加者募集',
      href: '/news/health-class-recruitment',
    },
    {
      date: `${currentYear}年${currentMonth - 1}月15日`,
      category: '産業',
      title: '中小企業支援補助金の申請受付開始',
      href: '/news/business-support-grant',
    },
  ]
}

export const getNewsByCategory = (category: string): NewsItem[] => {
  return getLatestNews().filter((item) => item.category === category)
}

export const getNewsCategories = (): string[] => {
  return ['イベント', '県政', '観光', '生活', '福祉', '産業', '教育', '防災']
}
