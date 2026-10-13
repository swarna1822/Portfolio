import { useEffect, useMemo, useState } from 'react'
import { Keycap } from './components/Keycap.jsx'
import { useTypewriter } from './hooks/useTypewriter.js'
import {
  education,
  experience,
  navKeys,
  products,
  profile,
  skillRows,
} from './data/resume.js'

function scrollToId(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function App() {
  const [pressed, setPressed] = useState('')
  const [active, setActive] = useState('home')
  const nameSpeed = 32
  const nameDelay = 180
  const { output: nameTyped, done: nameDone } = useTypewriter(profile.name, {
    speed: nameSpeed,
    startDelay: nameDelay,
  })
  const { output: roleTyped } = useTypewriter(profile.role, {
    speed: 36,
    startDelay: nameDelay + profile.name.length * nameSpeed + 280,
  })

  useEffect(() => {
    const onKey = (event) => {
      const key = event.key
      if (key.length === 1) setPressed(key.toLowerCase())
      if (key === 'Escape') {
        setActive('home')
        scrollToId('home')
      }
    }
    const onUp = () => setPressed('')
    window.addEventListener('keydown', onKey)
    window.addEventListener('keyup', onUp)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('keyup', onUp)
    }
  }, [])

  useEffect(() => {
    const ids = navKeys.map((item) => item.id)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActive(visible.target.id)
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: [0.15, 0.4] },
    )
    ids.forEach((id) => {
      const node = document.getElementById(id)
      if (node) observer.observe(node)
    })
    return () => observer.disconnect()
  }, [])

  const skillFlash = useMemo(() => pressed, [pressed])

  return (
    <div className="desk">
      <div className="desk__glow" aria-hidden="true" />
      <header className="topbar">
        <div className="brand">
          <span className="brand__led" />
          <span>SK.KEYS</span>
        </div>
        <nav className="nav-row" aria-label="Primary">
          {navKeys.map((item) => (
            <Keycap
              key={item.id}
              legend={item.legend}
              sub={item.sub}
              accent={active === item.id ? 'amber' : undefined}
              pressed={active === item.id}
              onClick={() => {
                setActive(item.id)
                scrollToId(item.id)
              }}
            />
          ))}
        </nav>
      </header>

      <main className="chassis">
        <section className="plate" id="home">
          <p className="kicker">Mechanical layout · Frontend engineer</p>
          <h1 className="display" aria-label={profile.name}>
            <span className="display__typed">{nameTyped}</span>
            <span className={`cursor ${nameDone ? 'cursor--dim' : ''}`} aria-hidden="true">
              ▍
            </span>
          </h1>
          <p className="role-line">
            {roleTyped || '\u00a0'}
            {nameDone ? <span className="cursor cursor--small">▍</span> : null}
          </p>
          <p className="lede">{profile.summary}</p>
          <div className="hero-keys">
            <Keycap
              legend="Enter"
              sub="Work"
              wide
              accent="amber"
              onClick={() => scrollToId('experience')}
            />
            <Keycap
              legend="@"
              sub="Mail"
              href={`mailto:${profile.email}`}
            />
            <Keycap legend="in" sub="LinkedIn" href={profile.linkedin} />
            <Keycap legend="gh" sub="GitHub" href={profile.github} />
          </div>
          <p className="hint">Type on your keyboard — matching skill keys light up.</p>
        </section>

        <section className="plate" id="about">
          <h2>
            <span className="fn">F1</span> About
          </h2>
          <div className="about-grid">
            <article className="card">
              <h3>What I ship</h3>
              <p>
                Component-driven React and Angular UIs, REST integrations, and performance work
                that shows up in load time, rendering, and how quickly a bug can be reproduced.
              </p>
              <ul className="stat-row">
                <li>
                  <strong>~4 yrs</strong>
                  <span>frontend</span>
                </li>
                <li>
                  <strong>40%</strong>
                  <span>faster review page</span>
                </li>
                <li>
                  <strong>20%</strong>
                  <span>faster first load</span>
                </li>
              </ul>
            </article>
            <article className="card">
              <h3>Education</h3>
              <ul className="edu-list">
                {education.map((item) => (
                  <li key={item.title}>
                    <span className="edu-year">{item.year}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <p>{item.school}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="plate" id="experience">
          <h2>
            <span className="fn">F2</span> Experience
          </h2>
          <div className="jobs">
            {experience.map((job) => (
              <article className={`job key-card key-card--${job.accent}`} key={job.company}>
                <header>
                  <p className="job__role">{job.role}</p>
                  <h3>{job.company}</h3>
                  <p className="job__meta">
                    {job.location} · {job.dates}
                  </p>
                </header>
                <ul>
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="plate" id="products">
          <h2>
            <span className="fn">F3</span> Product experience
          </h2>
          <div className="products">
            {products.map((product) => (
              <article className="key-card" key={product.name}>
                <p className="tag">{product.tag}</p>
                <h3>{product.name}</h3>
                <p className="stack">{product.stack}</p>
                <ul>
                  {product.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="plate" id="skills">
          <h2>
            <span className="fn">F4</span> Skill keyboard
          </h2>
          <div className="keyboard" role="list">
            {skillRows.map((row, rowIndex) => (
              <div className="keyboard__row" key={rowIndex}>
                {row.map((skill) => {
                  const hot =
                    skillFlash &&
                    (skill.label.toLowerCase().startsWith(skillFlash) ||
                      skill.name.toLowerCase().includes(skillFlash))
                  return (
                    <div className="skill-wrap" key={skill.name} role="listitem">
                      <Keycap legend={skill.label} pressed={hot} accent={hot ? 'mint' : undefined} />
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            ))}
            <div className="keyboard__row keyboard__row--space">
              <Keycap
                space
                accent="amber"
                legend="Space — Node.js · Express · MySQL · Lighthouse · Jira · Postman"
                onClick={() => scrollToId('contact')}
              />
            </div>
          </div>
        </section>

        <section className="plate" id="contact">
          <h2>
            <span className="fn">F5</span> Get in touch
          </h2>
          <p className="lede lede--tight">
            Open to frontend roles and product-minded UI work. Hit a key below.
          </p>
          <div className="contact-keys">
            <Keycap legend="Mail" sub={profile.email} wide href={`mailto:${profile.email}`} />
            <Keycap legend="Tel" sub={profile.phone} wide href={`tel:${profile.phone.replace(/\s/g, '')}`} />
            <Keycap legend="in" sub="LinkedIn" href={profile.linkedin} />
            <Keycap legend="gh" sub="GitHub" href={profile.github} />
          </div>
          <p className="location">{profile.location}</p>
        </section>
      </main>

      <footer className="foot">
        <span>Caps Lock off · {profile.name}</span>
        <span>Built with React · keyboard chassis UI</span>
      </footer>
    </div>
  )
}
