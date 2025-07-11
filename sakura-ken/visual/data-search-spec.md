# 桜県データ検索システム仕様書

## 概要

桜県の各種データ（地理、人口、経済、観光等）を効率的に検索・取得できるシステムの仕様を定義します。

## システム構成

### アーキテクチャ
```
┌─────────────┐     ┌──────────────┐     ┌────────────┐
│   フロント   │────▶│  検索API     │────▶│  データ    │
│   エンド     │     │  サーバー    │     │  ストア    │
└─────────────┘     └──────────────┘     └────────────┘
     Vue.js          Node.js/Express      JSON Files
                         or                   or
                     Python/FastAPI         Database
```

### 技術スタック
- **フロントエンド**: Vue.js 3 + TypeScript
- **バックエンド**: Node.js + Express または Python + FastAPI
- **検索エンジン**: Elasticsearch または MeiliSearch（軽量版）
- **データストア**: JSON ファイル（初期版）→ PostgreSQL（拡張版）

## 検索機能

### 1. 全文検索
- すべてのテキストフィールドを対象とした検索
- 日本語形態素解析対応（MeCab/Kuromoji）
- 同義語・類義語対応

### 2. カテゴリー検索
#### 地理情報
- 市名、地区名
- 山、川、湖などの地形
- 観光スポット

#### 統計データ
- 人口統計
- 経済指標
- 交通量データ

#### 施設情報
- 公共施設
- 教育機関
- 医療機関
- 観光施設

### 3. 条件検索
```javascript
// 検索条件の例
{
  "category": "city",
  "filters": {
    "population": {
      "min": 100000,
      "max": 500000
    },
    "area": {
      "min": 200,
      "max": 500
    },
    "type": ["港湾都市", "工業都市"]
  },
  "sort": {
    "field": "population",
    "order": "desc"
  }
}
```

### 4. 地理空間検索
- 半径検索（指定地点から○km以内）
- ポリゴン内検索
- 近接施設検索

## API仕様

### エンドポイント

#### 検索API
```
GET /api/v1/search
```

パラメータ:
- `q` (string): 検索クエリ
- `category` (string): カテゴリー指定
- `filters` (object): フィルター条件
- `page` (number): ページ番号
- `limit` (number): 取得件数
- `sort` (string): ソート条件

レスポンス例:
```json
{
  "status": "success",
  "data": {
    "total": 123,
    "page": 1,
    "limit": 20,
    "results": [
      {
        "id": "city_001",
        "type": "city",
        "name": "桜花市",
        "description": "県庁所在地",
        "relevance": 0.95,
        "highlights": {
          "name": "<em>桜花</em>市",
          "description": "県庁所在地"
        },
        "data": {
          "population": 890234,
          "area": 456.78
        }
      }
    ]
  }
}
```

#### サジェストAPI
```
GET /api/v1/suggest
```

パラメータ:
- `q` (string): 入力文字列
- `limit` (number): 候補数

#### 詳細取得API
```
GET /api/v1/data/{category}/{id}
```

### 検索インデックス構造

```json
{
  "mappings": {
    "properties": {
      "id": { "type": "keyword" },
      "category": { "type": "keyword" },
      "name": {
        "type": "text",
        "analyzer": "japanese"
      },
      "name_kana": {
        "type": "text",
        "analyzer": "japanese_phonetic"
      },
      "name_romaji": { "type": "text" },
      "description": {
        "type": "text",
        "analyzer": "japanese"
      },
      "location": {
        "type": "geo_point"
      },
      "data": {
        "type": "object",
        "enabled": false
      },
      "tags": {
        "type": "keyword"
      },
      "created_at": {
        "type": "date"
      },
      "updated_at": {
        "type": "date"
      }
    }
  }
}
```

## フロントエンド実装

### 検索UI コンポーネント

```vue
<template>
  <div class="search-container">
    <!-- 検索バー -->
    <div class="search-bar">
      <input 
        v-model="searchQuery"
        @input="onSearchInput"
        placeholder="桜県のデータを検索..."
        class="search-input"
      >
      <button @click="search" class="search-button">
        検索
      </button>
    </div>
    
    <!-- フィルター -->
    <div class="filters">
      <select v-model="selectedCategory">
        <option value="">すべてのカテゴリー</option>
        <option value="city">市区町村</option>
        <option value="facility">施設</option>
        <option value="tourism">観光</option>
      </select>
    </div>
    
    <!-- 検索結果 -->
    <div class="results">
      <div v-for="result in results" :key="result.id" class="result-item">
        <h3>{{ result.name }}</h3>
        <p>{{ result.description }}</p>
        <span class="category-tag">{{ result.category }}</span>
      </div>
    </div>
  </div>
</template>
```

### 検索サービス

```typescript
class SearchService {
  private apiBase = '/api/v1';
  
  async search(params: SearchParams): Promise<SearchResponse> {
    const queryString = new URLSearchParams(params).toString();
    const response = await fetch(`${this.apiBase}/search?${queryString}`);
    return response.json();
  }
  
  async suggest(query: string): Promise<string[]> {
    const response = await fetch(`${this.apiBase}/suggest?q=${query}`);
    const data = await response.json();
    return data.suggestions;
  }
  
  async getDetail(category: string, id: string): Promise<any> {
    const response = await fetch(`${this.apiBase}/data/${category}/${id}`);
    return response.json();
  }
}
```

## データインデックス化

### インデックス化対象データ

1. **市区町村データ** (cities.json)
   - 市名、読み仮名、ローマ字
   - 市の特徴、タイプ
   - 人口、面積データ

2. **施設データ**
   - 施設名、カテゴリー
   - 住所、アクセス情報
   - 営業情報

3. **観光データ**
   - スポット名、説明
   - カテゴリー、タグ
   - 季節情報

4. **統計データ**
   - 指標名、数値
   - 年度、地域
   - カテゴリー

### インデックス化スクリプト

```javascript
// index-data.js
const fs = require('fs');
const path = require('path');

async function indexData() {
  // JSONファイルの読み込み
  const cities = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'data/cities.json'))
  );
  
  // インデックス用データの変換
  const documents = cities.cities.map(city => ({
    id: city.id,
    category: 'city',
    name: city.name.japanese,
    name_kana: city.name.hiragana,
    name_romaji: city.name.romaji,
    description: city.characteristics,
    location: {
      lat: city.coordinates.latitude,
      lon: city.coordinates.longitude
    },
    tags: [city.type, ...city.main_industries],
    data: {
      population: city.population.total,
      area: city.area_km2,
      density: city.population.density_per_km2
    }
  }));
  
  // インデックスへの登録
  await bulkIndex(documents);
}
```

## パフォーマンス最適化

### キャッシング戦略
- Redis による検索結果キャッシュ
- CDN による静的データ配信
- ブラウザキャッシュの活用

### インデックス最適化
- 適切なアナライザーの選択
- フィールドの重み付け
- 同義語辞書の最適化

### レスポンス最適化
- ページネーション
- 必要最小限のフィールド返却
- gzip圧縮

## セキュリティ

### API保護
- レート制限（1分あたり60リクエスト）
- APIキー認証（将来的な実装）
- CORS設定

### 入力検証
- SQLインジェクション対策
- XSS対策
- 不正なクエリの検証

## 今後の拡張

### フェーズ1（現在）
- 基本的な全文検索
- カテゴリーフィルター
- シンプルなUI

### フェーズ2
- 高度なフィルター機能
- 地理空間検索
- 検索履歴・お気に入り

### フェーズ3
- AI による自然言語検索
- 音声検索
- パーソナライゼーション

## まとめ

このデータ検索システムにより、桜県の膨大なデータを効率的に検索・活用できるようになります。段階的な実装により、基本機能から高度な機能まで、ニーズに応じて拡張可能な設計となっています。