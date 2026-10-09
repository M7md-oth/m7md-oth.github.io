import { useEffect, useState } from 'react'
import { journey, projects, skillGroups } from './data'
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
} from './components/Icons'

const links = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Work', '#work'],
  ['Experience', '#experience'],
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
          Contact
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
      <p className="project-tag">{project.tag}</p>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <ul className="project-details" aria-label="Project highlights">
        {project.detail.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
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
          <p className="hero-eyebrow">Full-stack React Developer</p>
          <h1>
            I build e-commerce and product systems
            <br />
            from interface to backend workflow.
          </h1>
          <p className="hero-lede">
            Mohammed O. Abdallah — Ramallah, Palestine.
            <br />
            Computer Science graduate with hands-on experience in React, Node.js,
            API integration, and customer-facing product flows.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              View Projects
            </a>
            <a className="button button-secondary" href="https://github.com/M7md-oth" target="_blank" rel="noreferrer">
              <Github />
              GitHub
            </a>
            <a className="button button-secondary" href="mailto:mohammedoth1232@gmail.com">
              <Mail />
              Email
            </a>
          </div>
          <div className="hero-stats" role="list" aria-label="Quick profile stats">
            <div role="listitem">
              <span>Focus</span>
              <strong>React + E-Commerce</strong>
            </div>
            <div role="listitem">
              <span>Location</span>
              <strong>Ramallah, Palestine</strong>
            </div>
            <div role="listitem">
              <span>Experience</span>
              <strong>Frontend & Node.js Internship</strong>
            </div>
          </div>
        </section>

        <section className="section about" id="about">
          <SectionHeading index="01" title="About" />
          <div className="about-grid">
            <h2>Developer mindset, product-first execution.</h2>
            <div className="about-copy">
              <p>
                I work on software the way users actually experience it:
                discovery, signup, trust, purchase flow, and follow-up. That is
                why I focus on e-commerce and service platforms where interface,
                business logic, and data consistency all matter together.
              </p>
              <p>
                My recent work includes marketplace systems, commerce-style
                mobile journeys, and full-stack internship platform features
                built with React and Node.js. I keep implementations simple,
                readable, and maintainable.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills" aria-labelledby="skills-title">
          <div className="skills-title">
            <p className="eyebrow"><span>02</span>Skills</p>
            <h2 id="skills-title">Stack and capabilities</h2>
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
            title="Selected projects"
            description="Real projects focused on customer workflows, role-based logic, API integration, and product delivery."
          />
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
          </div>
          <a className="text-link" href="https://github.com/M7md-oth?tab=repositories" target="_blank" rel="noreferrer">
            Browse all repositories
            <ArrowUpRight />
          </a>
        </section>

        <section className="section journey" id="experience">
          <SectionHeading
            index="04"
            title="Experience and leadership"
            description="Internships and projects from my CV that shaped my full-stack direction."
          />
          <ol className="timeline">
            {journey.map((item) => (
              <li key={item.period + item.role}>
                <span className="timeline-year">{item.period}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p className="timeline-org">{item.organization}</p>
                  <p>{item.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact">
          <p className="eyebrow"><span>05</span>Contact</p>
          <div className="contact-grid">
            <h2>Let&apos;s build something useful.</h2>
            <div className="contact-action">
              <p>
                I&apos;m open to React, full-stack, and e-commerce development
                opportunities.
              </p>
              <a className="button button-light" href="mailto:mohammedoth1232@gmail.com">
                Start a conversation
                <ArrowUpRight />
              </a>
            </div>
          </div>
          <div className="contact-footer">
            <p>Mohammed O. Abdallah · Full-stack Developer</p>
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
