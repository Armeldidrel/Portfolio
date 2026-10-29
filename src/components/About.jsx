import Reveal from './Reveal';
import { profile } from '../data';

const infoRows = [
  { label: 'Localisation', value: 'Lyon, France' },
  { label: 'Formation', value: 'Master 1 IA & Big Data — ESGI Lyon' },
  { label: 'Recherche', value: 'Alternance dès septembre 2026' },
  { label: 'Rythme', value: '1 semaine école / 3 semaines entreprise' },
  { label: 'Mobilité', value: 'Permis B · Véhiculé' },
];

const stats = [
  { value: '02', label: 'Stages en entreprise', detail: 'IA · Développement' },
  { value: '05', label: 'Projets data & IA', detail: 'Analyse · ML · SQL' },
  { value: 'M1', label: 'IA & Big Data', detail: 'ESGI Lyon' },
  { value: '1/3', label: 'Rythme alternance', detail: 'École / Entreprise' },
];

export default function About() {
  return (
    <section className="section about" id="profil">
      <div className="container">
        <Reveal className="section-top">
          <span className="eyebrow">01 — Profil</span>
          <span className="section-meta">Lyon, France · {profile.age} ans</span>
        </Reveal>

        <div className="about-grid">
          <Reveal>
            <h2 className="section-title">
              Je transforme les données en <em>récits clairs.</em>
            </h2>
          </Reveal>

          <Reveal className="about-body" delay={0.12}>
            <p>{profile.bio[0]}</p>
            <p>{profile.bio[1]}</p>

            <div className="about-info">
              {infoRows.map((row) => (
                <div className="about-info-row" key={row.label}>
                  <span>{row.label}</span>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <Reveal className="stat" key={stat.label} delay={index * 0.08}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
              <span className="stat-detail">{stat.detail}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
