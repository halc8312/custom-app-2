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

// フィルタリングヘルパー関数
const filterData = (data, filters) => {
  if (!filters || Object.keys(filters).length === 0) {
    return data;
  }

  return data.filter(item => {
    return Object.entries(filters).every(([key, value]) => {
      if (!value) return true;
      
      if (key === 'lat' && key === 'lng' && key === 'radius') {
        // 地理的フィルタリング（簡易版）
        return true;
      }
      
      if (Array.isArray(item[key])) {
        return item[key].includes(value);
      }
      
      return item[key]?.toString().toLowerCase().includes(value.toLowerCase());
    });
  });
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

// 県全体情報
router.get('/prefecture', async (req, res) => {
  try {
    const prefectureData = await loadData('prefecture-info.json');
    
    if (!prefectureData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '県データの読み込みに失敗しました。'
      ));
    }

    res.json(res.createResponse(prefectureData));
  } catch (error) {
    console.error('県全体情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '県全体情報の取得に失敗しました。'
    ));
  }
});

// 全6市の一覧
router.get('/cities', async (req, res) => {
  try {
    const { page = 1, limit = 20, sort, order = 'asc' } = req.query;
    
    const citiesData = await loadData('cities.json');
    
    if (!citiesData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '市データの読み込みに失敗しました。'
      ));
    }

    let filteredData = citiesData;

    // ソート処理
    if (sort) {
      filteredData.sort((a, b) => {
        const aVal = a[sort] || '';
        const bVal = b[sort] || '';
        
        if (order === 'desc') {
          return bVal.toString().localeCompare(aVal.toString());
        }
        return aVal.toString().localeCompare(bVal.toString());
      });
    }

    // ページネーション
    const result = paginateData(filteredData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('市一覧取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '市一覧の取得に失敗しました。'
    ));
  }
});

// 特定市の詳細情報
router.get('/cities/:cityId', async (req, res) => {
  try {
    const { cityId } = req.params;
    
    const citiesData = await loadData('cities.json');
    
    if (!citiesData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '市データの読み込みに失敗しました。'
      ));
    }

    const city = citiesData.find(c => c.id === cityId || c.name_en === cityId);
    
    if (!city) {
      return res.status(404).json(res.createErrorResponse(
        'CITY_NOT_FOUND',
        '指定された市が見つかりません。',
        `City ID: ${cityId}`
      ));
    }

    res.json(res.createResponse(city));
  } catch (error) {
    console.error('市詳細取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '市詳細情報の取得に失敗しました。'
    ));
  }
});

// 全地区の一覧
router.get('/districts', async (req, res) => {
  try {
    const { page = 1, limit = 20, city, sort, order = 'asc' } = req.query;
    
    const districtsData = await loadData('districts.json');
    
    if (!districtsData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '地区データの読み込みに失敗しました。'
      ));
    }

    let filteredData = districtsData;

    // 市でフィルタリング
    if (city) {
      filteredData = filteredData.filter(district => 
        district.city_id === city || district.city_name === city
      );
    }

    // ソート処理
    if (sort) {
      filteredData.sort((a, b) => {
        const aVal = a[sort] || '';
        const bVal = b[sort] || '';
        
        if (order === 'desc') {
          return bVal.toString().localeCompare(aVal.toString());
        }
        return aVal.toString().localeCompare(bVal.toString());
      });
    }

    // ページネーション
    const result = paginateData(filteredData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('地区一覧取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '地区一覧の取得に失敗しました。'
    ));
  }
});

// 特定地区の詳細情報
router.get('/districts/:districtId', async (req, res) => {
  try {
    const { districtId } = req.params;
    
    const districtsData = await loadData('districts.json');
    
    if (!districtsData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '地区データの読み込みに失敗しました。'
      ));
    }

    const district = districtsData.find(d => d.id === districtId || d.name === districtId);
    
    if (!district) {
      return res.status(404).json(res.createErrorResponse(
        'DISTRICT_NOT_FOUND',
        '指定された地区が見つかりません。',
        `District ID: ${districtId}`
      ));
    }

    res.json(res.createResponse(district));
  } catch (error) {
    console.error('地区詳細取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '地区詳細情報の取得に失敗しました。'
    ));
  }
});

// 山地情報
router.get('/mountains', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    
    // 山地データは地理情報から抽出
    const geographyData = await loadData('prefecture-info.json');
    
    if (!geographyData || !geographyData.mountains) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '山地データの読み込みに失敗しました。'
      ));
    }

    const mountains = geographyData.mountains;
    const result = paginateData(mountains, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('山地情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '山地情報の取得に失敗しました。'
    ));
  }
});

// 河川情報
router.get('/rivers', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    
    // 河川データは地理情報から抽出
    const geographyData = await loadData('prefecture-info.json');
    
    if (!geographyData || !geographyData.rivers) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '河川データの読み込みに失敗しました。'
      ));
    }

    const rivers = geographyData.rivers;
    const result = paginateData(rivers, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('河川情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '河川情報の取得に失敗しました。'
    ));
  }
});

// 湖沼情報
router.get('/lakes', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    
    // 湖沼データは地理情報から抽出
    const geographyData = await loadData('prefecture-info.json');
    
    if (!geographyData || !geographyData.lakes) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '湖沼データの読み込みに失敗しました。'
      ));
    }

    const lakes = geographyData.lakes;
    const result = paginateData(lakes, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('湖沼情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '湖沼情報の取得に失敗しました。'
    ));
  }
});

// 自然公園情報
router.get('/parks', async (req, res) => {
  try {
    const { page = 1, limit = 20 } = req.query;
    
    // 自然公園データは地理情報から抽出
    const geographyData = await loadData('prefecture-info.json');
    
    if (!geographyData || !geographyData.parks) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '自然公園データの読み込みに失敗しました。'
      ));
    }

    const parks = geographyData.parks;
    const result = paginateData(parks, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('自然公園情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '自然公園情報の取得に失敗しました。'
    ));
  }
});

// 気候データ
router.get('/climate', async (req, res) => {
  try {
    const { year } = req.query;
    
    // 気候データは地理情報から抽出
    const geographyData = await loadData('prefecture-info.json');
    
    if (!geographyData || !geographyData.climate) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '気候データの読み込みに失敗しました。'
      ));
    }

    let climateData = geographyData.climate;
    
    // 年でフィルタリング
    if (year && climateData.yearly) {
      climateData = climateData.yearly.find(y => y.year === parseInt(year)) || climateData;
    }

    res.json(res.createResponse(climateData));
  } catch (error) {
    console.error('気候データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '気候データの取得に失敗しました。'
    ));
  }
});

module.exports = router;