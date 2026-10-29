import { ArrowUpRight } from 'lucide-react';
import { experience } from '../data';
import Reveal from './Reveal';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <div className="container">
        <Reveal className="section-top">
          <span className="eyebrow">03 — Expérience</span>
          <span className="section-meta">02 stages · 2023 — 2025</span>
        </Reveal>

        <div className="split-head">
          <Reveal>
            <h2 className="section-title">
              Sur le <em>terrain.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-aside">
              De l'IA générative au développement d'applications : deux expériences qui m'ont
              appris à livrer, tester et documenter en équipe.
            </p>
          </Reveal>
        </div>

        <div className="exp-list">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.1}>
              <article className="exp-item">
                <div className="exp-meta">
                  <span>{job.period}</span>
                  <span className="tag">{job.type}</span>
                </div>

                <div className="exp-main">
                  <h3>{job.role}</h3>
                  <p className="exp-company">
                    {job.company} <span>— {job.place}</span>
                  </p>
                  <ul className="exp-points">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>

                <span className="exp-arrow" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
