import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function MentionsLegales() {
  return (
    <>
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <header className="legal-shell legal-header">
        <Link className="brand" to="/" aria-label="H/P Hello Pascal — Revenir à l'accueil">
          <span className="brand-mark" aria-hidden="true">H/P</span>
          <span className="brand-name">Hello Pascal</span>
        </Link>
        <Link className="back-link" to="/">← Retour</Link>
      </header>
      <main className="legal-shell legal-main" id="contenu" tabIndex={-1}>
        <header className="legal-heading">
          <p className="eyebrow">Informations légales</p>
          <h1>Mentions légales</h1>
          <p className="legal-date">
            Dernière mise à jour : <time dateTime="2026-08-11">11 août 2026</time>
          </p>
        </header>

        <div className="legal-content">
          <section>
            <h2>Édition et publication</h2>
            <div>
              <p>
                Ce site est édité à titre non professionnel par Pascal, également
                directeur de la publication. Il présente ses projets personnels et
                indépendants.
              </p>
              <p>
                Contact :{' '}
                <a href="mailto:pascal.zhou.pro@gmail.com">pascal.zhou.pro@gmail.com</a>.
              </p>
            </div>
          </section>

          <section>
            <h2>Hébergement</h2>
            <p>
              Le site est hébergé par Vercel Inc.,<br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>
          </section>

          <section>
            <h2>Propriété intellectuelle</h2>
            <div>
              <p>
                Sauf mention contraire, les textes, visuels, éléments graphiques et
                signes distinctifs présents sur ce site appartiennent à l'éditeur ou
                sont utilisés avec l'autorisation de leurs titulaires. Toute
                reproduction, représentation, modification ou adaptation, totale ou
                partielle, sans autorisation préalable est interdite, sauf exceptions
                prévues par la loi.
              </p>
              <p>
                Les projets présentés peuvent être soumis à leurs propres licences et
                conditions d'utilisation.
              </p>
            </div>
          </section>

          <section>
            <h2>Services et marques externes</h2>
            <p>
              Apple, App Store et les marques associées sont des marques d'Apple Inc.
              Google Play et le logo Google Play sont des marques de Google LLC.
              GitHub est une marque de GitHub, Inc. Les projets présentés sur ce site
              ne sont ni affiliés à ces sociétés ni approuvés par elles.
            </p>
          </section>
        </div>
      </main>
      <Footer variant="legal" />
    </>
  )
}
