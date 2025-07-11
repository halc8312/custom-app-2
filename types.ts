// Type definitions for Sakura Prefecture Website

export interface NewsItem {
  date: string
  category: string
  title: string
  href: string
}

export interface QuickLink {
  title: string
  description: string
  href: string
  icon: string
}

export interface NavItem {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: NavItem[]
}

export interface City {
  name: string
  population: number
  area: number
  description: string
  specialties: string[]
  touristSpots: string[]
}

export interface PrefectureInfo {
  name: string
  capital: string
  population: number
  area: number
  cities: City[]
}
