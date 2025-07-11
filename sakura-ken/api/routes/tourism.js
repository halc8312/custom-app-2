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

// 観光スポット
router.get('/spots', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, season } = req.query;
    
    const tourismData = await loadData('culture-tourism-detailed.json');
    
    if (!tourismData || !tourismData.tourist_spots) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '観光データの読み込みに失敗しました。'
      ));
    }

    let spotsData = tourismData.tourist_spots;

    // スポットタイプでフィルタリング
    if (type) {
      spotsData = spotsData.filter(spot => 
        spot.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      spotsData = spotsData.filter(spot => 
        spot.city_id === city || spot.city_name === city
      );
    }

    // 季節でフィルタリング
    if (season) {
      spotsData = spotsData.filter(spot => 
        spot.best_season === season
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = spotsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, spotsData.length));
  } catch (error) {
    console.error('観光スポット取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '観光スポットの取得に失敗しました。'
    ));
  }
});

// 宿泊施設
router.get('/accommodations', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, price_range } = req.query;
    
    const tourismData = await loadData('culture-tourism-detailed.json');
    
    if (!tourismData || !tourismData.accommodations) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '観光データの読み込みに失敗しました。'
      ));
    }

    let accommodationsData = tourismData.accommodations;

    // 宿泊施設タイプでフィルタリング
    if (type) {
      accommodationsData = accommodationsData.filter(accommodation => 
        accommodation.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      accommodationsData = accommodationsData.filter(accommodation => 
        accommodation.city_id === city || accommodation.city_name === city
      );
    }

    // 価格帯でフィルタリング
    if (price_range) {
      accommodationsData = accommodationsData.filter(accommodation => 
        accommodation.price_range === price_range
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = accommodationsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, accommodationsData.length));
  } catch (error) {
    console.error('宿泊施設取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '宿泊施設の取得に失敗しました。'
    ));
  }
});

// 観光ルート
router.get('/routes', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, duration } = req.query;
    
    const tourismData = await loadData('culture-tourism-detailed.json');
    
    if (!tourismData || !tourismData.tourist_routes) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '観光データの読み込みに失敗しました。'
      ));
    }

    let routesData = tourismData.tourist_routes;

    // ルートタイプでフィルタリング
    if (type) {
      routesData = routesData.filter(route => 
        route.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      routesData = routesData.filter(route => 
        route.cities?.includes(city)
      );
    }

    // 所要時間でフィルタリング
    if (duration) {
      routesData = routesData.filter(route => 
        route.duration === duration
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = routesData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, routesData.length));
  } catch (error) {
    console.error('観光ルート取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '観光ルートの取得に失敗しました。'
    ));
  }
});

// 体験・アクティビティ
router.get('/activities', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, season } = req.query;
    
    const tourismData = await loadData('culture-tourism-detailed.json');
    
    if (!tourismData || !tourismData.activities) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '観光データの読み込みに失敗しました。'
      ));
    }

    let activitiesData = tourismData.activities;

    // アクティビティタイプでフィルタリング
    if (type) {
      activitiesData = activitiesData.filter(activity => 
        activity.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      activitiesData = activitiesData.filter(activity => 
        activity.city_id === city || activity.city_name === city
      );
    }

    // 季節でフィルタリング
    if (season) {
      activitiesData = activitiesData.filter(activity => 
        activity.available_seasons?.includes(season)
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = activitiesData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, activitiesData.length));
  } catch (error) {
    console.error('体験・アクティビティ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '体験・アクティビティの取得に失敗しました。'
    ));
  }
});

module.exports = router;