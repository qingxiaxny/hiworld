<template>
  <div class="learned-section" v-if="showButton">
    <button 
      class="learned-btn" 
      :class="{ completed: isLearned }"
      @click="handleClick"
    >
      <span v-if="isLearned">✓ 已掌握 {{ categoryName }}</span>
      <span v-else>完成 {{ categoryName }} 测验</span>
    </button>
  </div>

  <!-- 测验弹窗 -->
  <Teleport to="body">
    <div v-if="showQuiz" class="quiz-overlay" @click.self="closeQuiz">
      <div class="quiz-modal">
        <div class="quiz-header">
          <h2>{{ categoryName }} 测验</h2>
          <button class="quiz-close" @click="closeQuiz">×</button>
        </div>
        
        <div v-if="!showResult" class="quiz-content">
          <div class="quiz-progress">
            <div class="quiz-progress-bar" :style="{ width: progressPercent + '%' }"></div>
          </div>
          <div class="quiz-progress-text">{{ currentIndex + 1 }} / {{ questions.length }}</div>
          
          <div class="quiz-question">{{ currentQuestion?.q }}</div>
          
          <div class="quiz-options">
            <button
              v-for="(opt, idx) in currentQuestion?.options"
              :key="opt"
              :class="['quiz-option', optionClass(opt)]"
              :disabled="answered"
              @click="selectAnswer(opt)"
            >
              <span class="option-key">{{ ['A', 'B', 'C', 'D'][idx] }}</span>
              <span class="option-text">{{ opt }}</span>
            </button>
          </div>

          <div v-if="answered && currentQuestion?.explanation" class="quiz-explanation">
            <div class="explanation-title">解析</div>
            <div class="explanation-text">{{ currentQuestion.explanation }}</div>
          </div>

          <button 
            v-if="answered"
            class="btn-next" 
            @click="nextQuestion"
          >
            {{ isLastQuestion ? '查看结果' : '下一题' }}
          </button>
        </div>

        <div v-else class="quiz-result">
          <div class="result-icon" :class="{ success: passed }">
            {{ passed ? '🎉' : '😢' }}
          </div>
          <div class="result-score">{{ correctCount }} / {{ questions.length }}</div>
          <div class="result-text">
            {{ passed ? '恭喜通过！已标记为已学习' : '还需继续努力，答对12题及以上才能通过' }}
          </div>
          <div class="result-actions">
            <button class="btn-secondary" @click="closeQuiz">关闭</button>
            <button v-if="!passed" class="btn-primary" @click="retryQuiz">再试一次</button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import { docQuizMapping, quizCategoryNames } from '../data/docQuizMapping.js'
import { quizCategories } from '../data/quizData.js'

const route = useRoute()
const isLearned = ref(false)
const showQuiz = ref(false)
const currentIndex = ref(0)
const selectedAnswer = ref(null)
const answered = ref(false)
const correctCount = ref(0)
const showResult = ref(false)
const questions = ref([])

// 获取当前页面对应的测验分类
const quizCategory = computed(() => {
  return docQuizMapping[route.path] || null
})

const categoryName = computed(() => {
  return quizCategoryNames[quizCategory.value] || ''
})

// 只在有对应测验的页面显示按钮
const showButton = computed(() => {
  return route.path.startsWith('/docs/') && quizCategory.value
})

const storageKey = computed(() => {
  return `learned:${quizCategory.value}`
})

const currentQuestion = computed(() => questions.value[currentIndex.value])
const isLastQuestion = computed(() => currentIndex.value === questions.value.length - 1)
const progressPercent = computed(() => ((currentIndex.value + 1) / questions.value.length) * 100)
const passed = computed(() => correctCount.value >= 12)

// 随机打乱数组
function shuffle(arr) {
  const result = [...arr]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

function loadState() {
  if (typeof window !== 'undefined' && showButton.value) {
    isLearned.value = localStorage.getItem(storageKey.value) === 'true'
  }
}

function handleClick() {
  if (isLearned.value) {
    // 已学习，点击取消
    if (confirm('确定要取消已学习状态吗？')) {
      isLearned.value = false
      localStorage.removeItem(storageKey.value)
      window.dispatchEvent(new CustomEvent('learning-progress-updated'))
    }
  } else {
    // 未学习，开始测验
    startQuiz()
  }
}

function startQuiz() {
  const category = quizCategories.find(c => c.id === quizCategory.value)
  if (category && category.questions) {
    // 随机抽20题
    questions.value = shuffle(category.questions).slice(0, 20)
    currentIndex.value = 0
    selectedAnswer.value = null
    answered.value = false
    correctCount.value = 0
    showResult.value = false
    showQuiz.value = true
  }
}

function closeQuiz() {
  showQuiz.value = false
}

function selectAnswer(opt) {
  if (answered.value) return
  selectedAnswer.value = opt
  answered.value = true
  if (opt === currentQuestion.value.answer) {
    correctCount.value++
  }
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
    // 如果通过，标记为已学习
    if (passed.value) {
      isLearned.value = true
      localStorage.setItem(storageKey.value, 'true')
      window.dispatchEvent(new CustomEvent('learning-progress-updated'))
    }
  } else {
    currentIndex.value++
    selectedAnswer.value = null
    answered.value = false
  }
}

function retryQuiz() {
  startQuiz()
}

onMounted(() => {
  loadState()
})

watch(() => route.path, () => {
  loadState()
})
</script>

<style scoped>
.learned-section {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: center;
}

.learned-btn {
  padding: 12px 32px;
  border: 2px solid #e8a87c;
  border-radius: 12px;
  background: transparent;
  color: #e07a3d;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.learned-btn:hover {
  background: #fef6f0;
}

.learned-btn.completed {
  background: #e07a3d;
  color: #fff;
  border-color: #e07a3d;
}

.learned-btn.completed:hover {
  background: #c96830;
  border-color: #c96830;
}

/* 测验弹窗 */
.quiz-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.quiz-modal {
  background: var(--vp-c-bg);
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.quiz-header h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}

.quiz-close {
  background: none;
  border: none;
  font-size: 28px;
  color: var(--vp-c-text-2);
  cursor: pointer;
  line-height: 1;
}

.quiz-close:hover {
  color: var(--vp-c-text-1);
}

.quiz-content {
  padding: 24px;
}

.quiz-progress {
  height: 4px;
  background: var(--vp-c-bg-soft);
  border-radius: 2px;
  overflow: hidden;
  margin-bottom: 8px;
}

.quiz-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #e07a3d, #e8a87c);
  transition: width 0.3s;
}

.quiz-progress-text {
  text-align: right;
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-bottom: 24px;
}

.quiz-question {
  font-size: 18px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.6;
  margin-bottom: 24px;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quiz-option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 14px 16px;
  background: var(--vp-c-bg-soft);
  border: 2px solid transparent;
  border-radius: 10px;
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
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--vp-c-bg);
  border-radius: 6px;
  font-size: 13px;
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
  font-size: 14px;
  color: var(--vp-c-text-1);
}

.quiz-explanation {
  margin-top: 20px;
  padding: 16px;
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  border-left: 3px solid #e07a3d;
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

.btn-next {
  display: block;
  width: 100%;
  margin-top: 24px;
  padding: 14px;
  background: #e07a3d;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-next:hover {
  background: #d06a2d;
}

/* 结果页 */
.quiz-result {
  padding: 48px 24px;
  text-align: center;
}

.result-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.result-score {
  font-size: 48px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 8px;
}

.result-icon.success + .result-score {
  color: #52c41a;
}

.result-text {
  font-size: 15px;
  color: var(--vp-c-text-2);
  margin-bottom: 32px;
}

.result-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.btn-primary,
.btn-secondary {
  padding: 12px 28px;
  border-radius: 10px;
  font-size: 14px;
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
</style>
