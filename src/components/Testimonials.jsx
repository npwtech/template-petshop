import { useEffect, useRef, useState } from 'react';
import { revealUp } from '../utils/animations.js';
import { testimonials } from '../data/content.js';
import './Testimonials.css';

export default function Testimonials() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const dragState = useRef({ down: false, startX: 0, scrollStart: 0 });
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    revealUp('.testimonial-card', { trigger: sectionRef.current, stagger: 0.08 });
  }, []);

  const onPointerDown = (e) => {
    const track = trackRef.current;
    dragState.current = {
      down: true,
      startX: e.clientX,
      scrollStart: track.scrollLeft,
    };
    setDragging(true);
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragState.current.down) return;
    const track = trackRef.current;
    const delta = e.clientX - dragState.current.startX;
    track.scrollLeft = dragState.current.scrollStart - delta;
  };

  const endDrag = () => {
    dragState.current.down = false;
    setDragging(false);
  };

  return (
    <section id="depoimentos" className="testimonials" ref={sectionRef}>
      <div className="container">
        <div className="section-head">
          <h2 className="section-head__title">O que dizem os tutores</h2>
          <p className="section-head__text">Arraste para o lado e veja mais avaliações.</p>
        </div>
      </div>

      <div
        className={`testimonials__track ${dragging ? 'is-dragging' : ''}`}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
      >
        {testimonials.map((t) => (
          <article className="testimonial-card" key={t.name}>
            <div className="testimonial-card__stars" aria-label={`${t.rating} de 5 estrelas`}>
              {'★'.repeat(t.rating)}
            </div>
            <p>&ldquo;{t.text}&rdquo;</p>
            <footer>
              <strong>{t.name}</strong>
              <span>{t.pet}</span>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
