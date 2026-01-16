<template>
  <div class="quiz-menu-wrapper">
    <button 
      class="quiz-menu-trigger" 
      :class="{ active: isOpen }"
      @click="toggleMenu"
    >
      测验
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- 遮罩层 -->
    <div 
      class="quiz-menu-overlay" 
      :class="{ visible: isOpen }"
      @click="closeMenu"
    ></div>

    <!-- Mega Menu 面板 -->
    <div class="quiz-menu-panel" :class="{ open: isOpen }">
      <div class="quiz-menu-content">
        <!-- 左侧分类 -->
        <div class="quiz-menu-categories">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="quiz-menu-category"
            :class="{ active: activeCategory === category.id }"
            @click="activeCategory = category.id"
          >
            {{ category.name }}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>

        <!-- 右侧内容 -->
        <div class="quiz-menu-items">
          <div 
            v-for="group in currentItems" 
            :key="group.title"
            class="quiz-menu-item-group"
          >
            <h3>{{ group.title }}</h3>
            <ul class="quiz-menu-item-list">
              <li v-for="item in group.items" :key="item.id">
                <a href="javascript:void(0)" @click="startQuiz(item.id)">
                  {{ item.name }}
                  <span class="quiz-count">{{ item.count }}题</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 全屏答题模式 -->
  <Teleport to="body">
    <div v-if="showQuiz" class="quiz-fullscreen">
      <QuizPage 
        :category-id="selectedQuizId" 
        @close="showQuiz = false"
      />
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { quizCategories } from '../data/quizData.js'
import QuizPage from './QuizPage.vue'

const isOpen = ref(false)
const activeCategory = ref('frontend')
const showQuiz = ref(false)
const selectedQuizId = ref('')

const categories = [
  { id: 'frontend', name: '前端' },
  { id: 'backend', name: '后端' },
  { id: 'database', name: '数据库' },
  { id: 'devops', name: '运维' },
  { id: 'cs', name: '计算机基础' }
]

const menuData = {
  frontend: [
    {
      title: '基础',
      items: [
        { id: 'html', name: 'HTML', count: getQuestionCount('html') },
        { id: 'css', name: 'CSS', count: getQuestionCount('css') },
        { id: 'javascript', name: 'JavaScript', count: getQuestionCount('javascript') },
        { id: 'typescript', name: 'TypeScript', count: getQuestionCount('typescript') }
      ]
    },
    {
      title: '框架',
      items: [
        { id: 'vue', name: 'Vue', count: getQuestionCount('vue') },
        { id: 'react', name: 'React', count: getQuestionCount('react') }
      ]
    },
    {
      title: '工程化',
      items: [
        { id: 'webpack', name: 'Webpack', count: getQuestionCount('webpack') }
      ]
    }
  ],
  backend: [
    {
      title: '语言',
      items: [
        { id: 'nodejs', name: 'Node.js', count: getQuestionCount('nodejs') },
        { id: 'python', name: 'Python', count: getQuestionCount('python') },
        { id: 'java', name: 'Java', count: getQuestionCount('java') },
        { id: 'go', name: 'Go', count: getQuestionCount('go') }
      ]
    },
    {
      title: '架构',
      items: [
        { id: 'design-pattern', name: '设计模式', count: getQuestionCount('design-pattern') }
      ]
    }
  ],
  database: [
    {
      title: 'SQL',
      items: [
        { id: 'sql', name: 'SQL', count: getQuestionCount('sql') },
        { id: 'mysql', name: 'MySQL', count: getQuestionCount('mysql') }
      ]
    },
    {
      title: 'NoSQL',
      items: [
        { id: 'mongodb', name: 'MongoDB', count: getQuestionCount('mongodb') },
        { id: 'redis', name: 'Redis', count: getQuestionCount('redis') }
      ]
    }
  ],
  devops: [
    {
      title: '工具',
      items: [
        { id: 'git', name: 'Git', count: getQuestionCount('git') },
        { id: 'linux', name: 'Linux', count: getQuestionCount('linux') },
        { id: 'nginx', name: 'Nginx', count: getQuestionCount('nginx') }
      ]
    },
    {
      title: '容器化',
      items: [
        { id: 'docker', name: 'Docker', count: getQuestionCount('docker') },
        { id: 'kubernetes', name: 'Kubernetes', count: getQuestionCount('kubernetes') }
      ]
    }
  ],
  cs: [
    {
      title: '基础',
      items: [
        { id: 'network', name: '计算机网络', count: getQuestionCount('network') },
        { id: 'algorithm', name: '算法', count: getQuestionCount('algorithm') },
        { id: 'security', name: '安全', count: getQuestionCount('security') }
      ]
    }
  ]
}

function getQuestionCount(id: string): number {
  const category = quizCategories.find(c => c.id === id)
  return category?.questions?.length || 0
}

const currentItems = computed(() => {
  return menuData[activeCategory.value] || []
})

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const startQuiz = (quizId: string) => {
  selectedQuizId.value = quizId
  showQuiz.value = true
  closeMenu()
}

// ESC 键关闭菜单
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    if (showQuiz.value) {
      showQuiz.value = false
    } else if (isOpen.value) {
      closeMenu()
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.quiz-menu-wrapper {
  position: relative;
  display: inline-block;
}

.quiz-menu-trigger {
  background: none;
  border: none;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
  padding: 0 12px;
  height: var(--vp-nav-height);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.25s;
}

.quiz-menu-trigger:hover {
  color: var(--vp-c-brand-1);
}

.quiz-menu-trigger svg {
  width: 14px;
  height: 14px;
  transition: transform 0.25s;
}

.quiz-menu-trigger.active svg {
  transform: rotate(180deg);
}

.quiz-menu-overlay {
  position: fixed;
  top: var(--vp-nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 99;
  display: none;
}

.quiz-menu-overlay.visible {
  display: block;
}

.quiz-menu-panel {
  position: fixed;
  left: 0;
  right: 0;
  top: var(--vp-nav-height);
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 100;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.quiz-menu-panel.open {
  max-height: 400px;
}

.quiz-menu-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 48px;
}

.quiz-menu-categories {
  border-right: 1px solid var(--vp-c-divider);
  padding-right: 24px;
}

.quiz-menu-category {
  padding: 8px 16px;
  margin-bottom: 4px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quiz-menu-category:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.quiz-menu-category.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.quiz-menu-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
}

.quiz-menu-item-group h3 {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
}

.quiz-menu-item-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.quiz-menu-item-list li {
  margin-bottom: 8px;
}

.quiz-menu-item-list a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 0;
}

.quiz-menu-item-list a:hover {
  color: var(--vp-c-brand-1);
}

.quiz-count {
  font-size: 12px;
  color: var(--vp-c-text-3);
  background: var(--vp-c-bg-soft);
  padding: 2px 8px;
  border-radius: 10px;
}

/* 全屏答题 */
.quiz-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: var(--vp-c-bg);
}

/* 响应式 */
@media (max-width: 768px) {
  .quiz-menu-content {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .quiz-menu-categories {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
    padding-right: 0;
    padding-bottom: 16px;
    display: flex;
    gap: 8px;
    overflow-x: auto;
  }
  
  .quiz-menu-category {
    white-space: nowrap;
  }
}
</style>
