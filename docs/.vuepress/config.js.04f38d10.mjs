// docs/.vuepress/config.js
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import { catalogPlugin } from "@vuepress/plugin-catalog";
import { photoSwipePlugin } from "@vuepress/plugin-photo-swipe";
import { watermarkPlugin } from "@vuepress/plugin-watermark";
import { mediumZoomPlugin } from "@vuepress/plugin-medium-zoom";
import { cachePlugin } from "@vuepress/plugin-cache";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { componentsPlugin } from "vuepress-plugin-components";
import { commentPlugin } from "@vuepress/plugin-comment";

// docs/.vuepress/configs/sidebar.js
var sidebar = {
  "/md/note/java/": [
    {
      text: "\u521D\u8BC6JAVA",
      collapsible: true,
      children: [
        {
          text: "\u521D\u8BC6JAVA - Java\u7B80\u53F2",
          link: "/md/note/java/first/first_001.md",
          collapsible: true
        },
        {
          text: "\u521D\u8BC6JAVA - Java\u4F53\u7CFB\u7ED3\u6784",
          link: "/md/note/java/first/first_002.md",
          collapsible: true
        },
        {
          text: "\u521D\u8BC6JAVA - Java\u7279\u6027\u548C\u4F18\u52BF",
          link: "/md/note/java/first/first_003.md",
          collapsible: true
        },
        {
          text: "\u521D\u8BC6JAVA - \u8DE8\u5E73\u53F0\u6027\u7684\u539F\u7406",
          link: "/md/note/java/first/first_004.md",
          collapsible: true
        },
        {
          text: "\u521D\u8BC6JAVA - JDK\u7684\u4E0B\u8F7D\u4EE5\u53CA\u73AF\u5883\u914D\u7F6E",
          link: "/md/note/java/first/first_005.md",
          collapsible: true
        },
        {
          text: "\u521D\u8BC6JAVA - Hello World",
          link: "/md/note/java/first/first_006.md",
          collapsible: true
        },
        {
          text: "\u521D\u8BC6JAVA - IDE\u5DE5\u5177 - Intellj idea",
          link: "/md/note/java/first/first_007.md",
          collapsible: true
        }
      ]
    },
    {
      text: "JAVA\u57FA\u7840\u77E5\u8BC6",
      collapsible: true,
      children: [
        {
          text: "JAVA\u57FA\u7840\u77E5\u8BC6 - \u6CE8\u91CA",
          link: "/md/note/java/basic/basic_001.md",
          collapsible: true
        },
        {
          text: "JAVA\u57FA\u7840\u77E5\u8BC6 - \u57FA\u7840\u6982\u5FF5",
          link: "/md/note/java/basic/basic_002.md",
          collapsible: true
        },
        {
          text: "JAVA\u57FA\u7840\u77E5\u8BC6 - \u57FA\u672C\u6570\u636E\u7C7B\u578B",
          link: "/md/note/java/basic/basic_003.md",
          collapsible: true
        },
        {
          text: "JAVA\u57FA\u7840\u77E5\u8BC6 - \u8FD0\u7B97\u7B26",
          link: "/md/note/java/basic/basic_004.md",
          collapsible: true
        },
        {
          text: "JAVA\u57FA\u7840\u77E5\u8BC6 - \u6D41\u7A0B\u63A7\u5236",
          link: "/md/note/java/basic/basic_005.md",
          collapsible: true
        }
      ]
    },
    {
      text: "\u6DF1\u5165\u7406\u89E3JVM",
      collapsible: true,
      children: [
        {
          text: "\u6DF1\u5165\u7406\u89E3JVM - ",
          link: "/md/note/java/jvm/jvm_001.md",
          collapsible: true
        }
      ]
    }
  ],
  "/md/note/go/": [
    {
      text: "GoLang \u57FA\u7840",
      link: "/md/note/go/basic/",
      collapsible: true,
      children: [
        {
          text: "\u7B2C\u4E00\u7AE0: \u8D70\u8FDBGoLang",
          link: "/md/note/go/basic/golang_001.md"
        }
      ]
    }
  ],
  "/md/note/reactive/": [
    {
      text: "\u54CD\u5E94\u5F0F\u7F16\u7A0B",
      link: "/md/note/reactive/",
      collapsible: true,
      children: [
        {
          text: "\u7B2C\u4E00\u7AE0: \u8D70\u8FDB\u54CD\u5E94\u5F0F\u7F16\u7A0B",
          link: "/md/note/reactive/reactive_001.md",
          collapsible: true
        },
        {
          text: "\u7B2C\u4E8C\u7AE0: \u524D\u7F6E\u57FA\u7840\u5B66\u4E60",
          link: "/md/note/reactive/reactive_002.md",
          collapsible: true
        },
        {
          text: "\u7B2C\u4E09\u7AE0: Reactive Streams \u89C4\u8303",
          link: "/md/note/reactive/reactive_003.md",
          collapsible: true
        },
        {
          text: "\u7B2C\u56DB\u7AE0: Reactor \u6846\u67B6",
          link: "/md/note/reactive/reactive_004.md",
          collapsible: true
        },
        {
          text: "\u7B2C\u4E94\u7AE0: Spring WebFlux",
          link: "/md/note/reactive/reactive_005.md",
          collapsible: true
        }
      ]
    }
  ],
  "/md/question/": [
    {
      text: "\u5E38\u89C1\u95EE\u9898",
      collapsible: true,
      children: [
        {
          text: "Intellj Idea \u95EE\u9898",
          collapsible: true,
          children: [
            {
              text: "\u3010Intellj Idea\u3011idea\u542F\u52A8\u65F6\u62A5\u9519java: Internal error in the mapping processor: java.lang.NullPointerException",
              link: "/md/question/idea/question_idea_001.md",
              collapsible: true
            }
          ]
        },
        {
          text: "Intellj Idea \u95EE\u9898",
          collapsible: true,
          children: [
            {
              text: "\u4EC0\u4E48\u662F\u5168\u53CC\u5DE5\u3001\u534A\u53CC\u5DE5?",
              link: "/md/question/net/question_net_001.md",
              collapsible: true
            }
          ]
        }
      ]
    }
  ],
  "/md/more/": [
    {
      text: "\u66F4\u591A",
      collapsible: true,
      children: [
        {
          text: "\u963F\u91CC",
          collapsible: true,
          children: [
            {
              text: "Ali CentOS 7 Minimal\u7684\u955C\u50CF\u4E0B\u8F7D",
              link: "/md/more/ali/ali_001.md",
              collapsible: true
            },
            {
              text: "Ali CentOS 7 Minimal \u65B0\u624B\u6559\u7A0B\u5F15\u5BFC",
              link: "/md/more/ali/ali_002.md",
              collapsible: true
            }
          ]
        },
        {
          text: "\u968F\u7B14",
          collapsible: true,
          children: [
            {
              text: "\u968F\u7B14 - Linux\u547D\u4EE4",
              link: "/md/more/essay/essay_001_linux_command.md",
              collapsible: true
            },
            {
              text: "\u968F\u7B14 - vuepress2.x",
              link: "/md/more/essay/essay_002_vuepress.md",
              collapsible: true
            },
            {
              text: "\u968F\u7B14 - \u5E38\u7528DOS\u547D\u4EE4",
              link: "/md/more/essay/essay_003_dos_command.md",
              collapsible: true
            },
            {
              text: "\u968F\u7B14 - windows\u4E0B\u5B89\u88C5NodePad++",
              link: "/md/more/essay/essay_004_nodepad.md",
              collapsible: true
            }
          ]
        },
        {
          text: "\u5B9E\u64CD\u7CFB\u5217",
          collapsible: true,
          children: [
            {
              text: "Window OS\u7CFB\u7EDF\u4E0BMarkdown\u8F6Cword\u7684\u8BBE\u7F6E",
              link: "/md/more/real-operation/ro_001.md",
              collapsible: true
            },
            {
              text: "Windows\u7CFB\u7EDF\u4E0BVmware Workstation\u4E2D\u5B89\u88C5\u53CA\u4F7F\u7528CentOS7\u7CFB\u7EDF\u8D85\u8BE6\u7EC6\u56FE\u6587\u6559\u7A0B",
              link: "/md/more/real-operation/ro_002.md",
              collapsible: true
            },
            {
              text: "Windows11\u7CFB\u7EDF\u4E0B\u5F7B\u5E95\u5378\u8F7DVmware Workstation\u865A\u62DF\u673A\u8D85\u8BE6\u7EC6\u56FE\u6587\u6559\u7A0B",
              link: "/md/more/real-operation/ro_003.md",
              collapsible: true
            }
          ]
        }
      ]
    }
  ]
};

// docs/.vuepress/configs/navbar.js
var navbar = [
  {
    text: "\u9996\u9875",
    link: "/"
  },
  {
    text: "\u5B66\u4E60\u7B14\u8BB0",
    children: [
      {
        text: "\u5B66\u4E60\u7B14\u8BB0 - JAVA",
        children: [
          {
            text: "\u521D\u8BC6JAVA",
            link: "/md/note/java/first/first_001.md"
          },
          {
            text: "JAVA\u57FA\u7840\u77E5\u8BC6",
            link: "/md/note/java/basic/basic_001.md"
          },
          {
            text: "\u6DF1\u5165\u7406\u89E3JVM",
            link: "/md/note/java/jvm/jvm_001.md"
          }
        ]
      },
      {
        text: "\u5B66\u4E60\u7B14\u8BB0 - GO",
        children: [
          {
            text: "GoLang \u57FA\u7840",
            link: "/md/note/go/basic/golang_001.md"
          }
        ]
      },
      {
        text: "\u5B66\u4E60\u7B14\u8BB0 - \u54CD\u5E94\u5F0F\u7F16\u7A0B",
        children: [
          {
            text: "\u7B2C\u4E00\u7AE0: \u8D70\u8FDB\u54CD\u5E94\u5F0F\u7F16\u7A0B",
            link: "/md/note/reactive/reactive_001.md"
          }
        ]
      }
    ]
  },
  {
    text: "\u5E38\u89C1\u95EE\u9898",
    link: "/md/question/",
    children: [
      {
        text: "intellj idea BUG",
        link: "/md/question/idea/question_idea_001.md"
      },
      {
        text: "\u7F51\u7EDC\u76F8\u5173\u77E5\u8BC6",
        link: "/md/question/net/question_net_001.md"
      }
    ]
  },
  {
    text: "\u66F4\u591A",
    children: [
      {
        text: "\u963F\u91CC",
        link: "/md/more/ali/ali_001.md"
      },
      {
        text: "\u968F\u7B14",
        link: "/md/more/essay/essay_001_linux_command.md"
      },
      {
        text: "\u5B9E\u64CD\u7CFB\u5217",
        link: "/md/more/real-operation/ro_001.md"
      }
    ]
  }
];

// docs/.vuepress/config.js
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { markdownHintPlugin } from "@vuepress/plugin-markdown-hint";
import { markdownChartPlugin } from "@vuepress/plugin-markdown-chart";
import { markdownTabPlugin } from "@vuepress/plugin-markdown-tab";
import { prismjsPlugin } from "@vuepress/plugin-prismjs";
var config_default = defineUserConfig({
  base: "/qianpengzhan/",
  dest: "docs/.vuepress/dist",
  lang: "zh-CN",
  title: "\u5B66\u4E60\u7B14\u8BB0",
  description: "\u8BB0\u5F55\u672C\u4EBA\u6280\u672F\u5B66\u4E60\u7684\u7B14\u8BB0\u548C\u603B\u7ED3",
  bundler: viteBundler(),
  theme: defaultTheme({
    docsRepo: "https://github.com/pengzhanqian/qianpengzhan",
    docsBranch: "main",
    docsDir: "docs",
    editLinkPattern: ":repo/edit/:branch/:path",
    logo: "/logo.gif",
    head: [
      // 设置 favor.ico，.vuepress/public 下
      [
        "link",
        { rel: "icon", href: "/favicon.ico" }
      ]
    ],
    navbar,
    sidebar
  }),
  // use plugins
  plugins: [
    commentPlugin({
      // provider: 'Waline', // Artalk | Giscus | Waline | Twikoo
      // 服务商配置
      provider: "Giscus",
      repo: "pengzhanqian/giscus",
      repoId: "R_kgDOPGh8SA",
      category: "Announcements",
      categoryId: "DIC_kwDOPGh8SM4Cscfx"
    }),
    prismjsPlugin({
      // 配置项
      theme: "vsc-dark-plus",
      //'material-light',//'ateliersulphurpool-light',
      languages: ["java", "xml", "sql", "css", "javascript", "vue", "html", "json"],
      lineNumbers: true,
      showLineNumbers: true,
      highlightLines: true
    }),
    markdownTabPlugin({
      // 启用代码选项卡
      codeTabs: true,
      // 启用选项卡
      tabs: true
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
      plantuml: true
    }),
    markdownHintPlugin({
      // 启用提示容器，默认启用
      hint: true,
      // 启用 GFM 警告
      alert: true
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
      watermarkText: "\u94B1\u9E4F\u5C55"
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
      type: "filesystem",
      enableInCi: true
    })
  ]
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLmpzIiwgImRvY3MvLnZ1ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhci5qcyIsICJkb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0JhaWR1U3luY2Rpc2svMi5xaWFucHotd29ya3NwYWNlcy8wLmRvY3VtZW50LXdvcmtzcGFjZS9xaWFucGVuZ3poYW4vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEJhaWR1U3luY2Rpc2tcXFxcMi5xaWFucHotd29ya3NwYWNlc1xcXFwwLmRvY3VtZW50LXdvcmtzcGFjZVxcXFxxaWFucGVuZ3poYW5cXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9CYWlkdVN5bmNkaXNrLzIucWlhbnB6LXdvcmtzcGFjZXMvMC5kb2N1bWVudC13b3Jrc3BhY2UvcWlhbnBlbmd6aGFuL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy5qc1wiO2ltcG9ydCB7IHZpdGVCdW5kbGVyIH0gZnJvbSAnQHZ1ZXByZXNzL2J1bmRsZXItdml0ZSdcclxuaW1wb3J0IHsgZGVmYXVsdFRoZW1lIH0gZnJvbSAnQHZ1ZXByZXNzL3RoZW1lLWRlZmF1bHQnXHJcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tICd2dWVwcmVzcydcclxuaW1wb3J0IHsgc2l0ZW1hcFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tc2l0ZW1hcCdcclxuaW1wb3J0IHsgY2F0YWxvZ1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tY2F0YWxvZydcclxuaW1wb3J0IHsgcGhvdG9Td2lwZVBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tcGhvdG8tc3dpcGUnXHJcbmltcG9ydCB7IHdhdGVybWFya1BsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4td2F0ZXJtYXJrJ1xyXG5pbXBvcnQgeyBtZWRpdW1ab29tUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1tZWRpdW0tem9vbSdcclxuaW1wb3J0IHsgY2FjaGVQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLWNhY2hlJ1xyXG5pbXBvcnQgeyByZWdpc3RlckNvbXBvbmVudHNQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXJlZ2lzdGVyLWNvbXBvbmVudHMnXHJcbmltcG9ydCB7IGNvbXBvbmVudHNQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHsgY29tbWVudFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tY29tbWVudCdcclxuaW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJy4vY29uZmlncy9zaWRlYmFyLmpzJ1xyXG5pbXBvcnQgeyBuYXZiYXIgfSBmcm9tICcuL2NvbmZpZ3MvbmF2YmFyLmpzJ1xyXG5pbXBvcnQgeyBtYXJrZG93bk1hdGhQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLW1hcmtkb3duLW1hdGgnXHJcbmltcG9ydCB7IG1hcmtkb3duSGludFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tbWFya2Rvd24taGludCdcclxuaW1wb3J0IHsgbWFya2Rvd25DaGFydFBsdWdpbiB9IGZyb20gJ0B2dWVwcmVzcy9wbHVnaW4tbWFya2Rvd24tY2hhcnQnXHJcbmltcG9ydCB7IG1hcmtkb3duVGFiUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1tYXJrZG93bi10YWInXHJcbmltcG9ydCB7IHByaXNtanNQbHVnaW4gfSBmcm9tICdAdnVlcHJlc3MvcGx1Z2luLXByaXNtanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVVc2VyQ29uZmlnKHtcclxuICBiYXNlOiAnL3FpYW5wZW5nemhhbi8nLFxyXG4gIGRlc3Q6ICdkb2NzLy52dWVwcmVzcy9kaXN0JyxcclxuICBsYW5nOiAnemgtQ04nLFxyXG4gIHRpdGxlOiAnXHU1QjY2XHU0RTYwXHU3QjE0XHU4QkIwJyxcclxuICBkZXNjcmlwdGlvbjogJ1x1OEJCMFx1NUY1NVx1NjcyQ1x1NEVCQVx1NjI4MFx1NjcyRlx1NUI2Nlx1NEU2MFx1NzY4NFx1N0IxNFx1OEJCMFx1NTQ4Q1x1NjAzQlx1N0VEMycsXHJcbiAgYnVuZGxlcjogdml0ZUJ1bmRsZXIoKSxcclxuICB0aGVtZTogZGVmYXVsdFRoZW1lKHtcclxuICAgIGRvY3NSZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3Blbmd6aGFucWlhbi9xaWFucGVuZ3poYW4nLFxyXG4gICAgZG9jc0JyYW5jaDogJ21haW4nLFxyXG4gICAgZG9jc0RpcjogJ2RvY3MnLFxyXG4gICAgZWRpdExpbmtQYXR0ZXJuOiAnOnJlcG8vZWRpdC86YnJhbmNoLzpwYXRoJyxcclxuICAgIGxvZ286ICcvbG9nby5naWYnLFxyXG4gICAgaGVhZDogW1xyXG4gICAgICAvLyBcdThCQkVcdTdGNkUgZmF2b3IuaWNvXHVGRjBDLnZ1ZXByZXNzL3B1YmxpYyBcdTRFMEJcclxuICAgICAgW1xyXG4gICAgICAgICdsaW5rJywgeyByZWw6ICdpY29uJywgaHJlZjogJy9mYXZpY29uLmljbycgfVxyXG4gICAgICBdLFxyXG4gICAgXSxcclxuICAgIG5hdmJhcjogbmF2YmFyLFxyXG4gICAgc2lkZWJhcjogc2lkZWJhclxyXG4gIH0pLFxyXG4gICAvLyB1c2UgcGx1Z2luc1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIGNvbW1lbnRQbHVnaW4oe1xyXG4gICAgICAvLyBwcm92aWRlcjogJ1dhbGluZScsIC8vIEFydGFsayB8IEdpc2N1cyB8IFdhbGluZSB8IFR3aWtvb1xyXG4gICAgICAvLyBcdTY3MERcdTUyQTFcdTU1NDZcdTkxNERcdTdGNkVcclxuICAgICAgcHJvdmlkZXI6IFwiR2lzY3VzXCIsXHJcbiAgICAgIHJlcG86IFwicGVuZ3poYW5xaWFuL2dpc2N1c1wiLFxyXG4gICAgICByZXBvSWQ6IFwiUl9rZ0RPUEdoOFNBXCIsXHJcbiAgICAgIGNhdGVnb3J5OiBcIkFubm91bmNlbWVudHNcIixcclxuICAgICAgY2F0ZWdvcnlJZDogXCJESUNfa3dET1BHaDhTTTRDc2NmeFwiLFxyXG4gICAgfSksXHJcbiAgICBwcmlzbWpzUGx1Z2luKHtcclxuICAgICAgLy8gXHU5MTREXHU3RjZFXHU5ODc5XHJcbiAgICAgIHRoZW1lOiAndnNjLWRhcmstcGx1cycsLy8nbWF0ZXJpYWwtbGlnaHQnLC8vJ2F0ZWxpZXJzdWxwaHVycG9vbC1saWdodCcsXHJcbiAgICAgIGxhbmd1YWdlczogWydqYXZhJywneG1sJywnc3FsJywnY3NzJywnamF2YXNjcmlwdCcsJ3Z1ZScsJ2h0bWwnLCdqc29uJ10sXHJcbiAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxyXG4gICAgICBzaG93TGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAgIGhpZ2hsaWdodExpbmVzOiB0cnVlXHJcbiAgICB9KSxcclxuICAgIG1hcmtkb3duVGFiUGx1Z2luKHtcclxuICAgICAgLy8gXHU1NDJGXHU3NTI4XHU0RUUzXHU3ODAxXHU5MDA5XHU5ODc5XHU1MzYxXHJcbiAgICAgIGNvZGVUYWJzOiB0cnVlLFxyXG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTkwMDlcdTk4NzlcdTUzNjFcclxuICAgICAgdGFiczogdHJ1ZSxcclxuICAgIH0pLFxyXG4gICAgbWFya2Rvd25DaGFydFBsdWdpbih7XHJcbiAgICAgIC8vIFx1NTQyRlx1NzUyOCBDaGFydC5qc1xyXG4gICAgICBjaGFydGpzOiB0cnVlLFxyXG4gICAgICAvLyBcdTU0MkZcdTc1MjggRUNoYXJ0c1xyXG4gICAgICBlY2hhcnRzOiB0cnVlLFxyXG4gICAgICAvLyBcdTU0MkZcdTc1MjggRmxvd2NoYXJ0LmpzXHJcbiAgICAgIGZsb3djaGFydDogdHJ1ZSxcclxuICAgICAgLy8gXHU1NDJGXHU3NTI4IE1hcmttYXBcclxuICAgICAgbWFya21hcDogdHJ1ZSxcclxuICAgICAgLy8gXHU1NDJGXHU3NTI4IE1lcm1haWRcclxuICAgICAgbWVybWFpZDogdHJ1ZSxcclxuICAgICAgLy8gXHU1NDJGXHU3NTI4IFBsYW50VU1MXHJcbiAgICAgIHBsYW50dW1sOiB0cnVlLFxyXG4gICAgfSksXHJcbiAgICBtYXJrZG93bkhpbnRQbHVnaW4oe1xyXG4gICAgICAvLyBcdTU0MkZcdTc1MjhcdTYzRDBcdTc5M0FcdTVCQjlcdTU2NjhcdUZGMENcdTlFRDhcdThCQTRcdTU0MkZcdTc1MjhcclxuICAgICAgaGludDogdHJ1ZSxcclxuICAgICAgLy8gXHU1NDJGXHU3NTI4IEdGTSBcdThCNjZcdTU0NEFcclxuICAgICAgYWxlcnQ6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIG1hcmtkb3duTWF0aFBsdWdpbih7XHJcbiAgICAgIC8vIFx1OTAwOVx1OTg3OVxyXG4gICAgfSksXHJcbiAgICBjb21tZW50UGx1Z2luKHtcclxuICAgICAgLy8gXHU5MDA5XHU5ODc5XHJcbiAgICB9KSxcclxuICAgIGNvbXBvbmVudHNQbHVnaW4oe1xyXG4gICAgICAvLyBcdTYzRDJcdTRFRjZcdTkwMDlcdTk4NzlcclxuICAgIH0pLFxyXG4gICAgLy8gXHU2ODM5XHU2MzZFXHU3RUM0XHU0RUY2XHU2NTg3XHU0RUY2XHU2MjE2XHU3NkVFXHU1RjU1XHU4MUVBXHU1MkE4XHU2Q0U4XHU1MThDIFZ1ZSBcdTdFQzRcdTRFRjZcdTMwMDJcclxuICAgIHJlZ2lzdGVyQ29tcG9uZW50c1BsdWdpbih7XHJcbiAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1OTg3OVxyXG4gICAgfSksXHJcbiAgICBtZWRpdW1ab29tUGx1Z2luKHtcclxuICAgICAgLy8gXHU5MTREXHU3RjZFXHU5ODc5XHJcbiAgICB9KSxcclxuICAgIHdhdGVybWFya1BsdWdpbih7XHJcbiAgICAgIC8vIG9wdGlvbnNcclxuICAgICAgd2F0ZXJtYXJrVGV4dDogJ1x1OTRCMVx1OUU0Rlx1NUM1NScsXHJcbiAgICB9KSxcclxuICAgIHBob3RvU3dpcGVQbHVnaW4oe1xyXG4gICAgICAvLyBcdTkwMDlcdTk4NzlcclxuICAgIH0pLFxyXG4gICAgY2F0YWxvZ1BsdWdpbih7XHJcbiAgICAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxyXG4gICAgfSksXHJcbiAgICBzaXRlbWFwUGx1Z2luKHtcclxuICAgICAgLy8gXHU5MDA5XHU5ODc5XHJcbiAgICB9KSxcclxuICAgIC8vIFx1NEY1Q1x1NEUzQVx1NjcwMFx1NTQwRVx1NEUwMFx1NEUyQVx1NjNEMlx1NEVGNlx1NEY3Rlx1NzUyOFxyXG4gICAgY2FjaGVQbHVnaW4oe1xyXG4gICAgICAvLyBcdTkxNERcdTdGNkVcdTk4NzlcclxuICAgICAgdHlwZTogJ2ZpbGVzeXN0ZW0nLFxyXG4gICAgICBlbmFibGVJbkNpOiB0cnVlXHJcbiAgICB9KSxcclxuICBdXHJcbn0pIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOi9CYWlkdVN5bmNkaXNrLzIucWlhbnB6LXdvcmtzcGFjZXMvMC5kb2N1bWVudC13b3Jrc3BhY2UvcWlhbnBlbmd6aGFuL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXEJhaWR1U3luY2Rpc2tcXFxcMi5xaWFucHotd29ya3NwYWNlc1xcXFwwLmRvY3VtZW50LXdvcmtzcGFjZVxcXFxxaWFucGVuZ3poYW5cXFxcZG9jc1xcXFwudnVlcHJlc3NcXFxcY29uZmlnc1xcXFxzaWRlYmFyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9CYWlkdVN5bmNkaXNrLzIucWlhbnB6LXdvcmtzcGFjZXMvMC5kb2N1bWVudC13b3Jrc3BhY2UvcWlhbnBlbmd6aGFuL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZ3Mvc2lkZWJhci5qc1wiO2V4cG9ydCBjb25zdCBzaWRlYmFyID1cclxue1xyXG4gICAgJy9tZC9ub3RlL2phdmEvJzpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU1MjFEXHU4QkM2SkFWQScsXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTUyMURcdThCQzZKQVZBIC0gSmF2YVx1N0I4MFx1NTNGMicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9ub3RlL2phdmEvZmlyc3QvZmlyc3RfMDAxLm1kJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU1MjFEXHU4QkM2SkFWQSAtIEphdmFcdTRGNTNcdTdDRkJcdTdFRDNcdTY3ODQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9qYXZhL2ZpcnN0L2ZpcnN0XzAwMi5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NTIxRFx1OEJDNkpBVkEgLSBKYXZhXHU3Mjc5XHU2MDI3XHU1NDhDXHU0RjE4XHU1MkJGJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9maXJzdC9maXJzdF8wMDMubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTUyMURcdThCQzZKQVZBIC0gXHU4REU4XHU1RTczXHU1M0YwXHU2MDI3XHU3Njg0XHU1MzlGXHU3NDA2JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9maXJzdC9maXJzdF8wMDQubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTUyMURcdThCQzZKQVZBIC0gSkRLXHU3Njg0XHU0RTBCXHU4RjdEXHU0RUU1XHU1M0NBXHU3M0FGXHU1ODgzXHU5MTREXHU3RjZFJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9maXJzdC9maXJzdF8wMDUubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTUyMURcdThCQzZKQVZBIC0gSGVsbG8gV29ybGQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9qYXZhL2ZpcnN0L2ZpcnN0XzAwNi5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NTIxRFx1OEJDNkpBVkEgLSBJREVcdTVERTVcdTUxNzcgLSBJbnRlbGxqIGlkZWEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9qYXZhL2ZpcnN0L2ZpcnN0XzAwNy5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnSkFWQVx1NTdGQVx1Nzg0MFx1NzdFNVx1OEJDNicsXHJcbiAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKQVZBXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2IC0gXHU2Q0U4XHU5MUNBJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9iYXNpYy9iYXNpY18wMDEubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKQVZBXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2IC0gXHU1N0ZBXHU3ODQwXHU2OTgyXHU1RkY1JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9iYXNpYy9iYXNpY18wMDIubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKQVZBXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2IC0gXHU1N0ZBXHU2NzJDXHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9iYXNpYy9iYXNpY18wMDMubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKQVZBXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2IC0gXHU4RkQwXHU3Qjk3XHU3QjI2JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9iYXNpYy9iYXNpY18wMDQubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdKQVZBXHU1N0ZBXHU3ODQwXHU3N0U1XHU4QkM2IC0gXHU2RDQxXHU3QTBCXHU2M0E3XHU1MjM2JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9iYXNpYy9iYXNpY18wMDUubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTZERjFcdTUxNjVcdTc0MDZcdTg5RTNKVk0nLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU2REYxXHU1MTY1XHU3NDA2XHU4OUUzSlZNIC0gJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9qdm0vanZtXzAwMS5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnL21kL25vdGUvZ28vJzpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnR29MYW5nIFx1NTdGQVx1Nzg0MCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9nby9iYXNpYy8nLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU3QjJDXHU0RTAwXHU3QUUwOiBcdThENzBcdThGREJHb0xhbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9nby9iYXNpYy9nb2xhbmdfMDAxLm1kJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgICcvbWQvbm90ZS9yZWFjdGl2ZS8nOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTU0Q0RcdTVFOTRcdTVGMEZcdTdGMTZcdTdBMEInLFxyXG4gICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvcmVhY3RpdmUvJyxcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1N0IyQ1x1NEUwMFx1N0FFMDogXHU4RDcwXHU4RkRCXHU1NENEXHU1RTk0XHU1RjBGXHU3RjE2XHU3QTBCJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvcmVhY3RpdmUvcmVhY3RpdmVfMDAxLm1kJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU3QjJDXHU0RThDXHU3QUUwOiBcdTUyNERcdTdGNkVcdTU3RkFcdTc4NDBcdTVCNjZcdTRFNjAnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9yZWFjdGl2ZS9yZWFjdGl2ZV8wMDIubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTdCMkNcdTRFMDlcdTdBRTA6IFJlYWN0aXZlIFN0cmVhbXMgXHU4OUM0XHU4MzAzJyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvcmVhY3RpdmUvcmVhY3RpdmVfMDAzLm1kJyxcclxuICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU3QjJDXHU1NkRCXHU3QUUwOiBSZWFjdG9yIFx1Njg0Nlx1NjdCNicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9ub3RlL3JlYWN0aXZlL3JlYWN0aXZlXzAwNC5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1N0IyQ1x1NEU5NFx1N0FFMDogU3ByaW5nIFdlYkZsdXgnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9yZWFjdGl2ZS9yZWFjdGl2ZV8wMDUubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgJy9tZC9xdWVzdGlvbi8nOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OTgnLFxyXG4gICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSW50ZWxsaiBJZGVhIFx1OTVFRVx1OTg5OCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHUzMDEwSW50ZWxsaiBJZGVhXHUzMDExaWRlYVx1NTQyRlx1NTJBOFx1NjVGNlx1NjJBNVx1OTUxOWphdmE6IEludGVybmFsIGVycm9yIGluIHRoZSBtYXBwaW5nIHByb2Nlc3NvcjogamF2YS5sYW5nLk51bGxQb2ludGVyRXhjZXB0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvcXVlc3Rpb24vaWRlYS9xdWVzdGlvbl9pZGVhXzAwMS5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSW50ZWxsaiBJZGVhIFx1OTVFRVx1OTg5OCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1NEVDMFx1NEU0OFx1NjYyRlx1NTE2OFx1NTNDQ1x1NURFNVx1MzAwMVx1NTM0QVx1NTNDQ1x1NURFNT8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9xdWVzdGlvbi9uZXQvcXVlc3Rpb25fbmV0XzAwMS5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgICcvbWQvbW9yZS8nOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU2NkY0XHU1OTFBJyxcclxuICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OTYzRlx1OTFDQycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FsaSBDZW50T1MgNyBNaW5pbWFsXHU3Njg0XHU5NTVDXHU1MENGXHU0RTBCXHU4RjdEJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbW9yZS9hbGkvYWxpXzAwMS5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0FsaSBDZW50T1MgNyBNaW5pbWFsIFx1NjVCMFx1NjI0Qlx1NjU1OVx1N0EwQlx1NUYxNVx1NUJGQycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL21kL21vcmUvYWxpL2FsaV8wMDIubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OTY4Rlx1N0IxNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OTY4Rlx1N0IxNCAtIExpbnV4XHU1NDdEXHU0RUU0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbW9yZS9lc3NheS9lc3NheV8wMDFfbGludXhfY29tbWFuZC5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU5NjhGXHU3QjE0IC0gdnVlcHJlc3MyLngnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9tb3JlL2Vzc2F5L2Vzc2F5XzAwMl92dWVwcmVzcy5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnXHU5NjhGXHU3QjE0IC0gXHU1RTM4XHU3NTI4RE9TXHU1NDdEXHU0RUU0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbW9yZS9lc3NheS9lc3NheV8wMDNfZG9zX2NvbW1hbmQubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1x1OTY4Rlx1N0IxNCAtIHdpbmRvd3NcdTRFMEJcdTVCODlcdTg4QzVOb2RlUGFkKysnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9tb3JlL2Vzc2F5L2Vzc2F5XzAwNF9ub2RlcGFkLm1kJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdcdTVCOUVcdTY0Q0RcdTdDRkJcdTUyMTcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdXaW5kb3cgT1NcdTdDRkJcdTdFREZcdTRFMEJNYXJrZG93blx1OEY2Q3dvcmRcdTc2ODRcdThCQkVcdTdGNkUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9tb3JlL3JlYWwtb3BlcmF0aW9uL3JvXzAwMS5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnV2luZG93c1x1N0NGQlx1N0VERlx1NEUwQlZtd2FyZSBXb3Jrc3RhdGlvblx1NEUyRFx1NUI4OVx1ODhDNVx1NTNDQVx1NEY3Rlx1NzUyOENlbnRPUzdcdTdDRkJcdTdFREZcdThEODVcdThCRTZcdTdFQzZcdTU2RkVcdTY1ODdcdTY1NTlcdTdBMEInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluazogJy9tZC9tb3JlL3JlYWwtb3BlcmF0aW9uL3JvXzAwMi5tZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnV2luZG93czExXHU3Q0ZCXHU3RURGXHU0RTBCXHU1RjdCXHU1RTk1XHU1Mzc4XHU4RjdEVm13YXJlIFdvcmtzdGF0aW9uXHU4NjVBXHU2MkRGXHU2NzNBXHU4RDg1XHU4QkU2XHU3RUM2XHU1NkZFXHU2NTg3XHU2NTU5XHU3QTBCJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvbWQvbW9yZS9yZWFsLW9wZXJhdGlvbi9yb18wMDMubWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgXVxyXG59XHJcblxyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6L0JhaWR1U3luY2Rpc2svMi5xaWFucHotd29ya3NwYWNlcy8wLmRvY3VtZW50LXdvcmtzcGFjZS9xaWFucGVuZ3poYW4vZG9jcy8udnVlcHJlc3MvY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQmFpZHVTeW5jZGlza1xcXFwyLnFpYW5wei13b3Jrc3BhY2VzXFxcXDAuZG9jdW1lbnQtd29ya3NwYWNlXFxcXHFpYW5wZW5nemhhblxcXFxkb2NzXFxcXC52dWVwcmVzc1xcXFxjb25maWdzXFxcXG5hdmJhci5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRTovQmFpZHVTeW5jZGlzay8yLnFpYW5wei13b3Jrc3BhY2VzLzAuZG9jdW1lbnQtd29ya3NwYWNlL3FpYW5wZW5nemhhbi9kb2NzLy52dWVwcmVzcy9jb25maWdzL25hdmJhci5qc1wiO2V4cG9ydCBjb25zdCBuYXZiYXIgPVxyXG5bXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTk5OTZcdTk4NzUnLFxyXG4gICAgICBsaW5rOiAnLydcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAnLFxyXG4gICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1NUI2Nlx1NEU2MFx1N0IxNFx1OEJCMCAtIEpBVkEnLFxyXG4gICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRleHQ6ICdcdTUyMURcdThCQzZKQVZBJyxcclxuICAgICAgICAgICAgICBsaW5rOiAnL21kL25vdGUvamF2YS9maXJzdC9maXJzdF8wMDEubWQnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnSkFWQVx1NTdGQVx1Nzg0MFx1NzdFNVx1OEJDNicsXHJcbiAgICAgICAgICAgICAgbGluazogJy9tZC9ub3RlL2phdmEvYmFzaWMvYmFzaWNfMDAxLm1kJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ1x1NkRGMVx1NTE2NVx1NzQwNlx1ODlFM0pWTScsXHJcbiAgICAgICAgICAgICAgbGluazogJy9tZC9ub3RlL2phdmEvanZtL2p2bV8wMDEubWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjAgLSBHTycsXHJcbiAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dDogJ0dvTGFuZyBcdTU3RkFcdTc4NDAnLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9nby9iYXNpYy9nb2xhbmdfMDAxLm1kJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU1QjY2XHU0RTYwXHU3QjE0XHU4QkIwIC0gXHU1NENEXHU1RTk0XHU1RjBGXHU3RjE2XHU3QTBCJyxcclxuICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0ZXh0OiAnXHU3QjJDXHU0RTAwXHU3QUUwOiBcdThENzBcdThGREJcdTU0Q0RcdTVFOTRcdTVGMEZcdTdGMTZcdTdBMEInLFxyXG4gICAgICAgICAgICAgIGxpbms6ICcvbWQvbm90ZS9yZWFjdGl2ZS9yZWFjdGl2ZV8wMDEubWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OTgnLFxyXG4gICAgICBsaW5rOiAnL21kL3F1ZXN0aW9uLycsXHJcbiAgICAgIGNoaWxkcmVuOltcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdpbnRlbGxqIGlkZWEgQlVHJyxcclxuICAgICAgICAgICAgbGluazogJy9tZC9xdWVzdGlvbi9pZGVhL3F1ZXN0aW9uX2lkZWFfMDAxLm1kJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnXHU3RjUxXHU3RURDXHU3NkY4XHU1MTczXHU3N0U1XHU4QkM2JyxcclxuICAgICAgICAgICAgbGluazogJy9tZC9xdWVzdGlvbi9uZXQvcXVlc3Rpb25fbmV0XzAwMS5tZCdcclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTY2RjRcdTU5MUEnLFxyXG4gICAgICBjaGlsZHJlbjpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ1x1OTYzRlx1OTFDQycsXHJcbiAgICAgICAgICBsaW5rOiAnL21kL21vcmUvYWxpL2FsaV8wMDEubWQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU5NjhGXHU3QjE0JyxcclxuICAgICAgICAgIGxpbms6ICcvbWQvbW9yZS9lc3NheS9lc3NheV8wMDFfbGludXhfY29tbWFuZC5tZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTVCOUVcdTY0Q0RcdTdDRkJcdTUyMTcnLFxyXG4gICAgICAgICAgbGluazogJy9tZC9tb3JlL3JlYWwtb3BlcmF0aW9uL3JvXzAwMS5tZCdcclxuICAgICAgICB9XHJcbiAgICAg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VUFDTixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsUUFDakI7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsUUFDakI7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsUUFDakI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGlCQUFnQjtBQUFBLElBQ1o7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNOO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFTO0FBQUEsWUFDTDtBQUFBLGNBQ0ksTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLFlBQ2pCO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDTjtBQUFBLGNBQ0ksTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sYUFBYTtBQUFBLFlBQ2pCO0FBQUEsVUFDSjtBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLGFBQWE7QUFBQSxJQUNUO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDTjtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ047QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ047QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ047QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFlBQ0E7QUFBQSxjQUNJLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLGFBQWE7QUFBQSxZQUNqQjtBQUFBLFVBQ0o7QUFBQSxRQUNKO0FBQUEsTUFDSjtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0o7OztBQzNPK2MsSUFBTSxTQUNyZDtBQUFBLEVBQ0k7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sVUFBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRSxNQUFNO0FBQUEsWUFDTixNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsTUFBTTtBQUFBLFlBQ04sTUFBTTtBQUFB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
