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
 
## 基础技术约束（全站所有页面统一遵守）
### 1. 断点分层标准（全站统一）
- 移动端：<768px
- 平板中间屏：768px ≤ width < 1200px
- PC大屏：≥1200px

### 2. 设计还原基准
全站所有页面统一以 Figma 1440px 宽度设计稿为标准，间距、字体、色彩、组件尺寸严格对齐设计标注。

### 3. PC大屏布局规则（≥1200px）
严格还原Figma 1440宽原版式，保留设计稿横向分栏、图文排布结构，栅格、内外边距1:1复刻，不私自调整布局结构。

### 4. 平板中间屏布局规则（768 ~ 1199px）
- 不切换上下堆叠，保留PC端原有横向排版结构；
- 使用流体clamp缩放字体、模块内边距，整体布局压缩适配屏幕；
- 文字对齐方式与PC大屏保持一致，不强制居中；
- 图片保持自适应比例，可适当缩小最大宽度，无需铺满屏幕。

### 5. 移动端布局规则（＜768px，所有页面通用）
- 原桌面左右分栏全部改为**上下纵向堆叠结构**；
- 页面内全部图片模块宽度100%自适应屏幕，铺满可视宽度，等比例缩放，禁止拉伸、左右留白；
- 页面所有标题、正文、标签、说明文字统一居中对齐，不再保留PC端左/右对齐样式；
- 模块垂直间距小幅缩减，保证移动端阅读舒适。

### 6. Tailwind 样式强制规范
- transform 偏移：无内置分数工具类时，必须使用方括号自定义百分比，例：下移1/5 使用 translate-y-[20%]，禁止直接写 translate-y-1/5；
- 不新增自定义全局 tailwind 配置，样式自定义优先使用任意值方括号语法；
- 色彩、圆角、阴影、边框严格使用项目预设 design token（primary / elevated / card / accent 等）。

### 7. 图片与视觉通用约束
- 图片统一放置 public/images/，使用绝对路径引用；
- 禁止固定写死宽高造成图片拉伸变形，全部采用自适应方案；
- 页面所有视觉细节（圆角、分割线、阴影、文字层级）与Figma保持完全一致。

### 8. 代码交付规范
无特殊交互需求时，只输出静态响应式结构，不额外增加冗余JS逻辑。
