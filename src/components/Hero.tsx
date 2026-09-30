import ArrowIcon from './ArrowIcon'
import { projects } from '../data/projects'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow">
          <span aria-hidden="true"></span> Hello Pascal · Projets personnels
        </p>
        <h1 id="hero-title">
          Des idées utiles,<br />
          transformées en <em>applications.</em>
        </h1>
        <p className="hero-intro">
          Sur mon temps libre, je conçois des applications gratuites, des jeux et des outils web, avec
          une idée simple : créer des expériences claires, utiles et agréables à utiliser.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#projets">
            Découvrir mes projets <ArrowIcon />
          </a>
          <a className="secondary-link" href="#apropos">
            Ma démarche
          </a>
        </div>
      </div>
      <aside className="work-index" aria-label="Accès rapide aux projets">
        <div className="work-index-heading">
          <span>Projets actifs</span>
          <span>03 réalisations</span>
        </div>
        <ol>
          {projects.map((p) => (
            <li key={p.id}>
              <a href={`/projets/${p.slug}/`}>
                <span className="work-index-number">{String(p.index).padStart(2, '0')}</span>
                <span className="work-index-title">{p.title}</span>
                <span className="work-index-arrow" aria-hidden="true">↘</span>
              </a>
            </li>
          ))}
        </ol>
        <p>Outils web · SaaS · IA</p>
      </aside>
    </section>
  )
}
