import { ArrowUp } from 'lucide-react';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © 2026 {profile.firstName} {profile.lastName}
        </span>
        <span className="footer-note">Data Science · IA · Big Data</span>
        <a href="#top">
          Retour en haut
          <ArrowUp size={13} strokeWidth={1.8} />
        </a>
      </div>
    </footer>
  );
}
