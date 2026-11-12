import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  BriefcaseBusiness,
  Check,
  Copy,
  Download,
  ExternalLink,
  GitBranch,
  Mail,
  Search,
} from 'lucide-react'
import { MarkdownContent } from './MarkdownContent'
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  awardCertificates,
  deploymentNotes,
  emptyProfile,
  familyExtraMembers,
  familyIntro,
  familyProjects,
  featuredWorkMetrics,
  featuredWorkNames,
  findMeLinks,
  focusCards,
  homeAboutLead,
  homeCreed,
  homeManifesto,
  homeNowIntro,
  homeNowItems,
  homeStackExtras,
  homeTally,
  homeTerminalLines,
  homeTerminalTitle,
  homeTimeline,
  homeToday,
  organizationMemberships,
  projectCaseFor,
  projectEvidence,
  projectSlug,
  resumeSkillGroups,
  resumeTimeline,
  splitTechStack,
  stackHighlights,
  staticPosts,
  staticSite,
  upstreamContributions,
  workshopItems,
} from './siteContent'
import type { Post } from './types'
import './App.css'

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, '') || '/'

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<ResumePage />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/category/:categorySlug" element={<BlogCategoryPage />} />
          <Route path="blog/:slug" element={<PostDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

function PublicLayout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className={isHome ? 'site-shell site-shell-home' : 'site-shell'}>
      <a className="skip-link" href="#main">跳到主要内容</a>
      <header className="topbar">
        <Link to="/" className="brand"><BrandAvatar /> arookieofc</Link>
        <nav>
          <Link to="/">首页</Link>
          <Link to="/resume">简历</Link>
          <Link to="/blog">文章</Link>
          <a href={GITHUB_URL} target="_blank">GitHub</a>
        </nav>
      </header>
      <Outlet />
    </div>
  )
}

function BrandAvatar() {
  return (
    <span className="brand-avatar">
      <img src={emptyProfile.avatarUrl} alt="" />
      <span>AR</span>
    </span>
  )
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = CONTACT_EMAIL
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button type="button" className="copy-email-btn" onClick={copy}>
      {copied ? <Check size={15} /> : <Copy size={15} />}
      {copied ? '已复制' : CONTACT_EMAIL}
    </button>
  )
}

function Home() {
  const { posts } = usePostIndex()
  const profile = staticSite.profile || emptyProfile
  const projects = staticSite.projects
  const latestPosts = [...posts]
    .sort((a, b) => (b.created_at || '').localeCompare(a.created_at || ''))
    .slice(0, 6)
  const featuredWorks = featuredWorkNames.flatMap((name) => {
    const project = projects.find((item) => item.name === name)
    return project ? [project] : []
  })

  return (
    <main id="main" className="home-page">
      <aside className="home-sidebar">
        <div className="home-identity">
          {profile.avatarUrl && (
            <img className="home-avatar" src={profile.avatarUrl} alt={`${profile.displayName} 的头像`} />
          )}
          <h1>arookieofc</h1>
          <p className="home-pitch">{profile.headline}</p>
          <p className="home-nickname">「一个人刚学会 C 语言的菜鸟」</p>
          <nav className="home-nav" aria-label="本页章节">
            <a href="#about">关于</a>
            <a href="#projects">精选项目</a>
            <a href="#contrib">开源贡献</a>
            <a href="#now">在做的事</a>
            <a href="#timeline">时间线</a>
            <a href="#stack">技术线</a>
            <a href="#writing">写作与更多</a>
          </nav>
        </div>
        <div className="home-tally">
          <p>
            两年里给 GitHub 全站提了 <b>{homeTally.pullRequests} 个 PR</b>，其中{' '}
            <b>{homeTally.openideaPullRequests} 个给 openidea</b>；维护的家族仓库合计{' '}
            <b>★{homeTally.familyStars}</b>，名下 <b>{homeTally.publicRepos} 个公开仓库</b>。
          </p>
        </div>
        <div className="home-side-links">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://x.com/arookieofc" target="_blank" rel="noreferrer">X ↗</a>
          <a href="https://unixwin.dev" target="_blank" rel="noreferrer">unixwin.dev ↗</a>
        </div>
        <CopyEmailButton />
        <p className="home-credo">{homeCreed}</p>
      </aside>

      <div className="home-main">
        <section id="about" className="home-section">
          <div className="home-section-head">
            <h2>关于</h2>
            <code>~/about</code>
          </div>
          <p className="home-lead">{homeAboutLead}</p>
          <div className="home-today">
            <span className="home-today-label">TODAY · 最近在做</span>
            <p>{homeToday}</p>
          </div>
          <div className="home-term">
            <div className="home-term-title">{homeTerminalTitle}</div>
            <div className="home-term-body">
              {homeTerminalLines.map((line, index) => (
                <div key={index} className={line.kind === 'cmd' ? 'home-term-cmd' : 'home-term-out'}>
                  {line.kind === 'cmd' ? <span className="home-term-prompt">$</span> : null}
                  {line.text}
                </div>
              ))}
              <div className="home-term-cmd">
                <span className="home-term-prompt">$</span>
                <span className="home-term-cursor" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="home-section">
          <div className="home-section-head">
            <h2>精选项目</h2>
            <code>~/projects</code>
          </div>
          <p className="home-section-intro">{familyIntro}</p>
          {familyProjects.map((project) => (
            <article key={project.name} className="home-row">
              <div className="home-row-body">
                <h3>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">{project.name} ↗</a>
                </h3>
                <p>{project.description}</p>
                {project.install ? <code className="home-install">$ {project.install}</code> : null}
                {project.badge ? <span className="home-badge">{project.badge}</span> : null}
                {project.extra ? <span className="home-extra">{project.extra}</span> : null}
              </div>
              <div className="home-row-metric">
                <strong>{project.metricValue}</strong>
                <span>{project.metricLabel}</span>
              </div>
            </article>
          ))}
          {featuredWorks.map((project) => (
            <article key={project.name} className="home-row">
              <div className="home-row-body">
                <h3>
                  <Link to={`/projects/${projectSlug(project)}`}>{project.name}</Link>
                </h3>
                <p>{project.description}</p>
                <div className="tag-row">
                  {splitTechStack(project.techStack).map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
              <div className="home-row-metric">
                <strong>{featuredWorkMetrics[project.name] ?? ''}</strong>
              </div>
            </article>
          ))}
          <p className="home-note">{familyExtraMembers}</p>
          <p className="home-workshop">
            <span className="home-workshop-label">工坊里还在磨的：</span>
            {workshopItems.join(' · ')}
          </p>
        </section>

        <section id="contrib" className="home-section">
          <div className="home-section-head">
            <h2>开源贡献</h2>
            <code>~/contrib</code>
          </div>
          <p className="home-section-intro">主战场之外的上游贡献——清一色 Windows 边缘问题。</p>
          {upstreamContributions.map((item) => (
            <article key={item.name} className="home-row">
              <div className="home-row-body">
                <h3>
                  <a href={item.url} target="_blank" rel="noreferrer">{item.name} ↗</a>
                </h3>
                <p>{item.description}</p>
              </div>
              <div className="home-row-metric">
                <strong>{item.metricValue}</strong>
                <span>{item.metricLabel}</span>
              </div>
            </article>
          ))}
        </section>

        <section id="now" className="home-section">
          <div className="home-section-head">
            <h2>在做的事</h2>
            <code>~/now</code>
          </div>
          <p className="home-lead">{homeNowIntro}</p>
          <ul className="home-list">
            {homeNowItems.map((item) => <li key={item}>{item}</li>)}
          </ul>
          <p className="home-subhead">做东西的三条取向</p>
          <ul className="home-list">
            {focusCards.map((card) => (
              <li key={card.title}>
                <strong>{card.title}</strong> — {card.text}
              </li>
            ))}
          </ul>
        </section>

        <section id="timeline" className="home-section">
          <div className="home-section-head">
            <h2>时间线</h2>
            <code>~/timeline</code>
          </div>
          <ol className="home-timeline">
            {homeTimeline.map((entry) => (
              <li key={entry.date} className="home-timeline-item">
                <span className="home-timeline-date">{entry.date}</span>
                <div className="home-timeline-body">
                  <h3>{entry.title}</h3>
                  <p>{entry.text}</p>
                  {entry.certUrl ? (
                    <img className="home-cert" src={entry.certUrl} alt={entry.title} loading="lazy" />
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="stack" className="home-section">
          <div className="home-section-head">
            <h2>技术线</h2>
            <code>~/stack</code>
          </div>
          <ul className="home-list">
            {stackHighlights.map((item) => (
              <li key={item.label}>
                <strong>{item.label}</strong> — {item.detail}
              </li>
            ))}
          </ul>
          <p className="home-note">{homeStackExtras}</p>
          <p className="home-manifesto">{homeManifesto}</p>
        </section>

        <section id="writing" className="home-section">
          <div className="home-section-head">
            <h2>写作与更多</h2>
            <code>~/writing</code>
          </div>
          {latestPosts.length > 0 ? (
            <ul className="home-writing">
              {latestPosts.map((post) => (
                <li key={post.slug}>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  <span>{post.created_at.slice(0, 10)}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="home-note">文章列表正在加载。</p>
          )}
          <p className="home-note">
            <Link to="/blog">全部文章 →</Link>
          </p>
          <div className="home-orgs">
            {organizationMemberships.map((org) => (
              <a key={org.url} className="home-org-card" href={org.url} target="_blank" rel="noreferrer">
                <strong>{org.name}</strong>
                <span>{org.description}</span>
                <span className="home-org-meta">{org.focus.join(' · ')}</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="home-footer">
          <div className="home-findme">
            <span>find me</span>
            {findMeLinks.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>
            ))}
          </div>
          <p>© 2026 arookieofc · GitHub 数据快照 2026-11-13。</p>
          <p>用 Noto Sans SC 与 JetBrains Mono 排版。</p>
        </footer>
      </div>
    </main>
  )
}

function ResumePage() {
  const profile = staticSite.profile || emptyProfile
  const featuredProjects = staticSite.projects.slice(0, 6)

  return (
    <main id="main" className="resume-page">
      <section className="resume-hero">
        <div>
          <p className="eyebrow">ONLINE RESUME</p>
          <h1>{profile.displayName}</h1>
          <p>{profile.headline}</p>
          <div className="button-row">
            <button className="primary-btn" type="button" onClick={() => window.print()}><Download size={18} /> 打印 / 保存 PDF</button>
            <a className="secondary-btn" href={GITHUB_URL} target="_blank"><GitBranch size={18} /> GitHub</a>
            {profile.email && <a className="secondary-btn" href={`mailto:${profile.email}`}><Mail size={18} /> 邮件联系</a>}
          </div>
        </div>
        <aside className="resume-card">
          {profile.avatarUrl && <img src={profile.avatarUrl} alt={`${profile.displayName} 的头像`} />}
          <span>全栈 / AI Agent / 后端基础设施</span>
          <strong>Java Spring · Rust · TypeScript · C++</strong>
          <p className="membership-line compact">
            member of{' '}
            {organizationMemberships.map((org, index) => (
              <span key={org.url}>
                <a href={org.url} target="_blank">{org.label}</a>
                {index < organizationMemberships.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
        </aside>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">能力地图</p>
            <h2>技术栈不是标签，是能落地的组合</h2>
          </div>
        </div>
        <div className="resume-skill-grid">
          {resumeSkillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">荣誉证明</p>
            <h2>竞赛与项目材料</h2>
          </div>
        </div>
        <div className="resume-award-list">
          {awardCertificates.map((award) => (
            <a className="resume-award-item" href={award.imageUrl} target="_blank" key={award.imageUrl}>
              <img src={award.imageUrl} alt="" />
              <span>
                <strong>{award.title}</strong>
                <small>{award.subtitle} · {award.issuer} · {award.date}</small>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">经历摘要</p>
            <h2>用项目证明工程能力</h2>
          </div>
        </div>
        <div className="timeline-list">
          {resumeTimeline.map((item) => (
            <article key={item.title}>
              <span>{item.meta}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section">
        <div className="section-head">
          <div>
            <p className="eyebrow">代表作品</p>
            <h2>可继续深入阅读的项目案例</h2>
          </div>
        </div>
        <div className="project-grid">
          {featuredProjects.map((project) => (
            <article className="project-card" key={project.id}>
              <div><BriefcaseBusiness size={18} /><h3>{project.name}</h3></div>
              <p>{project.description}</p>
              <small>{project.techStack}</small>
              <div className="card-actions"><Link to={`/projects/${projectSlug(project)}`}>查看案例</Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="resume-section deployment-panel">
        <div>
          <p className="eyebrow">部署能力</p>
          <h2>域名、服务器和线上交付</h2>
        </div>
        <ul>
          {deploymentNotes.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const projects = staticSite.projects
  const project = projects.find((item) => projectSlug(item) === slug)
  if (!project) return <main id="main" className="page"><EmptyState text="这个作品暂时不存在。" /></main>

  const copy = projectCaseFor(project)
  const techStack = splitTechStack(project.techStack)
  const evidence = projectEvidence[project.name] || []

  return (
    <main id="main" className="project-detail-page">
      <Link to="/" className="back-link"><ArrowLeft size={18} /> 返回首页</Link>
      <section className="project-hero">
        <p className="eyebrow">PROJECT CASE</p>
        <h1>{project.name}</h1>
        <p>{project.description}</p>
        <div className="tag-row">{techStack.map((item) => <span key={item}>{item}</span>)}</div>
        <div className="button-row">
          {project.repoUrl && <a className="primary-btn" href={project.repoUrl} target="_blank"><GitBranch size={18} /> 查看源码</a>}
          {project.url && <a className="secondary-btn" href={project.url} target="_blank"><ExternalLink size={18} /> 在线访问</a>}
        </div>
      </section>
      <section className="case-grid">
        <article>
          <span>01</span>
          <h2>项目定位</h2>
          <p>{copy.focus}</p>
        </article>
        <article>
          <span>02</span>
          <h2>核心难点</h2>
          <p>{copy.challenge}</p>
        </article>
        <article>
          <span>03</span>
          <h2>实现方式</h2>
          <p>{copy.solution}</p>
        </article>
        <article>
          <span>04</span>
          <h2>体现能力</h2>
          <p>{copy.impact}</p>
        </article>
      </section>
      {(copy.highlights?.length || copy.details?.length || copy.decisions?.length) && (
        <section className="project-insight-grid">
          {copy.highlights?.length ? <ProjectList title="关键看点" items={copy.highlights} /> : null}
          {copy.details?.length ? <ProjectList title="工程细节" items={copy.details} /> : null}
          {copy.decisions?.length ? <ProjectList title="工程决策" items={copy.decisions} /> : null}
        </section>
      )}
      <section className="diagram-section">
        <ProjectArchitecture
          title={copy.architectureTitle}
          subtitle={copy.architectureSubtitle}
          layers={copy.architectureLayers}
          relations={copy.architectureRelations}
          fallbackItems={copy.architecture || []}
        />
        {copy.extraArchitectures?.map((diagram) => (
          <ProjectArchitecture
            key={`${diagram.title}-${diagram.subtitle}`}
            title={diagram.title}
            subtitle={diagram.subtitle}
            layers={diagram.layers}
            relations={diagram.relations}
            fallbackItems={diagram.fallbackItems || []}
          />
        ))}
        <ProjectFlow title="数据流转图" items={copy.dataFlow || []} />
      </section>
      {evidence.length > 0 && (
        <section className="evidence-strip">
          <p className="eyebrow">SOURCE EVIDENCE</p>
          <div>
            {evidence.map((item) => (
              <a key={item.url} href={item.url} target="_blank">{item.label}</a>
            ))}
          </div>
        </section>
      )}
      <section className="architecture-strip">
        <p className="eyebrow">CASE COVERAGE</p>
        <h2>我希望这个项目被看到的不是截图，而是工程取舍。</h2>
        <p>每个项目详情页都已经覆盖项目定位、核心难点、实现方式、体现能力、关键看点、工程细节、工程决策、架构图、数据流转图和来源证据。</p>
      </section>
    </main>
  )
}

function ProjectList({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="project-list-card">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  )
}

function ProjectArchitecture({
  title,
  subtitle,
  layers,
  relations,
  fallbackItems,
}: {
  title?: string
  subtitle?: string
  layers?: { title: string; items: string[] }[]
  relations?: string[]
  fallbackItems: string[]
}) {
  const effectiveLayers = layers?.length
    ? layers
    : fallbackItems.map((item, index) => ({ title: `Layer ${index + 1}`, items: [item] }))

  return (
    <article className="flow-card architecture-card">
      <div className="diagram-title-row">
        <h2>{title || '架构图'}</h2>
        <span>{subtitle || '分层 / 边界 / 调用关系'}</span>
      </div>
      <div className="architecture-diagram">
        {effectiveLayers.map((layer, index) => (
          <div className="architecture-stage" key={layer.title}>
            <section className="architecture-layer">
              <header>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{layer.title}</strong>
              </header>
              <div>
                {layer.items.map((item) => <span className="architecture-node" key={`${layer.title}-${item}`}>{item}</span>)}
              </div>
            </section>
            {index < effectiveLayers.length - 1 && (
              <span className="architecture-arrow" aria-hidden="true">
                <span>↕</span>
                <small>{relations?.[index] || '依赖 / 调用'}</small>
              </span>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

function ProjectFlow({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="flow-card data-flow-card">
      <h2>{title}</h2>
      <div className="flow-lane">
        {items.map((item, index) => (
          <div className="flow-node" key={`${title}-${item}`}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{item}</strong>
          </div>
        ))}
      </div>
    </article>
  )
}

function BlogList() {
  const { posts } = usePostIndex()
  const groups = useMemo(() => groupPostsByCategory(posts), [posts])

  return (
    <main id="main" className="page">
      <div className="page-title">
        <div>
          <p className="eyebrow">归档</p>
          <h1>文章板块</h1>
        </div>
      </div>
      <div className="category-grid">
        {groups.map((group, index) => <CategoryCard key={group.slug} group={group} index={index + 1} />)}
        {groups.length === 0 && <EmptyState text="文章加载中。" />}
      </div>
    </main>
  )
}

function BlogCategoryPage() {
  const { categorySlug } = useParams()
  const { posts: indexedPosts, loaded } = usePostIndex()
  const [search, setSearch] = useState('')
  const deferredSearch = useDeferredValue(search)
  const group = useMemo(
    () => groupPostsByCategory(indexedPosts).find((item) => item.slug === categorySlug) || null,
    [categorySlug, indexedPosts],
  )

  const posts = useMemo(() => {
    const keyword = deferredSearch.trim().toLowerCase()
    const categoryPosts = group?.posts || []
    if (!keyword) return categoryPosts
    return categoryPosts.filter((post) => {
      const haystack = `${post.title} ${post.summary} ${post.content}`.toLowerCase()
      return haystack.includes(keyword)
    })
  }, [deferredSearch, group])

  if (!group && !loaded) return <main id="main" className="page"><EmptyState text="文章加载中。" /></main>
  if (!group) return <main id="main" className="page"><EmptyState text="这个文章板块不存在。" /></main>

  return (
    <main id="main" className="page">
      <div className="page-title">
        <div>
          <p className="eyebrow">文章板块</p>
          <h1>{group.name}</h1>
        </div>
        <label className="search-box">
          <Search size={18} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="搜索这个板块" />
        </label>
      </div>
      <Link to="/blog" className="back-link"><ArrowLeft size={18} /> 返回文章板块</Link>
      <div className="post-grid">
        {posts.map((post, index) => <PostCard key={post.id} post={post} index={index + 1} />)}
        {posts.length === 0 && <EmptyState text="没有匹配的文章。" />}
      </div>
    </main>
  )
}

type PostCategoryGroup = {
  slug: string
  name: string
  posts: Post[]
}

function groupPostsByCategory(posts: Post[]): PostCategoryGroup[] {
  const groups = new Map<string, PostCategoryGroup>()

  for (const post of posts) {
    const slug = post.category?.slug || 'uncategorized'
    const name = post.category?.name || '未分类'
    const current = groups.get(slug)

    if (current) {
      current.posts.push(post)
    } else {
      groups.set(slug, { slug, name, posts: [post] })
    }
  }

  return [...groups.values()].sort((a, b) => a.name.localeCompare(b.name, 'zh-CN'))
}

function CategoryCard({ group, index }: { group: PostCategoryGroup; index: number }) {
  const latest = group.posts.slice(0, 3)

  return (
    <Link className="category-card" to={`/blog/category/${group.slug}`}>
      <span className="post-index">{String(index).padStart(2, '0')}</span>
      <div>
        <p className="eyebrow">{group.posts.length} 篇文章</p>
        <h3>{group.name}</h3>
        <ul>
          {latest.map((post) => <li key={post.id}>{post.title}</li>)}
        </ul>
      </div>
    </Link>
  )
}

function PostDetail() {
  const { slug } = useParams()
  const { posts, loaded } = usePostIndex()
  const post = posts.find((item) => item.slug === slug) || null
  const [remoteState, setRemoteState] = useState({ path: '', content: '', error: '' })

  useEffect(() => {
    const contentPath = post?.content_path
    if (!contentPath) return

    let ignore = false

    fetch(contentPath)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.text()
      })
      .then((text) => {
        if (!ignore) {
          setRemoteState({ path: contentPath, content: stripArticleShell(text), error: '' })
        }
      })
      .catch(() => {
        if (!ignore) {
          setRemoteState({ path: contentPath, content: '', error: '正文加载失败，请稍后再试。' })
        }
      })

    return () => {
      ignore = true
    }
  }, [post?.content_path])

  if (!post && !loaded) return <main id="main" className="page"><EmptyState text="文章加载中。" /></main>
  if (!post) return <main id="main" className="page"><EmptyState text="这篇文章不存在或尚未发布。" /></main>

  const remoteContent = post.content_path === remoteState.path ? remoteState.content : ''
  const loadError = post.content_path === remoteState.path ? remoteState.error : ''
  const content = remoteContent || post.content

  return (
    <main id="main" className="article-page">
      <Link to="/blog" className="back-link"><ArrowLeft size={18} /> 返回文章列表</Link>
      {post.cover_url && <img className="article-cover" src={post.cover_url} alt="" />}
      <article>
        <p className="eyebrow">{post.category?.name || '文章'}</p>
        <h1>{post.title}</h1>
        <p className="summary">{post.summary}</p>
        <div className="tag-row">{post.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}</div>
        {loadError ? <EmptyState text={loadError} /> : <MarkdownContent value={content} basePath={post.content_path} />}
      </article>
    </main>
  )
}

function stripArticleShell(value: string) {
  return value
    .replace(/^---[\s\S]*?---\s*/, '')
    .replace(/^# .*(\r?\n)+/, '')
    .trim()
}

function usePostIndex() {
  const [posts, setPosts] = useState<Post[]>(staticPosts)
  const [loaded, setLoaded] = useState(staticPosts.length > 0)

  useEffect(() => {
    let ignore = false

    fetch(`${import.meta.env.BASE_URL}posts/posts-manifest.json`)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        return response.json() as Promise<Post[]>
      })
      .then((items) => {
        if (!ignore) {
          setPosts(items)
          setLoaded(true)
        }
      })
      .catch(() => {
        if (!ignore) setLoaded(true)
      })

    return () => {
      ignore = true
    }
  }, [])

  return { posts, loaded }
}

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <article className="post-card">
      <span className="post-index">{String(index).padStart(2, '0')}</span>
      {post.cover_url && <img src={post.cover_url} alt="" />}
      <div>
        <p className="eyebrow">{post.category?.name || (post.status === 'published' ? '已发布' : '草稿')}</p>
        <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
        <p>{post.summary}</p>
        <div className="tag-row">{post.tags.slice(0, 3).map((tag) => <span key={tag.id}>{tag.name}</span>)}</div>
      </div>
    </article>
  )
}

function EmptyState({ text }: { text: string }) {
  return <div className="empty-state">{text}</div>
}

export default App
