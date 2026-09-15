import { useEffect, useRef } from 'react';
import { revealUp } from '../utils/animations.js';
import { differentiators } from '../data/content.js';
import './WhyUs.css';

export default function WhyUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealUp('.why-item', { trigger: sectionRef.current, stagger: 0.06 });
  }, []);

  return (
    <section className="why container" ref={sectionRef}>
      <div className="section-head">
        <h2 className="section-head__title">Cuidado de verdade, para quem faz parte da família.</h2>
      </div>

      <ul className="why__list">
        {differentiators.map((item) => (
          <li className="why-item" key={item.title}>
            <div className="why-item__body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <span className="why-item__mark" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </section>
  );
}
