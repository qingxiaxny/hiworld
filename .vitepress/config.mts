import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "HiWorld - 编程学习平台",
  description: "从零开始，轻松学习编程",
  themeConfig: {
    footer: {
      message: '本网站由 <a href="https://www.qingxia.ltd" target="_blank">清夏工作室</a> 制作与维护',
      copyright: 'Copyright © 2026 HiWorld.World'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { 
        component: 'MegaMenu'
      },
      { text: '关于', link: '/about' }
    ],

    sidebar: sidebar
  }
})
