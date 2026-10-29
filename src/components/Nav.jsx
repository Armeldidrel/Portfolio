import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data';

const links = [
  { label: 'Profil', href: '#profil' },
  { label: 'Projets', href: '#projets' },
  { label: 'Expérience', href: '#experience' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav-inner">
          <a className="logo" href="#top" aria-label="Retour en haut">
            AG<span>.</span>
          </a>

          <nav className="nav-links" aria-label="Navigation principale">
            {links.map((link) => (
              <a className="nav-link" href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-right">
            <a className="nav-status" href="#contact">
              <span className="dot" />
              Alternance · Sept. 2026
            </a>
            <button
              className="menu-btn"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              type="button"
            >
              <Menu size={20} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-head container">
              <span className="logo">
                AG<span>.</span>
              </span>
              <button
                className="menu-btn is-open"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                type="button"
              >
                <X size={22} strokeWidth={1.6} />
              </button>
            </div>

            <nav className="mobile-links" aria-label="Navigation mobile">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="mobile-index">0{index + 1}</span>
                  {link.label}
                  <ArrowUpRight size={22} strokeWidth={1.4} />
                </motion.a>
              ))}
            </nav>

            <motion.div
              className="mobile-menu-foot container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>{profile.location}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
