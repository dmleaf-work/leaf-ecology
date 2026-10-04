# leaf-ecology — ラーメンレビューサイト

> このファイルは全AIエージェント共通の情報源(Single Source of Truth)。
> Claude Code 固有の指示は `CLAUDE.md` を参照。

## プロジェクト概要

食べログの保存リストを管理する個人向けラーメンレビューサイト。ビルドツール無しの静的サイトで、
`ramen-data.json` を `fetch()` して一覧・検索・タグ絞り込み・お気に入り表示を行う。データと店舗
写真は別プロジェクト `RamenDB` のパイプラインが生成する。GitHub Pages(独自ドメイン `leaf-ecology.com`)
で公開しており、**main への push が即公開に繋がる**。

## 技術スタック

- HTML / CSS / JavaScript(**ES6、フレームワーク・ビルドツール無し**の静的サイト)
- ホスティング: GitHub Pages(`CNAME` = `leaf-ecology.com`、remote = `dmleaf-work/leaf-ecology`)
- データ: `ramen-data.json`(`fetch()` で読み込み)
- `package.json` 無し(npm 管理外)。フック用に Python を使う(`.claude/hooks`)

## ディレクトリ構造

- `index.html` / `index.css` / `style.css` / `script.js` … トップページ(夜の裏路地コンセプト。スクロール演出・ナビ・扉演出)
- `ramen.html` / `ramen.css` … ラーメンレビューページ(`ramen-data.json` を fetch)
- `ramen-data.json` … レビューデータ本体(RamenDB が生成)
- `assets/images/` … トップ用画像(`alley/` 配下の路地素材、OGP)
- `assets/ramen/` … 店舗写真(約250枚、日本語ファイル名。RamenDB が再生成)
- `docs/` … `project-overview.md` / `architecture.md` / `todo.md` / `decisions.md`(設計決定記録)。`docs/specs/` に機能仕様
- `CNAME` … 独自ドメイン設定。削除すると公開が壊れる
- `.claude/` … Claude Code 固有(フック・スキル)。他エージェントは無視してよい

## セットアップ手順

ビルド不要。ローカル確認は任意の静的サーバで開く。

```bash
python -m http.server 8000    # http://localhost:8000/ramen.html で確認
```

公開は GitHub Pages(main への push で自動デプロイ)。

## 開発コマンド

- `scripts\check.bat` … **検証コマンド**。`ramen-data.json` の JSON 妥当性を検証(`python -c "import json; json.load(...)"`)
- ビルド・lint・自動テストは無し。表示確認はブラウザ目視(スマホ幅も含めレスポンシブ確認)

## 作業ルール

- 作業開始時に `docs/todo.md` へ作業内容を記載する
- 作業終了後に `docs/todo.md` と `docs/decisions.md` を更新する

## コーディング規約

- コメントは日本語(`/* ── … ── */` 区切りスタイル)
- ES6 構文、`DOMContentLoaded`、`querySelector` ベース
- レスポンシブ対応必須
- アクセシビリティ配慮: `prefers-reduced-motion` を尊重、`aria-expanded` を更新、IntersectionObserver 非対応時のフォールバック
- CSS は `:root` の CSS 変数でパレット管理(`--green` / `--orange` / `--cream` / `--dark`)
- データ設計(`ramen-data.json` のフィールド: id/name/location/type/date/image/featured/favorite/note/tags/visits/area)は `docs/decisions.md` で厳密に管理

## 仕様書の参照ルール

- 機能を実装・変更する前に、`docs/specs/` に該当する `SPEC_<機能名>.md` があれば必ず読む
- 参照資料(常時読み込みはしない。必要時に読む): `docs/project-overview.md` / `docs/architecture.md` / `docs/decisions.md` / `docs/todo.md`

## 禁止事項

- `ramen-data.json` を手編集しない(RamenDB のパイプラインが生成する。データ変更は RamenDB 側で)
- `assets/ramen/` の店舗写真をリネーム・削除しない(ファイル名が `ramen-data.json` と紐づく。RamenDB が再生成する領域)
- `CNAME` を削除・変更しない(独自ドメイン公開が壊れる)
- main への安易な push をしない(即公開される。表示確認を済ませてから)
