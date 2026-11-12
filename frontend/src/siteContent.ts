import { Bot, Code2, Cpu, Layers, Server, Terminal } from 'lucide-react'
import type { Post, Profile, Project, SitePayload } from './types'

export const GITHUB_URL = 'https://github.com/arookieofc'

export const organizationMemberships = [
  {
    label: '@ai-cqut',
    name: 'ai-cqut',
    url: 'https://github.com/ai-cqut',
    description: '重庆理工大学两江人工智能学院 GitHub 官方组织。',
    focus: ['学院工程', 'AI 平台', '校园系统'],
  },
  {
    label: '@unixwin',
    name: 'unixwin',
    url: 'https://github.com/unixwin',
    description: '面向 Windows 的 Unix 风格工具链组织，维护 Shell、命令行工具等，持续提升 Windows 下的终端体验。',
    focus: ['Windows CLI', 'Shell', 'Unix-style Tools'],
  },
  {
    label: '@EfficiencAI',
    name: 'EfficiencAI',
    url: 'https://github.com/EfficiencAI',
    description: '围绕 AI 效率、智能学习和工作流辅助的工程组织，探索对话树、MCP 与 AI 应用平台。',
    focus: ['AI Efficiency', 'MCP', 'Learning Tools'],
  },
]

export const emptyProfile: Profile = {
  displayName: 'arookieofc',
  headline: '全栈工程师，专注 AI Agent 系统与后端基础设施。',
  bio: 'unixwin组织维护者,microsoft/coreutils,nushell/reedline贡献者',
  avatarUrl: '/avatar.jpg',
  location: 'China',
  email: '',
}

export const stackHighlights = [
  { label: 'AI Agent', detail: '工作流编排、工具调用、自动化', icon: Bot },
  { label: 'Java Spring', detail: '服务架构、API、业务后端', icon: Server },
  { label: 'Rust', detail: '框架实验、系统编程、性能', icon: Cpu },
  { label: 'TypeScript', detail: 'React 前端、工具链、全栈胶水层', icon: Code2 },
  { label: 'C++', detail: '底层思维、算法、原生代码', icon: Terminal },
  { label: 'Full Stack', detail: '从数据库到交互体验', icon: Layers },
]

export const focusCards = [
  {
    title: 'Agent 原生工程',
    text: '把 AI Agent 当成工程流程的一部分，而不是噱头：规划、工具执行、审查、迭代都能进入闭环。',
  },
  {
    title: '后端优先的产品感',
    text: '熟悉 API 设计、数据建模、认证鉴权、服务边界，以及那些让产品真正稳定运行的细节。',
  },
  {
    title: '多语言构建者视角',
    text: 'Java Spring 做业务系统，Rust 做框架和系统实验，TypeScript 做产品界面，C++ 做底层能力训练。',
  },
]

export const resumeSkillGroups = [
  { title: '后端工程', items: ['Java Spring', 'Rust', 'REST API', 'JWT', 'MySQL', 'DDD'] },
  { title: 'AI Agent', items: ['RAG', 'MCP', 'Tool Calling', 'LLM Gateway', '工作流编排'] },
  { title: '前端与全栈', items: ['React', 'TypeScript', 'Vite', '后台系统', '内容管理'] },
  { title: '系统与工具', items: ['C++', 'Shell', 'Windows CLI', '消息队列', '开发者工具'] },
]

export const resumeTimeline = [
  {
    title: '个人站点与博客后台',
    meta: 'React TypeScript / Vite / 静态部署',
    text: '把个人主页、简历、文章入口和作品案例收敛为可静态托管的前端站点，部署链路更轻。',
  },
  {
    title: 'AI Agent 与 LLM 基础设施',
    meta: 'RAG / MCP / LLM Gateway',
    text: '围绕工具调用、检索增强、协议适配和模型网关做工程化实践，关注 Agent 能否进入真实工作流。',
  },
  {
    title: '多语言工程实践',
    meta: 'Java Spring / Rust / TypeScript / C++',
    text: '用 Java 处理业务系统，用 Rust 做框架和基础设施实验，用 TypeScript 做产品界面，用 C++ 训练系统层能力。',
  },
]

export const deploymentNotes = [
  '当前站点按纯前端静态站部署，构建产物在 frontend/dist。',
  '可用 Nginx、Vercel、Netlify 或任意静态文件服务托管。',
  '不再依赖后端服务、数据库、JWT 或 API 反向代理。',
]

export const awardCertificates = [
  {
    title: '第十五届蓝桥杯全国总决赛优秀奖',
    subtitle: 'Java 软件开发大学 B 组',
    issuer: '工业和信息化部人才交流中心 / 蓝桥杯大赛组委会',
    date: '2024-06-02',
    imageUrl: '/award-bluebridge-2024.jpg',
    description: '荣获第十五届蓝桥杯全国软件和信息技术专业人才大赛全国总决赛 Java 软件开发大学 B 组优秀奖。',
  },
  {
    title: '第二十七届中国机器人及人工智能大赛全国总决赛一等奖',
    subtitle: '机器人任务挑战赛（自主巡航）',
    issuer: '中国机器人及人工智能大赛组委会',
    date: '2025-08',
    imageUrl: '/award-craic-2025.png',
    description: '重庆理工大学代表队在全国总决赛中表现优异，荣获一等奖。',
  },
]

export const curatedProjects: Project[] = [
  {
    id: 1,
    name: 'Personal Blog Studio',
    description: '个人主页与作品集静态站点，使用 React TypeScript 构建，覆盖简历、文章入口、作品列表和项目案例。',
    url: '',
    repoUrl: 'https://github.com/arookieofc',
    techStack: 'React, TypeScript, Vite, Static Site',
    featured: true,
  },
  {
    id: 2,
    name: 'rust-spring',
    description: 'Rust 后端框架实验，围绕 IoC、配置、路由宏、组件注册和 Spring 风格启动体验组织。',
    url: '',
    repoUrl: 'https://github.com/arookieofc/rust-spring',
    techStack: 'Rust, Procedural Macro, IoC, HTTP Server',
    featured: true,
  },
  {
    id: 3,
    name: 'AIGateway',
    description: 'Rust 实现的高并发模型网关与限流计费系统，覆盖租户 API Key、Redis 多维限流、Token 配额、PostgreSQL 用量审计和 OpenAI-compatible Provider 适配。',
    url: '',
    repoUrl: 'https://github.com/arookieofc/AI_Gateway',
    techStack: 'Rust, Axum, Tokio, Redis, PostgreSQL, SQLx, Reqwest, SSE, DDD',
    featured: true,
  },
  {
    id: 4,
    name: 'ferryllm',
    description: 'LLM 协议中间件，用统一 IR 适配 OpenAI 兼容接口、Anthropic 风格请求、工具调用和流式输出。',
    url: 'https://docs.rs/ferryllm/latest/ferryllm/',
    repoUrl: 'https://github.com/arookieofc/ferryllm',
    techStack: 'Rust, LLM, OpenAI API, Anthropic, Tool Calling',
    featured: true,
  },
  {
    id: 5,
    name: 'cxxmcp',
    description: 'C++ MCP SDK，围绕 JSON-RPC、传输层、协议校验和示例工具构建可集成的 MCP 能力。',
    url: '',
    repoUrl: 'https://github.com/arookieofc/cxxmcp',
    techStack: 'C++, MCP, JSON-RPC, SDK, CMake',
    featured: true,
  },
  {
    id: 6,
    name: 'WinuxCmd',
    description: 'Windows 原生命令行工具集，用 C++ 提供轻量 Linux 风格命令，适合管道组合和日常终端工作流。',
    url: '',
    repoUrl: 'https://github.com/unixwin/WinuxCmd',
    techStack: 'C++, Windows CLI, File Tools, Terminal',
    featured: false,
  },
  {
    id: 7,
    name: 'WinuxSH',
    description: 'Rust Windows Shell 实验，覆盖命令解析、补全、脚本、主题和插件化扩展。',
    url: '',
    repoUrl: 'https://github.com/unixwin/winuxsh',
    techStack: 'Rust, Shell, Parser, Plugin, Windows',
    featured: true,
  },
  {
    id: 8,
    name: 'rubash',
    description: '使用 Rust 从零重写 GNU Bash 的 POSIX 兼容 Shell，覆盖词法分析、AST 解析、内建命令、重定向执行和 GNU Bash upstream 测试 runner。',
    url: 'https://crates.io/crates/rubash',
    repoUrl: 'https://github.com/unixwin/rubash',
    techStack: 'Rust, Shell, Bash, Parser, Executor, POSIX',
    featured: true,
  },
  {
    id: 9,
    name: 'Agentic RAG Tool System',
    description: '面向 Agent 调用的 RAG 工具系统，拆分 DAO、Service、Tool Schema、Runtime 和 Controller。',
    url: '',
    repoUrl: 'https://github.com/arookieofc',
    techStack: 'RAG, MCP, Agent Tool, Vector Search, CLI',
    featured: true,
  },
  {
    id: 10,
    name: 'arookieofcOS',
    description: 'Tauri 桌面环境实验，用 React UI 和 Rust 命令桥接系统信息、文件、终端和监控能力。',
    url: '',
    repoUrl: 'https://github.com/arookieofc/arookieofcOS',
    techStack: 'Tauri, React, Rust, IPC, Desktop',
    featured: false,
  },
  {
    id: 11,
    name: 'arookieofcMQ',
    description: 'Rust 消息队列实现练习，围绕生产消费、FIFO 队列、持久化和消息处理器抽象展开。',
    url: '',
    repoUrl: 'https://github.com/arookieofc/arookieofcMQ',
    techStack: 'Rust, Message Queue, Producer Consumer, Storage',
    featured: false,
  },
  {
    id: 12,
    name: 'Advisor AI Platform',
    description: '全栈智能顾问平台，把前端、业务后端、RAG Agent 服务、向量检索和认证链路组合成完整系统。',
    url: '',
    repoUrl: 'https://github.com/arookieofc',
    techStack: 'React, Spring Boot, Python, RAG, PostgreSQL, pgvector',
    featured: true,
  },
  {
    id: 13,
    name: 'arookieofcDB',
    description: 'Rust 迷你 KV 数据库引擎，围绕 WAL、B+Tree、Checkpoint、命令执行和轻量 IoC 容器拆解数据库核心机制。',
    url: '',
    repoUrl: 'https://github.com/arookieofc/arookieofcDB',
    techStack: 'Rust, KV Store, WAL, B+Tree, Checkpoint, IoC',
    featured: true,
  },
  {
    id: 14,
    name: 'niubash',
    description: 'AI 原生的 Bash：真 bash 语法、真 Unix 命令、真 git，原生跑在 Windows / Linux / Android / macOS / 鸿蒙上，已正式上架 winget。',
    url: '',
    repoUrl: 'https://github.com/unixwin/niubash',
    techStack: 'Rust, Shell, Bash, WinuxCmd, niu-git',
    featured: true,
  },
]

export const projectEvidence: Record<string, { label: string; url: string }[]> = {
  'Personal Blog Studio': [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/personal' },
  ],
  'rust-spring': [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/rust-spring' },
  ],
  AIGateway: [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/AI_Gateway' },
  ],
  ferryllm: [
    { label: 'docs.rs crate', url: 'https://docs.rs/ferryllm/latest/ferryllm/' },
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/ferryllm' },
  ],
  cxxmcp: [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/cxxmcp' },
  ],
  WinuxCmd: [
    { label: 'GitHub repository', url: 'https://github.com/unixwin/WinuxCmd' },
  ],
  WinuxSH: [
    { label: 'GitHub repository', url: 'https://github.com/unixwin/winuxsh' },
  ],
  rubash: [
    { label: 'crates.io package', url: 'https://crates.io/crates/rubash' },
    { label: 'GitHub repository', url: 'https://github.com/unixwin/rubash' },
  ],
  'Agentic RAG Tool System': [
    { label: 'GitHub profile', url: 'https://github.com/arookieofc' },
  ],
  arookieofcOS: [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/arookieofcOS' },
  ],
  arookieofcMQ: [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/arookieofcMQ' },
  ],
  'Advisor AI Platform': [
    { label: 'GitHub repository', url: 'https://github.com/ai-cqut/advisor-ai-platform' },
  ],
  arookieofcDB: [
    { label: 'GitHub repository', url: 'https://github.com/arookieofc/arookieofcDB' },
  ],
}

export const staticPosts: Post[] = []

export const staticSite: SitePayload = {
  profile: emptyProfile,
  projects: curatedProjects,
  socialLinks: [],
  categories: [],
  tags: [],
}

export type ProjectCaseCopy = {
  focus: string
  challenge: string
  solution: string
  impact: string
  highlights?: string[]
  details?: string[]
  decisions?: string[]
  architecture?: string[]
  architectureTitle?: string
  architectureSubtitle?: string
  architectureLayers?: ProjectArchitectureLayer[]
  architectureRelations?: string[]
  extraArchitectures?: ProjectArchitectureDiagram[]
  dataFlow?: string[]
}

export type ProjectArchitectureDiagram = {
  title?: string
  subtitle?: string
  layers?: ProjectArchitectureLayer[]
  relations?: string[]
  fallbackItems?: string[]
}

export type ProjectArchitectureLayer = {
  title: string
  items: string[]
}

export const projectCaseEnhancements: Record<string, Pick<ProjectCaseCopy, 'highlights' | 'details' | 'decisions'>> = {
  'Personal Blog Studio': {
    highlights: ['纯前端静态部署', 'GitHub Pages 自动发布', '构建时同步 GitHub 活动数据'],
    details: ['使用 Vite base=/ 适配 arookieofc.site 自定义域名根路径。', 'GitHub Actions 在构建前运行 sync-github-contributions.mjs 生成 public/github-contributions.json。', 'siteContent.ts 集中维护个人简介、组织、项目案例、架构图和静态文案。'],
    decisions: ['选择纯静态站，减少后端和数据库运维负担。', '构建时同步 GitHub 数据，避免前端暴露 token。', 'GitHub Pages 上传 frontend/dist，并复制 404.html 支持 SPA fallback。'],
  },
  'rust-spring': {
    highlights: ['Workspace 化 Spring 风格框架', '注解式 IoC', 'spring-boot 启动入口', '配置优先级与组件注册'],
    details: ['Cargo workspace 拆成 spring-core、spring-beans、spring-context、spring-aop、spring-expression、spring-util、spring-macro、spring-boot、spring-data、spring-web、example、initializer。', '过程宏表达 Component、autowired、Bean、Scope、Lazy、Value 等 Spring 语义。', '配置加载覆盖 application.properties、profile properties 和 SPRING_PROP_* 环境变量。'],
    decisions: ['用过程宏表达 Spring 注解语义，而不是运行时字符串配置。', '把 spring-boot 作为用户入口，core/beans/context 承担容器主体。', '先稳定 IoC、配置和组件注册，再把 AOP、SpEL、Data、Web 作为生态 crate 扩展。'],
  },
  AIGateway: {
    highlights: ['DDD 三层依赖方向', 'Redis Lua 滑动窗口限流', '租户 API Key + Master Key 双鉴权', 'Token 配额预扣/补扣/回滚', 'SSE 流式转发与 usage 异步回写'],
    details: ['公开 /v1/health、/v1/chat/completions、/v1/chat/stream 三个入口。', 'auth 中间件支持 ak_<key_id>.<secret>，通过 PostgreSQL 查询租户并用 Argon2 校验 secret，同时保留 constant-time master key fallback。', 'rate_limit 中间件按 tenant、route、model 组合生成 Redis key，用 Lua ZSET 滑动窗口返回 remaining/reset headers。', 'chat handler 会先估算 token 并消费 Redis 日配额，Provider 返回后按真实 usage 做补扣或回滚，并可写入 token_usage_records。', 'OpenAICompatibleGateway 用 reqwest 调用 /chat/completions，流式路径解析上游 data: SSE 行，处理 buffer overflow、chunk timeout、keepalive 和 usage oneshot。'],
    decisions: ['把领域端口放在 domain，HTTP handler、Redis/PostgreSQL DAO、Provider adapter 都作为外层实现，保持 interfaces -> application -> domain 的依赖方向。', '用 Redis 承担两类高频状态：滑动窗口限流和每日 token 配额，PostgreSQL 只保存租户、用量和审计等长期数据。', '流式链路不直接相信预估 token，而是先预扣保证配额，再通过 usage 通道异步补扣/回滚。', '认证同时支持租户 API Key 与管理密钥，便于生产租户隔离和本地/管理场景调试。'],
  },
  ferryllm: {
    highlights: ['Tauri 桌面 GUI + Rust Gateway Core', 'OpenAI / Responses / Anthropic 协议入口', 'Provider 探活与 metrics', '多客户端 Launcher'],
    details: ['Axum 暴露 /v1/chat/completions、/v1/responses、/responses、/v1/messages、/v1/models、/health、/readyz、/metrics。', '核心模块包含 adapter.rs、ir.rs、router.rs、server.rs、config.rs、entry/ 和 adapters/。', '支持模型重写、prompt cache、reasoning policy、usage logs 和 launcher env 注入。'],
    decisions: ['GUI、CLI 和 IDE/Agent 客户端共用 Rust gateway core，避免多处重复协议适配。', '先转换到统一 IR，再由 router/provider adapter 处理 OpenAI-compatible、Responses、Anthropic 等差异。', '本地 gateway 负责协议归一、健康检查和可观测性，客户端只关心统一入口。'],
  },
  cxxmcp: {
    highlights: ['C++17 MCP SDK', 'JSON-RPC Typed Models', 'Client / Server SDK', '多传输与认证开关', '高覆盖协议一致性'],
    details: ['CMake package targets 包含 cxxmcp::protocol、transport、handler、peer、service、client、server、auth、sdk。', 'Server SDK 提供 tool/prompt/resource registry、typed handler、task-aware call 和 notifications。', 'Client SDK 覆盖 HTTP、stdio、process stdio、async helpers、roots、sampling、elicitation、tasks。'],
    decisions: ['用 C++17 保持 SDK 可集成性和较低工具链门槛。', '围绕 JSON-RPC typed model 建协议对象，避免松散字符串处理。', '通过 CMake option 管理 HTTP、WebSocket、Auth、Client、Server 等可选能力。'],
  },
  WinuxCmd: {
    highlights: ['C++23 Windows 原生命令集', '148 个 GNU-style 命令', 'MSVC Modules', 'PowerShell/cmd 兼容', 'CPack 分发'],
    details: ['CMake 使用 BUILD_MODE、USE_STATIC_CRT、ENABLE_UNITY_BUILD、BUILD_STANDALONE 等选项组织构建。', '核心模块包含 dispatcher、cmd_meta、opt、utils、containers、pipeline 等，命令实现从 src/commands 自动收集。', '提供 PowerShell activation scripts、REPL fallback 和 ZIP/TGZ/7Z 打包。'],
    decisions: ['选择原生 Windows 实现，而不是依赖 WSL/VM。', '用 dispatcher + command metadata + option parser 统一 148 个命令的入口形态。', '通过 CPack 和安装脚本保持轻量分发，适配 PowerShell/cmd/Windows Terminal。'],
  },
  WinuxSH: {
    highlights: ['Rust Windows Shell Workspace', 'reedline REPL', 'lexer/parser/AST/executor 分层', '三层补全缓存', 'WinuxCmd DLL 集成'],
    details: ['Workspace 拆成 winsh-ast、winsh-core、winsh-lexer、winsh-parser 和根 binary。', 'completion 子系统包含 completer、external、bash_import、command、path、variables，并支持 TOML completion definitions。', '命令路由优先级为 builtins -> WinuxCmd DLL -> PATH，依赖 windows-sys、libloading、globset、shlex 等。'],
    decisions: ['Shell 负责交互体验，WinuxCmd 负责工具能力，二者组成 Windows Unix-style 工具链。', '把 lexer/parser/AST 与 runtime/executor 分离，便于脚本语义和交互语义共同演进。', '补全系统同时支持配置定义、bash completion import 和命令帮助描述增强。'],
  },
  rubash: {
    highlights: ['GNU Bash Rust 重写', '上游 Bash 测试 runner', 'crates.io 发布'],
    details: ['当前 alpha 阶段，重点覆盖 lexer、parser、executor 和 builtins。', '通过隔离 workdir/HOME/TMPDIR 的 upstream runner 追踪兼容性。', '以 TDD 方式逐步补齐变量展开、控制流、管道和作业控制。'],
    decisions: ['从 lexer/parser/executor 分层重写 Bash，降低兼容性调试复杂度。', '以 upstream Bash tests 作为行为基线，而不是只依赖自写样例。', 'alpha 阶段明确不承诺生产可用，优先推进核心语法覆盖。'],
  },
  'Agentic RAG Tool System': {
    highlights: ['FastAPI Agent 服务', 'RAGSearchTool 工具化检索', 'pgvector DAO + embedding engine', 'rerank strategy registry', 'MCP / workspace / web / memory tools'],
    details: ['app.py 注册 workspace、chat、graph 路由，并支持 all、indexer、api、cli 四种运行模式。', 'RAG_service 把 Tool Schema 转为 PgVectorDAO 检索，经过 build_rag_search_plan、embedding、candidate builder、rerank chain 和 response factory 输出结构化结果。', '工具系统包含 registry、permissions、rag_search、tool_search、web_search、web_fetch、workspace、memory_read/write、MCP loader/direct client 等模块。'],
    decisions: ['把 RAG 封装成 BaseTool 子类并声明 rag.read 权限，让 Agent 能稳定调用，而不是只服务页面问答。', 'Embedding、DAO、rerank、response factory 分开，便于替换 Ollama/OpenAI embedding 和不同排序策略。', 'MCP 工具加载与本地工具注册并存，方便把外部工具和内置检索能力放进同一 Agent runtime。'],
  },
  arookieofcOS: {
    highlights: ['Tauri 桌面实验', 'React + Rust IPC', '系统面板与命令桥'],
    details: ['用前端 UI 承载桌面交互，用 Rust command 处理系统能力。', '关注文件、终端、监控和系统信息的统一入口。', '体现桌面端工程与系统集成的探索。'],
    decisions: ['Tauri 负责系统桥接，React 负责桌面交互层。', '系统命令集中在 Rust command 层，避免 UI 直接处理平台细节。', '先做系统信息/文件/终端等可演示模块，再扩展桌面环境。'],
  },
  arookieofcMQ: {
    highlights: ['Rust 2024 消息队列练习', 'FIFO Queue', 'JSON Persistent Queue', 'Producer / Consumer 分离', 'MessageHandler 抽象'],
    details: ['模块包含 messages、id_generator、send_result、message_handler、messages_queue/*、producer/*、consumer/*。', '阶段路线从 FIFO 队列推进到 JSON 持久化、IdGenerator、生产消费分离和 handler 处理。', '使用 Arc、Mutex、AtomicBool 等标准并发原语组织线程协作。'],
    decisions: ['采用阶段化学习路线，不一开始追求完整 RocketMQ。', '先抽象消息、队列、生产者、消费者和处理器，再逐步替换存储实现。', '用 JSON 持久化与简单并发原语刻画消息中间件核心语义。'],
  },
  'Advisor AI Platform': {
    highlights: ['辅导员学生工作台', '学生主线业务对象', '学生档案/导入/详情', '打卡与课堂考勤闭环', 'AI 对话 + RAG + Memory 辅助决策', '审计/风控/反馈治理'],
    details: ['前端菜单按角色开放工作台、学生管理、打卡管理、课堂考勤、知识库管理、AI 对话、反馈、审计日志和监控中心。', '学生业务包含档案分页、详情、Excel 模板/导入、重复学号处理、班级/辅导员归属，以及学生签到摘要和明细。', '考勤业务包含课程排课、课堂考勤、异常处理和工单审核，MONITOR 角色可进入课堂考勤。', 'AI 侧由 chat-service 调用 agent，结合 RAG 知识库、Memory 长期记忆、学生/考勤内部接口和 MCP 工具入口服务辅导员问答。'],
    decisions: ['业务架构以“学生”为主对象，而不是以微服务部署为主轴：档案、导入、签到、考勤、异常和学生详情都围绕学生组织。', '角色边界按 ADMIN、ADVISOR、MONITOR 划分，菜单、路由和后端 PreAuthorize 共同控制业务可见范围。', 'AI 能力放在业务辅助层：RAG、Memory、Agent 工具和 MCP 不替代业务系统，而是读取知识与上下文辅助辅导员处理学生工作。', '审计、风控、反馈和监控作为横向治理能力，覆盖写入、聊天、工单、问题反馈和运维状态。'],
  },
  arookieofcDB: {
    highlights: ['Rust 2024 KV 引擎', 'WAL 追加日志', 'B+Tree 索引持久化', 'Checkpoint 恢复', 'inventory 编译期 IoC'],
    details: ['DbEngine 使用 Arc<RwLock<BPlusTree>> 保存索引，用 Mutex<WalManager> 串行化 WAL 写入。', 'WalManager 自管 000001.wal 文件、固定 header、变长 LogEntry、CRC32、64KB buffer、文件滚动和 sequence 恢复。', '命令层包含 set/get/delete builtins，执行流程按 register_args -> parse -> execute 拆分。'],
    decisions: ['WAL 选择追加文件和实时 fsync，第一阶段以一致性和学习价值优先。', 'Checkpoint 采用和 WAL 协同的恢复链路，启动时先加载 checkpoint 再 replay 更高 sequence 的日志。', 'IoC 从 rust-spring 最小迁移，使用 inventory + 全局 ApplicationContext 支撑组件注册。'],
  },
  niubash: {
    highlights: ['winget 已上架', '原生多平台', 'Bash 语法兼容', 'WinuxCmd / niu-git 集成'],
    details: ['winget 包标识符 Unixwin.Niubash，1.4.3 为 Inno Setup 安装包，装完自动加 PATH 和 Windows Terminal 集成。', '一种 shell 语法打通 Windows / Linux / macOS，不用 pwsh / cmd。', '命令层复用 WinuxCmd，git 能力由 niu-git 提供。'],
    decisions: ['选择 Rust 原生实现，不依赖 WSL / MSYS 模拟层。', 'Shell 语言层与命令层分离：niubash 管语法执行，WinuxCmd 管命令。'],
  },
}

export const projectArchitectureLayers: Record<string, ProjectArchitectureLayer[]> = {
  'Personal Blog Studio': [
    { title: '静态访问层', items: ['arookieofc.site', 'GitHub Pages', 'SPA fallback 404.html'] },
    { title: '前端运行层', items: ['React 19', 'TypeScript', 'Vite', 'lucide-react'] },
    { title: '页面与内容层', items: ['App.tsx 路由视图', 'siteContent.ts', 'MarkdownContent.tsx', '项目详情页'] },
    { title: '静态资产层', items: ['public/avatar.jpg', 'public/icons.svg', 'github-contributions.json', 'favicon.svg'] },
    { title: '发布流水线', items: ['GitHub Actions', 'npm ci', 'sync:github', 'vite build', 'upload-pages-artifact'] },
  ],
  'rust-spring': [
    { title: '用户入口层', items: ['spring-boot', 'example', 'initializer', 'SpringApplication 风格启动'] },
    { title: '宏与声明层', items: ['spring-macro', '#[Component]', '#[autowired]', '#[Bean]', '#[Value]'] },
    { title: '容器核心层', items: ['spring-core', 'spring-beans', 'spring-context', 'Bean 注册', '依赖注入'] },
    { title: '配置与表达式层', items: ['application.properties', 'profile properties', 'SPRING_PROP_*', 'spring-expression', 'spring-util'] },
    { title: '生态扩展层', items: ['spring-aop', 'spring-data', 'spring-web', 'HTTP layer roadmap'] },
  ],
  AIGateway: [
    { title: '运行时与框架', items: ['Rust 2021', 'Tokio async runtime', 'Axum 0.7', 'tracing / env-filter'] },
    { title: '网关接入层', items: ['Axum Router', 'request_id', 'auth middleware', 'rate_limit middleware', 'UnifiedJson / validator'] },
    { title: '应用编排层', items: ['ChatAppService', 'ProviderRouter', 'ChatGateway port', 'retry + backoff', 'SSE usage channel'] },
    { title: '治理与持久化', items: ['Redis Lua sliding window', 'Redis token quota', 'SQLx migrations', 'Tenant / Usage / Audit DAO'] },
    { title: '外部技术依赖', items: ['Redis', 'PostgreSQL', 'OpenAI-compatible API', 'reqwest client', 'upstream SSE stream'] },
  ],
  ferryllm: [
    { title: '桌面与客户端层', items: ['Tauri GUI', 'CLI', 'Codex / Claude Code / OpenCode / VS Code Launcher'] },
    { title: 'HTTP 协议入口', items: ['/v1/chat/completions', '/v1/responses', '/responses', '/v1/messages', '/v1/models', '/metrics'] },
    { title: 'Gateway Core', items: ['server.rs', 'entry/', 'config.rs', 'router.rs', 'provider probes', 'usage logs'] },
    { title: '统一中间表示', items: ['ir.rs', 'adapter.rs', 'model rewrite', 'prompt cache', 'reasoning policy', 'tool calling'] },
    { title: 'Provider 适配层', items: ['OpenAI-compatible', 'OpenAI Responses', 'Anthropic', 'Gemini feature', 'stream normalization'] },
  ],
  cxxmcp: [
    { title: '包与目标层', items: ['cxxmcp::sdk', 'protocol', 'transport', 'handler', 'peer', 'service', 'auth'] },
    { title: '协议建模层', items: ['MCP typed models', 'JSON-RPC', 'requests / notifications', 'schema helpers'] },
    { title: 'SDK 运行层', items: ['Server registry', 'Client SDK', 'typed handler', 'task-aware call', 'async helpers'] },
    { title: '传输层', items: ['stdio', 'process stdio', 'Streamable HTTP', 'legacy SSE', 'WebSocket'] },
    { title: '构建与一致性层', items: ['CMake options', 'HTTP / WebSocket / Auth feature', 'server 109/110', 'client 447/447'] },
  ],
  WinuxCmd: [
    { title: 'Shell 接入层', items: ['PowerShell activation', 'cmd', 'Windows Terminal', 'REPL fallback'] },
    { title: '分发与解析层', items: ['dispatcher', 'cmd_meta', 'opt parser', 'stdin pipeline'] },
    { title: '命令实现层', items: ['148 commands', 'src/commands auto-collect', 'file tools', 'text tools', 'search utilities'] },
    { title: 'C++23 基础层', items: ['MSVC modules', 'utils', 'containers', 'pipeline', 'Windows filesystem/process/console'] },
    { title: '构建分发层', items: ['BUILD_MODE', 'UNITY_BUILD', 'STATIC_CRT', 'CPack ZIP/TGZ/7Z', 'install scripts'] },
  ],
  WinuxSH: [
    { title: '交互入口层', items: ['reedline REPL', 'history', 'prompt', '.sh script runner'] },
    { title: '语言前端层', items: ['winsh-lexer', 'winsh-parser', 'winsh-ast', 'shlex', 'variable / glob expansion'] },
    { title: '运行执行层', items: ['winsh-core', 'executor', 'builtins', 'job/error model', 'PATH dispatch'] },
    { title: '补全与配置层', items: ['command/path/variables completion', 'bash_import', 'TOML definitions', '3-layer cache'] },
    { title: '扩展集成层', items: ['theme', 'plugin', 'libloading', 'WinuxCmd DLL', 'windows-sys'] },
  ],
  rubash: [
    { title: '命令入口层', items: ['src/main.rs', 'interactive input', 'script runner', 'crates.io binary'] },
    { title: '语法前端层', items: ['src/lexer', 'src/parser', 'tokens', 'AST', 'control flow parsing'] },
    { title: '执行语义层', items: ['src/executor', 'expansion', 'redirection', 'pipeline', 'functions roadmap'] },
    { title: '命令能力层', items: ['builtins', 'external commands', 'variables', 'exit status', 'job control roadmap'] },
    { title: '兼容测试层', items: ['third_party/bash', 'run-bash-upstream-tests.sh', 'isolated HOME/TMPDIR', '87/87 baseline'] },
  ],
  'Agentic RAG Tool System': [
    { title: 'Agent API 层', items: ['FastAPI app.py', '/chat/stream', 'graph routes', 'workspace routes', 'api / cli / indexer modes'] },
    { title: 'Agent 编排层', items: ['ChatStreamService', 'subagent provider', 'tool explorer', 'task planner', 'memory context'] },
    { title: '工具系统层', items: ['BaseTool', 'tool_registry', 'tool_catalog', 'permissions', 'ToolResult', 'tool_search'] },
    { title: 'RAG 检索层', items: ['RAGSearchTool', 'RAG_service', 'PgVectorDAO', 'embedding engine', 'rerank registry'] },
    { title: '外部工具与数据层', items: ['MCP client/loader', 'workspace tools', 'web_search/fetch', 'memory API', 'PostgreSQL/pgvector'] },
  ],
  arookieofcOS: [
    { title: '定位层', items: ['未在 D:\\code 找到独立源码', '当前按 Tauri 桌面实验定位', 'repo: arookieofcOS'] },
    { title: '桌面交互层', items: ['React UI', 'Tauri WebView', 'desktop panels'] },
    { title: 'IPC 桥接层', items: ['Tauri commands', 'Rust command handlers', 'typed invoke'] },
    { title: '系统能力层', items: ['system info', 'file access', 'terminal command', 'monitoring'] },
    { title: '平台边界层', items: ['Windows OS', 'local resources', 'permission capabilities'] },
  ],
  arookieofcMQ: [
    { title: '示例接入层', items: ['main/examples', 'Producer API', 'Consumer API', 'MessageHandler'] },
    { title: '消息模型层', items: ['messages', 'id_generator', 'send_result', 'message metadata'] },
    { title: '队列抽象层', items: ['messages_queue/*', 'FIFO queue', 'JSON persistent queue', 'queue trait'] },
    { title: '并发协调层', items: ['Arc', 'Mutex', 'AtomicBool', 'producer / consumer separation'] },
    { title: '学习演进层', items: ['Phase 1 FIFO', 'Phase 2 persistence', 'Phase 3 handler', 'Broker roadmap'] },
  ],
  'Advisor AI Platform': [
    { title: '角色与入口', items: ['ADMIN 管理员', 'ADVISOR 辅导员', 'MONITOR 班委/考勤员', '工作台', '学生管理', '打卡/课堂考勤', '知识库与 AI 对话'] },
    { title: '学生主线业务', items: ['学生档案', 'Excel 导入与批次', '重复学号处理', '班级/辅导员归属', '学生详情', '签到摘要/明细'] },
    { title: '日常管理闭环', items: ['打卡活动', '课程排课', '课堂考勤记录', '异常处理', '考勤工单审核', '反馈 Issue'] },
    { title: 'AI 辅助业务', items: ['会话与消息', 'RAG 知识库', 'Memory 长期记忆', 'Agent 工具调用', '学生/考勤内部接口', 'MCP message'] },
    { title: '治理与运营', items: ['JWT 登录鉴权', '角色路由控制', '写入风控', '审计日志', '监控中心', '用户反馈闭环'] },
    { title: '业务数据资产', items: ['学生档案/导入批次', '签到与考勤数据', '工单与异常记录', '知识库文档/向量片段', '聊天记录/引用', 'Memory / Audit / Feedback'] },
  ],
  arookieofcDB: [
    { title: '交互与命令层', items: ['main.rs', 'Cli::run', 'set/get/delete builtins', 'CommandExecutor'] },
    { title: '轻量 IoC 层', items: ['Application::run', 'ApplicationContext', 'DefaultListableBeanFactory', 'inventory registry', 'macros crate'] },
    { title: '数据库引擎层', items: ['DbEngine', 'set/get/delete', 'Arc<RwLock<BPlusTree>>', 'Mutex<WalManager>', 'SharedDbEngine'] },
    { title: '索引与存储层', items: ['BPlusTree', 'leaf/internal nodes', 'data.bpt', 'sync/load_from_disk', 'iter/contains/len'] },
    { title: 'WAL 与恢复层', items: ['WalManager', 'WalHeader', 'LogEntry', 'CRC32', 'file roll', '64KB buffer', 'WalReader replay'] },
    { title: '一致性控制层', items: ['CheckpointManager', 'checkpoint sequence', 'cleanup_old_files', 'recover_from_wal', 'trade-off: consistency first'] },
  ],
  niubash: [
    { title: '用户入口层', items: ['niubash CLI', '交互式 REPL', '脚本执行'] },
    { title: '语法前端层', items: ['Lexer', 'Parser', 'AST'] },
    { title: '执行语义层', items: ['Executor', '展开', '重定向', '管道', '作业控制'] },
    { title: '命令与工具层', items: ['WinuxCmd 命令集', 'niu-git', '内建命令'] },
    { title: '平台适配层', items: ['Windows', 'Linux', 'Android', 'macOS', '鸿蒙'] },
  ],
}

export const projectArchitectureRelations: Record<string, string[]> = {
  'Personal Blog Studio': ['HTTPS 静态加载', '组件读取内容模块', '资源路径由 Vite 处理', 'Actions 构建并发布 dist'],
  'rust-spring': ['启动扫描声明', '宏展开为注册信息', '容器读取配置并注入', '核心能力向生态 crate 扩展'],
  AIGateway: ['HTTP / JSON / SSE', '中间件生成 TenantIdentity', '领域端口 + 重试编排', 'Redis / SQLx / Reqwest 适配'],
  ferryllm: ['本地 GUI/CLI 请求', 'Axum endpoint 路由', '转换到统一 IR', 'Provider adapter 调用并归一流式输出'],
  cxxmcp: ['CMake target 暴露 API', '序列化 JSON-RPC', 'SDK 调用传输抽象', '传输与认证能力受 feature gate 约束'],
  WinuxCmd: ['Shell 启动进程', 'dispatcher 读取 argv/stdin', '命令复用基础模块', '构建脚本打包原生二进制'],
  WinuxSH: ['用户输入进入 REPL', 'tokens / AST 进入 runtime', '执行器触发补全/配置能力', '动态加载插件和 WinuxCmd 能力'],
  rubash: ['CLI 读取命令', 'tokens 解析为 AST', 'AST 执行展开/重定向', '命令行为用 upstream tests 校验'],
  'Agentic RAG Tool System': ['HTTP/CLI 请求进入 Agent', '编排层选择工具', '权限与 schema 校验', '向量召回 + rerank 后回填上下文'],
  arookieofcOS: ['源码状态约束展示口径', 'UI 事件触发 invoke', 'IPC 调用 Rust handler', 'handler 访问系统资源'],
  arookieofcMQ: ['示例调用 API', 'API 创建消息对象', '消息进入队列实现', '生产消费线程协作并按阶段演进'],
  'Advisor AI Platform': ['角色进入受控菜单', '学生主线驱动日常事务', '考勤/反馈形成处置闭环', 'AI 读取知识与业务上下文辅助处理', '治理能力沉淀可追溯数据'],
  arookieofcDB: ['CLI 解析命令', 'IoC 初始化组件', '引擎先写 WAL 再改索引', 'B+Tree 持久化数据页', 'WAL replay 与 checkpoint 恢复'],
  niubash: ['用户输入进入 shell', '解析为 AST', '执行器调度命令', '命令层提供 Unix 命令实现', '平台层做原生适配'],
}

export const projectCaseCopy: Record<string, ProjectCaseCopy> = {
  'Advisor AI Platform': {
    focus: '全栈智能顾问平台',
    challenge: '辅导员工作不是单一聊天场景，而是学生档案、导入、签到、课堂考勤、异常工单、知识库问答、审计和反馈交织在一起的业务闭环。',
    solution: '以学生为主业务对象组织档案和归属关系，用打卡/考勤/工单承接日常管理，用 AI 对话、RAG、Memory 和 Agent 工具辅助辅导员查询政策、理解上下文和处理学生事务。',
    impact: '展示从高校学生工作业务拆解，到 AI 辅助、治理审计和多角色权限协同的完整产品架构能力。',
    architectureTitle: '业务架构图',
    architectureSubtitle: '角色 / 学生主线 / 管理闭环 / AI 辅助 / 治理数据',
    architecture: ['角色入口', '学生主线业务', '日常管理闭环', 'AI 辅助业务', '治理与数据资产'],
    extraArchitectures: [
      {
        title: '技术架构图',
        subtitle: '前端入口 / 网关路由 / 业务服务 / AI 编排 / 基础设施',
        layers: [
          { title: '用户与桌面层', items: ['React + TypeScript + Ant Design', 'Tauri v2 shell', 'auth store', 'chat/RAG/student/check-in/audit/monitor pages'] },
          { title: '统一网关层', items: ['Spring Cloud Gateway', '/api route', 'JWT 协同', 'risk-control precheck', 'trace / metrics'] },
          { title: '业务微服务层', items: ['auth-service', 'chat-service', 'rag-service', 'memory-service', 'audit-service', 'student/teacher/check-in/feedback-service'] },
          { title: 'AI 编排层', items: ['Python FastAPI agent', 'ChatStreamService', 'RAG indexing', 'tool calling', 'memory context'] },
          { title: '模型治理层', items: ['backend/ai-gateway', 'OpenAI-compatible provider', 'model routing', 'rate limit', 'token usage audit'] },
          { title: '基础设施层', items: ['PostgreSQL + pgvector', 'Redis', 'Kafka', 'Nacos', 'Jaeger', 'Prometheus / Grafana', 'Ollama bge-m3'] },
        ],
        relations: ['前端统一访问 /api', 'gateway 路由并风控', '微服务调用 agent / 内部 API', 'Agent 调用 RAG/Tools/Memory', '模型治理与基础设施支撑'],
      },
    ],
    dataFlow: ['管理员/辅导员/班委按角色进入系统', '辅导员导入或维护学生档案并绑定班级归属', '打卡和课堂考勤产生记录、异常与工单', 'AI 对话结合知识库、记忆和业务内部接口辅助处理', '审计、风控、反馈和监控沉淀可追溯运营数据'],
  },
  'rust-spring': {
    focus: 'Rust 后端框架实验',
    challenge: '在 Rust 里复刻 Spring 式 IoC、配置、路由宏和启动体验，同时保持类型安全和低运行时负担。',
    solution: '用过程宏与容器注册机制组织组件，通过启动器统一配置加载、路由注册和服务运行。',
    impact: '证明对后端框架内部机制、宏系统和服务启动链路有深入理解。',
    architecture: ['过程宏入口', '组件注册表', 'IoC 容器', '配置加载器', 'HTTP 路由运行时'],
    dataFlow: ['扫描注解组件', '注册 Bean 与路由', '注入配置和依赖', '启动 HTTP Server', '分发请求到 Handler'],
  },
  ferryllm: {
    focus: 'LLM 协议中间件',
    challenge: '不同模型服务的消息结构、工具调用和流式输出不一致，业务侧直接接入会变得脆弱。',
    solution: '设计共享 IR 层，把 OpenAI 兼容接口与 Anthropic 风格请求归一，再做路由和适配。',
    impact: '让上层业务可以更稳定地接入多模型 Provider，并保留工具调用与流式能力。',
    architecture: ['兼容 API 入口', '共享请求 IR', 'Provider 路由', '模型适配器', '流式响应转换'],
    dataFlow: ['客户端请求', '解析为统一 IR', '选择 Provider', '转换为目标协议', '归一化响应返回'],
  },
  cxxmcp: {
    focus: 'C++ MCP SDK',
    challenge: 'MCP 生态需要类型可靠、传输清晰、方便集成的 C++ 实现。',
    solution: '围绕 JSON-RPC 模型、传输层、协议校验和包管理集成组织 SDK。',
    impact: '体现 C++ 工程化、协议建模和跨包管理生态适配能力。',
    architecture: ['C++ SDK API', 'JSON-RPC 模型', '传输层', '协议校验', '示例工具/客户端'],
    dataFlow: ['调用 SDK API', '序列化 JSON-RPC', '通过传输层发送', '解析响应/通知', '回调业务处理器'],
  },
  WinuxCmd: {
    focus: 'Windows 命令行工具集',
    challenge: 'Windows 原生命令行缺少轻量 Linux 风格工具链，WSL 又不是所有场景都合适。',
    solution: '用 C++ 实现小体积、快速启动、适合管道组合的命令工具。',
    impact: '展示系统工具开发、终端工作流和 Windows 原生能力。',
    architecture: ['命令入口', '参数解析', '文件/文本处理核心', 'Windows API 适配', '标准输出'],
    dataFlow: ['Shell 调用命令', '解析参数与 stdin', '执行文本/文件操作', '写入 stdout/stderr', '交给管道下游'],
  },
  WinuxSH: {
    focus: 'Rust Windows Shell',
    challenge: 'Shell 不只是命令执行，还要处理补全、通配符、脚本、主题和插件扩展。',
    solution: '用 Rust 实现解析、补全、命令替换、数组和插件结构，面向现代终端体验组织能力。',
    impact: '体现解析器、交互式 CLI 和插件化架构设计能力。',
    architecture: ['交互式终端', '命令解析器', '补全/主题系统', '执行运行时', '插件扩展'],
    dataFlow: ['用户输入命令', '词法/语法解析', '展开变量与通配符', '执行内置或外部命令', '渲染结果和提示符'],
  },
  rubash: {
    focus: 'Rust 重写 GNU Bash',
    challenge: 'Shell 兼容性牵涉词法、语法、展开、重定向、内建命令和上游行为差异，手写实现很容易在边界场景失真。',
    solution: '用 Rust 拆分 lexer、parser、executor 和 builtins，并引入 GNU Bash upstream runner 追踪兼容性基线。',
    impact: '展示系统软件、解释器/解析器、CLI 执行模型和测试驱动兼容性工程能力。',
    architecture: ['CLI 入口', 'Lexer', 'Parser / AST', 'Executor', 'Builtins / 外部命令'],
    dataFlow: ['用户输入命令', '词法分析生成 token', '解析为 AST', '执行重定向和内建/外部命令', '返回退出码和输出'],
  },
  AIGateway: {
    focus: '高并发模型网关与限流计费系统',
    challenge: '网关不只是转发模型请求，还要在租户身份、API Key 安全校验、多维限流、Token 日配额、流式 usage 回写、Provider 路由和审计持久化之间保持一致性。',
    solution: '用 Rust + Axum 构建 DDD 三层架构，interfaces 负责 HTTP handler 和中间件，application 负责 ChatAppService 编排与重试，domain 定义网关/租户/配额/限流/审计端口，infrastructure 用 Redis、PostgreSQL、reqwest 和 OpenAI-compatible adapter 提供实现。',
    impact: '展示了 AI 基础设施里更接近生产系统的治理能力：认证、限流、配额、流式处理、用量计费、审计和外部 Provider 适配都有明确边界。',
    architectureTitle: '技术架构图',
    architectureSubtitle: '运行时 / 中间件 / 技术组件 / 基础设施',
    architecture: ['Axum Router / Middleware', 'ChatAppService / Domain Ports', 'Redis + PostgreSQL DAO', 'OpenAI-compatible Provider'],
    dataFlow: ['请求进入 Axum Router', 'request_id、auth、rate_limit 中间件生成 TenantIdentity 并执行多维限流', 'handler 校验 JSON、估算 token 并预扣 Redis 配额', 'ChatAppService 通过 ProviderRouter 选择 ChatGateway 并重试调用', '非流式写入 token_usage_records，流式通过 usage oneshot 异步补扣/回滚', 'SSE raw/done/error 或 JSON 响应返回客户端'],
  },
  'Agentic RAG Tool System': {
    focus: '工具化 RAG 系统',
    challenge: 'RAG 如果只停留在检索问答，很难被 Agent 稳定调用和组合。',
    solution: '拆分 DAO、Service、Tool Schema、Runtime、Controller 层，并提供 CLI 与 MCP 入口。',
    impact: '体现把 AI 能力封装成可调用工具的工程思路。',
    architecture: ['CLI / MCP 入口', 'Controller', 'Tool Schema', 'RAG Runtime', 'DAO / 向量存储'],
    dataFlow: ['Agent 调用工具', '校验 Tool Schema', 'Runtime 执行检索', 'DAO 读取知识片段', '组合结果返回 Agent'],
  },
  arookieofcOS: {
    focus: 'Tauri 桌面环境实验',
    challenge: '桌面环境需要 UI、系统命令、IPC、文件浏览和监控能力协同。',
    solution: '用 React 做界面，用 Rust Tauri 命令桥接系统信息、文件、终端和监控面板。',
    impact: '展示桌面端、系统集成和前后端 IPC 设计能力。',
    architecture: ['React 桌面 UI', 'Tauri IPC', 'Rust Command 层', '系统信息/文件/终端模块', 'Windows OS'],
    dataFlow: ['用户操作桌面组件', '前端发起 IPC', 'Rust 执行系统命令', '返回结构化结果', 'UI 更新面板状态'],
  },
  arookieofcMQ: {
    focus: 'Rust 消息队列实现',
    challenge: '消息队列涉及持久化、生产消费模型、顺序语义和处理器抽象。',
    solution: '从 FIFO 队列、生产者/消费者、消息处理器和文档阶段化逐步实现核心概念。',
    impact: '体现基础设施学习能力和对中间件核心机制的拆解能力。',
    architecture: ['Producer API', 'Topic / Queue', '持久化层', 'Consumer API', 'Message Handler'],
    dataFlow: ['生产者写入消息', '队列分配顺序位置', '持久化消息体', '消费者拉取/订阅', '处理器确认消费'],
  },
  'Personal Blog Studio': {
    focus: '个人主页与作品案例',
    challenge: '个人站需要稳定展示身份、简历、作品和文章入口，同时保持部署足够轻。',
    solution: '用 React TypeScript 和静态内容数据组织页面，Vite 构建后直接托管 dist 目录。',
    impact: '减少运行时依赖，让站点更容易上线、迁移和长期维护。',
    architecture: ['React 页面路由', '静态内容数据', 'Markdown 渲染', 'Vite 构建', '静态文件托管'],
    dataFlow: ['维护 siteContent.ts', '执行前端构建', '生成 dist 静态资源', '静态服务托管', '浏览器加载页面'],
  },
  arookieofcDB: {
    focus: 'Rust KV 数据库引擎',
    challenge: '数据库核心不只是内存 Map，还要处理写前日志、崩溃恢复、索引持久化、命令执行和一致性取舍。',
    solution: '用 Rust 实现 DbEngine，写入时先追加 WAL 再更新 B+Tree，启动时通过 checkpoint 与 WalReader replay 恢复状态，并用命令层暴露 set/get/delete。',
    impact: '展示对存储引擎、WAL、B+Tree、恢复流程和 Rust 并发边界的底层理解。',
    architecture: ['CLI / Commands', 'IoC ApplicationContext', 'DbEngine', 'B+Tree Storage', 'WAL / Checkpoint'],
    dataFlow: ['CLI 输入 set/get/delete', '命令解析并调用 DbEngine', '写请求追加 LogEntry 并 fsync', '更新 B+Tree 索引并可 sync 到 data.bpt', '启动时加载 checkpoint 并 replay WAL'],
  },
  niubash: {
    focus: 'AI 原生的 Bash：真 bash 语法、真 Unix 命令、真 git',
    challenge: 'Windows 上没有原生好用的 Bash：PowerShell 和 cmd 语法各异，Git Bash 靠 MSYS 模拟层，WSL 又重。',
    solution: '用 Rust 实现 Bash 兼容 shell，原生跑在 Windows / Linux / Android / macOS / 鸿蒙上；命令层复用 WinuxCmd，git 能力由 niu-git 提供。',
    impact: '已正式上架 winget（Unixwin.Niubash），是 unixwin 家族面向用户的主入口。',
    architecture: ['CLI 入口', 'Lexer / Parser', 'Executor', 'WinuxCmd 命令层', 'niu-git'],
    dataFlow: ['用户输入命令', '解析为 AST', '执行器调度内建 / 外部命令', 'WinuxCmd 提供命令实现', '返回结果'],
  },
}

export function projectCaseFor(project: Pick<Project, 'name' | 'techStack'>): ProjectCaseCopy {
  const fallbackStack = splitTechStack(project.techStack)
  const copy = projectCaseCopy[project.name] || {
    focus: '工程作品',
    challenge: '围绕真实开发场景沉淀项目能力，并把功能、架构和维护性放在同一张图里考虑。',
    solution: '用清晰的模块边界、稳定的数据模型和可演进的接口组织实现。',
    impact: '用于展示技术选择、实现能力和持续迭代意识。',
    architecture: fallbackStack.length ? fallbackStack : ['用户入口', '应用核心', '数据/外部系统'],
    dataFlow: ['输入请求', '应用层解析', '核心逻辑处理', '读写数据或调用外部服务', '返回结果'],
  }
  return {
    ...copy,
    ...projectCaseEnhancements[project.name],
    architectureTitle: copy.architectureTitle || '技术架构图',
    architectureSubtitle: copy.architectureSubtitle || '源码模块 / 运行边界 / 调用关系',
    architectureLayers: projectArchitectureLayers[project.name] || copy.architectureLayers,
    architectureRelations: projectArchitectureRelations[project.name] || copy.architectureRelations,
  }
}

export function emptyPost(): Post {
  return {
    id: 0,
    title: '',
    slug: '',
    summary: '',
    cover_url: '',
    content: '',
    status: 'draft',
    featured: false,
    category_id: null,
    category: null,
    tags: [],
    created_at: '',
    updated_at: '',
  }
}

export function projectSlug(project: Pick<Project, 'id' | 'name'>) {
  const slug = project.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
  return slug || String(project.id)
}

export function splitTechStack(value: string) {
  return value.split(',').map((item) => item.trim()).filter(Boolean)
}

// 新版主页（粘性侧栏布局）所需的数据，文案与数字以导出的新版静态站和 2026-11-13 的 GitHub 现查为准。
export const CONTACT_EMAIL = 'arookieofc@gmail.com'

export const homeTally = {
  pullRequests: 420,
  openideaPullRequests: 237,
  familyStars: 557,
  publicRepos: 42,
}

export const homeToday =
  '一边把 niubash / rubash / WinuxCmd 三仓的 bug 往清零推（一 issue 一 PR、带回归测试、CI 全绿才合并），一边把自己的 agent 工作台 ADE 从 Electron 重构到 Tauri。'

export const homeCreed = '不黑盒、不模拟层、跟 GNU 逐字节对齐。'

export const homeManifesto = '全栈是表面，后端是骨架，Agent 工作流是大脑。'

export const homeAboutLead =
  '主力 Rust 与 shell，专啃跨平台和 Windows 边缘问题：符号链接、UNC 路径、NFS、PowerShell 冲突——别人绕开的，我逐项对齐。我是 unixwin 家族的共同维护者（整个家族只有两位维护者），也是 openidea 的协作者、非作者第一贡献者。平时在重庆理工大学 · ai-cqut，参与 unixwin 与 EfficiencAI 两个组织。'

export const homeTerminalTitle = 'niubash — ~/arookieofc'

export const homeTerminalLines: { kind: 'cmd' | 'out'; text: string }[] = [
  { kind: 'cmd', text: 'whoami' },
  { kind: 'out', text: 'arookieofc' },
  { kind: 'cmd', text: 'cat focus.txt' },
  { kind: 'out', text: '# AI Agent 系统 · 后端基础设施 · 全栈' },
  { kind: 'out', text: '# 跨平台 shell · coreutils · 开发工具' },
]

export const familyIntro =
  '全球独此一家的跨平台 shell 平台——一种 shell 语法打通 Windows / Linux / macOS，不用 PowerShell、不用 cmd，也没有 WSL / MSYS 模拟层，全是原生实现。'

export const familyProjects: {
  name: string
  repoUrl: string
  description: string
  metricValue: string
  metricLabel: string
  install?: string
  badge?: string
  extra?: string
}[] = [
  {
    name: 'niubash',
    repoUrl: 'https://github.com/unixwin/niubash',
    description: 'AI 原生的 Bash：真 bash 语法、真 Unix 命令、真 git，原生跑在 Windows / Linux / Android / macOS / 鸿蒙上，已正式上架 winget。',
    metricValue: '★ 265',
    metricLabel: 'Rust shell 本体',
    install: 'winget install Unixwin.Niubash',
    badge: 'winget 已上架',
  },
  {
    name: 'WinuxCmd',
    repoUrl: 'https://github.com/unixwin/WinuxCmd',
    description: '家族的起点（2026 年 1 月建仓，比 niubash 还早）。每个命令都拿 GNU 原版做 oracle 逐项差分对齐，单文件约 3.8MB。',
    metricValue: '★ 272',
    metricLabel: 'C++ coreutils',
    extra: '176 命令 · 1,924 选项',
  },
  {
    name: 'rubash',
    repoUrl: 'https://github.com/unixwin/rubash',
    description: '从零写的 GNU Bash 5.3 兼容 shell 引擎，Rust 实现、可嵌入，用 GNU 自己的测试语料逐字节量兼容度。',
    metricValue: '★ 20',
    metricLabel: 'Rust Bash 5.3 兼容',
    extra: 'shell 引擎',
  },
]

export const familyExtraMembers = '家族其余成员：niu-git、wpm（包管理）、oh-my-niu，官网 unixwin.dev。'

export const featuredWorkNames = ['AIGateway', 'ferryllm', 'Advisor AI Platform', 'arookieofcDB']

export const featuredWorkMetrics: Record<string, string> = {
  AIGateway: '网关 · 限流 · 计费',
  ferryllm: '中间件 · 协议适配',
  'Advisor AI Platform': '全栈 · 平台型项目',
  arookieofcDB: '存储 · 数据库引擎',
}

export const workshopItems = [
  'rust-spring（Rust 后端框架实验）',
  'cxxmcp（C++ MCP SDK）',
  'Agentic RAG Tool System',
  'arookieofcMQ（消息队列）',
  'arookieofcOS（Tauri 桌面环境）',
  'WinuxSH（unixwin 的先声）',
  'Personal Blog Studio（本站）',
]

export const upstreamContributions = [
  {
    name: 'l0ng-ai/openidea',
    url: 'https://github.com/l0ng-ai/openidea',
    description: 'Rust 重写的 IntelliJ 风格 IDE。贡献榜第二、非作者贡献者第一，2026 年 11 月拿到协作者级 write 权限；贡献覆盖 VCS、terminal、agents、markdown、build、CI。',
    metricValue: '237 个 PR',
    metricLabel: '项目 ★ 8,733',
  },
  {
    name: 'uutils/coreutils',
    url: 'https://github.com/uutils/coreutils',
    description: 'GNU coreutils 的 Rust 重写。修复 Windows 目录符号链接的递归删除（PR #12642）等 3 个提交已合入 main。',
    metricValue: '3 提交合入',
    metricLabel: '项目 ★ 24,360',
  },
  {
    name: 'microsoft/coreutils',
    url: 'https://github.com/microsoft/coreutils',
    description: '提过 10 个 PR、3 个已合并：find / 被当成 DOS find、卸载不因 PowerShell 失败而失败、保留 PowerShell profile 符号链接（后两个与 Leonard Hecker 联合署名）。',
    metricValue: '3 PR 合并',
    metricLabel: '项目 ★ 5,374',
  },
  {
    name: 'nushell/reedline',
    url: 'https://github.com/nushell/reedline',
    description: 'PR #1044 已合并：给 list_menu 加了 DescriptionPosition，控制描述文本的摆放位置。',
    metricValue: '1 PR 合并',
    metricLabel: '项目 ★ 832',
  },
]

export const homeTimeline: { date: string; title: string; text: string; certUrl?: string }[] = [
  {
    date: '2024-06',
    title: '蓝桥杯全国总决赛 · 优秀奖',
    text: '第十五届蓝桥杯，Java 软件开发大学 B 组——竞赛这条线先于开源这条线。',
    certUrl: '/award-bluebridge-2024.jpg',
  },
  {
    date: '2024-10',
    title: '入驻 GitHub',
    text: '账号建立（2026 年 11 月由 a-rookie-of-C-language 改名为 arookieofc）。从数据结构、Java 课程设计这些练手仓库开始。',
  },
  {
    date: '2025-08',
    title: '中国机器人及人工智能大赛全国总决赛 · 一等奖',
    text: '第二十七届，机器人任务挑战赛（自主巡航），随重庆理工大学代表队夺冠。',
    certUrl: '/award-craic-2025.png',
  },
  {
    date: '2026-01',
    title: 'WinuxCmd 建仓，unixwin 家族起点',
    text: '先有命令层：把 Unix 命令原生搬到 Windows。两个月后（2026-03）niubash 建仓，补上 shell 语言层。',
  },
  {
    date: '2026-06',
    title: '上游贡献陆续合入',
    text: 'reedline #1044、uutils/coreutils 的符号链接修复、microsoft/coreutils 的三个 PR 先后合入——清一色 Windows 边缘问题。',
  },
  {
    date: '2026-09',
    title: 'niubash 进 winget',
    text: '我提交的 winget 上架 PR 被合并进 microsoft/winget-pkgs；后续 1.4.3 换成正经 Inno Setup 安装包，装完自动加 PATH 和 Windows Terminal 集成。',
  },
  {
    date: '2026-11',
    title: '成为 openidea 协作者',
    text: '在 l0ng-ai/openidea 累计 237 个 PR 后，拿到协作者级 write 权限，是这个 8,700+ star 项目的第一位外部维护者。',
  },
]

export const homeNowIntro =
  'ADE — Agent Development Environment，我正在做的 agent 工作台。出发点很实际：现在人已经很少亲手写代码，但全交给 AI 又是黑盒——所以需要一个轻量编辑器：看代码、看 diff、做简单修改，desktop、Pad、手机三端联通，在哪改其他端都同步。ADE 依托 Orca 做二次开发（它已有 AI agent 那部分，好过从零写），目前正把 Electron 重构为 Tauri，已适配安卓。'

export const homeNowItems = [
  '修 bug — niubash / rubash / WinuxCmd 三仓逐个清：一 issue 一 PR、每个修复带回归测试、CI 全绿才合并。',
  '守上游 — openidea 协作者日常，评审和合入社区 PR。',
  '看趋势 — 每天过一遍 GitHub 趋势榜，只认真工程量，不认首日 star。',
]

export const homeStackExtras = '另外常碰的：Shell / Bash 兼容性、Go、Windows 平台 internals、Tauri / Electron。'

export const findMeLinks = [
  { label: 'GitHub', url: 'https://github.com/arookieofc' },
  { label: 'X', url: 'https://x.com/arookieofc' },
  { label: 'unixwin.dev', url: 'https://unixwin.dev' },
]
