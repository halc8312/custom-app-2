# GeoJSONを使った桜県地図の作成ガイド

## 概要
桜県の地図はGeoJSON形式で作成されており、実際の地理座標系を使用しています。これにより、より本格的でインタラクティブな地図体験を提供できます。

## GeoJSONファイルの構造

### 基本構造
```json
{
  "type": "FeatureCollection",
  "features": [
    // 各地理要素（Feature）の配列
  ]
}
```

### 地理要素の種類

#### 1. ポリゴン（Polygon）
県境、市区町村、湖などの面的要素
```json
{
  "type": "Feature",
  "properties": {
    "name": "桜花市",
    "type": "city",
    "population": 685000
  },
  "geometry": {
    "type": "Polygon",
    "coordinates": [[[経度, 緯度], ...]]
  }
}
```

#### 2. ライン（LineString）
道路、鉄道、河川などの線的要素
```json
{
  "type": "Feature",
  "properties": {
    "name": "桜川",
    "type": "river"
  },
  "geometry": {
    "type": "LineString",
    "coordinates": [[経度, 緯度], ...]
  }
}
```

#### 3. ポイント（Point）
駅、観光地、施設などの点的要素
```json
{
  "type": "Feature",
  "properties": {
    "name": "桜城",
    "type": "tourist",
    "category": "castle"
  },
  "geometry": {
    "type": "Point",
    "coordinates": [経度, 緯度]
  }
}
```

## GeoJSON Editorの使い方

### 1. オンラインツール

#### geojson.io
1. [geojson.io](https://geojson.io)にアクセス
2. 地図上で直接描画:
   - ポリゴンツール: 市区町村の境界を描く
   - ラインツール: 道路や鉄道を描く
   - マーカーツール: 施設や観光地を配置
3. プロパティを編集:
   - 右側のテーブルで各要素の属性を設定
4. エクスポート:
   - 「Save」→「GeoJSON」でファイルをダウンロード

### 2. 座標系の設定
桜県は架空の場所ですが、実際の座標系を使用:
- 中心座標: [139.65, 35.65]（関東地方相当）
- 範囲: 東経139.0-140.2、北緯35.2-36.1

### 3. プロパティの設計
```javascript
// 共通プロパティ
{
  "name": "名称",
  "type": "種別", // city, tourist, facility など
  "description": "説明"
}

// 都市用
{
  "population": 人口,
  "role": "役割" // 県庁所在地、港湾都市など
}

// 観光地用
{
  "category": "カテゴリ", // castle, park, onsen など
  "admission": "入場料",
  "hours": "営業時間"
}
```

## 実装方法

### 1. Leafletでの表示
```javascript
import L from 'leaflet'
import geoJsonData from './sakura-prefecture.geojson'

// 地図の初期化
const map = L.map('map').setView([35.65, 139.65], 9)

// GeoJSONレイヤーの追加
L.geoJSON(geoJsonData, {
  style: feature => ({
    fillColor: getColor(feature.properties.type),
    weight: 2,
    opacity: 1,
    color: 'white',
    fillOpacity: 0.7
  }),
  onEachFeature: (feature, layer) => {
    layer.bindPopup(feature.properties.name)
  }
}).addTo(map)
```

### 2. スタイリング
```javascript
function getColor(type) {
  switch(type) {
    case 'city': return '#fce7f3'
    case 'tourist': return '#dbeafe'
    case 'river': return '#3b82f6'
    default: return '#gray'
  }
}
```

## 拡張アイデア

### 1. 詳細な地理要素の追加
- 地区（district）レベルの境界
- 山地、森林エリア
- 詳細な交通網（バス路線、地下鉄）

### 2. 時系列データ
- 人口推移
- 季節ごとの観光情報
- イベント開催地

### 3. インタラクティブ機能
- ルート検索
- 観光コース提案
- 施設の混雑状況表示

## ベストプラクティス

1. **座標の精度**: 小数点以下6桁程度で十分
2. **ファイルサイズ**: 複雑なポリゴンは簡略化する
3. **プロパティ**: 必要最小限の情報に絞る
4. **命名規則**: 一貫性のある名前付け

## トラブルシューティング

### よくある問題
1. **地図が表示されない**
   - 座標の順序を確認（[経度, 緯度]の順）
   - GeoJSONの構文エラーをチェック

2. **パフォーマンスが悪い**
   - ポリゴンの頂点数を減らす
   - 大きなファイルは分割する

3. **スタイルが適用されない**
   - プロパティ名の一致を確認
   - スタイル関数の戻り値を確認

## 参考リソース
- [GeoJSON仕様](https://geojson.org/)
- [Leaflet公式ドキュメント](https://leafletjs.com/)
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- [Turf.js](https://turfjs.org/) - 地理空間分析ライブラリ