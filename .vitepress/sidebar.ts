export const sidebar = {
  // 前端开发 - 统一侧边栏
  '/docs/frontend/': [
    {
      text: '入门基础',
      collapsed: true,
      items: [
        { text: 'Web 开发概述', link: '/docs/frontend/basics/web-intro' },
        { text: '开发环境搭建', link: '/docs/frontend/basics/dev-environment' },
        { text: '浏览器开发者工具', link: '/docs/frontend/basics/browser-devtools' },
        { text: 'VS Code 配置', link: '/docs/frontend/basics/vscode-setup' },
      ]
    },
    {
      text: 'HTML',
      collapsed: true,
      items: [
        { text: '01. HTML 简介', link: '/docs/frontend/html/01-intro' },
        { text: '02. 文本元素', link: '/docs/frontend/html/02-text-elements' },
        { text: '03. 链接与图片', link: '/docs/frontend/html/03-links-images' },
        { text: '04. 表格', link: '/docs/frontend/html/04-tables' },
        { text: '05. 表单基础', link: '/docs/frontend/html/05-forms' },
        { text: '06. 表单验证', link: '/docs/frontend/html/06-form-validation' },
        { text: '07. 语义化标签', link: '/docs/frontend/html/07-semantic-tags' },
        { text: '08. 音频与视频', link: '/docs/frontend/html/08-multimedia' },
        { text: '09. Canvas 基础', link: '/docs/frontend/html/09-canvas-basics' },
        { text: '10. SVG 基础', link: '/docs/frontend/html/10-svg-basics' },
        { text: '11. 无障碍访问', link: '/docs/frontend/html/11-accessibility' },
      ]
    },
    {
      text: 'CSS 基础',
      collapsed: true,
      items: [
        { text: '01. CSS 简介', link: '/docs/frontend/css/basics/01-intro' },
        { text: '02. 选择器详解', link: '/docs/frontend/css/basics/02-selectors' },
        { text: '03. 优先级与继承', link: '/docs/frontend/css/basics/03-specificity' },
        { text: '04. 盒模型', link: '/docs/frontend/css/basics/04-box-model' },
        { text: '05. 颜色与单位', link: '/docs/frontend/css/basics/05-colors-units' },
        { text: '06. 文本与字体', link: '/docs/frontend/css/basics/06-text-fonts' },
        { text: '07. 背景样式', link: '/docs/frontend/css/basics/07-backgrounds' },
      ]
    },
    {
      text: 'CSS 布局',
      collapsed: true,
      items: [
        { text: '01. display 属性', link: '/docs/frontend/css/layout/01-display' },
        { text: '02. 定位', link: '/docs/frontend/css/layout/02-position' },
        { text: '03. 浮动与清除', link: '/docs/frontend/css/layout/03-float' },
        { text: '04. Flexbox', link: '/docs/frontend/css/layout/04-flexbox' },
        { text: '05. Flexbox 实战', link: '/docs/frontend/css/layout/05-flexbox-practice' },
        { text: '06. Grid', link: '/docs/frontend/css/layout/06-grid' },
        { text: '07. Grid 实战', link: '/docs/frontend/css/layout/07-grid-practice' },
        { text: '08. 多列布局', link: '/docs/frontend/css/layout/08-multi-column' },
      ]
    },
    {
      text: 'CSS 响应式',
      collapsed: true,
      items: [
        { text: '01. 媒体查询', link: '/docs/frontend/css/responsive/01-media-queries' },
        { text: '02. 移动优先', link: '/docs/frontend/css/responsive/02-mobile-first' },
        { text: '03. 视口与适配', link: '/docs/frontend/css/responsive/03-viewport' },
        { text: '04. 响应式图片', link: '/docs/frontend/css/responsive/04-responsive-images' },
      ]
    },
    {
      text: 'CSS 进阶',
      collapsed: true,
      items: [
        { text: '01. 过渡动画', link: '/docs/frontend/css/advanced/01-transitions' },
        { text: '02. CSS 动画', link: '/docs/frontend/css/advanced/02-animations' },
        { text: '03. 变换', link: '/docs/frontend/css/advanced/03-transforms' },
        { text: '04. CSS 变量', link: '/docs/frontend/css/advanced/04-variables' },
        { text: '05. calc() 函数', link: '/docs/frontend/css/advanced/05-calc-functions' },
        { text: '06. 伪类伪元素', link: '/docs/frontend/css/advanced/06-pseudo-elements' },
      ]
    },
    {
      text: 'JavaScript 基础',
      collapsed: true,
      items: [
        { text: '01. JS 简介', link: '/docs/frontend/javascript/basics/01-intro' },
        { text: '02. 变量与类型', link: '/docs/frontend/javascript/basics/02-variables' },
        { text: '03. 运算符', link: '/docs/frontend/javascript/basics/03-operators' },
        { text: '04. 条件语句', link: '/docs/frontend/javascript/basics/04-conditionals' },
        { text: '05. 循环语句', link: '/docs/frontend/javascript/basics/05-loops' },
        { text: '06. 函数', link: '/docs/frontend/javascript/basics/06-functions' },
        { text: '07. 作用域与闭包', link: '/docs/frontend/javascript/basics/07-scope' },
        { text: '08. 数组', link: '/docs/frontend/javascript/basics/08-arrays' },
        { text: '09. 对象', link: '/docs/frontend/javascript/basics/09-objects' },
        { text: '10. 字符串', link: '/docs/frontend/javascript/basics/10-strings' },
      ]
    },
    {
      text: 'ES6+',
      collapsed: true,
      items: [
        { text: '01. let 与 const', link: '/docs/frontend/javascript/es6/01-let-const' },
        { text: '02. 箭头函数', link: '/docs/frontend/javascript/es6/02-arrow-functions' },
        { text: '03. 模板字符串', link: '/docs/frontend/javascript/es6/03-template-literals' },
        { text: '04. 解构赋值', link: '/docs/frontend/javascript/es6/04-destructuring' },
        { text: '05. 展开运算符', link: '/docs/frontend/javascript/es6/05-spread-rest' },
        { text: '06. 类与继承', link: '/docs/frontend/javascript/es6/06-classes' },
        { text: '07. 模块化', link: '/docs/frontend/javascript/es6/07-modules' },
        { text: '08. Symbol', link: '/docs/frontend/javascript/es6/08-symbols' },
        { text: '09. 迭代器', link: '/docs/frontend/javascript/es6/09-iterators' },
        { text: '10. Map 与 Set', link: '/docs/frontend/javascript/es6/10-map-set' },
        { text: '11. Proxy', link: '/docs/frontend/javascript/es6/11-proxy-reflect' },
      ]
    },
    {
      text: 'DOM',
      collapsed: true,
      items: [
        { text: '01. DOM 概述', link: '/docs/frontend/javascript/dom/01-dom-intro' },
        { text: '02. 元素选择', link: '/docs/frontend/javascript/dom/02-selecting' },
        { text: '03. 元素操作', link: '/docs/frontend/javascript/dom/03-manipulation' },
        { text: '04. 事件基础', link: '/docs/frontend/javascript/dom/04-events' },
        { text: '05. 事件委托', link: '/docs/frontend/javascript/dom/05-event-delegation' },
        { text: '06. 表单操作', link: '/docs/frontend/javascript/dom/06-forms' },
        { text: '07. BOM', link: '/docs/frontend/javascript/dom/07-bom' },
      ]
    },
    {
      text: '异步编程',
      collapsed: true,
      items: [
        { text: '01. 回调函数', link: '/docs/frontend/javascript/async/01-callbacks' },
        { text: '02. Promise', link: '/docs/frontend/javascript/async/02-promises' },
        { text: '03. Promise 方法', link: '/docs/frontend/javascript/async/03-promise-methods' },
        { text: '04. async/await', link: '/docs/frontend/javascript/async/04-async-await' },
        { text: '05. Fetch API', link: '/docs/frontend/javascript/async/05-fetch-api' },
        { text: '06. 错误处理', link: '/docs/frontend/javascript/async/06-error-handling' },
        { text: '07. 事件循环', link: '/docs/frontend/javascript/async/07-event-loop' },
      ]
    },
    {
      text: 'JS 进阶',
      collapsed: true,
      items: [
        { text: '01. this 指向', link: '/docs/frontend/javascript/advanced/01-this' },
        { text: '02. 原型链', link: '/docs/frontend/javascript/advanced/02-prototype' },
        { text: '03. 继承模式', link: '/docs/frontend/javascript/advanced/03-inheritance' },
        { text: '04. 执行上下文', link: '/docs/frontend/javascript/advanced/04-execution-context' },
        { text: '05. 内存管理', link: '/docs/frontend/javascript/advanced/05-memory' },
        { text: '06. 正则表达式', link: '/docs/frontend/javascript/advanced/06-regexp' },
        { text: '07. 设计模式', link: '/docs/frontend/javascript/advanced/07-design-patterns' },
      ]
    },
    {
      text: 'TypeScript',
      collapsed: true,
      items: [
        { text: '01. TS 简介', link: '/docs/frontend/typescript/basics/01-intro' },
        { text: '02. 环境搭建', link: '/docs/frontend/typescript/basics/02-setup' },
        { text: '03. 基础类型', link: '/docs/frontend/typescript/basics/03-basic-types' },
        { text: '04. 类型推断', link: '/docs/frontend/typescript/basics/04-type-inference' },
        { text: '05. 接口', link: '/docs/frontend/typescript/basics/05-interfaces' },
        { text: '06. 类型别名', link: '/docs/frontend/typescript/basics/06-type-aliases' },
        { text: '07. 联合交叉类型', link: '/docs/frontend/typescript/basics/07-union-intersection' },
        { text: '08. 泛型', link: '/docs/frontend/typescript/advanced/01-generics' },
        { text: '09. 工具类型', link: '/docs/frontend/typescript/advanced/03-utility-types' },
        { text: '10. 装饰器', link: '/docs/frontend/typescript/advanced/06-decorators' },
      ]
    },
    {
      text: 'React',
      collapsed: true,
      items: [
        { text: '01. React 简介', link: '/docs/frontend/react/basics/01-intro' },
        { text: '02. 创建项目', link: '/docs/frontend/react/basics/02-create-app' },
        { text: '03. JSX', link: '/docs/frontend/react/basics/03-jsx' },
        { text: '04. 组件', link: '/docs/frontend/react/basics/04-components' },
        { text: '05. Props', link: '/docs/frontend/react/basics/05-props' },
        { text: '06. State', link: '/docs/frontend/react/basics/06-state' },
        { text: '07. 事件处理', link: '/docs/frontend/react/basics/07-events' },
        { text: '08. 条件渲染', link: '/docs/frontend/react/basics/08-conditional' },
        { text: '09. 列表渲染', link: '/docs/frontend/react/basics/09-lists' },
        { text: '10. 表单', link: '/docs/frontend/react/basics/10-forms' },
      ]
    },
    {
      text: 'React Hooks',
      collapsed: true,
      items: [
        { text: '01. useState', link: '/docs/frontend/react/hooks/01-useState' },
        { text: '02. useEffect', link: '/docs/frontend/react/hooks/02-useEffect' },
        { text: '03. useContext', link: '/docs/frontend/react/hooks/03-useContext' },
        { text: '04. useRef', link: '/docs/frontend/react/hooks/04-useRef' },
        { text: '05. useMemo', link: '/docs/frontend/react/hooks/05-useMemo' },
        { text: '06. useCallback', link: '/docs/frontend/react/hooks/06-useCallback' },
        { text: '07. useReducer', link: '/docs/frontend/react/hooks/07-useReducer' },
        { text: '08. 自定义 Hook', link: '/docs/frontend/react/hooks/08-custom-hooks' },
      ]
    },
    {
      text: 'Vue',
      collapsed: true,
      items: [
        { text: '01. Vue 3 简介', link: '/docs/frontend/vue/basics/01-intro' },
        { text: '02. 创建项目', link: '/docs/frontend/vue/basics/02-create-app' },
        { text: '03. 模板语法', link: '/docs/frontend/vue/basics/03-template' },
        { text: '04. 指令', link: '/docs/frontend/vue/basics/04-directives' },
        { text: '05. 计算属性', link: '/docs/frontend/vue/basics/05-computed' },
        { text: '06. 侦听器', link: '/docs/frontend/vue/basics/06-watchers' },
        { text: '07. Class 与 Style', link: '/docs/frontend/vue/basics/07-class-style' },
        { text: '08. 条件渲染', link: '/docs/frontend/vue/basics/08-conditional' },
        { text: '09. 列表渲染', link: '/docs/frontend/vue/basics/09-lists' },
        { text: '10. 事件处理', link: '/docs/frontend/vue/basics/10-events' },
      ]
    },
    {
      text: 'Vue 组合式 API',
      collapsed: true,
      items: [
        { text: '01. setup', link: '/docs/frontend/vue/composition/01-setup' },
        { text: '02. ref 与 reactive', link: '/docs/frontend/vue/composition/02-ref-reactive' },
        { text: '03. computed 与 watch', link: '/docs/frontend/vue/composition/03-computed-watch' },
        { text: '04. 生命周期', link: '/docs/frontend/vue/composition/04-lifecycle' },
        { text: '05. 组合式函数', link: '/docs/frontend/vue/composition/05-composables' },
        { text: '06. script setup', link: '/docs/frontend/vue/composition/06-script-setup' },
      ]
    },
    {
      text: '工程化',
      collapsed: true,
      items: [
        { text: '01. npm', link: '/docs/frontend/engineering/package-managers/01-npm' },
        { text: '02. Webpack', link: '/docs/frontend/engineering/build-tools/01-webpack-intro' },
        { text: '03. Vite', link: '/docs/frontend/engineering/build-tools/06-vite-intro' },
        { text: '04. ESLint', link: '/docs/frontend/engineering/code-quality/01-eslint' },
        { text: '05. Prettier', link: '/docs/frontend/engineering/code-quality/02-prettier' },
        { text: '06. Jest', link: '/docs/frontend/engineering/testing/01-jest-intro' },
        { text: '07. Vitest', link: '/docs/frontend/engineering/testing/03-vitest' },
      ]
    },
    {
      text: '进阶专题',
      collapsed: true,
      items: [
        { text: '01. 性能优化', link: '/docs/frontend/advanced/performance/01-metrics' },
        { text: '02. SSR 概述', link: '/docs/frontend/advanced/ssr/01-intro' },
        { text: '03. Next.js', link: '/docs/frontend/advanced/ssr/02-nextjs' },
        { text: '04. Nuxt', link: '/docs/frontend/advanced/ssr/03-nuxt' },
        { text: '05. 微前端', link: '/docs/frontend/advanced/micro-frontend/01-intro' },
        { text: '06. PWA', link: '/docs/frontend/advanced/pwa/01-intro' },
      ]
    },
  ],
  // 后端开发 - 统一侧边栏
  '/docs/backend/': [
    {
      text: '后端基础',
      collapsed: true,
      items: [
        { text: '01. 后端概述', link: '/docs/backend/basics/01-intro' },
        { text: '02. HTTP 协议', link: '/docs/backend/basics/02-http' },
        { text: '03. RESTful API', link: '/docs/backend/basics/03-restful' },
        { text: '04. API 设计', link: '/docs/backend/basics/04-api-design' },
        { text: '05. 认证授权', link: '/docs/backend/basics/05-authentication' },
      ]
    },
    {
      text: 'Node.js 基础',
      collapsed: true,
      items: [
        { text: '01. Node.js 简介', link: '/docs/backend/nodejs/basics/01-intro' },
        { text: '02. 环境搭建', link: '/docs/backend/nodejs/basics/02-setup' },
        { text: '03. 模块系统', link: '/docs/backend/nodejs/basics/03-modules' },
        { text: '04. npm', link: '/docs/backend/nodejs/basics/04-npm' },
        { text: '05. 文件系统', link: '/docs/backend/nodejs/basics/05-fs' },
        { text: '06. 路径处理', link: '/docs/backend/nodejs/basics/06-path' },
        { text: '07. 事件机制', link: '/docs/backend/nodejs/basics/07-events' },
        { text: '08. 流', link: '/docs/backend/nodejs/basics/08-streams' },
      ]
    },
    {
      text: 'Express',
      collapsed: true,
      items: [
        { text: '01. Express 入门', link: '/docs/backend/nodejs/express/01-intro' },
        { text: '02. 路由', link: '/docs/backend/nodejs/express/02-routing' },
        { text: '03. 中间件', link: '/docs/backend/nodejs/express/03-middleware' },
        { text: '04. 请求处理', link: '/docs/backend/nodejs/express/04-request' },
        { text: '05. 响应处理', link: '/docs/backend/nodejs/express/05-response' },
        { text: '06. 静态文件', link: '/docs/backend/nodejs/express/06-static' },
        { text: '07. 错误处理', link: '/docs/backend/nodejs/express/08-error-handling' },
      ]
    },
    {
      text: 'NestJS',
      collapsed: true,
      items: [
        { text: '01. NestJS 入门', link: '/docs/backend/nodejs/nestjs/01-intro' },
        { text: '02. 模块', link: '/docs/backend/nodejs/nestjs/02-modules' },
        { text: '03. 控制器', link: '/docs/backend/nodejs/nestjs/03-controllers' },
        { text: '04. 提供者', link: '/docs/backend/nodejs/nestjs/04-providers' },
        { text: '05. 依赖注入', link: '/docs/backend/nodejs/nestjs/05-dependency-injection' },
        { text: '06. 管道', link: '/docs/backend/nodejs/nestjs/06-pipes' },
        { text: '07. 守卫', link: '/docs/backend/nodejs/nestjs/07-guards' },
      ]
    },
    {
      text: 'Python 基础',
      collapsed: true,
      items: [
        { text: '01. Python 简介', link: '/docs/backend/python/basics/01-intro' },
        { text: '02. 环境搭建', link: '/docs/backend/python/basics/02-setup' },
        { text: '03. 基础语法', link: '/docs/backend/python/basics/03-syntax' },
        { text: '04. 数据类型', link: '/docs/backend/python/basics/04-data-types' },
        { text: '05. 控制流程', link: '/docs/backend/python/basics/05-control-flow' },
        { text: '06. 函数', link: '/docs/backend/python/basics/06-functions' },
        { text: '07. 模块与包', link: '/docs/backend/python/basics/07-modules' },
        { text: '08. 面向对象', link: '/docs/backend/python/basics/08-oop' },
      ]
    },
    {
      text: 'Django',
      collapsed: true,
      items: [
        { text: '01. Django 入门', link: '/docs/backend/python/django/01-intro' },
        { text: '02. 项目创建', link: '/docs/backend/python/django/02-project-setup' },
        { text: '03. 模型', link: '/docs/backend/python/django/03-models' },
        { text: '04. 视图', link: '/docs/backend/python/django/04-views' },
        { text: '05. 模板', link: '/docs/backend/python/django/05-templates' },
        { text: '06. URL 配置', link: '/docs/backend/python/django/06-urls' },
        { text: '07. 表单', link: '/docs/backend/python/django/07-forms' },
        { text: '08. Admin', link: '/docs/backend/python/django/08-admin' },
        { text: '09. ORM', link: '/docs/backend/python/django/09-orm' },
        { text: '10. REST Framework', link: '/docs/backend/python/django/11-rest-framework' },
      ]
    },
    {
      text: 'FastAPI',
      collapsed: true,
      items: [
        { text: '01. FastAPI 入门', link: '/docs/backend/python/fastapi/01-intro' },
        { text: '02. 路径参数', link: '/docs/backend/python/fastapi/02-path-params' },
        { text: '03. 查询参数', link: '/docs/backend/python/fastapi/03-query-params' },
        { text: '04. 请求体', link: '/docs/backend/python/fastapi/04-request-body' },
        { text: '05. Pydantic', link: '/docs/backend/python/fastapi/05-pydantic' },
        { text: '06. 依赖注入', link: '/docs/backend/python/fastapi/06-dependency' },
      ]
    },
    {
      text: 'Java 基础',
      collapsed: true,
      items: [
        { text: '01. Java 简介', link: '/docs/backend/java/basics/01-intro' },
        { text: '02. 环境搭建', link: '/docs/backend/java/basics/02-setup' },
        { text: '03. 基础语法', link: '/docs/backend/java/basics/03-syntax' },
        { text: '04. 数据类型', link: '/docs/backend/java/basics/04-data-types' },
        { text: '05. 控制流程', link: '/docs/backend/java/basics/06-control-flow' },
        { text: '06. 数组', link: '/docs/backend/java/basics/07-arrays' },
        { text: '07. 方法', link: '/docs/backend/java/basics/08-methods' },
      ]
    },
    {
      text: 'Java 面向对象',
      collapsed: true,
      items: [
        { text: '01. 类与对象', link: '/docs/backend/java/oop/01-classes' },
        { text: '02. 封装', link: '/docs/backend/java/oop/02-encapsulation' },
        { text: '03. 继承', link: '/docs/backend/java/oop/03-inheritance' },
        { text: '04. 多态', link: '/docs/backend/java/oop/04-polymorphism' },
        { text: '05. 抽象与接口', link: '/docs/backend/java/oop/05-abstraction' },
      ]
    },
    {
      text: 'Spring Boot',
      collapsed: true,
      items: [
        { text: '01. Spring Boot 入门', link: '/docs/backend/java/springboot/01-intro' },
        { text: '02. 快速开始', link: '/docs/backend/java/springboot/02-quickstart' },
        { text: '03. 配置文件', link: '/docs/backend/java/springboot/03-configuration' },
        { text: '04. 控制器', link: '/docs/backend/java/springboot/04-controllers' },
        { text: '05. 服务层', link: '/docs/backend/java/springboot/05-services' },
        { text: '06. 数据访问', link: '/docs/backend/java/springboot/06-repositories' },
        { text: '07. 数据校验', link: '/docs/backend/java/springboot/07-validation' },
        { text: '08. 异常处理', link: '/docs/backend/java/springboot/08-exception' },
        { text: '09. Security', link: '/docs/backend/java/springboot/09-security' },
      ]
    },
    {
      text: 'MyBatis',
      collapsed: true,
      items: [
        { text: '01. MyBatis 入门', link: '/docs/backend/java/mybatis/01-intro' },
        { text: '02. 配置', link: '/docs/backend/java/mybatis/02-configuration' },
        { text: '03. Mapper', link: '/docs/backend/java/mybatis/03-mapper' },
        { text: '04. 动态 SQL', link: '/docs/backend/java/mybatis/04-dynamic-sql' },
        { text: '05. 缓存', link: '/docs/backend/java/mybatis/05-cache' },
        { text: '06. MyBatis-Plus', link: '/docs/backend/java/mybatis/06-mybatis-plus' },
      ]
    },
    {
      text: 'Go 基础',
      collapsed: true,
      items: [
        { text: '01. Go 简介', link: '/docs/backend/go/basics/01-intro' },
        { text: '02. 环境搭建', link: '/docs/backend/go/basics/02-setup' },
        { text: '03. 基础语法', link: '/docs/backend/go/basics/03-syntax' },
        { text: '04. 数据类型', link: '/docs/backend/go/basics/04-data-types' },
        { text: '05. 控制流程', link: '/docs/backend/go/basics/05-control-flow' },
        { text: '06. 函数', link: '/docs/backend/go/basics/06-functions' },
        { text: '07. 数组与切片', link: '/docs/backend/go/basics/07-arrays-slices' },
        { text: '08. Map', link: '/docs/backend/go/basics/08-maps' },
        { text: '09. 结构体', link: '/docs/backend/go/basics/09-structs' },
      ]
    },
    {
      text: 'Go 并发',
      collapsed: true,
      items: [
        { text: '01. 接口', link: '/docs/backend/go/advanced/01-interfaces' },
        { text: '02. 错误处理', link: '/docs/backend/go/advanced/03-errors' },
        { text: '03. Goroutine', link: '/docs/backend/go/advanced/04-goroutines' },
        { text: '04. Channel', link: '/docs/backend/go/advanced/05-channels' },
        { text: '05. Select', link: '/docs/backend/go/advanced/06-select' },
        { text: '06. Context', link: '/docs/backend/go/advanced/08-context' },
      ]
    },
    {
      text: 'Gin',
      collapsed: true,
      items: [
        { text: '01. Gin 入门', link: '/docs/backend/go/gin/01-intro' },
        { text: '02. 路由', link: '/docs/backend/go/gin/02-routing' },
        { text: '03. 中间件', link: '/docs/backend/go/gin/03-middleware' },
        { text: '04. 请求处理', link: '/docs/backend/go/gin/04-request' },
        { text: '05. 响应处理', link: '/docs/backend/go/gin/05-response' },
        { text: '06. 参数校验', link: '/docs/backend/go/gin/06-validation' },
      ]
    },
    {
      text: '系统设计',
      collapsed: true,
      items: [
        { text: '01. 设计模式', link: '/docs/backend/architecture/design-patterns/01-intro' },
        { text: '02. 微服务', link: '/docs/backend/architecture/microservices/01-intro' },
        { text: '03. 消息队列', link: '/docs/backend/architecture/message-queue/01-intro' },
        { text: '04. 缓存策略', link: '/docs/backend/architecture/caching/01-intro' },
        { text: '05. 分布式', link: '/docs/backend/architecture/distributed/01-cap' },
        { text: '06. 高可用', link: '/docs/backend/architecture/high-availability/01-intro' },
      ]
    },
  ],
  // 数据库 - 统一侧边栏
  '/docs/database/': [
    {
      text: '数据库基础',
      collapsed: true,
      items: [
        { text: '01. 数据库概述', link: '/docs/database/basics/01-intro' },
        { text: '02. 关系型 vs NoSQL', link: '/docs/database/basics/02-relational-vs-nosql' },
        { text: '03. 数据建模', link: '/docs/database/basics/03-data-modeling' },
        { text: '04. 范式化', link: '/docs/database/basics/04-normalization' },
        { text: '05. ER 图', link: '/docs/database/basics/05-er-diagram' },
      ]
    },
    {
      text: 'SQL 基础',
      collapsed: true,
      items: [
        { text: '01. SQL 简介', link: '/docs/database/sql/basics/01-intro' },
        { text: '02. DDL', link: '/docs/database/sql/basics/02-ddl' },
        { text: '03. DML', link: '/docs/database/sql/basics/03-dml' },
        { text: '04. SELECT', link: '/docs/database/sql/basics/04-select' },
        { text: '05. WHERE', link: '/docs/database/sql/basics/05-where' },
        { text: '06. ORDER BY', link: '/docs/database/sql/basics/06-order-limit' },
        { text: '07. 聚合函数', link: '/docs/database/sql/basics/07-aggregate' },
        { text: '08. GROUP BY', link: '/docs/database/sql/basics/08-group-by' },
      ]
    },
    {
      text: 'SQL 连接',
      collapsed: true,
      items: [
        { text: '01. 连接概述', link: '/docs/database/sql/joins/01-intro' },
        { text: '02. INNER JOIN', link: '/docs/database/sql/joins/02-inner-join' },
        { text: '03. LEFT JOIN', link: '/docs/database/sql/joins/03-left-join' },
        { text: '04. RIGHT JOIN', link: '/docs/database/sql/joins/04-right-join' },
        { text: '05. FULL JOIN', link: '/docs/database/sql/joins/05-full-join' },
        { text: '06. 自连接', link: '/docs/database/sql/joins/07-self-join' },
      ]
    },
    {
      text: 'SQL 进阶',
      collapsed: true,
      items: [
        { text: '01. 子查询', link: '/docs/database/sql/advanced/01-subqueries' },
        { text: '02. UNION', link: '/docs/database/sql/advanced/02-union' },
        { text: '03. CASE', link: '/docs/database/sql/advanced/03-case' },
        { text: '04. 窗口函数', link: '/docs/database/sql/advanced/04-window-functions' },
        { text: '05. CTE', link: '/docs/database/sql/advanced/05-cte' },
        { text: '06. 视图', link: '/docs/database/sql/advanced/06-views' },
        { text: '07. 存储过程', link: '/docs/database/sql/advanced/07-stored-procedures' },
        { text: '08. 事务', link: '/docs/database/sql/advanced/09-transactions' },
      ]
    },
    {
      text: 'MySQL',
      collapsed: true,
      items: [
        { text: '01. MySQL 简介', link: '/docs/database/mysql/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/mysql/basics/02-installation' },
        { text: '03. 数据类型', link: '/docs/database/mysql/basics/03-data-types' },
        { text: '04. 约束', link: '/docs/database/mysql/basics/04-constraints' },
        { text: '05. CRUD', link: '/docs/database/mysql/basics/05-crud' },
        { text: '06. 内置函数', link: '/docs/database/mysql/basics/06-functions' },
      ]
    },
    {
      text: 'MySQL 索引',
      collapsed: true,
      items: [
        { text: '01. 索引概述', link: '/docs/database/mysql/index/01-intro' },
        { text: '02. B+Tree', link: '/docs/database/mysql/index/02-btree' },
        { text: '03. 索引类型', link: '/docs/database/mysql/index/03-index-types' },
        { text: '04. 复合索引', link: '/docs/database/mysql/index/04-composite-index' },
        { text: '05. 覆盖索引', link: '/docs/database/mysql/index/05-covering-index' },
        { text: '06. 索引优化', link: '/docs/database/mysql/index/06-index-optimization' },
        { text: '07. 索引失效', link: '/docs/database/mysql/index/07-index-failure' },
      ]
    },
    {
      text: 'MySQL 优化',
      collapsed: true,
      items: [
        { text: '01. EXPLAIN', link: '/docs/database/mysql/optimization/01-explain' },
        { text: '02. 慢查询', link: '/docs/database/mysql/optimization/02-slow-query' },
        { text: '03. 查询优化', link: '/docs/database/mysql/optimization/03-query-optimization' },
        { text: '04. 表结构优化', link: '/docs/database/mysql/optimization/04-table-optimization' },
      ]
    },
    {
      text: 'MySQL 进阶',
      collapsed: true,
      items: [
        { text: '01. 存储引擎', link: '/docs/database/mysql/advanced/01-storage-engines' },
        { text: '02. InnoDB', link: '/docs/database/mysql/advanced/02-innodb' },
        { text: '03. 锁机制', link: '/docs/database/mysql/advanced/03-locks' },
        { text: '04. MVCC', link: '/docs/database/mysql/advanced/04-mvcc' },
        { text: '05. 事务隔离', link: '/docs/database/mysql/advanced/05-transaction-isolation' },
        { text: '06. 主从复制', link: '/docs/database/mysql/advanced/07-replication' },
      ]
    },
    {
      text: 'PostgreSQL',
      collapsed: true,
      items: [
        { text: '01. PG 简介', link: '/docs/database/postgresql/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/postgresql/basics/02-installation' },
        { text: '03. 数据类型', link: '/docs/database/postgresql/basics/03-data-types' },
        { text: '04. JSON/JSONB', link: '/docs/database/postgresql/advanced/01-json' },
        { text: '05. 全文搜索', link: '/docs/database/postgresql/advanced/03-full-text-search' },
        { text: '06. 分区表', link: '/docs/database/postgresql/advanced/04-partitioning' },
      ]
    },
    {
      text: 'MongoDB',
      collapsed: true,
      items: [
        { text: '01. MongoDB 简介', link: '/docs/database/mongodb/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/mongodb/basics/02-installation' },
        { text: '03. 核心概念', link: '/docs/database/mongodb/basics/03-concepts' },
        { text: '04. CRUD', link: '/docs/database/mongodb/basics/04-crud' },
        { text: '05. 查询', link: '/docs/database/mongodb/basics/05-query' },
        { text: '06. 聚合管道', link: '/docs/database/mongodb/advanced/01-aggregation' },
        { text: '07. 索引', link: '/docs/database/mongodb/advanced/02-indexes' },
        { text: '08. Schema 设计', link: '/docs/database/mongodb/advanced/03-schema-design' },
      ]
    },
    {
      text: 'Redis',
      collapsed: true,
      items: [
        { text: '01. Redis 简介', link: '/docs/database/redis/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/redis/basics/02-installation' },
        { text: '03. String', link: '/docs/database/redis/basics/03-strings' },
        { text: '04. List', link: '/docs/database/redis/basics/04-lists' },
        { text: '05. Set', link: '/docs/database/redis/basics/05-sets' },
        { text: '06. Hash', link: '/docs/database/redis/basics/06-hashes' },
        { text: '07. Sorted Set', link: '/docs/database/redis/basics/07-sorted-sets' },
        { text: '08. 持久化', link: '/docs/database/redis/advanced/05-persistence' },
        { text: '09. 集群', link: '/docs/database/redis/cluster/02-cluster' },
      ]
    },
    {
      text: 'Redis 实战',
      collapsed: true,
      items: [
        { text: '01. 缓存应用', link: '/docs/database/redis/practice/01-caching' },
        { text: '02. Session', link: '/docs/database/redis/practice/02-session' },
        { text: '03. 限流', link: '/docs/database/redis/practice/03-rate-limiting' },
        { text: '04. 分布式锁', link: '/docs/database/redis/practice/04-distributed-lock' },
        { text: '05. 消息队列', link: '/docs/database/redis/practice/05-message-queue' },
      ]
    },
    {
      text: 'Elasticsearch',
      collapsed: true,
      items: [
        { text: '01. ES 简介', link: '/docs/database/elasticsearch/basics/01-intro' },
        { text: '02. 核心概念', link: '/docs/database/elasticsearch/basics/03-concepts' },
        { text: '03. CRUD', link: '/docs/database/elasticsearch/basics/04-crud' },
        { text: '04. Query DSL', link: '/docs/database/elasticsearch/search/01-query-dsl' },
        { text: '05. 全文搜索', link: '/docs/database/elasticsearch/search/02-full-text' },
        { text: '06. 聚合', link: '/docs/database/elasticsearch/search/05-aggregations' },
        { text: '07. 中文分词', link: '/docs/database/elasticsearch/advanced/02-chinese' },
      ]
    },
  ],
  // 移动开发
  '/docs/mobile/': [
    {
      text: 'iOS 开发',
      collapsed: true,
      items: [
        { text: 'Swift', link: '/docs/mobile/ios/swift' },
        { text: 'SwiftUI', link: '/docs/mobile/ios/swiftui' },
        { text: 'UIKit', link: '/docs/mobile/ios/uikit' },
      ]
    },
    {
      text: 'Android 开发',
      collapsed: true,
      items: [
        { text: 'Kotlin', link: '/docs/mobile/android/kotlin' },
        { text: 'Jetpack Compose', link: '/docs/mobile/android/compose' },
        { text: 'Android SDK', link: '/docs/mobile/android/sdk' },
      ]
    },
    {
      text: '跨平台',
      collapsed: true,
      items: [
        { text: 'React Native', link: '/docs/mobile/cross-platform/react-native' },
        { text: 'Flutter', link: '/docs/mobile/cross-platform/flutter' },
        { text: 'uni-app', link: '/docs/mobile/cross-platform/uniapp' },
      ]
    },
    {
      text: '小程序',
      collapsed: true,
      items: [
        { text: '微信小程序', link: '/docs/mobile/miniprogram/wechat' },
        { text: '支付宝小程序', link: '/docs/mobile/miniprogram/alipay' },
        { text: 'Taro', link: '/docs/mobile/miniprogram/taro' },
      ]
    }
  ],
  // AI/数据
  '/docs/ai/': [
    {
      text: '机器学习',
      collapsed: true,
      items: [
        { text: '机器学习基础', link: '/docs/ai/ml/basics' },
        { text: 'Scikit-learn', link: '/docs/ai/ml/sklearn' },
        { text: '监督学习', link: '/docs/ai/ml/supervised' },
        { text: '无监督学习', link: '/docs/ai/ml/unsupervised' },
      ]
    },
    {
      text: '深度学习',
      collapsed: true,
      items: [
        { text: 'PyTorch', link: '/docs/ai/dl/pytorch' },
        { text: 'TensorFlow', link: '/docs/ai/dl/tensorflow' },
        { text: 'CNN', link: '/docs/ai/dl/cnn' },
        { text: 'Transformer', link: '/docs/ai/dl/transformer' },
      ]
    },
    {
      text: '数据分析',
      collapsed: true,
      items: [
        { text: 'Pandas', link: '/docs/ai/data/pandas' },
        { text: 'NumPy', link: '/docs/ai/data/numpy' },
        { text: '数据可视化', link: '/docs/ai/data/visualization' },
        { text: 'Tableau', link: '/docs/ai/data/tableau' },
      ]
    },
    {
      text: '大数据',
      collapsed: true,
      items: [
        { text: 'Hadoop', link: '/docs/ai/bigdata/hadoop' },
        { text: 'Spark', link: '/docs/ai/bigdata/spark' },
        { text: 'Flink', link: '/docs/ai/bigdata/flink' },
        { text: 'Airflow', link: '/docs/ai/bigdata/airflow' },
      ]
    }
  ],
  // DevOps
  '/docs/devops/': [
    {
      text: '容器化',
      collapsed: true,
      items: [
        { text: 'Docker 入门', link: '/docs/devops/docker/basics' },
        { text: 'Docker Compose', link: '/docs/devops/docker/compose' },
        { text: 'Kubernetes', link: '/docs/devops/kubernetes/basics' },
        { text: 'Istio', link: '/docs/devops/kubernetes/istio' },
      ]
    },
    {
      text: 'CI/CD',
      collapsed: true,
      items: [
        { text: 'Git 工作流', link: '/docs/devops/git/workflow' },
        { text: 'GitHub Actions', link: '/docs/devops/ci-cd/github-actions' },
        { text: 'Jenkins', link: '/docs/devops/ci-cd/jenkins' },
        { text: 'GitLab CI', link: '/docs/devops/ci-cd/gitlab-ci' },
      ]
    },
    {
      text: '云平台',
      collapsed: true,
      items: [
        { text: 'AWS', link: '/docs/devops/cloud/aws' },
        { text: '阿里云', link: '/docs/devops/cloud/aliyun' },
        { text: 'Terraform', link: '/docs/devops/cloud/terraform' },
      ]
    },
    {
      text: '监控运维',
      collapsed: true,
      items: [
        { text: 'Prometheus', link: '/docs/devops/monitor/prometheus' },
        { text: 'Grafana', link: '/docs/devops/monitor/grafana' },
        { text: 'ELK Stack', link: '/docs/devops/monitor/elk' },
      ]
    }
  ],
  // 其他方向
  '/docs/other/': [
    {
      text: '游戏开发',
      collapsed: true,
      items: [
        { text: 'Unity', link: '/docs/other/game/unity' },
        { text: 'Unreal Engine', link: '/docs/other/game/unreal' },
        { text: 'Shader 编程', link: '/docs/other/game/shader' },
      ]
    },
    {
      text: '区块链',
      collapsed: true,
      items: [
        { text: '区块链基础', link: '/docs/other/blockchain/basics' },
        { text: 'Solidity', link: '/docs/other/blockchain/solidity' },
        { text: 'Web3.js', link: '/docs/other/blockchain/web3' },
      ]
    },
    {
      text: '嵌入式开发',
      collapsed: true,
      items: [
        { text: 'C/C++', link: '/docs/other/embedded/c-cpp' },
        { text: 'STM32', link: '/docs/other/embedded/stm32' },
        { text: 'FreeRTOS', link: '/docs/other/embedded/freertos' },
      ]
    },
    {
      text: '安全',
      collapsed: true,
      items: [
        { text: '网络安全基础', link: '/docs/other/security/basics' },
        { text: 'Web 安全', link: '/docs/other/security/web' },
        { text: '渗透测试', link: '/docs/other/security/pentest' },
      ]
    },
    {
      text: '桌面应用',
      collapsed: true,
      items: [
        { text: 'Electron', link: '/docs/other/desktop/electron' },
        { text: 'Qt', link: '/docs/other/desktop/qt' },
        { text: 'Flutter Desktop', link: '/docs/other/desktop/flutter' },
      ]
    }
  ]
}
