const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const path = require('path');

// ルーターのインポート
const geographyRoutes = require('./routes/geography');
const demographicsRoutes = require('./routes/demographics');
const economyRoutes = require('./routes/economy');
const governmentRoutes = require('./routes/government');
const infrastructureRoutes = require('./routes/infrastructure');
const educationRoutes = require('./routes/education');
const healthcareRoutes = require('./routes/healthcare');
const cultureRoutes = require('./routes/culture');
const tourismRoutes = require('./routes/tourism');
const sportsRoutes = require('./routes/sports');
const internationalRoutes = require('./routes/international');

const app = express();
const PORT = process.env.PORT || 3001;

// セキュリティミドルウェア
app.use(helmet());
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://sakura-ken.jp', 'https://www.sakura-ken.jp']
    : true
}));

// レート制限
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1時間
  max: 1000, // 一般ユーザー: 1000 requests/hour
  message: {
    success: false,
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'レート制限を超過しました。1時間後に再試行してください。'
    }
  }
});
app.use('/api/v1/', limiter);

// ログ設定
app.use(morgan('combined'));

// JSONパーサー
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// レスポンスヘルパー関数
const createResponse = (data, total = null) => ({
  success: true,
  data,
  meta: {
    timestamp: new Date().toISOString(),
    version: '1.0.0',
    total: total || (Array.isArray(data) ? data.length : 1)
  }
});

const createErrorResponse = (code, message, details = null) => ({
  success: false,
  error: {
    code,
    message,
    details
  },
  meta: {
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  }
});

// グローバルレスポンスヘルパー
app.use((req, res, next) => {
  res.createResponse = createResponse;
  res.createErrorResponse = createErrorResponse;
  next();
});

// APIルート
app.use('/api/v1/geography', geographyRoutes);
app.use('/api/v1/demographics', demographicsRoutes);
app.use('/api/v1/economy', economyRoutes);
app.use('/api/v1/government', governmentRoutes);
app.use('/api/v1/infrastructure', infrastructureRoutes);
app.use('/api/v1/education', educationRoutes);
app.use('/api/v1/healthcare', healthcareRoutes);
app.use('/api/v1/culture', cultureRoutes);
app.use('/api/v1/tourism', tourismRoutes);
app.use('/api/v1/sports', sportsRoutes);
app.use('/api/v1/international', internationalRoutes);

// ヘルスチェックエンドポイント
app.get('/api/v1/health', (req, res) => {
  res.json(res.createResponse({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  }));
});

// API情報エンドポイント
app.get('/api/v1', (req, res) => {
  res.json(res.createResponse({
    name: '桜県API',
    version: '1.0.0',
    description: '桜県の各種データにアクセスするためのRESTful API',
    endpoints: {
      geography: '/api/v1/geography',
      demographics: '/api/v1/demographics',
      economy: '/api/v1/economy',
      government: '/api/v1/government',
      infrastructure: '/api/v1/infrastructure',
      education: '/api/v1/education',
      healthcare: '/api/v1/healthcare',
      culture: '/api/v1/culture',
      tourism: '/api/v1/tourism',
      sports: '/api/v1/sports',
      international: '/api/v1/international'
    },
    documentation: 'https://docs.sakura-ken.jp',
    support: 'support@sakura-ken.jp'
  }));
});

// 404エラーハンドラー
app.use('/api/v1/*', (req, res) => {
  res.status(404).json(res.createErrorResponse(
    'ENDPOINT_NOT_FOUND',
    '指定されたエンドポイントが見つかりません。',
    `Path: ${req.originalUrl}`
  ));
});

// グローバルエラーハンドラー
app.use((err, req, res, next) => {
  console.error('API Error:', err);
  
  res.status(err.status || 500).json(res.createErrorResponse(
    'INTERNAL_SERVER_ERROR',
    'サーバー内部エラーが発生しました。',
    process.env.NODE_ENV === 'development' ? err.message : null
  ));
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`桜県APIサーバーが起動しました: http://localhost:${PORT}`);
  console.log(`API情報: http://localhost:${PORT}/api/v1`);
  console.log(`ヘルスチェック: http://localhost:${PORT}/api/v1/health`);
});

module.exports = app;