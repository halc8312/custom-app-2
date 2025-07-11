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

// 県庁組織図
router.get('/organization', async (req, res) => {
  try {
    const governmentData = await loadData('prefecture-info.json');
    
    if (!governmentData || !governmentData.government) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '行政データの読み込みに失敗しました。'
      ));
    }

    res.json(res.createResponse(governmentData.government));
  } catch (error) {
    console.error('県庁組織図取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '県庁組織図の取得に失敗しました。'
    ));
  }
});

// 県議会情報
router.get('/assembly', async (req, res) => {
  try {
    const governmentData = await loadData('prefecture-info.json');
    
    if (!governmentData || !governmentData.assembly) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '議会データの読み込みに失敗しました。'
      ));
    }

    res.json(res.createResponse(governmentData.assembly));
  } catch (error) {
    console.error('県議会情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '県議会情報の取得に失敗しました。'
    ));
  }
});

// 選挙区情報
router.get('/elections', async (req, res) => {
  try {
    const { type } = req.query;
    
    const governmentData = await loadData('prefecture-info.json');
    
    if (!governmentData || !governmentData.elections) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '選挙データの読み込みに失敗しました。'
      ));
    }

    let electionsData = governmentData.elections;

    // 選挙タイプでフィルタリング
    if (type) {
      electionsData = electionsData.filter(election => 
        election.type === type
      );
    }

    res.json(res.createResponse(electionsData));
  } catch (error) {
    console.error('選挙区情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '選挙区情報の取得に失敗しました。'
    ));
  }
});

// 政策情報
router.get('/policies', async (req, res) => {
  try {
    const { category, year } = req.query;
    
    const governmentData = await loadData('prefecture-info.json');
    
    if (!governmentData || !governmentData.policies) {
      return res.status(500).json(res.createErrorResponse(
        'DATA_LOAD_ERROR',
        '政策データの読み込みに失敗しました。'
      ));
    }

    let policiesData = governmentData.policies;

    // カテゴリでフィルタリング
    if (category) {
      policiesData = policiesData.filter(policy => 
        policy.category === category
      );
    }

    // 年でフィルタリング
    if (year) {
      policiesData = policiesData.filter(policy => 
        policy.year === parseInt(year)
      );
    }

    res.json(res.createResponse(policiesData));
  } catch (error) {
    console.error('政策情報取得エラー:', error);
    res.status(500).json(res.createErrorResponse(
      'INTERNAL_SERVER_ERROR',
      '政策情報の取得に失敗しました。'
    ));
  }
});

module.exports = router;