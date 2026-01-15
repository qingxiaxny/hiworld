<template>
  <div v-if="!showLearningPath" class="home-page">
    <h1 class="home-title">你想成为什么样的开发者</h1>
    <div class="career-tags">
      <span v-for="tag in careerTags" :key="tag" class="tag" :class="getTagClass(tag)" @click="selectTag(tag)">{{ tag }}</span>
    </div>
    <div class="action-buttons">
      <button class="action-btn" @click="openQuiz">我适合什么</button>
      <button class="action-btn" @click="startLearning">开始学习</button>
    </div>
  </div>
  <div v-else class="learning-path-page">
    <button class="reset-btn" @click="resetSelection">重新选择</button>
    <h1 class="path-title">{{ selectedTag }}</h1>
    <p class="path-subtitle">学习路径</p>
    <div class="progress-section">
      <div class="progress-label">
        <span>学习进度</span>
        <span class="progress-percentage">{{ learningProgress }}%</span>
      </div>
      <div class="progress-bar-container">
        <div class="progress-bar-fill" :style="{ width: learningProgress + '%' }"></div>
      </div>
    </div>
    <div class="mindmap-container">
      <svg ref="svgRef" class="mindmap-svg"></svg>
    </div>
  </div>
  <div v-if="showQuiz" class="quiz-overlay" @click="closeQuiz">
    <div class="quiz-modal" @click.stop>
      <button class="quiz-close" @click="closeQuiz">×</button>
      <div class="quiz-progress">
        <div class="quiz-progress-bar" :style="{ width: ((currentQuestion + 1) / questions.length * 100) + '%' }"></div>
      </div>
      <div class="quiz-progress-text">{{ currentQuestion + 1 }} / {{ questions.length }}</div>
      <h2 class="quiz-question">{{ questions[currentQuestion].question }}</h2>
      <div class="quiz-options">
        <button v-for="(opt, i) in questions[currentQuestion].options" :key="i" class="quiz-option" @click="selectAnswer(opt.scores)">{{ opt.text }}</button>
      </div>
      <button v-if="currentQuestion > 0" class="quiz-back" @click="prevQuestion">上一题</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch, nextTick, onUnmounted } from 'vue'
import { Transformer } from 'markmap-lib'
import { Markmap } from 'markmap-view'
import { careerMindmaps } from '../data/careerMindmaps.js'
import { careerPaths, pathDocCounts } from '../data/careerPaths.js'

const careerTags = ['前端工程师', '后端工程师', '全栈工程师', 'AI 工程师', '移动端开发', '算法工程师', 'UI/UX 设计师', '数据工程师', 'DevOps 工程师', '测试工程师', '架构师', '产品经理', '游戏开发者', '区块链开发', '机器学习工程师', '数据分析师', '云计算工程师', '安全工程师', '嵌入式开发', '桌面应用开发', '小程序开发', '技术写作者', '开源贡献者', '独立开发者']
const selectedTag = ref(null)
const showQuiz = ref(false)
const showLearningPath = ref(false)
const currentQuestion = ref(0)
const answers = ref([])
const recommendedTags = ref({ tier1: [], tier2: [], tier3: [] })
const svgRef = ref(null)
const learningProgress = ref(0)
let markmapInstance = null

const defaultMindmap = `# 学习路径
## 基础阶段
### 编程基础
- 变量与数据类型
- 控制流程
- 函数与模块
### 数据结构
- 数组与链表
- 栈与队列
- 树与图
## 进阶阶段
### 设计模式
### 系统设计
## 实战阶段
### 项目实践
### 开源贡献`

const currentMindmap = computed(() => careerMindmaps[selectedTag.value] || defaultMindmap)

function renderMindmap() {
  if (!svgRef.value || !showLearningPath.value) return
  const transformer = new Transformer()
  const { root } = transformer.transform(currentMindmap.value)
  svgRef.value.innerHTML = ''
  const colors = ['#e07a3d', '#e8a87c', '#f4b183', '#f8c9a0', '#fcd9b8', '#ffecd6']
  markmapInstance = Markmap.create(svgRef.value, { 
    colorFreezeLevel: 2,
    initialExpandLevel: 3,
    paddingX: 20,
    spacingVertical: 15,
    spacingHorizontal: 100,
    duration: 500,
    color: (node) => colors[node.state.depth % colors.length],
    nodeMinHeight: 30,
    maxWidth: 0,
    fitRatio: 0.95
  }, root)
}

watch(showLearningPath, (val) => { if (val) nextTick(() => renderMindmap()) })
watch(selectedTag, () => { if (showLearningPath.value) nextTick(() => renderMindmap()) })

const questions = [
  { question: '你更喜欢做什么类型的工作？', options: [
    { text: '设计用户界面，让产品更美观易用', scores: { '前端工程师': 3, 'UI/UX 设计师': 3, '全栈工程师': 2, '移动端开发': 2 } },
    { text: '处理数据和业务逻辑', scores: { '后端工程师': 3, '全栈工程师': 2, '数据工程师': 2, '架构师': 1 } },
    { text: '分析数据，发现规律和洞察', scores: { '数据分析师': 3, '数据工程师': 3, 'AI 工程师': 2, '机器学习工程师': 2 } },
    { text: '优化系统性能和稳定性', scores: { 'DevOps 工程师': 3, '架构师': 2, '云计算工程师': 2, '后端工程师': 1 } }
  ]},
  { question: '你的学习风格是？', options: [
    { text: '喜欢看到即时的视觉反馈', scores: { '前端工程师': 3, '移动端开发': 2, '游戏开发者': 2, 'UI/UX 设计师': 2 } },
    { text: '喜欢深入研究底层原理', scores: { '后端工程师': 3, '算法工程师': 3, '嵌入式开发': 2, '架构师': 2 } },
    { text: '喜欢通过数据验证想法', scores: { '数据分析师': 3, '测试工程师': 2, '产品经理': 2, '数据工程师': 2 } },
    { text: '喜欢解决复杂的技术难题', scores: { '算法工程师': 3, 'AI 工程师': 3, '架构师': 2, '后端工程师': 1 } }
  ]},
  { question: '你更关注什么？', options: [
    { text: '用户体验和交互设计', scores: { 'UI/UX 设计师': 3, '前端工程师': 3, '产品经理': 2, '移动端开发': 2 } },
    { text: '系统架构和代码质量', scores: { '架构师': 3, '后端工程师': 3, '全栈工程师': 2, '测试工程师': 1 } },
    { text: '数据价值和商业洞察', scores: { '数据分析师': 3, '产品经理': 3, '数据工程师': 2, 'AI 工程师': 1 } },
    { text: '系统安全和运维效率', scores: { '安全工程师': 3, 'DevOps 工程师': 3, '云计算工程师': 2, '测试工程师': 1 } }
  ]},
  { question: '你的工作偏好是？', options: [
    { text: '快速迭代，看到成果', scores: { '前端工程师': 3, '移动端开发': 2, '小程序开发': 2, '独立开发者': 2 } },
    { text: '稳扎稳打，构建可靠系统', scores: { '后端工程师': 3, '测试工程师': 3, '架构师': 2, 'DevOps 工程师': 1 } },
    { text: '探索发现，从数据中找答案', scores: { '数据分析师': 3, '数据工程师': 3, 'AI 工程师': 2, '机器学习工程师': 2 } },
    { text: '自动化流程，提升效率', scores: { 'DevOps 工程师': 3, '测试工程师': 2, '云计算工程师': 2, '后端工程师': 1 } }
  ]},
  { question: '你对技术的态度是？', options: [
    { text: '追求最新技术和框架', scores: { '前端工程师': 3, '移动端开发': 2, '区块链开发': 2, '独立开发者': 1 } },
    { text: '注重技术的稳定性和成熟度', scores: { '后端工程师': 3, '架构师': 3, 'DevOps 工程师': 2, '测试工程师': 2 } },
    { text: '关注技术的创新和突破', scores: { 'AI 工程师': 3, '算法工程师': 3, '机器学习工程师': 3, '区块链开发': 2 } },
    { text: '实用主义，能解决问题就好', scores: { '全栈工程师': 3, '独立开发者': 3, '小程序开发': 2, '桌面应用开发': 2 } }
  ]},
  { question: '你喜欢的工作环境是？', options: [
    { text: '创意自由，注重设计', scores: { 'UI/UX 设计师': 3, '游戏开发者': 2, '前端工程师': 2, '独立开发者': 2 } },
    { text: '团队协作，分工明确', scores: { '全栈工程师': 3, '产品经理': 3, '测试工程师': 2, 'DevOps 工程师': 2 } },
    { text: '独立研究，深度思考', scores: { '算法工程师': 3, 'AI 工程师': 3, '机器学习工程师': 2, '数据分析师': 2 } },
    { text: '快节奏，多任务并行', scores: { '全栈工程师': 3, 'DevOps 工程师': 2, '移动端开发': 2, '小程序开发': 2 } }
  ]},
  { question: '你的兴趣方向是？', options: [
    { text: '视觉设计和动画效果', scores: { '前端工程师': 3, 'UI/UX 设计师': 3, '游戏开发者': 3, '移动端开发': 1 } },
    { text: '数据处理和分析', scores: { '数据工程师': 3, '数据分析师': 3, '后端工程师': 2, 'AI 工程师': 2 } },
    { text: '系统架构和设计模式', scores: { '架构师': 3, '后端工程师': 3, '全栈工程师': 2, 'DevOps 工程师': 1 } },
    { text: '硬件和底层系统', scores: { '嵌入式开发': 3, '云计算工程师': 2, 'DevOps 工程师': 2, '安全工程师': 1 } }
  ]},
  { question: '你希望的职业发展路径是？', options: [
    { text: '成为技术专家', scores: { '算法工程师': 3, '架构师': 3, 'AI 工程师': 2, '安全工程师': 2 } },
    { text: '成为全能型人才', scores: { '全栈工程师': 3, '独立开发者': 3, '产品经理': 2, '技术写作者': 1 } },
    { text: '创业或做独立项目', scores: { '独立开发者': 3, '全栈工程师': 2, '移动端开发': 2, '小程序开发': 2 } },
    { text: '在大公司深耕某个领域', scores: { '后端工程师': 3, '数据工程师': 2, 'DevOps 工程师': 2, '测试工程师': 2 } }
  ]},
  { question: '你对编程语言的偏好？', options: [
    { text: 'JavaScript/TypeScript', scores: { '前端工程师': 3, '全栈工程师': 2, '移动端开发': 2, '小程序开发': 2 } },
    { text: 'Python', scores: { 'AI 工程师': 3, '数据分析师': 3, '机器学习工程师': 3, '数据工程师': 2 } },
    { text: 'Java/C++/Go', scores: { '后端工程师': 3, '算法工程师': 2, '嵌入式开发': 2, '云计算工程师': 2 } },
    { text: '不限，看项目需求', scores: { '全栈工程师': 3, '独立开发者': 2, 'DevOps 工程师': 2, '架构师': 2 } }
  ]},
  { question: '你最想解决什么类型的问题？', options: [
    { text: '让产品更好用、更美观', scores: { 'UI/UX 设计师': 3, '前端工程师': 3, '产品经理': 2, '移动端开发': 2 } },
    { text: '提升系统性能和可靠性', scores: { '后端工程师': 3, 'DevOps 工程师': 3, '架构师': 2, '云计算工程师': 2 } },
    { text: '从数据中挖掘价值', scores: { '数据分析师': 3, '数据工程师': 3, 'AI 工程师': 2, '机器学习工程师': 2 } },
    { text: '保护系统和数据安全', scores: { '安全工程师': 3, 'DevOps 工程师': 2, '后端工程师': 2, '测试工程师': 1 } }
  ]}
]

function selectTag(tag) { selectedTag.value = selectedTag.value === tag ? null : tag }
function startLearning() { if (selectedTag.value) { showLearningPath.value = true; localStorage.setItem('selectedCareer', selectedTag.value) } }
function resetSelection() { showLearningPath.value = false; selectedTag.value = null; recommendedTags.value = { tier1: [], tier2: [], tier3: [] }; localStorage.removeItem('selectedCareer'); localStorage.removeItem('careerQuizResults') }
function openQuiz() { showQuiz.value = true; currentQuestion.value = 0; answers.value = []; recommendedTags.value = { tier1: [], tier2: [], tier3: [] }; localStorage.removeItem('careerQuizResults') }
function closeQuiz() { showQuiz.value = false }
function selectAnswer(scores) { answers.value.push(scores); if (currentQuestion.value < questions.length - 1) { currentQuestion.value++ } else { calculateResult(); closeQuiz() } }
function prevQuestion() { if (currentQuestion.value > 0) { currentQuestion.value--; answers.value.pop() } }
function calculateResult() {
  const totalScores = {}
  answers.value.forEach(scoreMap => { for (const [career, score] of Object.entries(scoreMap)) { totalScores[career] = (totalScores[career] || 0) + score } })
  const sorted = Object.entries(totalScores).sort((a, b) => b[1] - a[1])
  if (sorted.length > 0) {
    const maxScore = sorted[0][1]
    recommendedTags.value.tier1 = sorted.filter(([_, score]) => score >= maxScore * 0.7).map(([c]) => c)
    recommendedTags.value.tier2 = sorted.filter(([_, score]) => score >= maxScore * 0.5 && score < maxScore * 0.7).map(([c]) => c)
    recommendedTags.value.tier3 = sorted.filter(([_, score]) => score >= maxScore * 0.3 && score < maxScore * 0.5).map(([c]) => c)
    localStorage.setItem('careerQuizResults', JSON.stringify(recommendedTags.value))
  }
}
function getTagClass(tag) {
  const classes = []
  if (selectedTag.value === tag) classes.push('selected')
  if (recommendedTags.value.tier1.includes(tag)) classes.push('recommend-tier1')
  else if (recommendedTags.value.tier2.includes(tag)) classes.push('recommend-tier2')
  else if (recommendedTags.value.tier3.includes(tag)) classes.push('recommend-tier3')
  return classes.join(' ')
}

function calculateProgress() {
  if (typeof window === 'undefined' || !selectedTag.value) {
    learningProgress.value = 0
    return
  }
  const paths = careerPaths[selectedTag.value] || []
  let totalDocs = 0
  let learnedDocs = 0
  
  // 获取所有localStorage中的learned记录
  const learnedKeys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key && key.startsWith('learned:')) {
      learnedKeys.push(key.replace('learned:', ''))
    }
  }
  
  // 计算该职业路径下的总文档数和已学习数
  paths.forEach(path => {
    const count = pathDocCounts[path] || 0
    totalDocs += count
    // 统计该路径下已学习的文档
    learnedKeys.forEach(learnedPath => {
      if (learnedPath.startsWith(path)) {
        learnedDocs++
      }
    })
  })
  
  if (totalDocs > 0) {
    learningProgress.value = Math.round((learnedDocs / totalDocs) * 100)
  } else {
    learningProgress.value = 0
  }
}

function handleProgressUpdate() {
  calculateProgress()
}

onMounted(() => {
  const savedResults = localStorage.getItem('careerQuizResults')
  if (savedResults) recommendedTags.value = JSON.parse(savedResults)
  const savedCareer = localStorage.getItem('selectedCareer')
  if (savedCareer) { selectedTag.value = savedCareer; showLearningPath.value = true }
  calculateProgress()
  window.addEventListener('learning-progress-updated', handleProgressUpdate)
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('learning-progress-updated', handleProgressUpdate)
  }
})

watch(selectedTag, () => {
  calculateProgress()
})
</script>
