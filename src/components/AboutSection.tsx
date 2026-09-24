import ArrowIcon from './ArrowIcon'

export default function AboutSection() {
  return (
    <section className="about-section" id="apropos" aria-labelledby="about-title">
      <p className="section-number">
        <span>02</span> À propos
      </p>
      <div className="about-grid">
        <h2 id="about-title">Construire, tester, faire évoluer.</h2>
        <div className="about-copy" id="contact">
          <p>
            Ces projets naissent d'une envie de résoudre un besoin concret ou d'explorer une nouvelle
            mécanique. Je les imagine, les développe et les fais évoluer au fil des usages.
          </p>
          <div className="contact-links">
            <a href="mailto:pascal.zhou.pro@gmail.com">
              M'écrire <ArrowIcon />
            </a>
            <a href="https://github.com/paschyz">
              GitHub <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
