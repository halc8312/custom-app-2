// Quick Links configuration for Sakura Prefecture Website
import { QuickLink } from '@/types'

export const getQuickLinks = (): QuickLink[] => {
  return [
    {
      title: '県政情報',
      description: '県の政策、組織、予算など',
      href: '/government',
      icon: '🏛️',
    },
    {
      title: '観光・イベント',
      description: '観光スポット、イベント情報',
      href: '/tourism',
      icon: '🌸',
    },
    {
      title: '生活・福祉',
      description: '健康、福祉、教育サービス',
      href: '/services',
      icon: '🏥',
    },
    {
      title: '産業・雇用',
      description: 'ビジネス支援、求人情報',
      href: '/business',
      icon: '💼',
    },
    {
      title: '防災・安全',
      description: '防災情報、緊急連絡先',
      href: '/emergency',
      icon: '🚨',
    },
    {
      title: '文化・スポーツ',
      description: '文化施設、スポーツイベント',
      href: '/culture',
      icon: '🎭',
    },
  ]
}

// Get featured links for homepage (returns 4 links)
export const getFeaturedQuickLinks = (): QuickLink[] => {
  return getQuickLinks().slice(0, 4)
}

// Get links by category
export const getQuickLinksByCategory = (category: string): QuickLink[] => {
  // This could be expanded to filter by category if needed
  return getQuickLinks().filter(
    (link) =>
      link.title.includes(category) || link.description.includes(category)
  )
}
