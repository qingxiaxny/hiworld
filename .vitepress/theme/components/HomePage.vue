<template>
  <div class="home-container">
    <h1 class="home-title">你想成为什么样的开发者</h1>
    
    <div class="career-tags">
      <span class="tag">前端工程师</span>
      <span class="tag">后端工程师</span>
      <span class="tag">全栈工程师</span>
      <span class="tag">移动端开发</span>
      <span class="tag">算法工程师</span>
      <span class="tag">数据工程师</span>
      <span class="tag">DevOps 工程师</span>
      <span class="tag">测试工程师</span>
      <span class="tag">架构师</span>
      <span class="tag">产品经理</span>
      <span class="tag">UI/UX 设计师</span>
      <span class="tag">游戏开发者</span>
      <span class="tag">区块链开发</span>
      <span class="tag">AI 工程师</span>
      <span class="tag">机器学习工程师</span>
      <span class="tag">数据分析师</span>
      <span class="tag">云计算工程师</span>
      <span class="tag">安全工程师</span>
      <span class="tag">嵌入式开发</span>
      <span class="tag">桌面应用开发</span>
      <span class="tag">小程序开发</span>
      <span class="tag">技术写作者</span>
      <span class="tag">开源贡献者</span>
      <span class="tag">独立开发者</span>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  min-height: calc(100vh - var(--vp-nav-height) - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
}

.home-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin-bottom: 60px;
  text-align: center;
}

.career-tags {
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 0 24px;
}

.tag {
  display: inline-block;
  padding: 8px 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 20px;
  font-size: 14px;
  color: var(--vp-c-text-2);
  transition: all 0.2s;
  cursor: pointer;
}

.tag:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border: 2px solid #ff6b35;
  transform: translateY(-2px);
}
</style>
