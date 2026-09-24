import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Confidentialite() {
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
          <p className="eyebrow">Vie privée</p>
          <h1>Politique de confidentialité</h1>
          <p className="legal-date">
            Dernière mise à jour : <time dateTime="2026-08-11">11 août 2026</time>
          </p>
          <p className="legal-intro">
            Cette politique concerne exclusivement le site. Elle ne décrit pas les traitements
            propres aux applications présentées sur le site.
          </p>
        </header>

        <div className="legal-content">
          <section>
            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement est Pascal. Pour toute question relative à tes données
              personnelles, tu peux écrire à{' '}
              <a href="mailto:pascal.zhou.pro@gmail.com">pascal.zhou.pro@gmail.com</a>.
            </p>
          </section>

          <section>
            <h2>2. Données collectées par le site</h2>
            <div>
              <p>Le site :</p>
              <ul>
                <li>ne crée aucun compte utilisateur ;</li>
                <li>ne comporte aucun formulaire ;</li>
                <li>ne dépose aucun cookie ;</li>
                <li>n'utilise aucun outil de mesure d'audience ;</li>
                <li>n'intègre aucun traceur publicitaire.</li>
              </ul>
              <p>
                Aucune donnée personnelle n'est demandée ou transmise directement par
                le site. Les polices, images, feuilles de style et scripts nécessaires
                à son affichage sont hébergés avec ses pages.
              </p>
            </div>
          </section>

          <section>
            <h2>3. Hébergement et journaux techniques</h2>
            <div>
              <p>
                Le site est hébergé par Vercel Inc. Pour fournir, sécuriser et maintenir
                l'hébergement, Vercel peut traiter les données techniques générées lors
                d'une requête, notamment l'adresse IP, la date et l'heure, la page
                demandée, le navigateur et les éventuelles erreurs.
              </p>
              <p>
                Ces éventuels journaux ne sont pas utilisés par l'éditeur pour mesurer
                l'audience, établir un profil ou diffuser de la publicité.
              </p>
            </div>
          </section>

          <section>
            <h2>4. Contact par e-mail</h2>
            <div>
              <p>
                Les liens de contact ouvrent uniquement ton logiciel de messagerie :
                aucun message n'est envoyé par le site. Si tu écris volontairement à
                l'éditeur, ton adresse e-mail, le contenu du message et les éventuelles
                pièces jointes sont utilisés afin de répondre à ta demande.
              </p>
              <p>
                Ce traitement repose sur l'intérêt légitime à répondre aux messages.
                Les échanges sont conservés pendant la durée nécessaire à leur
                traitement, puis supprimés lorsqu'ils ne sont plus utiles, sauf
                obligation légale ou nécessité de défendre un droit.
              </p>
            </div>
          </section>

          <section>
            <h2>5. Liens vers des services externes</h2>
            <p>
              Le site contient des liens vers des services externes, sans
              intégrer leurs contenus ni leurs traceurs. Lorsque tu suis l'un de ces
              liens, tu quittes le site et le service concerné applique sa
              propre politique de confidentialité.
            </p>
          </section>

          <section>
            <h2>6. Tes droits</h2>
            <p>
              Selon le traitement concerné, tu peux demander l'accès, la rectification,
              l'effacement ou la limitation de tes données, et t'opposer à leur
              traitement. Pour exercer ces droits, écris à{' '}
              <a href="mailto:pascal.zhou.pro@gmail.com">pascal.zhou.pro@gmail.com</a>. Tu peux
              également adresser une{' '}
              <a href="https://www.cnil.fr/fr/plaintes" rel="noopener noreferrer">
                réclamation à la CNIL
              </a>.
            </p>
          </section>
        </div>
      </main>
      <Footer variant="legal" />
    </>
  )
}
