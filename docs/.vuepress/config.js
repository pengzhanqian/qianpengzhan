import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '钱鹏展随笔',
  description: '钱鹏展随笔',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: 'Java',
        link: '/md/java/'
      }
    ],
  }),
})