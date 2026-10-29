import { ArrowUpRight, Download, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-top">
          <span className="contact-status">
            <span className="dot" />
            Disponible dès septembre 2026
          </span>
          <span>{profile.location}</span>
        </div>

        <Reveal>
          <h2>
            Un projet ?
            <br />
            <em>Une alternance ?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="contact-sub">
            Je recherche une alternance en data science, analyse ou data engineering à partir de
            septembre 2026. Rythme : 1 semaine à l'école / 3 semaines en entreprise.
          </p>

          <a className="contact-mail" href={`mailto:${profile.email}`}>
            <span>{profile.email}</span>
            <ArrowUpRight size={24} strokeWidth={1.8} />
          </a>

          <div className="contact-grid">
            <a href={`tel:${profile.phoneHref}`}>
              <Phone size={14} strokeWidth={1.8} />
              {profile.phone}
            </a>
            <span>
              <MapPin size={14} strokeWidth={1.8} />
              Lyon, France
            </span>
            <a href="/CV_alt.pdf" download>
              <Download size={14} strokeWidth={1.8} />
              Télécharger le CV
            </a>
            <a href={`mailto:${profile.email}`}>
              <Mail size={14} strokeWidth={1.8} />
              Écrire un message
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
