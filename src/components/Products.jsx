import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger, ensureGsap } from '../utils/animations.js';
import { products, brand } from '../data/content.js';
import './Products.css';

export default function Products() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    ensureGsap();
    const section = sectionRef.current;
    const track = trackRef.current;

    const mm = gsap.matchMedia();

    mm.add('(min-width: 861px)', () => {
      const distance = track.scrollWidth - section.clientWidth;
      if (distance <= 0) return;

      const tween = gsap.to(track, {
        x: -distance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${distance + window.innerHeight * 0.3}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      return () => tween.scrollTrigger && tween.scrollTrigger.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="produtos" className="products" ref={sectionRef}>
      <div className="products__heading container">
        <div className="section-head" style={{ marginBottom: '2rem' }}>
          <h2 className="section-head__title">Produtos em destaque</h2>
          <p className="section-head__text">
            Nossa vitrine funciona como um catálogo — o fechamento continua
            simples, direto no WhatsApp.
          </p>
        </div>
      </div>

      <div className="products__viewport">
        <div className="products__track" ref={trackRef}>
          {products.map((p) => (
            <article className="product-card" key={p.id}>
              <div className="product-card__media">
                <img src={p.image} alt={p.name} loading="lazy" />
                <span className="product-card__tag">{p.category}</span>
              </div>
              <h3>{p.name}</h3>
              <p className="product-card__price">{p.price}</p>
              <a
                href={brand.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card__cta"
                data-cursor="grow"
              >
                Consultar no WhatsApp →
              </a>
            </article>
          ))}
          <div className="product-card product-card--end">
            <p>Quer ver o catálogo completo?</p>
            <a
              href={brand.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
