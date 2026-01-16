<template>
  <div class="learned-section" v-if="isDocPage">
    <button 
      class="learned-btn" 
      :class="{ completed: isLearned }"
      @click="toggleLearned"
    >
      <span v-if="isLearned">✓ 已学习</span>
      <span v-else>标记为已学习</span>
    </button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isLearned = ref(false)

const isDocPage = computed(() => {
  return route.path.startsWith('/docs/')
})

const storageKey = computed(() => {
  return `learned:${route.path}`
})

const loadState = () => {
  if (typeof window !== 'undefined' && isDocPage.value) {
    isLearned.value = localStorage.getItem(storageKey.value) === 'true'
  }
}

const toggleLearned = () => {
  isLearned.value = !isLearned.value
  if (typeof window !== 'undefined') {
    if (isLearned.value) {
      localStorage.setItem(storageKey.value, 'true')
    } else {
      localStorage.removeItem(storageKey.value)
    }
    window.dispatchEvent(new CustomEvent('learning-progress-updated'))
  }
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
</style>
