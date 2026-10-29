import { Dumbbell, Music2, Shirt } from 'lucide-react';
import { education, interests } from '../data';
import Reveal from './Reveal';

const icons = {
  music: Music2,
  sport: Dumbbell,
  style: Shirt,
};

export default function Education() {
  return (
    <section className="section education" id="parcours">
      <div className="container">
        <Reveal className="section-top">
          <span className="eyebrow">05 — Parcours</span>
          <span className="section-meta">Diplômes & intérêts</span>
        </Reveal>

        <div className="path-grid">
          <div>
            <Reveal>
              <h2 className="section-title">
                Un parcours <em>orienté data.</em>
              </h2>
            </Reveal>

            <div className="edu-list">
              {education.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="edu-item">
                    <div className="edu-meta">
                      <span className="edu-year">{item.year}</span>
                      <span className="edu-badge">{item.tag}</span>
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="edu-school">
                        {item.school} <span>· {item.place}</span>
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="interest-panel" delay={0.15}>
            <span className="eyebrow">Au-delà des données</span>
            <h3>Ce qui me fait avancer.</h3>

            <div className="interest-list">
              {interests.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <div className="interest-row" key={item.title}>
                    <span className="interest-icon">
                      <Icon size={17} strokeWidth={1.6} />
                    </span>
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="langues">
              <span className="langues-label">Langues</span>
              <div className="langues-pills">
                <span className="lang-pill">Français · Courant</span>
                <span className="lang-pill">Anglais · Courant</span>
                <span className="lang-pill">Permis B · Véhiculé</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
