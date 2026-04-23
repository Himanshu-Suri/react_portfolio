import { Link } from 'react-router-dom'
import Terminal from '../components/Terminal'
import { PROJECTS, GH_ICON } from '../data/projects'
import styles from './Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>

      {/* ── HERO ── */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.photoArea}>
            <img
              src="/Photo.jpeg"
              alt="Himanshu Suri"
              onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
            />
            <div className={styles.photoFallback}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>
          <div className={styles.heroText}>
            <div className={styles.eyebrow}>VU2AZH — Hyderabad, India</div>
            <h1 className={styles.heroH1}>Himanshu<br /><em>Suri.</em></h1>
            <p className={styles.heroDesc}>RF and ML developer. Building deep learning pipelines for signal classification and shipping full-stack applications. Integrated M.Tech at Mahindra University.</p>
            <div className={styles.heroActions}>
              <Link className="btn btn-primary" to="/projects">View Projects</Link>
              <button className="btn btn-ghost" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <Terminal />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="section">
        <div className="section-header">
          <div className="section-num">01 / About</div>
          <h2>About <em>Me</em></h2>
        </div>
        <div className={styles.aboutGrid}>
          <div>
            <div className={styles.aboutText}>
              <p>I'm Himanshu Suri, an Integrated M.Tech student at Mahindra University, Hyderabad, pursuing Computer Science & Engineering. My work lives at the intersection of RF engineering, deep learning, and full-stack development.</p>
              <p>As a licensed amateur radio operator (VU2AZH), I translate on-air experience into engineering — building CNN classifiers that identify RF signals from raw IQ data and spectrograms.</p>
              <p>I've represented India internationally in amateur radio competitions, placing 1st in CQ WPX and 2nd in IARU HF 2024 (youth categories). Outside competitions, I build full-stack apps and explore ML model optimization.</p>
            </div>
            <div className={styles.detailsCard}>
              <div className={styles.detailsCardLabel}>Personal Details</div>
              <div className={styles.detailsGrid}>
                {[
                  ['Full Name','Himanshu Suri'],['Location','Hyderabad, India'],
                  ['Phone','+91 9676602598'],['Email','himanshusuri.2795@gmail.com'],
                  ['Callsign','VU2AZH'],['University','Mahindra University'],
                  ['Program','Integrated M.Tech CSE'],
                ].map(([label, val]) => (
                  <div key={label} className={styles.detailItem}>
                    <label>{label}</label><span>{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className={styles.riLabel}>Research Interests</div>
            {[
              ['RF Signal Processing & SDR','Automated signal identification, IQ analysis, spectrogram generation'],
              ['Deep Learning for Signals','CNN architectures, model optimization, confusion matrix analysis'],
              ['Amateur Radio & Satellite Comms','HF propagation, satellite tracking, QSO logging — VU2AZH'],
              ['Full-Stack Web Engineering','Real-time systems, WebSockets, cloud deployment, REST APIs'],
            ].map(([title, sub]) => (
              <div key={title} className={styles.researchItem}>
                <div className={styles.riDot} />
                <div><h4 className={styles.riTitle}>{title}</h4><p className={styles.riSub}>{sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="section">
        <div className="section-header">
          <div className="section-num">02 / Skills</div>
          <h2>Technical <em>Stack</em></h2>
        </div>
        <table className={styles.skillsTable}>
          <tbody>
            {[
              ['Languages','Python, JavaScript, C, SQL'],
              ['RF & Signal','SDR, RTL-SDR, IQ Analysis, FFT, Spectrogram Analysis, Satellite Communication'],
              ['Deep Learning','PyTorch, CNN Architectures, Model Optimization, Confusion Matrix Analysis'],
              ['Full-Stack','MERN Stack, Socket.io, JWT Authentication, Zustand, Next.js'],
              ['Frontend','React.js, TailwindCSS, Daisy UI, Responsive Design'],
              ['Tools','Git, RTL-SDR, VS Code'],
            ].map(([cat, val]) => (
              <tr key={cat}><td>{cat}</td><td>{val}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── WORK / PROJECTS ── */}
      <section id="work" className="section">
        <div className="section-header">
          <div className="section-num">03 / Work</div>
          <h2>Selected <em>Projects</em></h2>
        </div>

        {PROJECTS.map(p => (
          <div key={p.id} className={styles.projectRow}>
            <div className={styles.projectMeta}>
              <div className={styles.projectDate}>{p.date}</div>
              <div className={styles.projectIndex}>{p.id}</div>
            </div>
            <div className={styles.projectBody}>
              <h3 className={styles.projectTitle}>{p.title}</h3>
              <p className={styles.projectDesc}>{p.desc}</p>
              <div className="tags">
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
              <a href={p.github} target="_blank" rel="noreferrer" className="github-link">
                {GH_ICON} View on GitHub
              </a>
            </div>
          </div>
        ))}

        <div style={{ marginTop: '2.5rem' }}>
          <Link to="/projects" className="btn btn-ghost">View Full Projects Page →</Link>
        </div>
      </section>

      {/* ── AWARDS ── */}
      <section id="awards" className="section">
        <div className="section-header">
          <div className="section-num">04 / Awards</div>
          <h2>Achievements &amp; <em>Recognition</em></h2>
        </div>
        <div className={styles.awardGrid}>
          {[
            ['1st','CQ WPX — India Youth Category','International RF Competition'],
            ['2nd','IARU HF 2024 — India Youth Category','International Amateur Radio Union'],
            ['2nd','AI Student of the Year Hackathon','Google Gemini Collaboration'],
            ['₹1L','Academic Merit Scholarship','Outstanding Performance — AY 2024–2025'],
          ].map(([place, title, sub]) => (
            <div key={title} className={styles.awardCell}>
              <div className={styles.awardPlace}>{place}</div>
              <h4 className={styles.awardTitle}>{title}</h4>
              <p className={styles.awardSub}>{sub}</p>
            </div>
          ))}
        </div>
        <div className={styles.awardGridSingle}>
          <div className={styles.awardCell}>
            <div className={styles.awardPlace} style={{ fontSize: '1.5rem', color: 'rgba(245,243,239,.2)' }}>HAM</div>
            <h4 className={styles.awardTitle}>Licensed Amateur Radio Operator</h4>
            <p className={styles.awardSub}>Callsign VU2AZH — Active Operator</p>
          </div>
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="section">
        <div className="section-header">
          <div className="section-num">05 / Education</div>
          <h2>Academic <em>Background</em></h2>
        </div>
        {[
          { score: '7.23', label: 'GPA / CGPA', title: 'Mahindra University — Integrated M.Tech, Computer Science & Engineering', sub: 'Aug 2023 – May 2028* · Hyderabad · DSA · ML · DBMS · Networks · OOP' },
          { score: '93%',  label: 'Score',      title: 'Narayana Junior College — Intermediate MPC',                              sub: 'Jun 2021 – May 2023 · Hyderabad' },
          { score: '10.0', label: 'GPA',         title: 'All Saints High School',                                                   sub: 'Jun 2013 – May 2021 · Hyderabad' },
        ].map(e => (
          <div key={e.title} className={styles.eduRow}>
            <div className={styles.eduScore}>{e.score}<small>{e.label}</small></div>
            <div className={styles.eduInfo}><h4>{e.title}</h4><p>{e.sub}</p></div>
          </div>
        ))}
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="section">
        <div className={styles.contactWrap}>
          <div className={styles.contactHeading}>Let's<br /><em>work<br />together.</em></div>
          <div className={styles.contactRight}>
            <p>Open to internships, research collaborations, and RF/ML projects. Reach out via email or connect on LinkedIn and GitHub.</p>
            <div className={styles.contactLinks}>
              <a href="mailto:himanshusuri.2795@gmail.com" className={styles.contactLink}>himanshusuri.2795@gmail.com</a>
              <a href="tel:+919676602598" className={styles.contactLink}>+91 9676602598</a>
              <a href="https://www.linkedin.com/in/himanshu-suri-16b9a41a3/" target="_blank" rel="noreferrer" className={styles.contactLink}>LinkedIn</a>
              <a href="https://github.com/Himanshu-Suri" target="_blank" rel="noreferrer" className={styles.contactLink}>GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Himanshu Suri — VU2AZH</span>
        <span>Hyderabad / 2026</span>
      </footer>
    </div>
  )
}
