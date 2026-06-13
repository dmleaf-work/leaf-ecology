# 🍃 Leaf Ecology

ラーメン、ポーカー、競馬　趣味に捧げた人の記録

---

## 📁 ファイル構成

```
leaf-ecology/
├── index.html          ← メインページ
├── style.css           ← スタイル（デザイン）
├── script.js           ← JavaScript（スクロールアニメーション）
├── README.md           ← このファイル
└── assets/
    └── images/
        ├── horse.png   ← 馬キャラクター（ヒーロー右上）
        ├── track.png   ← 競馬場の背景（ヒーロー左下）
        ├── props.png   ← カード・チップ・店舗（ヒーロー右下）
        └── icons.png   ← フローティングバーのアイコン素材
```

---

## 🖼️ 画像の準備（重要）

`assets/images/` フォルダに以下4枚の画像を入れてください。

| ファイル名 | 内容 | 元ファイル |
|-----------|------|-----------|
| `horse.png` | 馬キャラクターがラーメンを食べているイラスト | b0994966-... .png |
| `track.png` | 競馬場と競走シーンの画像 | 69724f23-... .png |
| `props.png` | カード・チップ・ラーメン店の画像 | 035c9f1c-... .png |
| `icons.png` | フローティングバーのアイコン素材 | b0994966-... .png（horse.pngと同じファイル） |

> **注意:** `horse.png` と `icons.png` は同じ画像ファイルを2つの名前でコピーして配置してください。

---

## 🚀 GitHub Pages で公開する手順

### Step 1 — GitHubにリポジトリを作成
1. [github.com](https://github.com) にログイン
2. 右上の「＋」→「New repository」をクリック
3. Repository name に `leaf-ecology` と入力
4. 「Public」を選択
5. 「Create repository」をクリック

### Step 2 — ファイルをアップロード
1. 作成したリポジトリのページを開く
2. 「uploading an existing file」をクリック
3. `leaf-ecology/` フォルダ内のファイルをすべてドラッグ＆ドロップ
   - `index.html`
   - `style.css`
   - `script.js`
   - `assets/images/horse.png`
   - `assets/images/track.png`
   - `assets/images/props.png`
   - `assets/images/icons.png`
4. 「Commit changes」をクリック

### Step 3 — GitHub Pages を有効にする
1. リポジトリの「Settings」タブを開く
2. 左メニューの「Pages」をクリック
3. Source を「Deploy from a branch」に設定
4. Branch を「main」、フォルダを「/ (root)」に設定
5. 「Save」をクリック

### Step 4 — 公開完了 🎉
数分後、以下のURLでアクセスできます：
```
https://【あなたのGitHubユーザー名】.github.io/leaf-ecology/
```

---

## ✏️ カスタマイズ方法

### テキストを変えたい
→ `index.html` をテキストエディタ（メモ帳でもOK）で開いて編集

### 色を変えたい
→ `style.css` の先頭にある `:root { }` ブロックの色コードを変更

```css
:root {
  --green:  #4CAF50;  /* メインカラー（緑） */
  --orange: #FF8A3D;  /* アクセントカラー（オレンジ） */
  --cream:  #FFF8F0;  /* 背景色 */
  --dark:   #1F2937;  /* テキスト色 */
}
```

---

Made with 🍜
