# 桜県API 仕様書

> バージョン: 1.0.0
> 最終更新: 2025-07-11

## 概要

桜県の各種データにアクセスするためのRESTful APIです。地理、人口、経済、文化、観光など、桜県に関する包括的なデータを提供します。

## ベースURL

```
https://api.sakura-ken.jp/v1
```

## 認証

現在のバージョンでは認証は不要です。将来的にはAPIキー認証を導入予定です。

## レスポンス形式

### 成功レスポンス

```json
{
  "success": true,
  "data": {
    // 実際のデータ
  },
  "meta": {
    "timestamp": "2025-07-11T10:30:00Z",
    "version": "1.0.0",
    "total": 1
  }
}
```

### エラーレスポンス

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "エラーメッセージ",
    "details": "詳細情報"
  },
  "meta": {
    "timestamp": "2025-07-11T10:30:00Z",
    "version": "1.0.0"
  }
}
```

## エンドポイント一覧

### 地理・地形データ

#### 県全体情報
- `GET /geography/prefecture` - 県の基本情報
- `GET /geography/cities` - 全6市の一覧
- `GET /geography/cities/{city_id}` - 特定市の詳細情報
- `GET /geography/districts` - 全地区の一覧
- `GET /geography/districts/{district_id}` - 特定地区の詳細情報

#### 地形・自然
- `GET /geography/mountains` - 山地情報
- `GET /geography/rivers` - 河川情報
- `GET /geography/lakes` - 湖沼情報
- `GET /geography/parks` - 自然公園情報
- `GET /geography/climate` - 気候データ

### 人口・統計データ

#### 人口統計
- `GET /demographics/population` - 県全体人口
- `GET /demographics/population/cities` - 市別人口
- `GET /demographics/population/age` - 年齢別人口
- `GET /demographics/population/foreign` - 外国人統計
- `GET /demographics/households` - 世帯統計

#### 統計データ
- `GET /demographics/statistics` - 各種統計データ
- `GET /demographics/trends` - 人口推移データ

### 経済・産業データ

#### 経済指標
- `GET /economy/gdp` - 県内総生産
- `GET /economy/industries` - 産業別データ
- `GET /economy/employment` - 就業者統計
- `GET /economy/companies` - 企業情報

#### 産業詳細
- `GET /economy/agriculture` - 農業データ
- `GET /economy/manufacturing` - 製造業データ
- `GET /economy/services` - サービス業データ
- `GET /economy/tourism` - 観光業データ

### 行政・政治データ

#### 行政組織
- `GET /government/organization` - 県庁組織図
- `GET /government/assembly` - 県議会情報
- `GET /government/elections` - 選挙区情報
- `GET /government/policies` - 政策情報

### インフラ・交通データ

#### 交通インフラ
- `GET /infrastructure/railways` - 鉄道情報
- `GET /infrastructure/roads` - 道路情報
- `GET /infrastructure/buses` - バス路線
- `GET /infrastructure/airports` - 空港情報
- `GET /infrastructure/ports` - 港湾情報

#### 社会インフラ
- `GET /infrastructure/utilities` - ライフライン
- `GET /infrastructure/communications` - 通信インフラ
- `GET /infrastructure/energy` - エネルギー

### 教育・医療データ

#### 教育機関
- `GET /education/schools` - 学校一覧
- `GET /education/universities` - 大学情報
- `GET /education/statistics` - 教育統計

#### 医療機関
- `GET /healthcare/hospitals` - 病院情報
- `GET /healthcare/clinics` - 診療所情報
- `GET /healthcare/pharmacies` - 薬局情報
- `GET /healthcare/statistics` - 医療統計

### 文化・観光データ

#### 文化施設
- `GET /culture/facilities` - 文化施設
- `GET /culture/events` - イベント情報
- `GET /culture/traditions` - 伝統文化
- `GET /culture/festivals` - 祭り・行事

#### 観光情報
- `GET /tourism/spots` - 観光スポット
- `GET /tourism/accommodations` - 宿泊施設
- `GET /tourism/routes` - 観光ルート
- `GET /tourism/activities` - 体験・アクティビティ

### スポーツ・レジャーデータ

- `GET /sports/teams` - プロスポーツチーム
- `GET /sports/facilities` - スポーツ施設
- `GET /sports/events` - スポーツイベント

### 国際交流データ

- `GET /international/sister-cities` - 姉妹都市
- `GET /international/exchange` - 国際交流事業
- `GET /international/foreign-residents` - 在住外国人

## 検索・フィルタリング

### クエリパラメータ

#### 基本的なフィルタリング
- `city` - 市でフィルタリング
- `district` - 地区でフィルタリング
- `category` - カテゴリでフィルタリング
- `year` - 年でフィルタリング

#### 地理的フィルタリング
- `lat` - 緯度
- `lng` - 経度
- `radius` - 半径（km）

#### ページネーション
- `page` - ページ番号（デフォルト: 1）
- `limit` - 1ページあたりの件数（デフォルト: 20、最大: 100）

#### ソート
- `sort` - ソートフィールド
- `order` - ソート順序（asc/desc）

### 例

```
GET /api/v1/tourism/spots?city=sakura-ka&category=park&limit=10
GET /api/v1/demographics/population?year=2025&city=sakura-ka
GET /api/v1/geography/districts?lat=35.6762&lng=139.6503&radius=5
```

## レート制限

- 一般ユーザー: 1,000 requests/hour
- 認証ユーザー: 10,000 requests/hour
- 商用利用: 別途契約

## データ更新頻度

- リアルタイムデータ: 即座に更新
- 統計データ: 月次更新
- 基本情報: 四半期更新
- 歴史データ: 年次更新

## サポート

- ドキュメント: https://docs.sakura-ken.jp
- サポート: support@sakura-ken.jp
- GitHub: https://github.com/sakura-ken/api

## 変更履歴

### v1.0.0 (2025-07-11)
- 初回リリース
- 基本エンドポイント実装
- 地理・人口・経済データ提供開始