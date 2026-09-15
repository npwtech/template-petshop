import { useEffect, useRef } from 'react';
import { revealUp } from '../utils/animations.js';
import { services } from '../data/content.js';
import { brand } from '../data/content.js';
import './Services.css';

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealUp('.service-card', { trigger: sectionRef.current, stagger: 0.1 });
  }, []);

  return (
    <section id="servicos" className="services container" ref={sectionRef}>
      <div className="section-head">
        <h2 className="section-head__title">O que oferecemos</h2>
        <p className="section-head__text">
          Da tosa ao petisco favorito — tudo o que o seu pet precisa, em um
          só lugar de confiança.
        </p>
      </div>

      <div className="services__grid">
        {services.map((s) => (
          <a
            key={s.id}
            href={s.featured ? '#tosa' : brand.whatsapp}
            target={s.featured ? undefined : '_blank'}
            rel={s.featured ? undefined : 'noopener noreferrer'}
            className={`service-card ${s.featured ? 'service-card--featured' : ''}`}
            data-cursor="grow"
          >
            <div className="service-card__media">
              <img src={s.image} alt="" loading="lazy" />
            </div>
            <div className="service-card__body">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="service-card__link">
                {s.featured ? 'Conhecer o espaço' : 'Falar no WhatsApp'} →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
