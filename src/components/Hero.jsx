import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { profile } from '../data';

const titleParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
};

const titleLine = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-orb" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-grid">
          <motion.div
            className="hero-copy"
            variants={titleParent}
            initial="hidden"
            animate="show"
          >
            <motion.div className="hero-eyebrow" variants={fadeUp}>
              <span className="hero-eyebrow-line" />
              Portfolio 2026 · Data & IA
            </motion.div>

            <h1 className="hero-title">
              <span className="line">
                <motion.span variants={titleLine}>Armel</motion.span>
              </span>
              <span className="line">
                <motion.span className="serif" variants={titleLine}>
                  Gania
                </motion.span>
              </span>
            </h1>

            <motion.p className="hero-role" variants={fadeUp}>
              <b>Data Scientist</b>
              <span className="sep">&amp;</span>
              <b>Data Engineer</b>
            </motion.p>

            <motion.p className="hero-lede" variants={fadeUp}>
              Je transforme des données brutes en <strong>décisions claires</strong>. Master 1
              IA &amp; Big Data, à la recherche d'une alternance dès septembre 2026.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeUp}>
              <a className="btn btn-primary" href="#projets">
                Voir mes projets
                <ArrowDown size={16} strokeWidth={2} />
              </a>
              <a className="btn btn-ghost" href="/CV_alt.pdf" download>
                <Download size={15} strokeWidth={1.8} />
                Télécharger le CV
              </a>
            </motion.div>

            <motion.div className="hero-meta" variants={fadeUp}>
              <div>
                <span className="meta-label">Basé à</span>
                <span className="meta-value">Lyon, France</span>
              </div>
              <div>
                <span className="meta-label">Formation</span>
                <span className="meta-value">Master 1 IA &amp; Big Data</span>
              </div>
              <div>
                <span className="meta-label">Rythme</span>
                <span className="meta-value">1 sem. école / 3 sem. entreprise</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero-vertical">Data · IA · Engineering</span>

            <div className="portrait">
              <div className="portrait-frame" aria-hidden="true" />
              <div className="portrait-img">
                <img src="/img/portrait.png" alt="Portrait d'Armel Gania" />
                <div className="portrait-tag">
                  <span className="portrait-name">Armel Gania</span>
                  <span className="portrait-loc">45.76° N · 4.83° E</span>
                </div>
              </div>

              <div className="orbit-badge" aria-hidden="true">
                <svg viewBox="0 0 160 160">
                  <defs>
                    <path
                      id="orbitPath"
                      d="M80,80 m-58,0 a58,58 0 1,1 116,0 a58,58 0 1,1 -116,0"
                    />
                  </defs>
                  <text>
                    <textPath href="#orbitPath">
                      ALTERNANCE 2026 • DATA &amp; IA • ALTERNANCE 2026 • DATA &amp; IA •
                    </textPath>
                  </text>
                </svg>
                <span className="orbit-core">
                  <ArrowUpRight size={20} strokeWidth={2} />
                </span>
              </div>

              <div className="hero-card">
                <span className="hero-card-dot" />
                <div>
                  <span className="hero-card-label">Recherche alternance</span>
                  <span className="hero-card-value">Septembre 2026</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.footer
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <a className="scroll-cue" href="#profil">
            <span className="scroll-line" />
            Défiler pour découvrir
          </a>
          <div className="hero-footer-meta">
            <span className="dot" />
            {profile.status}
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
