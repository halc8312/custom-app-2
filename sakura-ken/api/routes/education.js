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

// 学校一覧
router.get('/schools', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city, level } = req.query;
    
    const educationData = await loadData('education-detailed.json');
    
    if (!educationData || !educationData.schools) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '教育データの読み込みに失敗しました。'
      ));
    }

    let schoolsData = educationData.schools;

    // 学校タイプでフィルタリング
    if (type) {
      schoolsData = schoolsData.filter(school => 
        school.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      schoolsData = schoolsData.filter(school => 
        school.city_id === city || school.city_name === city
      );
    }

    // 教育レベルでフィルタリング
    if (level) {
      schoolsData = schoolsData.filter(school => 
        school.level === level
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = schoolsData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, schoolsData.length));
  } catch (error) {
    console.error('学校一覧取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '学校一覧の取得に失敗しました。'
    ));
  }
});

// 大学情報
router.get('/universities', async (req, res) => {
  try {
    const { page = 1, limit = 20, type, city } = req.query;
    
    const educationData = await loadData('education-detailed.json');
    
    if (!educationData || !educationData.universities) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '教育データの読み込みに失敗しました。'
      ));
    }

    let universitiesData = educationData.universities;

    // 大学タイプでフィルタリング
    if (type) {
      universitiesData = universitiesData.filter(uni => 
        uni.type === type
      );
    }

    // 市でフィルタリング
    if (city) {
      universitiesData = universitiesData.filter(uni => 
        uni.city_id === city || uni.city_name === city
      );
    }

    // ページネーション
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = universitiesData.slice(startIndex, endIndex);
    
    res.json(res.createResponse(paginatedData, universitiesData.length));
  } catch (error) {
    console.error('大学情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '大学情報の取得に失敗しました。'
    ));
  }
});

// 教育統計
router.get('/statistics', async (req, res) => {
  try {
    const { year = 2025, level } = req.query;
    
    const educationData = await loadData('education-detailed.json');
    
    if (!educationData || !educationData.statistics) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '教育データの読み込みに失敗しました。'
      ));
    }

    let statisticsData = educationData.statistics;

    // 年でフィルタリング
    if (year && statisticsData.yearly) {
      statisticsData = statisticsData.yearly.find(y => y.year === parseInt(year)) || statisticsData;
    }

    // 教育レベルでフィルタリング
    if (level && statisticsData.by_level) {
      statisticsData = statisticsData.by_level.find(l => l.level === level) || statisticsData;
    }

    res.json(res.createResponse(statisticsData));
  } catch (error) {
    console.error('教育統計取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '教育統計の取得に失敗しました。'
    ));
  }
});

module.exports = router;