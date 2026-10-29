import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight, GripHorizontal } from 'lucide-react';
import { profile, projects } from '../data';
import Reveal from './Reveal';

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 70 : -70,
    filter: 'blur(10px)',
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.32, 0.72, 0, 1] },
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -70 : 70,
    filter: 'blur(10px)',
    transition: { duration: 0.4, ease: [0.32, 0.72, 0, 1] },
  }),
};

const pad = (value) => String(value).padStart(2, '0');

function ChartArt() {
  return (
    <div className="art chart-art">
      <div className="art-head">
        <div>
          <span className="art-label">Consommation vs météo</span>
          <span className="art-title">France · Hexagone</span>
        </div>
        <span className="art-chip">R · RStudio</span>
      </div>

      <div className="art-metrics">
        <div>
          <strong>12,4°</strong>
          <span>Temp. moyenne</span>
        </div>
        <div>
          <strong>+18%</strong>
          <span>Corrélation</span>
        </div>
        <div>
          <strong>r² .81</strong>
          <span>Régression</span>
        </div>
      </div>

      <div className="art-chart">
        <svg viewBox="0 0 500 400" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="limeArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ccff4d" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ccff4d" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[70, 140, 210, 280, 350].map((y) => (
            <line key={y} x1="0" y1={y} x2="500" y2={y} stroke="rgba(243,242,234,0.07)" />
          ))}
          {[100, 200, 300, 400].map((x) => (
            <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="rgba(243,242,234,0.04)" />
          ))}

          <motion.path
            d="M0 300 C40 285, 70 250, 110 265 S170 320, 210 290 S280 200, 320 220 S390 270, 430 210 S480 160, 500 170 L500 400 L0 400 Z"
            fill="url(#limeArea)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M0 300 C40 285, 70 250, 110 265 S170 320, 210 290 S280 200, 320 220 S390 270, 430 210 S480 160, 500 170"
            fill="none"
            stroke="#ccff4d"
            strokeWidth="2.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.3 }}
          />
          <motion.path
            d="M0 330 C50 320, 80 300, 120 305 S180 270, 220 260 S280 220, 330 235 S390 180, 430 190 S480 140, 500 150"
            fill="none"
            stroke="#ffb86b"
            strokeWidth="2"
            strokeDasharray="4 6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: 'easeInOut', delay: 0.5 }}
          />
        </svg>
        <div className="chart-legend">
          <span>
            <i style={{ background: '#ccff4d' }} />
            Consommation
          </span>
          <span>
            <i style={{ background: '#ffb86b' }} />
            Température
          </span>
        </div>
      </div>

      <div className="art-foot">
        <span>Jan</span>
        <span>Juin</span>
        <span>Déc</span>
      </div>
    </div>
  );
}

const tables = [
  {
    name: 'clients',
    count: '12',
    rows: [
      ['id_client', 'PK · INT'],
      ['nom', 'VARCHAR'],
      ['email', 'VARCHAR'],
      ['telephone', 'VARCHAR'],
    ],
  },
  {
    name: 'sejours',
    count: '28',
    rows: [
      ['id_sejour', 'PK · INT'],
      ['langue', 'VARCHAR'],
      ['duree', 'INT'],
      ['id_client', 'FK · INT'],
    ],
  },
  {
    name: 'inscriptions',
    count: '64',
    rows: [
      ['id_inscription', 'PK · INT'],
      ['date_inscription', 'DATE'],
      ['statut', 'ENUM'],
      ['id_sejour', 'FK · INT'],
    ],
  },
];

function DatabaseArt() {
  return (
    <div className="art db-art">
      <div className="art-head">
        <div>
          <span className="art-label">Modélisation relationnelle</span>
          <span className="art-title">mecca_db</span>
        </div>
        <span className="art-chip">MySQL</span>
      </div>

      <div className="db-canvas">
        {tables.map((table, index) => (
          <div className={`db-table t${index + 1}`} key={table.name}>
            <div className="db-head">
              <span className="db-key" />
              <span className="db-name">{table.name}</span>
              <span className="db-count">{table.count} rows</span>
            </div>
            {table.rows.map(([field, type]) => (
              <div className="db-row" key={field}>
                <span>{field}</span>
                <span className={type.startsWith('PK') ? 'is-pk' : type.startsWith('FK') ? 'is-fk' : ''}>
                  {type}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="art-foot">
        <span>3 tables</span>
        <span>clés étrangères</span>
        <span>SQL</span>
      </div>
    </div>
  );
}

function ChatArt() {
  return (
    <div className="art chat-art">
      <div className="art-head">
        <div>
          <span className="art-label">Assistant interne</span>
          <span className="art-title">localai · chat</span>
        </div>
        <span className="art-chip">LocalAI</span>
      </div>

      <div className="chat-window">
        <div className="chat-status">
          <span className="online" />
          modèle local · aucune donnée externe
        </div>

        <div className="chat-thread">
          <div className="chat-msg user">
            <span className="chat-who">vous</span>
            <p>Peux-tu résumer les demandes de livraison de la semaine ?</p>
          </div>

          <div className="chat-msg bot">
            <span className="chat-who">assistant</span>
            <p>
              42 demandes reçues, 38 livrées. Les pics concernent Brazzaville et Pointe-Noire.
              Deux commandes attendent une validation de stock.
            </p>
            <div className="typing" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        <div className="chat-field">
          <span>Posez une question...</span>
          <span className="chat-enter">↵</span>
        </div>
      </div>

      <div className="art-foot">
        <span>LLM local</span>
        <span>Promptfoo</span>
        <span>tests · logs</span>
      </div>
    </div>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return <img className="project-image" src={project.image} alt={project.title} />;
  }
  if (project.visual === 'chart') return <ChartArt />;
  if (project.visual === 'database') return <DatabaseArt />;
  return <ChatArt />;
}

export default function Projects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const project = projects[index];

  const next = useCallback(() => {
    setDirection(1);
    setIndex((current) => (current + 1) % projects.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((current) => (current - 1 + projects.length) % projects.length);
  }, []);

  const goTo = (target) => {
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  };

  useEffect(() => {
    if (paused) return undefined;
    const timer = setTimeout(next, 7000);
    return () => clearTimeout(timer);
  }, [index, paused, next]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -70 || info.velocity.x < -450) next();
    else if (info.offset.x > 70 || info.velocity.x > 450) prev();
  };

  return (
    <section className="section projects" id="projets">
      <div className="container">
        <Reveal className="section-top">
          <span className="eyebrow">02 — Projets sélectionnés</span>
          <span className="section-meta">{pad(projects.length)} études de cas</span>
        </Reveal>

        <div className="projects-head">
          <Reveal>
            <h2 className="section-title">
              Des données aux <em>décisions.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="projects-lede">
              Cinq projets qui résument ma façon de travailler : comprendre la donnée, la nettoyer,
              la modéliser, puis la rendre lisible.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div
            className="carousel"
            style={{ '--p': project.color }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            aria-roledescription="carrousel"
            aria-label="Projets sélectionnés"
          >
            <div className="carousel-stage">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.article
                  className="project-slide"
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  aria-live="polite"
                >
                  <div className="slide-media">
                    <span className="media-index" aria-hidden="true">
                      {pad(index + 1)}
                    </span>
                    <div className="media-window">
                      <div className="media-bar">
                        <span className="dots" aria-hidden="true">
                          <span />
                          <span />
                          <span />
                        </span>
                        <span className="label">{project.window}</span>
                        <ArrowUpRight size={13} strokeWidth={1.6} />
                      </div>
                      <div className="media-body">
                        <ProjectVisual project={project} />
                      </div>
                    </div>
                  </div>

                  <div className="slide-content">
                    <div className="project-kicker">
                      <span className="idx">{pad(index + 1)}</span>
                      <span className="dotmark" />
                      <span>{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <ul className="project-points">
                      {project.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      className="project-cta"
                      href={`mailto:${profile.email}?subject=${encodeURIComponent(
                        `Projet : ${project.title}`
                      )}`}
                    >
                      Discuter de ce projet
                      <ArrowUpRight size={15} strokeWidth={2} />
                    </a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <div className="carousel-foot">
              <div className="carousel-controls">
                <button className="round-btn" onClick={prev} aria-label="Projet précédent" type="button">
                  <ArrowLeft size={18} strokeWidth={1.7} />
                </button>
                <button className="round-btn" onClick={next} aria-label="Projet suivant" type="button">
                  <ArrowRight size={18} strokeWidth={1.7} />
                </button>
                <span className="carousel-count">
                  <span>{pad(index + 1)}</span> / {pad(projects.length)}
                </span>
              </div>

              <div className="carousel-tabs">
                {projects.map((item, tabIndex) => (
                  <button
                    className={`tab ${tabIndex === index ? 'active' : ''}`}
                    key={item.title}
                    onClick={() => goTo(tabIndex)}
                    type="button"
                    aria-label={`Voir le projet ${item.title}`}
                  >
                    <span className="n">{pad(tabIndex + 1)}</span>
                    <span className="tab-title">{item.short}</span>
                  </button>
                ))}
              </div>

              <span className="drag-hint">
                <GripHorizontal size={14} strokeWidth={1.6} />
                Glissez
              </span>
            </div>

            <div className="carousel-progress">
              <span key={index} className={paused ? 'is-paused' : ''} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
