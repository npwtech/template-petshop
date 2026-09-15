import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;
export function ensureGsap() {
  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

/** Revela um bloco de imagem "abrindo uma cortina" (clip-path) ao entrar na tela. */
export function revealMask(el, { trigger = el, start = 'top 78%' } = {}) {
  ensureGsap();
  return gsap.fromTo(
    el,
    { clipPath: 'inset(0 0 100% 0)' },
    {
      clipPath: 'inset(0 0 0% 0)',
      duration: 1.4,
      ease: 'power4.out',
      scrollTrigger: { trigger, start },
    }
  );
}

/** Sobe e esmaece elementos com leve atraso escalonado (uso comedido, não em todo card). */
export function revealUp(targets, { trigger, start = 'top 82%', stagger = 0.08 } = {}) {
  ensureGsap();
  return gsap.fromTo(
    targets,
    { y: 36, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger,
      scrollTrigger: { trigger: trigger || targets, start },
    }
  );
}

export { gsap, ScrollTrigger };
