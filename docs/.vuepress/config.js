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
  
  lang: 'zh-CN',
  title: '随笔',
  description: '随笔',
  bundler: viteBundler(),
  theme: defaultTheme({
    docsRepo: 'https://github.com/pengzhanqian/qianpengzhan',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: '/logo.png',
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '阿里云相关',
        link: '/md/ali-cent-os/001.ali-cent-os-7-x86_64-Minimal-2207-02-download.md'
      },
      {
        text: '随笔',
        link: '/md/essay/001.markdown-convert-word-setting-in-windows11.md'
      },
      {
        text: 'Java',
        link: '/md/java/basic/java-basic-01.md'
      }
    ],
    // 侧边栏对象
    // 不同子路径下的页面会使用不同的侧边栏
    sidebarDepth: 0,
    sidebar: {
      '/md/ali-cent-os/': [
        {
          text: '阿里云相关',
          collapsible: false,
          children: [
            {
              text: 'Ali CentOS 7 Minimal的镜像下载',
              link: '/md/ali-cent-os/001.ali-cent-os-7-x86_64-Minimal-2207-02-download.md',
              collapsible: false,
            },
            {
              text: 'Ali CentOS 7 Minimal 新手教程引导',
              link: '/md/ali-cent-os/002.ali-cent-os-7-new-guide.md',
              collapsible: false
            }
          ]
        }
      ],
      '/md/essay/': [
        {
          text: '随笔',
          collapsible: false,
          children: [
            {
              text: '《实操系列 - Window OS系统下Markdown转word的设置》',
              link: '/md/essay/001.markdown-convert-word-setting-in-windows11.md',
              collapsible: false
            },
            {
              text: '《实操系列 - Windows系统下Vmware Workstation中安装及使用CentOS7系统超详细图文教程》',
              link: '/md/essay/002.install-vmware-workstation-in-windows11.md',
              collapsible: false
            },
            {
              text: '《实操系列 - Windows11系统下彻底卸载Vmware Workstation虚拟机超详细图文教程》',
              link: '/md/essay/003.uninstall-vmware-workstation-in-windows11.md',
              collapsible: false
            },
            {
              text: 'Linux命令',
              link: '/md/essay/004.linux-command.md',
              collapsible: true
            },
            {
              text: 'vuepress2.0随笔',
              link: '/md/essay/005.nodejs-npm-essay.md',
              collapsible: false
            }
          ]
        }
      ],
      '/md/java/':[
        {
          text: 'Java基础',
          collapsible: true,
          children: [
            {
              text: 'Java 基础 - Java语言背景',
              link: '/md/java/basic/java-basic-01.md',
              collapsible: false
            }
          ]
        }
      ]
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
        },
        {
          path: '/zh/',
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