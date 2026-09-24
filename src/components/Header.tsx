import ArrowIcon from './ArrowIcon'

export default function Header() {
  return (
    <header className="site-header" id="top">
      <a className="brand" href="#top" aria-label="H/P Hello Pascal — Revenir à l'accueil">
        <span className="brand-mark" aria-hidden="true">H/P</span>
        <span className="brand-name">Hello Pascal</span>
      </a>
      <nav aria-label="Navigation principale">
        <a href="#projets">Projets</a>
        <a href="#apropos">À propos</a>
      </nav>
      <a className="header-contact" href="mailto:pascal.zhou.pro@gmail.com" aria-label="M'écrire à Pascal">
        <span>M'écrire</span>
        <ArrowIcon />
      </a>
    </header>
  )
}
