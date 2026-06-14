# Leaf Ecology — ramen.html 設計決定記録

## データ構造

### レビューデータを JSON に分離
- レビューデータは `ramen-data.json` に外部化し、`ramen.html` は `fetch()` で読み込む
- 100件以上の追加を想定した構成
- エクセル → JSON 変換ツールとして `ramen-converter.html` を用意

### フィールド構成（`ramen-data.json`）
| フィールド | 型 | 説明 |
|---|---|---|
| `id` | number | 一意ID |
| `name` | string | 店名 |
| `location` | string | 表示用住所（例: `📍 新宿, 東京`） |
| `type` | string | ラーメン種別（フィルター用） |
| `date` | string | 訪問日（`YYYY.MM` 形式） |
| `image` | string | 写真パス（例: `images/ramen-1.jpg`） |
| `featured` | boolean | 推し（右上に `assets/images/osi.png` 表示） |
| `favorite` | boolean | 激推し（右上に `assets/images/gekiosi.png` 表示） |
| `note` | string | コメント |
| `tags` | string[] | タグ一覧 |
| `visits` | number | 訪問回数 |
| `area` | string | エリア名（検索用） |

### 廃止フィールド
- `score`（スコア） — 廃止
- `price`（価格） — 廃止
- `emoji` — `image` に変更

---

## UI / 表示

### カード右上アイコン
- `favorite: true` → `assets/images/gekiosi.png`
- `favorite: false` かつ `featured: true` → `assets/images/osi.png`
- どちらでもない → アイコンなし

### featured カードレイアウト廃止
- `featured` はレイアウト（2列スパン・横並び）を変えない
- 意味は「推し」のアイコン表示のみに限定

### 激推しセクション（旧: 殿堂入り）
- セクション名: `殿堂入り` → `激推し`（英語表記: `My Picks`）
- `favorite: true` の店舗を訪問回数降順で表示
- 3列グリッド、テキストは溢れたら `…` で省略

### Stats カード（4枚）
| カード | 内容 | 背景 |
|---|---|---|
| Total Bowls（緑） | 合計訪問杯数 | 🍜 |
| Shops Visited（オレンジ） | 店舗数 | 🏮 |
| 激推し（ダーク） | 激推し店舗数 | `assets/images/gekiosi.png` |
| 最終更新（白） | 直近の訪問日 | 📅 |

### フィルターボタン（種別）
すべて / とんこつ / 醤油 / 塩 / 味噌 / つけ麺 / 煮干 / MIX / 白湯 / 家系 / 二郎系 / 担々麺 / 冷やし / 油そば/混ぜそば / その他

### ページテキスト
- `page-sub`: 「りーふのラーメンの記録」

---

## ファイル構成

```
leaf-ecology/
├── index.html          # トップページ（ラーメンリンクは ramen.html へ）
├── ramen.html          # ラーメン記録ページ
├── ramen-data.json     # レビューデータ
├── ramen-converter.html # エクセル→JSON変換ツール（非公開）
├── assets/
│   └── images/
│       ├── osi.png     # 推しアイコン
│       └── gekiosi.png # 激推しアイコン
└── images/
    └── ramen-*.jpg     # 各店舗の写真（ramen-1.jpg〜）
```

---

## 未解決 / 残作業

- `ramen.html:250` に `.review-card.featured .review-name` の不要な CSS が残存
- `page-sub` が現在空になっている（要確認）
- `ramen-converter.html` の実装が未完了
