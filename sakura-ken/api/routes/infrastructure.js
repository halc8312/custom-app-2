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

// 鉄道情報
router.get('/railways', async (req, res) => {
  try {
    const { page = 1, limit = 20, operator, city } = req.query;
    
    const transportData = await loadData('transportation-detailed.json');
    
    if (!transportData || !transportData.railways) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '鉄道データの読み込みに失敗しました。'
      ));
    }

    let railwaysData = transportData.railways;

    // 運営会社でフィルタリング
    if (operator) {
      railwaysData = railwaysData.filter(railway => 
        railway.operator === operator
      );
    }

    // 市でフィルタリング
    if (city) {
      railwaysData = railwaysData.filter(railway => 
        railway.cities?.includes(city)
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = railwaysData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, railwaysData.length));
  } catch (error) {
    console.error('鉄道情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '鉄道情報の取得に失敗しました。'
    ));
  }
});

// 道路情報
router.get('/roads', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city } = req.query;
    
    const transportData = await loadData('transportation-detailed.json');
    
    if (!transportData || !transportData.roads) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '道路データの読み込みに失敗しました。'
      ));
    }

    let roadsData = transportData.roads;

    // 道路タイプでフィルタリング
    if (type) {
      roadsData = roadsData.filter(road => 
        road.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      roadsData = roadsData.filter(road => 
        road.cities?.includes(city)
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = roadsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, roadsData.length));
  } catch (error) {
    console.error('道路情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '道路情報の取得に失敗しました。'
    ));
  }
});

// バス路線
router.get('/buses', async (req, res) => {
  try {
    const { page = 1, limit = 20, operator, city } = req.query;
    
    const transportData = await loadData('transportation-detailed.json');
    
    if (!transportData || !transportData.buses) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        'バスデータの読み込みに失敗しました。'
      ));
    }

    let busesData = transportData.buses;

    // 運営会社でフィルタリング
    if (operator) {
      busesData = busesData.filter(bus => 
        bus.operator === operator
      );
    }

    // 市でフィルタリング
    if (city) {
      busesData = busesData.filter(bus => 
        bus.cities?.includes(city)
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = busesData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, busesData.length));
  } catch (error) {
    console.error('バス路線取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      'バス路線の取得に失敗しました。'
    ));
  }
});

// 空港情報
router.get('/airports', async (req, res) => {
  try {
    const transportData = await loadData('transportation-detailed.json');
    
    if (!transportData || !transportData.airports) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '空港データの読み込みに失敗しました。'
      ));
    }

    res.json(res.createResponse(transportData.airports));
  } catch (error) {
    console.error('空港情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '空港情報の取得に失敗しました。'
    ));
  }
});

// 港湾情報
router.get('/ports', async (req, res) => {
  try {
    const transportData = await loadData('transportation-detailed.json');
    
    if (!transportData || !transportData.ports) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '港湾データの読み込みに失敗しました。'
      ));
    }

    res.json(res.createResponse(transportData.ports));
  } catch (error) {
    console.error('港湾情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '港湾情報の取得に失敗しました。'
    ));
  }
});

// ライフライン
router.get('/utilities', async (req, res) => {
  try {
    const { type } = req.query;
    
    const infrastructureData = await loadData('prefecture-info.json');
    
    if (!infrastructureData || !infrastructureData.infrastructure) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        'インフラデータの読み込みに失敗しました。'
      ));
    }

    let utilitiesData = infrastructureData.infrastructure.utilities || [];

    // タイプでフィルタリング
    if (type) {
      utilitiesData = utilitiesData.filter(utility => 
        utility.type === type
      );
    }

    res.json(res.createResponse(utilitiesData));
  } catch (error) {
    console.error('ライフライン取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      'ライフラインの取得に失敗しました。'
    ));
  }
});

// 通信インフラ
router.get('/communications', async (req, res) => {
  try {
    const { type } = req.query;
    
    const infrastructureData = await loadData('prefecture-info.json');
    
    if (!infrastructureData || !infrastructureData.infrastructure) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        'インフラデータの読み込みに失敗しました。'
      ));
    }

    let communicationsData = infrastructureData.infrastructure.communications || [];

    // タイプでフィルタリング
    if (type) {
      communicationsData = communicationsData.filter(comm => 
        comm.type === type
      );
    }

    res.json(res.createResponse(communicationsData));
  } catch (error) {
    console.error('通信インフラ取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '通信インフラの取得に失敗しました。'
    ));
  }
});

// エネルギー
router.get('/energy', async (req, res) => {
  try {
    const { type } = req.query;
    
    const infrastructureData = await loadData('prefecture-info.json');
    
    if (!infrastructureData || !infrastructureData.infrastructure) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        'インフラデータの読み込みに失敗しました。'
      ));
    }

    let energyData = infrastructureData.infrastructure.energy || [];

    // タイプでフィルタリング
    if (type) {
      energyData = energyData.filter(energy => 
        energy.type === type
      );
    }

    res.json(res.createResponse(energyData));
  } catch (error) {
    console.error('エネルギー取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      'エネルギー情報の取得に失敗しました。'
    ));
  }
});

module.exports = router;