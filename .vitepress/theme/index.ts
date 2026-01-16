import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import MegaMenu from './components/MegaMenu.vue'
import QuizMenu from './components/QuizMenu.vue'
import HomePage from './components/HomePage.vue'
import HomePageContent from './components/HomePageContent.vue'
import LearnedButton from './components/LearnedButton.vue'
import QuizPage from './components/QuizPage.vue'
import Logo from './components/Logo.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-title-before': () => h(Logo),
      'doc-after': () => h(LearnedButton)
    })
  },
  enhanceApp({ app }) {
    app.component('MegaMenu', MegaMenu)
    app.component('QuizMenu', QuizMenu)
    app.component('HomePage', HomePage)
    app.component('HomePageContent', HomePageContent)
    app.component('LearnedButton', LearnedButton)
    app.component('QuizPage', QuizPage)
  }
} satisfies Theme
