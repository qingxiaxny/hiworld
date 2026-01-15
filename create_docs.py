import os

docs_structure = {
    # 前端开发
    "frontend/basics": ["web-intro", "dev-environment", "browser-devtools", "vscode-setup"],
    "frontend/html": ["01-intro", "02-text-elements", "03-links-images", "04-tables", "05-forms", "06-form-validation", "07-semantic-tags", "08-multimedia", "09-canvas-basics", "10-svg-basics", "11-accessibility"],
    "frontend/css/basics": ["01-intro", "02-selectors", "03-specificity", "04-box-model", "05-colors-units", "06-text-fonts", "07-backgrounds"],
    "frontend/css/layout": ["01-display", "02-position", "03-float", "04-flexbox", "05-flexbox-practice", "06-grid", "07-grid-practice", "08-multi-column"],
    "frontend/css/responsive": ["01-media-queries", "02-mobile-first", "03-viewport", "04-responsive-images"],
    "frontend/css/advanced": ["01-transitions", "02-animations", "03-transforms", "04-variables", "05-calc-functions", "06-pseudo-elements"],
    "frontend/css/practice": ["01-common-layouts", "02-component-styles", "03-css-reset"],
    "frontend/javascript/basics": ["01-intro", "02-variables", "03-operators", "04-conditionals", "05-loops", "06-functions", "07-scope", "08-arrays", "09-objects", "10-strings"],
    "frontend/javascript/es6": ["01-let-const", "02-arrow-functions", "03-template-literals", "04-destructuring", "05-spread-rest", "06-classes", "07-modules", "08-symbols", "09-iterators", "10-map-set", "11-proxy-reflect"],
    "frontend/javascript/dom": ["01-dom-intro", "02-selecting", "03-manipulation", "04-events", "05-event-delegation", "06-forms", "07-bom"],
    "frontend/javascript/async": ["01-callbacks", "02-promises", "03-promise-methods", "04-async-await", "05-fetch-api", "06-error-handling", "07-event-loop"],
    "frontend/javascript/advanced": ["01-this", "02-prototype", "03-inheritance", "04-execution-context", "05-memory", "06-regexp", "07-design-patterns"],
    "frontend/javascript/practice": ["01-debugging", "02-performance", "03-best-practices"],
    "frontend/typescript/basics": ["01-intro", "02-setup", "03-basic-types", "04-type-inference", "05-interfaces", "06-type-aliases", "07-union-intersection"],
    "frontend/typescript/advanced": ["01-generics", "02-generic-constraints", "03-utility-types", "04-conditional-types", "05-mapped-types", "06-decorators", "07-declaration-files"],
    "frontend/typescript/practice": ["01-with-react", "02-with-vue", "03-config"],
    "frontend/react/basics": ["01-intro", "02-create-app", "03-jsx", "04-components", "05-props", "06-state", "07-events", "08-conditional", "09-lists", "10-forms"],
    "frontend/react/hooks": ["01-useState", "02-useEffect", "03-useContext", "04-useRef", "05-useMemo", "06-useCallback", "07-useReducer", "08-custom-hooks", "09-hooks-rules"],
    "frontend/react/advanced": ["01-lifecycle", "02-context", "03-hoc", "04-render-props", "05-portals", "06-error-boundaries", "07-suspense", "08-server-components"],
    "frontend/react/state": ["01-state-lifting", "02-redux-intro", "03-redux-toolkit", "04-zustand", "05-jotai"],
    "frontend/react/router": ["01-intro", "02-nested-routes", "03-params", "04-navigation", "05-guards"],
    "frontend/react/practice": ["01-project-structure", "02-styling", "03-testing", "04-performance"],
    "frontend/vue/basics": ["01-intro", "02-create-app", "03-template", "04-directives", "05-computed", "06-watchers", "07-class-style", "08-conditional", "09-lists", "10-events"],
    "frontend/vue/components": ["01-basics", "02-props", "03-emits", "04-slots", "05-provide-inject", "06-dynamic", "07-async"],
    "frontend/vue/composition": ["01-setup", "02-ref-reactive", "03-computed-watch", "04-lifecycle", "05-composables", "06-script-setup"],
    "frontend/vue/state": ["01-pinia-intro", "02-pinia-state", "03-pinia-getters", "04-pinia-actions", "05-pinia-plugins"],
    "frontend/vue/router": ["01-intro", "02-routes", "03-params", "04-guards", "05-lazy-loading"],
    "frontend/vue/practice": ["01-project-structure", "02-styling", "03-performance"],
}

docs_structure.update({
    "frontend/engineering/package-managers": ["01-npm", "02-yarn", "03-pnpm"],
    "frontend/engineering/build-tools": ["01-webpack-intro", "02-webpack-config", "03-webpack-loaders", "04-webpack-plugins", "05-webpack-optimize", "06-vite-intro", "07-vite-config", "08-rollup"],
    "frontend/engineering/code-quality": ["01-eslint", "02-prettier", "03-husky", "04-lint-staged"],
    "frontend/engineering/testing": ["01-jest-intro", "02-unit-testing", "03-vitest", "04-testing-library", "05-e2e-cypress"],
    "frontend/engineering/deployment": ["01-build", "02-cdn", "03-ci-cd"],
    "frontend/advanced/performance": ["01-metrics", "02-loading", "03-rendering", "04-caching", "05-monitoring"],
    "frontend/advanced/ssr": ["01-intro", "02-nextjs", "03-nuxt", "04-ssg"],
    "frontend/advanced/micro-frontend": ["01-intro", "02-qiankun", "03-module-federation"],
    "frontend/advanced/pwa": ["01-intro", "02-service-worker", "03-manifest"],
    "frontend/advanced/security": ["01-xss", "02-csrf", "03-https"],
    # 后端开发
    "backend/basics": ["01-intro", "02-http", "03-restful", "04-api-design", "05-authentication"],
    "backend/nodejs/basics": ["01-intro", "02-setup", "03-modules", "04-npm", "05-fs", "06-path", "07-events", "08-streams", "09-buffer", "10-process"],
    "backend/nodejs/http": ["01-http-module", "02-create-server", "03-routing", "04-middleware"],
    "backend/nodejs/express": ["01-intro", "02-routing", "03-middleware", "04-request", "05-response", "06-static", "07-template", "08-error-handling", "09-project-structure"],
    "backend/nodejs/koa": ["01-intro", "02-middleware", "03-context", "04-router"],
    "backend/nodejs/nestjs": ["01-intro", "02-modules", "03-controllers", "04-providers", "05-dependency-injection", "06-pipes", "07-guards", "08-interceptors", "09-typeorm"],
    "backend/nodejs/database": ["01-mysql-driver", "02-mongodb-driver", "03-sequelize", "04-prisma", "05-redis"],
    "backend/nodejs/auth": ["01-session", "02-jwt", "03-oauth", "04-passport"],
    "backend/nodejs/advanced": ["01-cluster", "02-pm2", "03-websocket", "04-graphql", "05-microservices"],
    "backend/python/basics": ["01-intro", "02-setup", "03-syntax", "04-data-types", "05-control-flow", "06-functions", "07-modules", "08-oop", "09-exceptions", "10-file-io"],
    "backend/python/advanced": ["01-decorators", "02-generators", "03-context-managers", "04-metaclasses", "05-async"],
    "backend/python/django": ["01-intro", "02-project-setup", "03-models", "04-views", "05-templates", "06-urls", "07-forms", "08-admin", "09-orm", "10-auth", "11-rest-framework", "12-deployment"],
    "backend/python/flask": ["01-intro", "02-routing", "03-templates", "04-forms", "05-database", "06-blueprints", "07-extensions"],
    "backend/python/fastapi": ["01-intro", "02-path-params", "03-query-params", "04-request-body", "05-pydantic", "06-dependency", "07-security", "08-database", "09-async"],
    "backend/python/tools": ["01-pip", "02-virtualenv", "03-poetry", "04-pytest"],
})

docs_structure.update({
    "backend/java/basics": ["01-intro", "02-setup", "03-syntax", "04-data-types", "05-operators", "06-control-flow", "07-arrays", "08-methods", "09-strings"],
    "backend/java/oop": ["01-classes", "02-encapsulation", "03-inheritance", "04-polymorphism", "05-abstraction", "06-inner-classes", "07-enums"],
    "backend/java/advanced": ["01-exceptions", "02-generics", "03-collections", "04-streams", "05-lambda", "06-io", "07-nio", "08-multithreading", "09-concurrency", "10-reflection", "11-annotations"],
    "backend/java/jvm": ["01-architecture", "02-memory", "03-gc", "04-classloader", "05-tuning"],
    "backend/java/spring": ["01-intro", "02-ioc", "03-di", "04-aop", "05-beans"],
    "backend/java/springboot": ["01-intro", "02-quickstart", "03-configuration", "04-controllers", "05-services", "06-repositories", "07-validation", "08-exception", "09-security", "10-actuator", "11-testing"],
    "backend/java/mybatis": ["01-intro", "02-configuration", "03-mapper", "04-dynamic-sql", "05-cache", "06-mybatis-plus"],
    "backend/java/tools": ["01-maven", "02-gradle", "03-junit"],
    "backend/go/basics": ["01-intro", "02-setup", "03-syntax", "04-data-types", "05-control-flow", "06-functions", "07-arrays-slices", "08-maps", "09-structs", "10-pointers"],
    "backend/go/advanced": ["01-interfaces", "02-methods", "03-errors", "04-goroutines", "05-channels", "06-select", "07-sync", "08-context", "09-reflection"],
    "backend/go/gin": ["01-intro", "02-routing", "03-middleware", "04-request", "05-response", "06-validation", "07-project-structure"],
    "backend/go/gorm": ["01-intro", "02-models", "03-crud", "04-associations", "05-transactions", "06-hooks"],
    "backend/go/tools": ["01-modules", "02-testing", "03-profiling"],
    "backend/architecture/design-patterns": ["01-intro", "02-singleton", "03-factory", "04-builder", "05-prototype", "06-adapter", "07-decorator", "08-proxy", "09-observer", "10-strategy", "11-template"],
    "backend/architecture/microservices": ["01-intro", "02-service-split", "03-api-gateway", "04-service-discovery", "05-load-balancing", "06-circuit-breaker", "07-config-center", "08-distributed-tracing"],
    "backend/architecture/message-queue": ["01-intro", "02-rabbitmq", "03-kafka", "04-rocketmq", "05-patterns"],
    "backend/architecture/caching": ["01-intro", "02-strategies", "03-redis-cache", "04-local-cache", "05-cache-problems"],
    "backend/architecture/distributed": ["01-cap", "02-consistency", "03-distributed-lock", "04-distributed-id", "05-distributed-tx"],
    "backend/architecture/high-availability": ["01-intro", "02-redundancy", "03-failover", "04-disaster-recovery"],
})

docs_structure.update({
    # 数据库
    "database/basics": ["01-intro", "02-relational-vs-nosql", "03-data-modeling", "04-normalization", "05-er-diagram"],
    "database/sql/basics": ["01-intro", "02-ddl", "03-dml", "04-select", "05-where", "06-order-limit", "07-aggregate", "08-group-by", "09-distinct"],
    "database/sql/joins": ["01-intro", "02-inner-join", "03-left-join", "04-right-join", "05-full-join", "06-cross-join", "07-self-join"],
    "database/sql/advanced": ["01-subqueries", "02-union", "03-case", "04-window-functions", "05-cte", "06-views", "07-stored-procedures", "08-triggers", "09-transactions"],
    "database/sql/practice": ["01-common-queries", "02-interview-questions", "03-best-practices"],
    "database/mysql/basics": ["01-intro", "02-installation", "03-data-types", "04-constraints", "05-crud", "06-functions"],
    "database/mysql/index": ["01-intro", "02-btree", "03-index-types", "04-composite-index", "05-covering-index", "06-index-optimization", "07-index-failure"],
    "database/mysql/optimization": ["01-explain", "02-slow-query", "03-query-optimization", "04-table-optimization", "05-configuration"],
    "database/mysql/advanced": ["01-storage-engines", "02-innodb", "03-locks", "04-mvcc", "05-transaction-isolation", "06-binlog", "07-replication"],
    "database/mysql/sharding": ["01-intro", "02-vertical", "03-horizontal", "04-sharding-key", "05-middleware"],
    "database/mysql/practice": ["01-backup-restore", "02-monitoring", "03-troubleshooting"],
    "database/postgresql/basics": ["01-intro", "02-installation", "03-data-types", "04-crud", "05-psql"],
    "database/postgresql/advanced": ["01-json", "02-arrays", "03-full-text-search", "04-partitioning", "05-inheritance", "06-extensions"],
    "database/postgresql/performance": ["01-explain", "02-indexes", "03-vacuum"],
    "database/postgresql/replication": ["01-streaming", "02-logical"],
    "database/mongodb/basics": ["01-intro", "02-installation", "03-concepts", "04-crud", "05-query", "06-update"],
    "database/mongodb/advanced": ["01-aggregation", "02-indexes", "03-schema-design", "04-transactions", "05-change-streams"],
    "database/mongodb/replication": ["01-replica-set", "02-sharding"],
    "database/mongodb/practice": ["01-mongoose", "02-best-practices"],
    "database/redis/basics": ["01-intro", "02-installation", "03-strings", "04-lists", "05-sets", "06-hashes", "07-sorted-sets", "08-commands"],
    "database/redis/advanced": ["01-pub-sub", "02-transactions", "03-lua", "04-streams", "05-persistence", "06-memory"],
    "database/redis/cluster": ["01-sentinel", "02-cluster"],
    "database/redis/practice": ["01-caching", "02-session", "03-rate-limiting", "04-distributed-lock", "05-message-queue"],
    "database/elasticsearch/basics": ["01-intro", "02-installation", "03-concepts", "04-crud", "05-mapping"],
    "database/elasticsearch/search": ["01-query-dsl", "02-full-text", "03-term-queries", "04-compound", "05-aggregations", "06-highlighting"],
    "database/elasticsearch/advanced": ["01-analyzers", "02-chinese", "03-index-templates", "04-aliases"],
    "database/elasticsearch/cluster": ["01-architecture", "02-sharding"],
})

docs_structure.update({
    # 移动开发
    "mobile/ios": ["swift", "swiftui", "uikit"],
    "mobile/android": ["kotlin", "compose", "sdk"],
    "mobile/cross-platform": ["react-native", "flutter", "uniapp"],
    "mobile/miniprogram": ["wechat", "alipay", "taro"],
    # AI/数据
    "ai/ml": ["basics", "sklearn", "supervised", "unsupervised"],
    "ai/dl": ["pytorch", "tensorflow", "cnn", "transformer"],
    "ai/data": ["pandas", "numpy", "visualization", "tableau"],
    "ai/bigdata": ["hadoop", "spark", "flink", "airflow"],
    # 运维部署
    "devops/docker": ["basics", "compose"],
    "devops/kubernetes": ["basics", "istio"],
    "devops/git": ["workflow"],
    "devops/ci-cd": ["github-actions", "jenkins", "gitlab-ci"],
    "devops/cloud": ["aws", "aliyun", "terraform"],
    "devops/monitor": ["prometheus", "grafana", "elk"],
    # 其他方向
    "other/game": ["unity", "unreal", "shader"],
    "other/blockchain": ["basics", "solidity", "web3"],
    "other/embedded": ["c-cpp", "stm32", "freertos"],
    "other/security": ["basics", "web", "pentest"],
    "other/desktop": ["electron", "qt", "flutter"],
})

# 创建目录和文件
for path, files in docs_structure.items():
    dir_path = os.path.join("docs", path)
    os.makedirs(dir_path, exist_ok=True)
    for file in files:
        file_path = os.path.join(dir_path, f"{file}.md")
        title = file.replace("-", " ").replace("_", " ")
        if title[0].isdigit():
            title = title.split(" ", 1)[1] if " " in title else title
        title = title.title()
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(f"# {title}\n\n")
            f.write("<!-- 待编写 -->\n")

print("文档目录结构创建完成！")
