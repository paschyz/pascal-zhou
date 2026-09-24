import { Link } from 'react-router-dom'

export default function Footer({ variant = 'main' }: { variant?: 'main' | 'legal' }) {
  const isLegal = variant === 'legal'
  return (
    <footer className={isLegal ? 'legal-shell legal-footer' : undefined}>
      <Link className="brand" to="/" aria-label="H/P Hello Pascal — Revenir à l'accueil">
        {isLegal ? (
          <>
            <span aria-hidden="true">H/P</span>
            <strong>Hello Pascal</strong>
          </>
        ) : (
          <>
            <span className="brand-mark" aria-hidden="true">H/P</span>
            <span className="brand-name">Hello Pascal</span>
          </>
        )}
      </Link>
      {isLegal ? (
        <nav aria-label="Informations légales">
          <Link to="/confidentialite">Confidentialité</Link>
          <Link to="/mentions-legales">Mentions légales</Link>
          <a href="mailto:pascal.zhou.pro@gmail.com">Contact</a>
        </nav>
      ) : (
        <div className="footer-copy">
          <p>Imaginé et développé par Pascal.</p>
          <nav aria-label="Informations légales">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </nav>
        </div>
      )}
      <p className={isLegal ? undefined : 'footer-year'}>© {new Date().getFullYear()}</p>
    </footer>
  )
}
