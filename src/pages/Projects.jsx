import { useState } from 'react'
import { PROJECTS, GH_ICON } from '../data/projects'
import styles from './Projects.module.css'

const FILTERS = [
  { key: 'all',       label: 'All' },
  { key: 'ml',        label: 'ML / RF' },
  { key: 'fullstack', label: 'Full-Stack' },
]

export default function Projects() {
  const [active, setActive] = useState('all')

  const filtered = PROJECTS.filter(p => active === 'all' || p.filter === active)

  return (
    <div className={styles.page}>

      {/* ── PAGE HERO ── */}
      <div className={styles.projectsHero}>
        <div className={styles.heroLeft}>
          <div className={styles.eyebrow}>Selected Work</div>
          <h1 className={styles.heroH1}>Projects &amp;<br /><em>Builds.</em></h1>
        </div>
        <div className={styles.heroRight}>
          2 projects · RF/ML &amp; Full-Stack<br />
          Dec 2025 – Jan 2026<br />
          Python · PyTorch · MERN · Socket.io
        </div>
      </div>

      {/* ── STATS ── */}
      <div className={styles.statsBar}>
        <div className={styles.statCell}>
          <div className={styles.statNum}>2</div>
          <div className={styles.statLabel}>Projects Shipped</div>
        </div>
        <div className={styles.statCell}>
          <div className={styles.statNum}>4</div>
          <div className={styles.statLabel}>Signal Classes Classified</div>
        </div>
        <div className={styles.statCell}>
          <div className={styles.statNum}>RT</div>
          <div className={styles.statLabel}>Real-Time Messaging</div>
        </div>
      </div>

      {/* ── FILTER ── */}
      <div className={styles.filterBar}>
        <span className={styles.filterLabel}>Filter:</span>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`${styles.filterBtn}${active === f.key ? ' ' + styles.on : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* ── CARDS ── */}
      <div className={styles.grid}>
        {filtered.map(p => (
          <div key={p.id} className={styles.card}>
            <div className={styles.cardIndex}>{p.id}</div>
            <div className={styles.cardBody}>
              <div className={styles.cardDate}>{p.date}</div>
              <div className={styles.cardTitle}>{p.title}</div>
              <div className={styles.cardDesc}>{p.desc}</div>
              <div className="tags">
                {p.tags.map(t => (
                  <span key={t} className={`tag${p.accentTags.includes(t) ? ' accent' : ''}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className={styles.cardAction}>
              <span className={styles.cardType}>{p.type}</span>
              <a href={p.github} target="_blank" rel="noreferrer" className="github-link">
                {GH_ICON} View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <footer>
        <span>Himanshu Suri — VU2AZH</span>
        <span>Hyderabad / 2026</span>
      </footer>
    </div>
  )
}
