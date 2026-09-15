import { brand, nav } from '../data/content.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__cta container">
        <h2>
          Vamos cuidar do seu <span>melhor amigo</span>?
        </h2>
        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Falar no WhatsApp
        </a>
      </div>

      <div className="footer__base container">
        <span className="footer__logo">{brand.short}</span>

        <nav className="footer__links" aria-label="Links do rodapé">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <p className="footer__copy">
          © {year} {brand.name}. Este site é um modelo de apresentação.
        </p>
      </div>
    </footer>
  );
}
