import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defineUserConfig } from 'vuepress'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { noticePlugin } from '@vuepress/plugin-notice'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { cachePlugin } from '@vuepress/plugin-cache'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { componentsPlugin } from "vuepress-plugin-components";
import { commentPlugin } from '@vuepress/plugin-comment'
import { sidebar } from './configs/sidebar.js'
import { navbar } from './configs/navbar.js'
import { markdownMathPlugin } from '@vuepress/plugin-markdown-math'
import { markdownHintPlugin } from '@vuepress/plugin-markdown-hint'

export default defineUserConfig({
  base: '/qianpengzhan/',
  lang: 'zh-CN',
  title: '知识海洋',
  description: '知识海洋',
  bundler: viteBundler(),
  theme: defaultTheme({
    docsRepo: 'https://github.com/pengzhanqian/qianpengzhan',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: '/logo.png',
    head: [
      // 设置 favor.ico，.vuepress/public 下
      [
        'link', { rel: 'icon', href: '/favicon.ico' }
      ]
    ],
    navbar: navbar,
    sidebarDepth: 0,
    sidebar: sidebar,
  }),
  // use plugins
  plugins: [
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
    readingTimePlugin({
      // 配置项
    }),
    mediumZoomPlugin({
      // 配置项
    }),
    noticePlugin({
      config: [
        {
          path: '/',
          title: 'Notice Title',
          content: 'Notice Content',
          actions: [
            {
              text: 'Primary Action',
              link: 'https://theme-hope.vuejs.press/',
              type: 'primary',
            },
            { text: 'Default Action' },
          ],
        }
      ],
    }),
    watermarkPlugin({
      // options
      watermarkText: '钱鹏展',
    }),
    photoSwipePlugin({
      // 选项
    }),
    copyrightPlugin({
      locales: {
        '/md/': {
          // Override link text
          link: 'Original posted at :link',
        },
      },
    }),
    catalogPlugin({
      // 你的选项
    }),
    sitemapPlugin({
      // 选项
      hostname: ''
    }),
    docsearchPlugin({
      appId: '34YFD9IUQ2',
      apiKey: '9a9058b8655746634e01071411c366b8',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    // 作为最后一个插件使用
    cachePlugin({
      // 配置项
      type: 'filesystem',
      enableInCi: true
    }),
  ],
})