import type { Project } from '../data/projects'
import ArrowIcon from './ArrowIcon'
import ExternalIcon from './ExternalIcon'

function AppVisual({ project }: { project: Project & { visual: { type: 'app'; screen: string; icon: string } } }) {
  return (
    <div className={`app-visual app-visual--${project.variant === 'objectif-dan' ? 'dan' : project.variant}`} aria-hidden="true">
      <img className="app-screen" src={project.visual.screen} alt="" loading="lazy" />
      <img className="app-icon" src={project.visual.icon} alt="" loading="lazy" />
    </div>
  )
}

function PairoVisual() {
  return (
    <div className="pairo-visual" aria-hidden="true">
      <div className="pairo-card pairo-card-diff">
        <div className="pairo-line pairo-line--add" />
        <div className="pairo-line pairo-line--ctx" />
        <div className="pairo-line pairo-line--del" />
        <div className="pairo-line pairo-line--add" />
        <div className="pairo-line pairo-line--ctx" />
      </div>
      <div className="pairo-card pairo-card-review">
        <span>✓</span>
        <small>PR</small>
      </div>
      <div className="pairo-grid" />
    </div>
  )
}

function CvFlowVisual() {
  return (
    <div className="cvflow-visual" aria-hidden="true">
      <div className="cvflow-card cvflow-card-doc">
        <div className="cvflow-header" />
        <div className="cvflow-line cvflow-line--wide" />
        <div className="cvflow-line cvflow-line--medium" />
        <div className="cvflow-line cvflow-line--narrow" />
        <div className="cvflow-line cvflow-line--wide" />
        <div className="cvflow-line cvflow-line--medium" />
      </div>
      <div className="cvflow-card cvflow-card-score">
        <span>A+</span>
        <small>ATS</small>
      </div>
      <div className="cvflow-grid" />
    </div>
  )
}

function ChessVisual() {
  return (
    <div className="chess-visual" aria-hidden="true">
      <div className="chess-card chess-card-back" />
      <div className="chess-card chess-card-front">
        <span>♞</span>
        <small>K</small>
      </div>
      <div className="chess-grid" />
    </div>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  switch (project.visual.type) {
    case 'pairo': return <PairoVisual />
    case 'cvflow': return <CvFlowVisual />
    case 'chess': return <ChessVisual />
    case 'app': return <AppVisual project={project as Project & { visual: { type: 'app'; screen: string; icon: string } }} />
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const idx = String(project.index).padStart(2, '0')

  return (
    <article id={project.id} className={`project-card project-card--${project.variant}`}>
      <div className="project-visual">
        <span className="project-index">Projet {idx}</span>
        <ProjectVisual project={project} />
      </div>
      <div className="project-content">
        <div className="project-meta">
          <p className="project-category">{project.category}</p>
          <p className="project-status">
            <span aria-hidden="true"></span>
            {project.status}
          </p>
        </div>
        <h3>
          <a href={`/projets/${project.slug}/`}>{project.title}</a>
        </h3>
        <p className="project-description">{project.description}</p>
        <ul className="technology-list" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.links.map((link) => (
            <a key={link.href} href={link.href} className="project-link">
              {link.external ? <ExternalIcon /> : <ArrowIcon />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}
