// Data loading utilities for Sakura Prefecture Website

import prefectureInfo from '@/sakura-ken/data/prefecture-info.json'
import cities from '@/sakura-ken/data/cities.json'
import economy from '@/sakura-ken/data/economy.json'
import population from '@/sakura-ken/data/population.json'
import transportation from '@/sakura-ken/data/transportation.json'

export { prefectureInfo, cities, economy, population, transportation }

// Helper functions to get specific data
export const getPrefectureName = () => prefectureInfo.name.japanese
export const getPrefectureCapital = () => prefectureInfo.capital.name.japanese
export const getPrefecturePopulation = () =>
  prefectureInfo.demographics.population.total
export const getMajorAttractions = () =>
  prefectureInfo.tourism.major_attractions
export const getPrefectureSymbols = () => prefectureInfo.symbols
export const getCultureInfo = () => prefectureInfo.culture
