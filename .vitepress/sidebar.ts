export const sidebar = {
  // 前端开发
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
        { text: '02. 选择器', link: '/docs/frontend/css/basics/02-selectors' },
        { text: '03. 优先级', link: '/docs/frontend/css/basics/03-specificity' },
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
        { text: '01. display', link: '/docs/frontend/css/layout/01-display' },
        { text: '02. 定位', link: '/docs/frontend/css/layout/02-position' },
        { text: '03. 浮动', link: '/docs/frontend/css/layout/03-float' },
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
        { text: '03. 视口', link: '/docs/frontend/css/responsive/03-viewport' },
        { text: '04. 响应式图片', link: '/docs/frontend/css/responsive/04-responsive-images' },
      ]
    },
    {
      text: 'CSS 进阶',
      collapsed: true,
      items: [
        { text: '01. 过渡', link: '/docs/frontend/css/advanced/01-transitions' },
        { text: '02. 动画', link: '/docs/frontend/css/advanced/02-animations' },
        { text: '03. 变换', link: '/docs/frontend/css/advanced/03-transforms' },
        { text: '04. CSS 变量', link: '/docs/frontend/css/advanced/04-variables' },
        { text: '05. calc()', link: '/docs/frontend/css/advanced/05-calc-functions' },
        { text: '06. 伪元素', link: '/docs/frontend/css/advanced/06-pseudo-elements' },
      ]
    },
    {
      text: 'CSS 实战',
      collapsed: true,
      items: [
        { text: '01. 常见布局', link: '/docs/frontend/css/practice/01-common-layouts' },
        { text: '02. 组件样式', link: '/docs/frontend/css/practice/02-component-styles' },
        { text: '03. CSS Reset', link: '/docs/frontend/css/practice/03-css-reset' },
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
        { text: '05. 循环', link: '/docs/frontend/javascript/basics/05-loops' },
        { text: '06. 函数', link: '/docs/frontend/javascript/basics/06-functions' },
        { text: '07. 作用域', link: '/docs/frontend/javascript/basics/07-scope' },
        { text: '08. 数组', link: '/docs/frontend/javascript/basics/08-arrays' },
        { text: '09. 对象', link: '/docs/frontend/javascript/basics/09-objects' },
        { text: '10. 字符串', link: '/docs/frontend/javascript/basics/10-strings' },
      ]
    },
    {
      text: 'ES6+',
      collapsed: true,
      items: [
        { text: '01. let/const', link: '/docs/frontend/javascript/es6/01-let-const' },
        { text: '02. 箭头函数', link: '/docs/frontend/javascript/es6/02-arrow-functions' },
        { text: '03. 模板字符串', link: '/docs/frontend/javascript/es6/03-template-literals' },
        { text: '04. 解构赋值', link: '/docs/frontend/javascript/es6/04-destructuring' },
        { text: '05. 展开运算符', link: '/docs/frontend/javascript/es6/05-spread-rest' },
        { text: '06. 类', link: '/docs/frontend/javascript/es6/06-classes' },
        { text: '07. 模块化', link: '/docs/frontend/javascript/es6/07-modules' },
        { text: '08. Symbol', link: '/docs/frontend/javascript/es6/08-symbols' },
        { text: '09. 迭代器', link: '/docs/frontend/javascript/es6/09-iterators' },
        { text: '10. Map/Set', link: '/docs/frontend/javascript/es6/10-map-set' },
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
        { text: '04. 事件', link: '/docs/frontend/javascript/dom/04-events' },
        { text: '05. 事件委托', link: '/docs/frontend/javascript/dom/05-event-delegation' },
        { text: '06. 表单', link: '/docs/frontend/javascript/dom/06-forms' },
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
        { text: '01. this', link: '/docs/frontend/javascript/advanced/01-this' },
        { text: '02. 原型链', link: '/docs/frontend/javascript/advanced/02-prototype' },
        { text: '03. 继承', link: '/docs/frontend/javascript/advanced/03-inheritance' },
        { text: '04. 执行上下文', link: '/docs/frontend/javascript/advanced/04-execution-context' },
        { text: '05. 内存管理', link: '/docs/frontend/javascript/advanced/05-memory' },
        { text: '06. 正则表达式', link: '/docs/frontend/javascript/advanced/06-regexp' },
        { text: '07. 设计模式', link: '/docs/frontend/javascript/advanced/07-design-patterns' },
      ]
    },
    {
      text: 'JS 实战',
      collapsed: true,
      items: [
        { text: '01. 调试技巧', link: '/docs/frontend/javascript/practice/01-debugging' },
        { text: '02. 性能优化', link: '/docs/frontend/javascript/practice/02-performance' },
        { text: '03. 最佳实践', link: '/docs/frontend/javascript/practice/03-best-practices' },
      ]
    },
    {
      text: 'TypeScript 基础',
      collapsed: true,
      items: [
        { text: '01. TS 简介', link: '/docs/frontend/typescript/basics/01-intro' },
        { text: '02. 环境搭建', link: '/docs/frontend/typescript/basics/02-setup' },
        { text: '03. 基础类型', link: '/docs/frontend/typescript/basics/03-basic-types' },
        { text: '04. 类型推断', link: '/docs/frontend/typescript/basics/04-type-inference' },
        { text: '05. 接口', link: '/docs/frontend/typescript/basics/05-interfaces' },
        { text: '06. 类型别名', link: '/docs/frontend/typescript/basics/06-type-aliases' },
        { text: '07. 联合交叉类型', link: '/docs/frontend/typescript/basics/07-union-intersection' },
      ]
    },
    {
      text: 'TypeScript 进阶',
      collapsed: true,
      items: [
        { text: '01. 泛型', link: '/docs/frontend/typescript/advanced/01-generics' },
        { text: '02. 泛型约束', link: '/docs/frontend/typescript/advanced/02-generic-constraints' },
        { text: '03. 工具类型', link: '/docs/frontend/typescript/advanced/03-utility-types' },
        { text: '04. 条件类型', link: '/docs/frontend/typescript/advanced/04-conditional-types' },
        { text: '05. 映射类型', link: '/docs/frontend/typescript/advanced/05-mapped-types' },
        { text: '06. 装饰器', link: '/docs/frontend/typescript/advanced/06-decorators' },
        { text: '07. 声明文件', link: '/docs/frontend/typescript/advanced/07-declaration-files' },
      ]
    },
    {
      text: 'TypeScript 实战',
      collapsed: true,
      items: [
        { text: '01. TS + React', link: '/docs/frontend/typescript/practice/01-with-react' },
        { text: '02. TS + Vue', link: '/docs/frontend/typescript/practice/02-with-vue' },
        { text: '03. tsconfig', link: '/docs/frontend/typescript/practice/03-config' },
      ]
    },
    {
      text: 'React 基础',
      collapsed: true,
      items: [
        { text: '01. React 简介', link: '/docs/frontend/react/basics/01-intro' },
        { text: '02. 创建项目', link: '/docs/frontend/react/basics/02-create-app' },
        { text: '03. JSX', link: '/docs/frontend/react/basics/03-jsx' },
        { text: '04. 组件', link: '/docs/frontend/react/basics/04-components' },
        { text: '05. Props', link: '/docs/frontend/react/basics/05-props' },
        { text: '06. State', link: '/docs/frontend/react/basics/06-state' },
        { text: '07. 事件', link: '/docs/frontend/react/basics/07-events' },
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
        { text: '09. Hooks 规则', link: '/docs/frontend/react/hooks/09-hooks-rules' },
      ]
    },
    {
      text: 'React Router',
      collapsed: true,
      items: [
        { text: '01. 路由简介', link: '/docs/frontend/react/router/01-intro' },
        { text: '02. 嵌套路由', link: '/docs/frontend/react/router/02-nested-routes' },
        { text: '03. 路由参数', link: '/docs/frontend/react/router/03-params' },
        { text: '04. 编程导航', link: '/docs/frontend/react/router/04-navigation' },
        { text: '05. 路由守卫', link: '/docs/frontend/react/router/05-guards' },
      ]
    },
    {
      text: 'React 状态管理',
      collapsed: true,
      items: [
        { text: '01. 状态提升', link: '/docs/frontend/react/state/01-state-lifting' },
        { text: '02. Redux 简介', link: '/docs/frontend/react/state/02-redux-intro' },
        { text: '03. Redux Toolkit', link: '/docs/frontend/react/state/03-redux-toolkit' },
        { text: '04. Zustand', link: '/docs/frontend/react/state/04-zustand' },
        { text: '05. Jotai', link: '/docs/frontend/react/state/05-jotai' },
      ]
    },
    {
      text: 'React 进阶',
      collapsed: true,
      items: [
        { text: '01. 生命周期', link: '/docs/frontend/react/advanced/01-lifecycle' },
        { text: '02. Context', link: '/docs/frontend/react/advanced/02-context' },
        { text: '03. HOC', link: '/docs/frontend/react/advanced/03-hoc' },
        { text: '04. Render Props', link: '/docs/frontend/react/advanced/04-render-props' },
        { text: '05. Portals', link: '/docs/frontend/react/advanced/05-portals' },
        { text: '06. 错误边界', link: '/docs/frontend/react/advanced/06-error-boundaries' },
        { text: '07. Suspense', link: '/docs/frontend/react/advanced/07-suspense' },
        { text: '08. 服务端组件', link: '/docs/frontend/react/advanced/08-server-components' },
      ]
    },
    {
      text: 'React 实战',
      collapsed: true,
      items: [
        { text: '01. 项目结构', link: '/docs/frontend/react/practice/01-project-structure' },
        { text: '02. 样式方案', link: '/docs/frontend/react/practice/02-styling' },
        { text: '03. 测试', link: '/docs/frontend/react/practice/03-testing' },
        { text: '04. 性能优化', link: '/docs/frontend/react/practice/04-performance' },
      ]
    },
    {
      text: 'Vue 基础',
      collapsed: true,
      items: [
        { text: '01. Vue 简介', link: '/docs/frontend/vue/basics/01-intro' },
        { text: '02. 创建项目', link: '/docs/frontend/vue/basics/02-create-app' },
        { text: '03. 模板语法', link: '/docs/frontend/vue/basics/03-template' },
        { text: '04. 指令', link: '/docs/frontend/vue/basics/04-directives' },
        { text: '05. 计算属性', link: '/docs/frontend/vue/basics/05-computed' },
        { text: '06. 侦听器', link: '/docs/frontend/vue/basics/06-watchers' },
        { text: '07. Class/Style', link: '/docs/frontend/vue/basics/07-class-style' },
        { text: '08. 条件渲染', link: '/docs/frontend/vue/basics/08-conditional' },
        { text: '09. 列表渲染', link: '/docs/frontend/vue/basics/09-lists' },
        { text: '10. 事件', link: '/docs/frontend/vue/basics/10-events' },
      ]
    },
    {
      text: 'Vue 组件',
      collapsed: true,
      items: [
        { text: '01. 组件基础', link: '/docs/frontend/vue/components/01-basics' },
        { text: '02. Props', link: '/docs/frontend/vue/components/02-props' },
        { text: '03. 自定义事件', link: '/docs/frontend/vue/components/03-emits' },
        { text: '04. 插槽', link: '/docs/frontend/vue/components/04-slots' },
        { text: '05. Provide/Inject', link: '/docs/frontend/vue/components/05-provide-inject' },
        { text: '06. 动态组件', link: '/docs/frontend/vue/components/06-dynamic' },
        { text: '07. 异步组件', link: '/docs/frontend/vue/components/07-async' },
      ]
    },
    {
      text: 'Vue 组合式 API',
      collapsed: true,
      items: [
        { text: '01. setup', link: '/docs/frontend/vue/composition/01-setup' },
        { text: '02. ref/reactive', link: '/docs/frontend/vue/composition/02-ref-reactive' },
        { text: '03. computed/watch', link: '/docs/frontend/vue/composition/03-computed-watch' },
        { text: '04. 生命周期', link: '/docs/frontend/vue/composition/04-lifecycle' },
        { text: '05. 组合式函数', link: '/docs/frontend/vue/composition/05-composables' },
        { text: '06. script setup', link: '/docs/frontend/vue/composition/06-script-setup' },
      ]
    },
    {
      text: 'Vue Router',
      collapsed: true,
      items: [
        { text: '01. 路由简介', link: '/docs/frontend/vue/router/01-intro' },
        { text: '02. 路由配置', link: '/docs/frontend/vue/router/02-routes' },
        { text: '03. 路由参数', link: '/docs/frontend/vue/router/03-params' },
        { text: '04. 导航守卫', link: '/docs/frontend/vue/router/04-guards' },
        { text: '05. 懒加载', link: '/docs/frontend/vue/router/05-lazy-loading' },
      ]
    },
    {
      text: 'Pinia',
      collapsed: true,
      items: [
        { text: '01. Pinia 简介', link: '/docs/frontend/vue/state/01-pinia-intro' },
        { text: '02. State', link: '/docs/frontend/vue/state/02-pinia-state' },
        { text: '03. Getters', link: '/docs/frontend/vue/state/03-pinia-getters' },
        { text: '04. Actions', link: '/docs/frontend/vue/state/04-pinia-actions' },
        { text: '05. 插件', link: '/docs/frontend/vue/state/05-pinia-plugins' },
      ]
    },
    {
      text: 'Vue 实战',
      collapsed: true,
      items: [
        { text: '01. 项目结构', link: '/docs/frontend/vue/practice/01-project-structure' },
        { text: '02. 样式方案', link: '/docs/frontend/vue/practice/02-styling' },
        { text: '03. 性能优化', link: '/docs/frontend/vue/practice/03-performance' },
      ]
    },
    {
      text: '包管理器',
      collapsed: true,
      items: [
        { text: '01. npm', link: '/docs/frontend/engineering/package-managers/01-npm' },
        { text: '02. Yarn', link: '/docs/frontend/engineering/package-managers/02-yarn' },
        { text: '03. pnpm', link: '/docs/frontend/engineering/package-managers/03-pnpm' },
      ]
    },
    {
      text: '构建工具',
      collapsed: true,
      items: [
        { text: '01. Webpack 简介', link: '/docs/frontend/engineering/build-tools/01-webpack-intro' },
        { text: '02. Webpack 配置', link: '/docs/frontend/engineering/build-tools/02-webpack-config' },
        { text: '03. Loaders', link: '/docs/frontend/engineering/build-tools/03-webpack-loaders' },
        { text: '04. Plugins', link: '/docs/frontend/engineering/build-tools/04-webpack-plugins' },
        { text: '05. 优化', link: '/docs/frontend/engineering/build-tools/05-webpack-optimize' },
        { text: '06. Vite 简介', link: '/docs/frontend/engineering/build-tools/06-vite-intro' },
        { text: '07. Vite 配置', link: '/docs/frontend/engineering/build-tools/07-vite-config' },
        { text: '08. Rollup', link: '/docs/frontend/engineering/build-tools/08-rollup' },
      ]
    },
    {
      text: '代码质量',
      collapsed: true,
      items: [
        { text: '01. ESLint', link: '/docs/frontend/engineering/code-quality/01-eslint' },
        { text: '02. Prettier', link: '/docs/frontend/engineering/code-quality/02-prettier' },
        { text: '03. Husky', link: '/docs/frontend/engineering/code-quality/03-husky' },
        { text: '04. lint-staged', link: '/docs/frontend/engineering/code-quality/04-lint-staged' },
      ]
    },
    {
      text: '测试',
      collapsed: true,
      items: [
        { text: '01. Jest', link: '/docs/frontend/engineering/testing/01-jest-intro' },
        { text: '02. 单元测试', link: '/docs/frontend/engineering/testing/02-unit-testing' },
        { text: '03. Vitest', link: '/docs/frontend/engineering/testing/03-vitest' },
        { text: '04. Testing Library', link: '/docs/frontend/engineering/testing/04-testing-library' },
        { text: '05. Cypress', link: '/docs/frontend/engineering/testing/05-e2e-cypress' },
      ]
    },
    {
      text: '部署',
      collapsed: true,
      items: [
        { text: '01. 构建打包', link: '/docs/frontend/engineering/deployment/01-build' },
        { text: '02. CDN', link: '/docs/frontend/engineering/deployment/02-cdn' },
        { text: '03. CI/CD', link: '/docs/frontend/engineering/deployment/03-ci-cd' },
      ]
    },
    {
      text: '性能优化',
      collapsed: true,
      items: [
        { text: '01. 性能指标', link: '/docs/frontend/advanced/performance/01-metrics' },
        { text: '02. 加载优化', link: '/docs/frontend/advanced/performance/02-loading' },
        { text: '03. 渲染优化', link: '/docs/frontend/advanced/performance/03-rendering' },
        { text: '04. 缓存策略', link: '/docs/frontend/advanced/performance/04-caching' },
        { text: '05. 性能监控', link: '/docs/frontend/advanced/performance/05-monitoring' },
      ]
    },
    {
      text: '安全',
      collapsed: true,
      items: [
        { text: '01. XSS', link: '/docs/frontend/advanced/security/01-xss' },
        { text: '02. CSRF', link: '/docs/frontend/advanced/security/02-csrf' },
        { text: '03. HTTPS', link: '/docs/frontend/advanced/security/03-https' },
      ]
    },
    {
      text: 'SSR',
      collapsed: true,
      items: [
        { text: '01. SSR 简介', link: '/docs/frontend/advanced/ssr/01-intro' },
        { text: '02. Next.js', link: '/docs/frontend/advanced/ssr/02-nextjs' },
        { text: '03. Nuxt', link: '/docs/frontend/advanced/ssr/03-nuxt' },
        { text: '04. SSG', link: '/docs/frontend/advanced/ssr/04-ssg' },
      ]
    },
    {
      text: 'PWA',
      collapsed: true,
      items: [
        { text: '01. PWA 简介', link: '/docs/frontend/advanced/pwa/01-intro' },
        { text: '02. Service Worker', link: '/docs/frontend/advanced/pwa/02-service-worker' },
        { text: '03. Manifest', link: '/docs/frontend/advanced/pwa/03-manifest' },
      ]
    },
    {
      text: '微前端',
      collapsed: true,
      items: [
        { text: '01. 微前端简介', link: '/docs/frontend/advanced/micro-frontend/01-intro' },
        { text: '02. qiankun', link: '/docs/frontend/advanced/micro-frontend/02-qiankun' },
        { text: '03. 模块联邦', link: '/docs/frontend/advanced/micro-frontend/03-module-federation' },
      ]
    },
  ],

  // 后端开发
  '/docs/backend/': [
    {
      text: '后端基础',
      collapsed: true,
      items: [
        { text: '01. 后端开发概述', link: '/docs/backend/basics/01-intro' },
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
        { text: '06. path 模块', link: '/docs/backend/nodejs/basics/06-path' },
        { text: '07. 事件', link: '/docs/backend/nodejs/basics/07-events' },
        { text: '08. 流', link: '/docs/backend/nodejs/basics/08-streams' },
        { text: '09. Buffer', link: '/docs/backend/nodejs/basics/09-buffer' },
        { text: '10. 进程', link: '/docs/backend/nodejs/basics/10-process' },
      ]
    },
    {
      text: 'HTTP 模块',
      collapsed: true,
      items: [
        { text: '01. http 模块', link: '/docs/backend/nodejs/http/01-http-module' },
        { text: '02. 创建服务器', link: '/docs/backend/nodejs/http/02-create-server' },
        { text: '03. 路由', link: '/docs/backend/nodejs/http/03-routing' },
        { text: '04. 中间件', link: '/docs/backend/nodejs/http/04-middleware' },
      ]
    },
    {
      text: 'Express',
      collapsed: true,
      items: [
        { text: '01. Express 简介', link: '/docs/backend/nodejs/express/01-intro' },
        { text: '02. 路由', link: '/docs/backend/nodejs/express/02-routing' },
        { text: '03. 中间件', link: '/docs/backend/nodejs/express/03-middleware' },
        { text: '04. 请求处理', link: '/docs/backend/nodejs/express/04-request' },
        { text: '05. 响应处理', link: '/docs/backend/nodejs/express/05-response' },
        { text: '06. 静态文件', link: '/docs/backend/nodejs/express/06-static' },
        { text: '07. 模板引擎', link: '/docs/backend/nodejs/express/07-template' },
        { text: '08. 错误处理', link: '/docs/backend/nodejs/express/08-error-handling' },
        { text: '09. 项目结构', link: '/docs/backend/nodejs/express/09-project-structure' },
      ]
    },
    {
      text: 'Koa',
      collapsed: true,
      items: [
        { text: '01. Koa 简介', link: '/docs/backend/nodejs/koa/01-intro' },
        { text: '02. 中间件', link: '/docs/backend/nodejs/koa/02-middleware' },
        { text: '03. Context', link: '/docs/backend/nodejs/koa/03-context' },
        { text: '04. 路由', link: '/docs/backend/nodejs/koa/04-router' },
      ]
    },
    {
      text: 'NestJS',
      collapsed: true,
      items: [
        { text: '01. NestJS 简介', link: '/docs/backend/nodejs/nestjs/01-intro' },
        { text: '02. 模块', link: '/docs/backend/nodejs/nestjs/02-modules' },
        { text: '03. 控制器', link: '/docs/backend/nodejs/nestjs/03-controllers' },
        { text: '04. 提供者', link: '/docs/backend/nodejs/nestjs/04-providers' },
        { text: '05. 依赖注入', link: '/docs/backend/nodejs/nestjs/05-dependency-injection' },
        { text: '06. 管道', link: '/docs/backend/nodejs/nestjs/06-pipes' },
        { text: '07. 守卫', link: '/docs/backend/nodejs/nestjs/07-guards' },
        { text: '08. 拦截器', link: '/docs/backend/nodejs/nestjs/08-interceptors' },
        { text: '09. TypeORM', link: '/docs/backend/nodejs/nestjs/09-typeorm' },
      ]
    },
    {
      text: 'Node.js 数据库',
      collapsed: true,
      items: [
        { text: '01. MySQL 驱动', link: '/docs/backend/nodejs/database/01-mysql-driver' },
        { text: '02. MongoDB 驱动', link: '/docs/backend/nodejs/database/02-mongodb-driver' },
        { text: '03. Sequelize', link: '/docs/backend/nodejs/database/03-sequelize' },
        { text: '04. Prisma', link: '/docs/backend/nodejs/database/04-prisma' },
        { text: '05. Redis', link: '/docs/backend/nodejs/database/05-redis' },
      ]
    },
    {
      text: 'Node.js 认证',
      collapsed: true,
      items: [
        { text: '01. Session', link: '/docs/backend/nodejs/auth/01-session' },
        { text: '02. JWT', link: '/docs/backend/nodejs/auth/02-jwt' },
        { text: '03. OAuth', link: '/docs/backend/nodejs/auth/03-oauth' },
        { text: '04. Passport', link: '/docs/backend/nodejs/auth/04-passport' },
      ]
    },
    {
      text: 'Node.js 进阶',
      collapsed: true,
      items: [
        { text: '01. Cluster', link: '/docs/backend/nodejs/advanced/01-cluster' },
        { text: '02. PM2', link: '/docs/backend/nodejs/advanced/02-pm2' },
        { text: '03. WebSocket', link: '/docs/backend/nodejs/advanced/03-websocket' },
        { text: '04. GraphQL', link: '/docs/backend/nodejs/advanced/04-graphql' },
        { text: '05. 微服务', link: '/docs/backend/nodejs/advanced/05-microservices' },
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
        { text: '05. 控制流', link: '/docs/backend/python/basics/05-control-flow' },
        { text: '06. 函数', link: '/docs/backend/python/basics/06-functions' },
        { text: '07. 模块', link: '/docs/backend/python/basics/07-modules' },
        { text: '08. 面向对象', link: '/docs/backend/python/basics/08-oop' },
        { text: '09. 异常处理', link: '/docs/backend/python/basics/09-exceptions' },
        { text: '10. 文件操作', link: '/docs/backend/python/basics/10-file-io' },
      ]
    },
    {
      text: 'Python 进阶',
      collapsed: true,
      items: [
        { text: '01. 装饰器', link: '/docs/backend/python/advanced/01-decorators' },
        { text: '02. 生成器', link: '/docs/backend/python/advanced/02-generators' },
        { text: '03. 上下文管理器', link: '/docs/backend/python/advanced/03-context-managers' },
        { text: '04. 元类', link: '/docs/backend/python/advanced/04-metaclasses' },
        { text: '05. 异步编程', link: '/docs/backend/python/advanced/05-async' },
      ]
    },
    {
      text: 'Flask',
      collapsed: true,
      items: [
        { text: '01. Flask 简介', link: '/docs/backend/python/flask/01-intro' },
        { text: '02. 路由', link: '/docs/backend/python/flask/02-routing' },
        { text: '03. 模板', link: '/docs/backend/python/flask/03-templates' },
        { text: '04. 表单', link: '/docs/backend/python/flask/04-forms' },
        { text: '05. 数据库', link: '/docs/backend/python/flask/05-database' },
        { text: '06. 蓝图', link: '/docs/backend/python/flask/06-blueprints' },
        { text: '07. 扩展', link: '/docs/backend/python/flask/07-extensions' },
      ]
    },
    {
      text: 'Django',
      collapsed: true,
      items: [
        { text: '01. Django 简介', link: '/docs/backend/python/django/01-intro' },
        { text: '02. 项目搭建', link: '/docs/backend/python/django/02-project-setup' },
        { text: '03. 模型', link: '/docs/backend/python/django/03-models' },
        { text: '04. 视图', link: '/docs/backend/python/django/04-views' },
        { text: '05. 模板', link: '/docs/backend/python/django/05-templates' },
        { text: '06. URL 配置', link: '/docs/backend/python/django/06-urls' },
        { text: '07. 表单', link: '/docs/backend/python/django/07-forms' },
        { text: '08. Admin', link: '/docs/backend/python/django/08-admin' },
        { text: '09. ORM', link: '/docs/backend/python/django/09-orm' },
        { text: '10. 认证', link: '/docs/backend/python/django/10-auth' },
        { text: '11. REST Framework', link: '/docs/backend/python/django/11-rest-framework' },
        { text: '12. 部署', link: '/docs/backend/python/django/12-deployment' },
      ]
    },
    {
      text: 'FastAPI',
      collapsed: true,
      items: [
        { text: '01. FastAPI 简介', link: '/docs/backend/python/fastapi/01-intro' },
        { text: '02. 路径参数', link: '/docs/backend/python/fastapi/02-path-params' },
        { text: '03. 查询参数', link: '/docs/backend/python/fastapi/03-query-params' },
        { text: '04. 请求体', link: '/docs/backend/python/fastapi/04-request-body' },
        { text: '05. Pydantic', link: '/docs/backend/python/fastapi/05-pydantic' },
        { text: '06. 依赖注入', link: '/docs/backend/python/fastapi/06-dependency' },
        { text: '07. 安全', link: '/docs/backend/python/fastapi/07-security' },
        { text: '08. 数据库', link: '/docs/backend/python/fastapi/08-database' },
        { text: '09. 异步', link: '/docs/backend/python/fastapi/09-async' },
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
        { text: '05. 运算符', link: '/docs/backend/java/basics/05-operators' },
        { text: '06. 控制流', link: '/docs/backend/java/basics/06-control-flow' },
        { text: '07. 数组', link: '/docs/backend/java/basics/07-arrays' },
        { text: '08. 方法', link: '/docs/backend/java/basics/08-methods' },
        { text: '09. 字符串', link: '/docs/backend/java/basics/09-strings' },
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
        { text: '05. 抽象', link: '/docs/backend/java/oop/05-abstraction' },
        { text: '06. 内部类', link: '/docs/backend/java/oop/06-inner-classes' },
        { text: '07. 枚举', link: '/docs/backend/java/oop/07-enums' },
      ]
    },
    {
      text: 'Java 进阶',
      collapsed: true,
      items: [
        { text: '01. 异常处理', link: '/docs/backend/java/advanced/01-exceptions' },
        { text: '02. 泛型', link: '/docs/backend/java/advanced/02-generics' },
        { text: '03. 集合框架', link: '/docs/backend/java/advanced/03-collections' },
        { text: '04. Stream API', link: '/docs/backend/java/advanced/04-streams' },
        { text: '05. Lambda', link: '/docs/backend/java/advanced/05-lambda' },
        { text: '06. IO', link: '/docs/backend/java/advanced/06-io' },
        { text: '07. NIO', link: '/docs/backend/java/advanced/07-nio' },
        { text: '08. 多线程', link: '/docs/backend/java/advanced/08-multithreading' },
        { text: '09. 并发', link: '/docs/backend/java/advanced/09-concurrency' },
        { text: '10. 反射', link: '/docs/backend/java/advanced/10-reflection' },
        { text: '11. 注解', link: '/docs/backend/java/advanced/11-annotations' },
      ]
    },
    {
      text: 'JVM',
      collapsed: true,
      items: [
        { text: '01. JVM 架构', link: '/docs/backend/java/jvm/01-architecture' },
        { text: '02. 内存模型', link: '/docs/backend/java/jvm/02-memory' },
        { text: '03. 垃圾回收', link: '/docs/backend/java/jvm/03-gc' },
        { text: '04. 类加载器', link: '/docs/backend/java/jvm/04-classloader' },
        { text: '05. JVM 调优', link: '/docs/backend/java/jvm/05-tuning' },
      ]
    },
    {
      text: 'Spring',
      collapsed: true,
      items: [
        { text: '01. Spring 简介', link: '/docs/backend/java/spring/01-intro' },
        { text: '02. IoC', link: '/docs/backend/java/spring/02-ioc' },
        { text: '03. DI', link: '/docs/backend/java/spring/03-di' },
        { text: '04. AOP', link: '/docs/backend/java/spring/04-aop' },
        { text: '05. Bean', link: '/docs/backend/java/spring/05-beans' },
      ]
    },
    {
      text: 'Spring Boot',
      collapsed: true,
      items: [
        { text: '01. Spring Boot 简介', link: '/docs/backend/java/springboot/01-intro' },
        { text: '02. 快速开始', link: '/docs/backend/java/springboot/02-quickstart' },
        { text: '03. 配置', link: '/docs/backend/java/springboot/03-configuration' },
        { text: '04. 控制器', link: '/docs/backend/java/springboot/04-controllers' },
        { text: '05. 服务层', link: '/docs/backend/java/springboot/05-services' },
        { text: '06. 数据访问', link: '/docs/backend/java/springboot/06-repositories' },
        { text: '07. 数据验证', link: '/docs/backend/java/springboot/07-validation' },
        { text: '08. 异常处理', link: '/docs/backend/java/springboot/08-exception' },
        { text: '09. 安全', link: '/docs/backend/java/springboot/09-security' },
        { text: '10. Actuator', link: '/docs/backend/java/springboot/10-actuator' },
        { text: '11. 测试', link: '/docs/backend/java/springboot/11-testing' },
      ]
    },
    {
      text: 'MyBatis',
      collapsed: true,
      items: [
        { text: '01. MyBatis 简介', link: '/docs/backend/java/mybatis/01-intro' },
        { text: '02. 配置', link: '/docs/backend/java/mybatis/02-configuration' },
        { text: '03. Mapper', link: '/docs/backend/java/mybatis/03-mapper' },
        { text: '04. 动态 SQL', link: '/docs/backend/java/mybatis/04-dynamic-sql' },
        { text: '05. 缓存', link: '/docs/backend/java/mybatis/05-cache' },
        { text: '06. MyBatis-Plus', link: '/docs/backend/java/mybatis/06-mybatis-plus' },
      ]
    },
    {
      text: 'Java 工具',
      collapsed: true,
      items: [
        { text: '01. Maven', link: '/docs/backend/java/tools/01-maven' },
        { text: '02. Gradle', link: '/docs/backend/java/tools/02-gradle' },
        { text: '03. JUnit', link: '/docs/backend/java/tools/03-junit' },
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
        { text: '05. 控制流', link: '/docs/backend/go/basics/05-control-flow' },
        { text: '06. 函数', link: '/docs/backend/go/basics/06-functions' },
        { text: '07. 数组与切片', link: '/docs/backend/go/basics/07-arrays-slices' },
        { text: '08. Map', link: '/docs/backend/go/basics/08-maps' },
        { text: '09. 结构体', link: '/docs/backend/go/basics/09-structs' },
        { text: '10. 指针', link: '/docs/backend/go/basics/10-pointers' },
      ]
    },
    {
      text: 'Go 进阶',
      collapsed: true,
      items: [
        { text: '01. 接口', link: '/docs/backend/go/advanced/01-interfaces' },
        { text: '02. 方法', link: '/docs/backend/go/advanced/02-methods' },
        { text: '03. 错误处理', link: '/docs/backend/go/advanced/03-errors' },
        { text: '04. Goroutine', link: '/docs/backend/go/advanced/04-goroutines' },
        { text: '05. Channel', link: '/docs/backend/go/advanced/05-channels' },
        { text: '06. Select', link: '/docs/backend/go/advanced/06-select' },
        { text: '07. sync 包', link: '/docs/backend/go/advanced/07-sync' },
        { text: '08. Context', link: '/docs/backend/go/advanced/08-context' },
        { text: '09. 反射', link: '/docs/backend/go/advanced/09-reflection' },
      ]
    },
    {
      text: 'Gin',
      collapsed: true,
      items: [
        { text: '01. Gin 简介', link: '/docs/backend/go/gin/01-intro' },
        { text: '02. 路由', link: '/docs/backend/go/gin/02-routing' },
        { text: '03. 中间件', link: '/docs/backend/go/gin/03-middleware' },
        { text: '04. 请求处理', link: '/docs/backend/go/gin/04-request' },
        { text: '05. 响应处理', link: '/docs/backend/go/gin/05-response' },
        { text: '06. 数据验证', link: '/docs/backend/go/gin/06-validation' },
        { text: '07. 项目结构', link: '/docs/backend/go/gin/07-project-structure' },
      ]
    },
    {
      text: 'GORM',
      collapsed: true,
      items: [
        { text: '01. GORM 简介', link: '/docs/backend/go/gorm/01-intro' },
        { text: '02. 模型定义', link: '/docs/backend/go/gorm/02-models' },
        { text: '03. CRUD', link: '/docs/backend/go/gorm/03-crud' },
        { text: '04. 关联', link: '/docs/backend/go/gorm/04-associations' },
        { text: '05. 事务', link: '/docs/backend/go/gorm/05-transactions' },
        { text: '06. 钩子', link: '/docs/backend/go/gorm/06-hooks' },
      ]
    },
    {
      text: 'Go 工具',
      collapsed: true,
      items: [
        { text: '01. Go Modules', link: '/docs/backend/go/tools/01-modules' },
        { text: '02. 测试', link: '/docs/backend/go/tools/02-testing' },
        { text: '03. 性能分析', link: '/docs/backend/go/tools/03-profiling' },
      ]
    },
    {
      text: '设计模式',
      collapsed: true,
      items: [
        { text: '01. 设计模式简介', link: '/docs/backend/architecture/design-patterns/01-intro' },
        { text: '02. 单例模式', link: '/docs/backend/architecture/design-patterns/02-singleton' },
        { text: '03. 工厂模式', link: '/docs/backend/architecture/design-patterns/03-factory' },
        { text: '04. 建造者模式', link: '/docs/backend/architecture/design-patterns/04-builder' },
        { text: '05. 原型模式', link: '/docs/backend/architecture/design-patterns/05-prototype' },
        { text: '06. 适配器模式', link: '/docs/backend/architecture/design-patterns/06-adapter' },
        { text: '07. 装饰器模式', link: '/docs/backend/architecture/design-patterns/07-decorator' },
        { text: '08. 代理模式', link: '/docs/backend/architecture/design-patterns/08-proxy' },
        { text: '09. 观察者模式', link: '/docs/backend/architecture/design-patterns/09-observer' },
        { text: '10. 策略模式', link: '/docs/backend/architecture/design-patterns/10-strategy' },
        { text: '11. 模板方法', link: '/docs/backend/architecture/design-patterns/11-template' },
      ]
    },
    {
      text: '微服务',
      collapsed: true,
      items: [
        { text: '01. 微服务简介', link: '/docs/backend/architecture/microservices/01-intro' },
        { text: '02. 服务拆分', link: '/docs/backend/architecture/microservices/02-service-split' },
        { text: '03. API 网关', link: '/docs/backend/architecture/microservices/03-api-gateway' },
        { text: '04. 服务发现', link: '/docs/backend/architecture/microservices/04-service-discovery' },
        { text: '05. 负载均衡', link: '/docs/backend/architecture/microservices/05-load-balancing' },
        { text: '06. 熔断器', link: '/docs/backend/architecture/microservices/06-circuit-breaker' },
        { text: '07. 配置中心', link: '/docs/backend/architecture/microservices/07-config-center' },
        { text: '08. 分布式追踪', link: '/docs/backend/architecture/microservices/08-distributed-tracing' },
      ]
    },
    {
      text: '消息队列',
      collapsed: true,
      items: [
        { text: '01. 消息队列简介', link: '/docs/backend/architecture/message-queue/01-intro' },
        { text: '02. RabbitMQ', link: '/docs/backend/architecture/message-queue/02-rabbitmq' },
        { text: '03. Kafka', link: '/docs/backend/architecture/message-queue/03-kafka' },
        { text: '04. RocketMQ', link: '/docs/backend/architecture/message-queue/04-rocketmq' },
        { text: '05. 消息模式', link: '/docs/backend/architecture/message-queue/05-patterns' },
      ]
    },
    {
      text: '缓存',
      collapsed: true,
      items: [
        { text: '01. 缓存简介', link: '/docs/backend/architecture/caching/01-intro' },
        { text: '02. 缓存策略', link: '/docs/backend/architecture/caching/02-strategies' },
        { text: '03. Redis 缓存', link: '/docs/backend/architecture/caching/03-redis-cache' },
        { text: '04. 本地缓存', link: '/docs/backend/architecture/caching/04-local-cache' },
        { text: '05. 缓存问题', link: '/docs/backend/architecture/caching/05-cache-problems' },
      ]
    },
    {
      text: '高可用',
      collapsed: true,
      items: [
        { text: '01. 高可用简介', link: '/docs/backend/architecture/high-availability/01-intro' },
        { text: '02. 冗余设计', link: '/docs/backend/architecture/high-availability/02-redundancy' },
        { text: '03. 故障转移', link: '/docs/backend/architecture/high-availability/03-failover' },
        { text: '04. 灾难恢复', link: '/docs/backend/architecture/high-availability/04-disaster-recovery' },
      ]
    },
  ],


  // 数据库
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
        { text: '02. SELECT', link: '/docs/database/sql/basics/02-select' },
        { text: '03. WHERE', link: '/docs/database/sql/basics/03-where' },
        { text: '04. INSERT', link: '/docs/database/sql/basics/04-insert' },
        { text: '05. UPDATE', link: '/docs/database/sql/basics/05-update' },
        { text: '06. DELETE', link: '/docs/database/sql/basics/06-delete' },
        { text: '07. ORDER BY', link: '/docs/database/sql/basics/07-order-by' },
        { text: '08. GROUP BY', link: '/docs/database/sql/basics/08-group-by' },
      ]
    },
    {
      text: 'SQL 连接',
      collapsed: true,
      items: [
        { text: '01. INNER JOIN', link: '/docs/database/sql/joins/01-inner-join' },
        { text: '02. LEFT JOIN', link: '/docs/database/sql/joins/02-left-join' },
        { text: '03. RIGHT JOIN', link: '/docs/database/sql/joins/03-right-join' },
        { text: '04. FULL JOIN', link: '/docs/database/sql/joins/04-full-join' },
        { text: '05. 自连接', link: '/docs/database/sql/joins/05-self-join' },
      ]
    },
    {
      text: 'SQL 进阶',
      collapsed: true,
      items: [
        { text: '01. 子查询', link: '/docs/database/sql/advanced/01-subqueries' },
        { text: '02. 视图', link: '/docs/database/sql/advanced/02-views' },
        { text: '03. 存储过程', link: '/docs/database/sql/advanced/03-stored-procedures' },
        { text: '04. 触发器', link: '/docs/database/sql/advanced/04-triggers' },
        { text: '05. 事务', link: '/docs/database/sql/advanced/05-transactions' },
        { text: '06. 窗口函数', link: '/docs/database/sql/advanced/06-window-functions' },
      ]
    },
    {
      text: 'SQL 实战',
      collapsed: true,
      items: [
        { text: '01. 常见查询', link: '/docs/database/sql/practice/01-common-queries' },
        { text: '02. 性能优化', link: '/docs/database/sql/practice/02-optimization' },
        { text: '03. 最佳实践', link: '/docs/database/sql/practice/03-best-practices' },
      ]
    },
    {
      text: 'MySQL 基础',
      collapsed: true,
      items: [
        { text: '01. MySQL 简介', link: '/docs/database/mysql/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/mysql/basics/02-installation' },
        { text: '03. 数据类型', link: '/docs/database/mysql/basics/03-data-types' },
        { text: '04. 建表', link: '/docs/database/mysql/basics/04-create-table' },
        { text: '05. 约束', link: '/docs/database/mysql/basics/05-constraints' },
        { text: '06. 用户权限', link: '/docs/database/mysql/basics/06-users-permissions' },
      ]
    },
    {
      text: 'MySQL 索引',
      collapsed: true,
      items: [
        { text: '01. 索引简介', link: '/docs/database/mysql/index/01-intro' },
        { text: '02. B+树', link: '/docs/database/mysql/index/02-btree' },
        { text: '03. 索引类型', link: '/docs/database/mysql/index/03-types' },
        { text: '04. 索引优化', link: '/docs/database/mysql/index/04-optimization' },
        { text: '05. EXPLAIN', link: '/docs/database/mysql/index/05-explain' },
      ]
    },
    {
      text: 'MySQL 进阶',
      collapsed: true,
      items: [
        { text: '01. 存储引擎', link: '/docs/database/mysql/advanced/01-storage-engines' },
        { text: '02. 锁机制', link: '/docs/database/mysql/advanced/02-locks' },
        { text: '03. MVCC', link: '/docs/database/mysql/advanced/03-mvcc' },
        { text: '04. 日志系统', link: '/docs/database/mysql/advanced/04-logs' },
      ]
    },
    {
      text: 'MySQL 优化',
      collapsed: true,
      items: [
        { text: '01. 查询优化', link: '/docs/database/mysql/optimization/01-query-optimization' },
        { text: '02. 表设计优化', link: '/docs/database/mysql/optimization/02-schema-optimization' },
        { text: '03. 配置优化', link: '/docs/database/mysql/optimization/03-config-optimization' },
        { text: '04. 慢查询', link: '/docs/database/mysql/optimization/04-slow-query' },
      ]
    },
    {
      text: 'MySQL 分库分表',
      collapsed: true,
      items: [
        { text: '01. 分库分表简介', link: '/docs/database/mysql/sharding/01-intro' },
        { text: '02. 垂直拆分', link: '/docs/database/mysql/sharding/02-vertical' },
        { text: '03. 水平拆分', link: '/docs/database/mysql/sharding/03-horizontal' },
        { text: '04. ShardingSphere', link: '/docs/database/mysql/sharding/04-shardingsphere' },
      ]
    },
    {
      text: 'MySQL 实战',
      collapsed: true,
      items: [
        { text: '01. 备份恢复', link: '/docs/database/mysql/practice/01-backup-restore' },
        { text: '02. 主从复制', link: '/docs/database/mysql/practice/02-replication' },
        { text: '03. 高可用', link: '/docs/database/mysql/practice/03-high-availability' },
      ]
    },
    {
      text: 'PostgreSQL 基础',
      collapsed: true,
      items: [
        { text: '01. PostgreSQL 简介', link: '/docs/database/postgresql/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/postgresql/basics/02-installation' },
        { text: '03. 数据类型', link: '/docs/database/postgresql/basics/03-data-types' },
        { text: '04. 表操作', link: '/docs/database/postgresql/basics/04-tables' },
        { text: '05. 约束', link: '/docs/database/postgresql/basics/05-constraints' },
      ]
    },
    {
      text: 'PostgreSQL 进阶',
      collapsed: true,
      items: [
        { text: '01. JSON 支持', link: '/docs/database/postgresql/advanced/01-json' },
        { text: '02. 全文搜索', link: '/docs/database/postgresql/advanced/02-full-text-search' },
        { text: '03. 扩展', link: '/docs/database/postgresql/advanced/03-extensions' },
        { text: '04. 分区表', link: '/docs/database/postgresql/advanced/04-partitioning' },
      ]
    },
    {
      text: 'PostgreSQL 性能',
      collapsed: true,
      items: [
        { text: '01. 查询优化', link: '/docs/database/postgresql/performance/01-query-optimization' },
        { text: '02. 索引策略', link: '/docs/database/postgresql/performance/02-indexing' },
        { text: '03. 配置调优', link: '/docs/database/postgresql/performance/03-tuning' },
      ]
    },
    {
      text: 'PostgreSQL 复制',
      collapsed: true,
      items: [
        { text: '01. 流复制', link: '/docs/database/postgresql/replication/01-streaming' },
        { text: '02. 逻辑复制', link: '/docs/database/postgresql/replication/02-logical' },
        { text: '03. 高可用', link: '/docs/database/postgresql/replication/03-high-availability' },
      ]
    },
    {
      text: 'MongoDB 基础',
      collapsed: true,
      items: [
        { text: '01. MongoDB 简介', link: '/docs/database/mongodb/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/mongodb/basics/02-installation' },
        { text: '03. CRUD', link: '/docs/database/mongodb/basics/03-crud' },
        { text: '04. 查询操作符', link: '/docs/database/mongodb/basics/04-query-operators' },
        { text: '05. 索引', link: '/docs/database/mongodb/basics/05-indexes' },
      ]
    },
    {
      text: 'MongoDB 进阶',
      collapsed: true,
      items: [
        { text: '01. 聚合管道', link: '/docs/database/mongodb/advanced/01-aggregation' },
        { text: '02. 数据建模', link: '/docs/database/mongodb/advanced/02-data-modeling' },
        { text: '03. 事务', link: '/docs/database/mongodb/advanced/03-transactions' },
        { text: '04. Change Streams', link: '/docs/database/mongodb/advanced/04-change-streams' },
      ]
    },
    {
      text: 'MongoDB 复制',
      collapsed: true,
      items: [
        { text: '01. 副本集', link: '/docs/database/mongodb/replication/01-replica-set' },
        { text: '02. 分片', link: '/docs/database/mongodb/replication/02-sharding' },
        { text: '03. 高可用', link: '/docs/database/mongodb/replication/03-high-availability' },
      ]
    },
    {
      text: 'MongoDB 实战',
      collapsed: true,
      items: [
        { text: '01. 性能优化', link: '/docs/database/mongodb/practice/01-performance' },
        { text: '02. 安全配置', link: '/docs/database/mongodb/practice/02-security' },
        { text: '03. 备份恢复', link: '/docs/database/mongodb/practice/03-backup' },
      ]
    },
    {
      text: 'Redis 基础',
      collapsed: true,
      items: [
        { text: '01. Redis 简介', link: '/docs/database/redis/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/redis/basics/02-installation' },
        { text: '03. 数据类型', link: '/docs/database/redis/basics/03-data-types' },
        { text: '04. 字符串', link: '/docs/database/redis/basics/04-strings' },
        { text: '05. 列表', link: '/docs/database/redis/basics/05-lists' },
        { text: '06. 集合', link: '/docs/database/redis/basics/06-sets' },
        { text: '07. 哈希', link: '/docs/database/redis/basics/07-hashes' },
        { text: '08. 有序集合', link: '/docs/database/redis/basics/08-sorted-sets' },
      ]
    },
    {
      text: 'Redis 进阶',
      collapsed: true,
      items: [
        { text: '01. 发布订阅', link: '/docs/database/redis/advanced/01-pub-sub' },
        { text: '02. 事务', link: '/docs/database/redis/advanced/02-transactions' },
        { text: '03. Lua 脚本', link: '/docs/database/redis/advanced/03-lua-scripting' },
        { text: '04. 持久化', link: '/docs/database/redis/advanced/04-persistence' },
        { text: '05. 内存管理', link: '/docs/database/redis/advanced/05-memory' },
      ]
    },
    {
      text: 'Redis 集群',
      collapsed: true,
      items: [
        { text: '01. 主从复制', link: '/docs/database/redis/cluster/01-replication' },
        { text: '02. 哨兵', link: '/docs/database/redis/cluster/02-sentinel' },
        { text: '03. Cluster', link: '/docs/database/redis/cluster/03-cluster' },
      ]
    },
    {
      text: 'Redis 实战',
      collapsed: true,
      items: [
        { text: '01. 缓存设计', link: '/docs/database/redis/practice/01-caching' },
        { text: '02. 分布式锁', link: '/docs/database/redis/practice/02-distributed-lock' },
        { text: '03. 限流', link: '/docs/database/redis/practice/03-rate-limiting' },
        { text: '04. 排行榜', link: '/docs/database/redis/practice/04-leaderboard' },
      ]
    },
    {
      text: 'Elasticsearch 基础',
      collapsed: true,
      items: [
        { text: '01. ES 简介', link: '/docs/database/elasticsearch/basics/01-intro' },
        { text: '02. 安装配置', link: '/docs/database/elasticsearch/basics/02-installation' },
        { text: '03. 索引操作', link: '/docs/database/elasticsearch/basics/03-indices' },
        { text: '04. 文档操作', link: '/docs/database/elasticsearch/basics/04-documents' },
        { text: '05. 映射', link: '/docs/database/elasticsearch/basics/05-mappings' },
      ]
    },
    {
      text: 'ES 搜索',
      collapsed: true,
      items: [
        { text: '01. 查询 DSL', link: '/docs/database/elasticsearch/search/01-query-dsl' },
        { text: '02. 全文搜索', link: '/docs/database/elasticsearch/search/02-full-text' },
        { text: '03. 聚合', link: '/docs/database/elasticsearch/search/03-aggregations' },
        { text: '04. 高亮', link: '/docs/database/elasticsearch/search/04-highlighting' },
      ]
    },
    {
      text: 'ES 进阶',
      collapsed: true,
      items: [
        { text: '01. 分析器', link: '/docs/database/elasticsearch/advanced/01-analyzers' },
        { text: '02. 分词器', link: '/docs/database/elasticsearch/advanced/02-tokenizers' },
        { text: '03. 性能优化', link: '/docs/database/elasticsearch/advanced/03-performance' },
      ]
    },
    {
      text: 'ES 集群',
      collapsed: true,
      items: [
        { text: '01. 集群架构', link: '/docs/database/elasticsearch/cluster/01-architecture' },
        { text: '02. 分片策略', link: '/docs/database/elasticsearch/cluster/02-sharding' },
        { text: '03. 集群管理', link: '/docs/database/elasticsearch/cluster/03-management' },
      ]
    },
  ],

  // DevOps
  '/docs/devops/': [
    {
      text: 'Git',
      collapsed: true,
      items: [
        { text: 'Git 工作流', link: '/docs/devops/git/workflow' },
      ]
    },
    {
      text: 'Docker',
      collapsed: true,
      items: [
        { text: 'Docker 基础', link: '/docs/devops/docker/basics' },
        { text: 'Docker Compose', link: '/docs/devops/docker/compose' },
      ]
    },
    {
      text: 'Kubernetes',
      collapsed: true,
      items: [
        { text: 'K8s 基础', link: '/docs/devops/kubernetes/basics' },
        { text: 'Istio', link: '/docs/devops/kubernetes/istio' },
      ]
    },
    {
      text: 'CI/CD',
      collapsed: true,
      items: [
        { text: 'Jenkins', link: '/docs/devops/ci-cd/jenkins' },
        { text: 'GitHub Actions', link: '/docs/devops/ci-cd/github-actions' },
        { text: 'GitLab CI', link: '/docs/devops/ci-cd/gitlab-ci' },
      ]
    },
    {
      text: '监控',
      collapsed: true,
      items: [
        { text: 'Prometheus', link: '/docs/devops/monitor/prometheus' },
        { text: 'Grafana', link: '/docs/devops/monitor/grafana' },
        { text: 'ELK', link: '/docs/devops/monitor/elk' },
      ]
    },
    {
      text: '云服务',
      collapsed: true,
      items: [
        { text: 'AWS', link: '/docs/devops/cloud/aws' },
        { text: '阿里云', link: '/docs/devops/cloud/aliyun' },
        { text: 'Terraform', link: '/docs/devops/cloud/terraform' },
      ]
    },
  ],

  // AI
  '/docs/ai/': [
    {
      text: '机器学习',
      collapsed: true,
      items: [
        { text: 'ML 基础', link: '/docs/ai/ml/basics' },
        { text: '监督学习', link: '/docs/ai/ml/supervised' },
        { text: '无监督学习', link: '/docs/ai/ml/unsupervised' },
        { text: 'Scikit-learn', link: '/docs/ai/ml/sklearn' },
      ]
    },
    {
      text: '深度学习',
      collapsed: true,
      items: [
        { text: 'TensorFlow', link: '/docs/ai/dl/tensorflow' },
        { text: 'PyTorch', link: '/docs/ai/dl/pytorch' },
        { text: 'CNN', link: '/docs/ai/dl/cnn' },
        { text: 'Transformer', link: '/docs/ai/dl/transformer' },
      ]
    },
    {
      text: '数据分析',
      collapsed: true,
      items: [
        { text: 'NumPy', link: '/docs/ai/data/numpy' },
        { text: 'Pandas', link: '/docs/ai/data/pandas' },
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
    },
  ],

  // 移动开发
  '/docs/mobile/': [
    {
      text: 'Android',
      collapsed: true,
      items: [
        { text: 'Kotlin', link: '/docs/mobile/android/kotlin' },
        { text: 'Android SDK', link: '/docs/mobile/android/sdk' },
        { text: 'Jetpack Compose', link: '/docs/mobile/android/compose' },
      ]
    },
    {
      text: 'iOS',
      collapsed: true,
      items: [
        { text: 'Swift', link: '/docs/mobile/ios/swift' },
        { text: 'UIKit', link: '/docs/mobile/ios/uikit' },
        { text: 'SwiftUI', link: '/docs/mobile/ios/swiftui' },
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
    },
  ],

  // 其他
  '/docs/other/': [
    {
      text: '桌面开发',
      collapsed: true,
      items: [
        { text: 'Electron', link: '/docs/other/desktop/electron' },
        { text: 'Qt', link: '/docs/other/desktop/qt' },
        { text: 'Flutter Desktop', link: '/docs/other/desktop/flutter' },
      ]
    },
    {
      text: '游戏开发',
      collapsed: true,
      items: [
        { text: 'Unity', link: '/docs/other/game/unity' },
        { text: 'Unreal', link: '/docs/other/game/unreal' },
        { text: 'Shader', link: '/docs/other/game/shader' },
      ]
    },
    {
      text: '嵌入式',
      collapsed: true,
      items: [
        { text: 'C/C++', link: '/docs/other/embedded/c-cpp' },
        { text: 'STM32', link: '/docs/other/embedded/stm32' },
        { text: 'FreeRTOS', link: '/docs/other/embedded/freertos' },
      ]
    },
    {
      text: '区块链',
      collapsed: true,
      items: [
        { text: '区块链基础', link: '/docs/other/blockchain/basics' },
        { text: 'Solidity', link: '/docs/other/blockchain/solidity' },
        { text: 'Web3', link: '/docs/other/blockchain/web3' },
      ]
    },
    {
      text: '安全',
      collapsed: true,
      items: [
        { text: '安全基础', link: '/docs/other/security/basics' },
        { text: 'Web 安全', link: '/docs/other/security/web' },
        { text: '渗透测试', link: '/docs/other/security/pentest' },
      ]
    },
  ],
}
