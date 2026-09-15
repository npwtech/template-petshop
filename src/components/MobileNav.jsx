import { brand } from '../data/content.js';
import './MobileNav.css';

const items = [
  { label: 'Início', href: '#topo', icon: '🏠' },
  { label: 'Produtos', href: '#produtos', icon: '🛍️' },
  { label: 'Serviços', href: '#servicos', icon: '✂️' },
  { label: 'WhatsApp', href: brand.whatsapp, icon: '📲', external: true },
];

export default function MobileNav() {
  return (
    <nav className="mobile-nav" aria-label="Navegação rápida">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener noreferrer' : undefined}
          className="mobile-nav__item"
        >
          <span aria-hidden="true">{item.icon}</span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
