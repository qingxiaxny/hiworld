# 文档目录结构

## 一、前端开发 (frontend)

### 1. 入门基础

```
docs/frontend/basics/
├── web-intro.md               # Web 开发概述
├── dev-environment.md         # 开发环境搭建
├── browser-devtools.md        # 浏览器开发者工具
└── vscode-setup.md            # VS Code 配置
```

### 2. HTML

```
docs/frontend/html/
├── 01-intro.md                # HTML 简介与文档结构
├── 02-text-elements.md        # 文本元素（标题、段落、列表）
├── 03-links-images.md         # 链接与图片
├── 04-tables.md               # 表格
├── 05-forms.md                # 表单基础
├── 06-form-validation.md      # 表单验证
├── 07-semantic-tags.md        # 语义化标签
├── 08-multimedia.md           # 音频与视频
├── 09-canvas-basics.md        # Canvas 基础
├── 10-svg-basics.md           # SVG 基础
└── 11-accessibility.md        # 无障碍访问
```

### 3. CSS

```
docs/frontend/css/
├── basics/
│   ├── 01-intro.md            # CSS 简介与引入方式
│   ├── 02-selectors.md        # 选择器详解
│   ├── 03-specificity.md      # 优先级与继承
│   ├── 04-box-model.md        # 盒模型
│   ├── 05-colors-units.md     # 颜色与单位
│   ├── 06-text-fonts.md       # 文本与字体
│   └── 07-backgrounds.md      # 背景样式
├── layout/
│   ├── 01-display.md          # display 属性
│   ├── 02-position.md         # 定位（position）
│   ├── 03-float.md            # 浮动与清除
│   ├── 04-flexbox.md          # Flexbox 布局
│   ├── 05-flexbox-practice.md # Flexbox 实战
│   ├── 06-grid.md             # Grid 布局
│   ├── 07-grid-practice.md    # Grid 实战
│   └── 08-multi-column.md     # 多列布局
├── responsive/
│   ├── 01-media-queries.md    # 媒体查询
│   ├── 02-mobile-first.md     # 移动优先设计
│   ├── 03-viewport.md         # 视口与适配
│   └── 04-responsive-images.md # 响应式图片
├── advanced/
│   ├── 01-transitions.md      # 过渡动画
│   ├── 02-animations.md       # CSS 动画
│   ├── 03-transforms.md       # 变换（2D/3D）
│   ├── 04-variables.md        # CSS 变量
│   ├── 05-calc-functions.md   # calc() 与函数
│   └── 06-pseudo-elements.md  # 伪类与伪元素
└── practice/
    ├── 01-common-layouts.md   # 常见布局实现
    ├── 02-component-styles.md # 组件样式
    └── 03-css-reset.md        # CSS 重置与规范化
```


### 4. JavaScript

```
docs/frontend/javascript/
├── basics/
│   ├── 01-intro.md            # JavaScript 简介
│   ├── 02-variables.md        # 变量与数据类型
│   ├── 03-operators.md        # 运算符
│   ├── 04-conditionals.md     # 条件语句
│   ├── 05-loops.md            # 循环语句
│   ├── 06-functions.md        # 函数基础
│   ├── 07-scope.md            # 作用域与闭包
│   ├── 08-arrays.md           # 数组
│   ├── 09-objects.md          # 对象
│   └── 10-strings.md          # 字符串方法
├── es6/
│   ├── 01-let-const.md        # let 与 const
│   ├── 02-arrow-functions.md  # 箭头函数
│   ├── 03-template-literals.md # 模板字符串
│   ├── 04-destructuring.md    # 解构赋值
│   ├── 05-spread-rest.md      # 展开与剩余运算符
│   ├── 06-classes.md          # 类与继承
│   ├── 07-modules.md          # 模块化（import/export）
│   ├── 08-symbols.md          # Symbol
│   ├── 09-iterators.md        # 迭代器与生成器
│   ├── 10-map-set.md          # Map 与 Set
│   └── 11-proxy-reflect.md    # Proxy 与 Reflect
├── dom/
│   ├── 01-dom-intro.md        # DOM 概述
│   ├── 02-selecting.md        # 元素选择
│   ├── 03-manipulation.md     # 元素操作
│   ├── 04-events.md           # 事件基础
│   ├── 05-event-delegation.md # 事件委托
│   ├── 06-forms.md            # 表单操作
│   └── 07-bom.md              # BOM 浏览器对象
├── async/
│   ├── 01-callbacks.md        # 回调函数
│   ├── 02-promises.md         # Promise
│   ├── 03-promise-methods.md  # Promise 方法
│   ├── 04-async-await.md      # async/await
│   ├── 05-fetch-api.md        # Fetch API
│   ├── 06-error-handling.md   # 错误处理
│   └── 07-event-loop.md       # 事件循环机制
├── advanced/
│   ├── 01-this.md             # this 指向
│   ├── 02-prototype.md        # 原型与原型链
│   ├── 03-inheritance.md      # 继承模式
│   ├── 04-execution-context.md # 执行上下文
│   ├── 05-memory.md           # 内存管理与垃圾回收
│   ├── 06-regexp.md           # 正则表达式
│   └── 07-design-patterns.md  # 设计模式
└── practice/
    ├── 01-debugging.md        # 调试技巧
    ├── 02-performance.md      # 性能优化
    └── 03-best-practices.md   # 最佳实践
```

### 5. TypeScript

```
docs/frontend/typescript/
├── basics/
│   ├── 01-intro.md            # TypeScript 简介
│   ├── 02-setup.md            # 环境搭建
│   ├── 03-basic-types.md      # 基础类型
│   ├── 04-type-inference.md   # 类型推断
│   ├── 05-interfaces.md       # 接口
│   ├── 06-type-aliases.md     # 类型别名
│   └── 07-union-intersection.md # 联合与交叉类型
├── advanced/
│   ├── 01-generics.md         # 泛型基础
│   ├── 02-generic-constraints.md # 泛型约束
│   ├── 03-utility-types.md    # 工具类型
│   ├── 04-conditional-types.md # 条件类型
│   ├── 05-mapped-types.md     # 映射类型
│   ├── 06-decorators.md       # 装饰器
│   └── 07-declaration-files.md # 声明文件
└── practice/
    ├── 01-with-react.md       # TypeScript + React
    ├── 02-with-vue.md         # TypeScript + Vue
    └── 03-config.md           # tsconfig 配置详解
```


### 6. React

```
docs/frontend/react/
├── basics/
│   ├── 01-intro.md            # React 简介
│   ├── 02-create-app.md       # 创建 React 项目
│   ├── 03-jsx.md              # JSX 语法
│   ├── 04-components.md       # 组件基础
│   ├── 05-props.md            # Props 传参
│   ├── 06-state.md            # State 状态
│   ├── 07-events.md           # 事件处理
│   ├── 08-conditional.md      # 条件渲染
│   ├── 09-lists.md            # 列表渲染
│   └── 10-forms.md            # 表单处理
├── hooks/
│   ├── 01-useState.md         # useState
│   ├── 02-useEffect.md        # useEffect
│   ├── 03-useContext.md       # useContext
│   ├── 04-useRef.md           # useRef
│   ├── 05-useMemo.md          # useMemo
│   ├── 06-useCallback.md      # useCallback
│   ├── 07-useReducer.md       # useReducer
│   ├── 08-custom-hooks.md     # 自定义 Hook
│   └── 09-hooks-rules.md      # Hooks 规则
├── advanced/
│   ├── 01-lifecycle.md        # 生命周期
│   ├── 02-context.md          # Context 深入
│   ├── 03-hoc.md              # 高阶组件
│   ├── 04-render-props.md     # Render Props
│   ├── 05-portals.md          # Portals
│   ├── 06-error-boundaries.md # 错误边界
│   ├── 07-suspense.md         # Suspense 与懒加载
│   └── 08-server-components.md # Server Components
├── state/
│   ├── 01-state-lifting.md    # 状态提升
│   ├── 02-redux-intro.md      # Redux 入门
│   ├── 03-redux-toolkit.md    # Redux Toolkit
│   ├── 04-zustand.md          # Zustand
│   └── 05-jotai.md            # Jotai
├── router/
│   ├── 01-intro.md            # React Router 入门
│   ├── 02-nested-routes.md    # 嵌套路由
│   ├── 03-params.md           # 路由参数
│   ├── 04-navigation.md       # 编程式导航
│   └── 05-guards.md           # 路由守卫
└── practice/
    ├── 01-project-structure.md # 项目结构
    ├── 02-styling.md          # 样式方案
    ├── 03-testing.md          # 测试
    └── 04-performance.md      # 性能优化
```

### 7. Vue

```
docs/frontend/vue/
├── basics/
│   ├── 01-intro.md            # Vue 3 简介
│   ├── 02-create-app.md       # 创建 Vue 项目
│   ├── 03-template.md         # 模板语法
│   ├── 04-directives.md       # 指令
│   ├── 05-computed.md         # 计算属性
│   ├── 06-watchers.md         # 侦听器
│   ├── 07-class-style.md      # Class 与 Style 绑定
│   ├── 08-conditional.md      # 条件渲染
│   ├── 09-lists.md            # 列表渲染
│   └── 10-events.md           # 事件处理
├── components/
│   ├── 01-basics.md           # 组件基础
│   ├── 02-props.md            # Props
│   ├── 03-emits.md            # 自定义事件
│   ├── 04-slots.md            # 插槽
│   ├── 05-provide-inject.md   # Provide/Inject
│   ├── 06-dynamic.md          # 动态组件
│   └── 07-async.md            # 异步组件
├── composition/
│   ├── 01-setup.md            # setup 函数
│   ├── 02-ref-reactive.md     # ref 与 reactive
│   ├── 03-computed-watch.md   # computed 与 watch
│   ├── 04-lifecycle.md        # 生命周期钩子
│   ├── 05-composables.md      # 组合式函数
│   └── 06-script-setup.md     # script setup 语法糖
├── state/
│   ├── 01-pinia-intro.md      # Pinia 入门
│   ├── 02-pinia-state.md      # State 管理
│   ├── 03-pinia-getters.md    # Getters
│   ├── 04-pinia-actions.md    # Actions
│   └── 05-pinia-plugins.md    # 插件
├── router/
│   ├── 01-intro.md            # Vue Router 入门
│   ├── 02-routes.md           # 路由配置
│   ├── 03-params.md           # 路由参数
│   ├── 04-guards.md           # 导航守卫
│   └── 05-lazy-loading.md     # 路由懒加载
└── practice/
    ├── 01-project-structure.md # 项目结构
    ├── 02-styling.md          # 样式方案
    └── 03-performance.md      # 性能优化
```


### 8. 工程化

```
docs/frontend/engineering/
├── package-managers/
│   ├── 01-npm.md              # npm 使用
│   ├── 02-yarn.md             # Yarn
│   └── 03-pnpm.md             # pnpm
├── build-tools/
│   ├── 01-webpack-intro.md    # Webpack 入门
│   ├── 02-webpack-config.md   # Webpack 配置
│   ├── 03-webpack-loaders.md  # Loaders
│   ├── 04-webpack-plugins.md  # Plugins
│   ├── 05-webpack-optimize.md # 优化策略
│   ├── 06-vite-intro.md       # Vite 入门
│   ├── 07-vite-config.md      # Vite 配置
│   └── 08-rollup.md           # Rollup
├── code-quality/
│   ├── 01-eslint.md           # ESLint 配置
│   ├── 02-prettier.md         # Prettier
│   ├── 03-husky.md            # Git Hooks
│   └── 04-lint-staged.md      # lint-staged
├── testing/
│   ├── 01-jest-intro.md       # Jest 入门
│   ├── 02-unit-testing.md     # 单元测试
│   ├── 03-vitest.md           # Vitest
│   ├── 04-testing-library.md  # Testing Library
│   └── 05-e2e-cypress.md      # Cypress E2E 测试
└── deployment/
    ├── 01-build.md            # 构建与打包
    ├── 02-cdn.md              # CDN 部署
    └── 03-ci-cd.md            # CI/CD 集成
```

### 9. 进阶专题

```
docs/frontend/advanced/
├── performance/
│   ├── 01-metrics.md          # 性能指标
│   ├── 02-loading.md          # 加载优化
│   ├── 03-rendering.md        # 渲染优化
│   ├── 04-caching.md          # 缓存策略
│   └── 05-monitoring.md       # 性能监控
├── ssr/
│   ├── 01-intro.md            # SSR 概述
│   ├── 02-nextjs.md           # Next.js
│   ├── 03-nuxt.md             # Nuxt
│   └── 04-ssg.md              # 静态站点生成
├── micro-frontend/
│   ├── 01-intro.md            # 微前端概述
│   ├── 02-qiankun.md          # qiankun
│   └── 03-module-federation.md # Module Federation
├── pwa/
│   ├── 01-intro.md            # PWA 概述
│   ├── 02-service-worker.md   # Service Worker
│   └── 03-manifest.md         # Web App Manifest
└── security/
    ├── 01-xss.md              # XSS 防护
    ├── 02-csrf.md             # CSRF 防护
    └── 03-https.md            # HTTPS 与安全
```

---

## 二、后端开发 (backend)

### 1. 编程基础

```
docs/backend/basics/
├── 01-intro.md                # 后端开发概述
├── 02-http.md                 # HTTP 协议
├── 03-restful.md              # RESTful API 设计
├── 04-api-design.md           # API 设计规范
└── 05-authentication.md       # 认证与授权概述
```


### 2. Node.js

```
docs/backend/nodejs/
├── basics/
│   ├── 01-intro.md            # Node.js 简介
│   ├── 02-setup.md            # 环境搭建
│   ├── 03-modules.md          # 模块系统
│   ├── 04-npm.md              # npm 包管理
│   ├── 05-fs.md               # 文件系统
│   ├── 06-path.md             # 路径处理
│   ├── 07-events.md           # 事件机制
│   ├── 08-streams.md          # 流（Streams）
│   ├── 09-buffer.md           # Buffer
│   └── 10-process.md          # 进程与子进程
├── http/
│   ├── 01-http-module.md      # HTTP 模块
│   ├── 02-create-server.md    # 创建服务器
│   ├── 03-routing.md          # 路由处理
│   └── 04-middleware.md       # 中间件概念
├── express/
│   ├── 01-intro.md            # Express 入门
│   ├── 02-routing.md          # 路由
│   ├── 03-middleware.md       # 中间件
│   ├── 04-request.md          # 请求处理
│   ├── 05-response.md         # 响应处理
│   ├── 06-static.md           # 静态文件
│   ├── 07-template.md         # 模板引擎
│   ├── 08-error-handling.md   # 错误处理
│   └── 09-project-structure.md # 项目结构
├── koa/
│   ├── 01-intro.md            # Koa 入门
│   ├── 02-middleware.md       # 洋葱模型
│   ├── 03-context.md          # Context 对象
│   └── 04-router.md           # 路由
├── nestjs/
│   ├── 01-intro.md            # NestJS 入门
│   ├── 02-modules.md          # 模块
│   ├── 03-controllers.md      # 控制器
│   ├── 04-providers.md        # 提供者
│   ├── 05-dependency-injection.md # 依赖注入
│   ├── 06-pipes.md            # 管道
│   ├── 07-guards.md           # 守卫
│   ├── 08-interceptors.md     # 拦截器
│   └── 09-typeorm.md          # TypeORM 集成
├── database/
│   ├── 01-mysql-driver.md     # MySQL 连接
│   ├── 02-mongodb-driver.md   # MongoDB 连接
│   ├── 03-sequelize.md        # Sequelize ORM
│   ├── 04-prisma.md           # Prisma
│   └── 05-redis.md            # Redis 操作
├── auth/
│   ├── 01-session.md          # Session 认证
│   ├── 02-jwt.md              # JWT 认证
│   ├── 03-oauth.md            # OAuth 2.0
│   └── 04-passport.md         # Passport.js
└── advanced/
    ├── 01-cluster.md          # 集群
    ├── 02-pm2.md              # PM2 进程管理
    ├── 03-websocket.md        # WebSocket
    ├── 04-graphql.md          # GraphQL
    └── 05-microservices.md    # 微服务
```

### 3. Python

```
docs/backend/python/
├── basics/
│   ├── 01-intro.md            # Python 简介
│   ├── 02-setup.md            # 环境搭建
│   ├── 03-syntax.md           # 基础语法
│   ├── 04-data-types.md       # 数据类型
│   ├── 05-control-flow.md     # 控制流程
│   ├── 06-functions.md        # 函数
│   ├── 07-modules.md          # 模块与包
│   ├── 08-oop.md              # 面向对象
│   ├── 09-exceptions.md       # 异常处理
│   └── 10-file-io.md          # 文件操作
├── advanced/
│   ├── 01-decorators.md       # 装饰器
│   ├── 02-generators.md       # 生成器
│   ├── 03-context-managers.md # 上下文管理器
│   ├── 04-metaclasses.md      # 元类
│   └── 05-async.md            # 异步编程
├── django/
│   ├── 01-intro.md            # Django 入门
│   ├── 02-project-setup.md    # 项目创建
│   ├── 03-models.md           # 模型
│   ├── 04-views.md            # 视图
│   ├── 05-templates.md        # 模板
│   ├── 06-urls.md             # URL 配置
│   ├── 07-forms.md            # 表单
│   ├── 08-admin.md            # Admin 后台
│   ├── 09-orm.md              # ORM 详解
│   ├── 10-auth.md             # 认证系统
│   ├── 11-rest-framework.md   # Django REST Framework
│   └── 12-deployment.md       # 部署
├── flask/
│   ├── 01-intro.md            # Flask 入门
│   ├── 02-routing.md          # 路由
│   ├── 03-templates.md        # Jinja2 模板
│   ├── 04-forms.md            # 表单处理
│   ├── 05-database.md         # 数据库集成
│   ├── 06-blueprints.md       # 蓝图
│   └── 07-extensions.md       # 常用扩展
├── fastapi/
│   ├── 01-intro.md            # FastAPI 入门
│   ├── 02-path-params.md      # 路径参数
│   ├── 03-query-params.md     # 查询参数
│   ├── 04-request-body.md     # 请求体
│   ├── 05-pydantic.md         # Pydantic 模型
│   ├── 06-dependency.md       # 依赖注入
│   ├── 07-security.md         # 安全认证
│   ├── 08-database.md         # 数据库操作
│   └── 09-async.md            # 异步处理
└── tools/
    ├── 01-pip.md              # pip 包管理
    ├── 02-virtualenv.md       # 虚拟环境
    ├── 03-poetry.md           # Poetry
    └── 04-pytest.md           # 测试
```


### 4. Java

```
docs/backend/java/
├── basics/
│   ├── 01-intro.md            # Java 简介
│   ├── 02-setup.md            # 环境搭建
│   ├── 03-syntax.md           # 基础语法
│   ├── 04-data-types.md       # 数据类型
│   ├── 05-operators.md        # 运算符
│   ├── 06-control-flow.md     # 控制流程
│   ├── 07-arrays.md           # 数组
│   ├── 08-methods.md          # 方法
│   └── 09-strings.md          # 字符串
├── oop/
│   ├── 01-classes.md          # 类与对象
│   ├── 02-encapsulation.md    # 封装
│   ├── 03-inheritance.md      # 继承
│   ├── 04-polymorphism.md     # 多态
│   ├── 05-abstraction.md      # 抽象类与接口
│   ├── 06-inner-classes.md    # 内部类
│   └── 07-enums.md            # 枚举
├── advanced/
│   ├── 01-exceptions.md       # 异常处理
│   ├── 02-generics.md         # 泛型
│   ├── 03-collections.md      # 集合框架
│   ├── 04-streams.md          # Stream API
│   ├── 05-lambda.md           # Lambda 表达式
│   ├── 06-io.md               # IO 流
│   ├── 07-nio.md              # NIO
│   ├── 08-multithreading.md   # 多线程
│   ├── 09-concurrency.md      # 并发编程
│   ├── 10-reflection.md       # 反射
│   └── 11-annotations.md      # 注解
├── jvm/
│   ├── 01-architecture.md     # JVM 架构
│   ├── 02-memory.md           # 内存模型
│   ├── 03-gc.md               # 垃圾回收
│   ├── 04-classloader.md      # 类加载机制
│   └── 05-tuning.md           # JVM 调优
├── spring/
│   ├── 01-intro.md            # Spring 简介
│   ├── 02-ioc.md              # IoC 容器
│   ├── 03-di.md               # 依赖注入
│   ├── 04-aop.md              # AOP 面向切面
│   └── 05-beans.md            # Bean 管理
├── springboot/
│   ├── 01-intro.md            # Spring Boot 入门
│   ├── 02-quickstart.md       # 快速开始
│   ├── 03-configuration.md    # 配置文件
│   ├── 04-controllers.md      # 控制器
│   ├── 05-services.md         # 服务层
│   ├── 06-repositories.md     # 数据访问层
│   ├── 07-validation.md       # 数据校验
│   ├── 08-exception.md        # 异常处理
│   ├── 09-security.md         # Spring Security
│   ├── 10-actuator.md         # Actuator 监控
│   └── 11-testing.md          # 测试
├── mybatis/
│   ├── 01-intro.md            # MyBatis 入门
│   ├── 02-configuration.md    # 配置
│   ├── 03-mapper.md           # Mapper 映射
│   ├── 04-dynamic-sql.md      # 动态 SQL
│   ├── 05-cache.md            # 缓存
│   └── 06-mybatis-plus.md     # MyBatis-Plus
└── tools/
    ├── 01-maven.md            # Maven
    ├── 02-gradle.md           # Gradle
    └── 03-junit.md            # JUnit 测试
```

### 5. Go

```
docs/backend/go/
├── basics/
│   ├── 01-intro.md            # Go 简介
│   ├── 02-setup.md            # 环境搭建
│   ├── 03-syntax.md           # 基础语法
│   ├── 04-data-types.md       # 数据类型
│   ├── 05-control-flow.md     # 控制流程
│   ├── 06-functions.md        # 函数
│   ├── 07-arrays-slices.md    # 数组与切片
│   ├── 08-maps.md             # Map
│   ├── 09-structs.md          # 结构体
│   └── 10-pointers.md         # 指针
├── advanced/
│   ├── 01-interfaces.md       # 接口
│   ├── 02-methods.md          # 方法
│   ├── 03-errors.md           # 错误处理
│   ├── 04-goroutines.md       # Goroutine
│   ├── 05-channels.md         # Channel
│   ├── 06-select.md           # Select
│   ├── 07-sync.md             # 同步原语
│   ├── 08-context.md          # Context
│   └── 09-reflection.md       # 反射
├── gin/
│   ├── 01-intro.md            # Gin 入门
│   ├── 02-routing.md          # 路由
│   ├── 03-middleware.md       # 中间件
│   ├── 04-request.md          # 请求处理
│   ├── 05-response.md         # 响应处理
│   ├── 06-validation.md       # 参数校验
│   └── 07-project-structure.md # 项目结构
├── gorm/
│   ├── 01-intro.md            # GORM 入门
│   ├── 02-models.md           # 模型定义
│   ├── 03-crud.md             # CRUD 操作
│   ├── 04-associations.md     # 关联关系
│   ├── 05-transactions.md     # 事务
│   └── 06-hooks.md            # 钩子
└── tools/
    ├── 01-modules.md          # Go Modules
    ├── 02-testing.md          # 测试
    └── 03-profiling.md        # 性能分析
```


### 6. 系统设计

```
docs/backend/architecture/
├── design-patterns/
│   ├── 01-intro.md            # 设计模式概述
│   ├── 02-singleton.md        # 单例模式
│   ├── 03-factory.md          # 工厂模式
│   ├── 04-builder.md          # 建造者模式
│   ├── 05-prototype.md        # 原型模式
│   ├── 06-adapter.md          # 适配器模式
│   ├── 07-decorator.md        # 装饰器模式
│   ├── 08-proxy.md            # 代理模式
│   ├── 09-observer.md         # 观察者模式
│   ├── 10-strategy.md         # 策略模式
│   └── 11-template.md         # 模板方法模式
├── microservices/
│   ├── 01-intro.md            # 微服务概述
│   ├── 02-service-split.md    # 服务拆分
│   ├── 03-api-gateway.md      # API 网关
│   ├── 04-service-discovery.md # 服务发现
│   ├── 05-load-balancing.md   # 负载均衡
│   ├── 06-circuit-breaker.md  # 熔断器
│   ├── 07-config-center.md    # 配置中心
│   └── 08-distributed-tracing.md # 分布式追踪
├── message-queue/
│   ├── 01-intro.md            # 消息队列概述
│   ├── 02-rabbitmq.md         # RabbitMQ
│   ├── 03-kafka.md            # Kafka
│   ├── 04-rocketmq.md         # RocketMQ
│   └── 05-patterns.md         # 消息模式
├── caching/
│   ├── 01-intro.md            # 缓存概述
│   ├── 02-strategies.md       # 缓存策略
│   ├── 03-redis-cache.md      # Redis 缓存
│   ├── 04-local-cache.md      # 本地缓存
│   └── 05-cache-problems.md   # 缓存问题（穿透、击穿、雪崩）
├── distributed/
│   ├── 01-cap.md              # CAP 理论
│   ├── 02-consistency.md      # 一致性
│   ├── 03-distributed-lock.md # 分布式锁
│   ├── 04-distributed-id.md   # 分布式 ID
│   └── 05-distributed-tx.md   # 分布式事务
└── high-availability/
    ├── 01-intro.md            # 高可用概述
    ├── 02-redundancy.md       # 冗余设计
    ├── 03-failover.md         # 故障转移
    └── 04-disaster-recovery.md # 容灾备份
```

---

## 三、数据库 (database)

### 1. 数据库基础

```
docs/database/basics/
├── 01-intro.md                # 数据库概述
├── 02-relational-vs-nosql.md  # 关系型 vs NoSQL
├── 03-data-modeling.md        # 数据建模
├── 04-normalization.md        # 范式化
└── 05-er-diagram.md           # ER 图设计
```

### 2. SQL 基础

```
docs/database/sql/
├── basics/
│   ├── 01-intro.md            # SQL 简介
│   ├── 02-ddl.md              # DDL（CREATE, ALTER, DROP）
│   ├── 03-dml.md              # DML（INSERT, UPDATE, DELETE）
│   ├── 04-select.md           # SELECT 查询
│   ├── 05-where.md            # WHERE 条件
│   ├── 06-order-limit.md      # ORDER BY 与 LIMIT
│   ├── 07-aggregate.md        # 聚合函数
│   ├── 08-group-by.md         # GROUP BY 与 HAVING
│   └── 09-distinct.md         # DISTINCT 去重
├── joins/
│   ├── 01-intro.md            # 连接概述
│   ├── 02-inner-join.md       # INNER JOIN
│   ├── 03-left-join.md        # LEFT JOIN
│   ├── 04-right-join.md       # RIGHT JOIN
│   ├── 05-full-join.md        # FULL JOIN
│   ├── 06-cross-join.md       # CROSS JOIN
│   └── 07-self-join.md        # 自连接
├── advanced/
│   ├── 01-subqueries.md       # 子查询
│   ├── 02-union.md            # UNION
│   ├── 03-case.md             # CASE 表达式
│   ├── 04-window-functions.md # 窗口函数
│   ├── 05-cte.md              # CTE 公共表表达式
│   ├── 06-views.md            # 视图
│   ├── 07-stored-procedures.md # 存储过程
│   ├── 08-triggers.md         # 触发器
│   └── 09-transactions.md     # 事务
└── practice/
    ├── 01-common-queries.md   # 常用查询
    ├── 02-interview-questions.md # 面试题
    └── 03-best-practices.md   # 最佳实践
```


### 3. MySQL

```
docs/database/mysql/
├── basics/
│   ├── 01-intro.md            # MySQL 简介
│   ├── 02-installation.md     # 安装配置
│   ├── 03-data-types.md       # 数据类型
│   ├── 04-constraints.md      # 约束
│   ├── 05-crud.md             # CRUD 操作
│   └── 06-functions.md        # 内置函数
├── index/
│   ├── 01-intro.md            # 索引概述
│   ├── 02-btree.md            # B+Tree 索引
│   ├── 03-index-types.md      # 索引类型
│   ├── 04-composite-index.md  # 复合索引
│   ├── 05-covering-index.md   # 覆盖索引
│   ├── 06-index-optimization.md # 索引优化
│   └── 07-index-failure.md    # 索引失效场景
├── optimization/
│   ├── 01-explain.md          # EXPLAIN 分析
│   ├── 02-slow-query.md       # 慢查询分析
│   ├── 03-query-optimization.md # 查询优化
│   ├── 04-table-optimization.md # 表结构优化
│   └── 05-configuration.md    # 配置优化
├── advanced/
│   ├── 01-storage-engines.md  # 存储引擎
│   ├── 02-innodb.md           # InnoDB 详解
│   ├── 03-locks.md            # 锁机制
│   ├── 04-mvcc.md             # MVCC
│   ├── 05-transaction-isolation.md # 事务隔离级别
│   ├── 06-binlog.md           # Binlog
│   └── 07-replication.md      # 主从复制
├── sharding/
│   ├── 01-intro.md            # 分库分表概述
│   ├── 02-vertical.md         # 垂直拆分
│   ├── 03-horizontal.md       # 水平拆分
│   ├── 04-sharding-key.md     # 分片键选择
│   └── 05-middleware.md       # 分库分表中间件
└── practice/
    ├── 01-backup-restore.md   # 备份恢复
    ├── 02-monitoring.md       # 监控
    └── 03-troubleshooting.md  # 故障排查
```

### 4. PostgreSQL

```
docs/database/postgresql/
├── basics/
│   ├── 01-intro.md            # PostgreSQL 简介
│   ├── 02-installation.md     # 安装配置
│   ├── 03-data-types.md       # 数据类型
│   ├── 04-crud.md             # CRUD 操作
│   └── 05-psql.md             # psql 命令行
├── advanced/
│   ├── 01-json.md             # JSON/JSONB
│   ├── 02-arrays.md           # 数组类型
│   ├── 03-full-text-search.md # 全文搜索
│   ├── 04-partitioning.md     # 分区表
│   ├── 05-inheritance.md      # 表继承
│   └── 06-extensions.md       # 扩展
├── performance/
│   ├── 01-explain.md          # EXPLAIN 分析
│   ├── 02-indexes.md          # 索引优化
│   └── 03-vacuum.md           # VACUUM
└── replication/
    ├── 01-streaming.md        # 流复制
    └── 02-logical.md          # 逻辑复制
```

### 5. MongoDB

```
docs/database/mongodb/
├── basics/
│   ├── 01-intro.md            # MongoDB 简介
│   ├── 02-installation.md     # 安装配置
│   ├── 03-concepts.md         # 核心概念
│   ├── 04-crud.md             # CRUD 操作
│   ├── 05-query.md            # 查询操作
│   └── 06-update.md           # 更新操作
├── advanced/
│   ├── 01-aggregation.md      # 聚合管道
│   ├── 02-indexes.md          # 索引
│   ├── 03-schema-design.md    # Schema 设计
│   ├── 04-transactions.md     # 事务
│   └── 05-change-streams.md   # Change Streams
├── replication/
│   ├── 01-replica-set.md      # 副本集
│   └── 02-sharding.md         # 分片
└── practice/
    ├── 01-mongoose.md         # Mongoose ODM
    └── 02-best-practices.md   # 最佳实践
```

### 6. Redis

```
docs/database/redis/
├── basics/
│   ├── 01-intro.md            # Redis 简介
│   ├── 02-installation.md     # 安装配置
│   ├── 03-strings.md          # String 类型
│   ├── 04-lists.md            # List 类型
│   ├── 05-sets.md             # Set 类型
│   ├── 06-hashes.md           # Hash 类型
│   ├── 07-sorted-sets.md      # Sorted Set 类型
│   └── 08-commands.md         # 常用命令
├── advanced/
│   ├── 01-pub-sub.md          # 发布订阅
│   ├── 02-transactions.md     # 事务
│   ├── 03-lua.md              # Lua 脚本
│   ├── 04-streams.md          # Streams
│   ├── 05-persistence.md      # 持久化（RDB/AOF）
│   └── 06-memory.md           # 内存管理
├── cluster/
│   ├── 01-sentinel.md         # 哨兵模式
│   └── 02-cluster.md          # 集群模式
└── practice/
    ├── 01-caching.md          # 缓存应用
    ├── 02-session.md          # Session 存储
    ├── 03-rate-limiting.md    # 限流
    ├── 04-distributed-lock.md # 分布式锁
    └── 05-message-queue.md    # 消息队列
```


### 7. Elasticsearch

```
docs/database/elasticsearch/
├── basics/
│   ├── 01-intro.md            # Elasticsearch 简介
│   ├── 02-installation.md     # 安装配置
│   ├── 03-concepts.md         # 核心概念
│   ├── 04-crud.md             # CRUD 操作
│   └── 05-mapping.md          # 映射
├── search/
│   ├── 01-query-dsl.md        # Query DSL
│   ├── 02-full-text.md        # 全文搜索
│   ├── 03-term-queries.md     # 精确查询
│   ├── 04-compound.md         # 复合查询
│   ├── 05-aggregations.md     # 聚合
│   └── 06-highlighting.md     # 高亮
├── advanced/
│   ├── 01-analyzers.md        # 分析器
│   ├── 02-chinese.md          # 中文分词
│   ├── 03-index-templates.md  # 索引模板
│   └── 04-aliases.md          # 别名
└── cluster/
    ├── 01-architecture.md     # 集群架构
    └── 02-sharding.md         # 分片策略
```

---

## 四、移动开发 (mobile)

```
docs/mobile/
├── ios/
│   ├── swift.md
│   ├── swiftui.md
│   └── uikit.md
├── android/
│   ├── kotlin.md
│   ├── compose.md
│   └── sdk.md
├── cross-platform/
│   ├── react-native.md
│   ├── flutter.md
│   └── uniapp.md
└── miniprogram/
    ├── wechat.md
    ├── alipay.md
    └── taro.md
```

---

## 五、AI/数据 (ai)

```
docs/ai/
├── ml/
│   ├── basics.md
│   ├── sklearn.md
│   ├── supervised.md
│   └── unsupervised.md
├── dl/
│   ├── pytorch.md
│   ├── tensorflow.md
│   ├── cnn.md
│   └── transformer.md
├── data/
│   ├── pandas.md
│   ├── numpy.md
│   ├── visualization.md
│   └── tableau.md
└── bigdata/
    ├── hadoop.md
    ├── spark.md
    ├── flink.md
    └── airflow.md
```

---

## 六、运维部署 (devops)

```
docs/devops/
├── docker/
│   ├── basics.md
│   └── compose.md
├── kubernetes/
│   ├── basics.md
│   └── istio.md
├── git/
│   └── workflow.md
├── ci-cd/
│   ├── github-actions.md
│   ├── jenkins.md
│   └── gitlab-ci.md
├── cloud/
│   ├── aws.md
│   ├── aliyun.md
│   └── terraform.md
└── monitor/
    ├── prometheus.md
    ├── grafana.md
    └── elk.md
```

---

## 七、其他方向 (other)

```
docs/other/
├── game/
│   ├── unity.md
│   ├── unreal.md
│   └── shader.md
├── blockchain/
│   ├── basics.md
│   ├── solidity.md
│   └── web3.md
├── embedded/
│   ├── c-cpp.md
│   ├── stm32.md
│   └── freertos.md
├── security/
│   ├── basics.md
│   ├── web.md
│   └── pentest.md
└── desktop/
    ├── electron.md
    ├── qt.md
    └── flutter.md
```
