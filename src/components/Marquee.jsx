import { useEffect, useRef } from 'react';
import { gsap } from '../utils/animations.js';
import './Marquee.css';

const WORDS = ['Banho', 'Tosa', 'Produtos', 'Cuidado diário', 'Entrega'];

export default function Marquee() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const tween = gsap.to(track, {
      xPercent: -50,
      duration: 22,
      ease: 'none',
      repeat: -1,
    });
    return () => tween.kill();
  }, []);

  const items = [...WORDS, ...WORDS];

  return (
    <div className="marquee">
      <div className="marquee__track" ref={trackRef}>
        {[...items, ...items].map((word, i) => (
          <span className="marquee__item" key={i}>
            {word}
            <span className="marquee__sep">✽</span>
          </span>
        ))}
      </div>
    </div>
  );
}
