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

export default defineUserConfig({
  base: '/qianpengzhan/',
  dest: './dist',
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
    head: [
      // 设置 favor.ico，.vuepress/public 下
      [
        'link', { rel: 'icon', href: '/favicon.ico' }
      ],
    ],
    navbar: navbar,
    sidebar: sidebar,
    outline: [1]
  }),
   // use plugins
  plugins: [
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
    commentPlugin({
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
      // options
      watermarkText: '钱鹏展',
    }),
    photoSwipePlugin({
      // 选项
    }),
    catalogPlugin({
      // 你的选项
    }),
    sitemapPlugin({
      // 选项
      hostname: ''
    }),
    // 作为最后一个插件使用
    cachePlugin({
      // 配置项
      type: 'filesystem',
      enableInCi: true
    }),
  ]
})