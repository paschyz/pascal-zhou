import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  return (
    <section className="projects-section" id="projets" aria-labelledby="projects-title">
      <div className="section-heading">
        <p className="section-number">
          <span>01</span> Réalisations
        </p>
        <div>
          <h2 id="projects-title">{projects.length} projet{projects.length > 1 ? 's' : ''}, {projects.length} usage{projects.length > 1 ? 's' : ''} concret{projects.length > 1 ? 's' : ''}.</h2>
          <p>Des projets personnels conçus pour simplifier, accompagner ou renouveler une expérience familière.</p>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
