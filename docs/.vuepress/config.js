import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { defineUserConfig } from 'vuepress'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'
import { catalogPlugin } from '@vuepress/plugin-catalog'
import { copyrightPlugin } from '@vuepress/plugin-copyright'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { photoSwipePlugin } from '@vuepress/plugin-photo-swipe'
import { watermarkPlugin } from '@vuepress/plugin-watermark'
import { noticePlugin } from '@vuepress/plugin-notice'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { readingTimePlugin } from '@vuepress/plugin-reading-time'
import { cachePlugin } from '@vuepress/plugin-cache'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { gitPlugin } from '@vuepress/plugin-git'

export default defineUserConfig({
  base: '/qianpengzhan/',
  lang: 'zh-CN',
  title: '钱鹏展的知识梳理',
  description: '钱鹏展的知识梳理',
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
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'JAVA',
        children:[
          {
            text: 'JAVA基础',
            link: '/md/java/basic/basic_001.md'
          }
        ]

      },
      {
        text: '更多',
        children:[
          {
            text: '阿里',
            link: '/md/more/ali/ali_001.md'
          },
          {
            text: '随笔',
            link: '/md/more/essay/essay_001_linux_command.md'
          },
          {
            text: '实操系列',
            link: '/md/more/real-operation/ro_001.md'
          }
        ]

      },

    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebarDepth: 0,
    sidebar: {
      '/md/java/':[
        {
          text: 'Java基础',
          collapsible: false,
          children: [
            {
              text: 'Java 基础知识',
              link: '/md/java/basic/basic_001.md',
              collapsible: false
            }
          ]
        }
      ],
      '/md/more/': [
        {
          text: '更多',
          collapsible: false,
          children: [
            {
              text: '阿里',
              children: [
                {
                  text: 'Ali CentOS 7 Minimal的镜像下载',
                  link: '/md/more/ali/ali_001.md',
                  collapsible: false,
                },
                {
                  text: 'Ali CentOS 7 Minimal 新手教程引导',
                  link: '/md/more/ali/ali_002.md',
                  collapsible: false
                }
              ]
            },
            {
              text: '随笔',
              children: [
                {
                  text: 'Linux命令',
                  link: '/md/more/essay/essay_001_linux_command.md',
                  collapsible: true
                },
                {
                  text: 'vuepress2.0随笔',
                  link: '/md/more/essay/essay_002_vuepress.md',
                  collapsible: false
                }
              ]
            },
            {
              text: '实操系列',
              children: [
                {
                  text: 'Window OS系统下Markdown转word的设置',
                  link: '/md/more/real-operation/ro_001.md',
                  collapsible: false
                },
                {
                  text: 'Windows系统下Vmware Workstation中安装及使用CentOS7系统超详细图文教程',
                  link: '/md/more/real-operation/ro_002.md',
                  collapsible: false
                },
                {
                  text: 'Windows11系统下彻底卸载Vmware Workstation虚拟机超详细图文教程',
                  link: '/md/more/real-operation/ro_003.md',
                  collapsible: false
                }
              ]
            }
          ]
        }
      ],    
    }
  }),
  // use plugins
  plugins: [
    gitPlugin({
      // 配置项
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
          path: '/qianpengzhan/',
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
        },
        {
          path: '/qianpengzhan/en/',
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
        },
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