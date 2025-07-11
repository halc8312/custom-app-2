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

// 県内総生産
router.get('/gdp', async (req, res) => {
  try {
    const { year = 2025, sector } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let gdpData = economyData.gdp || {};

    // 年でフィルタリング
    if (year && gdpData.yearly) {
      gdpData = gdpData.yearly.find(y => y.year === parseInt(year)) || gdpData;
    }

    // 産業セクターでフィルタリング
    if (sector && gdpData.sectors) {
      gdpData = gdpData.sectors.find(s => s.name === sector || s.id === sector) || gdpData;
    }

    res.json(res.createResponse(gdpData));
  } catch (error) {
    console.error('県内総生産取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '県内総生産の取得に失敗しました。'
    ));
  }
});

// 産業別データ
router.get('/industries', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, sector, city, sort, order = 'desc' } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let industriesData = economyData.industries || [];

    // 年でフィルタリング
    if (year && industriesData.length > 0 && industriesData[0].yearly) {
      industriesData = industriesData.map(industry => ({
        ...industry,
        output: industry.yearly?.find(y => y.year === parseInt(year))?.output || industry.output,
        employees: industry.yearly?.find(y => y.year === parseInt(year))?.employees || industry.employees
      }));
    }

    // 産業セクターでフィルタリング
    if (sector) {
      industriesData = industriesData.filter(industry => 
        industry.sector === sector || industry.sector_id === sector
      );
    }

    // 市でフィルタリング
    if (city) {
      industriesData = industriesData.filter(industry => 
        industry.city_id === city || industry.city_name === city
      );
    }

    // ソート処理
    if (sort) {
      industriesData.sort((a, b) => {
        const aVal = a[sort] || 0;
        const bVal = b[sort] || 0;
        
        if (order === 'desc') {
          return bVal - aVal;
        }
        return aVal - bVal;
      });
    }

    // ページネーション
    const result = paginateData(industriesData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('産業別データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '産業別データの取得に失敗しました。'
    ));
  }
});

// 就業者統計
router.get('/employment', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, sector, city, age_group } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let employmentData = economyData.employment || [];

    // 年でフィルタリング
    if (year && employmentData.length > 0 && employmentData[0].yearly) {
      employmentData = employmentData.map(employment => ({
        ...employment,
        count: employment.yearly?.find(y => y.year === parseInt(year))?.count || employment.count
      }));
    }

    // 産業セクターでフィルタリング
    if (sector) {
      employmentData = employmentData.filter(employment => 
        employment.sector === sector || employment.sector_id === sector
      );
    }

    // 市でフィルタリング
    if (city) {
      employmentData = employmentData.filter(employment => 
        employment.city_id === city || employment.city_name === city
      );
    }

    // 年齢層でフィルタリング
    if (age_group) {
      employmentData = employmentData.filter(employment => 
        employment.age_group === age_group
      );
    }

    // ページネーション
    const result = paginateData(employmentData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('就業者統計取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '就業者統計の取得に失敗しました。'
    ));
  }
});

// 企業情報
router.get('/companies', async (req, res) => {
  try {
    const { page = 1, limit = 20, sector, city, size, sort, order = 'desc' } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let companiesData = economyData.companies || [];

    // 産業セクターでフィルタリング
    if (sector) {
      companiesData = companiesData.filter(company => 
        company.sector === sector || company.sector_id === sector
      );
    }

    // 市でフィルタリング
    if (city) {
      companiesData = companiesData.filter(company => 
        company.city_id === city || company.city_name === city
      );
    }

    // 企業規模でフィルタリング
    if (size) {
      companiesData = companiesData.filter(company => 
        company.size === size || company.employee_count >= parseInt(size)
      );
    }

    // ソート処理
    if (sort) {
      companiesData.sort((a, b) => {
        const aVal = a[sort] || 0;
        const bVal = b[sort] || 0;
        
        if (order === 'desc') {
          return bVal - aVal;
        }
        return aVal - bVal;
      });
    }

    // ページネーション
    const result = paginateData(companiesData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('企業情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '企業情報の取得に失敗しました。'
    ));
  }
});

// 農業データ
router.get('/agriculture', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, product, city } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let agricultureData = economyData.agriculture || [];

    // 年でフィルタリング
    if (year && agricultureData.length > 0 && agricultureData[0].yearly) {
      agricultureData = agricultureData.map(agri => ({
        ...agri,
        production: agri.yearly?.find(y => y.year === parseInt(year))?.production || agri.production,
        value: agri.yearly?.find(y => y.year === parseInt(year))?.value || agri.value
      }));
    }

    // 農産物でフィルタリング
    if (product) {
      agricultureData = agricultureData.filter(agri => 
        agri.product?.toLowerCase().includes(product.toLowerCase())
      );
    }

    // 市でフィルタリング
    if (city) {
      agricultureData = agricultureData.filter(agri => 
        agri.city_id === city || agri.city_name === city
      );
    }

    // ページネーション
    const result = paginateData(agricultureData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('農業データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '農業データの取得に失敗しました。'
    ));
  }
});

// 製造業データ
router.get('/manufacturing', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, industry, city } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let manufacturingData = economyData.manufacturing || [];

    // 年でフィルタリング
    if (year && manufacturingData.length > 0 && manufacturingData[0].yearly) {
      manufacturingData = manufacturingData.map(manu => ({
        ...manu,
        output: manu.yearly?.find(y => y.year === parseInt(year))?.output || manu.output,
        employees: manu.yearly?.find(y => y.year === parseInt(year))?.employees || manu.employees
      }));
    }

    // 製造業種でフィルタリング
    if (industry) {
      manufacturingData = manufacturingData.filter(manu => 
        manu.industry?.toLowerCase().includes(industry.toLowerCase())
      );
    }

    // 市でフィルタリング
    if (city) {
      manufacturingData = manufacturingData.filter(manu => 
        manu.city_id === city || manu.city_name === city
      );
    }

    // ページネーション
    const result = paginateData(manufacturingData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('製造業データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '製造業データの取得に失敗しました。'
    ));
  }
});

// サービス業データ
router.get('/services', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, service_type, city } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let servicesData = economyData.services || [];

    // 年でフィルタリング
    if (year && servicesData.length > 0 && servicesData[0].yearly) {
      servicesData = servicesData.map(service => ({
        ...service,
        revenue: service.yearly?.find(y => y.year === parseInt(year))?.revenue || service.revenue,
        employees: service.yearly?.find(y => y.year === parseInt(year))?.employees || service.employees
      }));
    }

    // サービス種別でフィルタリング
    if (service_type) {
      servicesData = servicesData.filter(service => 
        service.service_type?.toLowerCase().includes(service_type.toLowerCase())
      );
    }

    // 市でフィルタリング
    if (city) {
      servicesData = servicesData.filter(service => 
        service.city_id === city || service.city_name === city
      );
    }

    // ページネーション
    const result = paginateData(servicesData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('サービス業データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      'サービス業データの取得に失敗しました。'
    ));
  }
});

// 観光業データ
router.get('/tourism', async (req, res) => {
  try {
    const { page = 1, limit = 20, year = 2025, season, city } = req.query;
    
    const economyData = await loadData('economy.json');
    
    if (!economyData) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '経済データの読み込みに失敗しました。'
      ));
    }

    let tourismData = economyData.tourism || [];

    // 年でフィルタリング
    if (year && tourismData.length > 0 && tourismData[0].yearly) {
      tourismData = tourismData.map(tourism => ({
        ...tourism,
        visitors: tourism.yearly?.find(y => y.year === parseInt(year))?.visitors || tourism.visitors,
        revenue: tourism.yearly?.find(y => y.year === parseInt(year))?.revenue || tourism.revenue
      }));
    }

    // 季節でフィルタリング
    if (season) {
      tourismData = tourismData.filter(tourism => 
        tourism.season === season
      );
    }

    // 市でフィルタリング
    if (city) {
      tourismData = tourismData.filter(tourism => 
        tourism.city_id === city || tourism.city_name === city
      );
    }

    // ページネーション
    const result = paginateData(tourismData, page, limit);
    
    res.json(res.createResponse(result.data, result.pagination.total));
  } catch (error) {
    console.error('観光業データ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '観光業データの取得に失敗しました。'
    ));
  }
});

module.exports = router;