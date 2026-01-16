<template>
  <!-- 全屏答题模式 -->
  <div v-if="quizMode" class="quiz-fullscreen">
    <div class="quiz-header">
      <button class="quiz-exit" @click="exitQuiz">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      </button>
      <div class="quiz-info">
        <span class="quiz-cat-name">{{ currentCat.name }}</span>
      </div>
      <div class="quiz-progress-num">{{ currentIndex + 1 }} / {{ questions.length }}</div>
    </div>
    
    <div class="quiz-progress-bar">
      <div class="quiz-progress-fill" :style="{ width: progressPercent + '%' }"></div>
    </div>

    <div class="quiz-body">
      <div v-if="!showResult" class="quiz-content">
        <!-- 题目区域 - 固定高度 -->
        <div class="quiz-question-area">
          <div class="quiz-question">{{ currentQuestion.q }}</div>
          <div class="quiz-options">
            <button
              v-for="(opt, idx) in currentQuestion.options"
              :key="opt"
              :class="['quiz-option', optionClass(opt)]"
              :disabled="answered"
              @click="selectAnswer(opt)"
            >
              <span class="option-key">{{ ['A', 'B', 'C', 'D'][idx] }}</span>
              <span class="option-text">{{ opt }}</span>
            </button>
          </div>
        </div>
        <!-- 解析区域 - 固定位置 -->
        <div class="quiz-explanation-area">
          <div v-if="answered && currentQuestion.explanation" class="quiz-explanation">
            <div class="explanation-title">解析</div>
            <div class="explanation-text">{{ currentQuestion.explanation }}</div>
          </div>
        </div>
      </div>

      <div v-else class="quiz-result">
        <div class="result-score">{{ score }}</div>
        <div class="result-label">得分</div>
        <div class="result-stats">
          正确 {{ correctCount }} · 错误 {{ questions.length - correctCount }} · 共 {{ questions.length }} 题
        </div>
        <div class="result-actions">
          <button class="btn-secondary" @click="exitQuiz">返回列表</button>
          <button class="btn-primary" @click="retryQuiz">再试一次</button>
        </div>
      </div>
    </div>

    <!-- 固定底部按钮 -->
    <div v-if="!showResult" class="quiz-footer">
      <button 
        class="btn-next" 
        :class="{ visible: answered }"
        @click="nextQuestion"
      >
        {{ isLastQuestion ? '查看结果' : '下一题' }}
      </button>
    </div>
  </div>

  <!-- 分类选择页面 -->
  <div v-else class="quiz-page">
    <div class="quiz-layout">
      <!-- 左侧分类 -->
      <div class="quiz-sidebar">
        <div class="sidebar-title">测验分类</div>
        <div class="category-list">
          <div
            v-for="cat in categoryGroups"
            :key="cat.id"
            class="category-group"
          >
            <div 
              class="category-item"
              :class="{ active: activeCategory === cat.id }"
              @click="activeCategory = cat.id"
            >
              {{ cat.name }}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧题目列表 -->
      <div class="quiz-main">
        <div class="quiz-groups">
          <div v-for="group in currentGroups" :key="group.title" class="quiz-group">
            <h3 class="group-title">{{ group.title }}</h3>
            <div class="quiz-list">
              <div
                v-for="item in group.items"
                :key="item.id"
                class="quiz-item"
                @click="startQuiz(item)"
              >
                <span class="item-name">{{ item.name }}</span>
                <span class="item-count">{{ item.questions.length }} 题</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { quizCategories } from '../data/quizData.js'

const props = defineProps({
  categoryId: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close'])

// 分类分组配置（和文档 MegaMenu 对齐）
const categoryGroups = [
  { id: 'frontend', name: '前端开发' },
  { id: 'backend', name: '后端开发' },
  { id: 'database', name: '数据库' },
  { id: 'devops', name: '运维部署' },
  { id: 'cs', name: '计算机基础' },
]

// 题目分组映射
const quizGroups = {
  frontend: [
    { title: '基础', items: ['html', 'css', 'javascript'] },
    { title: '进阶', items: ['typescript', 'vue', 'react', 'webpack'] },
  ],
  backend: [
    { title: '语言', items: ['nodejs', 'python', 'java', 'go'] },
    { title: '框架', items: ['design-pattern'] },
  ],
  database: [
    { title: 'SQL', items: ['sql', 'mysql'] },
    { title: 'NoSQL', items: ['mongodb', 'redis'] },
  ],
  devops: [
    { title: '工具', items: ['git', 'linux', 'nginx'] },
    { title: '容器', items: ['docker', 'kubernetes'] },
  ],
  cs: [
    { title: '基础', items: ['network', 'algorithm', 'security'] },
  ],
}

// 将 quizCategories 转为 map 方便查找
const quizMap = {}
quizCategories.forEach(cat => {
  quizMap[cat.id] = cat
})

const activeCategory = ref('frontend')
const quizMode = ref(false)
const currentCat = ref(null)
const currentIndex = ref(0)
const selectedAnswer = ref(null)
const answered = ref(false)
const correctCount = ref(0)
const showResult = ref(false)

const currentGroups = computed(() => {
  const groups = quizGroups[activeCategory.value] || []
  return groups.map(g => ({
    title: g.title,
    items: g.items.map(id => quizMap[id]).filter(Boolean)
  }))
})

// 随机抽取题目，每次最多10题
const shuffledQuestions = ref([])
const questions = computed(() => shuffledQuestions.value)
const currentQuestion = computed(() => questions.value[currentIndex.value])
const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1)
const progressPercent = computed(() => ((currentIndex.value + 1) / questions.value.length) * 100)
const score = computed(() => Math.round((correctCount.value / questions.value.length) * 100))

// 随机打乱数组
function shuffle(arr) {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function startQuiz(cat) {
  currentCat.value = cat
  // 随机打乱题目，最多取10题，保持选项原始顺序
  const allQuestions = shuffle(cat.questions || []).slice(0, 10)
  shuffledQuestions.value = allQuestions
  quizMode.value = true
  resetQuiz()
}

function startQuizById(id) {
  const cat = quizMap[id]
  if (cat) {
    startQuiz(cat)
  }
}

function exitQuiz() {
  // 如果是从菜单进入的，直接关闭
  if (props.categoryId) {
    emit('close')
  } else {
    quizMode.value = false
    currentCat.value = null
  }
}

function resetQuiz() {
  currentIndex.value = 0
  selectedAnswer.value = null
  answered.value = false
  correctCount.value = 0
  showResult.value = false
}

function selectAnswer(opt) {
  if (answered.value) return
  selectedAnswer.value = opt
  answered.value = true
  // 按文本匹配答案
  if (opt === currentQuestion.value.answer) correctCount.value++
}

function optionClass(opt) {
  if (!answered.value) return ''
  if (opt === currentQuestion.value.answer) return 'correct'
  if (opt === selectedAnswer.value && opt !== currentQuestion.value.answer) return 'wrong'
  return 'dim'
}

function nextQuestion() {
  if (isLastQuestion.value) {
    showResult.value = true
  } else {
    currentIndex.value++
    selectedAnswer.value = null
    answered.value = false
  }
}

function retryQuiz() { 
  // 重新随机抽题
  if (currentCat.value) {
    const allQuestions = shuffle(currentCat.value.questions || []).slice(0, 10)
    shuffledQuestions.value = allQuestions
  }
  resetQuiz() 
}

// 如果传入了 categoryId，直接开始答题
onMounted(() => {
  if (props.categoryId) {
    startQuizById(props.categoryId)
  }
})

// 监听 categoryId 变化
watch(() => props.categoryId, (newId) => {
  if (newId) {
    startQuizById(newId)
  }
})
</script>

<style scoped>
/* 分类选择页面 */
.quiz-page {
  min-height: calc(100vh - var(--vp-nav-height));
}

.quiz-layout {
  display: grid;
  grid-template-columns: 220px 1fr;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 24px;
  gap: 48px;
}

.quiz-sidebar {
  border-right: 1px solid var(--vp-c-divider);
  padding-right: 24px;
}

.sidebar-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  margin-bottom: 16px;
  padding-left: 12px;
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.category-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
}

.category-item:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.category-item.active {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.category-item svg {
  opacity: 0.5;
}

.category-item.active svg {
  opacity: 1;
}

/* 右侧题目列表 */
.quiz-main {
  padding-top: 8px;
}

.quiz-groups {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}

.group-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 12px;
}

.quiz-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.quiz-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--vp-c-divider-light);
  cursor: pointer;
  transition: all 0.2s;
}

.quiz-item:hover {
  color: var(--vp-c-brand-1);
}

.quiz-item:hover .item-name {
  color: var(--vp-c-brand-1);
}

.item-name {
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: color 0.2s;
}

.item-count {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

/* 全屏答题模式 */
.quiz-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-c-bg);
  z-index: 1000;
  display: flex;
  flex-direction: column;
}

.quiz-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.quiz-exit {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
  z-index: 10;
}

.quiz-exit:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}

.quiz-info {
  flex: 1;
  text-align: center;
}

.quiz-cat-name {
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.quiz-progress-num {
  font-size: 14px;
  color: var(--vp-c-brand-1);
  font-weight: 500;
  min-width: 60px;
  text-align: right;
}

.quiz-progress-bar {
  height: 3px;
  background: var(--vp-c-bg-soft);
}

.quiz-progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #e07a3d, #e8a87c);
  transition: width 0.3s;
}

.quiz-body {
  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 24px 120px;
  overflow-y: auto;
}

.quiz-content {
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

/* 题目区域 - 固定位置 */
.quiz-question-area {
  flex-shrink: 0;
}

.quiz-question {
  font-size: 24px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.5;
  margin-bottom: 32px;
  text-align: center;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 答案解析区域 - 固定位置 */
.quiz-explanation-area {
  margin-top: 24px;
  min-height: 100px;
}

.quiz-explanation {
  padding: 16px 20px;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  border-left: 3px solid #e07a3d;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.explanation-title {
  font-size: 13px;
  font-weight: 600;
  color: #e07a3d;
  margin-bottom: 8px;
}

.explanation-text {
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

/* 固定底部按钮 */
.quiz-footer {
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  pointer-events: none;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 18px 24px;
  background: var(--vp-c-bg-soft);
  border: 2px solid transparent;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
}

.quiz-option:hover:not(:disabled):not(.correct):not(.wrong) {
  border-color: var(--vp-c-brand-1);
}

.quiz-option.correct {
  border-color: #52c41a;
  background: rgba(82, 196, 26, 0.1);
}

.quiz-option.wrong {
  border-color: #ff4d4f;
  background: rgba(255, 77, 79, 0.1);
}

.quiz-option.dim {
  opacity: 0.5;
}

.option-key {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  flex-shrink: 0;
}

.quiz-option.correct .option-key {
  background: #52c41a;
  color: #fff;
}

.quiz-option.wrong .option-key {
  background: #ff4d4f;
  color: #fff;
}

.option-text {
  font-size: 16px;
  color: var(--vp-c-text-1);
}

.quiz-next {
  display: flex;
  justify-content: center;
  margin-top: 40px;
}

.btn-next {
  padding: 14px 48px;
  background: #e07a3d;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
}

.btn-next.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.btn-next:hover {
  background: #d06a2d;
}

/* 结果页 */
.quiz-result {
  text-align: center;
}

.result-score {
  font-size: 96px;
  font-weight: 700;
  color: #e07a3d;
  line-height: 1;
}

.result-label {
  font-size: 18px;
  color: var(--vp-c-text-3);
  margin-bottom: 24px;
}

.result-stats {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin-bottom: 48px;
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn-primary,
.btn-secondary {
  padding: 14px 32px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary {
  background: #e07a3d;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background: #d06a2d;
}

.btn-secondary {
  background: transparent;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}

.btn-secondary:hover {
  border-color: var(--vp-c-text-3);
  color: var(--vp-c-text-1);
}

/* 响应式 */
@media (max-width: 768px) {
  .quiz-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  
  .quiz-sidebar {
    border-right: none;
    border-bottom: 1px solid var(--vp-c-divider);
    padding-right: 0;
    padding-bottom: 16px;
  }
  
  .category-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .category-item {
    padding: 8px 14px;
  }
  
  .category-item svg {
    display: none;
  }
  
  .quiz-question {
    font-size: 20px;
  }
  
  .result-score {
    font-size: 72px;
  }
}
</style>
