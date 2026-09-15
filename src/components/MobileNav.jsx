import { brand } from '../data/content.js';
import './MobileNav.css';

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.7,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

const icons = {
  home: (
    <svg {...iconProps}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1h4v-6h3v6h4a1 1 0 0 0 1-1v-9" />
    </svg>
  ),
  bag: (
    <svg {...iconProps}>
      <path d="M6 8h12l1 12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L6 8Z" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
    </svg>
  ),
  scissors: (
    <svg {...iconProps}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="m8.5 7.5 11 9M8.5 16.5l11-9" />
    </svg>
  ),
  chat: (
    <svg {...iconProps}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3Z" />
      <path d="M8.7 9.6c.3 2.6 2.5 4.9 5.1 5.2.9.1 1.5-.5 1.5-1.3v-.5c0-.3-.2-.5-.5-.6l-1.5-.5c-.3-.1-.6 0-.7.2l-.4.4a5.2 5.2 0 0 1-2.1-2.1l.4-.4c.2-.2.3-.5.2-.7l-.5-1.5c-.1-.3-.3-.5-.6-.5h-.5c-.8 0-1.4.6-1.4 1.3Z" />
    </svg>
  ),
};

const items = [
  { label: 'Início', href: '#topo', icon: 'home' },
  { label: 'Produtos', href: '#produtos', icon: 'bag' },
  { label: 'Serviços', href: '#servicos', icon: 'scissors' },
  { label: 'WhatsApp', href: brand.whatsapp, icon: 'chat', external: true },
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
          <span className="mobile-nav__icon" aria-hidden="true">
            {icons[item.icon]}
          </span>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
