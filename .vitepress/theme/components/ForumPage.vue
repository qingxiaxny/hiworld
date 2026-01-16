<template>
  <div class="forum-page">
    <!-- 顶部导航栏 -->
    <header class="forum-nav">
      <div class="nav-left">
        <h1 class="forum-title">学习论坛</h1>
        <div class="nav-tabs">
          <button 
            :class="['tab-btn', { active: activeTab === 'all' }]"
            @click="switchTab('all')"
          >
            全部帖子
          </button>
          <button 
            v-if="user"
            :class="['tab-btn', { active: activeTab === 'mine' }]"
            @click="switchTab('mine')"
          >
            个人主页
          </button>
        </div>
      </div>
      <div class="nav-right">
        <template v-if="user">
          <button class="btn-logout" @click="logout">退出登录</button>
          <button class="btn-primary" @click="showCreateModal = true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            发布帖子
          </button>
        </template>
        <template v-else>
          <button class="btn-secondary" @click="showLoginModal = true; isRegister = false">登录</button>
          <button class="btn-primary" @click="showLoginModal = true; isRegister = true">注册</button>
        </template>
      </div>
    </header>

    <!-- 全部帖子视图 -->
    <div v-if="!currentPost && activeTab === 'all'" class="forum-content">
      <aside class="sidebar">
        <div class="sidebar-section">
          <h3>分类</h3>
          <div class="category-list">
            <button 
              :class="['category-item', { active: currentCategory === 'all' }]"
              @click="currentCategory = 'all'"
            >
              <span>全部</span>
              <span class="category-count">{{ totalCount }}</span>
            </button>
            <button 
              v-for="cat in categoryList" 
              :key="cat.name"
              :class="['category-item', { active: currentCategory === cat.name }]"
              @click="currentCategory = cat.name"
            >
              <span>{{ cat.name }}</span>
            </button>
          </div>
        </div>
      </aside>

      <main class="main-content">
        <div class="content-header">
          <div class="search-box">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input v-model="searchQuery" type="text" placeholder="搜索帖子..." @input="debounceSearch" />
          </div>
          <div class="sort-options">
            <select v-model="sortBy" @change="loadPosts()">
              <option value="latest">最新发布</option>
              <option value="hot">最多浏览</option>
              <option value="likes">最多点赞</option>
            </select>
          </div>
        </div>

        <div class="posts-grid">
          <article v-for="post in posts" :key="post.id" class="post-card" @click="viewPost(post.id)">
            <div class="card-header">
              <span class="card-category" :style="{ background: getCategoryColor(post.category) }">{{ post.category }}</span>
              <span class="card-time">{{ formatTime(post.createdAt) }}</span>
            </div>
            <h3 class="card-title">{{ post.title }}</h3>
            <p class="card-excerpt">{{ getExcerpt(post.content) }}</p>
            <div class="card-footer">
              <div class="card-author">
                <div class="avatar">{{ post.author.username.charAt(0).toUpperCase() }}</div>
                <span>{{ post.author.username }}</span>
              </div>
              <div class="card-stats">
                <span class="stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>{{ post.views }}</span>
                <span class="stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>{{ post._count.comments }}</span>
                <span class="stat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>{{ post._count.likes }}</span>
              </div>
            </div>
          </article>
        </div>

        <div v-if="posts.length === 0 && !loading" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <p>暂无帖子</p>
        </div>

        <div v-if="loading" class="loading-state"><div class="spinner"></div><p>加载中...</p></div>

        <div v-if="pagination.totalPages > 1" class="pagination">
          <button class="page-btn" :disabled="pagination.page <= 1" @click="loadPosts(pagination.page - 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="page-numbers">
            <button v-for="p in visiblePages" :key="p" :class="['page-num', { active: p === pagination.page }]" @click="loadPosts(p)">{{ p }}</button>
          </div>
          <button class="page-btn" :disabled="pagination.page >= pagination.totalPages" @click="loadPosts(pagination.page + 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </main>
    </div>

    <!-- 个人主页视图 -->
    <div v-if="!currentPost && activeTab === 'mine' && user" class="profile-page">
      <!-- 个人信息卡片 -->
      <div class="profile-header">
        <div class="profile-card">
          <div class="profile-avatar">{{ user.username.charAt(0).toUpperCase() }}</div>
          <div class="profile-info">
            <h2 class="profile-name">{{ user.username }}</h2>
            <p class="profile-email">{{ user.email }}</p>
            <p class="profile-joined">加入时间: {{ formatDate(user.createdAt) }}</p>
          </div>
          <div class="profile-stats">
            <div class="profile-stat">
              <span class="stat-num">{{ myStats.posts }}</span>
              <span class="stat-text">发布帖子</span>
            </div>
            <div class="profile-stat">
              <span class="stat-num">{{ myStats.likes }}</span>
              <span class="stat-text">获得点赞</span>
            </div>
            <div class="profile-stat">
              <span class="stat-num">{{ myStats.comments || 0 }}</span>
              <span class="stat-text">发表评论</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 我的帖子列表 -->
      <div class="profile-content">
        <div class="profile-section-header">
          <h3>我的帖子</h3>
          <button class="btn-primary btn-sm" @click="showCreateModal = true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            发布新帖
          </button>
        </div>

        <div class="my-posts-list">
          <div v-for="post in posts" :key="post.id" class="my-post-item" @click="viewPost(post.id)">
            <div class="my-post-main">
              <span class="my-post-category" :style="{ background: getCategoryColor(post.category) }">{{ post.category }}</span>
              <h4 class="my-post-title">{{ post.title }}</h4>
              <p class="my-post-excerpt">{{ getExcerpt(post.content, 150) }}</p>
            </div>
            <div class="my-post-meta">
              <span class="my-post-time">{{ formatTime(post.createdAt) }}</span>
              <div class="my-post-stats">
                <span>{{ post.views }} 浏览</span>
                <span>{{ post._count.comments }} 评论</span>
                <span>{{ post._count.likes }} 点赞</span>
              </div>
            </div>
          </div>
        </div>

        <div v-if="posts.length === 0 && !loading" class="empty-state">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          <p>你还没有发布过帖子</p>
          <button class="btn-primary" @click="showCreateModal = true">发布第一篇帖子</button>
        </div>

        <div v-if="loading" class="loading-state"><div class="spinner"></div><p>加载中...</p></div>

        <div v-if="pagination.totalPages > 1" class="pagination">
          <button class="page-btn" :disabled="pagination.page <= 1" @click="loadPosts(pagination.page - 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <div class="page-numbers">
            <button v-for="p in visiblePages" :key="p" :class="['page-num', { active: p === pagination.page }]" @click="loadPosts(p)">{{ p }}</button>
          </div>
          <button class="page-btn" :disabled="pagination.page >= pagination.totalPages" @click="loadPosts(pagination.page + 1)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- 帖子详情视图 -->
    <div v-if="currentPost" class="post-detail-view">
      <button class="btn-back" @click="currentPost = null">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        返回列表
      </button>
      
      <article class="detail-card">
        <header class="detail-header">
          <span class="detail-category" :style="{ background: getCategoryColor(currentPost.category) }">{{ currentPost.category }}</span>
          <h1 class="detail-title">{{ currentPost.title }}</h1>
          <div class="detail-meta">
            <div class="author-info">
              <div class="avatar large">{{ currentPost.author.username.charAt(0).toUpperCase() }}</div>
              <div class="author-text">
                <span class="author-name">{{ currentPost.author.username }}</span>
                <span class="post-date">{{ formatTime(currentPost.createdAt) }}</span>
              </div>
            </div>
            <div class="detail-stats">
              <span>{{ currentPost.views }} 浏览</span>
              <span>{{ currentPost._count.comments }} 评论</span>
              <span>{{ currentPost._count.likes }} 点赞</span>
            </div>
          </div>
        </header>
        
        <div class="detail-body" v-html="formatContent(currentPost.content)"></div>
        
        <footer class="detail-footer">
          <button :class="['btn-like', { liked: currentPost.isLiked }]" @click="toggleLike">
            <svg width="18" height="18" viewBox="0 0 24 24" :fill="currentPost.isLiked ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            {{ currentPost.isLiked ? '已点赞' : '点赞' }}
            <span class="like-count">{{ currentPost._count.likes }}</span>
          </button>
          <button v-if="user && currentPost.author.id === user.id" class="btn-delete" @click="deletePost">删除帖子</button>
        </footer>
      </article>

      <!-- 评论区 -->
      <section class="comments-section">
        <h2 class="section-title">评论 <span class="comment-count">{{ currentPost.comments.length }}</span></h2>
        
        <div v-if="user" class="comment-editor">
          <div class="editor-avatar">{{ user.username.charAt(0).toUpperCase() }}</div>
          <div class="editor-input">
            <textarea v-model="newComment" placeholder="写下你的想法..." rows="3"></textarea>
            <button class="btn-submit" @click="submitComment" :disabled="!newComment.trim()">发表评论</button>
          </div>
        </div>
        <div v-else class="login-prompt">
          <p>登录后参与讨论</p>
          <button class="btn-secondary" @click="showLoginModal = true">立即登录</button>
        </div>

        <div class="comments-list">
          <div v-for="comment in currentPost.comments" :key="comment.id" class="comment-card">
            <div class="comment-avatar">{{ comment.author.username.charAt(0).toUpperCase() }}</div>
            <div class="comment-body">
              <div class="comment-header">
                <span class="comment-author">{{ comment.author.username }}</span>
                <span class="comment-time">{{ formatTime(comment.createdAt) }}</span>
              </div>
              <p class="comment-text">{{ comment.content }}</p>
            </div>
          </div>
          <div v-if="currentPost.comments.length === 0" class="no-comments"><p>暂无评论，来发表第一条评论吧</p></div>
        </div>
      </section>
    </div>

    <!-- 登录/注册弹窗 -->
    <Teleport to="body">
      <div v-if="showLoginModal" class="modal-overlay" @click.self="showLoginModal = false">
        <div class="modal-card">
          <button class="modal-close" @click="showLoginModal = false">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="modal-header">
            <h2>{{ isRegister ? '创建账号' : '欢迎回来' }}</h2>
            <p>{{ isRegister ? '加入学习社区，与大家一起交流' : '登录后继续你的学习之旅' }}</p>
          </div>
          <form class="auth-form" @submit.prevent="isRegister ? register() : login()">
            <div v-if="isRegister" class="form-group">
              <label>用户名</label>
              <input v-model="authForm.username" type="text" placeholder="输入用户名" required />
            </div>
            <div class="form-group">
              <label>邮箱</label>
              <input v-model="authForm.email" type="email" placeholder="输入邮箱地址" required />
            </div>
            <div class="form-group">
              <label>密码</label>
              <input v-model="authForm.password" type="password" placeholder="输入密码" required />
            </div>
            <button type="submit" class="btn-auth">{{ isRegister ? '注册' : '登录' }}</button>
          </form>
          <div class="auth-switch">
            {{ isRegister ? '已有账号？' : '还没有账号？' }}
            <a href="#" @click.prevent="isRegister = !isRegister">{{ isRegister ? '立即登录' : '立即注册' }}</a>
          </div>
        </div>
      </div>
    </Teleport>

    <!-- 发帖弹窗 -->
    <Teleport to="body">
      <div v-if="showCreateModal" class="modal-overlay" @click.self="showCreateModal = false">
        <div class="modal-card modal-large">
          <button class="modal-close" @click="showCreateModal = false">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="modal-header">
            <h2>发布新帖子</h2>
            <p>分享你的问题或经验</p>
          </div>
          <form class="post-form" @submit.prevent="createPost">
            <div class="form-group">
              <label>标题</label>
              <input v-model="postForm.title" type="text" placeholder="输入帖子标题" required />
            </div>
            <div class="form-group">
              <label>分类</label>
              <div class="category-select">
                <button v-for="cat in categoryList" :key="cat.name" type="button" :class="['cat-option', { selected: postForm.category === cat.name }]" @click="postForm.category = cat.name">
                  <span>{{ cat.name }}</span>
                </button>
              </div>
            </div>
            <div class="form-group">
              <label>内容</label>
              <textarea v-model="postForm.content" placeholder="详细描述你的问题或分享..." rows="8" required></textarea>
            </div>
            <button type="submit" class="btn-auth" :disabled="!postForm.category">发布帖子</button>
          </form>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'

const API_BASE = 'http://localhost:3001/api'

const user = ref(null)
const token = ref('')
const posts = ref([])
const currentPost = ref(null)
const currentCategory = ref('all')
const activeTab = ref('all')
const searchQuery = ref('')
const sortBy = ref('latest')
const loading = ref(false)
const pagination = ref({ page: 1, totalPages: 1, total: 0 })
const totalCount = ref(0)
const myStats = ref({ posts: 0, likes: 0, comments: 0 })

const categoryList = [
  { name: '前端' }, { name: '后端' }, { name: 'AI' }, { name: '数据库' },
  { name: '运维' }, { name: '算法' }, { name: '职业' }, { name: '其他' }
]

const categoryColors = {
  '前端': '#3b82f6', '后端': '#10b981', 'AI': '#8b5cf6', '数据库': '#f59e0b',
  '运维': '#ef4444', '算法': '#06b6d4', '职业': '#ec4899', '其他': '#6b7280'
}

const showLoginModal = ref(false)
const showCreateModal = ref(false)
const isRegister = ref(false)
const authForm = ref({ username: '', email: '', password: '' })
const postForm = ref({ title: '', content: '', category: '' })
const newComment = ref('')

const visiblePages = computed(() => {
  const total = pagination.value.totalPages
  const current = pagination.value.page
  const pages = []
  let start = Math.max(1, current - 2)
  let end = Math.min(total, current + 2)
  if (end - start < 4) {
    if (start === 1) end = Math.min(total, 5)
    else start = Math.max(1, total - 4)
  }
  for (let i = start; i <= end; i++) pages.push(i)
  return pages
})

function getCategoryColor(category) { return categoryColors[category] || '#6b7280' }
function getExcerpt(content, maxLen = 100) {
  if (!content) return ''
  const text = content.replace(/<[^>]+>/g, '')
  return text.length > maxLen ? text.slice(0, maxLen) + '...' : text
}
function formatContent(content) { return content ? content.replace(/\n/g, '<br>') : '' }
function formatDate(dateStr) {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('zh-CN')
}

function switchTab(tab) {
  activeTab.value = tab
  currentCategory.value = 'all'
  currentPost.value = null
  loadPosts()
}

let searchTimer = null
function debounceSearch() {
  clearTimeout(searchTimer)
  searchTimer = setTimeout(() => loadPosts(), 300)
}

async function loadPosts(page = 1) {
  loading.value = true
  try {
    const params = new URLSearchParams({ page, limit: 12 })
    if (currentCategory.value !== 'all') params.append('category', currentCategory.value)
    if (searchQuery.value) params.append('search', searchQuery.value)
    if (sortBy.value) params.append('sort', sortBy.value)
    if (activeTab.value === 'mine' && user.value) params.append('authorId', user.value.id)
    
    const headers = token.value ? { Authorization: `Bearer ${token.value}` } : {}
    const res = await fetch(`${API_BASE}/posts?${params}`, { headers })
    const data = await res.json()
    posts.value = data.posts || []
    pagination.value = data.pagination || { page: 1, totalPages: 1, total: 0 }
    if (currentCategory.value === 'all' && activeTab.value === 'all') totalCount.value = data.pagination?.total || 0
  } catch (e) { console.error('加载帖子失败', e) }
  finally { loading.value = false }
}

async function loadMyStats() {
  if (!token.value) return
  try {
    const res = await fetch(`${API_BASE}/auth/stats`, { headers: { Authorization: `Bearer ${token.value}` } })
    if (res.ok) myStats.value = await res.json()
  } catch (e) {}
}

async function viewPost(id) {
  try {
    const headers = token.value ? { Authorization: `Bearer ${token.value}` } : {}
    const res = await fetch(`${API_BASE}/posts/${id}`, { headers })
    currentPost.value = await res.json()
  } catch (e) { console.error('加载帖子详情失败', e) }
}

async function login() {
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: authForm.value.email, password: authForm.value.password })
    })
    const data = await res.json()
    if (res.ok) {
      token.value = data.token
      user.value = data.user
      localStorage.setItem('forum_token', data.token)
      showLoginModal.value = false
      authForm.value = { username: '', email: '', password: '' }
      loadMyStats()
    } else { alert(data.error || '登录失败') }
  } catch (e) { alert('登录失败') }
}

async function register() {
  try {
    const res = await fetch(`${API_BASE}/auth/register`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authForm.value)
    })
    const data = await res.json()
    if (res.ok) {
      token.value = data.token
      user.value = data.user
      localStorage.setItem('forum_token', data.token)
      showLoginModal.value = false
      authForm.value = { username: '', email: '', password: '' }
    } else { alert(data.error || '注册失败') }
  } catch (e) { alert('注册失败') }
}

function logout() {
  token.value = ''
  user.value = null
  localStorage.removeItem('forum_token')
  if (activeTab.value === 'mine') activeTab.value = 'all'
  loadPosts()
}

async function createPost() {
  try {
    const res = await fetch(`${API_BASE}/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token.value}` },
      body: JSON.stringify(postForm.value)
    })
    if (res.ok) {
      showCreateModal.value = false
      postForm.value = { title: '', content: '', category: '' }
      loadPosts()
      loadMyStats()
    } else { const data = await res.json(); alert(data.error || '发帖失败') }
  } catch (e) { alert('发帖失败') }
}

async function deletePost() {
  if (!confirm('确定要删除这篇帖子吗？')) return
  try {
    const res = await fetch(`${API_BASE}/posts/${currentPost.value.id}`, {
      method: 'DELETE', headers: { Authorization: `Bearer ${token.value}` }
    })
    if (res.ok) { currentPost.value = null; loadPosts(); loadMyStats() }
  } catch (e) { alert('删除失败') }
}

async function toggleLike() {
  if (!user.value) { showLoginModal.value = true; return }
  try {
    const res = await fetch(`${API_BASE}/posts/${currentPost.value.id}/like`, {
      method: 'POST', headers: { Authorization: `Bearer ${token.value}` }
    })
    const data = await res.json()
    currentPost.value.isLiked = data.liked
    currentPost.value._count.likes += data.liked ? 1 : -1
  } catch (e) { console.error('点赞失败', e) }
}

async function submitComment() {
  if (!newComment.value.trim()) return
  try {
    const res = await fetch(`${API_BASE}/comments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token.value}` },
      body: JSON.stringify({ content: newComment.value, postId: currentPost.value.id })
    })
    if (res.ok) {
      const comment = await res.json()
      currentPost.value.comments.unshift(comment)
      newComment.value = ''
    }
  } catch (e) { alert('评论失败') }
}

function formatTime(dateStr) {
  const date = new Date(dateStr)
  const now = new Date()
  const diff = now - date
  if (diff < 60000) return '刚刚'
  if (diff < 3600000) return Math.floor(diff / 60000) + '分钟前'
  if (diff < 86400000) return Math.floor(diff / 3600000) + '小时前'
  if (diff < 604800000) return Math.floor(diff / 86400000) + '天前'
  return date.toLocaleDateString('zh-CN')
}

onMounted(() => {
  const savedToken = localStorage.getItem('forum_token')
  if (savedToken) {
    token.value = savedToken
    fetch(`${API_BASE}/auth/me`, { headers: { Authorization: `Bearer ${savedToken}` } })
      .then(res => { if (res.ok) return res.json(); throw new Error() })
      .then(data => { user.value = data; loadMyStats() })
      .catch(() => { localStorage.removeItem('forum_token'); token.value = '' })
  }
  loadPosts()
})

watch(currentCategory, () => loadPosts())
</script>

<style scoped>
.forum-page { min-height: calc(100vh - var(--vp-nav-height)); background: var(--vp-c-bg); }

.forum-nav {
  display: flex; justify-content: space-between; align-items: center;
  padding: 16px 32px; background: var(--vp-c-bg); border-bottom: 1px solid var(--vp-c-divider);
  position: sticky; top: var(--vp-nav-height); z-index: 10;
}
.nav-left { display: flex; align-items: center; gap: 32px; }
.forum-title { font-size: 22px; font-weight: 600; margin: 0; color: var(--vp-c-text-1); }
.nav-tabs { display: flex; gap: 4px; }
.tab-btn {
  padding: 8px 16px; background: transparent; border: none; border-radius: 8px;
  font-size: 14px; color: var(--vp-c-text-2); cursor: pointer; transition: all 0.2s;
}
.tab-btn:hover { background: var(--vp-c-bg-soft); }
.tab-btn.active { background: var(--vp-c-bg-soft); color: var(--vp-c-text-1); font-weight: 500; }
.nav-right { display: flex; align-items: center; gap: 12px; }

.btn-primary {
  display: flex; align-items: center; gap: 6px; padding: 10px 20px;
  background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%); color: #fff;
  border: none; border-radius: 10px; font-size: 14px; font-weight: 500; cursor: pointer;
  transition: all 0.2s; box-shadow: 0 2px 8px rgba(224, 122, 61, 0.3);
}
.btn-primary:hover { transform: translateY(-1px); box-shadow: 0 4px 12px rgba(224, 122, 61, 0.4); }
.btn-primary.btn-sm { padding: 8px 16px; font-size: 13px; }
.btn-secondary {
  padding: 10px 20px; background: var(--vp-c-bg-soft); color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider); border-radius: 10px; font-size: 14px; cursor: pointer;
}
.btn-logout { padding: 8px 12px; background: transparent; border: none; color: var(--vp-c-text-3); font-size: 13px; cursor: pointer; }
.btn-logout:hover { color: var(--vp-c-text-1); }

.forum-content { display: flex; max-width: 1400px; margin: 0 auto; padding: 24px 32px; gap: 32px; }
.sidebar { width: 240px; flex-shrink: 0; }
.sidebar-section { background: var(--vp-c-bg-soft); border-radius: 16px; padding: 20px; margin-bottom: 20px; }
.sidebar-section h3 { font-size: 13px; font-weight: 600; color: var(--vp-c-text-2); text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 16px; }
.category-list { display: flex; flex-direction: column; gap: 4px; }
.category-item {
  display: flex; align-items: center; gap: 10px; padding: 10px 12px; background: transparent;
  border: none; border-radius: 10px; font-size: 14px; color: var(--vp-c-text-2); cursor: pointer; text-align: left;
}
.category-item:hover { background: var(--vp-c-bg); }
.category-item.active { background: var(--vp-c-bg); color: var(--vp-c-text-1); font-weight: 500; }
.category-count { margin-left: auto; font-size: 12px; color: var(--vp-c-text-3); }

.main-content { flex: 1; min-width: 0; }
.content-header { display: flex; gap: 16px; margin-bottom: 24px; }
.search-box {
  flex: 1; display: flex; align-items: center; gap: 10px; padding: 12px 16px;
  background: var(--vp-c-bg-soft); border-radius: 12px; border: 1px solid transparent;
}
.search-box:focus-within { border-color: var(--vp-c-brand-1); background: var(--vp-c-bg); }
.search-box svg { color: var(--vp-c-text-3); }
.search-box input { flex: 1; background: transparent; border: none; outline: none; font-size: 14px; color: var(--vp-c-text-1); }
.sort-options select { padding: 12px 16px; background: var(--vp-c-bg-soft); border: 1px solid transparent; border-radius: 12px; font-size: 14px; color: var(--vp-c-text-1); cursor: pointer; }

.posts-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
.post-card {
  background: var(--vp-c-bg-soft); border-radius: 16px; padding: 20px; cursor: pointer;
  transition: all 0.2s; border: 1px solid transparent;
}
.post-card:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08); border-color: var(--vp-c-divider); }
.card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
.card-category { padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; color: #fff; }
.card-time { font-size: 12px; color: var(--vp-c-text-3); }
.card-title { font-size: 16px; font-weight: 600; color: var(--vp-c-text-1); margin: 0 0 8px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-excerpt { font-size: 13px; color: var(--vp-c-text-2); line-height: 1.6; margin: 0 0 16px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.card-footer { display: flex; justify-content: space-between; align-items: center; }
.card-author { display: flex; align-items: center; gap: 8px; }
.avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 600; }
.avatar.large { width: 40px; height: 40px; font-size: 16px; }
.card-author span { font-size: 13px; color: var(--vp-c-text-2); }
.card-stats { display: flex; gap: 12px; }
.card-stats .stat { display: flex; align-items: center; gap: 4px; font-size: 12px; color: var(--vp-c-text-3); }

.empty-state { text-align: center; padding: 64px 24px; color: var(--vp-c-text-3); }
.empty-state svg { margin-bottom: 16px; opacity: 0.3; }
.empty-state p { margin-bottom: 20px; }
.loading-state { text-align: center; padding: 48px; }
.spinner { width: 32px; height: 32px; border: 3px solid var(--vp-c-divider); border-top-color: #e07a3d; border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto 12px; }
@keyframes spin { to { transform: rotate(360deg); } }

.pagination { display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 32px; }
.page-btn { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: var(--vp-c-bg-soft); border: none; border-radius: 10px; color: var(--vp-c-text-2); cursor: pointer; }
.page-btn:disabled { opacity: 0.3; cursor: not-allowed; }
.page-numbers { display: flex; gap: 4px; }
.page-num { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; background: transparent; border: none; border-radius: 10px; font-size: 14px; color: var(--vp-c-text-2); cursor: pointer; }
.page-num.active { background: #e07a3d; color: #fff; }

/* 个人主页样式 */
.profile-page { max-width: 900px; margin: 0 auto; padding: 32px 24px; }
.profile-header { margin-bottom: 32px; }
.profile-card {
  background: linear-gradient(135deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg-elv) 100%);
  border-radius: 20px; padding: 32px; display: flex; align-items: center; gap: 24px;
  border: 1px solid var(--vp-c-divider);
}
.profile-avatar {
  width: 80px; height: 80px; border-radius: 50%;
  background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%);
  color: #fff; display: flex; align-items: center; justify-content: center;
  font-size: 32px; font-weight: 700; flex-shrink: 0;
}
.profile-info { flex: 1; }
.profile-name { font-size: 24px; font-weight: 700; margin: 0 0 4px; color: var(--vp-c-text-1); }
.profile-email { font-size: 14px; color: var(--vp-c-text-2); margin: 0 0 8px; }
.profile-joined { font-size: 13px; color: var(--vp-c-text-3); margin: 0; }
.profile-stats { display: flex; gap: 32px; }
.profile-stat { text-align: center; }
.stat-num { display: block; font-size: 28px; font-weight: 700; color: var(--vp-c-text-1); }
.stat-text { font-size: 13px; color: var(--vp-c-text-3); }

.profile-content { }
.profile-section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
.profile-section-header h3 { font-size: 18px; font-weight: 600; margin: 0; color: var(--vp-c-text-1); }

.my-posts-list { display: flex; flex-direction: column; gap: 16px; }
.my-post-item {
  background: var(--vp-c-bg-soft); border-radius: 16px; padding: 20px; cursor: pointer;
  transition: all 0.2s; border: 1px solid transparent;
}
.my-post-item:hover { border-color: var(--vp-c-divider); transform: translateX(4px); }
.my-post-main { margin-bottom: 12px; }
.my-post-category { display: inline-block; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 500; color: #fff; margin-bottom: 8px; }
.my-post-title { font-size: 17px; font-weight: 600; color: var(--vp-c-text-1); margin: 0 0 8px; }
.my-post-excerpt { font-size: 14px; color: var(--vp-c-text-2); line-height: 1.6; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.my-post-meta { display: flex; justify-content: space-between; align-items: center; }
.my-post-time { font-size: 13px; color: var(--vp-c-text-3); }
.my-post-stats { display: flex; gap: 16px; font-size: 13px; color: var(--vp-c-text-3); }

/* 帖子详情 */
.post-detail-view { max-width: 800px; margin: 0 auto; padding: 24px 32px; }
.btn-back { display: inline-flex; align-items: center; gap: 6px; padding: 10px 16px; background: var(--vp-c-bg-soft); border: none; border-radius: 10px; font-size: 14px; color: var(--vp-c-text-2); cursor: pointer; margin-bottom: 24px; }
.detail-card { background: var(--vp-c-bg-soft); border-radius: 20px; padding: 32px; margin-bottom: 24px; }
.detail-header { margin-bottom: 24px; }
.detail-category { display: inline-block; padding: 6px 14px; border-radius: 8px; font-size: 13px; font-weight: 500; color: #fff; margin-bottom: 16px; }
.detail-title { font-size: 28px; font-weight: 700; color: var(--vp-c-text-1); margin: 0 0 20px; line-height: 1.3; }
.detail-meta { display: flex; justify-content: space-between; align-items: center; }
.author-info { display: flex; align-items: center; gap: 12px; }
.author-text { display: flex; flex-direction: column; gap: 2px; }
.author-name { font-size: 14px; font-weight: 500; color: var(--vp-c-text-1); }
.post-date { font-size: 12px; color: var(--vp-c-text-3); }
.detail-stats { display: flex; gap: 16px; font-size: 13px; color: var(--vp-c-text-3); }
.detail-body { font-size: 15px; line-height: 1.8; color: var(--vp-c-text-1); padding: 24px 0; border-top: 1px solid var(--vp-c-divider); }
.detail-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid var(--vp-c-divider); }
.btn-like { display: flex; align-items: center; gap: 8px; padding: 12px 24px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 12px; font-size: 14px; color: var(--vp-c-text-2); cursor: pointer; }
.btn-like:hover { border-color: #e07a3d; color: #e07a3d; }
.btn-like.liked { background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%); border-color: transparent; color: #fff; }
.like-count { font-weight: 600; }
.btn-delete { padding: 10px 16px; background: transparent; border: 1px solid #ef4444; border-radius: 10px; font-size: 13px; color: #ef4444; cursor: pointer; }
.btn-delete:hover { background: #ef4444; color: #fff; }

/* 评论区 */
.comments-section { background: var(--vp-c-bg-soft); border-radius: 20px; padding: 32px; }
.section-title { display: flex; align-items: center; gap: 10px; font-size: 18px; font-weight: 600; margin: 0 0 24px; }
.comment-count { padding: 4px 10px; background: var(--vp-c-bg); border-radius: 20px; font-size: 13px; font-weight: 500; color: var(--vp-c-text-2); }
.comment-editor { display: flex; gap: 12px; margin-bottom: 32px; }
.editor-avatar { width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%); color: #fff; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 600; flex-shrink: 0; }
.editor-input { flex: 1; }
.editor-input textarea { width: 100%; padding: 14px 16px; background: var(--vp-c-bg); border: 1px solid var(--vp-c-divider); border-radius: 12px; font-size: 14px; color: var(--vp-c-text-1); resize: vertical; outline: none; }
.editor-input textarea:focus { border-color: #e07a3d; }
.btn-submit { margin-top: 10px; padding: 10px 20px; background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%); border: none; border-radius: 10px; font-size: 14px; color: #fff; cursor: pointer; }
.btn-submit:disabled { opacity: 0.5; cursor: not-allowed; }
.login-prompt { text-align: center; padding: 24px; background: var(--vp-c-bg); border-radius: 12px; margin-bottom: 24px; }
.login-prompt p { margin: 0 0 12px; color: var(--vp-c-text-2); }
.comments-list { display: flex; flex-direction: column; gap: 20px; }
.comment-card { display: flex; gap: 12px; }
.comment-avatar { width: 36px; height: 36px; border-radius: 50%; background: var(--vp-c-bg); color: var(--vp-c-text-2); display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 600; flex-shrink: 0; }
.comment-body { flex: 1; }
.comment-header { display: flex; align-items: center; gap: 10px; margin-bottom: 6px; }
.comment-author { font-size: 14px; font-weight: 500; color: var(--vp-c-text-1); }
.comment-time { font-size: 12px; color: var(--vp-c-text-3); }
.comment-text { font-size: 14px; color: var(--vp-c-text-2); line-height: 1.6; margin: 0; }
.no-comments { text-align: center; padding: 32px; color: var(--vp-c-text-3); }

/* 弹窗 */
.modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; z-index: 1000; padding: 20px; }
.modal-card { background: var(--vp-c-bg); border-radius: 20px; padding: 32px; width: 100%; max-width: 420px; position: relative; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); }
.modal-large { max-width: 560px; }
.modal-close { position: absolute; top: 20px; right: 20px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--vp-c-bg-soft); border: none; border-radius: 8px; color: var(--vp-c-text-2); cursor: pointer; }
.modal-header { margin-bottom: 28px; }
.modal-header h2 { font-size: 24px; font-weight: 700; margin: 0 0 8px; color: var(--vp-c-text-1); }
.modal-header p { font-size: 14px; color: var(--vp-c-text-2); margin: 0; }
.auth-form, .post-form { display: flex; flex-direction: column; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 13px; font-weight: 500; color: var(--vp-c-text-2); }
.form-group input, .form-group textarea { padding: 14px 16px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 12px; font-size: 14px; color: var(--vp-c-text-1); outline: none; }
.form-group input:focus, .form-group textarea:focus { border-color: #e07a3d; background: var(--vp-c-bg); }
.category-select { display: flex; flex-wrap: wrap; gap: 8px; }
.cat-option { display: flex; align-items: center; gap: 6px; padding: 8px 14px; background: var(--vp-c-bg-soft); border: 1px solid var(--vp-c-divider); border-radius: 10px; font-size: 13px; color: var(--vp-c-text-2); cursor: pointer; }
.cat-option.selected { background: #e07a3d; border-color: #e07a3d; color: #fff; }
.btn-auth { padding: 14px; background: linear-gradient(135deg, #e07a3d 0%, #d35f1e 100%); border: none; border-radius: 12px; font-size: 15px; font-weight: 500; color: #fff; cursor: pointer; margin-top: 8px; }
.btn-auth:disabled { opacity: 0.5; cursor: not-allowed; }
.auth-switch { text-align: center; margin-top: 20px; font-size: 14px; color: var(--vp-c-text-2); }
.auth-switch a { color: #e07a3d; font-weight: 500; text-decoration: none; }

@media (max-width: 900px) {
  .forum-content { flex-direction: column; padding: 16px; }
  .sidebar { width: 100%; }
  .category-list { flex-direction: row; flex-wrap: wrap; }
  .posts-grid { grid-template-columns: 1fr; }
  .profile-card { flex-direction: column; text-align: center; }
  .profile-stats { justify-content: center; }
}
@media (max-width: 640px) {
  .forum-nav { flex-direction: column; gap: 16px; padding: 16px; }
  .nav-left { flex-direction: column; gap: 12px; width: 100%; }
  .nav-tabs { width: 100%; }
  .tab-btn { flex: 1; text-align: center; }
  .nav-right { width: 100%; justify-content: center; }
  .post-detail-view { padding: 16px; }
  .detail-card, .comments-section { padding: 20px; }
  .detail-title { font-size: 22px; }
}
</style>
