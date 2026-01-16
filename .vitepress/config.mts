import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HiWorld - 编程学习平台",
  description: "从零开始，轻松学习编程",
  themeConfig: {
    siteTitle: false,
    footer: {
      message: '本网站由 <a href="https://www.qingxia.ltd" target="_blank">清夏工作室</a> 制作与维护',
      copyright: 'Copyright © 2026 HiWorld.World'
    },
    // 启用本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { 
        component: 'MegaMenu'
      },
      { 
        component: 'QuizMenu'
      },
      { text: '关于', link: '/about' }
    ],

    sidebar: sidebar
  }
})
