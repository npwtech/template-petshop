import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders.js';

/**
 * Cena WebGL do hero: uma imagem em plano cheio com distorção
 * líquida reativa ao mouse (shader custom) + grão de filme.
 * Isolada em classe simples para não depender de libs extras
 * (sem react-three-fiber) — fácil de reaproveitar em outro projeto.
 */
export class HeroScene {
  constructor({ canvas, imageUrl, onReady }) {
    this.canvas = canvas;
    this.mouseTarget = new THREE.Vector2(0.5, 0.5);
    this.mouseCurrent = new THREE.Vector2(0.5, 0.5);
    this.hoverStrength = 0;
    this.hoverTarget = 0;
    this.clock = new THREE.Clock();
    this.rafId = null;
    this.lastWidth = 0;
    this.lastHeight = 0;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';

    this.uniforms = {
      uTexture: { value: null },
      uResolution: { value: new THREE.Vector2(1, 1) },
      uImageResolution: { value: new THREE.Vector2(1, 1) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uTime: { value: 0 },
      uHoverStrength: { value: 0 },
      // 0 = mostra o topo da imagem, 1 = mostra a base. Ajuste aqui para
      // reenquadrar o hero verticalmente (igual ao object-position do CSS).
      uFocusY: { value: 0.4 },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: this.uniforms,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    loader.load(imageUrl, (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.minFilter = THREE.LinearFilter;
      this.uniforms.uTexture.value = texture;
      this.uniforms.uImageResolution.value.set(
        texture.image.width,
        texture.image.height
      );
      onReady && onReady();
    });

    this.resize();
    this.animate = this.animate.bind(this);
    this.animate();

    // O tamanho em CSS do canvas pode mudar sem disparar um "resize" na
    // window (barra de endereço do celular recolhendo, layout do texto
    // reajustando, etc.) — sem isso a textura fica com a proporção errada
    // (imagem "achatada") assim que o tamanho real do canvas muda.
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.canvas);
  }

  resize() {
    const { clientWidth, clientHeight } = this.canvas;
    if (!clientWidth || !clientHeight) return;
    // Evita reagir a variações de menos de 1px que o próprio redesenho do
    // canvas pode disparar de volta no ResizeObserver, o que causava um
    // loop (a imagem alternando entre esticada e normal sem parar).
    if (clientWidth === this.lastWidth && clientHeight === this.lastHeight) return;
    this.lastWidth = clientWidth;
    this.lastHeight = clientHeight;
    this.renderer.setSize(clientWidth, clientHeight, false);
    this.uniforms.uResolution.value.set(clientWidth, clientHeight);
  }

  setMouse(x, y) {
    this.mouseTarget.set(x, y);
    this.hoverTarget = 1;
  }

  releaseMouse() {
    this.hoverTarget = 0;
  }

  animate() {
    const dt = this.clock.getDelta();
    this.uniforms.uTime.value += dt;

    this.mouseCurrent.lerp(this.mouseTarget, 0.06);
    this.uniforms.uMouse.value.copy(this.mouseCurrent);

    this.hoverStrength += (this.hoverTarget - this.hoverStrength) * 0.05;
    this.uniforms.uHoverStrength.value = this.hoverStrength;

    this.renderer.render(this.scene, this.camera);
    this.rafId = requestAnimationFrame(this.animate);
  }

  destroy() {
    cancelAnimationFrame(this.rafId);
    this.resizeObserver.disconnect();
    this.mesh.geometry.dispose();
    this.mesh.material.dispose();
    if (this.uniforms.uTexture.value) this.uniforms.uTexture.value.dispose();
    this.renderer.dispose();
  }
}
