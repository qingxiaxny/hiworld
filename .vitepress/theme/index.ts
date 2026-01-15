import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MegaMenu from './components/MegaMenu.vue'
import HomePage from './components/HomePage.vue'
import HomePageContent from './components/HomePageContent.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {})
  },
  enhanceApp({ app }) {
    app.component('MegaMenu', MegaMenu)
    app.component('HomePage', HomePage)
    app.component('HomePageContent', HomePageContent)
  }
} satisfies Theme
