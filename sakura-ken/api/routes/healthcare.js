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

// 病院情報
router.get('/hospitals', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, specialty } = req.query;
    
    const healthcareData = await loadData('healthcare-detailed.json');
    
    if (!healthcareData || !healthcareData.hospitals) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '医療データの読み込みに失敗しました。'
      ));
    }

    let hospitalsData = healthcareData.hospitals;

    // 病院タイプでフィルタリング
    if (type) {
      hospitalsData = hospitalsData.filter(hospital => 
        hospital.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      hospitalsData = hospitalsData.filter(hospital => 
        hospital.city_id === city || hospital.city_name === city
      );
    }

    // 専門科でフィルタリング
    if (specialty) {
      hospitalsData = hospitalsData.filter(hospital => 
        hospital.specialties?.includes(specialty)
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = hospitalsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, hospitalsData.length));
  } catch (error) {
    console.error('病院情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '病院情報の取得に失敗しました。'
    ));
  }
});

// 診療所情報
router.get('/clinics', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, specialty } = req.query;
    
    const healthcareData = await loadData('healthcare-detailed.json');
    
    if (!healthcareData || !healthcareData.clinics) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '医療データの読み込みに失敗しました。'
      ));
    }

    let clinicsData = healthcareData.clinics;

    // 診療所タイプでフィルタリング
    if (type) {
      clinicsData = clinicsData.filter(clinic => 
        clinic.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      clinicsData = clinicsData.filter(clinic => 
        clinic.city_id === city || clinic.city_name === city
      );
    }

    // 専門科でフィルタリング
    if (specialty) {
      clinicsData = clinicsData.filter(clinic => 
        clinic.specialty === specialty
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = clinicsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, clinicsData.length));
  } catch (error) {
    console.error('診療所情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '診療所情報の取得に失敗しました。'
    ));
  }
});

// 薬局情報
router.get('/pharmacies', async (req, res) => {
  try {
    const { page = 1, limit = 20, city } = req.query;
    
    const healthcareData = await loadData('healthcare-detailed.json');
    
    if (!healthcareData || !healthcareData.pharmacies) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '医療データの読み込みに失敗しました。'
      ));
    }

    let pharmaciesData = healthcareData.pharmacies;

    // 市でフィルタリング
    if (city) {
      pharmaciesData = pharmaciesData.filter(pharmacy => 
        pharmacy.city_id === city || pharmacy.city_name === city
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = pharmaciesData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, pharmaciesData.length));
  } catch (error) {
    console.error('薬局情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '薬局情報の取得に失敗しました。'
    ));
  }
});

// 医療統計
router.get('/statistics', async (req, res) => {
  try {
    const { year = 2025, type } = req.query;
    
    const healthcareData = await loadData('healthcare-detailed.json');
    
    if (!healthcareData || !healthcareData.statistics) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '医療データの読み込みに失敗しました。'
      ));
    }

    let statisticsData = healthcareData.statistics;

    // 年でフィルタリング
    if (year && statisticsData.yearly) {
      statisticsData = statisticsData.yearly.find(y => y.year === parseInt(year)) || statisticsData;
    }

    // タイプでフィルタリング
    if (type && statisticsData.by_type) {
      statisticsData = statisticsData.by_type.find(t => t.type === type) || statisticsData;
    }

    res.json(res.createResponse(statisticsData));
  } catch (error) {
    console.error('医療統計取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '医療統計の取得に失敗しました。'
    ));
  }
});

module.exports = router;