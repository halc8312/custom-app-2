# GeoJSON Editorを使った架空の街（桜県）の地図作成

## はじめに
GeoJSON Editorを使えば、Google Mapsのような本格的な架空の街の地図を作成できます。

## 作成手順

### 1. GeoJSON.ioでの作成

#### ステップ1: 基本設定
1. [geojson.io](https://geojson.io)にアクセス
2. 地図を日本の関東地方付近に移動（桜県の想定位置）

#### ステップ2: 県境の作成
```
1. ポリゴンツールを選択
2. 県の外周をクリックして境界線を描画
3. ダブルクリックで完了
4. プロパティに追加:
   - name: "桜県"
   - type: "prefecture"
   - population: 2200000
```

#### ステップ3: 市区町村の追加
各市をポリゴンで描画し、プロパティを設定:
- 桜花市（県庁所在地）
- 桜川市（港湾都市）
- 東桜市（IT都市）
- 西桜市（伝統工芸）
- 南桜市（温泉都市）
- 北桜市（農業都市）

#### ステップ4: インフラの追加
- **河川**: LineStringツールで桜川を描画
- **高速道路**: 破線スタイルで桜縦貫自動車道
- **鉄道**: 桜新幹線のルート
- **湖**: ポリゴンで桜湖を作成

#### ステップ5: ランドマークの配置
マーカーツールで重要施設を配置:
- 桜城（観光地）
- 千本桜公園
- 桜空港
- 主要駅

### 2. 実装例

#### 基本的なGeoJSON構造
```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "桜花市",
        "type": "city",
        "population": 685000,
        "role": "県庁所在地"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[139.6, 35.65], [139.7, 35.7], ...]]
      }
    }
  ]
}
```

#### React/Next.jsでの表示（Leaflet不使用版）
```tsx
// カスタムSVGマップコンポーネント
export function GeoJSONtoSVGMap({ geoData }) {
  // GeoJSON座標をSVG座標に変換
  const projectCoordinate = (coord) => {
    const [lng, lat] = coord
    const x = (lng - 139.0) * 100  // 経度を0-100にスケール
    const y = (36.1 - lat) * 100   // 緯度を反転して0-100に
    return [x, y]
  }

  return (
    <svg viewBox="0 0 120 100">
      {geoData.features.map(feature => {
        if (feature.geometry.type === 'Polygon') {
          const points = feature.geometry.coordinates[0]
            .map(projectCoordinate)
            .map(([x, y]) => `${x},${y}`)
            .join(' ')
          
          return (
            <polygon
              key={feature.properties.name}
              points={points}
              fill={getColor(feature.properties.type)}
              stroke="#333"
              strokeWidth="0.5"
            />
          )
        }
      })}
    </svg>
  )
}
```

### 3. 架空の地理データ設計のコツ

#### 現実的な配置
- 県庁所在地は中央付近に
- 港湾都市は海岸線に
- 温泉地は山間部に
- 空港は都市部から適度に離れた場所に

#### 人口分布
```javascript
const cityPopulations = {
  "県庁所在地": "50-70万人",
  "第二都市": "30-50万人",
  "地方都市": "10-30万人",
  "町村": "1-10万人"
}
```

#### 交通網の設計
- 主要都市を結ぶ高速道路
- 県庁所在地を通る新幹線
- 地域を結ぶ在来線
- 主要河川沿いの道路

### 4. 高度な機能の追加

#### タイムラインデータ
```json
{
  "properties": {
    "name": "桜花市",
    "timeline": {
      "1600": { "population": 5000, "status": "城下町" },
      "1900": { "population": 50000, "status": "県庁所在地" },
      "2024": { "population": 685000, "status": "中核市" }
    }
  }
}
```

#### 季節データ
```json
{
  "properties": {
    "name": "千本桜公園",
    "seasons": {
      "spring": { "attraction": "桜満開", "visitors": 100000 },
      "summer": { "attraction": "緑陰", "visitors": 30000 },
      "autumn": { "attraction": "紅葉", "visitors": 50000 },
      "winter": { "attraction": "雪景色", "visitors": 20000 }
    }
  }
}
```

### 5. パフォーマンス最適化

#### 座標の簡略化
```javascript
// 詳細すぎる座標を簡略化
function simplifyCoordinates(coords, tolerance = 0.001) {
  // Douglas-Peucker アルゴリズムなどを使用
  return simplifiedCoords
}
```

#### データの分割
```javascript
// 大きなGeoJSONを用途別に分割
const files = {
  "boundaries.geojson": "行政境界のみ",
  "transport.geojson": "交通インフラ",
  "landmarks.geojson": "観光地・施設"
}
```

### 6. エクスポートと活用

#### 各種フォーマットへの変換
- **KML**: Google Earth用
- **TopoJSON**: ファイルサイズ削減
- **SVG**: ベクターグラフィック
- **PNG/JPEG**: 静的画像

#### WebGLでの3D表示
```javascript
// Three.jsやMapbox GL JSで3D地図化
const extrudedBuildings = {
  "type": "fill-extrusion",
  "paint": {
    "fill-extrusion-height": ["get", "height"],
    "fill-extrusion-color": ["get", "color"]
  }
}
```

## まとめ
GeoJSON Editorを使えば、架空の街でも本格的な地図を作成できます。重要なのは：
1. 現実的な地理的配置
2. 一貫性のあるデータ構造
3. 適切な詳細度
4. インタラクティブな要素の追加

これらを組み合わせることで、Google Mapsに匹敵する架空の地図を作成できます。