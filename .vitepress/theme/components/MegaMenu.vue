<template>
  <div class="mega-menu-wrapper">
    <button 
      class="mega-menu-trigger" 
      :class="{ active: isOpen }"
      @click="toggleMenu"
    >
      文档
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- 遮罩层 -->
    <div 
      class="mega-menu-overlay" 
      :class="{ visible: isOpen }"
      @click="closeMenu"
    ></div>

    <!-- Mega Menu 面板 -->
    <div class="mega-menu-panel" :class="{ open: isOpen }">
      <div class="mega-menu-content">
        <!-- 左侧分类 -->
        <div class="mega-menu-categories">
          <div 
            v-for="category in categories" 
            :key="category.id"
            class="mega-menu-category"
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
        <div class="mega-menu-items">
          <div 
            v-for="group in currentItems" 
            :key="group.title"
            class="mega-menu-item-group"
          >
            <h3>{{ group.title }}</h3>
            <ul class="mega-menu-item-list">
              <li v-for="item in group.items" :key="item.link">
                <a :href="item.link" @click="closeMenu">{{ item.text }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isOpen = ref(false)
const activeCategory = ref('frontend')

const categories = [
  { id: 'frontend', name: '前端开发' },
  { id: 'backend', name: '后端开发' },
  { id: 'mobile', name: '移动开发' },
  { id: 'database', name: '数据库' },
  { id: 'ai', name: 'AI/数据' },
  { id: 'devops', name: '运维部署' },
  { id: 'other', name: '其他方向' }
]

const menuData = {
  frontend: [
    {
      title: '基础',
      items: [
        { text: '入门基础', link: '/docs/frontend/basics/web-intro' },
        { text: 'HTML', link: '/docs/frontend/html/01-intro' },
        { text: 'CSS 基础', link: '/docs/frontend/css/basics/01-intro' },
        { text: 'CSS 布局', link: '/docs/frontend/css/layout/01-display' },
        { text: 'CSS 响应式', link: '/docs/frontend/css/responsive/01-media-queries' }
      ]
    },
    {
      title: 'JavaScript',
      items: [
        { text: 'JS 基础', link: '/docs/frontend/javascript/basics/01-intro' },
        { text: 'ES6+', link: '/docs/frontend/javascript/es6/01-let-const' },
        { text: 'DOM', link: '/docs/frontend/javascript/dom/01-dom-intro' },
        { text: '异步编程', link: '/docs/frontend/javascript/async/01-callbacks' },
        { text: 'JS 进阶', link: '/docs/frontend/javascript/advanced/01-this' }
      ]
    },
    {
      title: 'TypeScript',
      items: [
        { text: 'TS 入门', link: '/docs/frontend/typescript/basics/01-intro' }
      ]
    },
    {
      title: 'React',
      items: [
        { text: 'React 基础', link: '/docs/frontend/react/basics/01-intro' },
        { text: 'React Hooks', link: '/docs/frontend/react/hooks/01-useState' }
      ]
    },
    {
      title: 'Vue',
      items: [
        { text: 'Vue 基础', link: '/docs/frontend/vue/basics/01-intro' },
        { text: '组合式 API', link: '/docs/frontend/vue/composition/01-setup' }
      ]
    },
    {
      title: '工程化 & 进阶',
      items: [
        { text: '工程化', link: '/docs/frontend/engineering/package-managers/01-npm' },
        { text: '进阶专题', link: '/docs/frontend/advanced/performance/01-metrics' }
      ]
    }
  ],
  backend: [
    {
      title: '后端基础',
      items: [
        { text: '后端概述', link: '/docs/backend/basics/01-intro' },
        { text: 'HTTP 协议', link: '/docs/backend/basics/02-http' },
        { text: 'RESTful API', link: '/docs/backend/basics/03-restful' }
      ]
    },
    {
      title: 'Node.js',
      items: [
        { text: 'Node.js 基础', link: '/docs/backend/nodejs/basics/01-intro' },
        { text: 'Express', link: '/docs/backend/nodejs/express/01-intro' },
        { text: 'NestJS', link: '/docs/backend/nodejs/nestjs/01-intro' }
      ]
    },
    {
      title: 'Python',
      items: [
        { text: 'Python 基础', link: '/docs/backend/python/basics/01-intro' },
        { text: 'Django', link: '/docs/backend/python/django/01-intro' },
        { text: 'FastAPI', link: '/docs/backend/python/fastapi/01-intro' }
      ]
    },
    {
      title: 'Java',
      items: [
        { text: 'Java 基础', link: '/docs/backend/java/basics/01-intro' },
        { text: 'Java OOP', link: '/docs/backend/java/oop/01-classes' },
        { text: 'Spring Boot', link: '/docs/backend/java/springboot/01-intro' },
        { text: 'MyBatis', link: '/docs/backend/java/mybatis/01-intro' }
      ]
    },
    {
      title: 'Go',
      items: [
        { text: 'Go 基础', link: '/docs/backend/go/basics/01-intro' },
        { text: 'Go 并发', link: '/docs/backend/go/advanced/04-goroutines' },
        { text: 'Gin', link: '/docs/backend/go/gin/01-intro' }
      ]
    },
    {
      title: '系统设计',
      items: [
        { text: '设计模式', link: '/docs/backend/architecture/design-patterns/01-intro' },
        { text: '微服务', link: '/docs/backend/architecture/microservices/01-intro' },
        { text: '消息队列', link: '/docs/backend/architecture/message-queue/01-intro' },
        { text: '缓存策略', link: '/docs/backend/architecture/caching/01-intro' }
      ]
    }
  ],
  mobile: [
    {
      title: 'iOS 开发',
      items: [
        { text: 'Swift', link: '/docs/mobile/ios/swift' },
        { text: 'SwiftUI', link: '/docs/mobile/ios/swiftui' },
        { text: 'UIKit', link: '/docs/mobile/ios/uikit' }
      ]
    },
    {
      title: 'Android 开发',
      items: [
        { text: 'Kotlin', link: '/docs/mobile/android/kotlin' },
        { text: 'Jetpack Compose', link: '/docs/mobile/android/compose' },
        { text: 'Android SDK', link: '/docs/mobile/android/sdk' }
      ]
    },
    {
      title: '跨平台',
      items: [
        { text: 'React Native', link: '/docs/mobile/cross-platform/react-native' },
        { text: 'Flutter', link: '/docs/mobile/cross-platform/flutter' },
        { text: 'uni-app', link: '/docs/mobile/cross-platform/uniapp' }
      ]
    },
    {
      title: '小程序',
      items: [
        { text: '微信小程序', link: '/docs/mobile/miniprogram/wechat' },
        { text: '支付宝小程序', link: '/docs/mobile/miniprogram/alipay' },
        { text: 'Taro 框架', link: '/docs/mobile/miniprogram/taro' }
      ]
    }
  ],
  database: [
    {
      title: '数据库基础',
      items: [
        { text: '数据库概述', link: '/docs/database/basics/01-intro' },
        { text: '关系型 vs NoSQL', link: '/docs/database/basics/02-relational-vs-nosql' }
      ]
    },
    {
      title: 'SQL',
      items: [
        { text: 'SQL 基础', link: '/docs/database/sql/basics/01-intro' },
        { text: 'SQL 连接', link: '/docs/database/sql/joins/01-intro' },
        { text: 'SQL 进阶', link: '/docs/database/sql/advanced/01-subqueries' }
      ]
    },
    {
      title: 'MySQL',
      items: [
        { text: 'MySQL 基础', link: '/docs/database/mysql/basics/01-intro' },
        { text: 'MySQL 索引', link: '/docs/database/mysql/index/01-intro' },
        { text: 'MySQL 优化', link: '/docs/database/mysql/optimization/01-explain' },
        { text: 'MySQL 进阶', link: '/docs/database/mysql/advanced/01-storage-engines' }
      ]
    },
    {
      title: 'PostgreSQL',
      items: [
        { text: 'PG 基础', link: '/docs/database/postgresql/basics/01-intro' }
      ]
    },
    {
      title: 'MongoDB',
      items: [
        { text: 'MongoDB 基础', link: '/docs/database/mongodb/basics/01-intro' }
      ]
    },
    {
      title: 'Redis',
      items: [
        { text: 'Redis 基础', link: '/docs/database/redis/basics/01-intro' },
        { text: 'Redis 实战', link: '/docs/database/redis/practice/01-caching' }
      ]
    },
    {
      title: 'Elasticsearch',
      items: [
        { text: 'ES 基础', link: '/docs/database/elasticsearch/basics/01-intro' }
      ]
    }
  ],
  ai: [
    {
      title: '机器学习',
      items: [
        { text: '机器学习基础', link: '/docs/ai/ml/basics' },
        { text: 'Scikit-learn', link: '/docs/ai/ml/sklearn' },
        { text: '监督学习', link: '/docs/ai/ml/supervised' },
        { text: '无监督学习', link: '/docs/ai/ml/unsupervised' }
      ]
    },
    {
      title: '深度学习',
      items: [
        { text: 'PyTorch', link: '/docs/ai/dl/pytorch' },
        { text: 'TensorFlow', link: '/docs/ai/dl/tensorflow' },
        { text: 'CNN 卷积网络', link: '/docs/ai/dl/cnn' },
        { text: 'Transformer', link: '/docs/ai/dl/transformer' }
      ]
    },
    {
      title: '数据分析',
      items: [
        { text: 'Pandas', link: '/docs/ai/data/pandas' },
        { text: 'NumPy', link: '/docs/ai/data/numpy' },
        { text: '数据可视化', link: '/docs/ai/data/visualization' },
        { text: 'Tableau', link: '/docs/ai/data/tableau' }
      ]
    },
    {
      title: '大数据处理',
      items: [
        { text: 'Hadoop', link: '/docs/ai/bigdata/hadoop' },
        { text: 'Spark', link: '/docs/ai/bigdata/spark' },
        { text: 'Flink', link: '/docs/ai/bigdata/flink' },
        { text: 'Airflow', link: '/docs/ai/bigdata/airflow' }
      ]
    }
  ],
  devops: [
    {
      title: '容器化',
      items: [
        { text: 'Docker 入门', link: '/docs/devops/docker/basics' },
        { text: 'Docker Compose', link: '/docs/devops/docker/compose' },
        { text: 'Kubernetes', link: '/docs/devops/kubernetes/basics' },
        { text: 'Istio 服务网格', link: '/docs/devops/kubernetes/istio' }
      ]
    },
    {
      title: 'CI/CD',
      items: [
        { text: 'Git 工作流', link: '/docs/devops/git/workflow' },
        { text: 'GitHub Actions', link: '/docs/devops/ci-cd/github-actions' },
        { text: 'Jenkins', link: '/docs/devops/ci-cd/jenkins' },
        { text: 'GitLab CI', link: '/docs/devops/ci-cd/gitlab-ci' }
      ]
    },
    {
      title: '云平台',
      items: [
        { text: 'AWS 入门', link: '/docs/devops/cloud/aws' },
        { text: '阿里云', link: '/docs/devops/cloud/aliyun' },
        { text: 'Terraform', link: '/docs/devops/cloud/terraform' }
      ]
    },
    {
      title: '监控运维',
      items: [
        { text: 'Prometheus', link: '/docs/devops/monitor/prometheus' },
        { text: 'Grafana', link: '/docs/devops/monitor/grafana' },
        { text: 'ELK Stack', link: '/docs/devops/monitor/elk' }
      ]
    }
  ],
  other: [
    {
      title: '游戏开发',
      items: [
        { text: 'Unity 入门', link: '/docs/other/game/unity' },
        { text: 'Unreal Engine', link: '/docs/other/game/unreal' },
        { text: 'Shader 编程', link: '/docs/other/game/shader' }
      ]
    },
    {
      title: '区块链',
      items: [
        { text: '区块链基础', link: '/docs/other/blockchain/basics' },
        { text: 'Solidity', link: '/docs/other/blockchain/solidity' },
        { text: 'Web3.js', link: '/docs/other/blockchain/web3' }
      ]
    },
    {
      title: '嵌入式开发',
      items: [
        { text: 'C/C++ 基础', link: '/docs/other/embedded/c-cpp' },
        { text: 'STM32', link: '/docs/other/embedded/stm32' },
        { text: 'FreeRTOS', link: '/docs/other/embedded/freertos' }
      ]
    },
    {
      title: '安全',
      items: [
        { text: '网络安全基础', link: '/docs/other/security/basics' },
        { text: 'Web 安全', link: '/docs/other/security/web' },
        { text: '渗透测试', link: '/docs/other/security/pentest' }
      ]
    },
    {
      title: '桌面应用',
      items: [
        { text: 'Electron', link: '/docs/other/desktop/electron' },
        { text: 'Qt', link: '/docs/other/desktop/qt' },
        { text: 'Flutter Desktop', link: '/docs/other/desktop/flutter' }
      ]
    }
  ]
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

// ESC 键关闭菜单
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>
