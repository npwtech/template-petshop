import { useEffect, useRef } from 'react';
import { revealUp } from '../utils/animations.js';
import { about } from '../data/content.js';
import './Manifesto.css';

const stats = [
  { value: `${about.years}`, label: 'anos cuidando da região' },
  { value: '3.400+', label: 'pets atendidos com carinho' },
  { value: '4.9', label: 'nota média dos tutores' },
];

export default function Manifesto() {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealUp('.manifesto__text, .manifesto__stat', { trigger: sectionRef.current });
  }, []);

  return (
    <section className="manifesto container" ref={sectionRef}>
      <p className="manifesto__text">
        Acreditamos que cuidar de um pet é cuidar de alguém da família —
        por isso cada banho, cada tosa e cada produto que sai da nossa loja
        carrega a mesma atenção que a gente dedicaria ao nosso próprio animal.
      </p>

      <div className="manifesto__stats">
        {stats.map((s) => (
          <div className="manifesto__stat" key={s.label}>
            <span className="manifesto__value">{s.value}</span>
            <span className="manifesto__label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
