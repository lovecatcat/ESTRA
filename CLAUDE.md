# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

ESTRA 品牌官网 — 深色编辑风格单页应用，强调"结构即论点"的设计哲学。

## 常用命令

```bash
npm run dev        # 启动开发服务器 (Vite)
npm run build      # 类型检查 + 生产构建 (tsc && vite build)
npm run preview    # 预览生产构建
```

## 技术栈

- **构建工具**: Vite 5 + TypeScript 5
- **框架**: React 18 + React Router v7
- **样式**: Tailwind CSS 3 + PostCSS + Autoprefixer
- **字体**: Roboto (Google Fonts, 300/400/500/700)

## 项目结构

```
src/
├── main.tsx              # 入口，挂载 React 到 #root
├── App.tsx               # BrowserRouter + 路由定义
├── index.css             # Tailwind 指令 + 全局样式 + 组件层样式
├── components/
│   ├── Layout.tsx        # Nav + <Outlet /> + Footer 布局
│   ├── Nav.tsx           # 固定顶部导航，含桌面/移动端响应式
│   └── Footer.tsx        # 页脚，复用 Nav 中的 NAV_LINKS
└── pages/
    ├── HomePage.tsx      # 首页 — Hero/原则/案例/宣言 5 段式布局
    ├── AboutPage.tsx
    ├── ArchivePage.tsx
    ├── ArchiveDetailPage.tsx
    ├── ContactPage.tsx
    └── WorkPage.tsx
```

## 路由结构

所有页面嵌套在 `<Layout />` 下（共享 Nav + Footer）：

| 路径 | 页面 |
|------|------|
| `/` | HomePage |
| `/archive` | ArchivePage |
| `/archive/:id` | ArchiveDetailPage |
| `/work` | WorkPage |
| `/about` | AboutPage |
| `/contact` | ContactPage |

## 设计令牌 (Tailwind `theme.extend`)

色彩系统定义在 `tailwind.config.js`：

- `bg-primary` (#262423) — 页面主背景
- `bg-elevated` (#302E2D) — 悬浮面板/移动端菜单
- `bg-card` (#1C1B1A) — 卡片背景
- `accent` (#DDD4C1) — 暖石色，标题/强调文字
- `accent-muted` (#A9A294) — 次级暖石，dim 文字
- `border` (rgba(221,212,193,0.15)) — 默认边框
- `border-strong` (rgba(221,212,193,0.30)) — 强调边框

自定义字体大小：`act-label` (7px 标签)、`hero` (50px)、`hero-sub` (24px)。
导航高度：`h-nav` = 48px。

## 关键模式

- **组件级样式**：`index.css` 的 `@layer components` 定义了 `.section`、`.section-inner`、`.act-label`、`.hairline` 等可复用类。
- **导航选中状态**：使用 `NavLink` 的 `isActive` 回调 + `border-b-2` 实现下划线指示器。
- **数据驱动渲染**：首页的 PRINCIPLES、CASE_STUDIES、MANIFESTO 等数据以常量数组定义在组件内，通过 `.map()` 渲染。
- **响应式**：`clamp()` 函数控制字体和间距的流体缩放，`md:` / `lg:` 断点控制栅格布局。
- **图片资源**：所有图片存放在 `/public/images/`，通过绝对路径 `/images/...` 引用。注意部分图片超过 1MB，推送时需要较大的 `http.postBuffer`（建议 ≥ 500MB）。
