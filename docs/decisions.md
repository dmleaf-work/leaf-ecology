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

- 画像ファイルの配置（`assets/images/` および `images/`）
- `ramen-data.json` に実データを追加（現在サンプル8件）

## 変更履歴

| 日付 | 内容 |
|---|---|
| 2026-06-15 | `.review-card.featured .review-name` の不要 CSS を削除 |
| 2026-06-15 | `CLAUDE.md` のデータファイル名を `ramen.json` → `ramen-data.json` に修正 |
| 2026-06-15 | `page-sub` テキスト設定・`ramen-converter.html` 実装を不要タスクとして削除 |
| 2026-06-15 | 画像ファイル配置完了・`ramen-data.json` に実データ追加完了 |
| 2026-06-15 | SP: 激推しカード幅崩れ修正（`fav-card` に `min-width:0; overflow:hidden` 追加、モバイルで余白縮小・`fav-loc` 省略対応） |
| 2026-06-15 | ramen.html に OGP・Twitter Card メタタグを追加（画像: `assets/images/ogp_ramen.png`） |
| 2026-07-02 | `docs/CLAUDE.md` をプロジェクトルートに移動（docs内では自動ロードされなかったため）。`@import` を撤去し参照リスト形式に変更 |
| 2026-07-08 | 全面リデザイン「深夜の裏路地」着手。style.css を共通基盤（トークン/nav/footer/reveal）に再構成し index.html を新5セクション構成に書き換え。詳細は下記「全面リデザイン」章を参照 |
| 2026-07-08 | 演出レイヤー実装（湯気 `.steam` / ネオン明滅 `.neon-sign` / 提灯の揺れ `.lantern-sway` / 施錠 rattle）。詳細は「演出レイヤー」節を参照 |

---

## 全面リデザイン「深夜の裏路地」（2026-07-08〜）

### コンセプト
訪問者が深夜の裏路地に迷い込み、奥に RAMEN / POKER / RACE の三つの扉を見つけるパーソナルワールド。ロゴ（🍃 + Leaf Ecology + Members Only バッジ）のみ「THE CLUBHOUSE」から踏襲し、他は全面刷新。企画・実装計画の全文は plan file `ramen-plaer-race-do-temporal-lightning.md` を参照。

### カラーパレット（全ページ共通ロック）
夜色ベース（`--night` `--night-deep` `--wall` `--line`）+ テキスト（`--steam` `--mist`）+ アクセント2色ロック: `--neon`（状態と光: OPEN表示・フォーカスリング）/ `--lantern`（行動と温度: CTA・ホバー）。角丸は `--radius-card`（16px）と `--radius-pill` の2種のみに統一。

### CSSファイル構成
`style.css` を全ページ共通レイヤー（トークン/リセット/ノイズ/nav/footer/reveal）に再構成し、ページ専用スタイルは `index.css` のように分離する方針とした。ramen.html の巨大インライン `<style>` も同様に `ramen.css` へ外部化する予定（未着手。インラインJSは無変更のまま）。

### index.html の新構成
旧「THE CLUBHOUSE」（表紙ヒーロー・座標ティッカー・マーキー・Room 01〜03 の等サイズカード）を廃止し、以下の5セクションに再構成:
1. Nav（ロゴのみ踏襲）
2. Hero「路地の入り口」— AI生成予定の夜路地写真をフル背景に、H1 + サブコピー1行 + CTA
3. Rooms「三つの扉」— 非対称グリッド（RAMEN大扉が開放中、POKER/RACEは縦積みの施錠扉）。RAMEN/POKER/RACE の英語コードを各扉の主見出しとして採用
4. Owner「店主の卓」— 旧 manifesto を踏襲したコピー
5. Footer

デザイン規律として、em-dash（—）/ en-dash（–）の可視テキスト全廃、座標・バージョン・スクロールキュー類の削除、eyebrow はページ全体で1個（Rooms の "The Rooms" のみ）に制限。

### アクセシビリティ・パフォーマンス
`window.addEventListener('scroll')` を廃止し、`#scroll-sentinel` 要素を IntersectionObserver で監視する方式に変更（script.js）。画像は `<img onerror="this.remove()">` + 常時CSSグラデ背景のフォールバック層で、AI生成素材が届く前でも崩れない構成にした。

### 演出レイヤー（2026-07-08 実装）
共通演出部品として style.css に実装。すべて transform / opacity のみをアニメーションさせ、`prefers-reduced-motion: reduce` で全停止する。

| 演出 | 実装 | reduced-motion 時 |
|---|---|---|
| 湯気 `.steam` | ぼかした radial-gradient の玉3つを translateY + opacity でループ（delay ずらし）。RAMEN 扉に配置 | 静的ヘイズ（opacity 0.25）で残す |
| ネオン明滅 `.neon-sign` | グローは text-shadow で静的描画。ロード時に一度 `neon-boot`、以後は34秒周期の `neon-flicker`（steps() の不規則な瞬き）。RAMEN の看板文字に適用 | 点灯状態で固定 |
| 提灯の揺れ `.lantern-sway` | `transform-origin: top center` の rotate ±1.5deg。`--sway-duration` / `--sway-delay` で個体差。ヒーローと RAMEN 扉に `lantern.png`（素材未着時は onerror で消える） | 静止 |
| 施錠 rattle `.rattle` | 施錠扉（`role="button"` `tabindex="0"`）をクリック / Enter / Space で減衰する横揺れ 0.4s。animationend でクラス除去（script.js） | 揺れなし |

### ramen.html の夜化（2026-07-08 実装）
巨大インライン `<style>`（約430行）を `ramen.css` に外部化し、nav の CSS/HTMLは style.css 側の共通コンポーネントに一本化した。

- **JSは1行も変更していない。** インラインJSが直接参照する CSS 変数は `var(--gray)` と `var(--beige)` の2つのみ（grep で確認済み）。この2つだけを ramen.css の `:root` で `--gray: var(--mist); --beige: var(--wall);` とエイリアスし、他の旧トークン（`--green` `--red` `--dark` `--white` `--cream` 等）は静的CSS側のみの参照だったため、書き換え時に直接新トークンへ置き換えた（エイリアス不要）
- 写真300枚は暗くしない方針。カード背景を `--wall` にし、`.review-photo-overlay` のグラデーションで下端を馴染ませて「暗い壁に掛かった灯りの小窓」に見せる
- アクセント2色ロックの適用: `--green`→`--neon`（review-location・filter hover/focus・review-visit-btn・modal-location）、`--red`→`--lantern`（fav-rank.top・stat accent-red）。stats-bento 4枚は neon面 / night-deep面 / lantern面 / wall面（プレーン）の構成
- nav を style.css の共通コンポーネントに統一した副次効果として、ramen.html のモバイルナビが「リンク非表示のみ」から index.html と同じハンバーガーメニューに改善された（旧実装はモバイルでリンクへの導線が失われていた）
- page-header に AI生成予定の店内写真（`room-ramen-header.jpg`）+ 湯気演出（`.steam`）を追加。フォールバックはグラデ
- footer（`.site-foot`）を新規追加し、index.html と統一感を持たせた
- `#stat-latest` の初期プレースホルダ文字列を em-dash（—）から通常ハイフンに変更（HTML静的テキストのみ。JS処理には影響なし）

### AI生成素材の配置（2026-07-08）
`assets/images/alley/` に7枚（hero-alley.jpg / door-ramen.jpg / door-poker.jpg / door-race.jpg / lantern.png / room-ramen-header.jpg）を配置完了。実写真は当初のトークン設定より色温度のレンジが広く、ネオンは緑寄りの発光（ジェイド寄り）、提灯は赤みの強い暖色だった。

### 統計カード配色の見直し（2026-07-08）
実写真のトーンに合わせて `stats-bento` の4枚（Total Bowls〜最終更新）を再調整。従来は accent-green/accent-red がベタ塗りの単色カードだったが、写真の「暗い背景+隅から灯りが差す」印象に寄せてグラデーションのグロー表現に変更。

- **Total Bowls**（accent-green）: `--wall` 地に左上からネオングリーンの radial-gradient グロー。数字(`.stat-num`)にネオン色 + text-shadow の発光を追加（ネオン看板の発光カウンターのイメージ）
- **Shops Visited**（accent-dark）: 装飾なしの `--night-deep` 単色のまま（静かなカード）
- **激推し**（accent-red）: `--wall` 地に左上から提灯アンバーの radial-gradient グロー。数字に提灯色 + text-shadow（暖かい灯りのイメージ）
- **最終更新**: 無装飾の `--wall` カードのまま

4枚中2枚を「発光」、2枚を「無地」にすることで、統計行全体がベタ塗り4色より落ち着き、実写真の質感と馴染むようにした。

### ヒーローの装飾提灯を削除（2026-07-08）
`hero-alley.jpg` に既に行灯（提灯）が写り込んでいたため、index.html ヒーローに重ねていた装飾用の揺れる提灯（`.hero-lantern`）は二重表現になり不要と判断し削除。RAMEN 扉カードの `.door-lantern`（door-ramen.jpg にも提灯が写っている）は今回の指示範囲外のため未変更。

### 統計カード配色の再調整（2026-07-08・2回目）
配置された `lantern.png` / `door-poker.jpg` を実際に確認したところ、提灯は `--lantern`（#F0A04B、黄みの強い琥珀色）よりも赤みの強い橙、ネオンサインは `--neon` に近い彩度の高い緑だとわかった。ナビ・CTA等サイト全体の2色ロックはそのまま維持しつつ、統計カードの発光表現専用に `ramen.css` へ `--stat-lantern: #FF6A3D`（写真の提灯の色に合わせた赤み橙）を追加。

- **激推し**（accent-red）: 背景グローと数字の色を `--lantern` から `--stat-lantern` に変更。より写真の提灯に近い赤橙の発光に
- **Total Bowls**（accent-green）: 写真のネオンサインが `--neon` と近い彩度だったため、グローの不透明度のみ微増（0.28→0.32）
- **Shops Visited**（accent-dark）: 単色の `--night-deep` から `linear-gradient(155deg, var(--wall) 0%, var(--night-deep) 78%)` に変更。写真の暗がりにある陰影のグラデーションに寄せ、他の2枚と同じ左上起点の陰影方向で統一
- **最終更新**: 無装飾の `--wall` カードのまま(4枚のうち最も静かなカードとして維持)

### コピー修正（2026-07-08）
- hero タグライン: 「夜の路地を抜けた先、趣味だけが灯る三つの部屋。」→「夜の路地を抜けた先、灯る三軒の隠れ家。」
- Rooms セクション eyebrow: 「The Rooms」→「Hidden Gem」
- Rooms セクション見出し: 「三つの扉」→「隠れ家」
- 上記のうち hero タグラインは OGP モックアップ（ogp_home.png 用テンプレート）にも反映
- ramen.html OGP モックアップの副題を「332杯の記録」→「500杯以上の記録」に変更

### OGP画像モックアップの作成（2026-07-08）
`ogp_home.png` / `ogp_ramen.png` は画像生成ではなく、既存写真（hero-alley.jpg / room-ramen-header.jpg）をOGP比率(1200×630)にクロップ・圧縮した上でHTML/CSSでロゴ・コピーを合成するモックアップとして作成。PowerShellの System.Drawing でクロップ+JPEG圧縮 → Node.js で base64 埋め込み → Artifact として公開し、ユーザーが要素スクリーンショットでPNG化する運用。フォントは Artifact の CSP 制約により Google Fonts が読み込めないため、Cambria / 游明朝 / システム等幅の代替書体で表示（実サイトは Marcellus / Shippori Mincho）。

### ナビリンクの文言修正（2026-07-08）
index.html のナビゲーションリンクを英字表記に統一: 「The Rooms」→「Hidden Gem」/「店主の卓」→「Graffiti」/「ラーメン記録 →」→「Ramen →」。RAMEN扉カード内の `room-sub`(「ラーメン記録」)は対象外のため未変更。

### OGP画像の実ファイル化（2026-07-08）
モックアップHTMLを1200×630単体ページに分割し、ヘッドレスEdge(`msedge.exe --headless --window-size=1200,630 --screenshot=...`)で直接PNGキャプチャして生成。ユーザーによる手動スクリーンショットを待たず、`assets/images/ogp_home.png`（891KB）・`assets/images/ogp_ramen.png`（745KB）として配置済み。

なお、配置時に旧デザインの `ogp_ramen.png` / `ogp_ramen_x.png`（および horse*.png・icons*.png 等の未使用旧アセット）は既にユーザー側で `assets/images/bk/` へ退避済みだったため、上書きの心配なく新ファイルを設置できた。

### RAMEN扉カードの装飾提灯を削除（2026-07-08）
door-ramen.jpg に既に提灯が写り込んでいるため、index.html の RAMEN 扉カードに重ねていた装飾用の揺れる提灯（`.door-lantern`）をHTML/CSS双方から削除。これでヒーロー・RAMEN扉カードとも、写真にもとから写っている提灯のみになった（`lantern.png` アセット自体は現在どこからも参照されていない）。

### ramen.html ナビ文言の統一（2026-07-08）
index.html のナビ変更に合わせ、ramen.html 側のナビも統一: 「The Rooms」→「Hidden Gem」/「← 路地へ」→「← Alley」。

### 未着手（次フェーズ）
- ブラウザでの目視確認（レスポンシブ・reduced-motion・ramen.html 機能回帰）
- OGPの実際の見え方をFacebook/Twitter等のデバッガーで確認（本番デプロイ後）
