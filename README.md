# HDUHELP Cinch — Landing Page

简单的下载落地页，纯 HTML + CSS + JS，无构建步骤。

## 文件结构

```
landing/
├── index.html      # 页面结构（中英文双语，data-i18n 标记）
├── styles.css      # 样式（亮/暗模式、响应式）
├── script.js       # 语言切换 + 年份注入
└─── assets/         # 图标
```

## 本地预览

```bash
cd landing
python3 -m http.server 8000
# 然后访问 http://localhost:8000
```

## 待替换的占位

新版本发布前需替换以下内容：

1. **TestFlight 链接** *Maybe* — `index.html` 中两处 `https://testflight.apple.com/join/XxmeUX66`
2. **APK 下载链接** — 目前为飞书云盘链接
3. **版本号** — `index.html` 中 `<span id="version-tag">v0.2.1</span>`

## 部署

整个 `landing/` 目录即可作为静态站点直接部署到任意托管平台（GitHub Pages / Cloudflare Pages / Vercel 等）。
