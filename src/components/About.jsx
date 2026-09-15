import { useEffect, useRef } from 'react';
import { revealMask, revealUp } from '../utils/animations.js';
import { about, brand } from '../data/content.js';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    revealMask(mediaRef.current, { trigger: sectionRef.current, start: 'top 70%' });
    revealUp('.about__eyebrow-text, .about__text, .about__cta', {
      trigger: sectionRef.current,
    });
  }, []);

  return (
    <section id="sobre" className="about container" ref={sectionRef}>
      <div className="about__media" ref={mediaRef}>
        <img src={about.image} alt={`Fachada e equipe do ${brand.name}`} loading="lazy" />
      </div>

      <div className="about__content">
        <h2 className="about__eyebrow-text">Mais que um pet shop. Uma família que cuida da sua.</h2>
        <p className="about__text">{about.text}</p>
        <a href="#localizacao" className="about__cta">
          Conheça nossa loja →
        </a>
      </div>
    </section>
  );
}
