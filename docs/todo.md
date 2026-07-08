# Todo — Leaf Ecology

## 全面リデザイン「深夜の裏路地」(2026-07-08 着手)

コンセプト: 深夜の裏路地に迷い込み、奥に RAMEN / POKER / RACE の三つの扉を見つけるパーソナルワールド。企画・実装計画は `ramen-plaer-race-do-temporal-lightning.md`(plan file)を参照。旧「THE CLUBHOUSE」構想はこのリデザインに統合し、方針を刷新。

- [x] style.css を夜の路地パレットの共通基盤に再構成(トークン / nav / footer / reveal)
- [x] script.js の scroll イベントを IntersectionObserver ベースに置換
- [x] index.html を新5セクション構成(nav / hero / rooms / owner / footer)に書き換え + index.css 新規作成
- [x] 演出レイヤー(湯気・ネオン明滅・提灯の揺れ・施錠rattle)の実装
- [x] ramen.html のインラインCSSを ramen.css に外部化し夜パレット化(JSは無変更)
- [x] AI生成素材(`assets/images/alley/` 配下)の配置 — ユーザーが7枚を生成・配置済み
- [x] ogp_home.png・ogp_ramen.png を `assets/images/` 配下に配置(ヘッドレスEdgeでHTMLモックアップをキャプチャして生成)
- [x] ローカルサーバでの疎通確認・em-dash等の規律チェック
- [x] ramen.html の統計カード(Total Bowls〜最終更新)の配色を実写真のトーンに合わせて調整
- [ ] ブラウザでの目視確認(レスポンシブ・reduced-motion・機能回帰)— 未実施
- [x] decisions.md にデザイン決定を追記

---

# Todo — Leaf Ecology ramen.html

## 画像ファイルの配置

- [x] `assets/images/osi.png` ✅
- [x] `assets/images/gekiosi.png` ✅
- [x] `assets/images/ramen.png` ✅
- [x] `assets/images/ramenya.png` ✅
- [x] 各店舗の写真 ✅

## コード上の残作業

- [x] `ramen.html` の `.review-card.featured .review-name` は不要 CSS なので削除 ✅
- ~~`page-sub` テキストの設定~~ → 不要のため削除
- ~~`ramen-converter.html` の実装~~ → 不要のため削除
- [x] SP: 激推しカードの幅崩れ修正・店名が長い場合の省略対応 ✅
- [x] ramen.html に OGP メタタグを追加 ✅

## データ

- [x] `CLAUDE.md` の `ramen.json` 記載を `ramen-data.json` に修正 ✅
- [x] `ramen-data.json` に実データを追加 ✅

## Claude Code 環境整備（2026-07-02）

- [x] `docs/CLAUDE.md` をプロジェクトルート `CLAUDE.md` に移動（docs内では自動ロードされないため）✅
- [x] `@import` 形式を撤去し、必要時に読む参照リストに変更 ✅
