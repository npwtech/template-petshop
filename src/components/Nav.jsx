import { useEffect, useState } from 'react';
import { nav, brand } from '../data/content.js';
import './Nav.css';

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner container">
        <a href="#topo" className="nav__logo" onClick={close}>
          {brand.short}
        </a>

        <nav className="nav__links" aria-label="Navegação principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="nav__cta"
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar no WhatsApp
        </a>

        <button
          className="nav__burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav__mobile-panel">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={close}>
            {item.label}
          </a>
        ))}
        <a href={brand.whatsapp} target="_blank" rel="noopener noreferrer" onClick={close}>
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
}
