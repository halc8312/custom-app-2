// Translation data for Sakura Prefecture Website

export type Locale = 'ja' | 'en'

export const translations = {
  ja: {
    common: {
      prefecture: '桜県',
      welcome: '桜県へようこそ',
      search: '検索...',
      searchResults: '検索結果',
      loading: '読み込み中...',
      viewAll: 'すべて見る',
    },
    navigation: {
      about: '桜県について',
      tourism: '観光情報',
      access: 'アクセス・交通',
      news: 'お知らせ',
      services: '県民サービス',
      government: '県政情報',
      business: '産業・雇用',
      emergency: '防災・安全',
      culture: '文化・スポーツ',
    },
    hero: {
      subtitle: '花咲く未来へ、桜県',
      tourismButton: '観光情報を見る',
      aboutButton: '桜県について',
    },
    quickLinks: {
      title: '県民の皆様へ',
      government: {
        title: '県政情報',
        description: '県の政策、組織、予算など',
      },
      tourism: {
        title: '観光・イベント',
        description: '観光スポット、イベント情報',
      },
      welfare: {
        title: '生活・福祉',
        description: '健康、福祉、教育サービス',
      },
      business: {
        title: '産業・雇用',
        description: 'ビジネス支援、求人情報',
      },
    },
    news: {
      title: 'お知らせ・新着情報',
      categories: {
        event: 'イベント',
        government: '県政',
        tourism: '観光',
        life: '生活',
        welfare: '福祉',
        business: '産業',
        education: '教育',
        disaster: '防災',
      },
    },
    footer: {
      prefectureOffice: '桜県庁',
      governmentInfo: '県政情報',
      services: '県民サービス',
      relatedLinks: '関連リンク',
      organization: '組織・業務',
      budget: '予算・財政',
      statistics: '統計情報',
      plans: '計画・施策',
      procedures: '各種手続き',
      facilities: '施設案内',
      emergency: '防災・緊急情報',
      consultation: '相談窓口',
      sitemap: 'サイトマップ',
      privacy: '個人情報保護',
      accessibility: 'アクセシビリティ',
      contact: 'お問い合わせ',
      phone: '電話',
      copyright: 'All Rights Reserved.',
    },
  },
  en: {
    common: {
      prefecture: 'Sakura Prefecture',
      welcome: 'Welcome to Sakura Prefecture',
      search: 'Search...',
      searchResults: 'Search Results',
      loading: 'Loading...',
      viewAll: 'View All',
    },
    navigation: {
      about: 'About Sakura',
      tourism: 'Tourism',
      access: 'Access & Transport',
      news: 'News',
      services: 'Resident Services',
      government: 'Government',
      business: 'Business & Employment',
      emergency: 'Emergency & Safety',
      culture: 'Culture & Sports',
    },
    hero: {
      subtitle: 'Blooming into the future, Sakura Prefecture',
      tourismButton: 'View Tourism Info',
      aboutButton: 'About Sakura Prefecture',
    },
    quickLinks: {
      title: 'For Residents',
      government: {
        title: 'Government Information',
        description: 'Policies, organization, budget, etc.',
      },
      tourism: {
        title: 'Tourism & Events',
        description: 'Tourist spots, event information',
      },
      welfare: {
        title: 'Life & Welfare',
        description: 'Health, welfare, education services',
      },
      business: {
        title: 'Business & Employment',
        description: 'Business support, job information',
      },
    },
    news: {
      title: 'News & Updates',
      categories: {
        event: 'Event',
        government: 'Government',
        tourism: 'Tourism',
        life: 'Life',
        welfare: 'Welfare',
        business: 'Business',
        education: 'Education',
        disaster: 'Disaster Prevention',
      },
    },
    footer: {
      prefectureOffice: 'Sakura Prefecture Office',
      governmentInfo: 'Government Information',
      services: 'Resident Services',
      relatedLinks: 'Related Links',
      organization: 'Organization & Operations',
      budget: 'Budget & Finance',
      statistics: 'Statistics',
      plans: 'Plans & Policies',
      procedures: 'Procedures',
      facilities: 'Facilities',
      emergency: 'Emergency Information',
      consultation: 'Consultation',
      sitemap: 'Sitemap',
      privacy: 'Privacy Policy',
      accessibility: 'Accessibility',
      contact: 'Contact',
      phone: 'Phone',
      copyright: 'All Rights Reserved.',
    },
  },
}

export type TranslationKeys = typeof translations.ja