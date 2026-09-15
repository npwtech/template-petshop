import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { HeroScene } from '../webgl/HeroScene.js';
import { heroImage, brand } from '../data/content.js';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const introRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    let scene;

    try {
      scene = new HeroScene({
        canvas,
        imageUrl: heroImage,
        onReady: () => setReady(true),
      });
      sceneRef.current = scene;
    } catch (err) {
      // fallback silencioso: se WebGL falhar, a imagem <img> de apoio
      // (ver CSS) permanece visível como pano de fundo.
      console.warn('WebGL indisponível, usando imagem estática.', err);
    }

    const handleResize = () => scene && scene.resize();
    window.addEventListener('resize', handleResize);

    const handleMove = (e) => {
      if (!scene) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      scene.setMouse(x, y);
    };
    const handleLeave = () => scene && scene.releaseMouse();

    canvas.addEventListener('pointermove', handleMove);
    canvas.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('pointermove', handleMove);
      canvas.removeEventListener('pointerleave', handleLeave);
      scene && scene.destroy();
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from('.hero__line span', {
        yPercent: 110,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.08,
      })
        .from(
          '.hero__sub, .hero__actions, .hero__meta',
          { y: 18, opacity: 0, duration: 0.8, ease: 'power3.out', stagger: 0.08 },
          '-=0.6'
        )
        .from('.hero__scroll-hint', { opacity: 0, duration: 0.6 }, '-=0.3');
    }, introRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="topo" className="hero" ref={introRef}>
      <div className="hero__stage">
        <img className="hero__fallback" src={heroImage} alt="" aria-hidden="true" />
        <canvas
          ref={canvasRef}
          className={`hero__canvas ${ready ? 'is-ready' : ''}`}
          data-cursor="grow"
        />
        <div className="hero__scrim" />
      </div>

      <p className="hero__side-label" aria-hidden="true">
        Banho · Tosa · Produtos · Cuidado
      </p>

      <div className="hero__content container">
        <h1 className="hero__title">
          <span className="hero__line">
            <span>Tudo para o seu pet,</span>
          </span>
          <span className="hero__line">
            <span className="hero__title-em">pertinho de você.</span>
          </span>
        </h1>

        <p className="hero__sub">
          Produtos, banho e tosa e cuidados diários para quem faz parte da
          sua família.
        </p>

        <div className="hero__actions">
          <a href="#servicos" className="btn btn--primary">
            Ver serviços
          </a>
          <a
            href={brand.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            Falar no WhatsApp
          </a>
        </div>

        <div className="hero__meta">
          <span>{brand.city}</span>
          <span className="hero__meta-dot" />
          <span>Aberto hoje · {brand.hours[0][1]}</span>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span>Role para explorar</span>
      </div>
    </section>
  );
}
