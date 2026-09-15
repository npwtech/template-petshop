import { useEffect, useRef } from 'react';
import { revealUp } from '../utils/animations.js';
import { gallery } from '../data/content.js';
import './Gallery.css';

export default function Gallery() {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealUp('.gallery-item', { trigger: sectionRef.current, stagger: 0.06 });
  }, []);

  return (
    <section className="gallery-section container" ref={sectionRef}>
      <div className="section-head">
        <h2 className="section-head__title">Um pouco do nosso dia a dia</h2>
      </div>

      <div className="gallery-grid">
        {gallery.map((img) => (
          <div
            key={img.src}
            className={`gallery-item ${img.big ? 'gallery-item--big' : ''}`}
            data-cursor="grow"
          >
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
