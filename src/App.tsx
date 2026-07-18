import { useEffect, useState } from 'react'
import { journey, projects, skillGroups } from './data'
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from './components/Icons'

const links = [
  ['About', '#about'],
  ['Work', '#work'],
  ['Journey', '#journey'],
] as const

function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const close = () => setOpen(false)
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Mohammed Othman, home">
        MO<span>.</span>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="site-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="site-navigation" className={open ? 'nav open' : 'nav'} aria-label="Main navigation">
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
          Let&apos;s talk
          <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  )
}

function SectionHeading({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description?: string
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{index}</span>
        {title}
      </p>
      {description && <p className="section-intro">{description}</p>}
    </div>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <div className="project-topline">
        <span className="project-number">{project.number}</span>
        <span>{project.detail}</span>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <div className="project-footer">
        <ul aria-label="Technologies used">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <a href={project.repository} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
          View repository
          <ArrowUpRight />
        </a>
      </div>
    </article>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="availability">
                <span aria-hidden="true" />
                Full-stack developer · React & commerce
              </p>
              <h1>
                Building full-stack products
                <br />
                <em>for real customer journeys.</em>
              </h1>
              <p className="hero-lede">
                I&apos;m Mohammed Othman, a Computer Science student at Birzeit
                University. I focus on React interfaces and the backend,
                database, and transaction workflows behind digital commerce.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#work">
                  View selected work
                  <ArrowDown size={17} />
                </a>
                <a className="button button-secondary" href="https://github.com/M7md-oth" target="_blank" rel="noreferrer">
                  <Github />
                  GitHub
                </a>
              </div>
            </div>
            <aside className="hero-note" aria-label="Current focus">
              <span className="note-label">Current focus</span>
              <p>React and TypeScript interfaces, e-commerce architecture, and dependable backend workflows.</p>
              <a href="mailto:mohammedoth1232@gmail.com">
                Contact me
                <ArrowUpRight size={16} />
              </a>
            </aside>
          </div>
          <div className="hero-index" aria-hidden="true">
            <span>01</span>
            <span>Portfolio / 2026</span>
          </div>
        </section>

        <section className="section about" id="about">
          <SectionHeading index="01" title="About" />
          <div className="about-grid">
            <h2>I build around the complete customer journey.</h2>
            <div className="about-copy">
              <p>
                My marketplace and rental projects cover the practical parts of
                commerce software: product discovery, authentication, roles,
                carts, checkout, and order management. I approach those flows
                as one connected system rather than isolated screens.
              </p>
              <p>
                I&apos;m currently applying that foundation to modern React and
                TypeScript interfaces. I value straightforward architecture,
                clear product states, and experiences that remain reliable from
                the first interaction through completion.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills" aria-labelledby="skills-title">
          <div className="skills-title">
            <p className="eyebrow"><span>02</span>Capabilities</p>
            <h2 id="skills-title">Tools I work with</h2>
          </div>
          <div className="skill-list">
            {skillGroups.map((group) => (
              <div className="skill-row" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="section work" id="work">
          <SectionHeading
            index="03"
            title="Selected work"
            description="Commerce and product projects spanning React UI, catalogs, authentication, checkout, orders, and service workflows."
          />
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <a className="text-link" href="https://github.com/M7md-oth?tab=repositories" target="_blank" rel="noreferrer">
            Browse all repositories
            <ArrowUpRight />
          </a>
        </section>

        <section className="section journey" id="journey">
          <SectionHeading
            index="04"
            title="Journey"
            description="A path from computer science fundamentals to complete commerce and service products."
          />
          <ol className="timeline">
            {journey.map((item) => (
              <li key={item.year}>
                <span className="timeline-year">{item.year}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow"><span>05</span>Contact</p>
          <div className="contact-grid">
            <h2>Have a project or opportunity in mind?</h2>
            <div className="contact-action">
              <p>I&apos;m open to React, full-stack, and e-commerce projects, collaboration, and early-career opportunities.</p>
              <a className="button button-light" href="mailto:mohammedoth1232@gmail.com">
                Start a conversation
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="contact-footer">
            <p>Mohammed Othman · Full-stack Developer</p>
            <div className="social-links">
              <a href="mailto:mohammedoth1232@gmail.com" aria-label="Email Mohammed"><Mail /></a>
              <a href="https://www.linkedin.com/in/mohammed-othman-18aa44324" target="_blank" rel="noreferrer" aria-label="Mohammed on LinkedIn"><Linkedin /></a>
              <a href="https://github.com/M7md-oth" target="_blank" rel="noreferrer" aria-label="Mohammed on GitHub"><Github /></a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
