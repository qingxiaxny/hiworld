// 每个职业对应的学习文档路径
export const careerPaths = {
  '前端工程师': [
    '/docs/frontend/html/',
    '/docs/frontend/css/',
    '/docs/frontend/javascript/',
    '/docs/frontend/typescript/',
    '/docs/frontend/react/',
    '/docs/frontend/vue/',
    '/docs/frontend/engineering/'
  ],
  '后端工程师': [
    '/docs/backend/basics/',
    '/docs/backend/java/',
    '/docs/backend/nodejs/',
    '/docs/backend/python/',
    '/docs/backend/go/',
    '/docs/database/sql/',
    '/docs/database/mysql/',
    '/docs/backend/architecture/'
  ],
  '全栈工程师': [
    '/docs/frontend/html/',
    '/docs/frontend/css/',
    '/docs/frontend/javascript/',
    '/docs/frontend/react/',
    '/docs/backend/nodejs/',
    '/docs/database/sql/',
    '/docs/database/mysql/',
    '/docs/devops/docker/'
  ],
  'AI 工程师': [
    '/docs/backend/python/basics/',
    '/docs/ai/data/',
    '/docs/ai/ml/',
    '/docs/ai/dl/',
    '/docs/ai/bigdata/'
  ],
  '移动端开发': [
    '/docs/frontend/javascript/',
    '/docs/frontend/react/',
    '/docs/mobile/cross-platform/',
    '/docs/mobile/android/',
    '/docs/mobile/ios/'
  ],
  '算法工程师': [
    '/docs/backend/java/basics/',
    '/docs/backend/python/basics/',
    '/docs/ai/ml/',
    '/docs/ai/dl/'
  ],
  'UI/UX 设计师': [
    '/docs/frontend/html/',
    '/docs/frontend/css/',
    '/docs/frontend/basics/'
  ],
  '数据工程师': [
    '/docs/backend/python/basics/',
    '/docs/database/sql/',
    '/docs/database/mysql/',
    '/docs/database/postgresql/',
    '/docs/ai/bigdata/',
    '/docs/ai/data/'
  ],
  'DevOps 工程师': [
    '/docs/devops/git/',
    '/docs/devops/docker/',
    '/docs/devops/kubernetes/',
    '/docs/devops/ci-cd/',
    '/docs/devops/cloud/',
    '/docs/devops/monitor/'
  ],
  '测试工程师': [
    '/docs/backend/basics/',
    '/docs/frontend/engineering/testing/',
    '/docs/backend/java/tools/',
    '/docs/backend/python/tools/'
  ],
  '架构师': [
    '/docs/backend/architecture/design-patterns/',
    '/docs/backend/architecture/microservices/',
    '/docs/backend/architecture/distributed/',
    '/docs/backend/architecture/high-availability/',
    '/docs/backend/architecture/caching/',
    '/docs/backend/architecture/message-queue/'
  ],
  '产品经理': [
    '/docs/frontend/basics/',
    '/docs/backend/basics/',
    '/docs/database/basics/'
  ],
  '游戏开发者': [
    '/docs/frontend/javascript/',
    '/docs/other/game/'
  ],
  '区块链开发': [
    '/docs/backend/nodejs/',
    '/docs/other/blockchain/'
  ],
  '机器学习工程师': [
    '/docs/backend/python/basics/',
    '/docs/ai/data/',
    '/docs/ai/ml/',
    '/docs/ai/dl/'
  ],
  '数据分析师': [
    '/docs/database/sql/',
    '/docs/backend/python/basics/',
    '/docs/ai/data/'
  ],
  '云计算工程师': [
    '/docs/devops/docker/',
    '/docs/devops/kubernetes/',
    '/docs/devops/cloud/'
  ],
  '安全工程师': [
    '/docs/backend/basics/',
    '/docs/other/security/',
    '/docs/frontend/advanced/security/'
  ],
  '嵌入式开发': [
    '/docs/other/embedded/'
  ],
  '桌面应用开发': [
    '/docs/frontend/javascript/',
    '/docs/other/desktop/'
  ],
  '小程序开发': [
    '/docs/frontend/javascript/',
    '/docs/frontend/vue/',
    '/docs/mobile/miniprogram/'
  ],
  '技术写作者': [
    '/docs/frontend/basics/',
    '/docs/backend/basics/',
    '/docs/devops/git/'
  ],
  '开源贡献者': [
    '/docs/devops/git/',
    '/docs/frontend/engineering/code-quality/'
  ],
  '独立开发者': [
    '/docs/frontend/html/',
    '/docs/frontend/css/',
    '/docs/frontend/javascript/',
    '/docs/backend/nodejs/',
    '/docs/database/mysql/',
    '/docs/devops/docker/'
  ]
}

// 获取某个路径下的所有文档数量（预估）
export const pathDocCounts = {
  '/docs/frontend/html/': 11,
  '/docs/frontend/css/basics/': 7,
  '/docs/frontend/css/layout/': 8,
  '/docs/frontend/css/responsive/': 4,
  '/docs/frontend/css/advanced/': 6,
  '/docs/frontend/css/practice/': 3,
  '/docs/frontend/css/': 28,
  '/docs/frontend/javascript/basics/': 10,
  '/docs/frontend/javascript/es6/': 11,
  '/docs/frontend/javascript/dom/': 7,
  '/docs/frontend/javascript/async/': 7,
  '/docs/frontend/javascript/advanced/': 7,
  '/docs/frontend/javascript/practice/': 3,
  '/docs/frontend/javascript/': 45,
  '/docs/frontend/typescript/basics/': 7,
  '/docs/frontend/typescript/advanced/': 7,
  '/docs/frontend/typescript/practice/': 3,
  '/docs/frontend/typescript/': 17,
  '/docs/frontend/react/basics/': 10,
  '/docs/frontend/react/hooks/': 9,
  '/docs/frontend/react/router/': 5,
  '/docs/frontend/react/state/': 5,
  '/docs/frontend/react/advanced/': 8,
  '/docs/frontend/react/practice/': 4,
  '/docs/frontend/react/': 41,
  '/docs/frontend/vue/basics/': 10,
  '/docs/frontend/vue/components/': 7,
  '/docs/frontend/vue/composition/': 6,
  '/docs/frontend/vue/router/': 5,
  '/docs/frontend/vue/state/': 5,
  '/docs/frontend/vue/practice/': 3,
  '/docs/frontend/vue/': 36,
  '/docs/frontend/engineering/package-managers/': 3,
  '/docs/frontend/engineering/build-tools/': 8,
  '/docs/frontend/engineering/code-quality/': 4,
  '/docs/frontend/engineering/testing/': 5,
  '/docs/frontend/engineering/deployment/': 3,
  '/docs/frontend/engineering/': 23,
  '/docs/frontend/basics/': 4,
  '/docs/frontend/advanced/performance/': 5,
  '/docs/frontend/advanced/security/': 3,
  '/docs/frontend/advanced/ssr/': 4,
  '/docs/frontend/advanced/pwa/': 3,
  '/docs/frontend/advanced/micro-frontend/': 3,
  '/docs/backend/basics/': 5,
  '/docs/backend/java/basics/': 9,
  '/docs/backend/java/oop/': 7,
  '/docs/backend/java/advanced/': 11,
  '/docs/backend/java/jvm/': 5,
  '/docs/backend/java/spring/': 5,
  '/docs/backend/java/springboot/': 11,
  '/docs/backend/java/mybatis/': 6,
  '/docs/backend/java/tools/': 3,
  '/docs/backend/java/': 57,
  '/docs/backend/nodejs/basics/': 10,
  '/docs/backend/nodejs/http/': 4,
  '/docs/backend/nodejs/express/': 9,
  '/docs/backend/nodejs/koa/': 4,
  '/docs/backend/nodejs/nestjs/': 9,
  '/docs/backend/nodejs/database/': 5,
  '/docs/backend/nodejs/auth/': 4,
  '/docs/backend/nodejs/advanced/': 5,
  '/docs/backend/nodejs/': 50,
  '/docs/backend/python/basics/': 10,
  '/docs/backend/python/advanced/': 5,
  '/docs/backend/python/flask/': 7,
  '/docs/backend/python/django/': 12,
  '/docs/backend/python/fastapi/': 9,
  '/docs/backend/python/tools/': 4,
  '/docs/backend/python/': 47,
  '/docs/backend/go/basics/': 10,
  '/docs/backend/go/advanced/': 9,
  '/docs/backend/go/gin/': 7,
  '/docs/backend/go/gorm/': 6,
  '/docs/backend/go/tools/': 3,
  '/docs/backend/go/': 35,
  '/docs/backend/architecture/design-patterns/': 11,
  '/docs/backend/architecture/microservices/': 8,
  '/docs/backend/architecture/distributed/': 5,
  '/docs/backend/architecture/high-availability/': 4,
  '/docs/backend/architecture/caching/': 5,
  '/docs/backend/architecture/message-queue/': 5,
  '/docs/backend/architecture/': 38,
  '/docs/database/basics/': 5,
  '/docs/database/sql/basics/': 9,
  '/docs/database/sql/joins/': 7,
  '/docs/database/sql/advanced/': 9,
  '/docs/database/sql/practice/': 3,
  '/docs/database/sql/': 28,
  '/docs/database/mysql/basics/': 6,
  '/docs/database/mysql/index/': 7,
  '/docs/database/mysql/advanced/': 7,
  '/docs/database/mysql/optimization/': 5,
  '/docs/database/mysql/sharding/': 5,
  '/docs/database/mysql/practice/': 3,
  '/docs/database/mysql/': 33,
  '/docs/database/postgresql/basics/': 5,
  '/docs/database/postgresql/advanced/': 6,
  '/docs/database/postgresql/performance/': 3,
  '/docs/database/postgresql/replication/': 2,
  '/docs/database/postgresql/': 16,
  '/docs/database/redis/basics/': 8,
  '/docs/database/redis/advanced/': 6,
  '/docs/database/redis/cluster/': 2,
  '/docs/database/redis/practice/': 5,
  '/docs/database/redis/': 21,
  '/docs/database/mongodb/basics/': 6,
  '/docs/database/mongodb/advanced/': 5,
  '/docs/database/mongodb/replication/': 2,
  '/docs/database/mongodb/practice/': 2,
  '/docs/database/mongodb/': 15,
  '/docs/database/elasticsearch/basics/': 5,
  '/docs/database/elasticsearch/search/': 6,
  '/docs/database/elasticsearch/advanced/': 4,
  '/docs/database/elasticsearch/cluster/': 2,
  '/docs/database/elasticsearch/': 17,
  '/docs/devops/git/': 1,
  '/docs/devops/docker/': 2,
  '/docs/devops/kubernetes/': 2,
  '/docs/devops/ci-cd/': 3,
  '/docs/devops/cloud/': 3,
  '/docs/devops/monitor/': 3,
  '/docs/ai/data/': 4,
  '/docs/ai/ml/': 4,
  '/docs/ai/dl/': 4,
  '/docs/ai/bigdata/': 4,
  '/docs/mobile/android/': 3,
  '/docs/mobile/ios/': 3,
  '/docs/mobile/cross-platform/': 3,
  '/docs/mobile/miniprogram/': 3,
  '/docs/other/game/': 3,
  '/docs/other/blockchain/': 3,
  '/docs/other/security/': 3,
  '/docs/other/embedded/': 3,
  '/docs/other/desktop/': 3
}
