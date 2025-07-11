// Search functionality for Sakura Prefecture Website

import { prefectureInfo, cities } from './data'
import { getLatestNews, getNewsCategories } from './news-data'
import { getQuickLinks } from './quick-links-config'

interface SearchResult {
  title: string
  description: string
  href: string
  category: string
}

// Create a searchable index of content
const createSearchIndex = (): SearchResult[] => {
  const index: SearchResult[] = []

  // Add pages
  index.push({
    title: '桜県について',
    description: `${prefectureInfo.symbols.catchphrase.japanese} - 人口${prefectureInfo.demographics.population.total.toLocaleString()}人の魅力的な県`,
    href: '/about',
    category: 'ページ',
  })

  index.push({
    title: '観光情報',
    description: '桜県の観光スポット、宿泊施設、イベント情報など',
    href: '/tourism',
    category: 'ページ',
  })

  index.push({
    title: 'アクセス・交通',
    description: '桜県への交通アクセス、県内の公共交通機関情報',
    href: '/access',
    category: 'ページ',
  })

  index.push({
    title: 'お知らせ',
    description: '桜県からの最新情報、ニュース、イベント告知',
    href: '/news',
    category: 'ページ',
  })

  index.push({
    title: '県民サービス',
    description: '各種手続き、申請、相談窓口のご案内',
    href: '/services',
    category: 'ページ',
  })

  // Add cities
  if (cities && cities.cities) {
    cities.cities.forEach((city: any) => {
      index.push({
        title: city.name.japanese,
        description: `人口: ${city.population.total.toLocaleString()}人、面積: ${city.area_km2}km²`,
        href: `/cities/${city.id}`,
        category: '市町村',
      })
    })
  }

  // Add tourist attractions
  prefectureInfo.tourism.major_attractions.forEach((attraction: string) => {
    index.push({
      title: attraction,
      description: '桜県の主要観光スポット',
      href: '/tourism#attractions',
      category: '観光地',
    })
  })

  // Add news items
  const newsItems = getLatestNews()
  newsItems.forEach((news) => {
    index.push({
      title: news.title,
      description: `${news.date} - ${news.category}`,
      href: news.href,
      category: 'ニュース',
    })
  })

  // Add quick links
  const quickLinks = getQuickLinks()
  quickLinks.forEach((link) => {
    index.push({
      title: link.title,
      description: link.description,
      href: link.href,
      category: 'サービス',
    })
  })

  // Add cultural items
  prefectureInfo.culture.traditional_crafts.forEach((craft: string) => {
    index.push({
      title: craft,
      description: '桜県の伝統工芸品',
      href: '/culture#crafts',
      category: '文化',
    })
  })

  prefectureInfo.culture.major_festivals.forEach((festival: string) => {
    index.push({
      title: festival,
      description: '桜県の伝統的な祭り',
      href: '/culture#festivals',
      category: '文化',
    })
  })

  return index
}

// Normalize text for search
const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[ー－]/g, '-') // Normalize dashes
    .replace(/\s+/g, '') // Remove spaces
}

// Search function
export const searchContent = (query: string): SearchResult[] => {
  if (!query || query.length < 2) {
    return []
  }

  const searchIndex = createSearchIndex()
  const normalizedQuery = normalizeText(query)

  // Score and filter results
  const results = searchIndex
    .map((item) => {
      const normalizedTitle = normalizeText(item.title)
      const normalizedDescription = normalizeText(item.description)

      let score = 0

      // Exact match in title
      if (normalizedTitle === normalizedQuery) {
        score += 100
      }
      // Title contains query
      else if (normalizedTitle.includes(normalizedQuery)) {
        score += 50
      }
      // Description contains query
      if (normalizedDescription.includes(normalizedQuery)) {
        score += 20
      }

      return { ...item, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10) // Return top 10 results

  return results
}

// Get search suggestions
export const getSearchSuggestions = (): string[] => {
  return [
    '桜まつり',
    '観光スポット',
    '県庁',
    '交通アクセス',
    '福祉サービス',
    '桜花市',
    '温泉',
    'イベント',
  ]
}
