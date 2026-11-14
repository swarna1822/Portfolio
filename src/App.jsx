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
  projects,
} from './data/resume.js'

function scrollToId(id) {
  document.getElementId(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

function SectionHead({ kicker, title, text }) {
  return (
    <header className="section-head">
      <p className="fn">{kicker}</p>
      <div>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
    </header>
  )
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
      <div className="desk__grid" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={() => setActive('home')}>
          <span className="brand__led" />
          <span>SK.KEYS</span>
        </a>
        <nav className="nav-row" aria-label="Primary">
          {navKeys.map((item) => (
            <Keycap
              key={item.id}
              legend={item.legend}
              sub={item.sub}
              accent={active === item.id ? 'amber' : undefined}
              pressed={active === item.id}
              current={active === item.id}
              onClick={() => {
                setActive(item.id)
                scrollToId(item.id)
              }}
            />
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero__copy">
            <p className="kicker">
              <span className="status-dot" />
              Open to frontend roles · {profile.location}
            </p>
            <h1 className="display" aria-label={profile.name}>
              <span className="display__typed">{nameTyped}</span>
            <span className={`cursor ${nameDone ? 'cursor--dim' : ''}`} aria-hidden="true" />
            </h1>
            <p className="role-line">
              {roleTyped || '\u00a0'}
              {nameDone ? <span className="cursor cursor--small" /> : null}
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
              <Keycap legend="@" sub="Mail" href={`mailto:${profile.email}`} />
              <Keycap legend="in" sub="LinkedIn" href={profile.linkedin} />
              <Keycap legend="gh" sub="GitHub" href={profile.github} />
            </div>
          </div>

          <aside className="spec" aria-label="Profile snapshot">
            <p className="spec__label">Spec sheet</p>
            <dl>
              <div>
                <dt>Role</dt>
                <dd>{profile.role}</dd>
              </div>
              <div>
                <dt>Based</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>React, TypeScript, Angular</dd>
              </div>
              <div>
                <dt>Experience</dt>
                <dd>Nearly 4 years</dd>
              </div>
              <div>
                <dt>Ships</dt>
                <dd>UI systems, REST apps, performance</dd>
              </div>
            </dl>
          </aside>
        </section>

        <section className="section" id="about">
          <SectionHead
            kicker="F1"
            title="About"
            text="Frontend work in production, and side projects when I want to learn something properly."
          />
          <div className="about-grid">
            <article className="card">
              <h3>About me</h3>
              <p>
                I&apos;m a Frontend Engineer with nearly 4 years of experience building responsive,
                user-friendly web applications using React, Angular, and TypeScript. I&apos;ve worked on
                production applications, REST API integrations, reusable components, and performance
                improvements. Outside work, I build personal projects to explore new technologies and
                strengthen my skills.
              </p>
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

        <section className="section" id="experience">
          <SectionHead
            kicker="F2"
            title="Experience"
            text="Product UI, performance, and the messy parts of shipping real applications."
          />
          <ol className="timeline">
            {experience.map((job) => (
              <li key={job.company}>
                <article className={`job job--${job.accent}`}>
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
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="products">
          <SectionHead
            kicker="F3"
            title="Product experience"
            text="Order products I have worked on at WizCommerce."
          />
          <div className="work-grid">
            {products.map((product, index) => (
              <article className="work-card" key={product.name}>
                <div className="work-card__top">
                  <span className="idx">{String(index + 1).padStart(2, '0')}</span>
                  <p className="tag">{product.tag}</p>
                </div>
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

        <section className="section" id="projects">
          <SectionHead
            kicker="F4"
            title="Personal projects"
            text="Things I built to practice product UI, state, and the details around them."
          />
          <div className="work-grid">
            {projects.map((project, index) => (
              <article className="work-card" key={project.name}>
                <div className="work-card__top">
                  <span className="idx">{String(index + 1).padStart(2, '0')}</span>
                  <p className="tag">{project.tag}</p>
                </div>
                <h3>{project.name}</h3>
                <p className="stack">{project.stack}</p>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <a className="text-link" href={project.live_demo} target="_blank" rel="noreferrer">
                  Live demo
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills">
          <SectionHead
            kicker="F5"
            title="Skill keyboard"
            text="Type any letter. Keys that match light up."
          />
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

        <section className="section section--contact" id="contact">
          <SectionHead
            kicker="F6"
            title="Get in touch"
            text="Open to frontend roles and product-minded UI work."
          />
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
        <span>{profile.name}</span>
        <span>React · keyboard chassis</span>
      </footer>
    </div>
  )
}
