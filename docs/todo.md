# Todo — Leaf Ecology

## OGP画像の文字整理（2026-10-25）

- [x] `ogp_home.png` は Leaf Ecology と葉アイコンだけ残して他の文字を削除
- [x] `ogp_ramen.png` から全ての文字・ロゴを削除
- [x] 生成結果を目視確認して既存ファイルへ反映
- [x] `docs/decisions.md` へ変更内容を記録

## ramen.html トップへ戻るボタン（2026-10-25）

- [x] 機能仕様書を作成
- [x] 右下固定ボタンと表示スタイルを追加
- [x] IntersectionObserver による表示制御と先頭移動を実装
- [x] reduced-motion・キーボード操作・非対応環境を考慮
- [x] JS構文・差分・JSON検証を実施
- [ ] ブラウザで表示位置・スクロール動作を目視確認

## ヘッダ・フッタ簡略化（2026-10-25）

- [x] index.html / ramen.html のヘッダから Members Only・Hidden Gem・Graffiti を削除
- [x] index.html / ramen.html のフッタを Leaf Ecology 表記のみに簡略化
- [x] index.html の Owner セクション（「一杯、一手、一鞍。」からフッタ直前まで）を削除
- [x] 不要になった共通CSS・トップ専用CSSを削除
- [x] ramen.html のヘッダから Ramen、ページ見出しから Ramen Notes を削除
- ~~「ラーメン記録」の書体を他の日本語見出しと統一~~ → 後続指示で元の書体へ復元
- [x] 「ラーメン記録」の書体を元の和文明朝へ戻す
- [x] ramen.html のページヘッダ帯の縦幅を広げる
- [ ] 検証コマンドとブラウザ表示確認を実施

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
