import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    document.body.classList.add('has-custom-cursor');
    const dot = dotRef.current;
    const ring = ringRef.current;

    const ringPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let mouseX = ringPos.x;
    let mouseY = ringPos.y;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    const ticker = gsap.ticker.add(() => {
      ringPos.x += (mouseX - ringPos.x) * 0.18;
      ringPos.y += (mouseY - ringPos.y) * 0.18;
      gsap.set(ring, { x: ringPos.x, y: ringPos.y });
    });

    const growTargets = 'a, button, [data-cursor="grow"]';
    const onEnter = (e) => {
      if (e.target.closest(growTargets)) ring.classList.add('cursor-ring--grow');
    };
    const onLeave = (e) => {
      if (e.target.closest(growTargets)) ring.classList.remove('cursor-ring--grow');
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout', onLeave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
