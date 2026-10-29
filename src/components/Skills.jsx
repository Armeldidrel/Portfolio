import { BarChart3, BrainCircuit, Code2, Database } from 'lucide-react';
import { skills, tools } from '../data';
import Reveal from './Reveal';

const icons = {
  brain: BrainCircuit,
  database: Database,
  chart: BarChart3,
  code: Code2,
};

export default function Skills() {
  return (
    <section className="section skills" id="competences">
      <div className="container">
        <Reveal className="section-top">
          <span className="eyebrow">04 — Compétences</span>
          <span className="section-meta">Boîte à outils</span>
        </Reveal>

        <div className="split-head">
          <Reveal>
            <h2 className="section-title">
              Une stack <em>complète.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="section-aside">
              De la collecte à la visualisation : les outils que j'utilise pour faire parler les
              données, du notebook à la production.
            </p>
          </Reveal>
        </div>

        <div className="skill-grid">
          {skills.map((skill, index) => {
            const Icon = icons[skill.icon];
            return (
              <Reveal className="skill-card" key={skill.title} delay={index * 0.06}>
                <span className="skill-num">0{index + 1}</span>
                <h3 className="skill-title">
                  {skill.title}
                  <Icon size={18} strokeWidth={1.5} />
                </h3>
                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span className="skill-tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <div className="tool-strip" aria-hidden="true">
        <div className="tool-track">
          {[0, 1].map((group) => (
            <div className="tool-group" key={`a-${group}`}>
              {tools.map((tool, index) => (
                <span className={`tool-word ${index % 4 === 0 ? 'fill' : ''}`} key={`${group}-${tool}-a`}>
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="tool-strip is-reverse" aria-hidden="true">
        <div className="tool-track">
          {[0, 1].map((group) => (
            <div className="tool-group" key={`b-${group}`}>
              {[...tools].reverse().map((tool, index) => (
                <span className={`tool-word ${index % 5 === 0 ? 'fill' : ''}`} key={`${group}-${tool}-b`}>
                  {tool}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
