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

// 文化施設
router.get('/facilities', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city } = req.query;
    
    const cultureData = await loadData('culture-tourism-detailed.json');
    
    if (!cultureData || !cultureData.cultural_facilities) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '文化データの読み込みに失敗しました。'
      ));
    }

    let facilitiesData = cultureData.cultural_facilities;

    // 施設タイプでフィルタリング
    if (type) {
      facilitiesData = facilitiesData.filter(facility => 
        facility.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      facilitiesData = facilitiesData.filter(facility => 
        facility.city_id === city || facility.city_name === city
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = facilitiesData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, facilitiesData.length));
  } catch (error) {
    console.error('文化施設取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '文化施設の取得に失敗しました。'
    ));
  }
});

// イベント情報
router.get('/events', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, season } = req.query;
    
    const cultureData = await loadData('culture-tourism-detailed.json');
    
    if (!cultureData || !cultureData.events) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '文化データの読み込みに失敗しました。'
      ));
    }

    let eventsData = cultureData.events;

    // イベントタイプでフィルタリング
    if (type) {
      eventsData = eventsData.filter(event => 
        event.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      eventsData = eventsData.filter(event => 
        event.city_id === city || event.city_name === city
      );
    }

    // 季節でフィルタリング
    if (season) {
      eventsData = eventsData.filter(event => 
        event.season === season
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = eventsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, eventsData.length));
  } catch (error) {
    console.error('イベント情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      'イベント情報の取得に失敗しました。'
    ));
  }
});

// 伝統文化
router.get('/traditions', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city } = req.query;
    
    const cultureData = await loadData('culture-tourism-detailed.json');
    
    if (!cultureData || !cultureData.traditions) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '文化データの読み込みに失敗しました。'
      ));
    }

    let traditionsData = cultureData.traditions;

    // 伝統文化タイプでフィルタリング
    if (type) {
      traditionsData = traditionsData.filter(tradition => 
        tradition.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      traditionsData = traditionsData.filter(tradition => 
        tradition.city_id === city || tradition.city_name === city
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = traditionsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, traditionsData.length));
  } catch (error) {
    console.error('伝統文化取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '伝統文化の取得に失敗しました。'
    ));
  }
});

// 祭り・行事
router.get('/festivals', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, season } = req.query;
    
    const cultureData = await loadData('culture-tourism-detailed.json');
    
    if (!cultureData || !cultureData.festivals) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '文化データの読み込みに失敗しました。'
      ));
    }

    let festivalsData = cultureData.festivals;

    // 祭りタイプでフィルタリング
    if (type) {
      festivalsData = festivalsData.filter(festival => 
        festival.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      festivalsData = festivalsData.filter(festival => 
        festival.city_id === city || festival.city_name === city
      );
    }

    // 季節でフィルタリング
    if (season) {
      festivalsData = festivalsData.filter(festival => 
        festival.season === season
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = festivalsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, festivalsData.length));
  } catch (error) {
    console.error('祭り・行事取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '祭り・行事の取得に失敗しました。'
    ));
  }
});

module.exports = router;