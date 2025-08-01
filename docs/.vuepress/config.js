import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { cachePlugin } from '@vuepress/plugin-cache'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { componentsPlugin } from "vuepress-plugin-components";
import { commentPlugin } from '@vuepress/plugin-comment'
import { sidebar } from './configs/sidebar.js'
import { navbar } from './configs/navbar.js'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'
import { markdownChartPlugin } from '@vuepress/plugin-markdown-chart'
import { markdownTabPlugin } from '@vuepress/plugin-markdown-tab'
import { prismjsPlugin } from '@vuepress/plugin-prismjs'

export default defineUserConfig({
  base: '/qianpengzhan/',
  dest: 'docs/.vuepress/dist',
  lang: 'zh-CN',
  title: '学习笔记',
  description: '记录本人技术学习的笔记和总结',
  bundler: viteBundler(),
  theme: defaultTheme({
    docsRepo: 'https://github.com/pengzhanqian/qianpengzhan',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: '/logo.gif',
    editLinkText: '编辑当前',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    prev: '上一页',
    next: '下一页',
    head: [
      // 设置 favor.ico，.vuepress/public 下
      [
        'link', { rel: 'icon', href: '/favicon.ico' }
      ],
    ],
    navbar: navbar,
    sidebar: sidebar
  }),
   // use plugins
  plugins: [
    commentPlugin({
      provider: 'Giscus',
      // 仓库
      repo: 'pengzhanqian/giscus-qianpengzhan',
      // 仓库 ID
      repoId: 'R_kgDOPMGgjw',
      // 分类
      category: 'Announcements',
      // 分类 ID
      categoryId: 'DIC_kwDOPMGgj84Cs64w'
    }),
    prismjsPlugin({
      // 配置项
      theme: 'vsc-dark-plus',//'material-light',//'ateliersulphurpool-light',
      languages: ['java','xml','sql','css','javascript','vue','html','json'],
      lineNumbers: true,
      showLineNumbers: true,
      highlightLines: true
    }),
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true,
    }),
    markdownChartPlugin({
      // 启用 Chart.js
      chartjs: true,
      // 启用 ECharts
      echarts: true,
      // 启用 Flowchart.js
      flowchart: true,
      // 启用 Markmap
      markmap: true,
      // 启用 Mermaid
      mermaid: true,
      // 启用 PlantUML
      plantuml: true,
    }),
    markdownHintPlugin({
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true,
    }),
    markdownMathPlugin({
      // 选项
    }),
    componentsPlugin({
      // 插件选项
    }),
    // 根据组件文件或目录自动注册 Vue 组件。
    registerComponentsPlugin({
      // 配置项
    }),
    mediumZoomPlugin({
      // 配置项
    }),
    watermarkPlugin({
      enabled: true,
      watermarkOptions: {
          content: '钱鹏展',
          fontColor: '#666',
          opacity: 0.3,
      }
    }),
    photoSwipePlugin({
      // 选项
    }),
    catalogPlugin({
      // 你的选项
    }),
    sitemapPlugin({
      // 选项
    }),
    // 作为最后一个插件使用
    cachePlugin({
      // 配置项
      type: 'filesystem',
      enableInCi: true
    }),
  ]
})