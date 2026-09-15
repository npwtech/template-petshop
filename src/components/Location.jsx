import { useEffect, useRef } from 'react';
import { revealUp } from '../utils/animations.js';
import { brand } from '../data/content.js';
import './Location.css';

export default function Location() {
  const sectionRef = useRef(null);

  useEffect(() => {
    revealUp('.location__info, .location__map', { trigger: sectionRef.current });
  }, []);

  const mapQuery = encodeURIComponent(`${brand.address}, ${brand.city}`);

  return (
    <section id="localizacao" className="location container" ref={sectionRef}>
      <div className="location__info">
        <h2 className="section-head__title">Venha nos visitar</h2>

        <dl className="location__details">
          <div>
            <dt>Endereço</dt>
            <dd>
              {brand.address}
              <br />
              {brand.city}
            </dd>
          </div>
          <div>
            <dt>Telefone / WhatsApp</dt>
            <dd>{brand.phone}</dd>
          </div>
          <div>
            <dt>Instagram</dt>
            <dd>{brand.instagram}</dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>
              {brand.hours.map(([day, time]) => (
                <span className="location__hour" key={day}>
                  <span>{day}</span>
                  <span>{time}</span>
                </span>
              ))}
            </dd>
          </div>
        </dl>

        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Como chegar
        </a>
      </div>

      <div className="location__map">
        <iframe
          title="Mapa de localização"
          src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
