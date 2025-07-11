const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;

// データファイルのパス
const DATA_DIR = path.join(__dirname, '../../data');

// データ読み込みヘルパー関数
const loadData = async (filename) => {
  try {
    const filePath = path.join(DATA_DIR, filename);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`データ読み込みエラー (${filename}):`, error);
    return null;
  }
};

// ページネーションヘルパー関数
const paginateData = (data, page = 1, limit = 20) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedData = data.slice(startIndex, endIndex);
  
  return {
    data: paginatedData,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: data.length,
      totalPages: Math.ceil(data.length / limit),
      hasNext: endIndex < data.length,
      hasPrev: page > 1
    }
  };
};

// 県全体人口
router.get('/population', async (req, res) => {
  try {
    const { year = 2025 } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    // 年でフィルタリング
    let data = populationData;
    if (year && populationData.yearly) {
      data = populationData.yearly.find(y => y.year === parseInt(year)) || populationData;
    }

    res.json(res.createResponse(data));
  } catch (error) {
    console.error('県全体人口取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '県全体人口の取得に失敗しました。'
    ));
  }
});

// 市別人口
router.get('/population/cities', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, sort, order = 'desc' } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    let citiesData = populationData.cities || [];

    // 年でフィルタリング
    if (year && citiesData.length > 0 && citiesData[0].yearly) {
      citiesData = citiesData.map(city => ({
        ...city,
        population: city.yearly?.find(y => y.year === parseInt(year))?.population || city.population
      }));
    }

    // ソート処理
    if (sort) {
      citiesData.sort((a, b) => {
        const aVal = a[sort] || 0;
        const bVal = b[sort] || 0;
        
        if (order === 'desc') {
          return bVal - aVal;
        }
        return aVal - bVal;
      });
    }

    // ページネーション
    const result = paginateData(citiesData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('市別人口取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '市別人口の取得に失敗しました。'
    ));
  }
});

// 年齢別人口
router.get('/population/age', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, city } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    let ageData = populationData.age_distribution || [];

    // 年でフィルタリング
    if (year && ageData.length > 0 && ageData[0].yearly) {
      ageData = ageData.map(age => ({
        ...age,
        population: age.yearly?.find(y => y.year === parseInt(year))?.population || age.population
      }));
    }

    // 市でフィルタリング
    if (city) {
      ageData = ageData.filter(age => age.city_id === city || age.city_name === city);
    }

    // ページネーション
    const result = paginateData(ageData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('年齢別人口取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '年齢別人口の取得に失敗しました。'
    ));
  }
});

// 外国人統計
router.get('/population/foreign', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, city, nationality } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    let foreignData = populationData.foreign_residents || [];

    // 年でフィルタリング
    if (year && foreignData.length > 0 && foreignData[0].yearly) {
      foreignData = foreignData.map(foreign => ({
        ...foreign,
        population: foreign.yearly?.find(y => y.year === parseInt(year))?.population || foreign.population
      }));
    }

    // 市でフィルタリング
    if (city) {
      foreignData = foreignData.filter(foreign => 
        foreign.city_id === city || foreign.city_name === city
      );
    }

    // 国籍でフィルタリング
    if (nationality) {
      foreignData = foreignData.filter(foreign => 
        foreign.nationality?.toLowerCase().includes(nationality.toLowerCase())
      );
    }

    // ページネーション
    const result = paginateData(foreignData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('外国人統計取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '外国人統計の取得に失敗しました。'
    ));
  }
});

// 世帯統計
router.get('/households', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, city, type } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    let householdData = populationData.households || [];

    // 年でフィルタリング
    if (year && householdData.length > 0 && householdData[0].yearly) {
      householdData = householdData.map(household => ({
        ...household,
        count: household.yearly?.find(y => y.year === parseInt(year))?.count || household.count
      }));
    }

    // 市でフィルタリング
    if (city) {
      householdData = householdData.filter(household => 
        household.city_id === city || household.city_name === city
      );
    }

    // 世帯タイプでフィルタリング
    if (type) {
      householdData = householdData.filter(household => 
        household.type?.toLowerCase().includes(type.toLowerCase())
      );
    }

    // ページネーション
    const result = paginateData(householdData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('世帯統計取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '世帯統計の取得に失敗しました。'
    ));
  }
});

// 各種統計データ
router.get('/statistics', async (req, res) => {
  try {
    const { category, year = 2025 } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    let statistics = populationData.statistics || {};

    // カテゴリでフィルタリング
    if (category) {
      statistics = statistics[category] || {};
    }

    // 年でフィルタリング
    if (year && statistics.yearly) {
      statistics = statistics.yearly.find(y => y.year === parseInt(year)) || statistics;
    }

    res.json(res.createResponse(statistics));
  } catch (error) {
    console.error('統計データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '統計データの取得に失敗しました。'
    ));
  }
});

// 人口推移データ
router.get('/trends', async (req, res) => {
  try {
    const { start_year = 1975, end_year = 2025, city } = req.query;
    
    const populationData = await loadData('population.json');
    
    if (!populationData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '人口データの読み込みに失敗しました。'
      ));
    }

    let trendsData = populationData.trends || [];

    // 年範囲でフィルタリング
    if (start_year || end_year) {
      trendsData = trendsData.filter(trend => {
        const year = trend.year || trend.date?.getFullYear();
        return (!start_year || year >= parseInt(start_year)) && 
               (!end_year || year <= parseInt(end_year));
      });
    }

    // 市でフィルタリング
    if (city) {
      trendsData = trendsData.filter(trend => 
        trend.city_id === city || trend.city_name === city
      );
    }

    res.json(res.createResponse(trendsData));
  } catch (error) {
    console.error('人口推移データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '人口推移データの取得に失敗しました。'
    ));
  }
});

module.exports = router;