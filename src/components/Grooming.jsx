import { useEffect, useRef } from 'react';
import { gsap, ensureGsap, revealMask, revealUp } from '../utils/animations.js';
import { groomingServices, brand } from '../data/content.js';
import './Grooming.css';

const IMAGE =
  'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=1600&q=80';

export default function Grooming() {
  const mediaRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    ensureGsap();
    revealMask(mediaRef.current, { trigger: sectionRef.current, start: 'top 70%' });
    revealUp('.grooming__list-item, .grooming__title, .grooming__text', {
      trigger: sectionRef.current,
    });

    const parallax = gsap.to(mediaRef.current.querySelector('img'), {
      yPercent: 12,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
    return () => parallax.scrollTrigger && parallax.scrollTrigger.kill();
  }, []);

  return (
    <section id="tosa" className="grooming container" ref={sectionRef}>
      <div className="grooming__media" ref={mediaRef}>
        <img src={IMAGE} alt="Cão sendo cuidado com atenção durante a tosa" loading="lazy" />
      </div>

      <div className="grooming__content">
        <h2 className="grooming__title">Seu pet merece esse cuidado.</h2>
        <p className="grooming__text">
          Banho, tosa e cuidados especiais realizados com paciência e
          atenção — do jeito que o seu melhor amigo merece.
        </p>

        <ul className="grooming__list">
          {groomingServices.map((item) => (
            <li className="grooming__list-item" key={item}>
              {item}
            </li>
          ))}
        </ul>

        <a
          href={brand.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
